import{_ as s,c as a,o as n,b as l}from"./app.9e51ea0e.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"lua\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784","slug":"lua\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784","link":"#lua\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784","children":[]}],"relativePath":"t/\u7F16\u7A0B\u8BED\u8A00/lua/\u76EE\u5F55\u7ED3\u6784.md"}'),p={name:"t/\u7F16\u7A0B\u8BED\u8A00/lua/\u76EE\u5F55\u7ED3\u6784.md"},e=l(`<h3 id="lua\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784" tabindex="-1">lua\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#lua\u5DE5\u7A0B\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h3><h4 id="\u67E5\u770Blua\u7684\u5934\u6587\u4EF6" tabindex="-1">\u67E5\u770Blua\u7684\u5934\u6587\u4EF6 <a class="header-anchor" href="#\u67E5\u770Blua\u7684\u5934\u6587\u4EF6" aria-hidden="true">#</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">tree</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep -vP </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.c$</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lapi.h              // </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lauxlib.h           // \u63D0\u4F9B\u7ED9\u5916\u90E8\u4F7F\u7528\u7684\u8F85\u52A9\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lcode.h             // lua\u7684\u4EE3\u7801\u751F\u6210\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lctype.h            // </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 ldebug.h            // \u8C03\u8BD5\u7ED3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 ldo.h               // lua\u7684\u6808\u548C\u8C03\u52A8\u7ED3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lfunc.h             // \u5305\u88C5\u539F\u578B\u548C\u95ED\u5305\u7684\u8F85\u52A9\u51FD\u6570\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lgc.h               // \u5783\u573E\u56DE\u6536</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 llex.h              // \u8BCD\u6CD5\u5206\u6790\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 llimits.h           // </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lmem.h              // \u5185\u5B58\u7BA1\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lobject.h           // lua\u57FA\u672C\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lopcodes.h          // lua\u865A\u62DF\u673A\u7684\u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lparser.h           //</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lprefix.h           //</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lstate.h            // \u865A\u62DF\u673A\u72B6\u6001\u7ED3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lstring.h           // string\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 ltable.h            // \u8868\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 ltm.h               // Tag methods</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lua.h               // lua\u72EC\u7ACB\u89E3\u91CA\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lua.hpp             // c++</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 luaconf.h           // Configuration file for Lua, lua\u7684\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lualib.h            // </span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lundump.h           // \u4FDD\u5B58\u9884\u7F16\u8BD1\u7684lua\u4EE3\u7801\u5757\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 lvm.h               // \u865A\u62DF\u673A</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 lzio.h              // \u901A\u7528\u7684\u5E26\u7F13\u51B2\u533A\u7684\u8F93\u5165\u6D41\u63A5\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),o=[e];function c(t,r,i,C,A,h){return n(),a("div",null,o)}const y=s(p,[["render",c]]);export{d as __pageData,y as default};
