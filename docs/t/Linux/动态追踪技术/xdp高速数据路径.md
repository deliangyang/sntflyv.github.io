
##  XDP 
- eXpress Data Path, 高速数据路径
- XDP 程序可以用来实现高性能的网络处理方案，常用于 DDos 防御、防护墙、4层负载均衡等
- BPF_PROG_TYPE_XDP

## TC
- TC (Traffic Control, 流量控制) 程序、套接字程序 以及 cgroup 程序
- 对应的类型是 BPF_PROG_TYPE_SCHED_CLS 和 BPF_PROG_TYPE_SCHED_ACT ，分别用于流量控制的分类器和执行器。Linux 流量控制通过网卡队列、排队规则、分类器、过滤器以及执行器实现了网络流量的整形调度和带宽控制。