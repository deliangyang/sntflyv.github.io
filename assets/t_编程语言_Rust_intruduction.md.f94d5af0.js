import{_ as s,c as a,o as n,a as e}from"./app.0ce55433.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5982\u4F55\u5165\u95E8 rust-lang\uFF0C\u4ECE\u5B98\u65B9\u6587\u6863\u9605\u8BFB\u5F00\u59CB","slug":"\u5982\u4F55\u5165\u95E8-rust-lang-\u4ECE\u5B98\u65B9\u6587\u6863\u9605\u8BFB\u5F00\u59CB","link":"#\u5982\u4F55\u5165\u95E8-rust-lang-\u4ECE\u5B98\u65B9\u6587\u6863\u9605\u8BFB\u5F00\u59CB","children":[]},{"level":3,"title":"Rust HelloWorld \u7A0B\u5E8F\u5206\u6790","slug":"rust-helloworld-\u7A0B\u5E8F\u5206\u6790","link":"#rust-helloworld-\u7A0B\u5E8F\u5206\u6790","children":[]},{"level":3,"title":"\u5B66\u4E60\u6848\u4F8B","slug":"\u5B66\u4E60\u6848\u4F8B","link":"#\u5B66\u4E60\u6848\u4F8B","children":[]}],"relativePath":"t/\u7F16\u7A0B\u8BED\u8A00/Rust/intruduction.md","lastUpdated":1729589704000}'),l={name:"t/\u7F16\u7A0B\u8BED\u8A00/Rust/intruduction.md"},r=e(`<h3 id="\u5982\u4F55\u5165\u95E8-rust-lang-\u4ECE\u5B98\u65B9\u6587\u6863\u9605\u8BFB\u5F00\u59CB" tabindex="-1">\u5982\u4F55\u5165\u95E8 rust-lang\uFF0C\u4ECE\u5B98\u65B9\u6587\u6863\u9605\u8BFB\u5F00\u59CB <a class="header-anchor" href="#\u5982\u4F55\u5165\u95E8-rust-lang-\u4ECE\u5B98\u65B9\u6587\u6863\u9605\u8BFB\u5F00\u59CB" aria-hidden="true">#</a></h3><p>\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60 Rust\uFF1FRust \u5B66\u4E60\u66F2\u7EBF\u9AD8\uFF0C\u5165\u95E8\u4E5F\u4E0D\u7B80\u5355\uFF0C\u770B\u770B Rust \u7684\u81EA\u8350\u3002</p><blockquote><p>\u4E00\u95E8\u8D4B\u4E88\u6BCF\u4E2A\u4EBA<br> \u6784\u5EFA\u53EF\u9760\u4E14\u9AD8\u6548\u8F6F\u4EF6\u80FD\u529B\u7684\u8BED\u8A00\u3002</p></blockquote><ol><li>\u9AD8\u6027\u80FD <ul><li>Rust \u901F\u5EA6\u60CA\u4EBA\u4E14\u5185\u5B58\u5229\u7528\u7387\u6781\u9AD8\u3002\u7531\u4E8E\u6CA1\u6709\u8FD0\u884C\u65F6\u548C\u5783\u573E\u56DE\u6536\uFF0C\u5B83\u80FD\u591F\u80DC\u4EFB\u5BF9\u6027\u80FD\u8981\u6C42\u7279\u522B\u9AD8\u7684\u670D\u52A1\uFF0C\u53EF\u4EE5\u5728\u5D4C\u5165\u5F0F\u8BBE\u5907\u4E0A\u8FD0\u884C\uFF0C\u8FD8\u80FD\u8F7B\u677E\u548C\u5176\u4ED6\u8BED\u8A00\u96C6\u6210\u3002</li></ul></li><li>\u53EF\u9760\u6027 <ul><li>Rust \u4E30\u5BCC\u7684\u7C7B\u578B\u7CFB\u7EDF\u548C\u6240\u6709\u6743\u6A21\u578B\u4FDD\u8BC1\u4E86\u5185\u5B58\u5B89\u5168\u548C\u7EBF\u7A0B\u5B89\u5168\uFF0C\u8BA9\u60A8\u5728\u7F16\u8BD1\u671F\u5C31\u80FD\u591F\u6D88\u9664\u5404\u79CD\u5404\u6837\u7684\u9519\u8BEF\u3002</li></ul></li><li>\u751F\u4EA7\u529B <ul><li>Rust \u62E5\u6709\u51FA\u8272\u7684\u6587\u6863\u3001\u53CB\u597D\u7684\u7F16\u8BD1\u5668\u548C\u6E05\u6670\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u8FD8\u96C6\u6210\u4E86\u4E00\u6D41\u7684\u5DE5\u5177 \u2014\u2014 \u5305\u7BA1\u7406\u5668\u548C\u6784\u5EFA\u5DE5\u5177\uFF0C\u667A\u80FD\u5730\u81EA\u52A8\u8865\u5168\u548C\u7C7B\u578B\u68C0\u9A8C\u7684\u591A\u7F16\u8F91\u5668\u652F\u6301\uFF0C\u4EE5\u53CA\u81EA\u52A8\u683C\u5F0F\u5316\u4EE3\u7801\u7B49\u7B49\u3002</li></ul></li></ol><h4 id="\u5B98\u65B9\u6587\u6863" tabindex="-1">\u5B98\u65B9\u6587\u6863 <a class="header-anchor" href="#\u5B98\u65B9\u6587\u6863" aria-hidden="true">#</a></h4><ul><li><a href="https://www.rust-lang.org/zh-CN/" target="_blank" rel="noreferrer">\u4E2D\u6587\u6587\u6863</a></li><li><a href="https://www.rust-lang.org/learn" target="_blank" rel="noreferrer">\u82F1\u6587\u6587\u6863</a></li></ul><h4 id="\u5B89\u88C5-rust-lang-ide" tabindex="-1">\u5B89\u88C5 rust-lang IDE <a class="header-anchor" href="#\u5B89\u88C5-rust-lang-ide" aria-hidden="true">#</a></h4><p>Jetbrains \u662F\u4E00\u5BB6\u5F00\u53D1 IDE \u7684\u516C\u53F8\uFF0C\u65D7\u4E0B\u6709\u5F88\u591A\u4F18\u79C0\u7684 IDE\uFF0Cphpstorm\u3001goland\u3001webstore\u3001pyCharm \u7B49\uFF0C\u4ECA\u5929\u6211\u4EEC\u8981\u7528\u5230\u7684\u662F Intellij\uFF0C\u7136\u540E\u6211\u4EEC\u53EF\u4EE5\u5728\u4ED6\u7684\u63D2\u4EF6\u7BA1\u7406\u5668\u4E2D\u4E0B\u8F7D rust \u7684\u63D2\u4EF6\uFF0C\u5B89\u88C5\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91CD\u542F IDE\uFF0C\u521B\u5EFA rust \u5E94\u7528\u7A0B\u5E8F\u3002</p><p>\u5982\u679C\u9700\u8981\u7814\u7A76\u9605\u8BFB\u63D2\u4EF6\u7684\u6E90\u4EE3\u7801\uFF0C\u8DDF\u8FDB\u63D2\u4EF6\u7684\u7279\u6027\uFF0C\u53EF\u4EE5<a href="https://intellij-rust.github.io/" target="_blank" rel="noreferrer">\u5728 github \u4E0A</a>\u8BA8\u8BBA\u3002</p><h4 id="\u5173\u4E8E-rust-lang-\u7684\u73AF\u5883\u914D\u7F6E" tabindex="-1">\u5173\u4E8E rust-lang \u7684\u73AF\u5883\u914D\u7F6E <a class="header-anchor" href="#\u5173\u4E8E-rust-lang-\u7684\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a></h4><p>\u5B98\u65B9\u63D0\u4F9B\u4E86\u5F88\u4F18\u79C0\u7684\u89E3\u51B3\u65B9\u6848\uFF0C<a href="https://www.rust-lang.org/tools/install" target="_blank" rel="noreferrer">Install Rust</a>\uFF0C\u4E0D\u77E5\u9053\u4ECE\u4EC0\u4E48\u65F6\u5019\u5F00\u59CB\uFF0C\u5B66\u4E60\u4E1C\u897F\u559C\u6B22\u4ECE\u5B83\u7684\u5B98\u65B9\u6587\u6863\u5148\u5F00\u59CB\u7814\u7A76\u3002</p><blockquote><p>It looks like you\u2019re running macOS, Linux, or another Unix-like OS. To download Rustup and install Rust, run the following in your terminal, then follow the on-screen instructions. \u5B98\u65B9\u63D0\u4F9B\u7684\u65B9\u6CD5\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u662F\u4E00\u4E2A\u81EA\u52A8\u5316\u5B89\u88C5\u7684 shell \u811A\u672C\uFF0Ccurl \u4E0B\u8F7D shell \u811A\u672C\uFF0C\u4E00\u952E\u90E8\u7F72\u5B89\u88C5\u73AF\u5883\uFF0C\u5341\u5206\u7684\u7B80\u5355\u65B9\u4FBF\u3002</p></blockquote><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl https://sh.rustup.rs -sSf </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h4 id="\u9605\u8BFB\u6587\u6863-\u4ECEhello-world\u7A0B\u5E8F\u5F00\u59CB\u6211\u4EEC\u7684-rust" tabindex="-1">\u9605\u8BFB\u6587\u6863\uFF0C\u4ECE<code>Hello world</code>\u7A0B\u5E8F\u5F00\u59CB\u6211\u4EEC\u7684 rust <a class="header-anchor" href="#\u9605\u8BFB\u6587\u6863-\u4ECEhello-world\u7A0B\u5E8F\u5F00\u59CB\u6211\u4EEC\u7684-rust" aria-hidden="true">#</a></h4><p>\u5F00\u59CB\u6211\u4EEC\u7684 rust<code>hello world</code>\u7A0B\u5E8F\u4E4B\u65C5\uFF0C\u4E0D\u5F97\u4E0D\u63D0\u4E00\u4E0B cargo\uFF0Crust \u7684\u5305\u7BA1\u7406\u5DE5\u5177\uFF08Rust&#39;s package manager\uFF09\u3002</p><h5 id="\u9996\u5148\u6211\u4EEC\u9700\u8981\u901A\u8FC7cargo\u521B\u5EFA\u4E00\u4E2A-rust-\u7684\u9879\u76EE" tabindex="-1">\u9996\u5148\u6211\u4EEC\u9700\u8981\u901A\u8FC7<code>cargo</code>\u521B\u5EFA\u4E00\u4E2A rust \u7684\u9879\u76EE <a class="header-anchor" href="#\u9996\u5148\u6211\u4EEC\u9700\u8981\u901A\u8FC7cargo\u521B\u5EFA\u4E00\u4E2A-rust-\u7684\u9879\u76EE" aria-hidden="true">#</a></h5><p>\u5728\u547D\u4EE4\u884C\u6267\u884C<code>cargo new hello-world</code>\uFF0C\u7136\u540E cargo \u7BA1\u7406\u5668\u5C31\u4E3A\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A hello-world \u7684\u76EE\u5F55\uFF0C\u8FD9\u4E2A\u76EE\u5F55\u5982\u4E0B\uFF1A</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 Cargo.lock</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 Cargo.toml</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2514\u2500\u2500 main.rs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5176\u5B9E<code>cargo new</code>\uFF0C\u4F1A\u76F4\u63A5\u7ED9\u6211\u4EEC\u81EA\u52A8\u751F\u6210\u4E00\u4E2A hello world \u7684\u7A0B\u5E8F\uFF0C\u4EE3\u7801\u5982\u4E0B</p><div class="language-rust line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello, world!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7136\u540E\u6211\u4EEC\u53EA\u9700\u8981\u6267\u884C\u5982\u4E0B\u811A\u672C\uFF0Ccargo \u4F1A\u5E2E\u6211\u4EEC\u81EA\u52A8\u751F\u6210\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u5E76\u4E14\u6267\u884C\u8F93\u51FA\u7ED3\u679C\u3002</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cargo run</span></span>
<span class="line"><span style="color:#676E95;">#   Compiling hello-demo v0.1.0 (/Users/demo/project/hello-demo)</span></span>
<span class="line"><span style="color:#676E95;">#    Finished dev [unoptimized + debuginfo] target(s) in 0.78s</span></span>
<span class="line"><span style="color:#676E95;">#     Running \`target/debug/hello-demo\`</span></span>
<span class="line"><span style="color:#676E95;">#   Hello world</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="\u4F7F\u7528-rustc-\u7F16\u8BD1-rs-\u6587\u4EF6" tabindex="-1">\u4F7F\u7528 Rustc <a href="http://xn--5p0as4x.rs" target="_blank" rel="noreferrer">\u7F16\u8BD1.rs</a> \u6587\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528-rustc-\u7F16\u8BD1-rs-\u6587\u4EF6" aria-hidden="true">#</a></h5><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Rustc src/main.rs</span></span>
<span class="line"><span style="color:#A6ACCD;">./main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Hello world</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="rust-helloworld-\u7A0B\u5E8F\u5206\u6790" tabindex="-1">Rust HelloWorld \u7A0B\u5E8F\u5206\u6790 <a class="header-anchor" href="#rust-helloworld-\u7A0B\u5E8F\u5206\u6790" aria-hidden="true">#</a></h3><p>Rust \u53EF\u6267\u884C\u7A0B\u5E8F\u4E00\u5B9A\u9700\u8981\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\uFF0C\u548C C/C++ \u4E00\u6837\uFF0C\u9700\u8981\u4E00\u4E2A<code>manin</code>\u51FD\u6570\uFF0C\u5173\u952E\u8BCD<code>fn</code>\u8868\u793A\u51FD\u6570\uFF0C\u5B8F<code>println!</code>\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u6253\u5370\u8F93\u51FA\u3002 \u4E3A\u4EC0\u4E48\u8BF4\u957F\u5F97\u50CF\u51FD\u6570\u7684<code>println!</code>\u662F\u5B8F\uFF0C\u5982\u679C\u4F60\u89C2\u5BDF\u4ED4\u7EC6\u7684\u8BDD\uFF0C\u4F60\u4F1A\u53D1\u73B0\u5B8F\u662F\u5728\u51FD\u6570\u540E\u9762\u589E\u52A0\u4E86\u4E00\u4E2A\u611F\u53F9\u53F7<code>!</code>\uFF0C\u8FD9\u4E2A\u6807\u8BC6\u6807\u8BC6\u5B83\u5C31\u662F\u5B8F\u3002 \u5173\u4E8E\u5B8F\u7684\u4ECB\u7ECD\uFF0C\u540E\u9762\u6211\u4F1A\u5F04\u4E2A\u4E13\u680F\u6765\u4ECB\u7ECD\u5B83\u3002\u5B8F\u4E0D\u7BA1\u662F\u5728 C \u8FD8\u662F Rust \u4E2D\uFF0C\u90FD\u5341\u5206\u7684\u5F3A\u5927\u3002\u76F8\u4FE1\u4F60\u4E5F\u4F1A\u559C\u6B22\u8FD9\u95E8\u8BED\u8A00\u7684\u3002</p><h3 id="\u5B66\u4E60\u6848\u4F8B" tabindex="-1">\u5B66\u4E60\u6848\u4F8B <a class="header-anchor" href="#\u5B66\u4E60\u6848\u4F8B" aria-hidden="true">#</a></h3><ol><li><a href="https://github.com/deliangyang/test-work" target="_blank" rel="noreferrer">test-work</a></li><li><a href="https://github.com/deliangyang/rust-demo" target="_blank" rel="noreferrer">rust-demo</a></li><li><a href="https://github.com/deliangyang/leetcode.rs" target="_blank" rel="noreferrer">leetcode</a></li></ol>`,28),o=[r];function t(p,i,c,d,u,h){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{g as __pageData,m as default};
