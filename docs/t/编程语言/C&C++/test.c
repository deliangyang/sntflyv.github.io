#include <stdio.h>
#include <stdlib.h>

int add(int a, int b) {
    return a + b;
}


int main(int argc, char *argv[]) {
    while (*++argv != NULL) {
        printf("%s\n", *argv);
    }
    printf("add => %p\n", &add);
    // 将地址 0x1081ebe60 转换为函数指针
    int (*p)(int, int) = (int (*)(int, int))&add;
    printf("a + b => %d\n", p(1, 2));

    int a = 2;
    int *b = &a;
    int **c = &b;
    printf("%p\n", &a);
    printf("%p\n", b);
    printf("%p\n", &b);
    printf("%p\n", c);
    printf("%p\n", &c);
    printf("%p\n", *c);
    printf("%d\n", **c);
    return 0;
}