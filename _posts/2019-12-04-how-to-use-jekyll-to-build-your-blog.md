---
title: How to use jekyll to build your blog
published: true
---

### Introduction

这个Blog通过`jekyll`构建而成,托管在`github.io`上。`jekyll`是用ruby写的，我们只需要按照markdown的格式书写我们的文章，提交到自己的repository，github会用jekell构建我们的站点，十分的方便。

### Installtion

```bash
gem install jekyll
gem install jekyll-seo-tag
gem install jekyll-paginate
gem install jekyll-sitemap
```

### How to run blog locally

jekyll 4.0版本需要加上参数`--tarce`打印堆栈信息，参数`--watch`可以监听文件的更新，实时编译你的blog，修改完刷新就可以立即看到效果。

```bash
jekyll serve --trace --watch --port 8000
```

### 如何使用jekyll修改主题

jekyll是有模板语法的，网上搜索了一下，果不其然，[前往地址](https://yulijia.net/cn/%E8%BD%AF%E4%BB%B6%E4%B8%96%E7%95%8C/2015/03/12/jekyll-syntax.html)。  

文章在目录`_posts`下，但是就支持一级，如果后面文章多了，列表就显得十分的大，不容易管理和搜索。  

接下来有几个想法，想改造一下这个主题。

1. 支持多级目录
2. 优化样式，增加个多的信息展示
