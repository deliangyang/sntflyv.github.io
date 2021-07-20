
### sql-client 配置

#### 配置文件解释
- tables
    - 定义表source, sink, 试图、临时表
- functions
    - UDF user defined function 用户自定义函数
- catalogs 目录
- execution 改变表程序基本的执行行为属性。
- configuration
    - 在专用的”配置”页面上可以找到完整的选项列表及其默认值。
- deployment
    - 描述表程序提交集群的属性。

```yml
tables:
  - name: MyTableSource
    type: source-table
    update-mode: append
    connector:
      type: filesystem
      path: "/path/to/something.csv"
    format:
      type: csv
      fields:
        - name: MyField1
          data-type: INT
        - name: MyField2
          data-type: VARCHAR
      line-delimiter: "\n"
      comment-prefix: "#"
    schema:
      - name: MyField1
        data-type: INT
      - name: MyField2
        data-type: VARCHAR
  - name: MyCustomView
    type: view
    query: "SELECT MyField2 FROM MyTableSource"
```

### CSV 数据
```csv
1,ab
2,bc
3,dc
4,ddd
5,234
3,23
3,4
5,dc
```

### 启动
```bash
bin/sql-client.sh embedded
```

### 执行语句
```sql
select MyField2, count(1) from MyTableSource group by MyField2;
```

### 结果
```
MyField2                    EXPR$1
      ab                         1
      bc                         1
      ddd                         1
      234                         1
      23                         1
        4                         1
      dc                         2
```

### 参考
[Flink SQL 客户端](https://ci.apache.org/projects/flink/flink-docs-stable/zh/dev/table/sqlClient.html)