
字典在各类高级语言中都是一种非常重要的数据结构，它的存在便利了数据查找的过程，使得查找的时间复杂度降低到了 O(1)。在 Python 中，字典的实现是基于哈希表的，本文将从 Python 内核的角度来分析字典的实现。

## 字典的数据结构

```c
struct _dictkeysobject {
    Py_ssize_t dk_refcnt; // 引用计数
    Py_ssize_t dk_size; // 哈希表的大小，必须是 2 的幂
    dict_lookup_func dk_lookup; // 查找函数
    Py_ssize_t dk_usable; // 可用的条目数
    Py_ssize_t dk_nentries; // 已使用的条目数
    char dk_indices[];  // 索引数组
};

typedef struct _dictkeysobject PyDictKeysObject;

typedef struct {
    PyObject_HEAD
    Py_ssize_t ma_used;     // 该字典中的项数
    uint64_t ma_version_tag;    // 字典版本：全局唯一，每次修改字典时值都会改变
    PyDictKeysObject *ma_keys;  // 字典键
    PyObject **ma_values;   // 字典值
} PyDictObject;
```

## 字典的几个操作

### 创建字典

字典初始化会创建一个空的字典，其键和值都是空的。`dk_lookup`指向`lookdict_split`函数，该函数用于查找字典中的键值对。

`dk_indices`存储了键值对的索引，当查找失败时，会返回`DKIX_EMPTY`，表示该位置为空，可以插入键值对。当查找成功时，会返回键值对的索引，可以直接获取到值。

```c
PyObject *
PyDict_New(void)
{
    dictkeys_incref(Py_EMPTY_KEYS);
    return new_dict(Py_EMPTY_KEYS, empty_values);
}

#define Py_EMPTY_KEYS &empty_keys_struct

// 空的键值对
static PyDictKeysObject empty_keys_struct = {
        1, /* dk_refcnt */
        1, /* dk_size */
        lookdict_split, /* dk_lookup */
        0, /* dk_usable (immutable) */
        0, /* dk_nentries */
        {DKIX_EMPTY, DKIX_EMPTY, DKIX_EMPTY, DKIX_EMPTY,
         DKIX_EMPTY, DKIX_EMPTY, DKIX_EMPTY, DKIX_EMPTY}, /* dk_indices */
};
```

### 根据 key 查找字典
调用`dk_lookup`函数查找字典中的键值对，赋值 value，返回索引。
```c
PyObject *
PyDict_GetItem(PyObject *op, PyObject *key)
{
    if (!PyDict_Check(op)) {
        return NULL;
    }
    PyDictObject *mp = (PyDictObject *)op;
    ...
    PyObject *value;
    ...
    ix = (mp->ma_keys->dk_lookup)(mp, key, hash, &value);
    ...
    if (ix < 0) {
        return NULL;
    }
    return value;
}
```

### 插入 key-value

生成 hash code，判断`mp->ma_keys`是否为空，如果为空，调用`insert_to_emptydict`函数插入键值对，否则调用`insertdict`函数插入键值对。

```c
int
PyDict_SetItem(PyObject *op, PyObject *key, PyObject *value)
{
    PyDictObject *mp;
    Py_hash_t hash;
    ...
    mp = (PyDictObject *)op;
    if (!PyUnicode_CheckExact(key) ||
        (hash = ((PyASCIIObject *) key)->hash) == -1)
    {
        hash = PyObject_Hash(key);
        if (hash == -1)
            return -1;
    }
      // 如果字典为空，调用 insert_to_emptydict 函数插入键值对
    if (mp->ma_keys == Py_EMPTY_KEYS) {
        return insert_to_emptydict(mp, key, hash, value);
    }
    /* insertdict() handles any resizing that might be necessary */
    return insertdict(mp, key, hash, value);
}
```

### 删除 key-value

删除一个 key-value，首先需要查找到该 key-value 的索引，然后判断是否需要合并，合并之后，重新查找索引，最后调用`delitem_common`函数删除 key-value。

```c
int
PyDict_DelItem(PyObject *op, PyObject *key)
{
    Py_hash_t hash;
    ...
    return _PyDict_DelItem_KnownHash(op, key, hash);
}

// 判断是否需要合并，其实就是判断 ma_values 不为空
#define _PyDict_HasSplitTable(d) ((d)->ma_values != NULL)

int
_PyDict_DelItem_KnownHash(PyObject *op, PyObject *key, Py_hash_t hash)
{
    Py_ssize_t ix;
    PyDictObject *mp;
    PyObject *old_value;

    ...
    mp = (PyDictObject *)op;
    ix = (mp->ma_keys->dk_lookup)(mp, key, hash, &old_value);
    if (ix == DKIX_ERROR)
        return -1;
    if (ix == DKIX_EMPTY || old_value == NULL) {
        _PyErr_SetKeyError(key);
        return -1;
    }
    // 分表不允许删除，所以需要合并
    if (_PyDict_HasSplitTable(mp)) {
        if (dictresize(mp, DK_SIZE(mp->ma_keys))) {
            return -1;
        }
        ix = (mp->ma_keys->dk_lookup)(mp, key, hash, &old_value);
        assert(ix >= 0);
    }
    // 删除
    return delitem_common(mp, hash, ix, old_value);
}
```

### 字典的扩容

字典看起来比较复杂，其实就是一个数组，数组的每个元素是一个键值对，当数组的元素个数超过数组的大小时，就需要扩容。

oldkeys 是旧的键值对数组，newkeys 是新的键值对数组，oldvalues 是旧的值数组，newvalues 是新的值数组，oldentries 是旧的键值对，newentries 是新的键值对。


```c
static int
dictresize(PyDictObject *mp, Py_ssize_t newsize)
{
    Py_ssize_t numentries;
    PyDictKeysObject *oldkeys;
    PyObject **oldvalues;
    PyDictKeyEntry *oldentries, *newentries;

    /* Allocate a new table. */
    mp->ma_keys = new_keys_object(newsize);
    ...
     if (oldvalues != NULL) {
        /* Convert split table into new combined table.
         * We must incref keys; we can transfer values.
         * Note that values of split table is always dense.
         */
        for (Py_ssize_t i = 0; i < numentries; i++) {
            assert(oldvalues[i] != NULL);
            PyDictKeyEntry *ep = &oldentries[i];
            PyObject *key = ep->me_key;
            Py_INCREF(key);
            newentries[i].me_key = key;
            newentries[i].me_hash = ep->me_hash;
            newentries[i].me_value = oldvalues[i];
        }
     } else {
      if (oldkeys->dk_nentries == numentries) {
            memcpy(newentries, oldentries, numentries * sizeof(PyDictKeyEntry));
        }
        else {
            PyDictKeyEntry *ep = oldentries;
            for (Py_ssize_t i = 0; i < numentries; i++) {
                while (ep->me_value == NULL)
                    ep++;
                newentries[i] = *ep++;
            }
        }
     }
    ... 
    build_indices(mp->ma_keys, newentries, numentries);
    mp->ma_keys->dk_usable -= numentries;
    mp->ma_keys->dk_nentries = numentries;

    return 0;
}

```

### 字典的遍历

Python 字典源码的遍历方法有两种，一种是`PyDict_Next`，一种是`PyDict_NextKey`。需要找到 entry_ptr，然后将 pkey，pvalue 指向 entry_ptr 的 me_key 和 me_value。
   
   
我之前在这篇文章[Python 扩展开发，C/C++ 实现字典遍历以及构造](https://mp.weixin.qq.com/s/BKZh-q14P71-wE17IFFSTA)，也介绍了一种方法。

```c
int
PyDict_Next(PyObject *op, Py_ssize_t *ppos, PyObject **pkey, PyObject **pvalue)
{
    return _PyDict_Next(op, ppos, pkey, pvalue, NULL);
}

int
_PyDict_Next(PyObject *op, Py_ssize_t *ppos, PyObject **pkey,
             PyObject **pvalue, Py_hash_t *phash)
{
    PyDictKeyEntry *entry_ptr;
    ...
    i = *ppos;
    if (mp->ma_values) {
        if (i < 0 || i >= mp->ma_used)
            return 0;
        /* values of split table is always dense */
        entry_ptr = &DK_ENTRIES(mp->ma_keys)[i];
        value = mp->ma_values[i];
        assert(value != NULL);
    }
    else {
        Py_ssize_t n = mp->ma_keys->dk_nentries;
        if (i < 0 || i >= n)
            return 0;
        entry_ptr = &DK_ENTRIES(mp->ma_keys)[i];
        while (i < n && entry_ptr->me_value == NULL) {
            entry_ptr++;
            i++;
        }
        if (i >= n)
            return 0;
        value = entry_ptr->me_value;
    }
    *ppos = i+1;
    if (pkey)
        *pkey = entry_ptr->me_key;
    if (phash)
        *phash = entry_ptr->me_hash;
    if (pvalue)
        *pvalue = value;
    return 1;
}
```


### 字典的清空

字典为空时，直接返回，如果 oldvalues 不为空，就遍历 oldvalues，将每个值都置为 NULL，然后释放 oldvalues，最后释放 oldkeys。如果 oldvalues 为空，就直接释放 oldkeys。

```c
void
PyDict_Clear(PyObject *op)
{
    mp = ((PyDictObject *)op);
    oldkeys = mp->ma_keys;
    oldvalues = mp->ma_values;
    if (oldvalues == empty_values)
        return;

    /* ...then clear the keys and values */
    if (oldvalues != NULL) {
        n = oldkeys->dk_nentries;
        for (i = 0; i < n; i++)
            Py_CLEAR(oldvalues[i]);
        free_values(oldvalues);
        dictkeys_decref(oldkeys);
    }
    else {
       assert(oldkeys->dk_refcnt == 1);
       dictkeys_decref(oldkeys);
    }
}
```

### hash 碰撞、冲突

常见的解决冲突的方法有：开放寻址法、再哈希法、链地址法、公共溢出区法、建立一个公共溢出区。

Python 中采用的是开放寻址法，即当发生冲突时，就去寻找下一个空的散列地址，只要散列表足够大，空的散列地址总能找到，并将记录存入。

## 总结

这里只是简单介绍了 Python 字典的实现，还有很多细节没有介绍。字典这个数据结构比较重要的点是：散列函数、散列冲突、扩容、缩容、遍历、清空等。字典的存在，使得 Python 的查找速度大大提高，但是也会带来一些额外的开销，比如内存占用、插入删除的开销等。

下一篇文章我会再深入的介绍一下 Python 的字典，敬请期待。


<i>本人非计算机专业自学成为一名程序员，已工作八年，有丰富的摸索、自学经验。热衷于编程语言底层实现原理。通过一些空闲时间阅读源码，记录自己的所学及心得。你的关注和鼓励是对我持续输出分享的动力，感谢，共同进步。喜欢就关注一下😍。</i>

![公众号](https://blog.sourcedev.cc/assets/gzh.23b8078c.png)