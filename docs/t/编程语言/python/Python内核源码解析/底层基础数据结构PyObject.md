Python内核中最常见的数据结构就是PyObject，它也是最重要的数据结构，Python数据类型最底层的数据结构，int、string、float、boolean、list、set、hash等都是基于这个数据结构来扩展的。PyObject是定长对象，PyVarObject是变长对象。

```c
/* Nothing is actually declared to be a PyObject, but every pointer to
 * a Python object can be cast to a PyObject*.  This is inheritance built
 * by hand.  Similarly every pointer to a variable-size Python object can,
 * in addition, be cast to PyVarObject*.
 */
typedef struct _object {
    _PyObject_HEAD_EXTRA
    Py_ssize_t ob_refcnt;
    PyTypeObject *ob_type;
} PyObject;

typedef struct {
    PyObject ob_base;
    Py_ssize_t ob_size; /* Number of items in variable part */
} PyVarObject;
```

这篇文章主要是为了引入PyObject，至于Python数据结构的底层实现不做详解解析，后面会针对每一种数据结构做详细的分析。

PyObject的数据结构可以在内核源码`Include/cpython/object.h`中找到。

PyObject是一个双向链表结构，`_PyObject_HEAD_EXTRA`定义了next和prev指针。ob_refcnt为引用计数器，调用一次引用计数器加一，使用完计数器减一，为0后所占用的内存块会被释放。

```c
/* PyTypeObject structure is defined in cpython/object.h.
   In Py_LIMITED_API, PyTypeObject is an opaque structure. */
typedef struct _typeobject PyTypeObject;

// If this structure is modified, Doc/includes/typestruct.h should be updated
// as well.
struct _typeobject {
    PyObject_VAR_HEAD
    const char *tp_name; /* For printing, in format "<module>.<name>" */
    Py_ssize_t tp_basicsize, tp_itemsize; /* For allocation */ 
    ... 
};

/* PyObject_VAR_HEAD defines the initial segment of all variable-size
 * container objects.  These end with a declaration of an array with 1
 * element, but enough space is malloc'ed so that the array actually
 * has room for ob_size elements.  Note that ob_size is an element count,
 * not necessarily a byte count.
 */
#define PyObject_VAR_HEAD      PyVarObject ob_base;
```

`_typeobject`中的`PyObject_VAR_HEAD`是一个变长对象，相比PyObject多了一个ob_size，表示变长部分的元素个数。

还有些字段对于不同的数据类型有其不同的作用，这里不展开分析。

编程语言离不开算法和数据结构，数据结构尤为重要，好的数据结构设计让我们的开发工作事半功倍，好的数据结构可以让算法的实现变得简单，也可以让算法的效率变得更高。Python内核中的数据结构设计的非常好，这也是Python能够快速发展的一个重要原因。

<i>本人热衷于编程语言底层实现原理。通过一些空闲时间阅读源码，记录自己的所学及心得。你的关注和鼓励是对我持续输出分享的动力，感谢，共同进步。</i>

![公众号](image/gzh.png)