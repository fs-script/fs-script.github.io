import{_ as n,o as s,c as a,e as t}from"./app.b32f6c43.js";const p="/images/mind.jpg",e={},o=t(`<h2 id="一、vue2" tabindex="-1"><a class="header-anchor" href="#一、vue2" aria-hidden="true">#</a> 一、Vue2</h2><h3 id="_01-使用" tabindex="-1"><a class="header-anchor" href="#_01-使用" aria-hidden="true">#</a> 01 - 使用</h3><ul><li>使用 <code>script</code> 标签引入：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 开发环境</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vue@2.7.10/dist/vue.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// 生产环境</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://cdn.jsdelivr.net/npm/vue@2.7.10&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用 npm 配合打包工具：<code>npm install vue</code></li><li>npm 标签及版本： <ul><li><code>@latest</code>，默认标签，最近更新的</li><li><code>@next</code>，下一个大版本</li><li><code>@alpha</code>，内测版</li><li><code>@beta</code>，公测版</li><li><code>@rc</code>，候选版</li></ul></li></ul><p><strong>指令：</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 所有的数据绑定都支持JS单个表达式的解析，如简单计算、三元表达式、字符串数组的方法... --&gt;</span>
<span class="token comment">&lt;!-- 指令 attribute 冒号后的参数，可以使用 [...] 绑定为动态参数，需要对参数值做约束 --&gt;</span>
<span class="token comment">&lt;!-- 缩写仅在有参数的时候有效 --&gt;</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">is</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 列表渲染 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item, index) in items<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 对象按照 Object.keys() 遍历 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value in object<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(value, name, index) in object<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 利用计算属性渲染过滤后的数据，当在嵌套 v-for 不适用的情况下可以利用方法过滤 --&gt;</span>
<span class="token comment">&lt;!-- 将模板重复对应的次数 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>n in 10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ n }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 列表渲染分组 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 条件渲染 --&gt;</span>
<span class="token comment">&lt;!-- 不推荐与 v-for 一起使用， v-for 的优先级高 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 条件渲染分组 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- v-show 元素会始终渲染并且保留在 DOM 中，只是切换元素 CSS 的 display，不支持 template --&gt;</span>
<span class="token comment">&lt;!-- 适用于需要频繁切换时 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- v-cloak 保持在元素上直到关联实例结束编译 --&gt;</span>

<span class="token comment">&lt;!-- v-pre 跳过这个元素和它的子元素的编译过程 --&gt;</span>
<span class="token comment">&lt;!-- 一次性插值 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-once</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">id</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 使用 key 让元素独立 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">ref</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 表单输入绑定：双向数据绑定 --&gt;</span>
<span class="token comment">&lt;!-- 忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源，在 data 选项中声明初始值 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 多个复选框绑定到同一个数组 --&gt;</span>
<span class="token comment">&lt;!-- 选框选中时，v-model的值为 value 的值或 true false --&gt;</span>
<span class="token comment">&lt;!-- 修饰符：.lazy .number .trim --&gt;</span>

<span class="token comment">&lt;!-- 其他 attribute --&gt;</span>
<span class="token comment">&lt;!-- 动态绑定一或多个 attribute --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>attribute</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 支持缩写 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">:attribute</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">:[...]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 用于 class 和 style 时，做了增强除了字符串外还支持了对象或数组 --&gt;</span>
<span class="token comment">&lt;!-- 建议直接将对象写在 data 中；也可以绑定计算属性 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{active: isActive}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>支持共存<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{color: ...(取值是data里的同名属性), &#39;font-size&#39;: ...}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 事件处理 --&gt;</span>
<span class="token comment">&lt;!-- 事件监听器 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name"><span class="token namespace">v-on:</span>event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 支持修饰符，prevent 对于触发事件调用 event.preventDefault() --&gt;</span>
<span class="token comment">&lt;!-- .stop .prevent .capture .self .once .passive --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name"><span class="token namespace">v-on:</span>event.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 按键修饰符，只有按键为 enter 时才触发 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">v-on:</span>keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 仅在按下如下键才触发鼠标或键盘事件的监听器：.ctrl .alt .shift .meta --&gt;</span>
<span class="token comment">&lt;!-- 鼠标按钮修饰符：.left .right .middle --&gt;</span>
<span class="token comment">&lt;!-- .exact 精确控制触发条件，仅当按下唯一的键时触发 --&gt;</span>
<span class="token comment">&lt;!-- 支持缩写 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">@event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">@[...]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 插入 HTML --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 声明式渲染 --&gt;</span>
{{ ... }}
<span class="token comment">&lt;!-- 等价于上面的方式 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>...</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>...</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建 Vue 实例</span>
<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// --- 副作用（触发组件外的影响） ---</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#...&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 设置绑定的 DOM 对象</span>

  <span class="token comment">// --- 模板依赖（使用到的资源） ---</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;...&#39;</span><span class="token operator">:</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 注册局部组件</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>  <span class="token comment">// 注册局部指令</span>
    <span class="token literal-property property">指令名</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 注册局部过滤器</span>

  <span class="token comment">// --- 组合（向选项里合并 property）</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 扩展/继承</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 混入对象</span>

  <span class="token comment">// --- 接口 ---</span>
  <span class="token literal-property property">propsData</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 向组件的 props 传递数据，主要用于测试</span>

  <span class="token comment">// --- 本地状态（本地的响应式 property）---</span>
  <span class="token comment">// 数据属性，所有的 property 加入到 Vue 的响应式系统中</span>
  <span class="token comment">// 只有创建时存在的 property 是响应式的</span>
  <span class="token comment">// Object.freeze(对象)，冻结对象，使响应式系统无法追踪变化</span>
  <span class="token comment">// 组件中的 data 只接受 function</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 计算属性</span>
  <span class="token comment">// 基于响应式依赖进行缓存，仅在依赖项改变时重新计算</span>
  <span class="token comment">// 默认只有 getter，也可以提供 setter</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token operator">...</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// --- 事件（通过响应式事件触发的回调） ---</span>
  <span class="token comment">// 侦听属性</span>
  <span class="token comment">// 适用于数据变化时执行异步或开销较大的操作</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">new</span><span class="token operator">...</span><span class="token punctuation">,</span> old<span class="token operator">...</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 生命周期钩子（函数）</span>
  <span class="token function-variable function">beforeCreate</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 创建之前执行</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 创建之后执行</span>
  <span class="token function-variable function">beforeMount</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 挂载之前执行</span>
  <span class="token function-variable function">Mounted</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 挂载之后执行</span>
  <span class="token function-variable function">beforeUpdate</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 更新之前执行</span>
  <span class="token function-variable function">updated</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 更新之后执行</span>
  <span class="token function-variable function">activated</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 被 keep-alive 缓存的组件激活时调用</span>
  <span class="token function-variable function">deactivated</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 被 keep-alive 缓存的组件失活时调用</span>
  <span class="token function-variable function">beforeDestroy</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 实例销毁前执行</span>
  <span class="token function-variable function">destroyed</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 销毁后执行</span>
  <span class="token function-variable function">errorCaptured</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 捕获到后代的错误之后执行</span>

  <span class="token comment">// --- 非响应式的 property ---</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 方法</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件基础：</strong></p><ul><li>一个组件本质上是一个拥有预定义选项的一个 Vue 实例。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全局注册</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;todo-item&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// prop 类似于一个自定义的 attribute，可以将父作用域的数据传到子组件上，起到桥梁作用</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// data 必须是一个函数，保证组件数据的独立</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> &#39;
   <span class="token comment">// 每个组件必须只有一个根元素</span>
   <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;todo-item&quot;</span><span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>foo<span class="token punctuation">.</span>xxx<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
     <span class="token comment">// 触发自定义事件,将该事件传递到父级组件处理，第二个事件可以用于抛出值（可选）</span>
     <span class="token operator">&lt;</span>button v<span class="token operator">-</span>on<span class="token operator">:</span>click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;enlarge-text&#39;, n)&quot;</span><span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
     <span class="token comment">// 使用 v-modle</span>
     <span class="token operator">&lt;</span>input v<span class="token operator">-</span>bind<span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">&#39;value&#39;</span> v<span class="token operator">-</span>on<span class="token operator">:</span>input<span class="token operator">=</span><span class="token string">&#39;$emit(&#39;</span>input<span class="token string">&#39;, $event.target.value)&#39;</span><span class="token operator">&gt;</span>
     <span class="token comment">// 插槽</span>
     <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  &#39;
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//----------------------------</span>
<span class="token operator">&lt;</span>todo<span class="token operator">-</span>item
 v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;(item, index) in items&quot;</span>
 <span class="token operator">:</span>foo<span class="token operator">=</span><span class="token string">&quot;item&quot;</span>
 <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;item.id&quot;</span>
 <span class="token operator">:</span>index<span class="token operator">=</span><span class="token string">&quot;index&quot;</span>
 <span class="token comment">// 监听自定义事件并处理，$event 访问抛出的值（可选）；事件处理是一个方法，则抛出的值用第一个参数接收</span>
 @enlarge<span class="token operator">-</span>text<span class="token operator">=</span><span class="token string">&quot;... $event&quot;</span>
 <span class="token comment">//</span>
 v<span class="token operator">-</span>modle<span class="token operator">=</span><span class="token string">&#39;searchText&#39;</span>
<span class="token operator">&gt;</span>
  <span class="token comment">// 内容将会插入插槽中</span>
  Something bad happened<span class="token punctuation">.</span>
  <span class="token comment">// 注入依赖，使用 provide 提供给后代的方法/数据</span>
  <span class="token operator">&lt;</span><span class="token operator">...</span> inject<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">...</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>todo<span class="token operator">-</span>item<span class="token operator">&gt;</span>
<span class="token comment">// 在自定义组件上使用 class 时，会添加到该组件的根元素上，已存在的不会被覆盖</span>
<span class="token comment">// 组件会在 \`currentTabComponent\` 改变时改变，is=&quot;...&quot; 可以用于有约束条件的元素的内部使用组件</span>
<span class="token comment">// 切换时组件会重新渲染，不会保存状态</span>
<span class="token operator">&lt;</span>component v<span class="token operator">-</span>bind<span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">&quot;currentTabComponent&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>深入组件：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全局注册</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-component-name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// --- 全局感知 ---</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>  <span class="token comment">// 递归的调用自身</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> Vue instance<span class="token punctuation">,</span>  <span class="token comment">// 建立父子关系</span>

  <span class="token comment">// --- 组件类型 ---</span>
  <span class="token literal-property property">functionla</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 开启函数式组件，组件无状态（data）无实例（this 上下文）</span>

  <span class="token comment">// --- 模板修改器 ---</span>
  <span class="token literal-property property">delimiters</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\${&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 改变纯文本插入分隔符</span>
  <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 保留 HTML 注释</span>

  <span class="token comment">// --- 接口 ---</span>
  <span class="token comment">// 禁止根元素继承 没有被prop 的attribute，不影响 class style</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 组件上的 v-model 会默认利用名为 value 的 prop， 和名为 input 的事件</span>
  <span class="token comment">// 单选 复选框类型 使用 v-modle时</span>
  <span class="token comment">// 定制 prop, event</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;checked&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// props 除了字符串数组，还可以是对象并指明值的类型用于验证</span>
  <span class="token comment">// 没有 prop 的 attribute 会自动添加到组件的根元素上</span>
  <span class="token comment">// 父级传入的 attribute 大多会替代子存在的，class style 则会合并</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">checked</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>

    <span class="token literal-property property">title</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">likes</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token literal-property property">isPublished</span><span class="token operator">:</span> <span class="token punctuation">[</span>Boolean<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// 可能多个</span>
    <span class="token literal-property property">callback</span><span class="token operator">:</span> Function<span class="token punctuation">,</span>
    <span class="token literal-property property">propA</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>  <span class="token comment">// 设置类型：String Number Boolean Array Object Date Function Symbol 构造函数</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 设置必填</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">propB</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>  <span class="token comment">// 设置默认值</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置对象的默认值必须从工厂函数中获得</span>
    <span class="token comment">// 设置带有返回值的验证函数</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// --- 本地状体 ---</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token comment">// --- 渲染 ---</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> <span class="token punctuation">[</span>context<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 渲染函数，存在会忽略上面的字符串模板</span>
	<span class="token function">renderError</span><span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 渲染出错时</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> &#39;
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token operator">&gt;</span>
     <span class="token comment">// 默认没有被 props 接收的 attribute 会被根元素继承，关闭继承后，使用 $attrs 接收使用</span>
     <span class="token operator">&lt;</span>input v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$attrs&quot;</span><span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;checkbox&quot;</span> v<span class="token operator">-</span>bind<span class="token operator">:</span>checked<span class="token operator">=</span><span class="token string">&quot;checked&quot;</span> v<span class="token operator">-</span>on<span class="token operator">:</span>change<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;change&#39;, $event.target.checked)&quot;</span>
       <span class="token comment">// 插槽，渲染时插槽会被替换为组件标签内写的内容</span>
       <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;sumbit&quot;</span><span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span>后备内容<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
       <span class="token comment">// 具名插槽</span>
       <span class="token operator">&lt;</span>header<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;header&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">&gt;</span>
       <span class="token comment">// 作用域插槽 让父级插槽的内容可以访问到当前作用域</span>
       <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>
       <span class="token comment">// 插槽 prop，内部实现为拥有单个参数的函数</span>
       <span class="token operator">&lt;</span>slot v<span class="token operator">-</span>bind<span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    &#39;
  	<span class="token comment">// 在祖先组件里提供</span>
  	<span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  	<span class="token comment">// 在子孙组件里注入</span>
  	<span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 局部注册</span>
<span class="token comment">// 局部注册的组件在其子组件中不可直接用，需要引入</span>
<span class="token comment">// require.context() 常用于全局引入大量公共组件</span>
<span class="token keyword">var</span> ComponentA <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;component-a&#39;</span><span class="token operator">:</span> ComponentA<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// ------------------------------------------------</span>
<span class="token comment">// 父级模板里的内容都是在父级作用域中编译的，子模板的所有内容都是在子作用域中编译的</span>
<span class="token comment">// 将一个对象的所有 property 都作为 prop 传入</span>
<span class="token comment">// props 是单向下行数据绑定的</span>
<span class="token operator">&lt;</span>my<span class="token operator">-</span>component<span class="token operator">-</span>name
 <span class="token comment">// 绑定多个 prop</span>
 v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;带有props设置内容的对象&quot;</span>
 <span class="token comment">// 监听根元素的事件</span>
 v<span class="token operator">-</span>on<span class="token operator">:</span>focus<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">&quot;onFocus&quot;</span>
 <span class="token comment">// 利用事件模拟数据的双向绑定的修饰符写法</span>
 v<span class="token operator">-</span>bind<span class="token operator">:</span>title<span class="token punctuation">.</span>sync<span class="token operator">=</span><span class="token string">&quot;xxx.title&quot;</span>
<span class="token operator">&gt;</span>
  <span class="token comment">// 插槽内容任意，可以文本 HTML、其他组件</span>
  <span class="token comment">// 组件位设置插槽 将会抛弃其中的内容</span>
  Your Profile

  <span class="token comment">// 插入具名插槽中 v-solt 要加在 template 上</span>
  <span class="token operator">&lt;</span>template v<span class="token operator">-</span>solt<span class="token operator">:</span>header<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Header<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

  <span class="token comment">// 作用域插槽</span>
  <span class="token comment">// 为插槽prop的对象起名</span>
  <span class="token comment">// 支持 [] 动态插槽名</span>
  <span class="token operator">&lt;</span>template v<span class="token operator">-</span>solt<span class="token operator">:</span><span class="token keyword">default</span><span class="token operator">=</span><span class="token string">&quot;slotProp&quot;</span><span class="token operator">&gt;</span>
  <span class="token comment">// 支持缩写</span>
  <span class="token operator">&lt;</span>template #<span class="token operator">:</span><span class="token keyword">default</span><span class="token operator">=</span><span class="token string">&quot;slotProp&quot;</span><span class="token operator">&gt;</span>
   <span class="token punctuation">{</span><span class="token punctuation">{</span>slotProp<span class="token punctuation">.</span>title<span class="token punctuation">.</span>xxx<span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>my<span class="token operator">-</span>component<span class="token operator">-</span>name<span class="token operator">&gt;</span>
<span class="token comment">// 动态组件</span>
<span class="token comment">// 失活的组件将会被缓存</span>
<span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>component v<span class="token operator">-</span>bind<span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">&quot;...&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">...</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">&gt;</span>

<span class="token comment">// 异步组件，设置一个工厂函数，分割为小一些的代码块，需要时从服务器下载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>建议顺序：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// --- 副作用 ---</span>
<span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#...&quot;</span><span class="token punctuation">,</span>

<span class="token comment">// --- 全局感知</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token literal-property property">parent</span><span class="token operator">:</span> Vue instance<span class="token punctuation">,</span>

<span class="token comment">// --- 组件类型 ---</span>
<span class="token literal-property property">functionla</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

<span class="token comment">// --- 模板修改器 ---</span>
<span class="token literal-property property">delimiters</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\${&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

<span class="token comment">// --- 模板依赖 ---</span>
<span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// --- 组合 ---</span>
<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token comment">// --- 接口 ---</span>
<span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;checked&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// --- vuex 状态 ---</span>
<span class="token literal-property property">store</span><span class="token operator">:</span> store<span class="token punctuation">,</span>

<span class="token comment">// --- 本地状态 ---</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// --- 事件 ---</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">new</span><span class="token operator">...</span><span class="token punctuation">,</span> old<span class="token operator">...</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">beforeCreate</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 创建之前执行</span>
<span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 创建之后执行</span>
<span class="token function-variable function">beforeMount</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 挂载之前执行</span>
<span class="token function-variable function">Mounted</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 挂载之后执行</span>
<span class="token function-variable function">beforeUpdate</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 更新之前执行</span>
<span class="token function-variable function">updated</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 更新之后执行</span>
<span class="token function-variable function">activated</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 被 keep-alive 缓存的组件激活时调用</span>
<span class="token function-variable function">deactivated</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 被 keep-alive 缓存的组件失活时调用</span>
<span class="token function-variable function">beforeDestroy</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 实例销毁前执行</span>
<span class="token function-variable function">destroyed</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 销毁后执行</span>
<span class="token function-variable function">errorCaptured</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 捕获到后代的错误之后执行</span>

<span class="token comment">// --- 非响应式 property ---</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token comment">// --- 渲染 ---</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> <span class="token punctuation">[</span>context<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">renderError</span><span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39; ... &#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>过渡动画：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 默认渲染为 &lt;span&gt;</span>
<span class="token operator">&lt;</span>transition
 <span class="token comment">// 更换渲染的标签</span>
 tag<span class="token operator">=</span><span class="token string">&quot;p&quot;</span>
 <span class="token comment">// 默认前缀为 v- 使用name 可以替换 v-</span>
 name<span class="token operator">=</span><span class="token string">&quot;fade&quot;</span>
 <span class="token comment">// 自定义过渡类名</span>
 enter<span class="token operator">-</span>active<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;animated-tada&quot;</span>
 leave<span class="token operator">-</span>active<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;animated ...&quot;</span>
 <span class="token comment">// 显性规定过渡的时间</span>
 <span class="token operator">:</span>duration<span class="token operator">=</span><span class="token string">&quot;1000&quot;</span>
 <span class="token comment">// 规定进入和移出的时间</span>
 <span class="token operator">:</span>duration<span class="token operator">=</span><span class="token string">&quot;{ enter: 500, leave: 800 }&quot;</span>

 <span class="token comment">// 声明 JS 钩子</span>
 v<span class="token operator">-</span>on<span class="token operator">:</span>before<span class="token operator">-</span>enter<span class="token operator">=</span><span class="token string">&quot;beforeEnter&quot;</span>
 v<span class="token operator">-</span>on<span class="token operator">:</span>enter<span class="token operator">=</span><span class="token string">&quot;enter&quot;</span>
 v<span class="token operator">-</span>on<span class="token operator">:</span>after<span class="token operator">-</span>enter<span class="token operator">=</span><span class="token string">&quot;...&quot;</span>
 v<span class="token operator">-</span>on<span class="token operator">:</span>enter<span class="token operator">-</span>cancelled<span class="token operator">=</span><span class="token string">&quot;...&quot;</span>

 v<span class="token operator">-</span>on<span class="token operator">:</span>before<span class="token operator">-</span>leave<span class="token operator">:</span><span class="token string">&quot;...&quot;</span>
  <span class="token operator">...</span>

 <span class="token comment">// 设置初始渲染的过渡</span>
 appear
 appear<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;...&quot;</span>
 appear<span class="token operator">-</span>to<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;...&quot;</span>
 appear<span class="token operator">-</span>active<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;...&quot;</span>
 v<span class="token operator">-</span>on<span class="token operator">:</span>before<span class="token operator">-</span>appear<span class="token operator">=</span><span class="token string">&quot;...&quot;</span>
 v<span class="token operator">-</span>on<span class="token operator">:</span>appear<span class="token operator">=</span><span class="token string">&quot;...&quot;</span>
  <span class="token operator">...</span>

  <span class="token comment">// 过渡模式</span>
  <span class="token comment">// 新元素先进行过渡之后当前元素离开</span>
  mode<span class="token operator">=</span><span class="token string">&quot;in-out&quot;</span>
  <span class="token comment">// 当前元素先进行过渡，完成之后新元素过渡进入</span>
  mode<span class="token operator">=</span><span class="token string">&quot;out-in&quot;</span>

  <span class="token comment">// 多个组件的过渡 使用 is 动态组件</span>
<span class="token operator">&gt;</span>
  <span class="token operator">...</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">&gt;</span>

<span class="token comment">// v-for 的列表进入与离开过渡</span>
<span class="token operator">&lt;</span>transition<span class="token operator">-</span>group <span class="token operator">...</span><span class="token operator">&gt;</span>
    <span class="token operator">...</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">-</span>group<span class="token operator">&gt;</span>

<span class="token comment">//-----------CSS-------------</span>
<span class="token punctuation">.</span>fade<span class="token operator">-</span>enter <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">.</span>fade<span class="token operator">-</span>enter<span class="token operator">-</span>active <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">.</span>fade<span class="token operator">-</span>enter<span class="token operator">-</span>to <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">.</span>fade<span class="token operator">-</span>leave <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">.</span>fade<span class="token operator">-</span>leave<span class="token operator">-</span>active <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">.</span>fade<span class="token operator">-</span>leave<span class="token operator">-</span>to <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token comment">// 控制位移的过渡</span>
<span class="token punctuation">.</span>fade<span class="token operator">-</span>move <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token comment">//---------JS------------</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>opacity <span class="token operator">=</span> <span class="token number">0</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transformOrigin <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">enter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Velocity</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;1.4em&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">Velocity</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;1em&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">complete</span><span class="token operator">:</span> done <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">leave</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Velocity</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">translateX</span><span class="token operator">:</span> <span class="token string">&#39;15px&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">rotateZ</span><span class="token operator">:</span> <span class="token string">&#39;50deg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">600</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">Velocity</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rotateZ</span><span class="token operator">:</span> <span class="token string">&#39;100deg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">Velocity</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rotateZ</span><span class="token operator">:</span> <span class="token string">&#39;45deg&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">translateY</span><span class="token operator">:</span> <span class="token string">&#39;30px&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">translateX</span><span class="token operator">:</span> <span class="token string">&#39;30px&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">complete</span><span class="token operator">:</span> done <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 通过侦听器 监听数据的变化 调用过渡动画</span>
<span class="token comment">// 可以把状态过渡封装在组件里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复用性：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 混入 mixin 提升组件的复用性</span>
<span class="token comment">// 定义一个混入对象</span>
<span class="token keyword">var</span> myMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 可以包含任意选项</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
<span class="token comment">// 定义一个使用混用对象的组件</span>
<span class="token keyword">var</span> Component <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>myMixin<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> component <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 混入对象会和原组件的数据和方法进行合并，重复项以原组件优先，方法将合并为一个数组均可调用</span>
<span class="token comment">// 全局混入</span>
Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 可自定义合并策略</span>

<span class="token comment">//-----------------------------</span>

<span class="token comment">// 自定义全局指令 v-focus</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 当被绑定的元素插入到 Dom 时</span>
  <span class="token function-variable function">inserted</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>，
  <span class="token comment">// 支持众多钩子函数，去定义指令的功能</span>
  <span class="token comment">// 支持传入对象字面量</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//-----------------------------</span>
<span class="token comment">// 渲染函数 render</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;anchored-heading&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> createElement<span class="token punctuation">{</span>
      <span class="token comment">// 第一个参数：标签名字符串、组件选项对象、函数</span>
      <span class="token string">&#39;h&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token punctuation">,</span> <span class="token comment">// 标签名称</span>
      <span class="token comment">// 可选，数据对象 class\\style\\slot\\attrs...</span>
      <span class="token comment">// this.$slots 访问静态插槽的内容</span>
      <span class="token comment">// this.$scopedSlots.具名</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">,</span> <span class="token comment">// 子节点数组(内容)</span>
      <span class="token comment">// 可选，子级虚拟节点 VNode</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// VNode 必须是唯一的</span>
<span class="token comment">// v-for v-if 都可以在 render 中原生实现</span>
<span class="token comment">// 修饰符 .passive 等可以用前缀 &amp; 代替</span>
<span class="token comment">// 将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例，实际上也是 JSX 所要求的</span>

<span class="token comment">// 函数式组件</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-component&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">functional</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 可以省略 props</span>

  <span class="token comment">// 组件需要的一切都是通过 context 参数（是一个对象）传递</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">createElement<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 模板实际上被编译为了渲染函数</span>

<span class="token comment">//------------------------------------------</span>
<span class="token comment">// 插件，通常为 vue 提供全局功能</span>
<span class="token comment">// 官方插件：vue-router ...</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MyPlugin<span class="token punctuation">,</span> <span class="token punctuation">{</span> 可选对象 <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 开发插件要暴露一个 install 方法</span>

<span class="token comment">//-------------------------------------------</span>
<span class="token comment">// 过滤器，可以应用在双花括号插值和 v-bind 表达式</span>
<span class="token comment">// 过滤器可以串联，可以传入参数</span>
<span class="token comment">// 在双花括号中</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span> message <span class="token operator">|</span> capitalize <span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment">// 在 \`v-bind\` 中</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span>bind<span class="token operator">:</span>id<span class="token operator">=</span><span class="token string">&quot;rawId | formatId&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// 过滤器属性</span>
<span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">capitalize</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
    value <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> value<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义全局过滤器</span>
Vue<span class="token punctuation">.</span><span class="token function">filters</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>工具：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 单文件组件</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">...</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
  <span class="token operator">...</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token comment">// ------------------</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">...</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">import</span> <span class="token operator">...</span> <span class="token keyword">from</span> <span class="token string">&#39;...&#39;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;less&quot;</span> scoped<span class="token operator">&gt;</span>
  <span class="token operator">...</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

<span class="token comment">// -----------------</span>
<span class="token comment">// 测试：单元测试、组件测试、端到端测试</span>
<span class="token comment">// 生产环境部署</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>规模化：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 路由</span>
<span class="token comment">// 推荐使用 vue-router</span>
<span class="token keyword">const</span> NotFound <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;p&gt;Page not found&lt;/p&gt;&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;p&gt;Home page&lt;/p&gt;&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;p&gt;About page&lt;/p&gt;&#39;</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
  <span class="token string-property property">&#39;/about&#39;</span><span class="token operator">:</span> About
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">currentRoute</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">ViewComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> routes<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentRoute<span class="token punctuation">]</span> <span class="token operator">||</span> NotFound
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>ViewComponent<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 状态管理</span>
<span class="token comment">// vuex</span>

<span class="token comment">// 服务端渲染</span>
<span class="token comment">// SSR</span>
<span class="token comment">// Next.js</span>

<span class="token comment">// 安全</span>
<span class="token comment">// 用户提供的内容需要过滤</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、vue3" tabindex="-1"><a class="header-anchor" href="#二、vue3" aria-hidden="true">#</a> 二、Vue3</h2><p><strong>使用：</strong></p><ul><li><code>npm init vue@latest</code></li><li><code>npm install</code></li><li><code>npm run dev</code></li><li><code>npm run build</code></li></ul><p><strong>创建：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 应用配置</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理子组件抛出的错误</span>
<span class="token punctuation">}</span>

<span class="token comment">// 注册可用资源，注册一个组件</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span>

<span class="token comment">// 挂载实例</span>
app<span class="token punctuation">.</span><span class="token function">mout</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 可以创建多个应用实例，挂载到不同的实例上去</span>

<span class="token comment">// 依赖提供</span>
app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// setup</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
  <span class="token operator">...</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>响应式：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 响应式数据</span>
<span class="token keyword">const</span> 代理对象 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 原始对象 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 包装为一个带 .value 属性的 ref 对象</span>
<span class="token keyword">const</span> 对普通值类型的引用 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span> 普通值 <span class="token punctuation">)</span>
<span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 访问更新后的 <span class="token constant">DOM</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 计算属性</span>
<span class="token comment">// 期望接受一个 getter 函数，返回一个计算属性ref</span>
<span class="token comment">// 默认只读，设置 get() set() 可读可写</span>
<span class="token comment">// 不应有副作用：做异步请求或更改 DOM</span>
<span class="token keyword">const</span> 计算属性 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token comment">// 声明周期钩子</span>
<span class="token function">onBeforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onCreated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 侦听器，只追踪明确侦听的数据源</span>
<span class="token function">watch</span><span class="token punctuation">(</span>数据源<span class="token punctuation">,</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 立即执行回调的侦听器，在副作用期间追踪依赖</span>
<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 访问被 Vue 更新之后的 DOM，默认侦听器在组件更新前被调用</span>
<span class="token literal-property property">flush</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span>
<span class="token comment">// 后置刷新</span>
<span class="token function">watchPostEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 访问模板引用，只在组件挂载之后可访问</span>
<span class="token comment">// 声明一个同名得模板引用</span>
<span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
input<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 显示注册组件</span>
<span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token keyword">return</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Setup：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 单文件组件中使用&lt;PascalCase /&gt;的标签名，DOM 中书写模板使用&lt;kabab-case&gt;&lt;/kabab-case&gt;</span>
<span class="token comment">// 单独写</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
  <span class="token comment">// props 列表 编译宏命令 不需要显示导入 返回一个对象</span>
  <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token comment">// 返回的是实例对象，对象或数组需要从工厂函数产出</span>
	<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token operator">:</span> Number<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 编译宏命令 不需要显示导入</span>
	<span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token comment">// 返回一个 emit() 函数</span>
  <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token operator">...</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
	<span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 通过返回值 <span class="token boolean">true</span> <span class="token boolean">false</span> 判断验证是否通过 <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 无校验</span>
    <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// 有校验</span>
    <span class="token literal-property property">sumbit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">submitForm</span><span class="token punctuation">(</span><span class="token parameter">email<span class="token punctuation">,</span> password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>email<span class="token punctuation">,</span> password<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

	<span class="token comment">// v-modle.</span>
	<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token literal-property property">modelModifiers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token comment">// 访问透传的 attribute</span>
  <span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 依赖注入</span>
  <span class="token comment">// 祖先组件提供 可多次调用 提供多个</span>
  <span class="token comment">// 建议所有数据操作都内聚在提供方，可以为数据变更提供一个函数，同时可以设置 readonly 只读</span>
  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;注入名&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;注入值&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// 子孙组件注入</span>
  <span class="token keyword">const</span> <span class="token operator">...</span> <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;注入名&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;提供的默认值&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// 异步组件</span>
  <span class="token keyword">const</span> AsyncComp <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// 服务器获取组件</span>
      <span class="token function-variable function">loader</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>获取到的组件<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 加载时使用的组件</span>
    <span class="token operator">...</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token comment">// 展示加载组件的延时时间</span>
    <span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token comment">// 加载失败后展示的组件</span>
    <span class="token operator">...</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token comment">// 设置超时</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token comment">// 抛出一个事件 父组件监听后执行操作，没有冒泡机制</span>
  <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;事件名&#39;, 额外参数)&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token comment">// 插槽 文本、元素、组件</span>
  <span class="token operator">&lt;</span>slot <span class="token operator">:</span><span class="token operator">...</span><span class="token operator">=</span><span class="token string">&quot;...&quot;</span><span class="token operator">&gt;</span>默认内容<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;具名插槽&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
  <span class="token comment">// 透传进的值</span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span> $attrs <span class="token punctuation">}</span><span class="token punctuation">}</span>
	v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$attrs&quot;</span>
  <span class="token comment">// 多根节点不自动透传，需要显示绑定 $attrs</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token comment">// -----------------------------------------</span>
<span class="token operator">&lt;</span>component is<span class="token operator">:</span><span class="token operator">...</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">...</span> v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;存有多个 prop 的对象&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>template v<span class="token operator">-</span>slot<span class="token operator">:</span><span class="token string">&quot;具名插槽&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">...</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>template #<span class="token string">&quot;具名插槽&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">...</span><span class="token operator">&gt;</span>
<span class="token comment">// 访问子作用域 支持解构</span>
<span class="token operator">&lt;</span><span class="token operator">...</span> v<span class="token operator">-</span>slot<span class="token operator">=</span><span class="token string">&quot;slotProps&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">...</span><span class="token operator">&gt;</span>
<span class="token comment">// 具名插槽作用域</span>
<span class="token operator">&lt;</span><span class="token operator">...</span> v<span class="token operator">-</span>slot<span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">&quot;slotProps&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">...</span><span class="token operator">&gt;</span>
<span class="token comment">// 异步组件</span>
<span class="token operator">&lt;</span>AsyncComp <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 组合式函数（复用相同的逻辑）：抽取单独的 .js 文件，组合式函数以 use... 开头，通过返回值暴露所管理的状态</span>
<span class="token comment">// 纯逻辑时使用组合式函数，逻辑和需要视图更新时使用基于作用域插槽的无渲染组件</span>
<span class="token comment">//</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>复用代码：组件、组合式函数、自定义指令、插件</p></blockquote><p><strong>指令、插件：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 自定义指令</span>
<span class="token comment">// 在模板中启用 v-focus</span>
<span class="token keyword">const</span> vFocus <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">mounted</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 全局注册</span>
app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 指令钩子和生命周期相似...</span>

<span class="token comment">// 插件安装</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>myPlugin<span class="token punctuation">,</span> <span class="token punctuation">{</span> 可选项 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> myPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>内置组件：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Transition <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>TransitionGroup <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>KeepAlive <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Teleport <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Suspense <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、代码风格" tabindex="-1"><a class="header-anchor" href="#三、代码风格" aria-hidden="true">#</a> 三、代码风格</h2><ul><li>组件名使用多个单词，单词小写，单词间用 - 隔开。</li><li>组件的 <code>data</code> 必须是一个返回对象的函数。</li><li><code>props</code> 要尽可能的详细，至少是要指定类型的（类型、是否必须、默认值、校验）</li><li>使用 <code>v-for</code> 要配合 <code>key</code></li><li>避免 <code>v-if</code> 和 <code>v-for</code> 在同一个元素上使用。</li><li>单文件时组件的 css 要设置 <code>scoped</code> 指定作用域。</li><li>使用模块作用域保持不允许外部访问函数的私有性，为插件、混入的不考虑对外公共 API 的自定义私有属性使用 <code>$_</code> 前缀，并附带一个命名空间。</li><li>使用构建系统时，把每个组件单独分成文件。</li><li>组件文件名一般化描述开头，描述性修饰结尾：搜索输入框 查询、设置检查 条款...</li><li>单文件的文件名使用大驼峰命名或单词小写，单词间用 - 隔开。</li><li>对于展示类无逻辑无状态的组件文件名，使用 <code>Base</code>、<code>App</code>、<code>V</code> 开头的前缀开头。</li><li>不会被复用，不接受 <code>prop</code> 的组件文件名，使用 <code>The</code> 开头的前缀开头，以示前缀。</li><li>父组件在某些场合下的子组件文件名，使用父组件的名作为前缀开头，紧密耦合。</li><li>在单文件中 <code>&lt;MyComponent/&gt;</code>，在 DOM 模板中，<code>&lt;my-compont&gt;&lt;/my-component&gt;</code></li><li>声明 <code>prop</code> 时，使用小驼峰命名。</li><li>多个 <code>attribute</code> 换行书写。</li><li>总结： JS 中使用驼峰命名，HTML 中使用 - 分隔。</li><li><code>:</code> <code>@</code> <code>#</code> 缩写要么都用要么都不用。</li></ul><p><img src="`+p+`" alt="Mind"></p><h2 id="四、vue-router" tabindex="-1"><a class="header-anchor" href="#四、vue-router" aria-hidden="true">#</a> 四、Vue Router</h2><p><strong>安装：</strong></p><ul><li><code>npm install vue-router@4</code></li><li><code>yarn add vue-router@4</code></li></ul><p><strong>使用：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HTML 使用</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://unpkg.com/vue@3&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://unpkg.com/vue-router@4&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;app&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Hello App<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>使用 router<span class="token operator">-</span>link 组件进行导航 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>通过传递 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">to</span><span class="token template-punctuation string">\`</span></span> 来指定链接 <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;router-link&gt;</span><span class="token template-punctuation string">\`</span></span> 将呈现一个带有正确 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">href</span><span class="token template-punctuation string">\`</span></span> 属性的 <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;a&gt;</span><span class="token template-punctuation string">\`</span></span> 标签<span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>Go to Home<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>router<span class="token operator">-</span>link to<span class="token operator">=</span><span class="token string">&quot;/about&quot;</span><span class="token operator">&gt;</span>Go to About<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 路由出口 <span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 路由匹配到的组件将渲染在这里 <span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>router<span class="token operator">-</span>view name<span class="token operator">=</span><span class="token string">&quot;...&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token comment">// ----------------------------------------</span>

<span class="token comment">// 1. 定义路由组件.</span>
<span class="token comment">// 也可以从其他文件导入</span>
<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;Home&lt;/div&gt;&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;About&lt;/div&gt;&#39;</span> <span class="token punctuation">}</span>

<span class="token comment">// 2. 定义一些路由</span>
<span class="token comment">// 每个路由都需要映射到一个组件。</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// 3. 创建路由实例并传递 \`routes\` 配置</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> VueRouter<span class="token punctuation">.</span><span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 4. 内部提供了 history 模式的实现。这里使用 hash 模式。</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> VueRouter<span class="token punctuation">.</span><span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span> <span class="token comment">// \`routes: routes\` 的缩写</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 5. 创建并挂载根实例</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//确保 _use_ 路由实例使</span>
<span class="token comment">//整个应用支持路由。</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>this.$route</code> （当前路由）与 直接使用通过 <code>createRouter</code> 创建的 <code>router</code> 实例完全相同。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 动态路由</span>

<span class="token comment">// 路由匹配之后 params 的值以 this.$route.params 暴露出来</span>

<span class="token comment">// 响应路由参数的变化</span>
<span class="token comment">// 或使用导航守卫</span>

<span class="token comment">// 捕获所有路由或 404 路由 使用正则表达式</span>

<span class="token comment">// 路由匹配语法：在参数中自定义正则，可重复参数匹配0-n个参数 + *，sensitive 和 strict 控制匹配是灵活或严格的，? 可选参数</span>

<span class="token comment">// 嵌套路由</span>

<span class="token comment">// 编程式导航：导航到不同的位置、替换当前位置、横跨历史、篡改历史</span>

<span class="token comment">// 命名路由</span>

<span class="token comment">// 命名视图 components s s</span>

<span class="token comment">// 重定向和别名，相对重定向</span>

<span class="token comment">// 路由组件传参 props</span>

<span class="token comment">// 不同的历史模式</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Hash 模式 #</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// HTML5 模式</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/.../:...&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token comment">// 重定向 也可以是一个命名路由 { name: &#39;...&#39; } 同时也可以是一个方法</span>
    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 别名</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 组件传参</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 嵌套路由</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 上一层匹配成功时</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>导航守卫：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导航守卫：通过跳转或取消的方式守卫导航</span>

<span class="token comment">// 全局前置守卫：</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> <span class="token punctuation">[</span>next<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 全局解析守卫</span>
router<span class="token punctuation">.</span><span class="token function">beforeResolve</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">to</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 全局后置钩子</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">onError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 路由独享的守卫：在路由配置中。只有在从不同的导航时才触发</span>
<span class="token function-variable function">beforeEnter</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 组件内的守卫，可用的配置 API：beforeRouteEnter、beforeRouteUpdate、beforeRouterLeave</span>

<span class="token comment">// 完整导航解析流程：</span>
<span class="token number">1</span>、导航被触发。
<span class="token number">2</span>、在失活的组件里调用 beforeRouteLeave 守卫。
<span class="token number">3</span>、调用全局的 beforeEach 守卫。
<span class="token number">4</span>、在重用的组件里调用 beforeRouteUpdate <span class="token function">守卫</span><span class="token punctuation">(</span><span class="token number">2.2</span><span class="token operator">+</span><span class="token punctuation">)</span>。
<span class="token number">5</span>、在路由配置里调用 beforeEnter。
<span class="token number">6</span>、解析异步路由组件。
<span class="token number">7</span>、在被激活的组件里调用 beforeRouteEnter。
<span class="token number">8</span>、调用全局的 beforeResolve <span class="token function">守卫</span><span class="token punctuation">(</span><span class="token number">2.5</span><span class="token operator">+</span><span class="token punctuation">)</span>。
<span class="token number">9</span>、导航被确认。
<span class="token number">10</span>、调用全局的 afterEach 钩子。
<span class="token number">11</span>、触发 <span class="token constant">DOM</span> 更新。
<span class="token number">12</span>、调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

<span class="token comment">// 路由元信息 meta 附加信息：过渡名称、谁可以访问...</span>
$route<span class="token punctuation">.</span><span class="token function">meta</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 数据获取：导航完成之后获取（接下来用生命周期钩子去获取数据，过程中显示加载中）、导航完成之前获取（在守卫中获取数据成功后执行导航）</span>

<span class="token comment">// 过渡动效</span>
使用 v<span class="token operator">-</span>slot <span class="token constant">API</span>
<span class="token comment">// 单个路由的过渡：元信息+动态name</span>
<span class="token comment">// 基于路由的动态过渡</span>
<span class="token comment">// key 强制复用过渡</span>

<span class="token comment">// 滚动行为</span>
<span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> savedPosition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token comment">// 路由懒加载：将静态导入替换为动态导入，进行缓存</span>

<span class="token comment">// 导航故障</span>
Promise

<span class="token comment">// 动态路由</span>
router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\\ router<span class="token punctuation">.</span><span class="token function">removeRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// router.hasRoute() 检查路由是否存在</span>
<span class="token comment">// router.getRoutes() 获取一个包含所有路由记录的数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>router</code> 是路由实例对象，<code>route</code> 是当前正在跳转的路由对象。</li></ul><h2 id="五、vuex" tabindex="-1"><a class="header-anchor" href="#五、vuex" aria-hidden="true">#</a> 五、Vuex</h2><p><strong>安装：</strong></p><ul><li><code>npm install vuex --save</code></li><li><code>yarn add vuex</code></li><li>如果浏览器不支持 promise：<code>npm install es6-promise --save</code></li></ul><p><strong>使用：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 安装使用</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 核心为 store（仓库），其中包含了应用中大部分的 state 它是响应式的，不能够直接被修改，需要显示的提交 mutation</span>
store<span class="token punctuation">.</span>state
store<span class="token punctuation">.</span>commit

<span class="token comment">// State</span>
<span class="token comment">// 单一状态数</span>
<span class="token comment">// 在组件中以计算属性返回某个状态</span>
<span class="token comment">// 多个状态使用 mapState</span>
<span class="token comment">// 组件仍然具有局部状态</span>

<span class="token comment">// Getter 相当于 store 的计算属性</span>
<span class="token comment">// mapGetters</span>

<span class="token comment">// Mutation</span>
<span class="token comment">// 提交载荷 （大多数情况下应该是一个对象）</span>
<span class="token comment">// 对象风格提交</span>
<span class="token comment">// mutation 需要是同步函数</span>
<span class="token comment">// 在组件中提交 mutation</span>

<span class="token comment">// Action</span>
<span class="token comment">// 提交的是 mutation</span>
<span class="token comment">// 可以包含任意异步操作</span>
<span class="token comment">// 分发 store.dispatch(&#39;&#39;)，支持载荷和对象的方式进行分发</span>
<span class="token comment">// mapActions</span>

<span class="token comment">// Module</span>
<span class="token comment">// 将 store 分割为模块</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、pinia" tabindex="-1"><a class="header-anchor" href="#六、pinia" aria-hidden="true">#</a> 六、Pinia</h2><h2 id="七、vue-cli" tabindex="-1"><a class="header-anchor" href="#七、vue-cli" aria-hidden="true">#</a> 七、Vue CLI</h2><h3 id="_01-安装" tabindex="-1"><a class="header-anchor" href="#_01-安装" aria-hidden="true">#</a> 01 - 安装</h3><ul><li><code>npm install -g @vue/cli</code></li><li><code>yarn add global @vue/cli</code></li></ul><h3 id="_02-创建项目" tabindex="-1"><a class="header-anchor" href="#_02-创建项目" aria-hidden="true">#</a> 02 - 创建项目</h3><ul><li>创建一个新的项目：<code>vue create 项目名</code></li><li>启用图形化界面：<code>vue ui</code></li><li>启动服务：<code>npm run serve</code></li><li>安装插件：<code>vue add 插件名</code></li><li>打包程序：<code>npm run build</code></li></ul><h2 id="八、vite" tabindex="-1"><a class="header-anchor" href="#八、vite" aria-hidden="true">#</a> 八、Vite</h2><h2 id="九、ssr" tabindex="-1"><a class="header-anchor" href="#九、ssr" aria-hidden="true">#</a> 九、SSR</h2><h2 id="十、国际化" tabindex="-1"><a class="header-anchor" href="#十、国际化" aria-hidden="true">#</a> 十、国际化</h2><h2 id="十一、源码分析" tabindex="-1"><a class="header-anchor" href="#十一、源码分析" aria-hidden="true">#</a> 十一、源码分析</h2><h2 id="naive-ui" tabindex="-1"><a class="header-anchor" href="#naive-ui" aria-hidden="true">#</a> Naive UI</h2>`,68),c=[o];function l(i,r){return s(),a("div",null,c)}const k=n(e,[["render",l],["__file","f-vue.html.vue"]]);export{k as default};
