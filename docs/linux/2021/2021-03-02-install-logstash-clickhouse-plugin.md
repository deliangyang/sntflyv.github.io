## 为logstash安装clickhouse插件

### 简单介绍
logstash的clickhosue插件是用ruby写的，[https://github.com/funcmike/logstash-output-clickhouse](https://github.com/funcmike/logstash-output-clickhouse) 这是一个归档项目，没有再维护了，主要实现的就是将数据通过http `JSONEachRow`的方式提交给clickhouse，只实现了output阶段。


### 安装插件
- 确保服务器安装了`ruby`
- clone项目，`git clone https://github.com/funcmike/logstash-output-clickhouse.git`
- cd logstash-output-clickhouse
- `gem build logstash-output-clickhouse.gemspec`
- logstash-plugin install logstash-output-clickhouse-0.1.0.gem

### 注意如果使用了国内源的，可能会出现超时，SSL的问题
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