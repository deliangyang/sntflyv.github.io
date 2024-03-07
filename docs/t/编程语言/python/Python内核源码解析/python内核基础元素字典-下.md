
上篇[Python 内核源码解析：内核基础数据结构字典解析（上）](https://mp.weixin.qq.com/s/wm2mdeXYiW_xw3SNDkYHkw)，浅浅的介绍了一下 PyDictObject。接下来来我们将深入的了解 dict 的实现。

字典的存储能分两种，通过 PyDictObject 的`ma_values`是否为空来区分。`ma_values`为空时，字典的数据存储在`ma_keys`中，`ma_values`不为空时，字典的数据存储在`ma_values`中。

ma_values 为空，字典是"combined"，keys 和 values 都存储在 ma_keys 中。ma_values 不为空，表是字典是"split"，keys 存储在 ma_keys 中，values 存储在 ma_values 中。

## 那 ma_values 什么时候为空，什么是否不为空呢？

官方解释[PEP 412 – Key-Sharing Dictionary](https://peps.python.org/pep-0412/#split-table-dictionaries)，大意如下：

### 组合表  
- 显式字典（dict() 或 {}）、模块字典和大多数其他字典都是以组合表字典的形式创建的。  
- 组合表字典永远不会变成拆分表字典。组合表的布局方式与旧字典中的表基本相同，因此性能也非常相似。  
### 拆分表  
- 当创建字典以填充对象的 __dict__ 插槽时，它们是以拆分形式创建的。键值表缓存在类型中，可能允许一个类实例的所有属性字典共享键值。如果这些字典的键开始出现分歧，单个字典将懒散地转换为组合表形式。这确保了在常见情况下内存的良好使用，以及在所有情况下的正确性。  
- 调整拆分字典的大小时，会将其转换为组合表。如果调整大小是存储实例属性的结果，并且只有一个类的实例，那么字典将立即重新拆分。由于大多数 OO 代码都会在 __init__ 方法中设置属性，因此在创建第二个实例之前，所有属性都已设置完毕，无需再调整大小，因为所有后续的实例字典都将具有正确的大小。对于更复杂的使用模式，我们不可能知道什么是最好的方法，因此在实现过程中允许额外的插入，直到调整大小恢复到组合表（非共享键）时为止。  
- 从拆分字典中删除值不会改变键表，它只是从值数组中删除值。  

```c
/* If ma_values is NULL, the table is "combined": keys and values
    are stored in ma_keys.

    If ma_values is not NULL, the table is split:
    keys are stored in ma_keys and values are stored in ma_values */
PyObject **ma_values;   
```


## 字典在 Python 中的使用方法

```py
import dis

code = """\
d = {}
d['a'] = 1
for k, v in d.items():
    print(k, v)

for k in d.keys():
    print(k)

del d['a']

print(compile(code, '<string>', 'exec').co_consts)
eval(compile(code, '<string>', 'exec'))
"""

dis.dis(code)
```


### 字节码输出如下

```text
  1           0 BUILD_MAP                0
              2 STORE_NAME               0 (d)

  2           4 LOAD_CONST               0 (1)
              6 LOAD_NAME                0 (d)
              8 LOAD_CONST               1 ('a')
             10 STORE_SUBSCR

  3          12 LOAD_NAME                0 (d)
             14 LOAD_METHOD              1 (items)
             16 CALL_METHOD              0
             18 GET_ITER
        >>   20 FOR_ITER                 9 (to 40)
             22 UNPACK_SEQUENCE          2
             24 STORE_NAME               2 (k)
             26 STORE_NAME               3 (v)

  4          28 LOAD_NAME                4 (print)
             30 LOAD_NAME                2 (k)
             32 LOAD_NAME                3 (v)
             34 CALL_FUNCTION            2
             36 POP_TOP
             38 JUMP_ABSOLUTE           10 (to 20)

  6     >>   40 LOAD_NAME                0 (d)
             42 LOAD_METHOD              5 (keys)
             44 CALL_METHOD              0
             46 GET_ITER
        >>   48 FOR_ITER                 6 (to 62)
             50 STORE_NAME               2 (k)

  7          52 LOAD_NAME                4 (print)
             54 LOAD_NAME                2 (k)
             56 CALL_FUNCTION            1
             58 POP_TOP
             60 JUMP_ABSOLUTE           24 (to 48)

  9     >>   62 LOAD_NAME                0 (d)
             64 LOAD_CONST               1 ('a')
             66 DELETE_SUBSCR
             68 LOAD_CONST               2 (None)
             70 RETURN_VALUE
```

### dir(dict) 列出 dict 的所有属性及方法

Python Lib 中定义的导出方法可以在`Objects/dictobject.c`中找到，如下：

```text
['__class__', '__class_getitem__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__ior__', '__iter__', '__le__', '__len__', '__lt__', '__ne__', '__new__', '__or__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__ror__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'clear', 'copy', 'fromkeys', 'get', 'items', 'keys', 'pop', 'popitem', 'setdefault', 'update', 'values']
```

PyMethodDef 有四个字段，分别是 ml_name、ml_meth、ml_flags、ml_doc。ml_name 是方法名，ml_meth 是方法的实现函数，ml_flags 是方法的标志，包含函数的参数个数，ml_doc 是方法的文档。METH_NOARGS 表示没有参数，METH_O 表示一个参数，METH_VARARGS 表示可变参数，METH_KEYWORDS 表示关键字参数。

通过定义 PyMethodDef 结构体，将方法名、实现函数、标志、文档等信息组合在一起，然后将 PyMethodDef 结构体放入 PyTypeObject 结构体中，这样就可以通过 dir(dict) 列出 dict 的所有属性及方法。dict 可以理解为通过 C 语言扩展了一个 Python 的内置库。

```c

struct PyMethodDef {
    const char  *ml_name;   /* The name of the built-in function/method */
    PyCFunction ml_meth;    /* The C function that implements it */
    int         ml_flags;   /* Combination of METH_xxx flags, which mostly
                               describe the args expected by the C func */
    const char  *ml_doc;    /* The __doc__ attribute, or NULL */
};

static PyMethodDef mapp_methods[] = {
    DICT___CONTAINS___METHODDEF
    {"__getitem__", (PyCFunction)(void(*)(void))dict_subscript,        METH_O | METH_COEXIST,
     getitem__doc__},
    {"__sizeof__",      (PyCFunction)(void(*)(void))dict_sizeof,       METH_NOARGS,
     sizeof__doc__},
    DICT_GET_METHODDEF
    DICT_SETDEFAULT_METHODDEF
    DICT_POP_METHODDEF
    DICT_POPITEM_METHODDEF
    {"keys",            dictkeys_new,                   METH_NOARGS,
    keys__doc__},
    {"items",           dictitems_new,                  METH_NOARGS,
    items__doc__},
    {"values",          dictvalues_new,                 METH_NOARGS,
    values__doc__},
    {"update",          (PyCFunction)(void(*)(void))dict_update, METH_VARARGS | METH_KEYWORDS,
     update__doc__},
    DICT_FROMKEYS_METHODDEF
    {"clear",           (PyCFunction)dict_clear,        METH_NOARGS,
     clear__doc__},
    {"copy",            (PyCFunction)dict_copy,         METH_NOARGS,
     copy__doc__},
    DICT___REVERSED___METHODDEF
    {"__class_getitem__", (PyCFunction)Py_GenericAlias, METH_O|METH_CLASS, PyDoc_STR("See PEP 585")},
    {NULL,              NULL}   /* sentinel */
};
```

### dict 相关操作码的实现

TOP()，SECOND()，THIRD()，POP() 等宏定义在`Include/ceval.h`中。这几个宏的作用是对栈中元素进行操作，`POP()`是弹出栈顶元素，`TOP()`是获取栈顶元素，`SECOND()`是获取栈顶第二个元素，`THIRD()`是获取栈顶第三个元素。

```c

case TARGET(BUILD_MAP): {
    Py_ssize_t i;
    PyObject *map = _PyDict_NewPresized((Py_ssize_t)oparg); // 创建字典
    if (map == NULL)
        goto error;
    for (i = oparg; i > 0; i--) {
        int err;
        PyObject *key = PEEK(2*i);          // 从栈中弹出键
        PyObject *value = PEEK(2*i - 1);    // 从栈中弹出值
        err = PyDict_SetItem(map, key, value);      // 将键值对放入字典
        if (err != 0) {
            Py_DECREF(map);
            goto error;
        }
    }

    while (oparg--) {
        Py_DECREF(POP());
        Py_DECREF(POP());
    }
    PUSH(map);                  // 将字典放入栈中
    DISPATCH();
}

case TARGET(BUILD_CONST_KEY_MAP): {     // 构建常量键映射
    Py_ssize_t i;
    PyObject *map;
    PyObject *keys = TOP();
    if (!PyTuple_CheckExact(keys) ||
        PyTuple_GET_SIZE(keys) != (Py_ssize_t)oparg) {
        _PyErr_SetString(tstate, PyExc_SystemError,
                            "bad BUILD_CONST_KEY_MAP keys argument");
        goto error;
    }
    map = _PyDict_NewPresized((Py_ssize_t)oparg);
    if (map == NULL) {
        goto error;
    }
    for (i = oparg; i > 0; i--) {
        int err;
        PyObject *key = PyTuple_GET_ITEM(keys, oparg - i);
        PyObject *value = PEEK(i + 1);
        err = PyDict_SetItem(map, key, value);
        if (err != 0) {
            Py_DECREF(map);
            goto error;
        }
    }

    Py_DECREF(POP());
    while (oparg--) {
        Py_DECREF(POP());
    }
    PUSH(map);
    DISPATCH();
}

case TARGET(STORE_SUBSCR): {            // 存储
    PyObject *sub = TOP();
    PyObject *container = SECOND();
    PyObject *v = THIRD();
    int err;
    STACK_SHRINK(3);
    /* container[sub] = v */
    err = PyObject_SetItem(container, sub, v);
    Py_DECREF(v);
    Py_DECREF(container);
    Py_DECREF(sub);
    if (err != 0)
        goto error;
    DISPATCH();
}

case TARGET(DELETE_SUBSCR): {       // 删除
    PyObject *sub = TOP();
    PyObject *container = SECOND();
    int err;
    STACK_SHRINK(2);
    /* del container[sub] */
    err = PyObject_DelItem(container, sub);
    Py_DECREF(container);
    Py_DECREF(sub);
    if (err != 0)
        goto error;
    DISPATCH();
}
```

## 总结

1. 字典相关的操作码的作用是执行简单的操作，如创建字典、存储、删除等。`BUILD_MAP`操作码是创建字典，`STORE_SUBSCR`操作码是存储，`DELETE_SUBSCR`操作码是删除。Python 将复杂的代码分解成简单的操作码，然后由解释器执行。可以理解为这是一个动态规划的过程，将复杂的问题分解成很多简单的问题，然后逐步解决。
2. dict 是 Python 内置库 C 扩展的实现，通过隐藏一些底层的实现细节，提供了一些高级的操作接口，如`keys`、`items`、`values`等。
3. 字典不是 Python 的独有数据结构，它能提供高效的键值查找，是 Python 中非常重要的数据结构之一。