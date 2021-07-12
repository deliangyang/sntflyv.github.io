
## ClickHouse 建立物化视图

### 建立kafka引擎的表结构
- 使用kafka引擎，将kafka的数据以`JSONEachRow`，一行就是一条json的结构写入ClickHouse
- 注意kafka的数据结构，value的结构尽量保持一维结构，深度为1（复杂结构后面再深度研究）
```sql
CREATE TABLE test.test_kafkfa
(
    `t` DateTime,
    `idx` UInt64,
    `key` String
)
ENGINE = Kafka('127.0.0.1:9092', 'test1', 'ch-test', 'JSONEachRow');
```

### 建立物化视图，将kafka数据数据写入表中

- 创建的表有点多，如果出错，这个应该可以优化的
```sql
CREATE TABLE test.test_data
(
    `t` DateTime,
    `idx` UInt64,
    `key` String
)
ENGINE = MergeTree
PARTITION BY toYYYYMMDD(t)
ORDER BY (t, key)
TTL toDateTime(t) + toIntervalDay(365)
SETTINGS index_granularity = 8192;

CREATE MATERIALIZED VIEW test.test_writer TO test.test_data
(
    `t` DateTime,
    `idx` UInt64,
    `key` String
) AS
SELECT *
FROM test.test_kafkfa
```

### 建立表聚合
```sql
CREATE MATERIALIZED VIEW test.test_stat
(
    `t` Date,
    `key` String,
    `s` AggregateFunction(sum, Int64)
)
ENGINE = AggregatingMergeTree
PRIMARY KEY (t, key)
ORDER BY (t, key)
SETTINGS index_granularity = 8192 AS
SELECT
    toDate(t) AS t,
    key,
    sumState(toInt64(idx)) AS s
FROM test.test_data
GROUP BY
    t,
    key
```

### 聚合数据查询

- 聚合表中的数据不可以直接查询，会出现乱码，因为 `s` 的数据类型是 `AggregateFunction` 该字段是state的结果
```sql
SELECT *
FROM test.test_stat

┌──────────t─┬─key─┬─s─┐
│ 2021-07-12 │ k-0 │ ( │
│ 2021-07-12 │ k-1 │ 2 │
└────────────┴─────┴───┘
```

- 再次聚合查询，`select ... group by`，这里会用到`sumMerge`函数
```sql
SELECT
    t,
    key,
    sumMerge(s)
FROM test.test_stat
GROUP BY
    t,
    key

┌──────────t─┬─key─┬─sumMerge(s)─┐
│ 2021-07-12 │ k-1 │          50 │
│ 2021-07-12 │ k-0 │          40 │
└────────────┴─────┴─────────────┘
```

### 日志查看
- 学习视图期间遇到些问题，可以通过查看error日志，排查定位问题

```bash
tail -f /var/log/clickhouse-server/*err.log
```

## 参考资料
1. [ClickHouse Kafka引擎与 Apache Kafka 结合使用](https://clickhouse.tech/docs/zh/engines/table-engines/integrations/kafka/)
1. [ClickHouse AggregatingMergeTree](https://clickhouse.tech/docs/zh/engines/table-engines/mergetree-family/aggregatingmergetree/)