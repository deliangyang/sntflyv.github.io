
## 流式处理之 kakfa

### golang 生成测试数据，写入 kafka
```go
package main

import (
	"context"
	"fmt"
	"log"
	"time"

	jsoniter "github.com/json-iterator/go"
	"github.com/segmentio/kafka-go"
)

// TMessage 测试数据结构
type TMessage struct {
	Idx int64  `json:"idx"`
	T   int64  `json:"t"`
	Key string `json:"key"`
}

func main() {
	topic := "test1"

	partition := 0

	conn, err := kafka.DialLeader(context.Background(), "tcp", "10.0.2.25:9092", topic, partition)
	if err != nil {
		log.Fatal("failed to dial leader:", err)
	}

	t := time.Now().Unix()
	messages := make([]kafka.Message, 0, 10)
	for i := 0; i < 10; i++ {
		msg, err := jsoniter.Marshal(TMessage{
			Idx: int64(i),
			T:   t + int64(i),
			Key: fmt.Sprintf("k-%d", i%2),
		})
		if err != nil {
			log.Fatal(err)
		}
		messages = append(messages, kafka.Message{
			Value: msg,
		})
	}

	conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
	_, err = conn.WriteMessages(
		messages...,
	)
	if err != nil {
		log.Fatal("failed to write messages:", err)
	}

	if err := conn.Close(); err != nil {
		log.Fatal("failed to close writer:", err)
	}
}
```

### Flink 数据聚合

```scala
package org.example

import org.apache.flink.api.common.eventtime.{WatermarkGenerator, WatermarkOutput, WatermarkStrategy}
import org.apache.flink.api.scala._
import org.apache.flink.shaded.jackson2.com.fasterxml.jackson.databind.node.ObjectNode
import org.apache.flink.streaming.api.TimeCharacteristic
import org.apache.flink.streaming.api.scala.StreamExecutionEnvironment
import org.apache.flink.streaming.api.windowing.time.Time
import org.apache.flink.streaming.connectors.kafka.FlinkKafkaConsumer
import org.apache.flink.streaming.util.serialization.JSONKeyValueDeserializationSchema
import org.apache.kafka.clients.consumer.ConsumerConfig
import org.apache.kafka.common.serialization.{ByteArrayDeserializer, StringDeserializer}

import java.time.Duration
import java.util.Properties

object KafkaStreamWindowJob {
  def main(args: Array[String]): Unit = {
    val env = StreamExecutionEnvironment.getExecutionEnvironment

    val properties = new Properties()
    properties.setProperty("bootstrap.servers", "127.0.0.1:9092")
    properties.setProperty("group.id", "test1")
    properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, classOf[StringDeserializer].getName)
    properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, classOf[ByteArrayDeserializer].getName)

    env.setStreamTimeCharacteristic(TimeCharacteristic.EventTime)

    val source = new FlinkKafkaConsumer[ObjectNode]("test1", new JSONKeyValueDeserializationSchema(true), properties)


    val stream = env
      .addSource(source)

    val res = stream.map(x => x.get("value"))
      .filter(_!= null)
      .map(x => {
        (x.get("idx").asInt(), x.get("t").asInt())
      })
      .keyBy(_._2)
      .countWindow(2, 2)
      .sum(0)

    res.print().setParallelism(1)
    env.execute("test-word")
  }
}

```