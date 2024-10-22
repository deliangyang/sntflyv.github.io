import{_ as s,c as n,o as a,a as l}from"./app.0ce55433.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Redis \u5185\u5B58\u5206\u6790\u5DE5\u5177","slug":"redis-\u5185\u5B58\u5206\u6790\u5DE5\u5177","link":"#redis-\u5185\u5B58\u5206\u6790\u5DE5\u5177","children":[]},{"level":2,"title":"Python \u5DE5\u5177","slug":"python-\u5DE5\u5177","link":"#python-\u5DE5\u5177","children":[]}],"relativePath":"t/\u6570\u636E\u5E93/redis/\u5185\u5B58\u5360\u7528\u5206\u5E03\u5206\u6790.md","lastUpdated":1729589704000}'),p={name:"t/\u6570\u636E\u5E93/redis/\u5185\u5B58\u5360\u7528\u5206\u5E03\u5206\u6790.md"},o=l(`<p>Redis \u5185\u5B58\u5360\u7528\u5206\u6790\uFF0C\u968F\u7740\u4E1A\u52A1\u7684\u589E\u957F\uFF0C\u65F6\u95F4\u7684\u8FC1\u79FB\uFF0CRedis \u7684\u5185\u5B58\u5360\u7528\u4F1A\u4E0D\u65AD\u589E\u52A0\u3002\u5E38\u89C4\u65B9\u6CD5\u4F7F\u7528<code>redis-cli --bigkeys</code>\u628A\u5927 key \u626B\u63CF\u51FA\u6765\uFF0C\u4F46\u662F\u8FD9\u4E2A\u65B9\u6CD5\u5F88\u96BE\u5B9A\u4F4D\u95EE\u9898\u3002</p><h2 id="redis-\u5185\u5B58\u5206\u6790\u5DE5\u5177" tabindex="-1">Redis \u5185\u5B58\u5206\u6790\u5DE5\u5177 <a class="header-anchor" href="#redis-\u5185\u5B58\u5206\u6790\u5DE5\u5177" aria-hidden="true">#</a></h2><p>\u5907\u4EFD\u7EBF\u4E0A\u5FEB\u7167\uFF0C\u4F7F\u7528\u5DE5\u5177\u5BFC\u51FA\u6240\u6709\u7684 key\uFF0C\u5305\u542B key \u7684\u7C7B\u578B\uFF0C\u5185\u5B58\u5927\u5C0F\uFF0C\u8FC7\u671F\u65F6\u95F4\u7B49\u3002\u8FD9\u91CC\u4F1A\u7528\u5230\u5DE5\u5177<a href="https://github.com/sripathikrishnan/redis-rdb-tools" target="_blank" rel="noreferrer">redis-rdb-tools</a>\uFF0C\u8FD9\u4E2A\u5DE5\u5177\u662F\u7528 python \u5199\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4E00\u4E2A python \u7684\u73AF\u5883</p><h4 id="\u5BFC\u51FA-rdb-\u6BCF\u4E2A-key-\u7684\u5185\u5B58\u5360\u7528" tabindex="-1">\u5BFC\u51FA rdb \u6BCF\u4E2A key \u7684\u5185\u5B58\u5360\u7528 <a class="header-anchor" href="#\u5BFC\u51FA-rdb-\u6BCF\u4E2A-key-\u7684\u5185\u5B58\u5360\u7528" aria-hidden="true">#</a></h4><ul><li>bytes key \u7684\u5927\u5C0F\uFF0C\u8FD9\u91CC\u7684 128 \u8868\u793A\u8FC7\u6EE4\u51FA\u5927\u4E8E\u7B49\u4E8E 128 \u5B57\u8282\u7684 key</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">rdb -c memory /var/redis/6379/dump.rdb --bytes 128 -f memory.csv</span></span>
<span class="line"><span style="color:#A6ACCD;">head memory.csv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># outout</span></span>
<span class="line"><span style="color:#A6ACCD;">database,type,key,size_in_bytes,encoding,num_elements,len_largest_element</span></span>
<span class="line"><span style="color:#A6ACCD;">0,list,lizards,241,quicklist,5,19</span></span>
<span class="line"><span style="color:#A6ACCD;">0,list,user_list,190,quicklist,3,7</span></span>
<span class="line"><span style="color:#A6ACCD;">2,hash,baloon,138,ziplist,3,11</span></span>
<span class="line"><span style="color:#A6ACCD;">2,list,armadillo,231,quicklist,5,20</span></span>
<span class="line"><span style="color:#A6ACCD;">2,hash,aroma,129,ziplist,3,11</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">python stat_memery_usage memory.csv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># output</span></span>
<span class="line"><span style="color:#A6ACCD;">user:extend:</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 635.881 MB</span></span>
<span class="line"><span style="color:#A6ACCD;">suspension:</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">:app:</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 134.631 MB</span></span>
<span class="line"><span style="color:#A6ACCD;">user:bomb:reward:rate:</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 70.771 MB</span></span>
<span class="line"><span style="color:#A6ACCD;">user:follow:</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 70.220 MB</span></span>
<span class="line"><span style="color:#A6ACCD;">room:</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">:share:</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 66.688 MB</span></span>
<span class="line"><span style="color:#A6ACCD;">app:daily_tasks:</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 54.152 MB</span></span>
<span class="line"><span style="color:#A6ACCD;">room:ranking:total:</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 34.799 MB</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="python-\u5DE5\u5177" tabindex="-1">Python \u5DE5\u5177 <a class="header-anchor" href="#python-\u5DE5\u5177" aria-hidden="true">#</a></h2><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> argparse</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> re</span></span>
<span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> collections </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Counter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u516C\u5171\u524D\u7F00</span></span>
<span class="line"><span style="color:#A6ACCD;">prefix </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">job:php</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;"># \u4E0D\u540C\u90E8\u5206\u66FF\u6362\u4E3A</span></span>
<span class="line"><span style="color:#A6ACCD;">re_replace </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> re</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">compile</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">r</span><span style="color:#89DDFF;">&#39;(([</span><span style="color:#C3E88D;">a-z0-9</span><span style="color:#A6ACCD;">\\-</span><span style="color:#89DDFF;">]{36})|([</span><span style="color:#C3E88D;">A-Z0-9</span><span style="color:#89DDFF;">])+|</span><span style="color:#C3E88D;">\\d</span><span style="color:#89DDFF;">+|</span><span style="color:#C3E88D;">android</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">ios</span><span style="color:#89DDFF;">)&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    parser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> argparse</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ArgumentParser</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">description</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">analysis redis key, and find the same key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add_argument</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">=None,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">type</span><span style="color:#89DDFF;">=</span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">help</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">filename</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse_args</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">read_file</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">filename</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True:</span></span>
<span class="line"><span style="color:#A6ACCD;">            line </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readline</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> line</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">yield</span><span style="color:#A6ACCD;"> line</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">break</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">decimal_format</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">multiple</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> size </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">raise</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ValueError</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">size must be non-negative</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    suffix </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">KB</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MB</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GB</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TB</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> suf </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> suffix</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        size </span><span style="color:#89DDFF;">/=</span><span style="color:#A6ACCD;"> multiple</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> size </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> multiple</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F78C6C;">{0</span><span style="color:#C792EA;">:.3f</span><span style="color:#F78C6C;">}</span><span style="color:#C3E88D;"> </span><span style="color:#F78C6C;">{1}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> suf</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">raise</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ValueError</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">size too large</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">replace</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> pre </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> prefix</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startswith</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">pre</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> pre </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> re_replace</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sub</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> s</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    args </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    counter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Counter</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    hc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Counter</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> ll </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">read_file</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">args</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">file</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> ll</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startswith</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">database,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            count </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">continue</span></span>
<span class="line"><span style="color:#A6ACCD;">        data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ll</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        key </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">replace</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">        counter</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">        hc</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    new_dict </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sorted</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">counter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">items</span><span style="color:#89DDFF;">(),</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">lambda</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> item</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">reverse</span><span style="color:#89DDFF;">=True)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> new_dict</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F78C6C;">%s</span><span style="color:#C3E88D;"> =&gt; </span><span style="color:#F78C6C;">%s</span><span style="color:#C3E88D;"> =&gt; </span><span style="color:#F78C6C;">%d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">%</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">k</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> decimal_format</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">v</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;"> hc</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">k</span><span style="color:#89DDFF;">]))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div>`,9),e=[o];function r(c,t,D,F,y,A){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
