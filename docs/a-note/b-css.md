---
title: CSS
description: CSS
editLink: false
lastUpdated: false
contributors: false
prev:
  text: HTML
  link: /a-note/a-html.md
next:
  text: JavaScript
  link: /a-note/c-javascript.md
---

## （一）基本语法

> 在简写属性中设置多个值时所代表的边： <br />
> 一个值用于四边； <br />
> 两个值用于上下、左右； <br />
> 三个值用于上、左右、下； <br />
> 四个值用于上、右、下、左。

### 01 - 优先级

| 名称 | 描述 |
| --- | --- |
| 行内 CSS | 高 |
| 内部 CSS | 中 |
| 外部 CSS | 低 |

> 多个样式修饰一个元素按上诉优先级
> 优先级相同则读取最后一个样式生效

- 其他优先级：

| 名称 | 描述 |
| --- | --- |
| ID 选择器 | 高 |
| 类选择器 | 中 |
| 类型选择器与伪元素 | 低 |

> `!important` 将覆盖任何其他声明 (不建议使用)

### 02 - 规则

| 名称 | 描述 |
| --- | --- |
| @charset | 样式表使用的字符集 |
| @import | 引入一个外部样式表 |
| @namespace | XML 命名空间 |

- 嵌套 @ 规则，可用于语句或规则组：

| 名称 | 描述 |
| --- | --- |
| @supports | 特性查询，满足特定 CSS 功能生效 |
| @media | 媒体查询，满足设定尺寸生效 |
| @keyframes | 动画序列关键帧 |
| @page | 打印时的布局变化 |
| @font-face | 描述将下载的外部字体 |

```css
@media screen and (max-width: 970px) {
  body {
    background-color: red;
  }
}

@keyframes move {
  0% { top: 0; left: 0}
  25% { top: 20px; left: 20px;}
  50% { top: 60px; left: 60px}
  75% { top: 20px; left: 20px;}
  100% { top: 100px; left: 100px;}
  /***
  from {}
  to {}
  ***/
}
```

### 03 - 单位

| 名称 | 描述 |
| --- | --- |
| em | 相对于父元素的字体大小 |
| rem | 相对于根元素的字体大小 |
| lh | 元素的行高 |
| rlh | 根元素的行高 |
| vw | 1% 设备的宽度 |
| vh | 1% 设备的高度 |
| px | 像素 |
| pt | 点 |
| pc | 派卡 1pc = 12pt = 16px |
| deg | 360° |

### 04 - 颜色

| 名称 | 描述 |
| --- | --- |
| HEX | `#rrggbb` |
| RGBA | `rgba(red, green, blue, alpha)` 红、绿、蓝、透明度 |
| HSLA | `hsla(hue, saturation, lightness, alpha)` 色相、饱和度、明度、透明度 |

### 05 - 布局

- 块级格式化上下文（BFC）

  根元素、浮动元素、绝对定位元素（`absolute`、`fixed`）、行内块元素、表格单元格、表格标题、匿名表格单元格元素、`overflow` 值不为`visible`、`clip` 的块元素、`display` 值为 `flow-root` 的元素、`contain` 值为 `layout`、`content`、`paint` 的元素、弹性元素、网格元素、多列容器。

- 盒模型

  所有元素表示为一个个矩形的盒子，CSS 决定这些盒子的大小、位置、属性，盒子由四部分组成，分为内容边界、内边距边界、边框边界、外边框边界。除可替换元素外，行内元素周围有内边距和边框，但是占用的空间则是由 `line-height` 属性决定的。

- 包含块

	元素的尺寸和位置经常受到包含块的影响，包含块通常指的是最近的祖先块元素的内容区，一些属性设置的百分比是包含块计算而来的。确定一个包含块依赖于这个元素的 `position` 属性：<br/>
  (1) 属性为 `static`、`relative`、`sticky`，包含块由它最近的祖先块元素的内容区边缘决定；<br/>
  (2) 属性为 `absolute`，包含块是最近的值不是 `static` 的祖先元素的内边距的边缘决定；<br/>
  (3) 属性为 `fixed`，包含块是 `viewport`。

- 布局模式

	① 块布局；② 行内布局；③ 表格布局；④ 定位布局；⑤ 弹性盒子布局；⑥ 网格布局。

- 外边距合并

	块的上下边距有时合并为单个边距，大小为边距最大的一方，这种行为称为边距折叠。<br/>
  (1) 同一层相邻元素之间，可以通过给元素后面添加 `clear-fix` 清除浮动来解决；<br/>
  (2) 父元素与后代元素之间，设置边框或内边距来解决。<br/>
  此现象发生在块级元素中，当设置了浮动、相对或绝对定位之后不会发生外边距合并。

- 替换元素

	替换元素的展现效果不是 CSS 控制的，是一种外部对象，CSS 只影响它的大小和位置而不能影响内容。`iframe`、`video`、`embed`、`img`，特定情况下可替代：`option`、`audio`、`canvas`、`object`

- 层叠上下文

- 视觉格式化模型

### 06 - 选择器

| 基本选择器 | 描述 |
| --- | --- |
| 通配选择器 | `*` |
| 元素选择器 | `elementName` |
| 类选择器 | `.className` |
| ID选择器 | `#idName` |
| 属性选择器 | `[属性=值]` |

| 分组选择器 | 描述 |
| --- | --- |
| 列表选择器 | `A, B` 同时选择 A 和 B 元素 |

| 组合选择器 | 描述 |
| --- | --- |
| 相邻兄弟选择器 | `A + B`　B 选择的元素在水平方向上紧随 A 选择的元素 |
| 普通兄弟选择器 | `AˋB`　A 选择的元素在 B 选择的元素之前，但不一定紧接 |
| 子选择器 | `A > B`　B 是 A 的直接子元素 |
| 后代选择器 | `A B`　B 是 A 的后代，不一定是直接子代 |

### 07 - 背景

| 属性 | 值 | 描述 |
| --- | --- | --- |
| background： |  | 背景 |
| > background-color | rgba/hsla/hex | 背景颜色 |
| > background-image | url() | 背景图像 |
|  | linear-gradient(1,2,3...) | 上下线性渐变色 |
|  | linear-gradient(to right,1,2,3...) | 左右线性渐变色 |
|  | linear-gradient(to bottom right,1,2,3...) | 对角线线性渐变色 |
|  | radial-gradient(circle, 1, 2, 3...) | 径向渐变均匀间隔 |
|  | radial-gradient(1 5%, 2 15%, 3 25%...) | 径向渐变不同间距 |
| > background-repeat | repeat-x、repeat-y、space、round、no-repeat | 背景图像重复 |
| > background-attachment | scroll，fixed，local | 背景图像滚动方式 |
| > background-position (-x/-y) | top、right、bottom、left、% | 背景图像位置 |
| > background-size | px、%、contain、cover | 背景图像大小 |
| > background-origin | border-box、padding-box、content-box | 背景图像起始位置 |
| > background-clip | border-box、padding-box、content-box、text | 背景图像绘制区域 |
| opacity | 0-1 | 不透明度，子元素将继承 |
| filter |  | 将滤镜添加给元素 |
| backdrop-filter |  | 为元素后面的区域添加滤镜效果 |
|  | blur() | 高斯模糊 |

### 08 - 边框

| 属性 | 值 | 描述 |
| --- | --- | --- |
| border： |  | 边框 |
| -top、-right、-bottom、-left |  |  |
| > border-width | px | 宽度 |
| > border-style | dotted、dashed、solid、double、groove、ridge、inset、outset、none、hidden | 样式 |
| > border-color | rgba/hsla/hex | 颜色 |
| border-image | url() | 绘图 |
| border-block | px | 边界 |
| border-radius | px | 圆角 |

### 09 - 边距

| 属性 | 值 | 描述 |
| --- | --- | --- |
| margin | px、%、auto、inherit | 外边距 |
| -top、-right、-bottom、-left |  |  |
| padding | px、%、auto、inherit | 内边距 |
| -top、-right、-bottom、-left |  |  |

### 10 - 宽高

| 属性 | 值 | 描述 |
| --- | --- | --- |
| width | px、%、auto、inherit | 宽度 |
| height | px、%、auto、inherit | 高度 |
| max-width/max-height | px、%、auto、inherit | 最大宽度/高度 |
| min-width/min-height | px、%、auto、inherit | 最小宽度/高度 |
| box-sizing | content-box、border-box | 如何计算宽高 |

### 11 - 轮廓

| 属性 | 值 | 描述 |
| --- | --- | --- |
| outline： |  | 轮廓 |
| > outline-style | 同border-style | 轮廓样式 |
| > outline-width | px | 轮廓宽度 |
| > outline-offset | px | 轮廓偏移 (间隙) |
| > outline-color | rgba/hsla/hex | 轮廓颜色 |

### 12 - 文本

| 属性 | 值 | 描述 |
| --- | --- | --- |
| color | rgba/hsla/hex | 文本颜色 |
| text-align | left、center、right、justify | 文本水平对齐 |
| text-decoration | none | 文本装饰 |
| text-transform | uppercase、lowercase、capitalize | 文本转换 |
| text-indent | px | 文字缩进 |
| text-shadow | X轴、Y轴、模糊、颜色 | 文本阴影 |
| text-overflow | clip、ellipsis | 文本溢出处理 |
| line-height | px | 行高 |
| direction | ltr、rtl | 文本方向 (正、反) |
| vertical-align | top、middle、bottom | 文本垂直对齐 |
| word-spacing | px | 字间距 |
| letter-spacing | px | 字母间距 |
| font： |  | 字体 |
| > font-family | "黑体" | 字体 |
| > font-style | italic | 字体样式 |
| > font-weight | bold、lighter、bolder、number | 字体粗细 |
| > font-size | px、em、%、vw、vh | 字体大小 |

### 13 - 列表

| 属性 | 值 | 描述 |
| --- | --- | --- |
| list-style： |  |  |
| > list-style-type | circle、square、upper-roman、lower-alpha | 项目标记 |
| > list-style-image | url() | 项目图像标记 |
| > list-style-position | outside、inside | 项目标记定位 |

### 14 - 表格

| 属性 | 值 | 描述 |
| --- | --- | --- |
| caption-side | top、bottom | 表格标题位置 |
| border-collapse | collapse、separate | 表格边框合并 |
| border-spacing | px | 单元格间距 |
| table-layout | auto、fixed | 表格行列算法 |

### 15 - 显示

| 属性 | 值 | 描述 |
| --- | --- | --- |
| display |  | 元素的内部和外部显示类型，<br />外部指块级或内联，内部指子元素 |
|  | none | 隐藏后元素不占位 |
| > outside: | block | 块级元素 |
|  | inline | 行内元素 |
|  | run-in | 取决于相邻元素的形态 |
| > inside: | flow | 流式布局 |
|  | flow-root |  |
|  | table | 块级表格形式 |
|  | flex | 弹性布局 |
|  | grid | 网格布局 |
| > listitem: | list-item | 列表形式 |
| > legacy: | inline-block |  |
|  | inline-table |  |
|  | inline-flex |  |
|  | inline-grid |  |
| visibility | hidden | 隐藏后元素依然占位 |

### 16 - 定位

| 属性 | 值 | 描述 |
| --- | --- | --- |
| position | static | 默认静态，根据正常文档流定位 |
|  | relative | 相对定位，相对于正常位置，会占据原来的位置 |
|  | absolute | 绝对定位，相对于最近定位的祖先元素，不再占据原来的位置 (移除文档流) |
|  | fixed | 相对于视口定位的一种绝对定位 (移除文档流) |
|  | sticky | 粘性定位，根据用户的滚动位置定位，在 relative 和 fixed 之间切换 |
| top | px |  |
| bottom | px |  |
| right | px |  |
| left | px |  |
| z-index | number | 元素的堆叠层次 |

### 17 - 溢出

| 属性 | 值 | 描述 |
| --- | --- | --- |
| overflow | visible | 默认不裁剪，在元素框外渲染 |
|  | hidden | 溢出被裁剪，内容不可见 |
|  | scroll | 溢出被裁剪，添加滚动条 |
| overflow-x |  | 水平方向的溢出行为 |
| overflow-y |  | 垂直方向的溢出行为 |

### 18 - 浮动

| 属性 | 值 | 描述 |
| --- | --- | --- |
| float | none | 无浮动 |
|  | left | 左浮动 |
|  | right | 右浮动 |
|  | inline-start | 容器开始一侧 |
|  | inline-end | 容器结束一侧 |
| clear | left | 清除左侧浮动 |
|  | right | 清除右侧浮动 |
|  | both | 清除两侧浮动 |

> 移除文档流

- 因浮动溢出容器之外时：

```javascript
::after {
	content: "";
	clear: both;
	display: block;
}
```

### 19 - 伪类

| 属性 | 描述 |
| --- | --- |
| :root | 匹配元素的根元素 html |
| :link | 匹配未访问的链接 |
| :visited | 匹配已访问的链接 |
| :active | 匹配激活的元素 (鼠标点下未松开时) |
| :any-link | 匹配所有 href 属性 |
| :checked | 匹配选中状态的 radio、checkbox、option |
| :disabled | 匹配任何被禁用的元素 |
| :enabled | 匹配任何启用的元素 |
| :focus | 匹配获得焦点的元素 tab 键 |
| :in-rang | 匹配在指定范围的 input 元素 |
| :out-of-child | 匹配在范围外的 input 元素 |
| :valid | 匹配内容验证正确的 input 元素 |
| :invalid | 匹配未通过验证的 input 元素 |
| :hover | 鼠标悬停 |
| :first-child | 匹配一组兄弟元素中的第一个元素 |
| :last-child | 匹配一组兄弟元素中的最后一个元素 |
| :nth-child(n) | 匹配一组兄弟元素中的第 n 个子元素 |
| :nth-last-child(n) | 匹配一组兄弟元素中倒序第 n 个子元素 |
| :first-of-type | 匹配一组兄弟元素中第一个此类型的元素 |
| :last-of-type | 匹配一组兄弟元素中最后一个此类型的元素 |
| :nth-of-type(n) | 匹配一组兄弟元素中第 n 个此类型的元素 |
| :nth-last-of-type(n) | 匹配一组兄弟元素中倒序第 n 个此类型的元素 |
| :only-child | 匹配没有任何兄弟元素的元素 |
| :only-of-type | 匹配没有其他元素类型的兄弟元素 |
| :lang(en) | 匹配特定语言 |
| :required | 匹配带 required 属性的元素 |
| :optional | 匹配不带 required 属性的元素 |
| :read-only | 匹配带 readonly 属性的元素 |
| :read-write | 匹配不带 readonly 属性的元素 |
| :empty | 匹配没有子元素的元素 |
| :fullscreen | 匹配处于全屏显示的元素 |
| :#news:target | 选择当前活动为 news 的元素 |
| :not() | 反选 |

### 20 - 伪元素

| 属性 | 描述 |
| --- | --- |
| ::first-line | 块级元素首行 |
| ::first-letter | 块级元素首字母 |
| ::before | 创建伪元素，作为选中元素的第一个子元素，默认为行内元素 |
| ::after | 创建伪元素，作为选中元素的最后一个子元素，默认行内元素 |
| > content | 为元素添加装饰内容 |
| ::selection | 用户选择部分 |

### 21 - 阴影

| 属性 | 值 | 描述 |
| --- | --- | --- |
| box-shadow | px px px px color | 元素阴影 |
|  | X轴 Y轴 模糊 扩散 颜色 |  |

### 22 - 2D/3D转换

| 属性 | 值 | 描述 |
| --- | --- | --- |
| transform | translate(px, px) | 在X轴，Y轴上移动 |
|  | translate3d(px, px, px) | 在X轴，Y轴，Z轴上移动 |
|  | translateX |  |
|  | translateY |  |
|  | translateZ |  |
|  | rotate(deg) | 旋转 |
|  | rotate3d(1, 1, 1, 45deg) |  |
|  | rotateX |  |
|  | rotateY |  |
|  | rotateZ |  |
|  | scale() | 缩放 |
|  | scale3d() |  |
|  | scaleX |  |
|  | scaleY |  |
|  | scaleZ |  |
|  | skew() | 倾斜 |
|  | matrix | 矩阵 |
| transform-origin | center、top left、50px 50px | 更改变形原点 |
| transform-style | flat、preserve-3d | 元素位于平面或3d空间 |
| perspective | px | 指定观察者与z轴的距离，产生透视效果 |
| perspective-origin | top、center、bottom、left、right、% | 指定观察者的位置 |
| translate | px | 单独声明平移变换 |

### 23 - 过渡

| 属性 | 值 | 描述 |
| --- | --- | --- |
| transition： | 属性，时间，函数 | 可以指定多项过渡时间 |
| > transition-property | all | 指定过渡属性名称 |
| > transition-duration | s | 过渡动画所需时间 |
| > transition-timing-function | ease、ease-in、ease-out、linear、step-start、step-end、steps | 变化函数速度曲线 |
| > transition-delay | s | 开始前的等待时间 |

### 24 - 动画

| 属性 | 值 | 描述 |
| --- | --- | --- |
| @keyframes name {} | from{} to {} | 定义动画帧 |
|  | 0%{} 25%{} 50%{} 100%{} |  |
| animation： |  | 指定一组或多组动画 |
| > animation-name | 动画名 | 绑定动画 |
| > animation-duration | s、ms | 动画周期 |
| > animation-delay | s、ms | 动画延迟时间 |
| > animation-iteration-count | number | 运行次数，infinite 无限次 |
| > animation-direction | reverse、alternate、alternate-reverse | 反向、交替执行、反向交替 |
| > animation-timing-function | ease、ease-in、ease-out、ease-in-out、linear、step-start、step-end | 动画速度曲线 |
| > animation-fill-mode | forwards、backwards、both | 动画填充模式 |
|  | 最后一个关键帧、首个关键帧、两个方向上扩展 |  |

### 25 - 多列

| 属性 | 值 | 描述 |
| --- | --- | --- |
| column-count | number | 列数 |
| column-gap | px | 列间隙 |
| column-rule： |  |  |
| > column-rule-style | solid | 列之间的样式规则 |
| > column-rule-width | px | 列之间规则的宽度 |
| > column-rule-color | rgba/hsla/hex | 列之间规则的颜色 |
| > column-width | px | 指定列的宽度 |
| > column-span | all | 指定跨多少列 |
| columns | 6rem auto | 列宽与列数 |

### 26 - 变量

| 属性 | 描述 |
| --- | --- |
| :root{ --变量名:变量值; } | 设置全局变量 |
| var( --变量名 ) | 使用变量 |

### 27 - 弹性布局

| 属性 | 值 | 描述 |
| --- | --- | --- |
| display | flex | 设置父元素容器 |
| flex-direction | row | 从左到右（主轴方向） |
|  | row-reverse | 从右到左 |
|  | column | 从上到下 |
|  | column-reverse | 从下到上 |
| flex-wrap | nowrap | 不换行（换行方式） |
|  | wrap | 自动换行 |
|  | warp-reverse | 相反顺序换行 |
| flex-flow | row warp | 设置容器方向与元素换行 |
| justify-content | start | 起始对齐（主轴方向对齐方式） |
|  | flex-start | 开头对齐 |
|  | flex-end | 末端对齐 |
|  | center | 居中对齐 |
|  | space-around | 分散对齐 |
|  | space-between | 两端对齐 |
|  | space-evenly | 均匀对齐 |
|  | stretch | 填充对齐 |
| align-items | start | 开头对齐（交叉轴方向对齐方式） |
|  | end | 末端对齐 |
|  | center | 居中对齐 |
|  | flex-start | 侧轴起点对齐 |
|  | flex-end | 侧轴终点对齐 |
|  | stretch | 拉伸填充 |
|  | baseline | 基线对齐 |
| align-content | start | 起始对齐（多主轴在交叉轴上的对齐方式） |
|  | end | 末端对齐 |
|  | center | 居中对齐 |
|  | flex-start | 垂直轴起点对齐 |
|  | flex-end | 垂直轴末尾对齐 |
|  | space-around | 分散对齐 |
|  | space-between | 两端对齐 |
|  | stretch | 拉伸填充 |
| align-self |  | 元素自身在交叉轴上的对齐方式 |
|  | start | 起始对齐 |
|  | end | 结束对齐 |
|  | stretch | 拉伸对齐 |
| flex： | 默认 `0 1 auto` |  |
| > flex-grow | number | 相对于其他项目的增长倍数<br />（在 flex 容器中分配剩余空间的相对比例） |
| > flex-shrink | number | 相对于其他项目的收缩倍数<br />（仅在默认宽度之和大于容器时） |
| > flex-basis | px | 元素在主轴方向上的初始大小 |
| order | number | 布局顺序 |
| row-gap | px | 行之间的间隔 |

### 28 - 网格布局

| 属性 | 值 | 描述 |
| --- | --- | --- |
| display | grid | 设置父元素容器 |
| grid-template： |  | 初始化网格行列 |
| > grid-template-rows | 200px 100px auto auto | 初始化网格行数及高度 |
| > grid-template-columns | 100px 200px auto auto | 初始化网格列数及宽度 |
| > grid-template-areas |  | 网格排列方式定义（矩阵） |
| grid-auto-rows | px | 隐式网格行高 |
|  | min-content |  |
|  | min-max() |  |
|  | auto |  |
| grid-auto-columns | px | 隐式网格列宽 |
|  | min-content |  |
|  | min-max() |  |
|  | auto |  |
| grid-auto-flow | row、column、row dense | 自动布局排列方式 |
| column-gap | px | 列间隙 |
| row-gap | px | 行间隙 |
| justify-content |  | 容器中水平对齐方式 |
| justify-items |  | 容器内轴对齐方式 |
| align-content |  | 容器中垂直对齐方式 |
| justify-self |  | 该元素到其格栅区域内联轴上 |
| align-self |  | 所选项目的对齐方式，覆盖align-items |
| grid-area： |  |  |
| grid-row： | 1/3 | 行项目始末位置 |
| > grid-row-start | 1 | 行项目起始位置 |
| > grid-row-end | 3 | 行项目结束位置 |
| grid-column： | 1/3 | 列项目始末位置 |
| > grid-column-start | 1 | 列项目起始位置 |
| > grid-column-end | 3 | 列项目结束位置 |

> 隐式：如果定位到某行中的网格元素没有使用 `grid-template-rows`、`grid-template-columns` 来指定大小，则会隐式创建 grid 轨道来保存它。

### 29 - 滚动条

| 属性 | 值 | 描述 |
| --- | --- | --- |
| scrollbar-color | track、thumb | 滚动条轨道和拇指颜色 |
| scroll-width | px | 设置滚动条宽度 |
| scroll-behavior | auto 立即滚动、smooth 平顺滚动 | 滚动行为 |
| scroll-margin / -top | px | 拖动外边距 |
| scroll-padding / -top | px | 拖动内边距 |

- 修改基于 webkit 的浏览器的滚动条样式

| 属性 | 描述 |
| --- | --- |
| ::-webkit-scrollbar | 整个滚动条颜色 |
| ::-webkit-scrollbar-button | 滚动条上下按钮 |
| ::-webkit-scrollbar-thumb | 滚动条滑块 |
| ::-webkit-scrollbar-track | 滚动条轨道 |
| ::-webkit-scrollbar-track-piece | 滚动条没有滑块的轨道部分 |
| ::-webkit-scrollbar-corner | 横竖滚动条交汇处 |
| ::-webkit-resizer | 底角可调节大小滑块 |

### 30 - 其他

| 属性 | 值 | 描述 |
| --- | --- | --- |
| cursor | help、wait、crosshair、not-allowed、zoom-in、grab | 鼠标指针样式 |
| shape-outside | circle()、ellipse() | 定义一个非矩形区域 |
| shape-margin | px | 非矩形区域的外边距 |
| all | initial、inherit、unset、revert | 重新设置为初始值 |
|  | 初始值、继承、前两者之间、还原 |  |
| object-fit | fill、contain、cover、none、scale-down | 裁切图像 |
|  | 填充会被拉伸、保持横纵比、调整大小保持横纵比、无、调整大小 |  |
| resize | auto、vertical、both、none | 用户界面 |
|  | 自动、允许高度、允许高度和宽度、禁用 |  |
| clip-path | circle(50%)、ellipse()、polygon()、path() | 裁剪可显示区域 |
| aspect-ratio | 1/1 | 规定期待的横纵比 |
| block-size | px | 元素区块的宽高 |
| calc() | width: calc(100% - 80px) | 执行一些计算 |
| clamp() | clamp(1rem, 2.5rem) | 设定上下限制 |
| caret-color |  | 光标颜色 |
| mask |  | 使用遮罩或裁切隐藏元素 |

### 31 - 精灵图

- 简介：

  精灵图（也称雪碧图）就是图片拼合技术，把多张图标小图合成一张大图，通过 CSS 中的 `background-position` 定位图标位置来显示对应图 (原点在图的左上角，X轴的右边是正值，左边是负值，Y轴同X轴)，优势是减少图的请求次数。

## （二）Less

- Node 环境中使用：
  - 安装：`npm install -g less`
  - 编译：`lessc style.less style.css`
- 浏览器环境中使用：
  - `<link rel="stylesheet/less" type="text/css" href="styles.less" />`
  - `<script src="https://cdn.jsdelivr.net/npm/less@4" ></script>`

```less
📂 .less

/* 01 - 导入 */
@import "style";  // style.less
@import "style.css";

/* 02 - 变量 */
@width: 100px;
@height: @width + 10px;

/* 03 - 混合 */
.border {
  border-top: @width;
}

#menu {
  color: red;
  .border;
}

/* 04 - 嵌套 */
#header {
  color: red;
  .logo {
    height: @height;
    .title {
      width: @width;
    }
  }
  &:hover {
    color: green;
  }
  @media (min-width: 768px) {
    color: blue;
    @media (max-width: 1280px) {
      color: black;
    }
  }
}

/* 05 - 运算 + - * / calc() */

/* 06 - 函数：https://lesscss.org/functions/ */

/* 07 - 命名空间与访问符 */
#header() {
  .button {
    width: @width;
  }
  .title {
    ...
  }
}

#main {
  color: black;
  #header.button();
}

/* 08 - 映射 */
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

## （三）Sass

- Node 环境中使用：
  - 安装：`npm install -g sass`
  - 编译：`sass input.scss output.css`

```scss
📂 .scss

/* 01 - 导入 */
@import "style";  // style.scss

/* 02 - 变量 */
$nav-color: #fff;

#nav {
  $width: 100px;
  border: $width solid $nav-color;
}

/* 03 - 嵌套 */
#content {
  .article {
    h1 { color: #333; }
    p { font-size: 20px; }
  }
  $:hover {
    color: red;
  }
  > section { ... }
  + section { ... }
  ~ section { ... }
}

/* 04 - 混合器 */
@mixin main-border {
  border: 1px solid #fff;
  border-radius: 10px;
}

#main {
  color: red;
  @include main-border;
}

/* 05 - 混合器传参 */
@mixin link-color($normal, $hover, $visited) {
  color: $normal;
  $:hover { color: $hover; }
  $:visited { color: $visited; }
}

a {
  @include link-color(blue, red, green);
}

/* 06 - 继承 */
.error {
  border: 1px solid red;
  background-color: #fff;
}

.seriousError {
  @extend .error;
  border-width: 3px;
}
```

## （四）Stylus

[官方文档](https://stylus-lang.com/docs/executable.html)

## （五）PostCSS

[官方文档](https://postcss.org/docs/)

## （六）Bootstrap

[V5文档](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

[V4文档](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

[V3文档](https://getbootstrap.com/docs/3.4/)

## （七）TailwindCSS

[官方文档](https://tailwindcss.com/docs/installation)

<style>
table {
  display: table;
  width: 100%;
}
</style>
