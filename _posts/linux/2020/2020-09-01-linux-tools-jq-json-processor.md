
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
- 可以实现php的array_values，获取字典对象的值
```bash
echo '{"a": 1, "b": 1}' | jq '.[]'
```
```bash
echo '{"user":"stedolan", "projects": ["jq", "wikiflow"]}' | jq  '.user, .projects[]'
```
- 实现php的array_keys，获取字典对象的key名
```
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

## 总结

1. `jq`功能太强大了，可以通过linux命令翻阅手册`man jq`，查看jq的用法，这里就不逐一介绍了，你能想到的都有。
2. 为什么喜欢用jq？通常处理文本的量比较大，自己写程序去处理达不到处理速度的要求，而且写程序需要花费不少的时间，所以能用jq和其它linux命令解决就直接写命令行了。




