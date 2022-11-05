import{_ as s,c as n,o as a,b as l}from"./app.9e51ea0e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"Object","slug":"object","link":"#object","children":[]},{"level":3,"title":"TString\uFF0Cstring value\u7684\u7ED3\u6784\uFF0C","slug":"tstring-string-value\u7684\u7ED3\u6784","link":"#tstring-string-value\u7684\u7ED3\u6784","children":[]},{"level":3,"title":"userdata","slug":"userdata","link":"#userdata","children":[]},{"level":3,"title":"Upvaldesc","slug":"upvaldesc","link":"#upvaldesc","children":[]},{"level":3,"title":"LocVar local variable","slug":"locvar-local-variable","link":"#locvar-local-variable","children":[]},{"level":3,"title":"Function Prototypes","slug":"function-prototypes","link":"#function-prototypes","children":[]},{"level":3,"title":"Closures","slug":"closures","link":"#closures","children":[]},{"level":3,"title":"Tables","slug":"tables","link":"#tables","children":[]}],"relativePath":"t/\u7F16\u7A0B\u8BED\u8A00/lua/object.md"}'),p={name:"t/\u7F16\u7A0B\u8BED\u8A00/lua/object.md"},o=l(`<h3 id="object" tabindex="-1">Object <a class="header-anchor" href="#object" aria-hidden="true">#</a></h3><blockquote><p>\u6BCF\u4E2A\u53EF\u56DE\u6536\u5BF9\u8C61(collectable objects)\u90FD\u4F1A\u6709\u516C\u5171\u7684\u7C7B\u578B</p></blockquote><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CommonHeader</span><span style="color:#A6ACCD;">    GCObject </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> lu_byte tt</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> lu_byte marked</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> GCObject </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    CommonHeader</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="tstring-string-value\u7684\u7ED3\u6784" tabindex="-1">TString\uFF0Cstring value\u7684\u7ED3\u6784\uFF0C <a class="header-anchor" href="#tstring-string-value\u7684\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> TString </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  CommonHeader</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  lu_byte extra</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* reserved words for short strings; &quot;has hash&quot; for longs */</span></span>
<span class="line"><span style="color:#F07178;">  lu_byte shrlen</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* length for short strings */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">unsigned</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> hash</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">union</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">size_t</span><span style="color:#F07178;"> lnglen</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* length for long strings */</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> TString </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">hnext</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* linked list for hash table */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> u</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> TString</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">** Ensures that address after this type is always fully aligned.</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">union</span><span style="color:#A6ACCD;"> UTString </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  L_Umaxalign dummy</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* ensures maximum alignment for strings */</span></span>
<span class="line"><span style="color:#F07178;">  TString tsv</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> UTString</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="userdata" tabindex="-1">userdata <a class="header-anchor" href="#userdata" aria-hidden="true">#</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">** Header for userdata; memory area follows the end of this structure</span></span>
<span class="line"><span style="color:#676E95;">** (aligned according to &#39;UUdata&#39;; see next).</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> Udata </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  CommonHeader</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  lu_byte ttuv_</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* user value&#39;s tag */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> Table </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">metatable</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">size_t</span><span style="color:#F07178;"> len</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* number of bytes */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">union</span><span style="color:#F07178;"> Value user_</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* user value */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> Udata</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">** Ensures that address after this type is always fully aligned.</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">union</span><span style="color:#A6ACCD;"> UUdata </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  L_Umaxalign dummy</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* ensures maximum alignment for &#39;local&#39; udata */</span></span>
<span class="line"><span style="color:#F07178;">  Udata uv</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> UUdata</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="upvaldesc" tabindex="-1">Upvaldesc <a class="header-anchor" href="#upvaldesc" aria-hidden="true">#</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">** Description of an upvalue for function prototypes</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> Upvaldesc </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  TString </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* upvalue name (for debug information) */</span></span>
<span class="line"><span style="color:#F07178;">  lu_byte instack</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* whether it is in stack (register) */</span></span>
<span class="line"><span style="color:#F07178;">  lu_byte idx</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* index of upvalue (in stack or in outer function&#39;s list) */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> Upvaldesc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="locvar-local-variable" tabindex="-1">LocVar local variable <a class="header-anchor" href="#locvar-local-variable" aria-hidden="true">#</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">** Description of a local variable for function prototypes</span></span>
<span class="line"><span style="color:#676E95;">** (used for debug information)</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> LocVar </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  TString </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">varname</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> startpc</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* first point where variable is active */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> endpc</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">    /* first point where variable is dead */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> LocVar</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="function-prototypes" tabindex="-1">Function Prototypes <a class="header-anchor" href="#function-prototypes" aria-hidden="true">#</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">** Function Prototypes</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> Proto </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  CommonHeader</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  lu_byte numparams</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* number of fixed parameters */</span></span>
<span class="line"><span style="color:#F07178;">  lu_byte is_vararg</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  lu_byte maxstacksize</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* number of registers needed by this function */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> sizeupvalues</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* size of &#39;upvalues&#39; */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> sizek</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* size of &#39;k&#39; */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> sizecode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> sizelineinfo</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> sizep</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* size of &#39;p&#39; */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> sizelocvars</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> linedefined</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* debug information  */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> lastlinedefined</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* debug information  */</span></span>
<span class="line"><span style="color:#F07178;">  TValue </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">k</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* constants used by the function */</span></span>
<span class="line"><span style="color:#F07178;">  Instruction </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">code</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* opcodes */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> Proto </span><span style="color:#89DDFF;">**</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* functions defined inside the function */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">lineinfo</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* map from opcodes to source lines (debug information) */</span></span>
<span class="line"><span style="color:#F07178;">  LocVar </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">locvars</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* information about local variables (debug information) */</span></span>
<span class="line"><span style="color:#F07178;">  Upvaldesc </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">upvalues</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* upvalue information */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> LClosure </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* last-created closure with this prototype */</span></span>
<span class="line"><span style="color:#F07178;">  TString  </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">source</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* used for debug information */</span></span>
<span class="line"><span style="color:#F07178;">  GCObject </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">gclist</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> Proto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="closures" tabindex="-1">Closures <a class="header-anchor" href="#closures" aria-hidden="true">#</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">** Closures</span></span>
<span class="line"><span style="color:#676E95;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ClosureHeader</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">	CommonHeader</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> lu_byte nupvalues</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> GCObject </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">gclist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> CClosure </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  ClosureHeader</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  lua_CFunction f</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  TValue </span><span style="color:#A6ACCD;">upvalue</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">];</span><span style="color:#676E95;">  /* list of upvalues */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> CClosure</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> LClosure </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  ClosureHeader</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> Proto </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  UpVal </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">upvals</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">];</span><span style="color:#676E95;">  /* list of upvalues */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> LClosure</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">union</span><span style="color:#A6ACCD;"> Closure </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  CClosure c</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  LClosure l</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> Closure</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-hidden="true">#</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">union</span><span style="color:#A6ACCD;"> TKey </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    TValuefields</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> next</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* for chaining (offset for next node) */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> nk</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  TValue tvk</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> TKey</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* copy a value into a key without messing up field &#39;next&#39; */</span></span>
<span class="line"><span style="color:#89DDFF;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setnodekey</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">L</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> TKey </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">k_</span><span style="color:#89DDFF;">=(</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> TValue </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">io_</span><span style="color:#89DDFF;">=(</span><span style="color:#F07178;">obj</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">\\</span></span>
<span class="line"><span style="color:#F07178;">	  </span><span style="color:#A6ACCD;">k_</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">nk</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value_</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">io_</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">value_</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">k_</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">nk</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tt_</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">io_</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;">tt_</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">\\</span></span>
<span class="line"><span style="color:#F07178;">	  </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">void</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;">L</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">checkliveness</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">L</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">io_</span><span style="color:#89DDFF;">);</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> Node </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  TValue i_val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  TKey i_key</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> Node</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> Table </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  CommonHeader</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  lu_byte flags</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* 1&lt;&lt;p means tagmethod(p) is not present */</span></span>
<span class="line"><span style="color:#F07178;">  lu_byte lsizenode</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* log2 of size of &#39;node&#39; array */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">unsigned</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> sizearray</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* size of &#39;array&#39; array */</span></span>
<span class="line"><span style="color:#F07178;">  TValue </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">array</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* array part */</span></span>
<span class="line"><span style="color:#F07178;">  Node </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">node</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  Node </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">lastfree</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">  /* any free position is before this position */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">struct</span><span style="color:#F07178;"> Table </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">metatable</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  GCObject </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">gclist</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> Table</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,17),e=[o];function t(c,r,y,F,i,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
