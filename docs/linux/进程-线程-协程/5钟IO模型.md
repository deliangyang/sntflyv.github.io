
## 5种IO模型

### 阻塞I/O

### 非阻塞I/O

### I/O 复用
- select/poll/epoll
- 分段，能同时监听多个文件的描述符
- epoll直接告诉你该执行哪一个，不需要挨个去轮询

### 信号驱动I/O
- 该执行的时候通知

### 异步I/O
- 处理好了才通知

### 参考资料
1. [5中IO模型整理总结](https://www.cnblogs.com/dushangguzhousuoli/p/10822262.html)

