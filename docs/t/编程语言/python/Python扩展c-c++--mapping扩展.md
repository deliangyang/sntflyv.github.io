字典遍历在 Python 中十分的常见，那么在 C/C++ 开发扩展的过程中，如何实现字典的遍历呢？接下来的实验会让我们更加清晰的了解字典遍历的底层开发。

## 编写程序遍历字典

我们会在 C/C++ 开发的扩展中实现一个遍历字典的函数，函数的参数为字典，无返回值。程序中重要的部分我都标注了注释，方便大家阅读。

开发过程依旧是创建一个函数，并将函数绑定到 `demoModule` 模块上。函数内部实现相当清晰，首先是通过 `PyMapping_Items` 获取字典，如果结果为 `NULL`，则直接返回空，这里参数一定要注意一下，如果传入的参数不为 hash 结构，如传入的参数为 list 时，程序会抛出如下错误 `AttributeError: 'list' object has no attribute 'items'`。接下来就是获取结构为元祖`(key, value)`的数组长度，循环遍历，得到对应所有的值。当然我们也可以使用 `PyArg_ParseTuple` 解析元祖，s 表示字符串，i 表示一个 int 类型的数值，依次输出结果。

如下程序不够严谨，没有对参数做严格的数据类型校验。其实 `PyArg_ParseTuple` 的第二个参数我们可以稍做调整就可以对参数类型做数据校验了，这里将 `O` 替换为 `O!`，并通过第三个参数限定数据类型为字典类型 `PyDict_Type`，如果不是字典类型，程序会抛出 `TypeError` 的异常，`TypeError: argument 1 must be dict, not list`。

> 将一个 Python 对象存入一个 C 指针。和 O 类似，但是需要两个 C 参数：第一个是 Python 类型对象的地址，第二个是存储对象指针的 C 变量 ( PyObject* 变量) 的地址。如果 Python 对象类型不对，会抛出 TypeError 异常。  

```c
// hash_print.cpp
#include "Python.h"
#include <stdio.h>

static PyObject *hash_print(PyObject *self, PyObject *args) {
    PyObject *map_item;
    // if (!PyArg_ParseTuple(args, "O!", &PyDict_Type, &map_item)) {
    if (!PyArg_ParseTuple(args, "O", &map_item)) {
        return NULL;
    }
    // 将字典解析为一个元祖为 (key, value) 的数组
    PyObject *items = PyMapping_Items(map_item);
    if (items == NULL) {
        return NULL;
    }
    PyObject *item = NULL;
    // 获取字典的长度
    int l = PyMapping_Length(items);
    const char *key;
    int value;
    for (int i = 0; i < l; i++) {
        // 从数组中索引元素
        item = PySequence_GetItem(items, i);
        // 打印元素
        PyObject_Print(item, stdout, Py_PRINT_RAW);
        // 解析元祖，s 表示字符串，i 表示一个 int 类型的数值
        if (!PyArg_ParseTuple(item, "si", &key, &value)){
            return nullptr;
        }
        printf("\nkey: %s, value: %d\n", key, value);
        Py_DECREF(item);
    }
    Py_DECREF(items);
    return Py_BuildValue("");
}


static PyMethodDef MyDemoMethods[] = {
        {"hash_print", hash_print, METH_VARARGS, "hash print"},
        {nullptr,      nullptr, 0,               nullptr},
};

static struct PyModuleDef demoModule = {
        PyModuleDef_HEAD_INIT,
        "demo",   /* name of module */
        NULL, /* module documentation, may be NULL */
        -1,       /* size of per-interpreter state of the module,
                 or -1 if the module keeps state in global variables. */
        MyDemoMethods
};

// 初始化模块
PyMODINIT_FUNC PyInit_demo(void) {
    return PyModule_Create(&demoModule);
}
```

## 编写测试程序测试

第一段函数调用，传入的参数为一个字典，遍历字典打印 `key` 和 `value`。

第二段程序调用，传入的参数为一个 `list`，错误的数据类型，期待程序抛出 `TypeError` 的异常。

```python
import demo

if __name__ == '__main__':
    demo.hash_print({'2': 333, 'd': 3333, 'x': 3})
    demo.hash_print([2, 3])
```

### 输出结果

从结果来看符合我们的预期，第一个 `hash_print` 遍历字典打印出我们需要数据，而且函数调用我们故意传入一个错误的数据类型，抛出错误。
```
('2', 333)
key: 2, value: 333
('d', 3333)
key: d, value: 3333
('x', 3)
key: x, value: 3
Traceback (most recent call last):
  File "run.py", line 5, in <module>
    demo.hash_print([2, 3])
TypeError: argument 1 must be dict, not list
```

## 在 C/C++ 中返回一个字典

调用 `PyDict_New` 构建一个字典，通过 `PyDict_SetItemString` 往 `hash` 中添加键值对，编译模块之后，导入模块测试 `import demo`，打印输出结果 `print(demo.return_hash())`。

如下构造字典的方式主要在复杂场景下使用，如果我们知道返回的结果是什么的结构，可以通过这样的方式构建返回值 `Py_BuildValue("{s:i,s:i}", "abc", 123, "def", 456)`，函数输出的结果为 `{'abc': 123, 'def': 456}`。

```c
static PyObject *return_hash(PyObject *self, PyObject *args) {
    // 创建一个字典对象
    PyObject *hash = PyDict_New();
    // 设置数值，这里可以增加 PyDict_SetItemString 的返回值判断，如果为 NULL 表示字典键值对添加失败
    PyDict_SetItemString(hash, "name", Py_BuildValue("s", "ok"));
    PyDict_SetItemString(hash, "gender", Py_BuildValue("s", "male"));
    PyDict_SetItemString(hash, "age", Py_BuildValue("i", 20));
    return hash;
}
```

## 总结

C/C++ 扩展 Python 模块，遍历字典其实就是参数的解析，然后获取字典的长度，然后遍历元祖数组，拿到键值对元祖，返回 hash 对象相对简单些，单纯的数据拼接。

涉及到函数就必须要了解函数的传参解析 `(PyArg_ParseTuple)`，以及返回值的构造 `(Py_BuildValue)`。