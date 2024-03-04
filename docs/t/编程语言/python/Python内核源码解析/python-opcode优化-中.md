Python 字节码优化核心技术为窥孔优化<b>（Peephole Optimization）</b>。这是一种用滑动窗口实现的局部优化手段，窗口的大小决定了每一次优化的长度，窗口不断滑动，直到遍历完所有的字节码，反复几次操作，完成全部优化工作。

执行优化手段的目的是为了减少执行指令，或者将一个或者多个指令替换为更高效的指令，从而达到提升程序执行效率的目的。

当我们知道窥孔优化<b>发生在字节码编译之后，字节码执行之前（也就是语法树生成之后）时</b>，这就更加方便我们验证字节码优化到底做了什么？我们可以尝试输出 Python 的抽象语法树（AST），打印编译之后的字节码。如果程序没有优化，语法树与字节码应该存在对应关系，至少存在语法数的每一个节点都能在字节码集合中找到对应的字节码。而优化过的字节码有可能存在字节码被优化移除，或者被替换的现象。

### 窥孔优化中常用的技术

> 1. <b>空序列</b> - 删除无用的操作  
> 2. <b>组合操作</b> - 用一项等价操作替换多项操作  
> 3. <b>代数定律</b> – 使用代数定律来简化或重新排序指令  
> 4. <b>特殊情况指令</b> – 使用为特殊操作数情况设计的指令  
> 5. <b>地址模式操作</b> – 使用地址模式来简化代码  

### 回顾

《[Python 内核源码解析：OpCode 字节码优化上](https://mp.weixin.qq.com/s/411T0kM9lv2QhRbMZCdXBg)》中简单的介绍了字节码优化的相关函数逻辑，以及如何清理无用的代码等。

### 1. 带着问题，了解窥孔优化

光阅读 Python 编译字节码的内核源码 Python/compile.c，我们很难了解字节码编译到底做了什么？什么样的 Python 代码才会触发到窥孔优化？源码文件 Lib/test/test_peepholer.py 包含了窥孔优化相关的测试用例，它用来验证字节码编译优化的正确性，我们将通过这些测试用例来推测窥孔优化做了哪些工作。

####  UNARY_NOT POP_JUMP_IF_FALSE  -->  POP_JUMP_IF_TRUE 两个指令变成一个指令

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

测试用例 test_unot 是验证两个指令 UNARY_NOT 和 POP_JUMP_IF_FALSE 替换成一个指令 POP_JUMP_IF_TRUE 的正确性。

接下来我们推测一下自己码编译优化做了哪些工作。首先符号 == 的优先级是大于 not 的，如果没有关键词 not，程序 if 判断表达式最终生成的指令是 POP_JUMP_IF_FALSE。如果前面加上 not，对 if 表达式的结果取反（UNARY_NOT），这种操作其实是有优化空间的，可以直接用 POP_JUMP_IF_TRUE 来代替  UNARY_NOT 和 POP_JUMP_IF_FALSE 这组指令。

### 2. 接下来用 Python 代码验证一下我们的推测

#### 验证 not 和 == 的优先级

毋庸置疑，not x == 2 其实就是 not (x == 2)，也就是对 (x == 2) 的值取反。

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

### 3. 生成表达式 if 的字节码（表达式中没有 not 关键字）

表达式 if 中没有 not 关键字，其生成的跳转指令为：POP_JUMP_IF_FALSE，这与我们之前的推测一致。

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

### 4. 验证组合指令 UNARY_NOT 和 POP_JUMP_IF_FALSE 优化为一个指令 POP_JUMP_IF_TRUE

加上 not 关键字之后，POP_JUMP_IF_FALSE 消失了，转而出现的是 POP_JUMP_IF_TRUE。又一次验证了我们的推测是正确的。

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

### 5. 最终确定这个优化不是发生在 AST 优化阶段

从如下 AST 输出可以看出，节点 UnaryOp 仍然存在，说明上面的优化不是在 AST 生成阶段，而是发生在字节码编译优化阶段。

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

## 总结

从上面的例子，我们通过程序各个阶段的输入与输出，推测中间部分的实现逻辑，又通过相关代码的辅助输出，一次又一次的验证了我们的推测。大的问题可以拆分为一个个小的问题来解决，最后看起来大的问题也没有那么复杂。