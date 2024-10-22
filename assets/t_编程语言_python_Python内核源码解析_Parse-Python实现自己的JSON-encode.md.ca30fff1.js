import{_ as s,c as n,o as a,a as l}from"./app.0ce55433.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"JSON \u7F16\u7801\u5668","slug":"json-\u7F16\u7801\u5668","link":"#json-\u7F16\u7801\u5668","children":[{"level":3,"title":"\u7F16\u7801\u5668","slug":"\u7F16\u7801\u5668","link":"#\u7F16\u7801\u5668","children":[]},{"level":3,"title":"\u6D4B\u8BD5","slug":"\u6D4B\u8BD5","link":"#\u6D4B\u8BD5","children":[]},{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}]}],"relativePath":"t/\u7F16\u7A0B\u8BED\u8A00/python/Python\u5185\u6838\u6E90\u7801\u89E3\u6790/Parse-Python\u5B9E\u73B0\u81EA\u5DF1\u7684JSON-encode.md","lastUpdated":1729589704000}'),p={name:"t/\u7F16\u7A0B\u8BED\u8A00/python/Python\u5185\u6838\u6E90\u7801\u89E3\u6790/Parse-Python\u5B9E\u73B0\u81EA\u5DF1\u7684JSON-encode.md"},o=l(`<p>\u4E0A\u4E00\u7BC7\u6587\u7AE0\u7528 Python \u5B9E\u73B0\u4E86\u4E00\u4E2A JSON decode \u7684\u89E3\u6790\u5668\uFF0C\u8FD9\u4E00\u7BC7\u6587\u7AE0\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E2A JSON encode \u7684\u7F16\u7801\u5668\u3002</p><h2 id="json-\u7F16\u7801\u5668" tabindex="-1">JSON \u7F16\u7801\u5668 <a class="header-anchor" href="#json-\u7F16\u7801\u5668" aria-hidden="true">#</a></h2><h3 id="\u7F16\u7801\u5668" tabindex="-1">\u7F16\u7801\u5668 <a class="header-anchor" href="#\u7F16\u7801\u5668" aria-hidden="true">#</a></h3><p>\u7B80\u5355\u7684\u6570\u636E\u7ED3\u6784\u5982\uFF1ANone\uFF0Cbool\uFF0Cint\uFF0Cfloat\uFF0Cstr \u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u7F16\u7801\u4E3A JSON \u5B57\u7B26\u4E32\u3002\u5BF9\u4E8E list \u548C dict\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u9012\u5F52\u7684\u65B9\u5F0F\u8FDB\u884C\u7F16\u7801\u3002</p><div class="language-py line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">None:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">null</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">elif</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isinstance</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#FFCB6B;">bool</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">elif</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isinstance</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#FFCB6B;">float</span><span style="color:#89DDFF;">)):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">elif</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isinstance</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">elif</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isinstance</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">e</span><span style="color:#89DDFF;">)</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">for</span><span style="color:#82AAFF;"> e </span><span style="color:#89DDFF;">in</span><span style="color:#82AAFF;"> obj</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">]</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">elif</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isinstance</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#FFCB6B;">dict</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;&quot;</span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">k</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&quot;: </span><span style="color:#F78C6C;">{</span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">v</span><span style="color:#89DDFF;">)</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">for</span><span style="color:#82AAFF;"> k</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> v </span><span style="color:#89DDFF;">in</span><span style="color:#82AAFF;"> obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">items</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">raise</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TypeError</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&#39;Unsupported type: </span><span style="color:#F78C6C;">{</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">obj</span><span style="color:#89DDFF;">)</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u6D4B\u8BD5" tabindex="-1">\u6D4B\u8BD5 <a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a></h3><div class="language-py line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">(None)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">null</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">(True)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">(False)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3.14</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3.14</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&quot;hello&quot;</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">])</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[1, 2, 3]</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">({</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;a&quot;: 1, &quot;b&quot;: 2}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PASSED</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><ol><li>\u8FD9\u4E00\u7BC7\u6587\u7AE0\u6211\u4EEC\u5B9E\u73B0\u4E86\u4E00\u4E2A JSON encode \u7684\u7F16\u7801\u5668\uFF0C\u5C06 Python \u5BF9\u8C61\u8F6C\u6362\u4E3A JSON \u5B57\u7B26\u4E32\u3002\u8FD9\u4E2A\u7F16\u7801\u5668\u652F\u6301\u4E86 None, bool, int, float, str, list, dict \u7B49\u7C7B\u578B\u7684\u7F16\u7801\u3002</li><li>\u5BF9\u4E8E\u6570\u7EC4\u548C\u5BF9\u8C61\uFF0C\u6211\u4EEC\u4F7F\u7528\u9012\u5F52\u7684\u65B9\u5F0F\u8FDB\u884C\u7F16\u7801\u3002</li></ol>`,9),e=[o];function r(c,t,F,D,y,A){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
