
## TCP/IP 协议栈

## 位码即tcp标志位，有6种标示：
- SYN(synchronous建立联机) 
- ACK(acknowledgement 确认)
- PSH(push传送) 
- FIN(finish结束) 
- RST(reset重置) 
- URG(urgent紧急)

- Sequence number(顺序号码) 
- Acknowledge number(确认号码)


### WireShare过滤条件
```
ip.dst == 42.192.78.57 or ip.src == 42.192.78.57

ip.dst==10.0.2.25 or ip.addr==10.0.2.25 
```