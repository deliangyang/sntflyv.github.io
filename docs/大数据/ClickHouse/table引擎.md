
## ClickHouse Table 引擎

### Kafka引擎

#### 特性
- 发布或者订阅数据流
- 容错存储机制
- 处理流数据

#### 格式
- 老版格式
```
ENGINE = Kafka('127.0.0.1:9092', 'test1', 'ch-test', 'JSONEachRow');
```

- 新版格式
```
ENGINE = Kafka SETTINGS kafka_broker_list = 'localhost:9092',
    kafka_topic_list = 'topic',
    kafka_group_name = 'group1',
    kafka_format = 'JSONEachRow',
    kafka_num_consumers = 4;
```