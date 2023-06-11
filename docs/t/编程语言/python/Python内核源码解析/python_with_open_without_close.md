
## 背景
感觉上一篇文章写的不够详细，就开了个头，让人有点云里雾里，所以这篇文章就来详细的分析一下`with open() as f:`这个语句的执行过程，为什么with打开文件不再需要调用close关闭文件。

[python中使用with操作文件，为什么不需要手动关闭？](https://mp.weixin.qq.com/s/cyNJ0-fvGqb7wTJ9jOWbyg)

如下是一个简单的例子，打开一个文件text.txt，pass（空语句，为了保持程序的完整性，不做任何事情，仅占位），然后程序结束。

```python
with open('test.txt', 'r') as f:
    pass
```

## 使用dis模块查看字节码
使用dis模块，打印输出上面的代码的字节码，字节码如下。类似汇编指令。

```bash
python3.10 -m dis a.py

  2           0 LOAD_NAME                0 (open)
              2 LOAD_CONST               0 ('test.txt')
              4 LOAD_CONST               1 ('r')
              6 CALL_FUNCTION            2
              8 SETUP_WITH               9 (to 28)
             10 STORE_NAME               1 (f)

  3          12 POP_BLOCK

  2          14 LOAD_CONST               2 (None)
             16 DUP_TOP
             18 DUP_TOP
             20 CALL_FUNCTION            3
             22 POP_TOP
             24 LOAD_CONST               2 (None)
             26 RETURN_VALUE
        >>   28 WITH_EXCEPT_START
             30 POP_JUMP_IF_TRUE        17 (to 34)
             32 RERAISE                  1
        >>   34 POP_TOP
             36 POP_TOP
             38 POP_TOP
             40 POP_EXCEPT
             42 POP_TOP
             44 LOAD_CONST               2 (None)
             46 RETURN_VALUE
```

第一个列2，3表示行数，第二列表示字节码的偏移量，第三列表示字节码的操作码，第四列表示操作码的参数，第五列表示操作码的参数的含义。
Python3.7和Python3.10的字节码有些不同。

Python3.7的相关字节码是：`SETUP_WITH`，`WITH_CLEANUP_START`，`WITH_CLEANUP_FINISH`。

而Python3.10的相关字节码是：`SETUP_WITH`，`WITH_EXCEPT_START`，`POP_JUMP_IF_TRUE`，`RERAISE`，`POP_EXCEPT`。显然Python3.10的字节码更加复杂，也更加灵活。

## 分析字节码相关的内核源码

打开Python内核源码，搜索`SETUP_WITH`，找到`Python/ceval.c`文件，如下。

```c
    case TARGET(SETUP_WITH): {
        _Py_IDENTIFIER(__enter__);
        _Py_IDENTIFIER(__exit__);
        PyObject *mgr = TOP();   // 获取栈顶元素
        PyObject *enter = special_lookup(tstate, mgr, &PyId___enter__); // 查找__enter__方法
        PyObject *res;
        if (enter == NULL) {
            goto error;
        }
        PyObject *exit = special_lookup(tstate, mgr, &PyId___exit__);   // 查找__exit__方法
        if (exit == NULL) {
            Py_DECREF(enter);
            goto error;
        }
        SET_TOP(exit);  // 将__exit__方法设置为栈顶元素
        Py_DECREF(mgr);
        res = _PyObject_CallNoArg(enter);   // 调用__enter__方法
        Py_DECREF(enter);
        if (res == NULL)
            goto error;
        /* Setup the finally block before pushing the result
            of __enter__ on the stack. */
        PyFrame_BlockSetup(f, SETUP_FINALLY, INSTR_OFFSET() + oparg,
                            STACK_LEVEL()); // 设置finally块

        PUSH(res);
        DISPATCH();
    }
```

`SETUP_WITH`的作用是：将`with`语句中的`as`后面的对象的`__enter__`方法的返回值压入栈顶，然后设置`finally`块，最后跳转到`WITH_EXCEPT_START`。

接下来看看`WITH_EXCEPT_START`的实现，如下：
```c
    case TARGET(WITH_EXCEPT_START): {
        /* At the top of the stack are 7 values:
            - (TOP, SECOND, THIRD) = exc_info()
            - (FOURTH, FIFTH, SIXTH) = previous exception for EXCEPT_HANDLER
            - SEVENTH: the context.__exit__ bound method
            We call SEVENTH(TOP, SECOND, THIRD).
            Then we push again the TOP exception and the __exit__
            return value.
        */
        PyObject *exit_func;
        // exit_func是__exit__方法，参数是：exc是异常对象，val是异常值，tb是异常的traceback
        PyObject *exc, *val, *tb, *res;     

        exc = TOP();    // 获取栈顶元素
        val = SECOND(); // 获取第二个元素
        tb = THIRD();  // 获取第三个元素
        assert(!Py_IsNone(exc));
        assert(!PyLong_Check(exc));
        exit_func = PEEK(7);    // 获取第7个元素
        PyObject *stack[4] = {NULL, exc, val, tb};
        res = PyObject_Vectorcall(exit_func, stack + 1,
                3 | PY_VECTORCALL_ARGUMENTS_OFFSET, NULL);  // 调用__exit__方法
        if (res == NULL)
            goto error; // 调用__exit__方法失败，跳转到error

        PUSH(res);
        DISPATCH();
    }
```

`POP_JUMP_IF_TRUE`指令代码如下，如果栈顶元素为真，则跳转到指定的位置，否则继续执行下一条指令。
```c
    case TARGET(POP_JUMP_IF_TRUE): {
        PREDICTED(POP_JUMP_IF_TRUE);
        PyObject *cond = POP();     // 获取栈顶元素，也就是条件
        int err;
        if (Py_IsFalse(cond)) {     // 如果条件为假，则不跳转
            Py_DECREF(cond);
            DISPATCH();
        }
        if (Py_IsTrue(cond)) {      // 如果条件为真，则跳转到指定位置
            Py_DECREF(cond);
            JUMPTO(oparg);          // 跳转到指定位置, oparg是指定位置的偏移量
            CHECK_EVAL_BREAKER();
            DISPATCH();
        }
        err = PyObject_IsTrue(cond);    // 如果条件不是真也不是假，则调用PyObject_IsTrue方法
        Py_DECREF(cond);
        if (err > 0) {
            JUMPTO(oparg);          // 跳转到指定位置, oparg是指定位置的偏移量
            CHECK_EVAL_BREAKER();   // 检查是否需要中断
        }
        else if (err == 0)
            ;
        else
            goto error;
        DISPATCH();
    }
```

为什么会出现既不是真，也不是假的情况，这里就不详细介绍了，感兴趣的可以关注我的公众号，后续会有相关文章介绍。相关代码如下：
```c
/* Py_False and Py_True are the only two bools in existence.
Don't forget to apply Py_INCREF() when returning either!!! */

/* Don't use these directly */
PyAPI_DATA(struct _longobject) _Py_FalseStruct;
PyAPI_DATA(struct _longobject) _Py_TrueStruct;

/* Use these macros */
#define Py_False ((PyObject *) &_Py_FalseStruct)
#define Py_True ((PyObject *) &_Py_TrueStruct)

// Test if an object is the True singleton, the same as "x is True" in Python.
PyAPI_FUNC(int) Py_IsTrue(PyObject *x);
#define Py_IsTrue(x) Py_Is((x), Py_True)

// Test if an object is the False singleton, the same as "x is False" in Python.
PyAPI_FUNC(int) Py_IsFalse(PyObject *x);
#define Py_IsFalse(x) Py_Is((x), Py_False)
```


`RERAISE`指令代码如下，看起来没有那么复杂，其实就是将异常对象，异常值，异常的traceback重新设置到系统中，然后跳转到`exception_unwind`，最后执行`POP_EXCEPT`。
```c
  case TARGET(RERAISE): {
        assert(f->f_iblock > 0);
        if (oparg) {
            f->f_lasti = f->f_blockstack[f->f_iblock-1].b_handler;
        }
        PyObject *exc = POP();
        PyObject *val = POP();
        PyObject *tb = POP();
        assert(PyExceptionClass_Check(exc));
        _PyErr_Restore(tstate, exc, val, tb);
        goto exception_unwind;
    }
```

## 总结

1. `with`语句的实现原理是：先调用`__enter__`方法，然后执行`with`语句块，最后调用`__exit__`方法。
2. `with`语句的实现原理是通过`SETUP_WITH`指令和`WITH_EXCEPT_START`指令来实现的。
3. open函数已经帮我实现了`__enter__`和`__exit__`方法，所以我们可以直接使用`with`语句来打开文件，作用域结束后，文件会自动关闭。

---

<i>本人热衷于编程语言底层实现原理。通过一些空闲时间阅读源码，记录自己的所学及心得。你的关注和鼓励是对我持续输出分享的动力，感谢，共同进步。</i>

![公众号](../../../../../assets/gzh.png)