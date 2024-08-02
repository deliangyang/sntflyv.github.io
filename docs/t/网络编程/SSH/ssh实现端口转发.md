
## 背景

1. 远程服务器对外服务的端口关闭如 redis 6379，mysql：3306 等，但是不想对外暴漏端口，ssh：22 可以登录远程服务器，想实现本地访问远程服务。
2. 公网访问内部服务，端口转发

## 端口实现

```bash
port_proxy () {
	PORT=$1
    SSH_TARGET=$2 # root@198.124.2.3
	ssh -f -N -L ${PORT}:127.0.0.1:${PORT} ${SSH_TARGET}
}

port_close () {
	PORT=$1
	lsof -i:${PORT} | awk '{print $2}' | grep -v PID | uniq  | xargs kill -9
}
```

### ssh 参数解释

1. -f 后端运行，如果想在终端一直阻塞，可以不要这个参数
2. -N 端口转发，不会执行远程命令。Do not execute a remote command.  This is useful for just forwarding ports.
3. -L 端口转发参数
   1. -L [bind_address:]port:host:hostport
   2. -L [bind_address:]port:remote_socket
   3. -L local_socket:host:hostport
   4. -L local_socket:remote_socket

### 示例
```bash
. ~/.bashrc

# 建立端口转发
port_proxy 6369 ydl@ydl

# 断开连接
port_close 6369

```

## 内网穿透实现

```bash
port_gateway() {
	LOCAL_PORT=$1
	TARGET_PORT=$2
	SSH_TARGET=$3
	ssh -NR 127.0.0.1:${TARGET_PORT}:127.0.0.1:${LOCAL_PORT} ${SSH_TARGET}
}
```

### sshd_config 修改

```bash
vim /etc/ssh/sshd_config

# 修改如下：（将远程端口转发绑定到非loopback地址，允许远程主机连接）
# GatewayPorts yes

# 重启ssh服务
service sshd restart
```


### 示例
```bash
. ~/.bashrc

# 内网穿透
port_gateway 80 8080 ydl@ydl

# 外网访问内部服务
curl -I http://ydl:8080
```