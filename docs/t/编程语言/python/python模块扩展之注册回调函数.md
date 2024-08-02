
# Python 模块扩展之回调函数传参

在 C/C++ 中，Python 的数据类型皆为`PyObject* `，所有函数传参和其他的数字、字符串传参没有差异。区别在`PyArg_ParseTuple(args, "O", &callback)`的第二个参数 `O`（字母 O），数字是`i`，字符串是`s`。  

下面会举两个例子，一个是回调函数无参数的，另外一种是回调函数有参数。

## Python 回调函数无参数

`PyArg_ParseTuple`的第二个参数为`O`（字母 O），`PyObject_CallObject` 执行回调函数调用，返回结果。  
由于是无参数，所以`PyObject_CallObject`第二个参数为`NULL`。

```c
static PyObject* callback(PyObject* self, PyObject* args){
    PyObject *callback = NULL;
    PyObject *result = NULL;

    if (!PyArg_ParseTuple(args, "O", &callback)){
        return nullptr;
    }
    result = PyObject_CallObject(callback, NULL);
    Py_INCREF(result);
    return result;
}
```

## Python 回调函数有参数

如果需要传递 C/C++ 中的变量作为参数，传入值回调函数中，我们需要构造一个`PyOject *`的结构作为第二个参数传递给`PyObject_CallObject`。如下会用到`Py_BuildValue`。

`Py_BuildValue`和`PyArg_ParseTuple`的参数绑定一致，如下：`i`表示传递一个`int`类型的数值，`(i)`表示这是一个`int`类型的元祖（tuple），因为函数参数需要一个元祖（tuple）的数据结构。

```c
static PyObject* callback_with_args(PyObject* self, PyObject* args){
    PyObject *callback = NULL;
    PyObject *result = NULL;

    if (!PyArg_ParseTuple(args, "O", &callback)){
        return nullptr;
    }
    int arg = 123;
    PyObject* arg_list = Py_BuildValue("(i)", arg);
    result = PyObject_CallObject(callback, arg_list);
    Py_DECREF(arg_list);
    if (result == NULL) {
        return NULL;
    }
    Py_INCREF(result);
    return result;
}
```

## 编程 Python 程序测试
```python
import sys

sys.path.append('./callback.so')

import callback

def f():
    print(2)

def f_with_args(i):
    print(i)


def f_with_args_return(i):
    return i


def main():
    # 无参数
    callback.callback(f)
    # 回调函数有参数
    callback.callback_with_args(f_with_args)
    print(callback.callback_with_args(f_with_args_return))


if __name__ == "__main__":
    main()
```


## 构建编译及测试
```bash
g++ -fpic -c \
  -I/Library/Frameworks/Python.framework/Versions/3.7/include/python3.7m \
	callback.cpp

g++ -shared -o callback.so callback.o -lstdc++ \
  -L/Library/Frameworks/Python.framework/Versions/3.7/lib/ \
  -lpython3.7m
	
python test2.py

# output:
# 2
# 123
# 123
```

## 扩展

`dir`是 Python 的内置函数，可以帮我们输出变量中的属性以及方法列表。如下是输出`callback`模块中的属性及方法列表。

```python
pirnt(dir(callback))
# output: ['__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'callback', 'callback_with_args']
```
