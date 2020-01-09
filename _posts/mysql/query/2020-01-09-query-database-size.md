
### 查看mysql databases每个表的大小及行数

```php
#!/usr/bin/env /usr/bin/php
<?php
$db = new \mysqli('127.0.0.1',
    'root', '123456', 'test');
$db->set_charset('utf8mb4');

$sql =<<<SQL
show tables;
SQL;

$query = $db->query($sql);
$tables = [];

while ($row = $query->fetch_assoc()) {
    #var_dump($row);
    $tables[] = $row['Tables_in_ck'];
}

foreach ($tables as $table) {
    $sql =<<<SQL
show create table {$table}
SQL;
    $query = $db->query($sql);
    $row = $query->fetch_row();
    list($table, $tableInfo) = $row;
    $comment = '无';
    if (preg_match('#comment=\'([^\']+)#i', $tableInfo, $match)) {
        $comment = $match[1];
    }

    $sql =<<<SQL
show table status from ck where name = '{$table}'
SQL;
	$query = $db->query($sql);
    $row = $query->fetch_assoc();

    echo $table, "\t", $comment, "\t", $row['Rows'], "\t", number_format($row['Data_length']/1024/1024, 2).'MB', "\t", number_format($row['Index_length']/1024/1024, 2).'MB',  PHP_EOL;

}
```