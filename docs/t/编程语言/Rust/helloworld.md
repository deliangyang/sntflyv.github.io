
## Rust 入门程序

### 初始化工程项目
```bash
cargo init demo
```

### 目录结构
```bash
root@debian:/tmp/demo# tree
.
├── Cargo.toml
└── src
    └── main.rs

1 directory, 2 files
```

### 查看代码
```rust
fn main() {
    println!("Hello, world!");
}
```

### 运行程序
```bash
root@debian:/tmp/demo# cargo run
   Compiling demo v0.1.0 (/tmp/demo)
    Finished dev [unoptimized + debuginfo] target(s) in 1.12s
     Running `target/debug/demo`
Hello, world!
```

### 学习案例

1. [test-work](https://github.com/deliangyang/test-work)
2. [rust-demo](https://github.com/deliangyang/rust-demo)
3. [leetcode](https://github.com/deliangyang/leetcode.rs)