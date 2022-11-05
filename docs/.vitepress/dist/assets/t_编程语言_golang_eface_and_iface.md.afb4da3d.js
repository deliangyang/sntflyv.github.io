import{_ as s,c as n,o as a,b as e}from"./app.9e51ea0e.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"eface and iface","slug":"eface-and-iface","link":"#eface-and-iface","children":[{"level":3,"title":"eface\uFF08empty interface\uFF09","slug":"eface-empty-interface","link":"#eface-empty-interface","children":[]},{"level":3,"title":"iface \uFF08non-empty interface\uFF09","slug":"iface-non-empty-interface","link":"#iface-non-empty-interface","children":[]}]}],"relativePath":"t/\u7F16\u7A0B\u8BED\u8A00/golang/eface_and_iface.md"}'),l={name:"t/\u7F16\u7A0B\u8BED\u8A00/golang/eface_and_iface.md"},p=e(`<h2 id="eface-and-iface" tabindex="-1">eface and iface <a class="header-anchor" href="#eface-and-iface" aria-hidden="true">#</a></h2><blockquote><p>src/runtime/runtime2.go</p></blockquote><h3 id="eface-empty-interface" tabindex="-1">eface\uFF08empty interface\uFF09 <a class="header-anchor" href="#eface-empty-interface" aria-hidden="true">#</a></h3><ul><li>empty interface \u4E0D\u5305\u542B\u65B9\u6CD5\u7684interface\u7ED3\u6784</li><li>data \u662Fnil\uFF0C\u53EA\u8981_type \u4E0D\u662Fnil\u8FD9\u4E2A <code>interface{}</code> \u5C31\u4E0D\u662Fnil</li></ul><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">eface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	_type </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">_type</span></span>
<span class="line"><span style="color:#A6ACCD;">	data  unsafe</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Pointer</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Needs to be in sync with ../cmd/link/internal/ld/decodesym.go:/^func.commonsize,</span></span>
<span class="line"><span style="color:#676E95;">// ../cmd/compile/internal/gc/reflect.go:/^func.dcommontype and</span></span>
<span class="line"><span style="color:#676E95;">// ../reflect/type.go:/^type.rtype.</span></span>
<span class="line"><span style="color:#676E95;">// ../internal/reflectlite/type.go:/^type.rtype.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">_type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	size       </span><span style="color:#C792EA;">uintptr</span></span>
<span class="line"><span style="color:#A6ACCD;">	ptrdata    </span><span style="color:#C792EA;">uintptr</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// size of memory prefix holding all pointers</span></span>
<span class="line"><span style="color:#A6ACCD;">	hash       </span><span style="color:#C792EA;">uint32</span></span>
<span class="line"><span style="color:#A6ACCD;">	tflag      tflag</span></span>
<span class="line"><span style="color:#A6ACCD;">	align      </span><span style="color:#C792EA;">uint8</span></span>
<span class="line"><span style="color:#A6ACCD;">	fieldAlign </span><span style="color:#C792EA;">uint8</span></span>
<span class="line"><span style="color:#A6ACCD;">	kind       </span><span style="color:#C792EA;">uint8</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// function for comparing objects of this type</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// (ptr to object A, ptr to object B) -&gt; ==?</span></span>
<span class="line"><span style="color:#A6ACCD;">	equal </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">unsafe</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Pointer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> unsafe</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Pointer</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// gcdata stores the GC type data for the garbage collector.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// If the KindGCProg bit is set in kind, gcdata is a GC program.</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// Otherwise it is a ptrmask bitmap. See mbitmap.go for details.</span></span>
<span class="line"><span style="color:#A6ACCD;">	gcdata    </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">	str       nameOff</span></span>
<span class="line"><span style="color:#A6ACCD;">	ptrToThis typeOff</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="iface-non-empty-interface" tabindex="-1">iface \uFF08non-empty interface\uFF09 <a class="header-anchor" href="#iface-non-empty-interface" aria-hidden="true">#</a></h3><ul><li>\u65B9\u6CD5\u7684\u5177\u4F53\u5B9E\u73B0\u5B58\u653E\u5728 <code>itag.fun</code> \u53D8\u91CF\u4E2D</li><li>\u5982\u679C interface \u5305\u542B\u591A\u4E2A\u65B9\u6CD5 <ul><li>iface \u91CC\u6709\u4E2A hash table <code>runtime/iface.go</code></li></ul></li><li><code>inter *interfacetype</code> \u5305\u542B interface \u672C\u8EAB\u7684\u4FE1\u606F\uFF0C\u6BD4\u5982 package path\u3001method\u3002</li></ul><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">iface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	tab  </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">itab</span></span>
<span class="line"><span style="color:#A6ACCD;">	data unsafe</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Pointer</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// layout of Itab known to compilers</span></span>
<span class="line"><span style="color:#676E95;">// allocated in non-garbage-collected memory</span></span>
<span class="line"><span style="color:#676E95;">// Needs to be in sync with</span></span>
<span class="line"><span style="color:#676E95;">// ../cmd/compile/internal/gc/reflect.go:/^func.dumptabs.</span></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">itab</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	inter </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">interfacetype</span></span>
<span class="line"><span style="color:#A6ACCD;">	_type </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">_type</span></span>
<span class="line"><span style="color:#A6ACCD;">	hash  </span><span style="color:#C792EA;">uint32</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// copy of _type.hash. Used for type switches.</span></span>
<span class="line"><span style="color:#A6ACCD;">	_     </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">byte</span></span>
<span class="line"><span style="color:#A6ACCD;">	fun   </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">uintptr</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// variable sized. fun[0]==0 means _type does not implement inter.</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">imethod</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	name nameOff</span></span>
<span class="line"><span style="color:#A6ACCD;">	ityp typeOff</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">interfacetype</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	typ     _type</span></span>
<span class="line"><span style="color:#A6ACCD;">	pkgpath name</span></span>
<span class="line"><span style="color:#A6ACCD;">	mhdr    </span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;">imethod</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,8),o=[p];function t(c,r,i,y,C,D){return a(),n("div",null,o)}const F=s(l,[["render",t]]);export{f as __pageData,F as default};
