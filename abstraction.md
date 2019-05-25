<h3 id="abstraction">Abstraction</h3>
<p>With this abstraction, we gain three important things:</p>
<ul>
<li>
<p>We have one place with our single source of truth.</p>
</li>
<li>
<p>We can check for the support of native API’s and use them.</p>
</li>
<li>
<p>We can swap the implementation without breaking anything.</p>
</li>
</ul>
<pre class=" language-js"><code class="prism  language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>
  findIndex
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'lodash'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findIndex</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> predicate<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>findIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> array<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>predicate<span class="token punctuation">)</span>

  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">findIndex</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> predicate<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre>
<p>another example:</p>
<pre class=" language-js"><code class="prism  language-js"><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">HTTP</span> <span class="token punctuation">{</span>

  <span class="token keyword">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre>

