收到一个需求需要去掉一个 PHP 项目中所有代码的注释，心想这不就几个正则表达式就可以解决。于是打开 VS Code，在左侧替换栏输入如下两个个正则表达式进行替换。

```bash
/\*[\w\W]+\*/
//[^\n]+
```

项目中
```bash
find . -name "*.php" |wc -l
# 15655
```

需要处理的文件太多，在替换过程中直接导出 VS Code 崩溃退出。

### 用 golang 写个程序遍历目录，执行正则替换

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