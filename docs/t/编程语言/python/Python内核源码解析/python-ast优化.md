代码优化分为前端优化和后端优化。前端优化是指在源代码层面进行优化，例如语法树优化、中间代码优化等。后端优化是指在目标代码层面进行优化，例如机器码优化等。

Python AST 语法树优化的实现在文件 Python/ast_opt.c 中，主要是通过调用 PyAST_Optimize 函数来实现。PyAST_Optimize 函数的实现如下：

```c
int
_PyAST_Optimize(mod_ty mod, PyArena *arena, _PyASTOptimizeState *state)
{
    PyThreadState *tstate;
    int recursion_limit = Py_GetRecursionLimit();
    int starting_recursion_depth;

    /* Setup recursion depth check counters */
    tstate = _PyThreadState_GET();
    if (!tstate) {
        return 0;
    }
    /* Be careful here to prevent overflow. */
    starting_recursion_depth = (tstate->recursion_depth < INT_MAX / COMPILER_STACK_FRAME_SCALE) ?
        tstate->recursion_depth * COMPILER_STACK_FRAME_SCALE : tstate->recursion_depth;
    state->recursion_depth = starting_recursion_depth;
    state->recursion_limit = (recursion_limit < INT_MAX / COMPILER_STACK_FRAME_SCALE) ?
        recursion_limit * COMPILER_STACK_FRAME_SCALE : recursion_limit;

    int ret = astfold_mod(mod, arena, state);
    assert(ret || PyErr_Occurred());

    /* Check that the recursion depth counting balanced correctly */
    if (ret && state->recursion_depth != starting_recursion_depth) {
        PyErr_Format(PyExc_SystemError,
            "AST optimizer recursion depth mismatch (before=%d, after=%d)",
            starting_recursion_depth, state->recursion_depth);
        return 0;
    }

    return ret;
}
```

`astfold_mod` 函数是 AST 优化的核心函数，对body，stmt，expr等节点进行优化。其实现如下：

```c
static int
astfold_mod(mod_ty node_, PyArena *ctx_, _PyASTOptimizeState *state)
{
    switch (node_->kind) {
    case Module_kind:
        CALL(astfold_body, asdl_seq, node_->v.Module.body);
        break;
    case Interactive_kind:
        CALL_SEQ(astfold_stmt, stmt, node_->v.Interactive.body);
        break;
    case Expression_kind:
        CALL(astfold_expr, expr_ty, node_->v.Expression.body);
        break;
    // The following top level nodes don't participate in constant folding
    case FunctionType_kind:
        break;
    // No default case, so the compiler will emit a warning if new top level
    // compilation nodes are added without being handled here
    }
    return 1;
}
```

如果语法树节点的类型是 Module_kind，那么调用 astfold_body 函数。如果语法树的类型是 Interactive_kind，那么调用 astfold_stmt 函数。如果语法树的类型是 Expression_kind，那么调用 astfold_expr 函数。


语法树的优化是通过将语法树的节点进行折叠（折叠无效，累赘，重复，可编译时计算的节点），从而减少语法树的节点，最终达到减少执行指令的目的。

### astfold_body body代码块折叠优化

```c
static int
astfold_body(asdl_stmt_seq *stmts, PyArena *ctx_, _PyASTOptimizeState *state)
{
    int docstring = _PyAST_GetDocString(stmts) != NULL;
    CALL_SEQ(astfold_stmt, stmt, stmts);
    if (!docstring && _PyAST_GetDocString(stmts) != NULL) {
        stmt_ty st = (stmt_ty)asdl_seq_GET(stmts, 0);
        asdl_expr_seq *values = _Py_asdl_expr_seq_new(1, ctx_);
        if (!values) {
            return 0;
        }
        asdl_seq_SET(values, 0, st->v.Expr.value);
        expr_ty expr = _PyAST_JoinedStr(values, st->lineno, st->col_offset,
                                        st->end_lineno, st->end_col_offset,
                                        ctx_);
        if (!expr) {
            return 0;
        }
        st->v.Expr.value = expr;
    }
    return 1;
}
```


`astfold_body` 函数的作用是对语法树的 body 进行优化，如果 body 中包含 docstring，那么调用 _PyAST_GetDocString 函数获取 docstring；然后调用 astfold_stmt 函数对 body 进行优化；最后，如果 body 中包含 docstring，那么调用 _PyAST_JoinedStr 函数对 docstring 进行优化。

body里面的每一个节点都会调用 astfold_stmt 函数进行优化。这是一个递归的过程，直到所有的节点都被优化。

### astfold_stmt 语句折叠优化

```c
static int
astfold_stmt(stmt_ty node_, PyArena *ctx_, _PyASTOptimizeState *state)
{
    if (++state->recursion_depth > state->recursion_limit) {
        PyErr_SetString(PyExc_RecursionError,
                        "maximum recursion depth exceeded during compilation");
        return 0;
    }
    switch (node_->kind) {
    case FunctionDef_kind:
        CALL(astfold_arguments, arguments_ty, node_->v.FunctionDef.args);
        CALL(astfold_body, asdl_seq, node_->v.FunctionDef.body);
        CALL_SEQ(astfold_expr, expr, node_->v.FunctionDef.decorator_list);
        if (!(state->ff_features & CO_FUTURE_ANNOTATIONS)) {
            CALL_OPT(astfold_expr, expr_ty, node_->v.FunctionDef.returns);
        }
        break;
        // ...
    }
}
```

`astfold_stmt` 函数的作用是对语法树的 stmt 进行优化，如果 stmt 的类型是 FunctionDef_kind，那么调用 astfold_arguments 函数对 args 进行优化，调用 astfold_body 函数对 body 进行优化，调用 astfold_expr 函数对 decorator_list 进行优化，如果没有 CO_FUTURE_ANNOTATIONS，那么调用 astfold_expr 函数对 returns 进行优化。

stmt 的优化是通过节点类型的数据结构进行逐步优化，这也是一个递归的过程，直到所有的节点都被优化。例如 if 包含 test, body, orelse 三个节点，test是一个表达式，而body和orelse是一个语句序列（stmt），所以需要分别调用 astfold_expr 和 astfold_stmt 函数进行优化。

```c
case If_kind:
    CALL(astfold_expr, expr_ty, node_->v.If.test);
    CALL_SEQ(astfold_stmt, stmt, node_->v.If.body);
    CALL_SEQ(astfold_stmt, stmt, node_->v.If.orelse);
    break;
```

### astfold_expr 表达式折叠优化

```c
static int
astfold_expr(expr_ty node_, PyArena *ctx_, _PyASTOptimizeState *state)
{
    if (++state->recursion_depth > state->recursion_limit) {
        PyErr_SetString(PyExc_RecursionError,
                        "maximum recursion depth exceeded during compilation");
        return 0;
    }
    switch (node_->kind) {
    case BoolOp_kind:   // bool
        CALL_SEQ(astfold_expr, expr, node_->v.BoolOp.values);
        break;
    case BinOp_kind: // bin?
        CALL(astfold_expr, expr_ty, node_->v.BinOp.left);
        CALL(astfold_expr, expr_ty, node_->v.BinOp.right);
        CALL(fold_binop, expr_ty, node_);
        break;
    // ...
    }
}
```

`astfold_expr` 函数的作用是对语法树的 expr（表达式）进行优化，如果 expr 的类型是 BinOp_kind，那么调用 astfold_expr 函数对 left 和 right 进行优化，然后调用 fold_binop 函数对 expr 进行优化。astfold_expr 是一个递归的操作（我们可以不用关心这里的递归），最终调用 fold_binop 函数对 expr 进行优化。


### 简单了解一下 fold_binop 的实现

```c
static int
fold_binop(expr_ty node, PyArena *arena, _PyASTOptimizeState *state)
{
    expr_ty lhs, rhs;
    lhs = node->v.BinOp.left;
    rhs = node->v.BinOp.right;
    if (lhs->kind != Constant_kind || rhs->kind != Constant_kind) {
        return 1;
    }

    PyObject *lv = lhs->v.Constant.value;
    PyObject *rv = rhs->v.Constant.value;
    PyObject *newval = NULL;

    switch (node->v.BinOp.op) {
    case Add:
        newval = PyNumber_Add(lv, rv);
        break;
        // ... 其他操作符
    }
}
```

fold_binop 是对表达式的优化，如果表达式的左右节点都是常量，那么就可以对表达式进行折叠优化。如 1 + 2，可以直接折叠成 3。这个操作是通过调用 PyNumber_Add 函数来实现数值的相加，那么最终的结果就是一个常量。

接下来我们验证这个优化，可以通过 dis 模块来查看 Python 代码的字节码。

```py
import dis
code = """
a = 1 + 2
"""
dis.dis(code)
```

可以看到 1 + 2 被优化成了 3。调用 a 变成了 LOAD_CONST，将3加载到栈中，然后调用 STORE_NAME 将 3 存储到 a 中。输出字节码如下：
```text
  2           0 LOAD_CONST               0 (3)
              2 STORE_NAME               0 (a)
              4 LOAD_CONST               1 (None)
              6 RETURN_VALUE
```

### 总结

1. 语法树的优化是通过将语法树中的节点进行折叠，从而减少语法树的节点数，最终达到减少执行指令的步骤。这样可以提高 Python 代码的执行效率。
2. 优化的是一个递归的过程，直到所有的节点都被优化。
3. 语法树优化的最小单元是表达式。