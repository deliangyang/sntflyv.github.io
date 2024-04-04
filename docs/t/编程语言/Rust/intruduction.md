
### 如何入门 rust-lang，从官方文档阅读开始

为什么要学习 Rust？Rust 学习曲线高，入门也不简单，看看 Rust 的自荐。

> 一门赋予每个人  
> 构建可靠且高效软件能力的语言。  

1. 高性能
    - Rust 速度惊人且内存利用率极高。由于没有运行时和垃圾回收，它能够胜任对性能要求特别高的服务，可以在嵌入式设备上运行，还能轻松和其他语言集成。
2. 可靠性
    - Rust 丰富的类型系统和所有权模型保证了内存安全和线程安全，让您在编译期就能够消除各种各样的错误。
3. 生产力
    - Rust 拥有出色的文档、友好的编译器和清晰的错误提示信息，还集成了一流的工具 —— 包管理器和构建工具，智能地自动补全和类型检验的多编辑器支持，以及自动格式化代码等等。


#### 官方文档

- [中文文档](https://www.rust-lang.org/zh-CN/)  
- [英文文档](https://www.rust-lang.org/learn)  

#### 安装 rust-lang IDE

Jetbrains 是一家开发 IDE 的公司，旗下有很多优秀的 IDE，phpstorm、goland、webstore、pyCharm 等，今天我们要用到的是 Intellij，然后我们可以在他的插件管理器中下载 rust 的插件，安装完毕之后，我们可以重启 IDE，创建 rust 应用程序。

如果需要研究阅读插件的源代码，跟进插件的特性，可以[在 github 上](https://intellij-rust.github.io/)讨论。

#### 关于 rust-lang 的环境配置

官方提供了很优秀的解决方案，[Install Rust](https://www.rust-lang.org/tools/install)，不知道从什么时候开始，学习东西喜欢从它的官方文档先开始研究。
> It looks like you’re running macOS, Linux, or another Unix-like OS. To download Rustup and install Rust, run the following in your terminal, then follow the on-screen instructions.
官方提供的方法其实很简单，是一个自动化安装的 shell 脚本，curl 下载 shell 脚本，一键部署安装环境，十分的简单方便。  

```bash
curl https://sh.rustup.rs -sSf | sh
```

#### 阅读文档，从`Hello world`程序开始我们的 rust

开始我们的 rust`hello world`程序之旅，不得不提一下 cargo，rust 的包管理工具（Rust's package manager）。

##### 首先我们需要通过`cargo`创建一个 rust 的项目

在命令行执行`cargo new hello-world`，然后 cargo 管理器就为我们创建了一个 hello-world 的目录，这个目录如下：
```
.
├── Cargo.lock
├── Cargo.toml
└── src
    └── main.rs
```

其实`cargo new`，会直接给我们自动生成一个 hello world 的程序，代码如下
```rust
fn main() {
    println!("Hello, world!");
}
```
然后我们只需要执行如下脚本，cargo 会帮我们自动生成可执行文件，并且执行输出结果。
```bash

cargo run
#   Compiling hello-demo v0.1.0 (/Users/demo/project/hello-demo)
#    Finished dev [unoptimized + debuginfo] target(s) in 0.78s
#     Running `target/debug/hello-demo`
#   Hello world
```

##### 使用 Rustc 编译.rs 文件

```bash
Rustc src/main.rs
./main

# Hello world
```

### Rust HelloWorld 程序分析

Rust 可执行程序一定需要一个入口文件，和 C/C++ 一样，需要一个`manin`函数，关键词`fn`表示函数，宏`println!`可以帮助我们打印输出。
为什么说长得像函数的`println!`是宏，如果你观察仔细的话，你会发现宏是在函数后面增加了一个感叹号`!`，这个标识标识它就是宏。
关于宏的介绍，后面我会弄个专栏来介绍它。宏不管是在 C 还是 Rust 中，都十分的强大。相信你也会喜欢这门语言的。

### 学习案例

1. [test-work](https://github.com/deliangyang/test-work)
2. [rust-demo](https://github.com/deliangyang/rust-demo)
3. [leetcode](https://github.com/deliangyang/leetcode.rs)