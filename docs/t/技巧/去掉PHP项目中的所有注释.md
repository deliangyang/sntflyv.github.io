
## 背景

收到一个需求，去掉一个 PHP 项目中所有的代码注释。心想太简单了，这不就几个正则表达式解决的事情嘛。

于是打开 VS Code，在左侧搜索替换栏，输入如下两个正则表达式，依次进行替换。

```bash
/\*[\w\W]+\*/
//[^\n]+
```

## 碰壁，把数据规模想简单了

VS Code 扫描文件，一个文件一个文件进行替换，当处理还剩 2000 个文件没有处理的时候，VS Code 崩溃退出了。难道是文件太多了？用命令 `find . -name "*.php" |wc -l`，统计 PHP 文件的数量，15000 多个文件，确实有点多。VS Code 替换项目中的文件不是遍历一个文件，替换一个文件，而是遍历完所有文件后，一次性替换所有的匹配内容。我猜这是为了<b>保证替换的一致性，要么全部替换成功，要么全部替换失败</b>。

## 不断尝试

### 编辑器替换失败后，写个程序来处理

接下来，用 golang 写了一个程序。遍历目录下所有的 PHP 文件，读取文件内容，执行正则表达式替换内容，最后覆写到对应的文件中。程序执行超快，几秒钟就替换完全。

但是，我发现结果并不是我想要的，如字符串中出现了 `$a = "aa /** 你好啊 */"`，也会被替换掉，这个结果并没有达到我们的预期。

```go
package main

import (
	"flag"
	"io/fs"
	"os"
	"path/filepath"
	"regexp"
)

var (
	multipleLineReg = regexp.MustCompile(`/\*[\w\W]+\*/`)
	singleLineReg   = regexp.MustCompile(`//[^\n]+`)
)

var dir string

func init() {
	flag.StringVar(&dir, "dir", "", "the directory to remove comment")
	flag.Parse()
}

func main() {
	walkDir(dir)
}

func walkDir(path string) {
	filepath.WalkDir(path, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.IsDir() {
			return nil
		} else if filepath.Ext(path) != ".php" {
			return nil
		}
		removeCommentFromFile(path)
		return nil
	})
}

func removeCommentFromFile(path string) {
	data, err := os.ReadFile(path)
	if err != nil {
		return
	}
	content := string(data)
	content = removeComment(content)

	file, err := os.OpenFile(path, os.O_WRONLY|os.O_TRUNC, 0666)
	if err != nil {
		return
	}
	defer file.Close()
	file.WriteString(content)
}

func removeComment(content string) string {
	content = multipleLineReg.ReplaceAllString(content, "")
	content = singleLineReg.ReplaceAllString(content, "")

	return content
}
```

### 从语言的词法分析入手，移除注释相关的 token

PHP 提供了函数 [token_get_all](https://www.php.net/manual/en/function.token-get-all.php)，<b>Split given source into PHP tokens (将源码切分为 PHP 的 tokens)</b>。参数是 PHP 源码文本，返回一个 token 数组，我们遍历这个数组，如果发现元素为字符串，追加到初始化的变量 $result 后面，如果这个 token 为 T_COMMENT 或者 T_DOC_COMMENT，则跳过，否则将 token 对应的文本追加到 $result 后面，最后将 $result 覆写到对应的文件中。

```php
<?php

if ($argc != 2) {
    usage();
}

$dir = $argv[1];

function usage() {
    echo "Usage: php " . basename(__FILE__) . " <dir>\n";
    exit(1);
}

function trim_comments($src) {
    $tokens = token_get_all($src);
    $result = '';
    foreach ($tokens as $token) {
        if (is_string($token)) {
            $result .= $token;
        } else {
            list($id, $text) = $token;
            switch ($id) {
                case T_COMMENT:
                case T_DOC_COMMENT:
                    break;
                default:
                    $result .= $text;
            }
        }
    }
    return $result;
}

$objects = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir));
foreach ($objects as $k => $object) {
    $filename = $object->getPath() . DIRECTORY_SEPARATOR . $object->getFileName();
    if ($object->isFile() && preg_match('#\.php$#', $filename)) {
        $data = file_get_contents($filename);
        $data = trim_comments($data);
        file_put_contents($filename, $data);
    }
}
```

## 总结

<b>正则表达式虽然强大，并不是万能的</b>。上面这种场景下，正则表达式显得过于暴力。清除注释，涉及到了 PHP 的语法，我们应该从编程语言的词法分析开始，删掉注释相关的 token，然后重新生成代码。