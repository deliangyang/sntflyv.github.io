### Linux 神奇的 shell 命令

为什么推荐 linux 的 shell，是因为在工作中使用 shell 清洗几百 G 的日志，可以很高效的完成，  
可以少些很多的代码。

### Grep 文件查找

#### -P 正则匹配 perl-regexp style

#### -v 和 -o 正好相反，-v 取反，不包含的行，-o 这是选择匹配中的元素

#### --color, -c 高亮配置的元素

#### -c 匹配的个数

#### -A after, -B before, -C after and before，显示匹配中的前几行，后几行，前后几行

#### 待补充

### sed 替换

```bash
echo 123 | sed 's/2/4/g'
```

### awk

```bash
awk [-F field-separator] 'commands' input-file(s)

echo -e "a\tb\tc" | awk '{print $1}'
```

#### -F -F"\t" -F"b" 切分标志，支持正则表达式

#### commands 支持条件控制

### sort

-n, -r, -k

### 如何逐行读取

```bash
cat test.txt | while read LINE; do
    echo ${LINE}
done
```

### jq  Command-line JSON processor

```bash
cat 1.json | jq '.'
# prety print
{
  "test": "xxxx",
  "bb": [
    {
      "ccccc": 2
    }
  ]
}

cat 1.json | jq '.test'
# xxxx

cat 1.json | jq '.bb[0].ccccc'
# 2

```


### Demo

```bash
#!/usr/bin/env bash

for f in $(ls request-*); do
	echo ${f}
	gunzip -c ${f} > request.log
	grep '/api/room/singers' request.log | grep '\[\]\t{[^}]+}' -Po | sed 's/\[\]\t//g' >> singer.log
	:> request.log
done

grep -P '(wangsu|rtmp)' callback.log |grep  -Po '{.+\[\]' | sed 's/ \[\] \[\]//g' > callback.json.log

grep MIC_SINGER_CHANGED im.log | grep -Po '{.+\[\]' | sed 's/ \[\]//g' > im.json.log
```