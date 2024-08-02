### 在 Python 中使用多线程消费 Queue

Python 已经为我们封装了队列，支持阻塞，和设置对应的超时时间。

### 测试方法

向往队列里写入 20000 个数，然后启多个队列来消费这个 Queue，这里使用的是`LifoQueue`, `Last in first out`，其实这就是一个栈，先进后出。
队列分别写入到不同的文件。为什么要写到不同的文件中，其实就是为了试一下并发，不同文件是否会出现相同的数字（无聊）。  

使用 Queue 的好处，我们不需要考虑锁的问题，其实这就是一个生产者和消费者的模型。


### Demo

```python
from queue import Queue, LifoQueue
from threading import Thread


queue = LifoQueue()
for i in range(20000):
    queue.put(i, False)


def consumer(q: Queue, name: str):
    with open(name, 'w') as f:
        while not q.empty():
            a = q.get(False)
            f.write("%d\n" % a)
        f.close()


tasks = []
l = 2
for i in range(l):
    t = Thread(target=consumer, args=[queue, str(i)])
    tasks.append(t)

for i in range(l):
    tasks[i].start()

for i in range(l):
    tasks[i].join()
```