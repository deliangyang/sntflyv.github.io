
## GMP 模型

### M Machine
- Goroutine 实际运行载体，一个 M 表示一个内核线程，有时候也叫工作线程
- 不仅运行现有的任务，也会主动到其他的队列中寻找可运行的 G，尽可能的不让自己闲下来

### P Processor

- 管理 G 对象和为运行提供“上下文”，其内部包含两个队列，一个是可运行的 G 队列，一个则是自由 G 列表
- M 与一个 P 关联了才能执行 Go 代码

### Goroutine
- 对一段需要并发执行代码的封装