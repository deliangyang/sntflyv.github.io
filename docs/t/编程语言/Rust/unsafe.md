### 不安全的Rust代码 unsafe

Rust隐藏着第二种语言，它不会强制执行这类内存安全保障：这个被称为不安全的Rust（unsafe Rust）。与常规的Rust代码无异，但是它提供了额外的超级力量。
为什么会存在Unsafe Rust代码，其本质就是Rust本身静态分析保守导致。

### 有哪些超级力量呢？

1. 解引用裸指针
2. 调用不安全的函数或者方法
3. 访问或者修改可变静态变量
4. 实现不安全的trait

### 解引用裸指针

- 裸指针是可变或者不可变的，分别写作`*mut T`和`*const T`。这里的`*`不是解引用运算符，它是类型名称的一部分。在裸指针的上下文中，不可变意味着指针解引用之后不能直接赋值。
- 与引用和智能指针的区别在于，记住裸指针
- 特征
    1. 允许忽略借用规则，可以同时拥有不可变和可变的指针，或多个指向相同位置的可变指针
    2. 不保证指向有效的内存
    3. 允许为空
    4. 不能实现任何自动清理工作

### 注意

不安全的代码必须用`unsafe`括起来，组成代码块，或者函数前标记该方法或者函数是不安全的

```rust
unsafe {
    // your code
}

unsafe fn test(inc: u32) {
    // your code
}

// for example
static HELLO_WORLD: &str = "hello world!";

static mut COUNTER: u32 = 0;

fn main() {
    println!("name is: {}", HELLO_WORLD);

    unsafe {
        add_to_count(4);
        println!("count is: {}", COUNTER);
    }
}

unsafe fn add_to_count(inc: u32) {
    COUNTER += inc;
}

```