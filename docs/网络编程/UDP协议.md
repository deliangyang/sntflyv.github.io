
## UDP（User Datagram Protocol）协议

> 用户数据报协议，简单的面向数据报的通信协议，位于 `OSI` 模型的传输层  
> UDP只提供数据的不可靠传递，在IP数据报的头部仅仅加入了复用和数据校验字段  
> UDP不需要执行错误检查和纠正，避免协议栈中此类处理的开销  
> 对时间有较高要求的应用程序通常使用UDP，丢失数据包比等待重传导致的延迟更可取  

### 应用场景
- DNS
- DHCP 动态IP分配地址
- SNMP 简单网络管理协议
- RIP 路由信息协议
- NTP 网络时间协议

### UDP数据包结构
```bash

```

### checksum 计算
- checksum中有两个长度值，具体为：`（数据长度 + 报头长度8）* 2`

```php
<?php

$udpHex = <<<HEX
0a 00 02 19             // src
0a 00 0d be             // dest
00 11                   // protocol
00 0c                   // udp length
d3 f7                   // source port
27 07                   // dest port
00 0c                   // length
00 00                   // checksum rest
77 6f 72 64             // data
HEX;

$udpHex = <<<HEX
0a 00 02 19             // src
0a 00 0d be             // dest
00 11                   // protocol
00 0d                   // udp length
d3 f7                   // source port
27 07                   // dest port
00 0d                   // length
00 00                   // checksum rest
68 65 6c 6c 6f          // data
HEX;

// length = ( data length = 8 ) * 2

$checkSum = 0x9d2c;

$udpHex = preg_replace('#\s+//.*+#', '', $udpHex);
$udpHex = array_values(array_filter(preg_split('#\s|\n#', $udpHex)));

$buffer = [];
foreach ($udpHex as $idx => $hex) {
    if ($idx % 2 == 1) {
        continue;
    }
    if (isset($udpHex[$idx + 1])) {
        $buffer[] = (sprintf('0x%s%s'  ,  $hex, $udpHex[$idx + 1]));
    } else {
        $buffer[] = (sprintf('0x%s00', ($hex)));
    }
}

function checkSum(array $buffer)
{
    $sum = 0;
    foreach ($buffer as $idx => $buf) {
        $sum += hexdec($buf);
        if ($sum >> 16 > 0) {
            $sum = ($sum >> 16) + ($sum & 0xffff);
        }
    }
    return '0x' . dechex((~$sum) & 0xffff ) ;
}

var_dump(checkSum($buffer));
```

### 参考资料
1. [Wiki 用户数据报协议](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE)