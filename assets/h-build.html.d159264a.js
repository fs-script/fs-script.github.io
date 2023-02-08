import{_ as n,o as s,c as a,e}from"./app.b32f6c43.js";const t={},p=e(`<h2 id="一、babel" tabindex="-1"><a class="header-anchor" href="#一、babel" aria-hidden="true">#</a> 一、Babel</h2><blockquote><p>JS 编译器，用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法：</p></blockquote><ul><li>语法转换；</li><li>通过 Polyfill 方式在目标环境中添加缺失的特性；</li><li>源码转换 <code>codemods</code>；</li><li>转换 React 中的 JSX 语法；</li></ul><h3 id="_01-安装" tabindex="-1"><a class="header-anchor" href="#_01-安装" aria-hidden="true">#</a> 01 - 安装</h3><ul><li><code>npm install --save-dev @babel/core @babel/cli @babel/preset-env</code></li></ul><h3 id="_02-配置-babel-config-json" tabindex="-1"><a class="header-anchor" href="#_02-配置-babel-config-json" aria-hidden="true">#</a> 02 - 配置：babel.config.json</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// 预设</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;edge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;firefox&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;chrome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;67&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;safari&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11.1&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;usage&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 只包含所需要的 polyfill</span>
        <span class="token property">&quot;corejs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3.6.5&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_03-编译" tabindex="-1"><a class="header-anchor" href="#_03-编译" aria-hidden="true">#</a> 03 - 编译</h3><ul><li><code>npx babel src --out-dir lib</code></li></ul><h3 id="_04-预设-presets-和插件-plugins" tabindex="-1"><a class="header-anchor" href="#_04-预设-presets-和插件-plugins" aria-hidden="true">#</a> 04 - 预设 Presets 和插件 Plugins</h3><ul><li><code>npm install --save-dev @babel/plugin-transform-arrow-functions</code> 转换为ES5的官方插件</li><li><code>npm install --save-dev @babel/preset-env</code> 预设，启用一组插件</li></ul><p><strong>官方提供的预设：</strong></p><ul><li><code>@babel/preset-env for compiling ES2015+ syntax</code></li><li><code>@babel/preset-typescript for TypeScript</code></li><li><code>@babel/preset-react for React</code></li><li><code>@babel/preset-flow for Flow</code></li></ul><h3 id="_05-polyfill" tabindex="-1"><a class="header-anchor" href="#_05-polyfill" aria-hidden="true">#</a> 05 - Polyfill</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 建议使用：</span>
<span class="token keyword">import</span> <span class="token string">&quot;core-js/stable&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、browserify" tabindex="-1"><a class="header-anchor" href="#二、browserify" aria-hidden="true">#</a> 二、Browserify</h2><blockquote><p>JS 编译打包工具，使浏览器可以支持 CommodJS 模块化规范。</p></blockquote><h3 id="_01-安装-1" tabindex="-1"><a class="header-anchor" href="#_01-安装-1" aria-hidden="true">#</a> 01 - 安装</h3><ul><li><code>npm install -g browserify</code></li></ul><h3 id="_02-编译" tabindex="-1"><a class="header-anchor" href="#_02-编译" aria-hidden="true">#</a> 02 - 编译</h3><ul><li><code>browserify main.js -o bundle.js</code></li></ul><h2 id="三、grunt" tabindex="-1"><a class="header-anchor" href="#三、grunt" aria-hidden="true">#</a> 三、Grunt</h2><blockquote><p>自动化构建工具，支持大量插件。</p></blockquote><h3 id="_01-安装-2" tabindex="-1"><a class="header-anchor" href="#_01-安装-2" aria-hidden="true">#</a> 01 - 安装</h3><ul><li><code>npm install -g grunt-cli</code></li><li><code>npm install grunt --save-dev</code></li></ul><h3 id="_02-配置-gruntfile-js" tabindex="-1"><a class="header-anchor" href="#_02-配置-gruntfile-js" aria-hidden="true">#</a> 02 - 配置 Gruntfile.js</h3><ul><li>&quot;wrapper&quot; 函数</li><li>项目与任务配置</li><li>加载 grunt 插件和任务</li><li>自定义任务</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 举例：</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">grunt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// Project configuration.</span>
  grunt<span class="token punctuation">.</span><span class="token function">initConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">pkg</span><span class="token operator">:</span> grunt<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">readJSON</span><span class="token punctuation">(</span><span class="token string">&#39;package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uglify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">banner</span><span class="token operator">:</span> <span class="token string">&#39;/*! &lt;%= pkg.name %&gt; &lt;%= grunt.template.today(&quot;yyyy-mm-dd&quot;) %&gt; */\\n&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;src/&lt;%= pkg.name %&gt;.js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;build/&lt;%= pkg.name %&gt;.min.js&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 加载包含 &quot;uglify&quot; 任务的插件。</span>
  grunt<span class="token punctuation">.</span><span class="token function">loadNpmTasks</span><span class="token punctuation">(</span><span class="token string">&#39;grunt-contrib-uglify&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 默认被执行的任务列表。</span>
  grunt<span class="token punctuation">.</span><span class="token function">registerTask</span><span class="token punctuation">(</span><span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;uglify&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_03-选择插件" tabindex="-1"><a class="header-anchor" href="#_03-选择插件" aria-hidden="true">#</a> 03 - 选择插件</h3><h2 id="四、gulp" tabindex="-1"><a class="header-anchor" href="#四、gulp" aria-hidden="true">#</a> 四、Gulp</h2><blockquote><p>自动化构建工具，支持大量插件。</p></blockquote><h3 id="_01-安装-3" tabindex="-1"><a class="header-anchor" href="#_01-安装-3" aria-hidden="true">#</a> 01 - 安装</h3><ul><li><code>npm install --g gulp-cli</code></li><li><code>npm install --save-dev gulp</code></li></ul><h3 id="_02-配置-gulpfile-js" tabindex="-1"><a class="header-anchor" href="#_02-配置-gulpfile-js" aria-hidden="true">#</a> 02 - 配置 gulpfile.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 举例：</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> src<span class="token punctuation">,</span> dest <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> uglify <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-uglify&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> rename <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;gulp-rename&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">default</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">src</span><span class="token punctuation">(</span><span class="token string">&#39;src/*.js&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// gulp-uglify 插件并不改变文件名</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">uglify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// 因此使用 gulp-rename 插件修改文件的扩展名</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">rename</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extname</span><span class="token operator">:</span> <span class="token string">&#39;.min.js&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&#39;output/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_03-选择插件-1" tabindex="-1"><a class="header-anchor" href="#_03-选择插件-1" aria-hidden="true">#</a> 03 - 选择插件</h3><h2 id="五、parcel" tabindex="-1"><a class="header-anchor" href="#五、parcel" aria-hidden="true">#</a> 五、Parcel</h2><blockquote><p>Web 应用打包工具，零配置，内置服务支持热更新</p></blockquote><h3 id="_01-安装-4" tabindex="-1"><a class="header-anchor" href="#_01-安装-4" aria-hidden="true">#</a> 01 - 安装</h3><ul><li><code>npm install parcel-bundler --save-dev</code></li></ul><h3 id="_02-热更新的服务" tabindex="-1"><a class="header-anchor" href="#_02-热更新的服务" aria-hidden="true">#</a> 02 - 热更新的服务</h3><ul><li>设置一个入口文件：<code>parcel index.html</code></li></ul><h3 id="_03-打包到生产模式" tabindex="-1"><a class="header-anchor" href="#_03-打包到生产模式" aria-hidden="true">#</a> 03 - 打包到生产模式</h3><ul><li><code>parcel build index.js</code></li></ul><h2 id="六、rollup" tabindex="-1"><a class="header-anchor" href="#六、rollup" aria-hidden="true">#</a> 六、Rollup</h2><blockquote><p>JS模块打包器，可以将小块代码编译成大块复杂代码，使用 ES6 模块规范</p></blockquote><h3 id="_01-安装-5" tabindex="-1"><a class="header-anchor" href="#_01-安装-5" aria-hidden="true">#</a> 01 - 安装</h3><ul><li><code>npm install --save-dev rollup</code></li></ul><h3 id="_02-打包" tabindex="-1"><a class="header-anchor" href="#_02-打包" aria-hidden="true">#</a> 02 - 打包</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># <span class="token constant">UMD</span> format requires a bundle name
$ rollup main<span class="token punctuation">.</span>js <span class="token operator">--</span>file bundle<span class="token punctuation">.</span>js <span class="token operator">--</span>format umd <span class="token operator">--</span>name <span class="token string">&quot;myBundle&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_03-配置文件-roullup-config-js" tabindex="-1"><a class="header-anchor" href="#_03-配置文件-roullup-config-js" aria-hidden="true">#</a> 03 - 配置文件 roullup.config.js</h3><h2 id="七、webpack" tabindex="-1"><a class="header-anchor" href="#七、webpack" aria-hidden="true">#</a> 七、Webpack</h2><blockquote><p>JS应用程序静态模块打包器，可以不引入配置文件，但 webpack 仍然是高度可配置的，有一个或多个文件作为打包入口，输出的文件叫做 bundle</p></blockquote><h3 id="_01-安装-6" tabindex="-1"><a class="header-anchor" href="#_01-安装-6" aria-hidden="true">#</a> 01 - 安装</h3><ul><li><code>npm install webpack-cli webpack --save-dev</code></li></ul><h3 id="_02-打包-1" tabindex="-1"><a class="header-anchor" href="#_02-打包-1" aria-hidden="true">#</a> 02 - 打包：</h3><ul><li><p>development 开发环境</p></li><li><p>production 生产环境</p></li><li><p>默认打包至 dist 目录下：<code>npx webpack ./src/main --mode=development</code></p></li></ul><h3 id="_03-配置" tabindex="-1"><a class="header-anchor" href="#_03-配置" aria-hidden="true">#</a> 03 - 配置</h3><ul><li>入口 entry</li><li>输出 output</li><li>加载器 loader</li><li>插件 plugins</li><li>模式 mode 开发、生产</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 入口</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 使用相对路径</span>
  <span class="token comment">// 输出</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 输出的路径</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 使用绝对路径</span>
    <span class="token comment">// 入口文件输出的文件名和位置</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;build.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 加载器</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// loader 的配置</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// plugin 的配置</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 模式</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),l=[p];function o(i,c){return s(),a("div",null,l)}const u=n(t,[["render",o],["__file","h-build.html.vue"]]);export{u as default};