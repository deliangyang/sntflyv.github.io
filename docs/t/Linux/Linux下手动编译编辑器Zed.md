
抱着好玩的心态，想在 Ubuntu 上试用一下 Zed 编辑器。

Zed 官方暂时不提供二进制程序下载，但是提供了 [Linux 编译安装指南](https://github.com/zed-industries/zed/blob/main/docs/src/developing_zed__building_zed_linux.md)。

自己体验了一下 Linux 编译安装 Zed，由于需要下载大量的依赖，安装耗时比较长（可能受自己网络带宽的影响）。当然，图个新鲜劲儿，这些都不是事儿。

## 编译安装

### 下载源码

```bash
git clone git@github.com:zed-industries/zed.git
```

### 更新子模块

```bash
git submodule update --init --recursive
```

### 安装依赖

```bash
script/linux
```

### 编译 Zed 编辑器

```bash
cargo build --release
```

### 启动 Zed 编辑器

```bash
./target/release/Zed
```

## 感受

1. 编辑器大小调整不可以通过鼠标拖拽边缘来实现缩放，只能使用默认小屏，或者通过按压快捷键 F11 实现全屏。
2. 对汉字输入和展示不友好。汉字展示乱码，也有可能是字体原因，这里就不深究了，还有就是无法通过输入法实现汉字输入。
3. 扩展插件比较少，但有不少主题
4. 编辑输入没有延时和卡顿
5. 支持 AI 辅助编程

## 界面如下

![Zed UI](./zed-screen.png)