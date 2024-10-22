import{_ as s,c as n,o as a,a as l}from"./app.0ce55433.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"UDP\uFF08User Datagram Protocol\uFF09\u534F\u8BAE","slug":"udp-user-datagram-protocol-\u534F\u8BAE","link":"#udp-user-datagram-protocol-\u534F\u8BAE","children":[{"level":3,"title":"\u5E94\u7528\u573A\u666F","slug":"\u5E94\u7528\u573A\u666F","link":"#\u5E94\u7528\u573A\u666F","children":[]},{"level":3,"title":"UDP \u6570\u636E\u5305\u7ED3\u6784","slug":"udp-\u6570\u636E\u5305\u7ED3\u6784","link":"#udp-\u6570\u636E\u5305\u7ED3\u6784","children":[]},{"level":3,"title":"checksum \u8BA1\u7B97","slug":"checksum-\u8BA1\u7B97","link":"#checksum-\u8BA1\u7B97","children":[]},{"level":3,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599","link":"#\u53C2\u8003\u8D44\u6599","children":[]}]}],"relativePath":"t/\u7F51\u7EDC\u7F16\u7A0B/UDP\u534F\u8BAE.md","lastUpdated":1729589704000}'),p={name:"t/\u7F51\u7EDC\u7F16\u7A0B/UDP\u534F\u8BAE.md"},o=l(`<h2 id="udp-user-datagram-protocol-\u534F\u8BAE" tabindex="-1">UDP\uFF08User Datagram Protocol\uFF09\u534F\u8BAE <a class="header-anchor" href="#udp-user-datagram-protocol-\u534F\u8BAE" aria-hidden="true">#</a></h2><blockquote><p>\u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE\uFF0C\u7B80\u5355\u7684\u9762\u5411\u6570\u636E\u62A5\u7684\u901A\u4FE1\u534F\u8BAE\uFF0C\u4F4D\u4E8E <code>OSI</code> \u6A21\u578B\u7684\u4F20\u8F93\u5C42<br> UDP \u53EA\u63D0\u4F9B\u6570\u636E\u7684\u4E0D\u53EF\u9760\u4F20\u9012\uFF0C\u5728 IP \u6570\u636E\u62A5\u7684\u5934\u90E8\u4EC5\u4EC5\u52A0\u5165\u4E86\u590D\u7528\u548C\u6570\u636E\u6821\u9A8C\u5B57\u6BB5<br> UDP \u4E0D\u9700\u8981\u6267\u884C\u9519\u8BEF\u68C0\u67E5\u548C\u7EA0\u6B63\uFF0C\u907F\u514D\u534F\u8BAE\u6808\u4E2D\u6B64\u7C7B\u5904\u7406\u7684\u5F00\u9500<br> \u5BF9\u65F6\u95F4\u6709\u8F83\u9AD8\u8981\u6C42\u7684\u5E94\u7528\u7A0B\u5E8F\u901A\u5E38\u4F7F\u7528 UDP\uFF0C\u4E22\u5931\u6570\u636E\u5305\u6BD4\u7B49\u5F85\u91CD\u4F20\u5BFC\u81F4\u7684\u5EF6\u8FDF\u66F4\u53EF\u53D6</p></blockquote><h3 id="\u5E94\u7528\u573A\u666F" tabindex="-1">\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h3><ul><li>DNS</li><li>DHCP \u52A8\u6001 IP \u5206\u914D\u5730\u5740</li><li>SNMP \u7B80\u5355\u7F51\u7EDC\u7BA1\u7406\u534F\u8BAE</li><li>RIP \u8DEF\u7531\u4FE1\u606F\u534F\u8BAE</li><li>NTP \u7F51\u7EDC\u65F6\u95F4\u534F\u8BAE</li></ul><h3 id="udp-\u6570\u636E\u5305\u7ED3\u6784" tabindex="-1">UDP \u6570\u636E\u5305\u7ED3\u6784 <a class="header-anchor" href="#udp-\u6570\u636E\u5305\u7ED3\u6784" aria-hidden="true">#</a></h3><ul><li>UDP \u4F2A\u9996\u90E8\uFF08\u603B\u957F\u5EA6 12\uFF09 <ul><li>32 \u4F4D\u6E90 IP \u5730\u5740</li><li>32 \u4F4D\u76EE\u7684 IP \u5730\u5740</li><li>8 \u4F4D 0</li><li>8 \u4F4D\u534F\u8BAE 17 0x11</li><li>16 \u4E3A UDP \u957F\u5EA6</li></ul></li><li>UDP \u9996\u90E8\uFF08\u603B\u957F\u5EA6 8\uFF09 <ul><li>16 \u4F4D\u6E90\u7AEF\u53E3\u53F7</li><li>16 \u4F4D\u76EE\u7684\u7AEF\u53E3\u53F7</li><li>16 \u4F4D UDP \u957F\u5EA6</li><li>16 \u4F4D\u6821\u9A8C\u548C checksump</li></ul></li><li>\u6570\u636E <ul><li>\u4E8C\u8FDB\u5236\u6570\u636E</li><li>\u586B\u5145\u5B57\u8282 0x00</li></ul></li></ul><h3 id="checksum-\u8BA1\u7B97" tabindex="-1">checksum \u8BA1\u7B97 <a class="header-anchor" href="#checksum-\u8BA1\u7B97" aria-hidden="true">#</a></h3><ul><li>checksum \u4E2D\u6709\u4E24\u4E2A\u957F\u5EA6\u503C\uFF0C\u5177\u4F53\u4E3A\uFF1A<code>\uFF08\u6570\u636E\u957F\u5EA6 + \u62A5\u5934\u957F\u5EA68\uFF09* 2</code></li></ul><div class="language-php line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">udpHex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;HEX</span></span>
<span class="line"><span style="color:#C3E88D;">0a 00 02 19             // src</span></span>
<span class="line"><span style="color:#C3E88D;">0a 00 0d be             // dest</span></span>
<span class="line"><span style="color:#C3E88D;">00 11                   // protocol</span></span>
<span class="line"><span style="color:#C3E88D;">00 0c                   // udp length</span></span>
<span class="line"><span style="color:#C3E88D;">d3 f7                   // source port</span></span>
<span class="line"><span style="color:#C3E88D;">27 07                   // dest port</span></span>
<span class="line"><span style="color:#C3E88D;">00 0c                   // length</span></span>
<span class="line"><span style="color:#C3E88D;">00 00                   // checksum rest</span></span>
<span class="line"><span style="color:#C3E88D;">77 6f 72 64             // data</span></span>
<span class="line"><span style="color:#89DDFF;">HEX</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">udpHex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;&lt;HEX</span></span>
<span class="line"><span style="color:#C3E88D;">0a 00 02 19             // src</span></span>
<span class="line"><span style="color:#C3E88D;">0a 00 0d be             // dest</span></span>
<span class="line"><span style="color:#C3E88D;">00 11                   // protocol</span></span>
<span class="line"><span style="color:#C3E88D;">00 0d                   // udp length</span></span>
<span class="line"><span style="color:#C3E88D;">d3 f7                   // source port</span></span>
<span class="line"><span style="color:#C3E88D;">27 07                   // dest port</span></span>
<span class="line"><span style="color:#C3E88D;">00 0d                   // length</span></span>
<span class="line"><span style="color:#C3E88D;">00 00                   // checksum rest</span></span>
<span class="line"><span style="color:#C3E88D;">68 65 6c 6c 6f          // data</span></span>
<span class="line"><span style="color:#89DDFF;">HEX</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// length = ( data length = 8 ) * 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">checkSum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x9d2c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">udpHex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">preg_replace</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#\\s+//.*+#</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">udpHex</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">udpHex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">array_values</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">array_filter</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">preg_split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#\\s|\\n#</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">udpHex</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">buffer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[];</span></span>
<span class="line"><span style="color:#89DDFF;">foreach</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">udpHex </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">idx </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">hex</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">idx </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">continue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">isset</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">udpHex</span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">idx </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">buffer</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sprintf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0x%s%s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">hex</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">udpHex</span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">idx </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">buffer</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sprintf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0x%s00</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">hex</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">checkSum</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">buffer</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">foreach</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">buffer </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">idx </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">buf</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sum </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hexdec</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">buf</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">sum </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">sum </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">sum </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0xffff</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0x</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dechex</span><span style="color:#89DDFF;">((~$</span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0xffff</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">checkSum</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">buffer</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h3 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h3><ol><li><a href="https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE" target="_blank" rel="noreferrer">Wiki \u7528\u6237\u6570\u636E\u62A5\u534F\u8BAE</a></li></ol>`,11),e=[o];function r(c,D,t,F,y,C){return a(),n("div",null,e)}const u=s(p,[["render",r]]);export{i as __pageData,u as default};
