
通过这篇文章我们初步了解了一下Python语法树的优化，《[Python内核源码解析：初步了解语法树AST优化的过程](https://mp.weixin.qq.com/s/0jSuisQc80ukNYmhXSBwRw)》。接下来我们将继续深入研究Python语法树的优化过程。

除了常量折叠优化外，Python还有其它的语法树优化手段。

### fold_binop

如果表达式的左值和右值都是常量，那么可以对表达式进行折叠优化。如 1 + 2，可以直接折叠成 3。这个操作是通过调用 PyNumber_Add 函数来实现数值的相加，那么最终的结果就是一个常量。除了加法外，还有减法、乘法、除法、位运算等操作。由于上一篇文章已经介绍了这种折叠优化，这里就不再赘述。


### make_const

新的 val 是被计算出来的一个常量，如果 val 为 NULL，这跳过。如果 val 不为空，则需要给 val 分配新的内存，将 val 赋值给 node 的 Constant.value，并将 node 的 kind（类型）设置为 Constant_kind。

make_const 在很多地方都会被调用，如 fold_binop、fold_unaryop、fold_iter、fold_compare、fold_subscr、fold_tuple 等函数中。

```c
static int
make_const(expr_ty node, PyObject *val, PyArena *arena)
{
    // Even if no new value was calculated, make_const may still
    // need to clear an error (e.g. for division by zero)
    if (val == NULL) {
        if (PyErr_ExceptionMatches(PyExc_KeyboardInterrupt)) {
            return 0;
        }
        PyErr_Clear();
        return 1;
    }
    if (_PyArena_AddPyObject(arena, val) < 0) {
        Py_DECREF(val);
        return 0;
    }
    node->kind = Constant_kind;
    node->v.Constant.kind = NULL;
    node->v.Constant.value = val;
    return 1;
}
```

### fold_unaryop

一元运算操作符的折叠优化，如 not、-、+、~ 等操作符。如果操作数不是常量，那么直接返回。否则，根据操作符的类型，调用对应的函数进行计算。如 not 操作符，调用 unary_not 函数，- 操作符，调用 PyNumber_Negative 函数，+ 操作符，调用 PyNumber_Positive 函数，~ 操作符，调用 PyNumber_Invert 函数。

```c
static int
fold_unaryop(expr_ty node, PyArena *arena, _PyASTOptimizeState *state)
{
    expr_ty arg = node->v.UnaryOp.operand;

    if (arg->kind != Constant_kind) {
        /* Fold not into comparison */
        if (node->v.UnaryOp.op == Not && arg->kind == Compare_kind &&
                asdl_seq_LEN(arg->v.Compare.ops) == 1) {
            /* Eq and NotEq are often implemented in terms of one another, so
               folding not (self == other) into self != other breaks implementation
               of !=. Detecting such cases doesn't seem worthwhile.
               Python uses </> for 'is subset'/'is superset' operations on sets.
               They don't satisfy not folding laws. */
            cmpop_ty op = asdl_seq_GET(arg->v.Compare.ops, 0);
            switch (op) {
            case Is:
                op = IsNot;
                break;
            case IsNot:
                op = Is;
                break;
            case In:
                op = NotIn;
                break;
            case NotIn:
                op = In;
                break;
            // The remaining comparison operators can't be safely inverted
            case Eq:
            case NotEq:
            case Lt:
            case LtE:
            case Gt:
            case GtE:
                op = 0; // The AST enums leave "0" free as an "unused" marker
                break;
            // No default case, so the compiler will emit a warning if new
            // comparison operators are added without being handled here
            }
            if (op) {
                asdl_seq_SET(arg->v.Compare.ops, 0, op);
                COPY_NODE(node, arg);
                return 1;
            }
        }
        return 1;
    }

    typedef PyObject *(*unary_op)(PyObject*);
    static const unary_op ops[] = {
        [Invert] = PyNumber_Invert,     // ~
        [Not] = unary_not,              // not
        [UAdd] = PyNumber_Positive,     // +
        [USub] = PyNumber_Negative,     // -
    };
    PyObject *newval = ops[node->v.UnaryOp.op](arg->v.Constant.value);
    return make_const(node, newval, arena);
}
```

Python 优化示例，按语法来说，not 1、~ 1、- 1、+ 1 都是由两个部分组成的，一个是操作符，一个是操作数。在 Python 语法树中，这些操作符都是一元操作符，操作数都是常量。在 Python 语法树优化过程中，如果操作数是常量，则可以直接计算出结果。如下所示，not 1、~ 1、- 1、+ 1 都被优化成了常量。

```py
import dis
code = """
a = not 1
b = ~ 1
c = - 1
d = + 1
"""
dis.dis(code)
```

优化后的字节码
```text
  2           0 LOAD_CONST               0 (False)
              2 STORE_NAME               0 (a)

  3           4 LOAD_CONST               1 (-2)
              6 STORE_NAME               1 (b)

  4           8 LOAD_CONST               2 (-1)
             10 STORE_NAME               2 (c)

  5          12 LOAD_CONST               3 (1)
             14 STORE_NAME               3 (d)
             16 LOAD_CONST               4 (None)
             18 RETURN_VALUE
```

### fold_iter

对于列表和集合，如果列表或集合中包含星号表达式，则直接返回。否则，将列表或集合转换成元组或冻结集合。如果转换成功，则将新的值赋值给 node 的 Constant.value，并将 node 的类型设置为 Constant_kind。

```c
static int
fold_iter(expr_ty arg, PyArena *arena, _PyASTOptimizeState *state)
{
    PyObject *newval;
    if (arg->kind == List_kind) {
        /* First change a list into tuple. */
        asdl_expr_seq *elts = arg->v.List.elts;
        Py_ssize_t n = asdl_seq_LEN(elts);
        for (Py_ssize_t i = 0; i < n; i++) {
            expr_ty e = (expr_ty)asdl_seq_GET(elts, i);
            if (e->kind == Starred_kind) {
                return 1;
            }
        }
        expr_context_ty ctx = arg->v.List.ctx;
        arg->kind = Tuple_kind;
        arg->v.Tuple.elts = elts;
        arg->v.Tuple.ctx = ctx;
        /* Try to create a constant tuple. */
        newval = make_const_tuple(elts);
    }
    else if (arg->kind == Set_kind) {
        newval = make_const_tuple(arg->v.Set.elts);
        if (newval) {
            Py_SETREF(newval, PyFrozenSet_New(newval));
        }
    }
    else {
        return 1;
    }
    return make_const(arg, newval, arena);
}
```

fold_iter 需要一定的条件才会被触发优化。

### fold_compare

对于比较操作符，如果操作符是 in 或 not in，且比较的对象是列表或集合，则将列表或集合转换成元组或冻结集合。如果转换成功，则将新的值赋值给 node 的 Constant.value，并将 node 的类型设置为 Constant_kind。

```c
static int
fold_compare(expr_ty node, PyArena *arena, _PyASTOptimizeState *state)
{
    asdl_int_seq *ops;
    asdl_expr_seq *args;
    Py_ssize_t i;

    ops = node->v.Compare.ops;
    args = node->v.Compare.comparators;
    /* TODO: optimize cases with literal arguments. */
    /* Change literal list or set in 'in' or 'not in' into
       tuple or frozenset respectively. */
    i = asdl_seq_LEN(ops) - 1;
    int op = asdl_seq_GET(ops, i);
    if (op == In || op == NotIn) {
        if (!fold_iter((expr_ty)asdl_seq_GET(args, i), arena, state)) {
            return 0;
        }
    }
    return 1;
}
```

Python 示例

```py
import dis
code = """
1 in [1, 2, 3]
"""
dis.dis(code)
```

优化后的字节码, 可以看到列表被优化成了元组，元组的值是常量。

```text
  2           0 LOAD_CONST               0 (1)
              2 LOAD_CONST               1 ((1, 2, 3))
              4 CONTAINS_OP              0
              6 RETURN_VALUE
```

### fold_subscr

对于下标操作符，如果下标操作符的上下文不是 Load，或者下标操作符的值和下标不是常量，则直接返回。否则，调用 PyObject_GetItem 函数获取新的值。如果获取成功，则将新的值赋值给 node 的 Constant.value，并将 node 的类型设置为 Constant_kind。

```c
static int
fold_subscr(expr_ty node, PyArena *arena, _PyASTOptimizeState *state)
{
    PyObject *newval;
    expr_ty arg, idx;

    arg = node->v.Subscript.value;
    idx = node->v.Subscript.slice;
    if (node->v.Subscript.ctx != Load ||
            arg->kind != Constant_kind ||
            idx->kind != Constant_kind)
    {
        return 1;
    }

    newval = PyObject_GetItem(arg->v.Constant.value, idx->v.Constant.value);
    return make_const(node, newval, arena);
}
```

### fold_tuple

对于元组，如果元组的上下文不是 Load，则直接返回。否则，调用 make_const_tuple 函数将元组转换成常量元组。如果转换成功，则将新的值赋值给 node 的 Constant.value，并将 node 的类型设置为 Constant_kind。

```c
static int
fold_tuple(expr_ty node, PyArena *arena, _PyASTOptimizeState *state)
{
    PyObject *newval;

    if (node->v.Tuple.ctx != Load)
        return 1;

    newval = make_const_tuple(node->v.Tuple.elts);
    return make_const(node, newval, arena);
}
```

## 思考

通过这篇文章，我们了解了Python语法树的优化过程。在Python语法树的优化过程中，有很多种优化手段，如常量折叠优化、一元运算操作符的折叠优化、列表和集合的折叠优化、比较操作符的折叠优化、下标操作符的折叠优化、元组的折叠优化等。这些优化手段可以有效地提高Python程序的执行效率。

实际上语法树还有很多的优化技术，如常量折叠、循环展开、循环不变量外提、循环合并、循环分裂、循环消除、循环划分、循环交换、循环展开、循环融合、循环滚动、循环剥离、循环分块、循环分解、循环分块、循环分解等等

如下简单的了解一下 Python 没有做到的优化。循环消除，循环0次毫无意义，但是 Python 却生成了很多的字节码。
```py
for i in range(0):
   print(1)
```

输出的字节码如下

```text
  2           0 LOAD_NAME                0 (range)
              2 LOAD_CONST               0 (0)
              4 CALL_FUNCTION            1
              6 GET_ITER
        >>    8 FOR_ITER                 6 (to 22)
             10 STORE_NAME               1 (i)

  3          12 LOAD_NAME                2 (print)
             14 LOAD_CONST               1 (1)
             16 CALL_FUNCTION            1
             18 POP_TOP
             20 JUMP_ABSOLUTE            4 (to 8)

  2     >>   22 LOAD_CONST               2 (None)
             24 RETURN_VALUE
```

