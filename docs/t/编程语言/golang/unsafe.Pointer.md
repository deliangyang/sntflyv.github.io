
## 不安全的 unsafe.Pointer

### 基本概念
- 结构体的成员变量在内存存储上是一段连续的内存
- 结构体的初始地址就是第一个成员变量的内存地址
- 基于结构的成员地址去计算偏移量，就能够得到其他成员变量的内存地址

### unsafe.Pointer
- 任何类型的指针值都可以转换为 Pointer
- Pointer 可以转换为任何类型的指针值
- uintptr 可以转换为 Pointer
- Pointer 也可以转换为 uintptr

### unsafe.Pointer 有什么用呢？

#### hack 私有变量
- 当我编写脚本工具的时候，依赖的库对某个结构体的变量不可访问时，我们可以通过`unsafe.Pointer`计算偏移量进行数据篡改
```go
// internal/test/test.go
package test

type A struct {
	i string
	j int64
}
```
```go
// cmd/unsafe/test.go
package main

import (
	"fmt"
	"unsafe"

	"github.com/deliangyang/test-wire/internal/test"
)

func main() {

	a := &test.A{}
	fmt.Println(a)

	aP := unsafe.Pointer(a)
	i := (*string)(aP)
	*i = "hello world"

	j := (*int64)(unsafe.Pointer(uintptr(aP) + unsafe.Sizeof(*i)))
	*j = 1234

	fmt.Println(a)
}

// output:
// &{ 0}
// &{hello world 1234}
```

### 获取函数地址
```go
package main

import (
	"fmt"
	"reflect"
	"unsafe"
)

func main() {

	f := reflect.ValueOf(print1).Pointer()		    // 错误的方式获取函数地址
	fmt.Printf("0x%x\n", f)

	tmp := print1
	fptr := *(*uintptr)(unsafe.Pointer(&tmp))		 // 正确的方式
	fmt.Printf("0x%x\n", fptr)

	ff := (*func())(unsafe.Pointer(&fptr))
	(*ff)()
}

func print1() {
	println("hello world")
}

// output:
// 0x10a4ca0
// 0x10d0e80  正确的函数指针地址
// hello world
```