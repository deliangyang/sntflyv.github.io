
## 开始学习lua

1. lua的词法、语法解析，语义分析，代码生成
parse完毕之后等到AST，一个先进的编译器应该包含趣多的步骤：语义分析，类型检查/推导，代码优化，机器代码生成...

- [王垠：谈谈Parser](https://www.open-open.com/news/view/1b08f92)
- [风云](https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/luadec/%E4%BA%91%E9%A3%8E-lua%E6%BA%90%E7%A0%81%E6%AC%A3%E8%B5%8F-lua-5.2.pdf)

2. lua的vm虚拟机
3. 标准库
4. 二进制


### 想到哪就写到哪里，
通识整个项目，捋清楚思路之后再整理


## Lua虚拟机

对计算机的模拟和抽象，虚拟机的实现大致可以分为两类：基于栈和基于寄存器。5.0以后

### 指令集
- 常量加载指令
- 运算符相关指令
- 循环和跳转指令
- 函数调用相关指令
- 表操作指令
- Upvalue操作指令

### 指令的四种编码
- iABC -> A、B、C三个操作数，8、9、9位
- iABx -> A、Bx两个操作数，8、18位
- iAsBx -> A、sBx（有符号的整数），8、18位
- iAx -> Ax只携带一个操作数，占用26bit。


## Lua编译器

## 标准库

## 名词解释
1. sp stack pointer 栈指针
2. ip Instruction pointer 指令指针
3. pc 