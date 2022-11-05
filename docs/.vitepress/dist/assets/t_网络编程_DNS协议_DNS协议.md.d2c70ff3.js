import{_ as s,c as n,o as a,b as l}from"./app.9e51ea0e.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"DNS \u534F\u8BAE","slug":"dns-\u534F\u8BAE","link":"#dns-\u534F\u8BAE","children":[{"level":3,"title":"\u67E5\u8BE2","slug":"\u67E5\u8BE2","link":"#\u67E5\u8BE2","children":[]},{"level":3,"title":"\u5E94\u7B54","slug":"\u5E94\u7B54","link":"#\u5E94\u7B54","children":[]}]}],"relativePath":"t/\u7F51\u7EDC\u7F16\u7A0B/DNS\u534F\u8BAE/DNS\u534F\u8BAE.md"}'),e={name:"t/\u7F51\u7EDC\u7F16\u7A0B/DNS\u534F\u8BAE/DNS\u534F\u8BAE.md"},p=l(`<h2 id="dns-\u534F\u8BAE" tabindex="-1">DNS \u534F\u8BAE <a class="header-anchor" href="#dns-\u534F\u8BAE" aria-hidden="true">#</a></h2><ul><li>\u53D1\u8D77DNS\u67E5\u8BE2 <code>dig blog.sourcedev.cc</code></li><li>WireShark\u6293\u5305\uFF0C\u8FC7\u6EE4\u5173\u952E\u8BCD <code>dns</code> \u5373\u53EF</li><li>DNS \u670D\u52A1\u5668\u9ED8\u8BA4\u7AEF\u53E3 53</li></ul><h3 id="\u67E5\u8BE2" tabindex="-1">\u67E5\u8BE2 <a class="header-anchor" href="#\u67E5\u8BE2" aria-hidden="true">#</a></h3><h4 id="\u6570\u636E\u5305\u4E8C\u8FDB\u5236dump" tabindex="-1">\u6570\u636E\u5305\u4E8C\u8FDB\u5236dump <a class="header-anchor" href="#\u6570\u636E\u5305\u4E8C\u8FDB\u5236dump" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">0000   4c f0 01 20 00 01 00 00 00 00 00 01 03 77 77 77   L.. .........www</span></span>
<span class="line"><span style="color:#A6ACCD;">0010   09 73 6f 75 72 63 65 64 65 76 02 63 63 00 00 01   .sourcedev.cc...</span></span>
<span class="line"><span style="color:#A6ACCD;">0020   00 01 00 00 29 10 00 00 00 00 00 00 00            ....)........</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u53EF\u89C6\u5316\u6570\u636E\u7ED3\u6784" tabindex="-1">\u53EF\u89C6\u5316\u6570\u636E\u7ED3\u6784 <a class="header-anchor" href="#\u53EF\u89C6\u5316\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Domain Name System (query)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Transaction ID: 0x4cf0</span></span>
<span class="line"><span style="color:#A6ACCD;">    Flags: 0x0120 Standard query</span></span>
<span class="line"><span style="color:#A6ACCD;">    Questions: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    Answer RRs: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    Authority RRs: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    Additional RRs: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    Queries</span></span>
<span class="line"><span style="color:#A6ACCD;">        www.sourcedev.cc: type A, class IN</span></span>
<span class="line"><span style="color:#A6ACCD;">            Name: www.sourcedev.cc</span></span>
<span class="line"><span style="color:#A6ACCD;">            [Name Length: 16]</span></span>
<span class="line"><span style="color:#A6ACCD;">            [Label Count: 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">            Type: A (Host Address) (1)</span></span>
<span class="line"><span style="color:#A6ACCD;">            Class: IN (0x0001)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Additional records</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Root&gt;: type OPT</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Response In: 17]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5E94\u7B54" tabindex="-1">\u5E94\u7B54 <a class="header-anchor" href="#\u5E94\u7B54" aria-hidden="true">#</a></h3><h4 id="\u6570\u636E\u5305\u4E8C\u8FDB\u5236dump-1" tabindex="-1">\u6570\u636E\u5305\u4E8C\u8FDB\u5236dump <a class="header-anchor" href="#\u6570\u636E\u5305\u4E8C\u8FDB\u5236dump-1" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">0000   4c f0 81 80 00 01 00 01 00 00 00 00 03 77 77 77   L............www</span></span>
<span class="line"><span style="color:#A6ACCD;">0010   09 73 6f 75 72 63 65 64 65 76 02 63 63 00 00 01   .sourcedev.cc...</span></span>
<span class="line"><span style="color:#A6ACCD;">0020   00 01 c0 0c 00 01 00 01 00 00 02 58 00 04 2a c0   ...........X..*.</span></span>
<span class="line"><span style="color:#A6ACCD;">0030   4e 39                                             N9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u53EF\u89C6\u5316\u6570\u636E\u7ED3\u6784-1" tabindex="-1">\u53EF\u89C6\u5316\u6570\u636E\u7ED3\u6784 <a class="header-anchor" href="#\u53EF\u89C6\u5316\u6570\u636E\u7ED3\u6784-1" aria-hidden="true">#</a></h4><ul><li>\u6743\u5A01\u670D\u52A1\u5668\u540D\u79F0\u53EA\u662F\u5B58\u4E86\u4E00\u4E2A\u6570\u503C\uFF08\u6570\u636E\u5305data\u6240\u5728\u4F4D\u7F6Eoffset\u5F00\u59CB\u4F4D\u7F6E\uFF09\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u53EF\u4EE5\u51CF\u5C11\u6570\u636E\u5305\u7684\u5927\u5C0F</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Domain Name System (response)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Transaction ID: 0x4cf0</span></span>
<span class="line"><span style="color:#A6ACCD;">    Flags: 0x8180 Standard query response, No error</span></span>
<span class="line"><span style="color:#A6ACCD;">    Questions: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    Answer RRs: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    Authority RRs: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    Additional RRs: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    Queries</span></span>
<span class="line"><span style="color:#A6ACCD;">        www.sourcedev.cc: type A, class IN</span></span>
<span class="line"><span style="color:#A6ACCD;">            Name: www.sourcedev.cc</span></span>
<span class="line"><span style="color:#A6ACCD;">            [Name Length: 16]</span></span>
<span class="line"><span style="color:#A6ACCD;">            [Label Count: 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">            Type: A (Host Address) (1)</span></span>
<span class="line"><span style="color:#A6ACCD;">            Class: IN (0x0001)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Answers</span></span>
<span class="line"><span style="color:#A6ACCD;">        www.sourcedev.cc: type A, class IN, addr 42.192.78.57</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Request In: 15]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Time: 0.058614000 seconds]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u5206\u6790answers\u90E8\u5206\u7684\u6570\u636E\u7ED3\u6784" tabindex="-1">\u5206\u6790Answers\u90E8\u5206\u7684\u6570\u636E\u7ED3\u6784 <a class="header-anchor" href="#\u5206\u6790answers\u90E8\u5206\u7684\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">    Queries</span></span>
<span class="line"><span style="color:#A6ACCD;">        blog.sourcedev.cc: type A, class IN</span></span>
<span class="line"><span style="color:#A6ACCD;">            Name: blog.sourcedev.cc</span></span>
<span class="line"><span style="color:#A6ACCD;">            [Name Length: 17]</span></span>
<span class="line"><span style="color:#A6ACCD;">            [Label Count: 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">            Type: A (Host Address) (1)</span></span>
<span class="line"><span style="color:#A6ACCD;">            Class: IN (0x0001)</span></span>
<span class="line"><span style="color:#A6ACCD;">    Answers</span></span>
<span class="line"><span style="color:#A6ACCD;">        blog.sourcedev.cc: type CNAME, class IN, cname deliangyang.github.io</span></span>
<span class="line"><span style="color:#A6ACCD;">            Name: blog.sourcedev.cc</span></span>
<span class="line"><span style="color:#A6ACCD;">            Type: CNAME (Canonical NAME for an alias) (5)</span></span>
<span class="line"><span style="color:#A6ACCD;">            Class: IN (0x0001)</span></span>
<span class="line"><span style="color:#A6ACCD;">            Time to live: 509</span></span>
<span class="line"><span style="color:#A6ACCD;">            Data length: 23</span></span>
<span class="line"><span style="color:#A6ACCD;">            CNAME: deliangyang.github.io</span></span>
<span class="line"><span style="color:#A6ACCD;">        deliangyang.github.io: type A, class IN, addr 185.199.108.153</span></span>
<span class="line"><span style="color:#A6ACCD;">            Name: deliangyang.github.io</span></span>
<span class="line"><span style="color:#A6ACCD;">            Type: A (Host Address) (1)</span></span>
<span class="line"><span style="color:#A6ACCD;">            Class: IN (0x0001)</span></span>
<span class="line"><span style="color:#A6ACCD;">            Time to live: 509</span></span>
<span class="line"><span style="color:#A6ACCD;">            Data length: 4</span></span>
<span class="line"><span style="color:#A6ACCD;">            Address: 185.199.108.153</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Request In: 39]</span></span>
<span class="line"><span style="color:#A6ACCD;">    [Time: 0.062407000 seconds]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u4E00\u884C\u662F16\u4E2A\u5B57\u8282</li><li>0xc0 \u4E3A\u5206\u9694\u7B26</li><li><code>Name: deliangyang.github.io</code> \u7528 <code>0xc0 0x2f</code> \u8868\u793A\uFF0Coffset\u4E3A47\uFF0C\u5373\u7B2C\u4E8C\u884C\u5012\u6570\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\uFF0816 * 3 - 1 0x0b 0x65 0x65 ...\uFF09\uFF0C\u6240\u4EE5\u53CD\u67E5\u5230\u7684\u524D\u4E00\u4E2Aname\u7684\u4F4D\u7F6E</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">0000   a7 28 81 80 00 01 00 05 00 00 00 00 04 62 6c 6f   .(...........blo</span></span>
<span class="line"><span style="color:#A6ACCD;">0010   67 09 73 6f 75 72 63 65 64 65 76 02 63 63 00 00   g.sourcedev.cc..</span></span>
<span class="line"><span style="color:#A6ACCD;">0020   01 00 01 c0 0c 00 05 00 01 00 00 01 fd 00 17 0b   ................</span></span>
<span class="line"><span style="color:#A6ACCD;">0030   64 65 6c 69 61 6e 67 79 61 6e 67 06 67 69 74 68   deliangyang.gith</span></span>
<span class="line"><span style="color:#A6ACCD;">0040   75 62 02 69 6f 00 c0 2f 00 01 00 01 00 00 01 fd   ub.io../........</span></span>
<span class="line"><span style="color:#A6ACCD;">0050   00 04 b9 c7 6c 99 c0 2f 00 01 00 01 00 00 01 fd   ....l../........</span></span>
<span class="line"><span style="color:#A6ACCD;">0060   00 04 b9 c7 6e 99 c0 2f 00 01 00 01 00 00 01 fd   ....n../........</span></span>
<span class="line"><span style="color:#A6ACCD;">0070   00 04 b9 c7 6f 99 c0 2f 00 01 00 01 00 00 01 fd   ....o../........</span></span>
<span class="line"><span style="color:#A6ACCD;">0080   00 04 b9 c7 6d 99                                 ....m.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),c=[p];function o(t,i,r,A,C,d){return a(),n("div",null,c)}const u=s(e,[["render",o]]);export{D as __pageData,u as default};
