
## DNS 协议
- 发起DNS查询 `dig blog.sourcedev.cc`
- WireShark抓包，过滤关键词 `dns` 即可
- DNS 服务器默认端口 53

### 查询

#### 数据包二进制dump
```
0000   4c f0 01 20 00 01 00 00 00 00 00 01 03 77 77 77   L.. .........www
0010   09 73 6f 75 72 63 65 64 65 76 02 63 63 00 00 01   .sourcedev.cc...
0020   00 01 00 00 29 10 00 00 00 00 00 00 00            ....)........
```

#### 可视化数据结构
```
Domain Name System (query)
    Transaction ID: 0x4cf0
    Flags: 0x0120 Standard query
    Questions: 1
    Answer RRs: 0
    Authority RRs: 0
    Additional RRs: 1
    Queries
        www.sourcedev.cc: type A, class IN
            Name: www.sourcedev.cc
            [Name Length: 16]
            [Label Count: 3]
            Type: A (Host Address) (1)
            Class: IN (0x0001)
    Additional records
        <Root>: type OPT
    [Response In: 17]
```


### 应答

#### 数据包二进制dump
```
0000   4c f0 81 80 00 01 00 01 00 00 00 00 03 77 77 77   L............www
0010   09 73 6f 75 72 63 65 64 65 76 02 63 63 00 00 01   .sourcedev.cc...
0020   00 01 c0 0c 00 01 00 01 00 00 02 58 00 04 2a c0   ...........X..*.
0030   4e 39                                             N9
```

#### 可视化数据结构
- 权威服务器名称只是存了一个数值（数据包data所在位置offset开始位置），这个操作可以减少数据包的大小
```
Domain Name System (response)
    Transaction ID: 0x4cf0
    Flags: 0x8180 Standard query response, No error
    Questions: 1
    Answer RRs: 1
    Authority RRs: 0
    Additional RRs: 0
    Queries
        www.sourcedev.cc: type A, class IN
            Name: www.sourcedev.cc
            [Name Length: 16]
            [Label Count: 3]
            Type: A (Host Address) (1)
            Class: IN (0x0001)
    Answers
        www.sourcedev.cc: type A, class IN, addr 42.192.78.57
    [Request In: 15]
    [Time: 0.058614000 seconds]
```

#### 分析Answers部分的数据结构

```
    Queries
        blog.sourcedev.cc: type A, class IN
            Name: blog.sourcedev.cc
            [Name Length: 17]
            [Label Count: 3]
            Type: A (Host Address) (1)
            Class: IN (0x0001)
    Answers
        blog.sourcedev.cc: type CNAME, class IN, cname deliangyang.github.io
            Name: blog.sourcedev.cc
            Type: CNAME (Canonical NAME for an alias) (5)
            Class: IN (0x0001)
            Time to live: 509
            Data length: 23
            CNAME: deliangyang.github.io
        deliangyang.github.io: type A, class IN, addr 185.199.108.153
            Name: deliangyang.github.io
            Type: A (Host Address) (1)
            Class: IN (0x0001)
            Time to live: 509
            Data length: 4
            Address: 185.199.108.153
    [Request In: 39]
    [Time: 0.062407000 seconds]
```

- 一行是16个字节
- 0xc0 为分隔符
- `Name: deliangyang.github.io` 用 `0xc0 0x2f` 表示，offset为47，即第二行倒数第一个位置（16 * 3 - 1 0x0b 0x65 0x65 ...），所以反查到的前一个name的位置 
```
0000   a7 28 81 80 00 01 00 05 00 00 00 00 04 62 6c 6f   .(...........blo
0010   67 09 73 6f 75 72 63 65 64 65 76 02 63 63 00 00   g.sourcedev.cc..
0020   01 00 01 c0 0c 00 05 00 01 00 00 01 fd 00 17 0b   ................
0030   64 65 6c 69 61 6e 67 79 61 6e 67 06 67 69 74 68   deliangyang.gith
0040   75 62 02 69 6f 00 c0 2f 00 01 00 01 00 00 01 fd   ub.io../........
0050   00 04 b9 c7 6c 99 c0 2f 00 01 00 01 00 00 01 fd   ....l../........
0060   00 04 b9 c7 6e 99 c0 2f 00 01 00 01 00 00 01 fd   ....n../........
0070   00 04 b9 c7 6f 99 c0 2f 00 01 00 01 00 00 01 fd   ....o../........
0080   00 04 b9 c7 6d 99                                 ....m.
```
