
## 对比两个数据库差异

### 背景

数据库迁移的时候，由于老的环境变成了测试环境，目前这个项目没有升级脚本之类的，都是直接手动在MySQL命令行添加字段。虽然一开始这两个数据库结构一样，但是随着项目的迭代，为了保持两边数据结构一致，我们就需要一一排查（执行执行的SQL并没有保存），找出差异字段，并同步过去，这是一件十分痛苦的事情。

### 思路
这种情况首先想到的就是写个程序，对比字段差异，接下来就让我们实践一下  

导出参照数据库的sql文件，修改新的数据库连接账号密码及数据库等。然后用程序判断字段数据类型，生成alter语句，`try...catch`捕获异常，需要添加的字段能够正常添加。  

文章中核心主要是两个正则表达式<code style="color:red;">CREATE TABLE IF NOT EXISTS `([^`]+)</code>获取数据库表名，<code style="color:red;">^\s+(`([^`]+)`[^,]+),?$</code>获取字段名称及数据类型。

### 脚本
```php
<?php

$content = file_get_contents('old_db.sql');

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
            $mysql->query($sql);
            echo '[+] ', $sql, PHP_EOL;
        } catch (\Exception $ex) {
            echo '[-]', $ex->getMessage();
        }
    }
}
```