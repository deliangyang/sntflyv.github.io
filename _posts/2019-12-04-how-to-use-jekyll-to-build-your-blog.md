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

