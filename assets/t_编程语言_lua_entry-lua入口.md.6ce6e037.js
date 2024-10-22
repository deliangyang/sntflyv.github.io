import{_ as s,c as a,o as n,a as l}from"./app.0ce55433.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Lua \u5165\u53E3","slug":"lua-\u5165\u53E3","link":"#lua-\u5165\u53E3","children":[]}],"relativePath":"t/\u7F16\u7A0B\u8BED\u8A00/lua/entry-lua\u5165\u53E3.md","lastUpdated":1729589704000}'),p={name:"t/\u7F16\u7A0B\u8BED\u8A00/lua/entry-lua\u5165\u53E3.md"},o=l(`<h3 id="lua-\u5165\u53E3" tabindex="-1">Lua \u5165\u53E3 <a class="header-anchor" href="#lua-\u5165\u53E3" aria-hidden="true">#</a></h3><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> status</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">lua_State </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">L </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">luaL_newstate</span><span style="color:#89DDFF;">();</span><span style="color:#676E95;">  /* create state \u521B\u5EFA\u72B6\u6001\u673A */</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">L </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">NULL)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">l_message</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">argv</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">],</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cannot create state: not enough memory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> EXIT_FAILURE</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">lua_pushcfunction</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">L</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">pmain</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;">  /* to call &#39;pmain&#39; in protected mode */</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="\u63A5\u4E0B\u6765\u7684\u90E8\u5206-pmain" tabindex="-1">\u63A5\u4E0B\u6765\u7684\u90E8\u5206 pmain <a class="header-anchor" href="#\u63A5\u4E0B\u6765\u7684\u90E8\u5206-pmain" aria-hidden="true">#</a></h4><ol><li>\u83B7\u53D6\u53C2\u6570</li><li>\u68C0\u67E5\u7248\u672C</li><li>\u52A0\u8F7D\u6807\u51C6\u5E93</li><li>\u547D\u4EE4\u884C\u6267\u884C\u811A\u672C</li></ol><div class="language-shell script"><button title="Copy Code" class="copy"></button><span class="lang">shell script</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">lua -e </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pirnt(1)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="5"><li>handle_script \u6267\u884C\u811A\u672C\uFF0C\u5148\u901A\u8FC7<code> status = luaL_loadfile(L, fname);</code>\u52A0\u8F7D\u6587\u4EF6</li></ol><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">status </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">luaL_loadfile</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">L</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fname</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">status </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> LUA_OK</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#F07178;"> n </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">pushargs</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">L</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;">  /* push arguments to script \u5C06\u53C2\u6570\u63A8\u7ED9\u811A\u672C */</span></span>
<span class="line"><span style="color:#F07178;">status </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">docall</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">L</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> n</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> LUA_MULTRET</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;">     // \u6267\u884C\u811A\u672C</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">** Main body of stand-alone interpreter (to be called in protected mode).</span></span>
<span class="line"><span style="color:#676E95;">** Reads the options and handles them all.</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"><span style="color:#82AAFF;">runargs</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">L</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> argv</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> script</span><span style="color:#89DDFF;">)</span><span style="color:#676E95;">        // lua -e/-l</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">docall</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">status </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">lua_pcall</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">L</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> narg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> nres</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> base</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">lua_pcall</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">L</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">lua_pcallk</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">L</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">NULL)</span></span>
<span class="line"><span style="color:#82AAFF;">lua_pcallk</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,8),e=[o];function c(r,t,D,F,y,i){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{C as __pageData,u as default};
