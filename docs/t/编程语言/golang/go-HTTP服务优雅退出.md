
Go HTTP 服务“优雅退出”有两个特点

1. 程序中断退出时，需要给程序预留退出时间，等待处理中的请求处理完毕后再退出
2. 程序中断退出时，客户端新发起的请求，会被服务器拦截，无法执行业务逻辑

## 实验前准备

1. 编写一个接口服务。访问接口 `/hello`，Sleep 10s，返回响应结果
2. 将 server.ListenAndServe 放到一个 goroutine 协程中，如果返回错误不是 `http.ErrServerClosed`（这里需要特别注意下），panic 退出
3. 主线程监听系统中断指令，程序收到中断指令 `syscall.SIGINT, syscall.SIGTERM` 后，初始化一个 10s 超时取消的 `context.Context`
4. 将超时取消的 `context.Context` 作为参数传入 `server.Shutdown(ctx)`，程序等待 10s 关闭

```go
package main

import (
	"context"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	server := &http.Server{
		Addr: ":9034",
	}
	ctx := context.Background()
	http.Handle("/hello", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		time.Sleep(time.Second * 10)
		w.Write([]byte("hello\n"))
	}))
	go func() {
		err := server.ListenAndServe()
		if err != nil && err != http.ErrServerClosed {
			panic(err)
		}
	}()
	done := make(chan os.Signal, 1)
	signal.Notify(done, syscall.SIGINT, syscall.SIGTERM)
	<-done
	ctx, cancel := context.WithTimeout(ctx, time.Second*10)
	defer cancel()
	if err := server.Shutdown(ctx); err != nil {
		panic(err)
	}
}
```

## 实验测试

1. 终端 1 启动程序
    - `go run main.go`
2. 终端 2 发起 CURL 请求
    - `curl http://localhost:9034/hello`
3. 返回终端 1，Ctrl + C 结束程序
4. 新启终端 3，发起 CURL 请求
    - `curl http://localhost:9034/hello`

## 实验结果
1. 终端 1，10s 之后退出
2. 终端 2 请求正常拿到返回结果
3. 终端 3 请求失败

![Graceful Exit 实验截图](./graceful-exit.png)

## 生产者、消费者的优雅退出

1. 创建一个 channel，往 channel 中写入 1000 个数据
2. 监听系统中断信号，收到中断信号后，关闭 channel，等待 channel 中的数据处理完毕后退出

```go
package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	queue := make(chan int64, 1000)
	done := make(chan os.Signal, 1)
	signal.Notify(done, syscall.SIGINT, syscall.SIGTERM)
	end := 1000
	for i := 0; i < end; i++ {
		queue <- int64(i)
	}

	for {
		select {
		case i := <-queue:
			fmt.Println(i)
			if i == int64(end-1) {
				return
			}
			time.Sleep(time.Microsecond * 100)
		case <-done:
			close(queue)
			for i := range queue {
				fmt.Println(i)
			}
			return
		}
	}
}

```

我第一次知道“优雅退出”这个名词来自 Golang 的相关知识，理解之后发现，其实这个名词并非 Golang 专属，任何程序都需要考虑给程序预留退出时间，以保证所有的逻辑处理完毕、数据完整等。

<b>优雅退出的本质就是给进程留出清理的时间。程序退出时，在内存队列中可能有些数据还没有处理完，强制退出，会造成数据丢失的等问题；或者数据操作不被事务“包裹”，前面的数据处理逻辑已执行，流程中断，后面的部分数据未被处理，产生脏数据。</b>

出现上面这些问题，在后期修复数据比较棘手，会出现不知道该修复哪些数据，或者无法修复的问题。可见“优雅退出”何其重要。
