import{_ as l,c as i,o as e,a}from"./app.0ce55433.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63A5\u53E3\u6587\u6863\u7F16\u5199","slug":"\u63A5\u53E3\u6587\u6863\u7F16\u5199","link":"#\u63A5\u53E3\u6587\u6863\u7F16\u5199","children":[]},{"level":2,"title":"\u7528\u6237\u7CFB\u7EDF","slug":"\u7528\u6237\u7CFB\u7EDF","link":"#\u7528\u6237\u7CFB\u7EDF","children":[{"level":3,"title":"\u5B50\u7528\u6237\u7CFB\u7EDF","slug":"\u5B50\u7528\u6237\u7CFB\u7EDF","link":"#\u5B50\u7528\u6237\u7CFB\u7EDF","children":[]}]},{"level":2,"title":"CDN \u5382\u5546","slug":"cdn-\u5382\u5546","link":"#cdn-\u5382\u5546","children":[]},{"level":2,"title":"\u8BA1\u8D39","slug":"\u8BA1\u8D39","link":"#\u8BA1\u8D39","children":[]},{"level":2,"title":"\u6570\u636E\u7EDF\u8BA1","slug":"\u6570\u636E\u7EDF\u8BA1","link":"#\u6570\u636E\u7EDF\u8BA1","children":[]},{"level":2,"title":"\u65E5\u5FD7\u7BA1\u7406","slug":"\u65E5\u5FD7\u7BA1\u7406","link":"#\u65E5\u5FD7\u7BA1\u7406","children":[]},{"level":2,"title":"\u5546\u52A1\u5408\u4F5C\uFF0C\u63A5\u53E3 SDK \u5F00\u53D1","slug":"\u5546\u52A1\u5408\u4F5C-\u63A5\u53E3-sdk-\u5F00\u53D1","link":"#\u5546\u52A1\u5408\u4F5C-\u63A5\u53E3-sdk-\u5F00\u53D1","children":[{"level":3,"title":"SDK \u7C7B\u578B","slug":"sdk-\u7C7B\u578B","link":"#sdk-\u7C7B\u578B","children":[]},{"level":3,"title":"\u529F\u80FD","slug":"\u529F\u80FD","link":"#\u529F\u80FD","children":[]}]},{"level":2,"title":"\u6570\u636E\u8FC1\u79FB","slug":"\u6570\u636E\u8FC1\u79FB","link":"#\u6570\u636E\u8FC1\u79FB","children":[]}],"relativePath":"t/Openresty/CDN\u7CFB\u7EDF\u91CD\u6784.md","lastUpdated":1729589704000}'),d={name:"t/Openresty/CDN\u7CFB\u7EDF\u91CD\u6784.md"},r=a('<blockquote><p>\u6211\u4EEC\u9700\u8981\u7684\u662F \u5B8C\u5584\u7684\u7528\u6237\u7CFB\u7EDF\uFF0C\u5B50\u7528\u6237\u53CA\u76F8\u5173\u6743\u9650\uFF0C\u7136\u540E \u9884\u4ED8\u8D39 \u540E\u4ED8\u8D39\u7684\u6263\u8D39\uFF0C\u6211\u4EEC\u76EE\u524D\u662F\u878D\u5408\u7684\u767E\u5EA6\u7684 CDN\uFF0C\u540E\u7EED\u53EF\u80FD\u4F1A\u8003\u8651\u878D\u5408\u817E\u8BAF\u7684\uFF0C\u8FD9\u6837\u7684\u8BDD\u4E24\u4E2A CDN \u5E73\u53F0\u600E\u4E48\u505A\u4E00\u4E2A\u6574\u5408</p></blockquote><h2 id="\u63A5\u53E3\u6587\u6863\u7F16\u5199" tabindex="-1">\u63A5\u53E3\u6587\u6863\u7F16\u5199 <a class="header-anchor" href="#\u63A5\u53E3\u6587\u6863\u7F16\u5199" aria-hidden="true">#</a></h2><blockquote><p>\u81EA\u5DF1\u77E5\u9053\u6709\u8FD9\u4E9B\u6D41\u7A0B\u5373\u53EF\uFF0C\u5458\u5DE5\u6D41\u52A8\u6027\u4E0D\u53EF\u63A7\uFF0C\u65B9\u4FBF\u7EF4\u62A4\u4EA4\u63A5</p></blockquote><ul><li>\u81EA\u52A8\u5316\u7BA1\u7406\u63A5\u53E3\u6587\u6863</li><li>\u901A\u7528\u7ED3\u6784\u5B9A\u4E49</li><li>\u529F\u80FD\u6A21\u5757\u5F00\u53D1 <ul><li>\u6570\u636E\u5E93\u8BBE\u8BA1\uFF08\u7528\u6237\u8868\u3001\u914D\u7F6E\u8868\u7B49\u600E\u4E48\u8BBE\u8BA1\uFF09</li><li>\u4F9D\u8D56\u7684\u6570\u636E\u7ED3\u6784\uFF08\u6BD4\u5982\u7528\u5230\u4E86 Redis\u3001\u6D88\u606F\u4E2D\u95F4\u4EF6\u4E4B\u7C7B\u7684\uFF09</li><li>\u903B\u8F91\u7F16\u5199\uFF08\u5982\u4F55\u5B9E\u73B0\u7684\uFF0C\u600E\u4E48\u5B9E\u73B0\u7684\uFF0C\u6570\u636E\u600E\u4E48\u67E5 SQL\uFF0C\u6570\u636E\u8D70\u5411\u7B49\uFF09</li></ul></li></ul><h2 id="\u7528\u6237\u7CFB\u7EDF" tabindex="-1">\u7528\u6237\u7CFB\u7EDF <a class="header-anchor" href="#\u7528\u6237\u7CFB\u7EDF" aria-hidden="true">#</a></h2><h3 id="\u5B50\u7528\u6237\u7CFB\u7EDF" tabindex="-1">\u5B50\u7528\u6237\u7CFB\u7EDF <a class="header-anchor" href="#\u5B50\u7528\u6237\u7CFB\u7EDF" aria-hidden="true">#</a></h3><ul><li>\u6DFB\u52A0\u5B50\u8D26\u53F7\uFF08\u5B50\u8D26\u53F7\u4E0D\u5141\u8BB8\u6CE8\u518C\uFF09 <ul><li>\u4F59\u989D\u3001\u8D26\u5355\u91D1\u989D</li><li>\u5404\u7C7B\u6307\u6807\uFF1A\u6D41\u91CF\u3001\u57DF\u540D\u6570\u91CF\u3001\u4F7F\u7528\u6D41\u91CF</li></ul></li><li>\u6839\u636E\u529F\u80FD\u6A21\u5757\u521B\u5EFA\u89D2\u8272 <ul><li>Rbac \u6743\u9650\u7BA1\u7406\uFF0C\u7528\u6237 - \u89D2\u8272 - \u6743\u9650\u63A7\u5236\uFF0C\u53C2\u8003<a href="http://www.woshipm.com/pd/1150093.html" target="_blank" rel="noreferrer">http://www.woshipm.com/pd/1150093.html</a></li></ul></li><li>\u89D2\u8272\u5F00\u901A\u63A5\u53E3\u6743\u9650\uFF0C\u4E0B\u53D1\u7B7E\u540D\u79D8\u94A5\u7B49</li></ul><h2 id="cdn-\u5382\u5546" tabindex="-1">CDN \u5382\u5546 <a class="header-anchor" href="#cdn-\u5382\u5546" aria-hidden="true">#</a></h2><ul><li>\u4E00\u5904\u6DFB\u52A0\uFF0C\u591A\u5904\u4F7F\u7528 <ul><li>\u5382\u5546\u7684\u7BA1\u7406\uFF0C\u5176\u5B9E\u5C31\u662F\u89C4\u5219\u7684\u7BA1\u7406\uFF0C\u54EA\u4E9B\u57DF\u540D\u5728\u54EA\u4E2A\u5382\u5546\u4E0B\uFF0C\u54EA\u4E2A\u914D\u7F6E\u5728\u54EA\u4E2A\u5382\u5546\u4E0B</li></ul></li><li><code>CDN\u5382\u5546\u63D0\u4F9B\u7684\u63A5\u53E3\u5176\u5B9E\u5DEE\u4E0D\u591A\uFF0C\u4EE3\u7801\u5C42\u9762\u4E0A\u786E\u5B9A\u597Dinterface\uFF08\u63A5\u53E3\uFF09</code>\uFF0C\u529F\u80FD\u5982\u4E0B <ul><li>\u57DF\u540D\u7BA1\u7406 <ul><li>\u6DFB\u52A0\u3001\u4FEE\u6539\u3001\u5220\u9664\u57DF\u540D</li></ul></li><li>SSL \u8BC1\u4E66\u7BA1\u7406 <ul><li>SSL \u8BC1\u4E66\uFF0C\u4E0A\u4F20\u3001\u5220\u9664\u3001\u521B\u5EFA\u514D\u8D39\u8BC1\u4E66</li></ul></li><li>\u7F13\u5B58\u7BA1\u7406 <ul><li>\u5237\u65B0 CDN\uFF0C\u5220\u9664\u7F13\u5B58</li><li>\u8BBE\u7F6E\u89C4\u5219</li></ul></li><li>WAF \u7BA1\u7406</li><li>\u65E5\u5FD7\u4E0B\u8F7D\u3001\u7EDF\u8BA1\u6570\u636E\u67E5\u8BE2</li></ul></li></ul><h2 id="\u8BA1\u8D39" tabindex="-1">\u8BA1\u8D39 <a class="header-anchor" href="#\u8BA1\u8D39" aria-hidden="true">#</a></h2><ul><li>\u9884\u4ED8\u8D39 <ul><li>\u5FAE\u4FE1\u652F\u4ED8</li><li>\u652F\u4ED8\u5B9D\u652F\u4ED8</li></ul></li><li>\u6309\u91CF\u8BA1\u8D39 <ul><li>\u94B1\u5305\u5145\u503C</li></ul></li><li>\u8D26\u5355 <ul><li>\u9884\u4ED8\u8D39\u8D26\u5355</li><li>\u6BCF\u6708\u6309\u91CF\u540E\u4ED8\u8D39\u8D26\u5355 <ul><li>\u8D26\u5355\u652F\u4ED8\u72B6\u6001\u7BA1\u7406</li><li>\u53EF\u5145\u503C\u3001\u53EF\u652F\u4ED8</li></ul></li></ul></li></ul><h2 id="\u6570\u636E\u7EDF\u8BA1" tabindex="-1">\u6570\u636E\u7EDF\u8BA1 <a class="header-anchor" href="#\u6570\u636E\u7EDF\u8BA1" aria-hidden="true">#</a></h2><ul><li>Top5 IP</li><li>\u6D41\u91CF\u6D88\u8017\u66F2\u7EBF\u56FE</li><li>Top10 URL</li><li>\u9519\u8BEF\u7EDF\u8BA1\u3001\u72B6\u6001\u7801\u7EDF\u8BA1\u7B49</li></ul><h2 id="\u65E5\u5FD7\u7BA1\u7406" tabindex="-1">\u65E5\u5FD7\u7BA1\u7406 <a class="header-anchor" href="#\u65E5\u5FD7\u7BA1\u7406" aria-hidden="true">#</a></h2><ul><li>\u5F52\u6863\u65E5\u5FD7\u4E0B\u8F7D <ul><li>\u7EDF\u4E00\u5B9A\u4E49\u597D\u65E5\u5FD7\u7ED3\u6784\uFF0C\u65B9\u4FBF\u6E05\u6D17</li></ul></li><li>\u65E5\u5FD7\u67E5\u8BE2\uFF08\u53EF\u5EF6\u8FDF\uFF09</li></ul><h2 id="\u5546\u52A1\u5408\u4F5C-\u63A5\u53E3-sdk-\u5F00\u53D1" tabindex="-1">\u5546\u52A1\u5408\u4F5C\uFF0C\u63A5\u53E3 SDK \u5F00\u53D1 <a class="header-anchor" href="#\u5546\u52A1\u5408\u4F5C-\u63A5\u53E3-sdk-\u5F00\u53D1" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u5438\u5F15\u5F00\u53D1\uFF0C\u65B9\u4FBF\u5BA2\u6237\u81EA\u52A8\u5316\u8FD0\u7EF4\uFF0C\u8003\u8651\u5F00\u653E\u90E8\u5206\u63A5\u53E3\u65B9\u4FBF\u5BA2\u6237\u81EA\u52A8\u7BA1\u7406\u81EA\u5DF1\u7684 CDN\uFF0C\u5236\u5B9A\u63A5\u53E3\u7B7E\u540D\u89C4\u5219</p><h3 id="sdk-\u7C7B\u578B" tabindex="-1">SDK \u7C7B\u578B <a class="header-anchor" href="#sdk-\u7C7B\u578B" aria-hidden="true">#</a></h3><ul><li>PHP</li><li>Java</li></ul><h3 id="\u529F\u80FD" tabindex="-1">\u529F\u80FD <a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a></h3><ul><li>\u5237\u65B0 CDN <ul><li>\u7F13\u5B58\u9884\u53D6</li></ul></li><li>\u5F52\u6863\u65E5\u5FD7\u4E0B\u8F7D</li><li>\u57DF\u540D\u7BA1\u7406 <ul><li>\u6DFB\u52A0</li><li>\u4FEE\u6539</li><li>\u5220\u9664</li><li>SSL \u8BC1\u4E66\u7BA1\u7406</li></ul></li><li>\u767D\u540D\u5355\uFF0C\u9ED1\u540D\u5355\u6DFB\u52A0</li><li>\u7EDF\u8BA1\u6570\u636E\u67E5\u8BE2</li></ul><h2 id="\u6570\u636E\u8FC1\u79FB" tabindex="-1">\u6570\u636E\u8FC1\u79FB <a class="header-anchor" href="#\u6570\u636E\u8FC1\u79FB" aria-hidden="true">#</a></h2><ul><li>\u8001\u670D\u52A1\u7528\u6237\u6570\u636E\u8FC1\u79FB <ul><li>\u7ED3\u6784\u7684\u8C03\u6574</li></ul></li></ul>',23),t=[r];function h(n,u,s,c,o,_){return e(),i("div",null,t)}const f=l(d,[["render",h]]);export{k as __pageData,f as default};
