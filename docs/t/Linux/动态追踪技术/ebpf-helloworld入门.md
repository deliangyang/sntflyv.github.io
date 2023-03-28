## eBPF hello world程序入门

这里使用[https://github.com/cilium/ebpf](https://github.com/cilium/ebpf)来实现`hello world`程序

### hello.bpf.c
```c
#include <linux/bpf.h>
#include <linux/ptrace.h>
#include <linux/version.h>
#include <bpf_helpers.h>

SEC("tracepoint/syscalls/sys_enter_execve")
int bpf_prog(void *ctx) {
  char msg[] = "Hello, World!";
  bpf_printk("invoke bpf_prog: %s\n", msg);
  return 0;
}

char _license[] SEC("license") = "GPL";
```

### Makefile
```makefile
CLANG ?= clang-14
CFLAGS ?= -O2 -g -Wall -Werror

LIBEBPF_TOP = /home/ydl/work/go-dev/ebpf-test/ebpf
EXAMPLES_HEADERS = $(LIBEBPF_TOP)/examples/headers

all: generate

generate: export BPF_CLANG=$(CLANG)
generate: export BPF_CFLAGS=$(CFLAGS)
generate: export BPF_HEADERS=$(EXAMPLES_HEADERS)
generate:
	go generate ./...
```

### main.go

```go
//go:build linux
// +build linux

package main

import (
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/cilium/ebpf/link"
	"github.com/cilium/ebpf/rlimit"
)

// $BPF_CLANG, $BPF_CFLAGS and $BPF_HEADERS are set by the Makefile.
//go:generate bpf2go -cc $BPF_CLANG -cflags $BPF_CFLAGS -target bpfel,bpfeb bpf hello.bpf.c -- -I $BPF_HEADERS
func main() {
	stopper := make(chan os.Signal, 1)
	signal.Notify(stopper, os.Interrupt, syscall.SIGTERM)

	// Allow the current process to lock memory for eBPF resources.
	if err := rlimit.RemoveMemlock(); err != nil {
		log.Fatal(err)
	}

	// Load pre-compiled programs and maps into the kernel.
	objs := bpfObjects{}
	if err := loadBpfObjects(&objs, nil); err != nil {
		log.Fatalf("loading objects: %s", err)
	}
	defer objs.Close()

	//SEC("tracepoint/syscalls/sys_enter_execve")
	// attach to xxx
	kp, err := link.Tracepoint("syscalls", "sys_enter_execve", objs.BpfProg, nil)
	if err != nil {
		log.Fatalf("opening tracepoint: %s", err)
	}
	defer kp.Close()

	log.Printf("Successfully started! Please run \"sudo cat /sys/kernel/debug/tracing/trace_pipe\" to see output of the BPF programs\n")

	// Wait for a signal and close the perf reader,
	// which will interrupt rd.Read() and make the program exit.
	<-stopper
	log.Println("Received signal, exiting program..")
}
```

### 构建程序
- clang-14

```bash
# 生成eBPF字节码
make all

# 加载eBPF字节码，挂载探针
sudo go run main.go bpf_bpfel.go

# 查看bpf输出
sudo cat /sys/kernel/debug/tracing/trace_pipe
```

## 查看二进制文件或者动态链接库支持哪些函数

```bash
ydl@ydl-OptiPlex-3020:~$ sudo bpftrace -l 'uprobe:/usr/local/bin/php:*'|head
uprobe:/usr/local/bin/php:OnUpdateBaseDir
uprobe:/usr/local/bin/php:OnUpdateBool
uprobe:/usr/local/bin/php:OnUpdateLong
uprobe:/usr/local/bin/php:OnUpdateLongGEZero
uprobe:/usr/local/bin/php:OnUpdateReal
uprobe:/usr/local/bin/php:OnUpdateString
uprobe:/usr/local/bin/php:OnUpdateStringUnempty
uprobe:/usr/local/bin/php:PHP_3HAVAL128Init
uprobe:/usr/local/bin/php:PHP_3HAVAL160Init
uprobe:/usr/local/bin/php:PHP_3HAVAL192Init
```

### readelf

```bash
readelf
```

### objdump
```bash
objdump -tT /usr/local/bin/php
```

## 总结
- 目前看来[https://github.com/cilium/ebpf](https://github.com/cilium/ebpf)跨平台有点吃力，至少不支持`Mac`。
- 程序有上下文。
- `cilim/ebpf`其实是用`go`实现了`c`的加载器（纯go实现）。
- eBPF字节码只有通过验证之后，才能挂载到内核函数上，保证了系统的稳定。
- eBPF可以做很多的事情
  - 计算函数的调用时长
  - 函数的调用次数
  - 结合火焰图查看系统的性能
  - 无侵入的窥探程序或系统
  - 嗅探网络，SSL、数据库query、redis的query等等

## BPF 类型格式 （BTF）
> 我们知道不同的内核版本，代码上肯定有细微的差别，比如 文件打开的系统调用，在 v.5.5 之前还是 do_sys_openat 而最新版的内核已经变成了 do_sys_openat2 函数，这显然违背了一次编译，永久执行的初衷。线上生产环境的内核数据结构的定义决定了eBPF 程序是否能正常执行。虽然我们线下安装了 linux-headers-$(uname -r) 内核头文件，但是线上环境一般是不会装的。

> 这就引入了 BTF (BPF Type Fromat) ，从 v5.2 开始，只要内核开启了 CONFIG_DEBUG_INFO_BTF ，在编译内核时，内核的数据结构会自动嵌入内核的二进制文件 vmlinux 中，可以通过 bpftool 工具导出头文件。

```bash
bpftool btf dump file /sys/kernel/btf/vmlinux format c > vmlinux.h
```
> 所以在开发 eBPF 程序时只需要引入一个 vmlinux.h 即可。除此之外， BTF 可以让 eBPF 程序在内核升级之后，不需要编译就可以直接运行。


> 解决了内核数据结果的定义问题，接下来的问题就是，如何让 eBPF 程序在内核升级之后，不需要重新编译就可以直接运行，eBPF的一次编译到处执行(Compile Once Run Everywhere，简称 CO-RE) 项目借助了BTF提供的调试信息，通过在 libbpf 中预定义不同内核版本中的数据结构的修改，解决了不同内核中数据结构的不兼容问题。



## 参考
- [https://zhuanlan.zhihu.com/p/484788508](https://zhuanlan.zhihu.com/p/484788508)
- [https://kiosk007.top/post/%E8%AE%A4%E8%AF%86ebpf/](https://kiosk007.top/post/%E8%AE%A4%E8%AF%86ebpf/)