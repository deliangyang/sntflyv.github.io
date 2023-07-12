
上篇[Python内核源码解析：内核基础数据结构字典解析（上）](https://mp.weixin.qq.com/s/wm2mdeXYiW_xw3SNDkYHkw)，浅浅的了解一下PyDictObject，这篇文章继续深入了解PyDictObject的数据结构。

图片比文字更容易表达，所有花了点时间画了些图，更好的理解字典。

了解字典的存储能分两种情况，一种是PyDictObject的`ma_values`不为空，一种是`ma_values`为空。`ma_values`为空时，字典的数据存储在`ma_keys`中，`ma_values`不为空时，字典的数据存储在`ma_values`中。

```c
/* If ma_values is NULL, the table is "combined": keys and values
       are stored in ma_keys.

       If ma_values is not NULL, the table is split:
       keys are stored in ma_keys and values are stored in ma_values */
    PyObject **ma_values;   
```