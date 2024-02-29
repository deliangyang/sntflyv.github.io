Python 字节码优化技术为窥孔优化技术，这是一种用滑动窗口实现的局部优化手段，窗口的大小决定了一次优化的长度，窗口不断滑动，直到字节码结束，反复几次，完成全部优化。

执行优化手段的目的是为了减少执行指令或者替换为更高效的指令，从而达到提升程序执行效率的目的。

### 窥孔优化中常用的技术

> 1. 空序列——删除无用的操作  
> 2. 组合操作——用一项等价操作替换多项操作  
> 3. 代数定律 – 使用代数定律来简化或重新排序指令  
> 4. 特殊情况指令 – 使用为特殊操作数情况设计的指令  
> 5. 地址模式操作 – 使用地址模式来简化代码  

### 回顾

《[https://mp.weixin.qq.com/s/411T0kM9lv2QhRbMZCdXBg](https://mp.weixin.qq.com/s/411T0kM9lv2QhRbMZCdXBg)》中简单的介绍了一下字节码的优化相关函数的逻辑，以及无用代码的清理等。

### 带着问题了解窥孔优化

光看 Python 的内核代码，我们很难知道我的输入优化之后会等到什么的结果？什么样的输入才会触发到窥孔优化？源码文件 Lib/test/test_peepholer.py 包含了窥孔优化相关的测试用例，从这些例子中我们来推测窥孔优化做了什么。

####  UNARY_NOT POP_JUMP_IF_FALSE  -->  POP_JUMP_IF_TRUE

```python
    def test_unot(self):
        # UNARY_NOT POP_JUMP_IF_FALSE  -->  POP_JUMP_IF_TRUE'
        def unot(x):
            if not x == 2:
                del x
        self.assertNotInBytecode(unot, 'UNARY_NOT')
        self.assertNotInBytecode(unot, 'POP_JUMP_IF_FALSE')
        self.assertInBytecode(unot, 'POP_JUMP_IF_TRUE')
        self.check_lnotab(unot)
```

测试用例 test_unot 校验两个指令 UNARY_NOT 和 POP_JUMP_IF_FALSE 被优化成一个指令 POP_JUMP_IF_TRUE。

首先符号 == 的优先级是大于 not 的，如果没有关键词 not，程序 if 判断最终生成的指令是 POP_JUMP_IF_FALSE，如果前面加上 not，对 if 表达式的结果取反（UNARY_NOT），这种操作其实是有优化空间的，可以直接用 POP_JUMP_IF_TRUE 来代替  UNARY_NOT 和 POP_JUMP_IF_FALSE 这个组合指令。

接下来我们用一组带代码来验证一下我们的推测。

#### 验证 not 和 == 的优先级

```python
>>> not 2 == 2
False
>>> not 1 == False
True
>>> not 1
False
>>> not True == False
True
```

### 验证没有 not 的 if 表达式生成的字节码

```python
>>> import dis
>>> def test_if_false(x):
    if x == 2:
        del x... ...
...
>>> dis.dis(test_if_false.__code__)
  2           0 LOAD_FAST                0 (x)
              2 LOAD_CONST               1 (2)
              4 COMPARE_OP               2 (==)
              6 POP_JUMP_IF_FALSE       10

  3           8 DELETE_FAST              0 (x)
        >>   10 LOAD_CONST               0 (None)
             12 RETURN_VALUE
```

### 验证组合指令 UNARY_NOT POP_JUMP_IF_FALSE  被优化为一个指令 POP_JUMP_IF_TRUE

```python
>>> def unot(x):
            if not x == 2:
                del x... ...
...
>>> import dis
>>> dis.dis(unot.__code__)
  2           0 LOAD_FAST                0 (x)
              2 LOAD_CONST               1 (2)
              4 COMPARE_OP               2 (==)
              6 POP_JUMP_IF_TRUE        10

  3           8 DELETE_FAST              0 (x)
        >>   10 LOAD_CONST               0 (None)
             12 RETURN_VALUE
```

#### 仍需要验证一下是否是 AST 阶段优化的

从如下 AST 输出可以看出，节点 UnaryOp 仍然保留，说明指令的优化不是在 AST 阶段，而是字节码优化阶段。

```py
>>> import ast
>>> 
>>> code = """\
... def unot(x):
...     if not x == 2:
...         del x
... """
>>> print(ast.dump(ast.parse(code, mode='exec'), indent=4))
Module(
    body=[
        FunctionDef(
            name='unot',
            args=arguments(
                posonlyargs=[],
                args=[
                    arg(arg='x')],
                kwonlyargs=[],
                kw_defaults=[],
                defaults=[]),
            body=[
                If(
                    test=UnaryOp(
                        op=Not(),
                        operand=Compare(
                            left=Name(id='x', ctx=Load()),
                            ops=[
                                Eq()],
                            comparators=[
                                Constant(value=2)])),
                    body=[
                        Delete(
                            targets=[
                                Name(id='x', ctx=Del())])],
                    orelse=[])],
            decorator_list=[])],
    type_ignores=[])
>>> 
```

### 回到内核源码

```c
static int
unaryop(unaryop_ty op)
{
    switch (op) {
    case Invert:
        return UNARY_INVERT;
    case Not:
        return UNARY_NOT;
    case UAdd:
        return UNARY_POSITIVE;
    case USub:
        return UNARY_NEGATIVE;
    default:
        PyErr_Format(PyExc_SystemError,
            "unary op %d should not be possible", op);
        return 0;
    }
}
```