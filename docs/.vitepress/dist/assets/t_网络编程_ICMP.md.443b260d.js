import{_ as s,c as a,o as n,b as e}from"./app.9e51ea0e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"ICMP \u534F\u8BAE","slug":"icmp-\u534F\u8BAE","link":"#icmp-\u534F\u8BAE","children":[{"level":3,"title":"\u53D1\u9001\u6570\u636E\u5305","slug":"\u53D1\u9001\u6570\u636E\u5305","link":"#\u53D1\u9001\u6570\u636E\u5305","children":[]},{"level":3,"title":"\u54CD\u5E94","slug":"\u54CD\u5E94","link":"#\u54CD\u5E94","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[{"level":3,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599","link":"#\u53C2\u8003\u8D44\u6599","children":[]}]}],"relativePath":"t/\u7F51\u7EDC\u7F16\u7A0B/ICMP.md"}'),l={name:"t/\u7F51\u7EDC\u7F16\u7A0B/ICMP.md"},p=e(`<h2 id="icmp-\u534F\u8BAE" tabindex="-1">ICMP \u534F\u8BAE <a class="header-anchor" href="#icmp-\u534F\u8BAE" aria-hidden="true">#</a></h2><blockquote><p>ICMP\uFF08Internal Control Message Protocol\uFF09\u4E92\u8054\u7F51\u63A7\u5236\u62A5\u6587\u534F\u8BAE\uFF0CTCP/IP\u534F\u8BAE\u7C07\u7684\u4E00\u4E2A\u5B50\u534F\u8BAE\u3002\u5BF9\u7F51\u7EDC\u8FDE\u63A5\u72B6\u6001\u8FDB\u884C\u5224\u65AD\u3002</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u53D1\u9001\u4E00\u4E2A\u6570\u636E\u5305\uFF0C\u65B9\u4FBFWireshark\u6293\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">ping -c 1 www.sourcedev.cc</span></span>
<span class="line"></span></code></pre></div><h3 id="\u53D1\u9001\u6570\u636E\u5305" tabindex="-1">\u53D1\u9001\u6570\u636E\u5305 <a class="header-anchor" href="#\u53D1\u9001\u6570\u636E\u5305" aria-hidden="true">#</a></h3><ul><li>type == 0x8 ping</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">795	35.295594	192.168.3.11	42.192.78.57	ICMP	98	Echo (ping) request  id=0xfb81, seq=0/0, ttl=64 (reply in 796)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">0000   82 11 8f 51 9e 64 a4 5e 60 f2 a0 49 08 00 45 00   ...Q.d.^\`..I..E.</span></span>
<span class="line"><span style="color:#A6ACCD;">0010   00 54 73 50 00 00 40 01 ca ac c0 a8 03 0b 2a c0   .TsP..@.......*.</span></span>
<span class="line"><span style="color:#A6ACCD;">0020   4e 39 08 00 06 dd fb 81 00 00 60 ea 4c ee 00 0e   N9........\`.L...</span></span>
<span class="line"><span style="color:#A6ACCD;">0030   5c b7 08 09 0a 0b 0c 0d 0e 0f 10 11 12 13 14 15   \\...............</span></span>
<span class="line"><span style="color:#A6ACCD;">0040   16 17 18 19 1a 1b 1c 1d 1e 1f 20 21 22 23 24 25   .......... !&quot;#$%</span></span>
<span class="line"><span style="color:#A6ACCD;">0050   26 27 28 29 2a 2b 2c 2d 2e 2f 30 31 32 33 34 35   &amp;&#39;()*+,-./012345</span></span>
<span class="line"><span style="color:#A6ACCD;">0060   36 37                                             67</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>Destination: 82:11:8f:51:9e:64 (82:11:8f:51:9e:64)</li><li>Source: Apple_f2:a0:49 (a4:5e:60:f2:a0:49) <ul><li>\u672C\u673AMAC\u5730\u5740</li></ul></li><li>Type: IPv4 (0x0800)</li></ul><h3 id="\u54CD\u5E94" tabindex="-1">\u54CD\u5E94 <a class="header-anchor" href="#\u54CD\u5E94" aria-hidden="true">#</a></h3><ul><li>type == 0 reply \u5E94\u7B54</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">796	35.335367	42.192.78.57	192.168.3.11	ICMP	98	Echo (ping) reply    id=0xfb81, seq=0/0, ttl=56 (request in 795)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">0000   a4 5e 60 f2 a0 49 82 11 8f 51 9e 64 08 00 45 74   .^\`..I...Q.d..Et</span></span>
<span class="line"><span style="color:#A6ACCD;">0010   00 54 16 b8 00 00 38 01 2e d1 2a c0 4e 39 c0 a8   .T....8...*.N9..</span></span>
<span class="line"><span style="color:#A6ACCD;">0020   03 0b 00 00 0e dd fb 81 00 00 60 ea 4c ee 00 0e   ..........\`.L...</span></span>
<span class="line"><span style="color:#A6ACCD;">0030   5c b7 08 09 0a 0b 0c 0d 0e 0f 10 11 12 13 14 15   \\...............</span></span>
<span class="line"><span style="color:#A6ACCD;">0040   16 17 18 19 1a 1b 1c 1d 1e 1f 20 21 22 23 24 25   .......... !&quot;#$%</span></span>
<span class="line"><span style="color:#A6ACCD;">0050   26 27 28 29 2a 2b 2c 2d 2e 2f 30 31 32 33 34 35   &amp;&#39;()*+,-./012345</span></span>
<span class="line"><span style="color:#A6ACCD;">0060   36 37                                             67</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><ul><li>data \u53D1\u9001\u4EC0\u4E48\u6570\u636E\uFF0C\u5E94\u7B54\u4EC0\u4E48\u6570\u636E\uFF0C0x08 ~ 0x37\uFF0C\u6570\u636E\u5305\u56FA\u5B9A\u957F\u5EA698\u4E2A\u5B57\u8282</li><li>id \u968F\u673A\uFF0C\u5E8F\u5217\u53F7\u91CD\u7F6E\uFF0C\u4ECE0\u5F00\u59CB</li></ul><h3 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h3><ol><li><a href="https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91%E6%8E%A7%E5%88%B6%E6%B6%88%E6%81%AF%E5%8D%8F%E8%AE%AE" target="_blank" rel="noreferrer">\u4E92\u8054\u7F51\u63A7\u5236\u6D88\u606F\u534F\u8BAE</a></li></ol>`,16),c=[p];function t(i,o,r,d,C,h){return n(),a("div",null,c)}const y=s(l,[["render",t]]);export{u as __pageData,y as default};
