## Linux下grep的常用参数，助力日常开发

grep 是 liunx 下的一个命令行工具，可以通过正则模式搜索文件，或者通过管道匹配标准输入。grep 的参数分为4大类，可以通过`grep --help`或者`man grep`查看所有的参数，如下是官方介绍。

>   grep  searches  for PATTERNS in each FILE.  PATTERNS is one or more patterns separated by newline characters,
       and grep prints each line that matches a pattern.  Typically PATTERNS should be quoted when grep is used in a
       shell command.

       A  FILE  of  "-"  stands  for  standard  input.   If no FILE is given, recursive searches examine the working
       directory, and nonrecursive searches read standard input.

       In addition, the variant programs egrep and fgrep are the same as grep -E and grep -F,  respectively.   These
       variants are deprecated, but are provided for backward compatibility.

下面就让我们了解一下这四大类中比较常用的参数

### 测试案例文件内容
```bash
phantom:~ ydl$ cat a.txt
[master 9f69e31] docs: add post 2020-12-15
 1 file changed, 192 insertions(+)
 create mode 100644 _posts/linux/2020/2020-12-15-simple-command-in-curl.md
Counting objects: 6, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 2.97 KiB | 2.97 MiB/s, done.
Total 6 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:deliangyang/sntflyv.github.io.git
   1600d5e..9f69e31  master -> master
```

### 正则表达式分隔，以及匹配模式的选择

- -E 或 --extended-regexp 将样式为延伸的正则表达式来使用。
- -F 或 --fixed-regexp 将样式视为固定字符串的列表。
- -G 或 --basic-regexp 将样式视为普通的表示法来使用。
- -P 或 --perl-regexp 可以让grep使用perl的正则表达式语法，因为perl的正则更加多元化，能实现更加复杂的场景。

正则风格有四种，个人比较喜欢`Perl regular expressions`，像PHP中`preg_match`、`preg_replace`等函数用到的正则表达式。这里就不详细的介绍正则表达式了。

> phantom:~ ydl$ cat a.txt  |grep -P '2.\d+ MiB/s'  
> Writing objects: 100% (6/6), 2.97 KiB | `2.97 MiB/s`, done.

### -i --ignore-case 查找时不区分大小写
默认情况下是 `--no-ignore-case` 查找时区分大小写
> phantom:~ ydl$ cat a.txt  |grep -P '2.\d+ Mi`b`/s' `-i`  
> Writing objects: 100% (6/6), 2.97 KiB | `2.97 MiB/s`, done.

### 输出控制


#### -o --only-matching 只显示匹配的内容
```bash
phantom:~ ydl$ cat a.txt  | grep -oP '2.\d+ MiB/s'
2.97 MiB/s
```

#### -r --recursive 递归目录查找
```bash
# 递归当前目录，查找当前目录所有包含text的文件内容
grep -r test .
# 选出文本中的test
grep -oaPr test .
```
#### --include=GLOB/--exclude=GLOB 包含的文件和不包含的文件
```bash
# 查找当前目录下的所有文件中的内容，且包含a.txt这个文件
grep -oP '2.\d+ MiB/s' --include=a.txt *
# 不包含a.txt这个文件进行查找
grep -oP '2.\d+ MiB/s' --exclude=a.txt *
```

#### -a, --text 把二进制文件当做text文本进行查找

### 上下文控制
#### -B, --before-context=NUM  输出命中内容及之前的行数
```bash
Delta compression using up to 4 threads.
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 2.97 KiB | 2.97 MiB/s, done.
```
#### -A, --after-context=NUM 输出命中内容及以下的行数
```
Writing objects: 100% (6/6), 2.97 KiB | 2.97 MiB/s, done.
Total 6 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
```
#### -C, --context=NUM 输出命中内容上下各行数
```bash
phantom:~ ydl$ cat a.txt  |grep '2.97 MiB/s' -C 2
Delta compression using up to 4 threads.
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 2.97 KiB | 2.97 MiB/s, done.
Total 6 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
```

#### --color 高亮显示，'always', 'never', or 'auto'

```bash
# 默认选择高亮，
phantom:~ ydl$ cat a.txt | grep -P '2.\d+ MiB/s' --color
Writing objects: 100% (6/6), 2.97 KiB | 2.97 MiB/s, done.
# never 不高亮，auto和always会高亮匹配中的文本
phantom:~ ydl$ cat a.txt | grep -P '2.\d+ MiB/s' --color=never
Writing objects: 100% (6/6), 2.97 KiB | 2.97 MiB/s, done.
```

### 五花八门的一些命令

#### -v 反选，就是输出匹配内容以外的信息

查找文本中不包含`2.\d+`内容的行
```bash
phantom:~ ydl$ cat a.txt  |grep -P '2.\d+' -v
 1 file changed, 192 insertions(+)
Counting objects: 6, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (6/6), done.
Total 6 (delta 2), reused 0 (delta 0)
To github.com:deliangyang/sntflyv.github.io.git
   1600d5e..9f69e31  master -> master
```

### 总结
1. 通常情况下用的比较多的参数是 `-oP` 或 `-vP`，正则选中或者正则反选输出
2. grep结合正则表达式方便我们可以很快的在大文件或者目录中查找我们想要的信息
3. grep更多的参数信息可以通过`man grep`，翻阅手册获取
4. 作为程序员，怎么高效怎么来，当我们拿到需求的时候，过滤查找日志等信息是，第一时间不是写代码，而是想想这个需求是否可以通过grep来处理。