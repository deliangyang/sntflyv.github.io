import{_ as s,c as a,o as n,b as l}from"./app.9e51ea0e.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3Alogstash\u5B89\u88C5clickhouse\u63D2\u4EF6","slug":"\u4E3Alogstash\u5B89\u88C5clickhouse\u63D2\u4EF6","link":"#\u4E3Alogstash\u5B89\u88C5clickhouse\u63D2\u4EF6","children":[{"level":3,"title":"\u7B80\u5355\u4ECB\u7ECD","slug":"\u7B80\u5355\u4ECB\u7ECD","link":"#\u7B80\u5355\u4ECB\u7ECD","children":[]},{"level":3,"title":"\u5B89\u88C5\u63D2\u4EF6\uFF0C\u624B\u52A8\u7F16\u8BD1","slug":"\u5B89\u88C5\u63D2\u4EF6-\u624B\u52A8\u7F16\u8BD1","link":"#\u5B89\u88C5\u63D2\u4EF6-\u624B\u52A8\u7F16\u8BD1","children":[]},{"level":3,"title":"\u6CE8\u610F\u5982\u679C\u4F7F\u7528\u4E86\u56FD\u5185\u6E90\u7684\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u8D85\u65F6\uFF0CSSL\u7684\u95EE\u9898","slug":"\u6CE8\u610F\u5982\u679C\u4F7F\u7528\u4E86\u56FD\u5185\u6E90\u7684-\u53EF\u80FD\u4F1A\u51FA\u73B0\u8D85\u65F6-ssl\u7684\u95EE\u9898","link":"#\u6CE8\u610F\u5982\u679C\u4F7F\u7528\u4E86\u56FD\u5185\u6E90\u7684-\u53EF\u80FD\u4F1A\u51FA\u73B0\u8D85\u65F6-ssl\u7684\u95EE\u9898","children":[]},{"level":3,"title":"demo","slug":"demo","link":"#demo","children":[]}]}],"relativePath":"t/Linux/2021/2021-03-02-install-logstash-clickhouse-plugin.md"}'),e={name:"t/Linux/2021/2021-03-02-install-logstash-clickhouse-plugin.md"},o=l(`<h2 id="\u4E3Alogstash\u5B89\u88C5clickhouse\u63D2\u4EF6" tabindex="-1">\u4E3Alogstash\u5B89\u88C5clickhouse\u63D2\u4EF6 <a class="header-anchor" href="#\u4E3Alogstash\u5B89\u88C5clickhouse\u63D2\u4EF6" aria-hidden="true">#</a></h2><h3 id="\u7B80\u5355\u4ECB\u7ECD" tabindex="-1">\u7B80\u5355\u4ECB\u7ECD <a class="header-anchor" href="#\u7B80\u5355\u4ECB\u7ECD" aria-hidden="true">#</a></h3><p>logstash\u7684clickhosue\u63D2\u4EF6\u662F\u7528ruby\u5199\u7684\uFF0C<a href="https://github.com/funcmike/logstash-output-clickhouse" target="_blank" rel="noreferrer">https://github.com/funcmike/logstash-output-clickhouse</a> \u8FD9\u662F\u4E00\u4E2A\u5F52\u6863\u9879\u76EE\uFF0C\u6CA1\u6709\u518D\u7EF4\u62A4\u4E86\u3002\u4E3B\u8981\u5B9E\u73B0\u7684\u5C31\u662F\u5C06\u6570\u636E\u901A\u8FC7http <code>JSONEachRow</code>\u7684\u65B9\u5F0F\u63D0\u4EA4\u7ED9clickhouse\uFF0C\u53EA\u5B9E\u73B0\u4E86output\u9636\u6BB5\u3002</p><h3 id="\u5B89\u88C5\u63D2\u4EF6-\u624B\u52A8\u7F16\u8BD1" tabindex="-1">\u5B89\u88C5\u63D2\u4EF6\uFF0C\u624B\u52A8\u7F16\u8BD1 <a class="header-anchor" href="#\u5B89\u88C5\u63D2\u4EF6-\u624B\u52A8\u7F16\u8BD1" aria-hidden="true">#</a></h3><ul><li>\u786E\u4FDD\u670D\u52A1\u5668\u5B89\u88C5\u4E86 <code>ruby</code>\uFF0C<code>gem</code></li><li>clone\u9879\u76EE\uFF0C<code>git clone https://github.com/funcmike/logstash-output-clickhouse.git</code></li><li><code>cd logstash-output-clickhouse</code></li><li><code>gem build logstash-output-clickhouse.gemspec</code></li><li><code>logstash-plugin install logstash-output-clickhouse-0.1.0.gem</code></li><li>\u68C0\u67E5\u63D2\u4EF6\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF1A<code>bin/logstash-plugin list | grep clickhouse</code></li></ul><h3 id="\u6CE8\u610F\u5982\u679C\u4F7F\u7528\u4E86\u56FD\u5185\u6E90\u7684-\u53EF\u80FD\u4F1A\u51FA\u73B0\u8D85\u65F6-ssl\u7684\u95EE\u9898" tabindex="-1">\u6CE8\u610F\u5982\u679C\u4F7F\u7528\u4E86\u56FD\u5185\u6E90\u7684\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u8D85\u65F6\uFF0CSSL\u7684\u95EE\u9898 <a class="header-anchor" href="#\u6CE8\u610F\u5982\u679C\u4F7F\u7528\u4E86\u56FD\u5185\u6E90\u7684-\u53EF\u80FD\u4F1A\u51FA\u73B0\u8D85\u65F6-ssl\u7684\u95EE\u9898" aria-hidden="true">#</a></h3><blockquote><p>\u589E\u52A0\uFF1A<code>:ssl_verify_mode: 0</code></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">root@debian:~# cat ~/.gemrc</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">:backtrace: false</span></span>
<span class="line"><span style="color:#A6ACCD;">:bulk_threshold: 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">:sources:</span></span>
<span class="line"><span style="color:#A6ACCD;">- https://gems.ruby-china.com/</span></span>
<span class="line"><span style="color:#A6ACCD;">:update_sources: true</span></span>
<span class="line"><span style="color:#A6ACCD;">:verbose: true</span></span>
<span class="line"><span style="color:#A6ACCD;">:ssl_verify_mode: 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="\u79BB\u7EBF\u5305\u5B89\u88C5" tabindex="-1">\u79BB\u7EBF\u5305\u5B89\u88C5 <a class="header-anchor" href="#\u79BB\u7EBF\u5305\u5B89\u88C5" aria-hidden="true">#</a></h4><ul><li>\u627E\u4E00\u4E2A\u5DF2\u7ECF\u5B89\u88C5\u597D\u7684\uFF0C\u6253\u4E00\u4E2A\u79BB\u7EBF\u5305\u5B89\u88C5\uFF0C\u6CE8\u610F\u7248\u672C\u95EE\u9898</li></ul><h3 id="demo" tabindex="-1">demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">input {</span></span>
<span class="line"><span style="color:#A6ACCD;">    kafka {</span></span>
<span class="line"><span style="color:#A6ACCD;">        bootstrap_servers =&gt; &quot;internal.kafka.1.xxxx.me:9092&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        group_id =&gt; &quot;sync_kd_6&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        topics =&gt; [&quot;test.detailKd&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">        consumer_threads =&gt; 5</span></span>
<span class="line"><span style="color:#A6ACCD;">        codec =&gt; &quot;json&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        auto_offset_reset =&gt; &#39;earliest&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        decorate_events =&gt; true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">filter {</span></span>
<span class="line"><span style="color:#A6ACCD;">    mutate {</span></span>
<span class="line"><span style="color:#A6ACCD;">      add_field =&gt; { &quot;@data&quot; =&gt; &quot;%{data}&quot; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    json {</span></span>
<span class="line"><span style="color:#A6ACCD;">      source =&gt; &quot;@data&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      remove_field =&gt; [&quot;@data&quot;, &quot;data&quot;, &quot;@timestamp&quot;, &quot;@version&quot;, &quot;event&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ruby {</span></span>
<span class="line"><span style="color:#A6ACCD;">        code =&gt; &quot;event.set(&#39;time&#39;, event.get(&#39;time&#39;).to_i * 1000)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">output {</span></span>
<span class="line"><span style="color:#A6ACCD;">    clickhouse {</span></span>
<span class="line"><span style="color:#A6ACCD;">        http_hosts =&gt; [&quot;http://10.0.0.89:8123&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">        table =&gt; &quot;detail.kd&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        request_tolerance =&gt; 5</span></span>
<span class="line"><span style="color:#A6ACCD;">        flush_size =&gt; 3000</span></span>
<span class="line"><span style="color:#A6ACCD;">        pool_max =&gt; 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">        mutations =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;id&quot; =&gt; &quot;id&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;user&quot; =&gt; &quot;user&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;total&quot; =&gt; &quot;total&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;free&quot; =&gt; &quot;free&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;relId&quot; =&gt; &quot;relId&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;type&quot; =&gt; &quot;type&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;time&quot; =&gt; &quot;time&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),t=[o];function p(c,i,r,u,C,A){return n(),a("div",null,t)}const g=s(e,[["render",p]]);export{h as __pageData,g as default};
