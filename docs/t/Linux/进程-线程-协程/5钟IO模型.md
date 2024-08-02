
## 5 种 IO 模型

### 阻塞 I/O

### 非阻塞 I/O

### I/O 复用
- select/poll/epoll
- 分段，能同时监听多个文件的描述符
- epoll 直接告诉你该执行哪一个，不需要挨个去轮询

### 信号驱动 I/O
- 该执行的时候通知

### 异步 I/O
- 处理好了才通知

### 参考资料
1. [5 中 IO 模型整理总结](https://www.cnblogs.com/dushangguzhousuoli/p/10822262.html)

