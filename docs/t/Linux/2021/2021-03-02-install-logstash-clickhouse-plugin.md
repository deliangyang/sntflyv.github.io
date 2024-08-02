## 为 logstash 安装 clickhouse 插件

### 简单介绍
logstash 的 clickhosue 插件是用 ruby 写的，[https://github.com/funcmike/logstash-output-clickhouse](https://github.com/funcmike/logstash-output-clickhouse) 这是一个归档项目，没有再维护了。主要实现的就是将数据通过 http `JSONEachRow`的方式提交给 clickhouse，只实现了 output 阶段。


### 安装插件，手动编译
- 确保服务器安装了 `ruby`，`gem`
- clone 项目，`git clone https://github.com/funcmike/logstash-output-clickhouse.git`
- `cd logstash-output-clickhouse`
- `gem build logstash-output-clickhouse.gemspec`
- `logstash-plugin install logstash-output-clickhouse-0.1.0.gem`
- 检查插件是否安装成功：`bin/logstash-plugin list | grep clickhouse`

### 注意如果使用了国内源的，可能会出现超时，SSL 的问题
> 增加：`:ssl_verify_mode: 0`
```
root@debian:~# cat ~/.gemrc
---
:backtrace: false
:bulk_threshold: 1000
:sources:
- https://gems.ruby-china.com/
:update_sources: true
:verbose: true
:ssl_verify_mode: 0
```

#### 离线包安装
- 找一个已经安装好的，打一个离线包安装，注意版本问题

### demo

```
input {
    kafka {
        bootstrap_servers => "internal.kafka.1.xxxx.me:9092"
        group_id => "sync_kd_6"
        topics => ["test.detailKd"]
        consumer_threads => 5
        codec => "json"
        auto_offset_reset => 'earliest'
        decorate_events => true
    }
}

filter {
    mutate {
      add_field => { "@data" => "%{data}" }
    }
    json {
      source => "@data"
      remove_field => ["@data", "data", "@timestamp", "@version", "event"]
    }
    ruby {
        code => "event.set('time', event.get('time').to_i * 1000)"
    }
}

output {
    clickhouse {
        http_hosts => ["http://10.0.0.89:8123"]
        table => "detail.kd"
        request_tolerance => 5
        flush_size => 3000
        pool_max => 1000
        mutations => {
            "id" => "id"
            "user" => "user"
            "total" => "total"
            "free" => "free"
            "relId" => "relId"
            "type" => "type"
            "time" => "time"
        }
    }

}

```