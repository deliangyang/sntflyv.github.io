
## mpas 类型

|类型名称 | 解释|
|:----:|:----:|
|BPF_MAP_TYPE_ARRAY|   |
|BPF_MAP_TYPE_PERCPU_ARRAY|   |
|BPF_MAP_TYPE_BLOOM_FILTER|   |
|BPF_MAP_TYPE_CGROUP_STORAGE|   |
|BPF_MAP_TYPE_CGRP_STORAGE|   |
|BPF_MAP_TYPE_CPUMAP|   |
|BPF_MAP_TYPE_DEVMAP|   |
|BPF_MAP_TYPE_DEVMAP_HASH|   |
|BPF_MAP_TYPE_HASH|  哈希表映射，用于保存 key/value 对 |
|BPF_MAP_TYPE_PERCPU_HASH|   |
|BPF_MAP_TYPE_LRU_HASH| 哈希表，拥有 LRU 功能  |
|BPF_MAP_TYPE_LPM_TRIE|   |
|BPF_MAP_TYPE_ARRAY_OF_MAPS|   | 
|BPF_MAP_TYPE_HASH_OF_MAPS|   |
|BPF_MAP_TYPE_QUEUE|   | 
|BPF_MAP_TYPE_STACK| 调用栈跟踪映射，用于存储调试栈信息  |
|BPF_MAP_TYPE_SK_STORAGE|   |
|BPF_MAP_TYPE_SOCKMAP|  套接字映射，用于存储套接字引用，特别是用于套接字的重定向 | 
|BPF_MAP_TYPE_SOCKHASH|   |
|BPF_MAP_TYPE_XSKMAP|   |

## 定义一个 maps
```c
struct {
    __uint(type, BPF_MAP_TYPE_ARRAY);
    __type(key, u32);
    __type(value, long);
    __uint(max_entries, 256);
} my_map SEC(".mpas");
```

## 相关函数

- bpf_map_lookup_elem(&my_map, &index) 从 map 中查找一个元素
- __sync_fetch_and_add(value, 1) 原子自增 1
- bpf_map_update_elem（&my_map, &index, &value, BPF_ANY) 更新数值
- long bpf_map_delete_elem(struct bpf_map *map, const void *key) 删除元素


## 遍历 maps

- 遍历 maps 有点意思，起到关键的就是 `next_key`
  - bpf_map_get_next_key 通过一个`null key`获取 next_key，指针取地址
  - bpf_map_lookup_elem 查找元素
  - 将 next_key 赋值给当前 key。
- 用起来其它的语言方便
```c
#include <bpf/libbpf.h>
#include <bpf/bpf.h>

static void walk_hash_elements(int map_fd)
{
    struct key *cur_key = NULL;
    struct key next_key;
    struct value value;
    int err;

    for (;;) {
        err = bpf_map_get_next_key(map_fd, cur_key, &next_key);
        if (err)
                break;
        bpf_map_lookup_elem(map_fd, &next_key, &value);
        // Use key and value here
        cur_key = &next_key;
    }
}
```

## 参考
- [https://docs.kernel.org/bpf/map_array.html](https://docs.kernel.org/bpf/map_array.html)