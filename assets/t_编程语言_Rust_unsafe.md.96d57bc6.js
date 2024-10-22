import{_ as s,c as n,o as a,a as l}from"./app.0ce55433.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4E0D\u5B89\u5168\u7684 Rust \u4EE3\u7801 unsafe","slug":"\u4E0D\u5B89\u5168\u7684-rust-\u4EE3\u7801-unsafe","link":"#\u4E0D\u5B89\u5168\u7684-rust-\u4EE3\u7801-unsafe","children":[]},{"level":3,"title":"\u6709\u54EA\u4E9B\u8D85\u7EA7\u529B\u91CF\u5462\uFF1F","slug":"\u6709\u54EA\u4E9B\u8D85\u7EA7\u529B\u91CF\u5462","link":"#\u6709\u54EA\u4E9B\u8D85\u7EA7\u529B\u91CF\u5462","children":[]},{"level":3,"title":"\u89E3\u5F15\u7528\u88F8\u6307\u9488","slug":"\u89E3\u5F15\u7528\u88F8\u6307\u9488","link":"#\u89E3\u5F15\u7528\u88F8\u6307\u9488","children":[]},{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F","link":"#\u6CE8\u610F","children":[]}],"relativePath":"t/\u7F16\u7A0B\u8BED\u8A00/Rust/unsafe.md","lastUpdated":1729589704000}'),p={name:"t/\u7F16\u7A0B\u8BED\u8A00/Rust/unsafe.md"},e=l(`<h3 id="\u4E0D\u5B89\u5168\u7684-rust-\u4EE3\u7801-unsafe" tabindex="-1">\u4E0D\u5B89\u5168\u7684 Rust \u4EE3\u7801 unsafe <a class="header-anchor" href="#\u4E0D\u5B89\u5168\u7684-rust-\u4EE3\u7801-unsafe" aria-hidden="true">#</a></h3><p>Rust \u9690\u85CF\u7740\u7B2C\u4E8C\u79CD\u8BED\u8A00\uFF0C\u5B83\u4E0D\u4F1A\u5F3A\u5236\u6267\u884C\u8FD9\u7C7B\u5185\u5B58\u5B89\u5168\u4FDD\u969C\uFF1A\u8FD9\u4E2A\u88AB\u79F0\u4E3A\u4E0D\u5B89\u5168\u7684 Rust\uFF08unsafe Rust\uFF09\u3002\u4E0E\u5E38\u89C4\u7684 Rust \u4EE3\u7801\u65E0\u5F02\uFF0C\u4F46\u662F\u5B83\u63D0\u4F9B\u4E86\u989D\u5916\u7684\u8D85\u7EA7\u529B\u91CF\u3002 \u4E3A\u4EC0\u4E48\u4F1A\u5B58\u5728 Unsafe Rust \u4EE3\u7801\uFF0C\u5176\u672C\u8D28\u5C31\u662F Rust \u672C\u8EAB\u9759\u6001\u5206\u6790\u4FDD\u5B88\u5BFC\u81F4\u3002</p><h3 id="\u6709\u54EA\u4E9B\u8D85\u7EA7\u529B\u91CF\u5462" tabindex="-1">\u6709\u54EA\u4E9B\u8D85\u7EA7\u529B\u91CF\u5462\uFF1F <a class="header-anchor" href="#\u6709\u54EA\u4E9B\u8D85\u7EA7\u529B\u91CF\u5462" aria-hidden="true">#</a></h3><ol><li>\u89E3\u5F15\u7528\u88F8\u6307\u9488</li><li>\u8C03\u7528\u4E0D\u5B89\u5168\u7684\u51FD\u6570\u6216\u8005\u65B9\u6CD5</li><li>\u8BBF\u95EE\u6216\u8005\u4FEE\u6539\u53EF\u53D8\u9759\u6001\u53D8\u91CF</li><li>\u5B9E\u73B0\u4E0D\u5B89\u5168\u7684 trait</li></ol><h3 id="\u89E3\u5F15\u7528\u88F8\u6307\u9488" tabindex="-1">\u89E3\u5F15\u7528\u88F8\u6307\u9488 <a class="header-anchor" href="#\u89E3\u5F15\u7528\u88F8\u6307\u9488" aria-hidden="true">#</a></h3><ul><li>\u88F8\u6307\u9488\u662F\u53EF\u53D8\u6216\u8005\u4E0D\u53EF\u53D8\u7684\uFF0C\u5206\u522B\u5199\u4F5C<code>*mut T</code>\u548C<code>*const T</code>\u3002\u8FD9\u91CC\u7684<code>*</code>\u4E0D\u662F\u89E3\u5F15\u7528\u8FD0\u7B97\u7B26\uFF0C\u5B83\u662F\u7C7B\u578B\u540D\u79F0\u7684\u4E00\u90E8\u5206\u3002\u5728\u88F8\u6307\u9488\u7684\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u4E0D\u53EF\u53D8\u610F\u5473\u7740\u6307\u9488\u89E3\u5F15\u7528\u4E4B\u540E\u4E0D\u80FD\u76F4\u63A5\u8D4B\u503C\u3002</li><li>\u4E0E\u5F15\u7528\u548C\u667A\u80FD\u6307\u9488\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u8BB0\u4F4F\u88F8\u6307\u9488</li><li>\u7279\u5F81 <ol><li>\u5141\u8BB8\u5FFD\u7565\u501F\u7528\u89C4\u5219\uFF0C\u53EF\u4EE5\u540C\u65F6\u62E5\u6709\u4E0D\u53EF\u53D8\u548C\u53EF\u53D8\u7684\u6307\u9488\uFF0C\u6216\u591A\u4E2A\u6307\u5411\u76F8\u540C\u4F4D\u7F6E\u7684\u53EF\u53D8\u6307\u9488</li><li>\u4E0D\u4FDD\u8BC1\u6307\u5411\u6709\u6548\u7684\u5185\u5B58</li><li>\u5141\u8BB8\u4E3A\u7A7A</li><li>\u4E0D\u80FD\u5B9E\u73B0\u4EFB\u4F55\u81EA\u52A8\u6E05\u7406\u5DE5\u4F5C</li></ol></li></ul><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><p>\u4E0D\u5B89\u5168\u7684\u4EE3\u7801\u5FC5\u987B\u7528<code>unsafe</code>\u62EC\u8D77\u6765\uFF0C\u7EC4\u6210\u4EE3\u7801\u5757\uFF0C\u6216\u8005\u51FD\u6570\u524D\u6807\u8BB0\u8BE5\u65B9\u6CD5\u6216\u8005\u51FD\u6570\u662F\u4E0D\u5B89\u5168\u7684</p><div class="language-rust line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">unsafe</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">    // your code</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">unsafe</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">inc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">    // your code</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// for example</span></span>
<span class="line"><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> HELLO_WORLD</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#FFCB6B;">str</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello world!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">mut</span><span style="color:#A6ACCD;"> COUNTER</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u32</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name is: </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> HELLO_WORLD</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">unsafe</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">add_to_count</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">println!</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">count is: </span><span style="color:#89DDFF;">{}&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> COUNTER</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">unsafe</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add_to_count</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">inc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u32</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    COUNTER </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> inc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,9),o=[e];function r(c,t,i,D,F,y){return a(),n("div",null,o)}const A=s(p,[["render",r]]);export{u as __pageData,A as default};
