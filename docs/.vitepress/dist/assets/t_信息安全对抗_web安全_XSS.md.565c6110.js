import{_ as s,c as a,o as l,b as e}from"./app.9e51ea0e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"XSS \u8DE8\u57DF\u811A\u672C\u653B\u51FB","slug":"xss-\u8DE8\u57DF\u811A\u672C\u653B\u51FB","link":"#xss-\u8DE8\u57DF\u811A\u672C\u653B\u51FB","children":[{"level":3,"title":"\u7C7B\u578B","slug":"\u7C7B\u578B","link":"#\u7C7B\u578B","children":[]}]},{"level":2,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848","link":"#\u89E3\u51B3\u65B9\u6848","children":[]}],"relativePath":"t/\u4FE1\u606F\u5B89\u5168\u5BF9\u6297/web\u5B89\u5168/XSS.md"}'),n={name:"t/\u4FE1\u606F\u5B89\u5168\u5BF9\u6297/web\u5B89\u5168/XSS.md"},t=e(`<h2 id="xss-\u8DE8\u57DF\u811A\u672C\u653B\u51FB" tabindex="-1">XSS \u8DE8\u57DF\u811A\u672C\u653B\u51FB <a class="header-anchor" href="#xss-\u8DE8\u57DF\u811A\u672C\u653B\u51FB" aria-hidden="true">#</a></h2><h3 id="\u7C7B\u578B" tabindex="-1">\u7C7B\u578B <a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a></h3><h4 id="\u53CD\u5C04\u578B" tabindex="-1">\u53CD\u5C04\u578B <a class="header-anchor" href="#\u53CD\u5C04\u578B" aria-hidden="true">#</a></h4><ul><li>\u901A\u8FC7URL\u53C2\u6570\uFF0C\u53D1\u8D77\u653B\u51FB</li><li>\u5F53\u7136\u4E5F\u53EF\u4EE5\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898\uFF0C\u7F16\u5199\u4EE3\u7801\uFF0C\u6784\u9020\u5F02\u6B65\u52A0\u8F7Djs\u6587\u4EF6\uFF0C\u53EF\u4EE5\u89E3\u51B3URL\u8FC7\u957F\u53D7\u9650\u7684\u95EE\u9898</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">http://example.com</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">a=</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">alert</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">)&lt;</span><span style="color:#A6ACCD;">/script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_GET</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span></code></pre></div><h4 id="\u5B58\u50A8\u578B" tabindex="-1">\u5B58\u50A8\u578B <a class="header-anchor" href="#\u5B58\u50A8\u578B" aria-hidden="true">#</a></h4><ul><li>\u4E00\u6B21\u653B\u51FB\uFF0C\u591A\u6B21\u4F7F\u7528\uFF0C\u6BD4\u5982\u653B\u51FB\u811A\u672C\u5B58\u50A8\u5728\u670D\u52A1\u7AEF\u6570\u636E\u5E93\uFF0C\u6587\u4EF6\u4E2D\u7B49\u3002</li><li>\u4F8B\u5982 <ul><li>\u63D0\u4EA4\u8868\u5355\u6570\u636E\u4F1A\u5B58\u50A8\u5728\u6570\u636E\u5E93\u4E2D\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u6570\u636E\u4F1A\u5C55\u793A\u5728\u9875\u9762\u4E0A\u3002\u5728\u4E0D\u89E3\u51B3\u8FD9\u4E2A\u653B\u51FB\u4E4B\u524D\uFF0C\u8FD9\u90FD\u662F\u6C38\u4E45\u5B58\u5728\u7684XSS\u653B\u51FB\u3002\u88AB\u653B\u51FB\u8005\u53EA\u8981\u8BBF\u95EE\u4E86\u8FD9\u4E2A\u9875\u9762\uFF0C\u5C31\u4F1A\u88AB\u906D\u5230\u653B\u51FB</li></ul></li></ul><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h2><ul><li>\u8FC7\u6EE4</li><li>\u8F6C\u7801</li></ul>`,10),p=[t];function o(c,r,i,d,h,D){return l(),a("div",null,p)}const y=s(n,[["render",o]]);export{u as __pageData,y as default};
