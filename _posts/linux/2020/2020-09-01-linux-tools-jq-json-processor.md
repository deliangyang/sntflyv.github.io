
> jq 一个命令行的JSON处理器

### 如何使用jq
```bash
echo '{"foo": "bar"}' | jq .
{
  "foo": "bar"
}
```
#### 获取`foo`的值
```bash
echo '{"foo": "bar"}' | jq .foo
"bar"
```
#### 从JSON中获取多个字段的值
```bash
echo '{"foo": 1, "bar": 2}' | jq '[.foo, .bar]'
[
  1,
  2
]
```
#### 使用`@tsv`生成制表符分隔值作为输出
```bash
echo '{"foo": 1, "bar": 2}{"foo": 3, "bar": 4}' | jq -r '[.foo, .bar] | @tsv'
1	2
3	4
```

#### jq选择字段包含某值的JSON
```bash
echo '{"foo": 1}{"foo":2}' | jq 'select(.foo == 1)'
{
  "foo": 1
}
```

## jq支持的功能
- 数据索引
```bash
echo '[1, 2, 3]' | jq '.[0]'
1
```

- 切片
```bash
echo '[1, 2, 3]' | jq '.[0:2]'
[
    1,
    2
]
```
- 可以实现 php 的 array_values，获取字典对象的值   
```bash
echo '{"a": 1, "b": 1}' | jq '.[]'
```
```bash
echo '{"user":"stedolan", "projects": ["jq", "wikiflow"]}' | jq  '.user, .projects[]'
```

- 实现 php 的 array_keys，获取字典对象的 key 名
```bash
echo {"abc": 1, "abcd": 2, "Foo": 3} | jq 'keys'
[
    "Foo",
    "abc",
    "abcd"
]
```

- 数学运算
```bash
echo '{"a": 7}' | jq '.a + 1'
```

## 实战

### 分析日志
从日志中获取用户 ID，请求方法，请求路径，IP 等数据，那么使用如下的命令，就可以很快的提取出你所需要的数据了。
```bash
grep -oP '{.+}' /tmp/standard-request-2020082800 | jq -r '[.user, .method, .path, .ip] | @tsv'
16239323	GET	/api/config	39.10.111.91
18712163	GET	/api/room/rankings	183.90.136.182
11230503	GET	/api/user/panel	219.192.217.116
19112230	GET	/api/user/notification	116.186.136.130
```

统计了一下，5,006,012 行日志单条命令处理时间大概 7 多钟, 大概 `11124.47 docs/s`, 速度还是相当可以的，如果使用 `split` 切分成多个文件，并行处理之后，再合并，这样速度会更快。
```
real	7m34.540s
user	7m52.144s
sys	0m24.824s
```

## 总结

1. `jq` 功能太强大了，可以通过 linux 命令翻阅手册 `man jq`，查看 jq 的用法，这里就不逐一介绍了，你能想到的都有。
2. 为什么喜欢用 jq 呢？通常处理文本的量比较大，自己写程序处理可能太慢，而且写程序需要花费不少的时间，所以能用 jq 和其它 linux 命令解决就直接写命令行了。
3. 还有用命令行处理特别的酷，代码短小精悍，处理速度快。



