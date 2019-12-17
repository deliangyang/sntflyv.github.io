### Linux神奇的shell命令

为什么推荐linux的shell，因为几百G的日志清洗工作是用shell可以高效的完成任务。  
避免写大量的代码来处理大量的日志。

### Grep文件查找

#### -P 正则匹配 perl-regexp style

#### -v 和 -o 正好相反，-v取反，不包含的行，-o这是选择匹配中的元素

#### --color, -c高亮配置的元素

#### -c 匹配的个数

#### -A after, -B before, -C after and before，显示匹配中的前几行，后几行，前后几行

#### 待补充

### sed替换

```bash
echo 123 | sed 's/2/4/g'
```

### awk

```bash
awk [-F field-separator] 'commands' input-file(s)

echo -e "a\tb\tc" | awk '{print $1}'
```

#### -F -F"\t" -F"b" 切分标志，支持正则表达式

#### commands支持条件控制

### sort

-n, -r, -k


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