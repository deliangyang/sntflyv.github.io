
## HTTP 协议

### HTTP 协议报文结构
- `>` 表示客户请求的消息结构
- `<` 表示服务端响应数据，包含 `{ [1027 bytes data]`的数据
- 请求行和请求头部以 `\r\n` 分隔，请求数据与请求头部以 `\r\n\r\n` 分隔
- 请求行之后是请求头部（即 http header），header 之后是请求数据，请求数据过大，会以多个数据包传输（这是 TCP/IP 范畴，这里就不详细介绍）
- 请求行结构
    - 请求方法 GET/POST/HEAD/PUT/PATCH/OPTIONS/DELETE/CONNECT/TRACE
    - 请求路径 URL
    - 协议版本 HTTP/1.0、HTTP/1.1、HTTP/2.0
- 响应体结构
    - 状态行
        - 协议版本
        - 状态码：200、403、404 ...
            - 状态代码有三位数字组成，第一个数字定义了响应的类别，共分五种类别：
                - 1xx：指示信息--表示请求已接收，继续处理
                - 2xx：成功--表示请求已被成功接收、理解、接受
                - 3xx：重定向--要完成请求必须进行更进一步的操作
                - 4xx：客户端错误--请求有语法错误或请求无法实现
                - 5xx：服务器端错误--服务器未能实现合法的请求
        - 状态消息：OK、Forbidden、Not Found
    - 消息状态
    - 空白行 `\r\n\r\n`
    - 响应正文
```bash
phantom:~ ydl$ curl  -sv http://www.sourcedev.cc|head
* Rebuilt URL to: http://www.sourcedev.cc/
*   Trying 42.192.78.57...
* TCP_NODELAY set
* Connected to www.sourcedev.cc (42.192.78.57) port 80 (#0)
> GET / HTTP/1.1
> Host: www.sourcedev.cc
> User-Agent: curl/7.54.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: openresty/1.19.3.1
< Date: Mon, 12 Jul 2021 16:21:13 GMT
< Content-Type: text/html; charset=UTF-8
< Transfer-Encoding: chunked
< Connection: keep-alive
< X-Powered-By: PHP/7.3.27
< Set-Cookie: ndj__Session=l7v5pn34h1qhavqv86bcahvdqs; path=/
< Expires: Thu, 19 Nov 1981 08:52:00 GMT
< Cache-Control: no-store, no-cache, must-revalidate
< Pragma: no-cache
<
{ [1027 bytes data]
<!DOCTYPE html>
<html>
<head>
```

### HTTP Cache 策略

- Private Cache
- Public Cache CDN，中间代理
- Cache-control
    - no-store(禁止缓存)
    - no-cache(强制缓存)
- 缓存过期机制
    - max-age：过期最大时间
- 缓存验证确认
    - must-revalidate 验证状态再选择是否更新

## 参考资料
1. [MDN 相关文档](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)