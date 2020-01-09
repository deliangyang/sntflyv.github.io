
## 对比两个数据库差异

### 背景

有两个环境，数据库结构差不多，但是有一个库的字段明显要多些，要一一排查其实是一件很痛苦的事情。

### 思路

导出最新的那个数据库，然后生成所有的`alter`语句，```try...catch```捕获异常，正常的能够写进去。


### 脚本
```php
<?php

$content = file_get_contents('sql');

$table = '';
$lines = explode("\n", $content);
$mysql = new \mysqli('127.0.0.1', 'xxx', 'xxx', 'xxxx');
foreach ($lines as $line) {
    if (preg_match('#CREATE TABLE IF NOT EXISTS `([^`]+)`#', $line, $match)) {
        $table = $match[1];
        continue;
    }
    if (preg_match('#^\s+(`([^`]+)`[^,]+),?$#', $line, $match)) {
        $sql = sprintf('alter table `%s` add column %s;', $table, $match[1]);
        try {
            echo $sql . PHP_EOL;
            $mysql->query($sql);
        } catch (\Exception $ex) {
            echo $ex->getMessage();
        }
    }
}

```