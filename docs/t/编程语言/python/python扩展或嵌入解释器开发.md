
## 使用C/C++ 扩展Python，实现Python模块扩展或嵌入Python解释器

Python扩展开发。是使用C/C++来编写Python模块，通过导入动态链接库，调用C/C++编写的模块  
嵌入Python解释器。在编写C/C++的程序时，通过调用Python解释器来执行Python的代码 

### 嵌入Python解释器

#### 编写Demo程序
- Py_Initialize 初始化Python解释器
- PyRun_SimpleString 执行简单的python语句，输出`hello world`
- Py_Finalize 释放或销毁解释器

```c
#include <Python.h>

int main (int argc, char *argv[])
{
    Py_Initialize();
    PyRun_SimpleString("print('hello world')");
    Py_Finalize();
    return 0;
}
```

#### 编译以及执行程序
```bash
g++ test.cpp -o test \
  -I/Library/Frameworks/Python.framework/Versions/3.7/include/python3.7m \
  -L/Library/Frameworks/Python.framework/Versions/3.7/lib/ \
  -lpython3.7m

./test
```

#### 思考
- 如何实现一个动态的执行程序？
    - 通过读取Python文件，将文件内容通过传参的方式交付给`PyRun_SimpleString`，这就回归到`C/C++`中的文件读取的问题了
    - 我们可以通过程序传参或者重定向的方式，将 `print('hello world')` 替换为我们想要执行的程序
- 是否可以实现代码热更新呢？
    - 通常情况下，我们会耗费大量的时间在编译大型的C/C++程序，如果通过动态加载Python代码的方式，达到我们想要的效果，大大地提升了我们的效率，虽然这会牺牲程序的性能。

### 开发Python内置模块
- `PyObject* add(PyObject* self, PyObject* args)` 定义一个静态的方法，返回数据结构 `PyObject*`
    - 在C Python库中，所有的数据类型都为 `PyObject*`
- `PyArg_ParseTuple` 解析函数 `add` 的传参
    - `ii` 表示传入两个 int 类型的数值
    - `s` 表示传入的一个字符串参数
    - 详细说明可以查看参考引用。[<sup>1</sup>](#refer-anchor-1)
- MyDemoMethods 为方法生命数组，定义模块方法名，绑定方法，以及方法注释等
- demomodule 定义模块，模块名称为 `demo`
- `PyMODINIT_FUNC PyInit_demo(void)` 初始化创建模块

#### 扩展模块开发
```c
// demo.cpp
#include "Python.h"

static PyObject* add(PyObject* self, PyObject* args){
    int a, b;
    if (!PyArg_ParseTuple(args, "ii", &a, &b)){
        return nullptr;
    }
    int sum = a + b;
    PyObject* ret = PyLong_FromLong(sum);
    return ret;
}

static PyMethodDef MyDemoMethods[] = {
        {"addx", add, METH_VARARGS, "add two integers"},
        {nullptr, nullptr, 0, nullptr},
};

static struct PyModuleDef demomodule = {
    PyModuleDef_HEAD_INIT,
    "demo",   /* name of module */
    NULL, /* module documentation, may be NULL */
    -1,       /* size of per-interpreter state of the module,
                 or -1 if the module keeps state in global variables. */
    MyDemoMethods
};

PyMODINIT_FUNC PyInit_demo(void){
    return PyModule_Create(&spammodule);
}
```

#### 编写python程序，调用动态库模块，执行程序
- `sys.path.append('./demo.so')` 加载动态链接库
- `demo.addx` 执行模块 `demo` 中的方法 `addx`
```py
# test.py
import sys

sys.path.append('./demo.so')

import demo


def main():
    print(demo.addx(123, 4312))


if __name__ == "__main__":
    main()
```

#### 编译以及执行程序

```bash
g++ -fpic -c \
  -I/Library/Frameworks/Python.framework/Versions/3.7/include/python3.7m \
  demo.cpp

g++ -shared -o demo.so demo.o -lstdc++ \
  -L/Library/Frameworks/Python.framework/Versions/3.7/lib/ -lpython3.7m

python test.py
# output: 4435
```

#### 思考
- 通过C/C++编写Python模块的好处良多。直接调用C/C++编写的程序大大地提升了Python应用程序的性能。

## 总结
- 无论用C/C++编写Python的模块，还是内置Python解释器，最终的解决方案都需要我们自己评估。需要从应用场景，开发成本，性能、或者效率提升等方面抉择，最终落地。
- 通过底层的学习，让我们更深入地了解Python的实现原理以及应用，在编写Python程序时候会更加注意细节。

## 资料引用

- [1] [PyArg_ParseTuple 参数解析](https://docs.python.org/zh-cn/3.7/c-api/arg.html)

