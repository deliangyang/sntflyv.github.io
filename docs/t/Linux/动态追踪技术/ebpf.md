
## BPF相关文档

[https://docs.kernel.org/bpf/index.html](https://docs.kernel.org/bpf/index.html)

### BPF和eBPF的区别
[https://docs.kernel.org/bpf/classic_vs_extended.html](https://docs.kernel.org/bpf/classic_vs_extended.html)

- 寄存器从2增加到10
- 寄存器从32位增加到64位
- 判断条件jt/if替换为jt/fall-through
- 引入 bpf_call insn 和寄存器传递约定，以实现来自/向其他内核函数的零开销调用

### bcc 就是BPF脚本工具集
![https://github.com/iovisor/bcc/blob/master/images/bcc_tracing_tools_2019.png?raw=true](https://github.com/iovisor/bcc/blob/master/images/bcc_tracing_tools_2019.png?raw=true)

- 手动clone源码编译安装，不要使用`apt`或者`yum`等命令源安装
```bash

```

### USDT probes (User Statically-Defined Tracing)
用户静态定义的追踪探测，程序编译时需要开启动态追踪，用户态程序静态定义的跟踪点，类似于内核中的tracepoint，它需要在程序的源代码中添加代码。编译器会将`DTRACE_PROBEXXX`这种宏替换为一个nop空指令，不做其它的事情，只负责占位，同时编译器会在程序的`.note.stapsdt`中添加必要的信息。

```c
#include <sys/>std.h>

int main(int argc, char const *argv[]) {
    DTRACE_PROBE(hello-usdt, probe-main);
    return 0;
}
```

```c
int do_trace(struct pt_regs *ctx) {
    uint64_t addr;
    char path[128];
    bpf_usdt_readarg(6, ctx, &addr);
    bpf_probe_read_user(&path, sizeof(path), (void *)addr);
    bpf_trace_printk("path:%s\\n", path);
    return 0;
};
```

## 系统事件

## 探针

### 内核探针

#### kprobes 探针，内核函数入口被调用


#### kretprobes探测点在内核函数返回时后被调用

### 用户空间探针

#### uprobes 用户空间函数入口探针
- 需要手动计算进程内存的偏移位置，不可移植
- 查看`redis-server`符号表 
```bash
objdump -tT /usr/local/bin/redis-server

# but isn't work
sudo python ~/work/go-dev/bcc/tools/trace.py '/usr/local/bin/redis-server:createStringObject "%s" arg1'
```

#### 查看函数参数
```bash
dd@dd-OptiPlex-3020:~$ sudo bpftrace -lv 'uprobe:/usr/local/bin/php:compile_string'
WARNING: Cannot parse DWARF: libdw not available
WARNING: No DWARF found for "/usr/local/bin/php", cannot show parameter info
uprobe:/usr/local/bin/php:compile_string
```

#### uprobe 
- 语法
```
uprobe: arg0, arg1, ..., argN
uretprobe: retval
```

###
```bash
sudo bpftrace -e 'uprobe:/lib/x86_64-linux-gnu/libc.so.6:fopen { printf("fopen: %s\n", str(arg0)); }'
Attaching 1 probe...
fopen: /proc/meminfo
fopen: /proc/meminfo
```

## 查看追踪点

```bash
sudo tplist-bpfcc
```

## eBPF in Rust

- aya


## 什么是DWARF？

译文来自[https://www.deepl.com/translator](https://www.deepl.com/translator)
> DWARF is a widely used, standardized debugging data format. DWARF was originally designed along with Executable and Linkable Format (ELF), although it is independent of object file formats.[1] The name is a medieval fantasy complement to "ELF" that had no official meaning, although the backronym "Debugging With Arbitrary Record Formats" has since been proposed.[1]

> DWARF是一种广泛使用的、标准化的调试数据格式。DWARF最初是与可执行和可链接格式（ELF）一起设计的，尽管它独立于对象文件格式。[1]这个名字是对 "ELF "的中世纪幻想的补充，没有正式的含义，尽管后来有人提出了 "用任意记录格式进行调试 "的后缀名。


## 引用

1. [https://www.ebpf.top/post/ebpf-overview-part-5/](https://www.ebpf.top/post/ebpf-overview-part-5/)
2. [bpf study](https://github.com/DavadDi/bpf_study)
3. [PPT](https://github.com/gojue/ebpf-slide/)