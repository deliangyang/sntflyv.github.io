
Go HTTP 服务优雅退出有两个特点

1. 程序中断退出时，需要等待处理中的请求处理完毕后再退出，或者等待超时时间结束后退出
2. 程序中断退出时，客户端新发起的请求，会被服务器拦截，无法进入业务逻辑处理

## 实验前准备

1. 编写一个接口服务。访问接口 `/hello`，Sleep 10s，返回响应结果
2. 将 server.ListenAndServe 放到一个 goroutine 协程中，如果返回错误不是 `http.ErrServerClosed`，panic 退出
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


其实，优雅退出不限于 HTTP 服务。优雅退出的本质就是给进程留出清理的时间，程序退出时，可能内存队列中有些数据还没有处理完，如果这些数据没有处理完，有可能造成数据丢失等问题，或者多个步骤的数据处理不在事务内，导致前面的数据处理逻辑已执行，后面的部分数据未处理，流程中断，产生脏数据，出现这种问题就比较棘手了。可见“优雅退出”何其重要。


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
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*10)
	defer cancel()
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
		case <-ctx.Done():
			for i := range queue {
				fmt.Println(i)
			}
		case <-done:
			close(queue)
			for i := range queue {
				fmt.Println(i)
			}
			cancel()
			return
		}
	}
}

```