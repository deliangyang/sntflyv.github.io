
## CSRF 跨站请求伪造攻击

### 攻击原来 
- 登录服务器，拿到 cookie 或者 token，用户根据网站请求的规则（参数编码等）可以构造 HTTP 请求，发送数据，不局限在浏览器页面

### 解决方案
- 动态 token，加载页面生成 token，提交数据使用当前页面生成的 token，增加伪造请求的难度
- 参数加密，js 代码混淆等