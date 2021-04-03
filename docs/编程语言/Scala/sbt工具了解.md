## sbt Scala构建工具 
> sbt是一款scala的构建管理工具，这里就不做安装的解释了，主要是深入的了解一下里面的参数，已经字符的含义，如：`:=`、`%`、`%%`等

### 目录结构
- 源代码目录
    - src/main/scala or src/main/java
- 测试文件目录
    - src/test/scala or src/test/java
- 数据资源
    - src/main/resources or src/test/resources
- lib jar包

### 构建文件build.bat
```scala
lazy val root = (project in file("."))
  .settings(
    name := "hello",
    version := "1.0",
    scalaVersion := "2.12.13"
  )
```

- += 表示追加
- % 表示字符串构造lvy模块ID的

### 依赖
```
libraryDependencies += groupID % artifactID % revision % configuration
```

### 常用命令

|命令|解释说明|
|:----:|:----:|
|clean|	删除所有生成的文件 （在 target 目录下）。|
|compile|	编译源文件（在 src/main/scala 和 src/main/java 目录下）。|
|test	|编译和运行所有测试。|
|console|	进入到一个包含所有编译的文件和所有依赖的 classpath 的 Scala 解析器。输入 :quit， |Ctrl+D （Unix），或者 Ctrl+Z （Windows） 返回到 sbt。
|run |<参数>*	在和 sbt 所处的同一个虚拟机上执行项目的 main class。
|package	|将 src/main/resources 下的文件和 src/main/scala 以及 src/main/java 中编译出来的 class 文件打包成一个 jar 文件。|
|help| <命令>	显示指定的命令的详细帮助信息。如果没有指定命令，会显示所有命令的简介。|
|reload|	重新加载构建定义（build.sbt， project/*.scala， project/*.sbt 这些文件中定义的内容)。在修改了构建定义文件之后需要重新加载。|

## 参考文档
- [https://www.scala-sbt.org/1.x/docs/zh-cn/Running.html](https://www.scala-sbt.org/1.x/docs/zh-cn/Running.html)
- [https://www.scala-sbt.org/1.x/docs/sbt-by-example.html](https://www.scala-sbt.org/1.x/docs/sbt-by-example.html)