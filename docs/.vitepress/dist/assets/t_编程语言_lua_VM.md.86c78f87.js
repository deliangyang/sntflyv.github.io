import{_ as s,c as n,o as a,b as l}from"./app.9e51ea0e.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"VM\u6267\u884COpCode","slug":"vm\u6267\u884Copcode","link":"#vm\u6267\u884Copcode","children":[]},{"level":3,"title":"OpCode \u6709\u54EA\u4E9B\uFF0C\u517147\u4E2A\u6307\u4EE4","slug":"opcode-\u6709\u54EA\u4E9B-\u517147\u4E2A\u6307\u4EE4","link":"#opcode-\u6709\u54EA\u4E9B-\u517147\u4E2A\u6307\u4EE4","children":[]}],"relativePath":"t/\u7F16\u7A0B\u8BED\u8A00/lua/VM.md"}'),p={name:"t/\u7F16\u7A0B\u8BED\u8A00/lua/VM.md"},t=l(`<h3 id="vm\u6267\u884Copcode" tabindex="-1">VM\u6267\u884COpCode <a class="header-anchor" href="#vm\u6267\u884Copcode" aria-hidden="true">#</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">luaV_execute</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">lua_State </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">L</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="opcode-\u6709\u54EA\u4E9B-\u517147\u4E2A\u6307\u4EE4" tabindex="-1">OpCode \u6709\u54EA\u4E9B\uFF0C\u517147\u4E2A\u6307\u4EE4 <a class="header-anchor" href="#opcode-\u6709\u54EA\u4E9B-\u517147\u4E2A\u6307\u4EE4" aria-hidden="true">#</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;">    /*----------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#676E95;">    name		args	description</span></span>
<span class="line"><span style="color:#676E95;">    ------------------------------------------------------------------------*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_MOVE</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B	R(A) := R(B)					*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_LOADK</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A Bx	R(A) := Kst(Bx)					*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_LOADKX</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A 	R(A) := Kst(extra arg)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_LOADBOOL</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := (Bool)B; if (C) pc++			*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_LOADNIL</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B	R(A), R(A+1), ..., R(A+B) := nil		*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_GETUPVAL</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B	R(A) := UpValue[B]				*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_GETTABUP</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := UpValue[B][RK(C)]			*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_GETTABLE</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := R(B)[RK(C)]				*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_SETTABUP</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	UpValue[A][RK(B)] := RK(C)			*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_SETUPVAL</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B	UpValue[B] := R(A)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_SETTABLE</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A)[RK(B)] := RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_NEWTABLE</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := {} (size = B,C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_SELF</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A+1) := R(B); R(A) := R(B)[RK(C)]		*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_ADD</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) + RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_SUB</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) - RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_MUL</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) * RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_MOD</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) % RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_POW</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) ^ RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_DIV</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) / RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_IDIV</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) // RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_BAND</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) &amp; RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_BOR</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) | RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_BXOR</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) ~ RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_SHL</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) &lt;&lt; RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_SHR</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := RK(B) &gt;&gt; RK(C)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_UNM</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B	R(A) := -R(B)					*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_BNOT</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B	R(A) := ~R(B)					*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_NOT</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B	R(A) := not R(B)				*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_LEN</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B	R(A) := length of R(B)				*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_CONCAT</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A) := R(B).. ... ..R(C)			*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_JMP</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A sBx	pc+=sBx; if (A) close all upvalues &gt;= R(A - 1)	*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_EQ</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	if ((RK(B) == RK(C)) ~= A) then pc++		*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_LT</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	if ((RK(B) &lt;  RK(C)) ~= A) then pc++		*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_LE</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	if ((RK(B) &lt;= RK(C)) ~= A) then pc++		*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_TEST</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A C	if not (R(A) &lt;=&gt; C) then pc++			*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_TESTSET</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	if (R(B) &lt;=&gt; C) then R(A) := R(B) else pc++	*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_CALL</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A), ... ,R(A+C-2) := R(A)(R(A+1), ... ,R(A+B-1)) */</span></span>
<span class="line"><span style="color:#F07178;">    OP_TAILCALL</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	return R(A)(R(A+1), ... ,R(A+B-1))		*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_RETURN</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B	return R(A), ... ,R(A+B-2)	(see note)	*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_FORLOOP</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A sBx	R(A)+=R(A+2);</span></span>
<span class="line"><span style="color:#676E95;">                if R(A) &lt;?= R(A+1) then { pc+=sBx; R(A+3)=R(A) }*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_FORPREP</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A sBx	R(A)-=R(A+2); pc+=sBx				*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_TFORCALL</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A C	R(A+3), ... ,R(A+2+C) := R(A)(R(A+1), R(A+2));	*/</span></span>
<span class="line"><span style="color:#F07178;">    OP_TFORLOOP</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A sBx	if R(A+1) ~= nil then { R(A)=R(A+1); pc += sBx }*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_SETLIST</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B C	R(A)[(C-1)*FPF+i] := R(A+i), 1 &lt;= i &lt;= B	*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_CLOSURE</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A Bx	R(A) := closure(KPROTO[Bx])			*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_VARARG</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">/*	A B	R(A), R(A+1), ..., R(A+B-2) = vararg		*/</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    OP_EXTRAARG</span><span style="color:#676E95;">/*	Ax	extra (larger) argument for previous opcode	*/</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> OpCode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,4),o=[t];function e(c,r,y,F,A,R){return a(),n("div",null,o)}const B=s(p,[["render",e]]);export{D as __pageData,B as default};
