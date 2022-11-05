import{_ as e,c as l,o as i,b as r}from"./app.9e51ea0e.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Cargo","slug":"cargo","link":"#cargo","children":[]},{"level":3,"title":"Rust\u8BED\u6CD5","slug":"rust\u8BED\u6CD5","link":"#rust\u8BED\u6CD5","children":[]},{"level":3,"title":"\u7279\u6027","slug":"\u7279\u6027","link":"#\u7279\u6027","children":[]},{"level":3,"title":"\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5DF1\u7684\u7A0B\u5E8F\uFF0C\u5982\u591A\u7EBF\u7A0BWeb Server","slug":"\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5DF1\u7684\u7A0B\u5E8F-\u5982\u591A\u7EBF\u7A0Bweb-server","link":"#\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5DF1\u7684\u7A0B\u5E8F-\u5982\u591A\u7EBF\u7A0Bweb-server","children":[]},{"level":3,"title":"\u6DF1\u5165\u7814\u7A76\u5B8F!","slug":"\u6DF1\u5165\u7814\u7A76\u5B8F","link":"#\u6DF1\u5165\u7814\u7A76\u5B8F","children":[]},{"level":3,"title":"\u5982\u4F55\u9605\u8BFB","slug":"\u5982\u4F55\u9605\u8BFB","link":"#\u5982\u4F55\u9605\u8BFB","children":[]}],"relativePath":"t/\u7F16\u7A0B\u8BED\u8A00/Rust/rust\u5B66\u4E60\u63D0\u7EB2.md"}'),a={name:"t/\u7F16\u7A0B\u8BED\u8A00/Rust/rust\u5B66\u4E60\u63D0\u7EB2.md"},t=r('<h3 id="cargo" tabindex="-1">Cargo <a class="header-anchor" href="#cargo" aria-hidden="true">#</a></h3><h3 id="rust\u8BED\u6CD5" tabindex="-1">Rust\u8BED\u6CD5 <a class="header-anchor" href="#rust\u8BED\u6CD5" aria-hidden="true">#</a></h3><ol><li>\u57FA\u7840\u6570\u636E\u7ED3\u6784 <ul><li>\u96C6\u5408 vector</li><li>\u54C8\u5E0Cmap</li></ul></li><li>\u5B8F!</li><li>I/O</li><li>\u591A\u7EBF\u7A0B</li><li>\u7F51\u7EDC</li><li>GUI</li><li>\u6846\u67B6</li><li>\u6D4B\u8BD5</li></ol><h3 id="\u7279\u6027" tabindex="-1">\u7279\u6027 <a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a></h3><ol><li>\u8FED\u4EE3\u5668\u4E0E\u95ED\u5305\uFF0C\u51FD\u6570\u5F0F\u7F16\u7A0B</li><li>\u667A\u80FD\u6307\u9488</li><li>\u5E76\u53D1\u5B89\u5168</li><li>\u9762\u5411\u5BF9\u8C61</li><li>\u5F02\u5E38\u3001\u9519\u8BEF\u5904\u7406</li></ol><h3 id="\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5DF1\u7684\u7A0B\u5E8F-\u5982\u591A\u7EBF\u7A0Bweb-server" tabindex="-1">\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5DF1\u7684\u7A0B\u5E8F\uFF0C\u5982\u591A\u7EBF\u7A0BWeb Server <a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u81EA\u5DF1\u7684\u7A0B\u5E8F-\u5982\u591A\u7EBF\u7A0Bweb-server" aria-hidden="true">#</a></h3><h3 id="\u6DF1\u5165\u7814\u7A76\u5B8F" tabindex="-1">\u6DF1\u5165\u7814\u7A76\u5B8F! <a class="header-anchor" href="#\u6DF1\u5165\u7814\u7A76\u5B8F" aria-hidden="true">#</a></h3><h3 id="\u5982\u4F55\u9605\u8BFB" tabindex="-1">\u5982\u4F55\u9605\u8BFB <a class="header-anchor" href="#\u5982\u4F55\u9605\u8BFB" aria-hidden="true">#</a></h3><ol><li>\u5B57\u91CC\u884C\u95F4\u90FD\u9700\u8981\u7EC6\u8BFB\uFF0C\u54EA\u6015\u662F\u4E00\u4E2A\u5355\u8BCD\uFF0C\u90FD\u9700\u8981\u5F04\u61C2\u5B83\u662F\u4EC0\u4E48\u610F\u601D\uFF0C\u6709\u4EC0\u4E48\u4F5C\u7528\uFF0C\u6BD4\u5982\u5173\u952E\u8BCD<code>trait</code>\uFF0C\u8C37\u6B4C\u7FFB\u8BD1\u662F\u7279\u5F81\uFF0C\u7279\u70B9\u3002 \u4F46\u662F\u5728Rust\u91CC\uFF0C\u5B83\u5C31\u662F\u4E00\u4E2A\u5B9A\u4E49\u6CDB\u578B\u884C\u4E3A\u7684\u65B9\u6CD5\u3002\u5B83\u53EF\u4EE5\u4E0E\u6CDB\u578B\u7ED3\u5408\u8D77\u6765\u5C06\u6CDB\u578B\u9650\u5B9A\u4E3A\u62E5\u6709\u7279\u5B9A\u884C\u4E3A\u7684\u7C7B\u578B\uFF0C \u800C\u4E0D\u662F\u4EFB\u610F\u7C7B\u578B\u3002</li><li>\u751F\u547D\u5468\u671F\uFF0C\u65B9\u4FBF\u7F16\u8BD1\u5668\u68C0\u67E5\u5F15\u7528\u7684\u6709\u6548\u6027\u3002</li></ol>',9),s=[t];function d(n,h,c,o,u,_){return i(),l("div",null,s)}const f=e(a,[["render",d]]);export{b as __pageData,f as default};
