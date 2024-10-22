import{_ as s,c as a,o as t,a as e}from"./app.0ce55433.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"sbt Scala \u6784\u5EFA\u5DE5\u5177","slug":"sbt-scala-\u6784\u5EFA\u5DE5\u5177","link":"#sbt-scala-\u6784\u5EFA\u5DE5\u5177","children":[{"level":3,"title":"\u76EE\u5F55\u7ED3\u6784","slug":"\u76EE\u5F55\u7ED3\u6784","link":"#\u76EE\u5F55\u7ED3\u6784","children":[]},{"level":3,"title":"\u6784\u5EFA\u6587\u4EF6 build.bat","slug":"\u6784\u5EFA\u6587\u4EF6-build-bat","link":"#\u6784\u5EFA\u6587\u4EF6-build-bat","children":[]},{"level":3,"title":"\u4F9D\u8D56","slug":"\u4F9D\u8D56","link":"#\u4F9D\u8D56","children":[]},{"level":3,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4","link":"#\u5E38\u7528\u547D\u4EE4","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u6863","slug":"\u53C2\u8003\u6587\u6863","link":"#\u53C2\u8003\u6587\u6863","children":[]}],"relativePath":"t/\u7F16\u7A0B\u8BED\u8A00/Scala/sbt\u5DE5\u5177\u4E86\u89E3.md","lastUpdated":1729589704000}'),l={name:"t/\u7F16\u7A0B\u8BED\u8A00/Scala/sbt\u5DE5\u5177\u4E86\u89E3.md"},n=e(`<h2 id="sbt-scala-\u6784\u5EFA\u5DE5\u5177" tabindex="-1">sbt Scala \u6784\u5EFA\u5DE5\u5177 <a class="header-anchor" href="#sbt-scala-\u6784\u5EFA\u5DE5\u5177" aria-hidden="true">#</a></h2><blockquote><p>sbt \u662F\u4E00\u6B3E scala \u7684\u6784\u5EFA\u7BA1\u7406\u5DE5\u5177\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u505A\u5B89\u88C5\u7684\u89E3\u91CA\u4E86\uFF0C\u4E3B\u8981\u662F\u6DF1\u5165\u7684\u4E86\u89E3\u4E00\u4E0B\u91CC\u9762\u7684\u53C2\u6570\uFF0C\u5DF2\u7ECF\u5B57\u7B26\u7684\u542B\u4E49\uFF0C\u5982\uFF1A<code>:=</code>\u3001<code>%</code>\u3001<code>%%</code>\u7B49</p></blockquote><h3 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h3><ul><li>\u6E90\u4EE3\u7801\u76EE\u5F55 <ul><li>src/main/scala or src/main/java</li></ul></li><li>\u6D4B\u8BD5\u6587\u4EF6\u76EE\u5F55 <ul><li>src/test/scala or src/test/java</li></ul></li><li>\u6570\u636E\u8D44\u6E90 <ul><li>src/main/resources or src/test/resources</li></ul></li><li>lib jar \u5305</li></ul><h3 id="\u6784\u5EFA\u6587\u4EF6-build-bat" tabindex="-1">\u6784\u5EFA\u6587\u4EF6 build.bat <a class="header-anchor" href="#\u6784\u5EFA\u6587\u4EF6-build-bat" aria-hidden="true">#</a></h3><div class="language-scala line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">lazy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">val</span><span style="color:#A6ACCD;"> root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (project in file(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">  .settings(</span></span>
<span class="line"><span style="color:#A6ACCD;">    name </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    version </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    scalaVersion </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2.12.13</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>+= \u8868\u793A\u8FFD\u52A0</li><li>% \u8868\u793A\u5B57\u7B26\u4E32\u6784\u9020 lvy \u6A21\u5757 ID \u7684</li></ul><h3 id="\u4F9D\u8D56" tabindex="-1">\u4F9D\u8D56 <a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">libraryDependencies += groupID % artifactID % revision % configuration</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u547D\u4EE4</th><th style="text-align:center;">\u89E3\u91CA\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">clean</td><td style="text-align:center;">\u5220\u9664\u6240\u6709\u751F\u6210\u7684\u6587\u4EF6\uFF08\u5728 target \u76EE\u5F55\u4E0B\uFF09\u3002</td></tr><tr><td style="text-align:center;">compile</td><td style="text-align:center;">\u7F16\u8BD1\u6E90\u6587\u4EF6\uFF08\u5728 src/main/scala \u548C src/main/java \u76EE\u5F55\u4E0B\uFF09\u3002</td></tr><tr><td style="text-align:center;">test</td><td style="text-align:center;">\u7F16\u8BD1\u548C\u8FD0\u884C\u6240\u6709\u6D4B\u8BD5\u3002</td></tr><tr><td style="text-align:center;">console</td><td style="text-align:center;">\u8FDB\u5165\u5230\u4E00\u4E2A\u5305\u542B\u6240\u6709\u7F16\u8BD1\u7684\u6587\u4EF6\u548C\u6240\u6709\u4F9D\u8D56\u7684 classpath \u7684 Scala \u89E3\u6790\u5668\u3002\u8F93\u5165 :quit\uFF0C</td></tr><tr><td style="text-align:center;">run</td><td style="text-align:center;">&lt;\u53C2\u6570&gt;* \u5728\u548C sbt \u6240\u5904\u7684\u540C\u4E00\u4E2A\u865A\u62DF\u673A\u4E0A\u6267\u884C\u9879\u76EE\u7684 main class\u3002</td></tr><tr><td style="text-align:center;">package</td><td style="text-align:center;">\u5C06 src/main/resources \u4E0B\u7684\u6587\u4EF6\u548C src/main/scala \u4EE5\u53CA src/main/java \u4E2D\u7F16\u8BD1\u51FA\u6765\u7684 class \u6587\u4EF6\u6253\u5305\u6210\u4E00\u4E2A jar \u6587\u4EF6\u3002</td></tr><tr><td style="text-align:center;">help</td><td style="text-align:center;">&lt;\u547D\u4EE4&gt; \u663E\u793A\u6307\u5B9A\u7684\u547D\u4EE4\u7684\u8BE6\u7EC6\u5E2E\u52A9\u4FE1\u606F\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u547D\u4EE4\uFF0C\u4F1A\u663E\u793A\u6240\u6709\u547D\u4EE4\u7684\u7B80\u4ECB\u3002</td></tr><tr><td style="text-align:center;">reload</td><td style="text-align:center;">\u91CD\u65B0\u52A0\u8F7D\u6784\u5EFA\u5B9A\u4E49\uFF08build.sbt\uFF0Cproject/<em>.scala\uFF0Cproject/</em>.sbt \u8FD9\u4E9B\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u5185\u5BB9)\u3002\u5728\u4FEE\u6539\u4E86\u6784\u5EFA\u5B9A\u4E49\u6587\u4EF6\u4E4B\u540E\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u3002</td></tr></tbody></table><h2 id="\u53C2\u8003\u6587\u6863" tabindex="-1">\u53C2\u8003\u6587\u6863 <a class="header-anchor" href="#\u53C2\u8003\u6587\u6863" aria-hidden="true">#</a></h2><ul><li><a href="https://www.scala-sbt.org/1.x/docs/zh-cn/Running.html" target="_blank" rel="noreferrer">https://www.scala-sbt.org/1.x/docs/zh-cn/Running.html</a></li><li><a href="https://www.scala-sbt.org/1.x/docs/sbt-by-example.html" target="_blank" rel="noreferrer">https://www.scala-sbt.org/1.x/docs/sbt-by-example.html</a></li></ul>`,13),r=[n];function c(o,i,p,d,b,u){return t(),a("div",null,r)}const D=s(l,[["render",c]]);export{y as __pageData,D as default};
