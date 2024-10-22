import{_ as s,c as n,o as a,a as l}from"./app.0ce55433.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7F16\u5199\u7A0B\u5E8F\u904D\u5386\u5B57\u5178","slug":"\u7F16\u5199\u7A0B\u5E8F\u904D\u5386\u5B57\u5178","link":"#\u7F16\u5199\u7A0B\u5E8F\u904D\u5386\u5B57\u5178","children":[]},{"level":2,"title":"\u7F16\u5199\u6D4B\u8BD5\u7A0B\u5E8F\u6D4B\u8BD5","slug":"\u7F16\u5199\u6D4B\u8BD5\u7A0B\u5E8F\u6D4B\u8BD5","link":"#\u7F16\u5199\u6D4B\u8BD5\u7A0B\u5E8F\u6D4B\u8BD5","children":[{"level":3,"title":"\u8F93\u51FA\u7ED3\u679C","slug":"\u8F93\u51FA\u7ED3\u679C","link":"#\u8F93\u51FA\u7ED3\u679C","children":[]}]},{"level":2,"title":"\u5728 C/C++ \u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5B57\u5178","slug":"\u5728-c-c-\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5B57\u5178","link":"#\u5728-c-c-\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5B57\u5178","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"t/\u7F16\u7A0B\u8BED\u8A00/python/Python\u6269\u5C55c-c++--mapping\u6269\u5C55.md","lastUpdated":1729589704000}'),p={name:"t/\u7F16\u7A0B\u8BED\u8A00/python/Python\u6269\u5C55c-c++--mapping\u6269\u5C55.md"},o=l(`<p>\u5B57\u5178\u904D\u5386\u5728 Python \u4E2D\u5341\u5206\u7684\u5E38\u89C1\uFF0C\u90A3\u4E48\u5728 C/C++ \u5F00\u53D1\u6269\u5C55\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u4F55\u5B9E\u73B0\u5B57\u5178\u7684\u904D\u5386\u5462\uFF1F\u63A5\u4E0B\u6765\u7684\u5B9E\u9A8C\u4F1A\u8BA9\u6211\u4EEC\u66F4\u52A0\u6E05\u6670\u7684\u4E86\u89E3\u5B57\u5178\u904D\u5386\u7684\u5E95\u5C42\u5F00\u53D1\u3002</p><h2 id="\u7F16\u5199\u7A0B\u5E8F\u904D\u5386\u5B57\u5178" tabindex="-1">\u7F16\u5199\u7A0B\u5E8F\u904D\u5386\u5B57\u5178 <a class="header-anchor" href="#\u7F16\u5199\u7A0B\u5E8F\u904D\u5386\u5B57\u5178" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u4F1A\u5728 C/C++ \u5F00\u53D1\u7684\u6269\u5C55\u4E2D\u5B9E\u73B0\u4E00\u4E2A\u904D\u5386\u5B57\u5178\u7684\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u53C2\u6570\u4E3A\u5B57\u5178\uFF0C\u65E0\u8FD4\u56DE\u503C\u3002\u7A0B\u5E8F\u4E2D\u91CD\u8981\u7684\u90E8\u5206\u6211\u90FD\u6807\u6CE8\u4E86\u6CE8\u91CA\uFF0C\u65B9\u4FBF\u5927\u5BB6\u9605\u8BFB\u3002</p><p>\u5F00\u53D1\u8FC7\u7A0B\u4F9D\u65E7\u662F\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u5C06\u51FD\u6570\u7ED1\u5B9A\u5230 <code>demoModule</code> \u6A21\u5757\u4E0A\u3002\u51FD\u6570\u5185\u90E8\u5B9E\u73B0\u76F8\u5F53\u6E05\u6670\uFF0C\u9996\u5148\u662F\u901A\u8FC7 <code>PyMapping_Items</code> \u83B7\u53D6\u5B57\u5178\uFF0C\u5982\u679C\u7ED3\u679C\u4E3A <code>NULL</code>\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u7A7A\uFF0C\u8FD9\u91CC\u53C2\u6570\u4E00\u5B9A\u8981\u6CE8\u610F\u4E00\u4E0B\uFF0C\u5982\u679C\u4F20\u5165\u7684\u53C2\u6570\u4E0D\u4E3A hash \u7ED3\u6784\uFF0C\u5982\u4F20\u5165\u7684\u53C2\u6570\u4E3A list \u65F6\uFF0C\u7A0B\u5E8F\u4F1A\u629B\u51FA\u5982\u4E0B\u9519\u8BEF <code>AttributeError: &#39;list&#39; object has no attribute &#39;items&#39;</code>\u3002\u63A5\u4E0B\u6765\u5C31\u662F\u83B7\u53D6\u7ED3\u6784\u4E3A\u5143\u7956<code>(key, value)</code>\u7684\u6570\u7EC4\u957F\u5EA6\uFF0C\u5FAA\u73AF\u904D\u5386\uFF0C\u5F97\u5230\u5BF9\u5E94\u6240\u6709\u7684\u503C\u3002\u5F53\u7136\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>PyArg_ParseTuple</code> \u89E3\u6790\u5143\u7956\uFF0Cs \u8868\u793A\u5B57\u7B26\u4E32\uFF0Ci \u8868\u793A\u4E00\u4E2A int \u7C7B\u578B\u7684\u6570\u503C\uFF0C\u4F9D\u6B21\u8F93\u51FA\u7ED3\u679C\u3002</p><p>\u5982\u4E0B\u7A0B\u5E8F\u4E0D\u591F\u4E25\u8C28\uFF0C\u6CA1\u6709\u5BF9\u53C2\u6570\u505A\u4E25\u683C\u7684\u6570\u636E\u7C7B\u578B\u6821\u9A8C\u3002\u5176\u5B9E <code>PyArg_ParseTuple</code> \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6211\u4EEC\u53EF\u4EE5\u7A0D\u505A\u8C03\u6574\u5C31\u53EF\u4EE5\u5BF9\u53C2\u6570\u7C7B\u578B\u505A\u6570\u636E\u6821\u9A8C\u4E86\uFF0C\u8FD9\u91CC\u5C06 <code>O</code> \u66FF\u6362\u4E3A <code>O!</code>\uFF0C\u5E76\u901A\u8FC7\u7B2C\u4E09\u4E2A\u53C2\u6570\u9650\u5B9A\u6570\u636E\u7C7B\u578B\u4E3A\u5B57\u5178\u7C7B\u578B <code>PyDict_Type</code>\uFF0C\u5982\u679C\u4E0D\u662F\u5B57\u5178\u7C7B\u578B\uFF0C\u7A0B\u5E8F\u4F1A\u629B\u51FA <code>TypeError</code> \u7684\u5F02\u5E38\uFF0C<code>TypeError: argument 1 must be dict, not list</code>\u3002</p><blockquote><p>\u5C06\u4E00\u4E2A Python \u5BF9\u8C61\u5B58\u5165\u4E00\u4E2A C \u6307\u9488\u3002\u548C O \u7C7B\u4F3C\uFF0C\u4F46\u662F\u9700\u8981\u4E24\u4E2A C \u53C2\u6570\uFF1A\u7B2C\u4E00\u4E2A\u662F Python \u7C7B\u578B\u5BF9\u8C61\u7684\u5730\u5740\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u5B58\u50A8\u5BF9\u8C61\u6307\u9488\u7684 C \u53D8\u91CF ( PyObject* \u53D8\u91CF) \u7684\u5730\u5740\u3002\u5982\u679C Python \u5BF9\u8C61\u7C7B\u578B\u4E0D\u5BF9\uFF0C\u4F1A\u629B\u51FA TypeError \u5F02\u5E38\u3002</p></blockquote><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// hash_print.cpp</span></span>
<span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Python.h</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stdio.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> PyObject </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">hash_print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">PyObject </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> PyObject </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    PyObject </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">map_item</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// if (!PyArg_ParseTuple(args, &quot;O!&quot;, &amp;PyDict_Type, &amp;map_item)) {</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#82AAFF;">PyArg_ParseTuple</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">args</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">O</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">map_item</span><span style="color:#89DDFF;">))</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">NULL;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5C06\u5B57\u5178\u89E3\u6790\u4E3A\u4E00\u4E2A\u5143\u7956\u4E3A (key, value) \u7684\u6570\u7EC4</span></span>
<span class="line"><span style="color:#F07178;">    PyObject </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">items </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">PyMapping_Items</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">map_item</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">items </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">NULL)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">NULL;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    PyObject </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">item </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">NULL;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u83B7\u53D6\u5B57\u5178\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> l </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">PyMapping_Length</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">char</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> l</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">++)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u4ECE\u6570\u7EC4\u4E2D\u7D22\u5F15\u5143\u7D20</span></span>
<span class="line"><span style="color:#F07178;">        item </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">PySequence_GetItem</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u6253\u5370\u5143\u7D20</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">PyObject_Print</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> stdout</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> Py_PRINT_RAW</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u89E3\u6790\u5143\u7956\uFF0Cs \u8868\u793A\u5B57\u7B26\u4E32\uFF0Ci \u8868\u793A\u4E00\u4E2A int \u7C7B\u578B\u7684\u6570\u503C</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#82AAFF;">PyArg_ParseTuple</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">si</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">)){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> nullptr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#C3E88D;">key: %s, value: %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> key</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> value</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">Py_DECREF</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">item</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">Py_DECREF</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Py_BuildValue</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> PyMethodDef MyDemoMethods</span><span style="color:#C792EA;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hash_print</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> hash_print</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> METH_VARARGS</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hash print</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">nullptr</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">      nullptr</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">               nullptr</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> PyModuleDef demoModule </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        PyModuleDef_HEAD_INIT</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">demo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">   /* name of module */</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">NULL,</span><span style="color:#676E95;"> /* module documentation, may be NULL */</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;">       /* size of per-interpreter state of the module,</span></span>
<span class="line"><span style="color:#676E95;">                 or -1 if the module keeps state in global variables. */</span></span>
<span class="line"><span style="color:#F07178;">        MyDemoMethods</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u521D\u59CB\u5316\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">PyMODINIT_FUNC </span><span style="color:#82AAFF;">PyInit_demo</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">void</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">PyModule_Create</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#F07178;">demoModule</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="\u7F16\u5199\u6D4B\u8BD5\u7A0B\u5E8F\u6D4B\u8BD5" tabindex="-1">\u7F16\u5199\u6D4B\u8BD5\u7A0B\u5E8F\u6D4B\u8BD5 <a class="header-anchor" href="#\u7F16\u5199\u6D4B\u8BD5\u7A0B\u5E8F\u6D4B\u8BD5" aria-hidden="true">#</a></h2><p>\u7B2C\u4E00\u6BB5\u51FD\u6570\u8C03\u7528\uFF0C\u4F20\u5165\u7684\u53C2\u6570\u4E3A\u4E00\u4E2A\u5B57\u5178\uFF0C\u904D\u5386\u5B57\u5178\u6253\u5370 <code>key</code> \u548C <code>value</code>\u3002</p><p>\u7B2C\u4E8C\u6BB5\u7A0B\u5E8F\u8C03\u7528\uFF0C\u4F20\u5165\u7684\u53C2\u6570\u4E3A\u4E00\u4E2A <code>list</code>\uFF0C\u9519\u8BEF\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u671F\u5F85\u7A0B\u5E8F\u629B\u51FA <code>TypeError</code> \u7684\u5F02\u5E38\u3002</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> demo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    demo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hash_print</span><span style="color:#89DDFF;">({</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">333</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3333</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">    demo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hash_print</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">])</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u8F93\u51FA\u7ED3\u679C" tabindex="-1">\u8F93\u51FA\u7ED3\u679C <a class="header-anchor" href="#\u8F93\u51FA\u7ED3\u679C" aria-hidden="true">#</a></h3><p>\u4ECE\u7ED3\u679C\u6765\u770B\u7B26\u5408\u6211\u4EEC\u7684\u9884\u671F\uFF0C\u7B2C\u4E00\u4E2A <code>hash_print</code> \u904D\u5386\u5B57\u5178\u6253\u5370\u51FA\u6211\u4EEC\u9700\u8981\u6570\u636E\uFF0C\u800C\u4E14\u51FD\u6570\u8C03\u7528\u6211\u4EEC\u6545\u610F\u4F20\u5165\u4E00\u4E2A\u9519\u8BEF\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u629B\u51FA\u9519\u8BEF\u3002</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">(&#39;2&#39;, 333)</span></span>
<span class="line"><span style="color:#A6ACCD;">key: 2, value: 333</span></span>
<span class="line"><span style="color:#A6ACCD;">(&#39;d&#39;, 3333)</span></span>
<span class="line"><span style="color:#A6ACCD;">key: d, value: 3333</span></span>
<span class="line"><span style="color:#A6ACCD;">(&#39;x&#39;, 3)</span></span>
<span class="line"><span style="color:#A6ACCD;">key: x, value: 3</span></span>
<span class="line"><span style="color:#A6ACCD;">Traceback (most recent call last):</span></span>
<span class="line"><span style="color:#A6ACCD;">  File &quot;run.py&quot;, line 5, in &lt;module&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    demo.hash_print([2, 3])</span></span>
<span class="line"><span style="color:#A6ACCD;">TypeError: argument 1 must be dict, not list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u5728-c-c-\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5B57\u5178" tabindex="-1">\u5728 C/C++ \u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5B57\u5178 <a class="header-anchor" href="#\u5728-c-c-\u4E2D\u8FD4\u56DE\u4E00\u4E2A\u5B57\u5178" aria-hidden="true">#</a></h2><p>\u8C03\u7528 <code>PyDict_New</code> \u6784\u5EFA\u4E00\u4E2A\u5B57\u5178\uFF0C\u901A\u8FC7 <code>PyDict_SetItemString</code> \u5F80 <code>hash</code> \u4E2D\u6DFB\u52A0\u952E\u503C\u5BF9\uFF0C\u7F16\u8BD1\u6A21\u5757\u4E4B\u540E\uFF0C\u5BFC\u5165\u6A21\u5757\u6D4B\u8BD5 <code>import demo</code>\uFF0C\u6253\u5370\u8F93\u51FA\u7ED3\u679C <code>print(demo.return_hash())</code>\u3002</p><p>\u5982\u4E0B\u6784\u9020\u5B57\u5178\u7684\u65B9\u5F0F\u4E3B\u8981\u5728\u590D\u6742\u573A\u666F\u4E0B\u4F7F\u7528\uFF0C\u5982\u679C\u6211\u4EEC\u77E5\u9053\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u4EC0\u4E48\u7684\u7ED3\u6784\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u6837\u7684\u65B9\u5F0F\u6784\u5EFA\u8FD4\u56DE\u503C <code>Py_BuildValue(&quot;{s:i,s:i}&quot;, &quot;abc&quot;, 123, &quot;def&quot;, 456)</code>\uFF0C\u51FD\u6570\u8F93\u51FA\u7684\u7ED3\u679C\u4E3A <code>{&#39;abc&#39;: 123, &#39;def&#39;: 456}</code>\u3002</p><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> PyObject </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">return_hash</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">PyObject </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">self</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> PyObject </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u521B\u5EFA\u4E00\u4E2A\u5B57\u5178\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#F07178;">    PyObject </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">hash </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">PyDict_New</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8BBE\u7F6E\u6570\u503C\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u589E\u52A0 PyDict_SetItemString \u7684\u8FD4\u56DE\u503C\u5224\u65AD\uFF0C\u5982\u679C\u4E3A NULL \u8868\u793A\u5B57\u5178\u952E\u503C\u5BF9\u6DFB\u52A0\u5931\u8D25</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">PyDict_SetItemString</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">hash</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Py_BuildValue</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ok</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">PyDict_SetItemString</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">hash</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gender</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Py_BuildValue</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">male</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">PyDict_SetItemString</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">hash</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Py_BuildValue</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> hash</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>C/C++ \u6269\u5C55 Python \u6A21\u5757\uFF0C\u904D\u5386\u5B57\u5178\u5176\u5B9E\u5C31\u662F\u53C2\u6570\u7684\u89E3\u6790\uFF0C\u7136\u540E\u83B7\u53D6\u5B57\u5178\u7684\u957F\u5EA6\uFF0C\u7136\u540E\u904D\u5386\u5143\u7956\u6570\u7EC4\uFF0C\u62FF\u5230\u952E\u503C\u5BF9\u5143\u7956\uFF0C\u8FD4\u56DE hash \u5BF9\u8C61\u76F8\u5BF9\u7B80\u5355\u4E9B\uFF0C\u5355\u7EAF\u7684\u6570\u636E\u62FC\u63A5\u3002</p><p>\u6D89\u53CA\u5230\u51FD\u6570\u5C31\u5FC5\u987B\u8981\u4E86\u89E3\u51FD\u6570\u7684\u4F20\u53C2\u89E3\u6790 <code>(PyArg_ParseTuple)</code>\uFF0C\u4EE5\u53CA\u8FD4\u56DE\u503C\u7684\u6784\u9020 <code>(Py_BuildValue)</code>\u3002</p>`,21),e=[o];function c(r,t,F,y,D,i){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{b as __pageData,d as default};
