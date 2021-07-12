
## ClickHouse 建立物化视图

### 建立kafka引擎的表结构

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
```sql
CREATE MATERIALIZED VIEW test.test_writer TO test.test_data
(
    `t` DateTime,
    `idx` UInt64,
    `key` String
) AS
SELECT *
FROM test.test_kafkfa

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
SETTINGS index_granularity = 8192
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

## 参考资料
1. [ClickHouse Kafka引擎与 Apache Kafka 结合使用](https://clickhouse.tech/docs/zh/engines/table-engines/integrations/kafka/)