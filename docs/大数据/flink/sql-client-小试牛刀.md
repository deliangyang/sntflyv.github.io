
### sql-client 配置

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