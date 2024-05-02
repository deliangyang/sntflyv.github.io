#include <stdio.h>

int main() {
    // char shellcode[] = {
    //     // 将 1 存储到 rax 寄存器中
    //     0x48, 0xC7, 0xC0, 0x01, 0x00, 0x00, 0x00,
    //     // 将 1 加到 rax 寄存器中
    //     0x48, 0x83, 0xC0, 0x01,
    //     // 将结果打印到标准输出
    //     0x48, 0xC7, 0xC0, 0x01, 0x00, 0x00, 0x00, // mov rax, 1 (sys_write)
    //     0x48, 0xC7, 0xC3, 0x01, 0x00, 0x00, 0x00, // mov rbx, 1 (stdout)
    //     0x48, 0x89, 0xC1,                         // mov rcx, rax (将结果存储到 rcx 寄存器)
    //     0x48, 0xC7, 0xC2, 0x04, 0x00, 0x00, 0x00, // mov rdx, 4 (输出字符的长度为 4 个字节)
    //     0x0F, 0x05,                               // syscall (触发系统调用)
    //     // 退出程序
    //     0x48, 0xC7, 0xC0, 0x3C, 0x00, 0x00, 0x00, // mov rax, 60 (sys_exit)
    //     0x48, 0x31, 0xFF,                         // xor rdi, rdi (设置退出码为 0)
    //     0x0F, 0x05                                // syscall (触发系统调用)
    // };

    // // 声明并执行 shellcode 函数指针
    // void (*func)() = (void (*)())shellcode;
    // func();

    // int result;

    // // 使用内联汇编实现将 1 加 1 的功能
    // asm ("mov $1, %%eax\n\t"
    //      "add $1, %%eax\n\t"
    //      "mov %%eax, %0\n\t"
    //      : "=r" (result)  // 输出操作数
    //      :                 // 输入操作数
    //      : "eax");         // 使用的寄存器

    // printf("1 + 1 = %d\n", result);

    return 0;
}
