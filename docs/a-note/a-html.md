---
title: HTML
description: HTML
editLink: false
lastUpdated: false
contributors: false
prev:
  text: Web3
  link: /a-note/o-web3.md
next:
  text: CSS
  link: /a-note/b-css.md
---

> HTML (Hyper Text Markup Language) 称为超文本标记语言，是一种描述 Web 文档结构和语义的语言，由元素组成，每个元素拥有一些属性。

## 壹 - 标签语法

### 01 - 根

| 元素 | 描述 |
| --- | --- |
| html | 根元素或称顶级元素，所有元素为其后代 |
| body | 表示文档的内容 |

### 02 - 头部

| 元素 | 描述 |
| --- | --- |
| head | 规定文档的配置信息 |
| base | 指定根URL |
|  | 默认链接与打开方式 |
| link | 外部资源链接 |
|  | rel 表示关系 |
|  | 网站图标 |
| meta | 文档级元数据 |
|  | 编码格式 |
|  | 宽度与缩放 |
|  | 作者信息 |
|  | 文档描述 |
|  | 文档关键词 |
|  | 兼容设置 |
|  | 重定向用户 |
| title | 文档标题 |
| style | 样式表 |
| script | 脚本 |

**target 属性：**

- _self：在当前页面打开
- _blank：在新页面打开
- _parent：在内联框架下在父级页面打开，没有则为 self
- _top：在顶级页面中打开，没有则为 self

**link 属性：**

- media="screen and (max-width: 600px)"：提供媒体类型或条件，满足时加载
- type="image/png"：链接资源的类型
- sizes="114x114"：图标大小
- rel="preload"：预加载该资源
- as：设置了上一条，本条指定加载的内容类型

### 03- 标题

| 元素 | 描述 |
| --- | --- |
| h1 | 一级标题 |
| h2 | 二级标题 |
| h3 | 三级标题 |
| h4 | 四级标题 |
| h5 | 五级标题 |
| h6 | 六级标题 |
| hr / | 水平线 |

### 04 - 段落

| 元素 | 描述 |
| --- | --- |
| p | 段落 |
| br / | 换行 |

### 05 - 表格

| 元素 | 描述 |
| --- | --- |
| table | 表格 |
| caption | 表格标题 |
| tr | 定义表格的行 |
| th | 定义表头单元格 |
| td | 定义单元格 |
| thead | 一组表格的表头 |
| tbody | 一组表格的单元格 |

### 06 - 列表

| 元素 | 描述 |
| --- | --- |
| ul | 无序列表 |
| ol | 有序列表 |
| li | 表示列表里的条目 |
| dl | 自定义列表 |
| dt | 声明一个术语 |
| dd | 作为描述术语的子元素与dt搭配 |
| menu | 定义一组用户可执行或激活的命令 |
| 可嵌套使用 |  |

**ul 属性：**

- type：circle 圆、square 方形、disc 光盘

**ol 属性：**

- type：大小写字母、大小写罗马编号、数值
- start：定义起始序号，数值
- reversed：布尔属性，倒序排列

### 07 - 链接

| 元素 | 描述 |
| --- | --- |
| a | 超链接 |
| href="mailto: ......" | 电子邮件 |
| href="tel: ......" | 电话 |

**a 属性：**

- href：跳转地址
- target：如何打开新页面

### 08 - 图像

| 元素 | 描述 |
| --- | --- |
| img | 图像 |
| map -> area | 图片中定义一个热点区域 |

**img 属性：**

- src：图片路径
- alt：替代文本
- title：描述
- width：图像宽度
- height：图像高度
- loading：eager 立即加载、lazy 延迟加载

**area 属性：**

- coords：热点区域的具体坐标值
- shape：热点的形状
- href：关联的资源
- target：显示资源的方式

### 09 - 格式化

| 元素 | 描述 |
| --- | --- |
| q | 短引用 |
| blockquote | 长引用 |
| abbr | 缩略词 |
| cite | 作品的引用 |
| bdi | 双向隔离 |
| bdo | 双向重写 |
| b | 粗体 |
| big | 大号 |
| small | 小号 |
| em | 着重 |
| strong | 加重 |
| i | 斜体 |
| sub | 下标 |
| sup | 上标 |
| ins | 插入 |
| del | 删除 |
| code | 代码（支持固定字母尺寸与间距） |
| kbd | 键盘码（支持固定字母尺寸与间距） |
| samp | 输出示例（支持固定字母尺寸与间距） |
| pre | 预文本 |
| var | 数学变量 |
| address | 联系信息 |
| dfn | 定义术语 |
| mark | 标记引用 |

**abbr 属性：**

- title：提供完整的描述

**bdo 属性**

- dir：rtl 从右向左、ltr 从左向右

### 10 - 块与内联

| 元素 | 描述 |
| --- | --- |
| div | 块级容器元素 |
| span | 内联容器元素 |

### 11 - 类与ID

| 名称 | 描述 |
| --- | --- |
| .class | 不唯一 |
| #id | 唯一 |

### 12 - 样式与脚本

| 名称 | 描述 |
| --- | --- |
| 内联样式 CSS | `<div style="width:100px;"></div>` |
| 内部样式 CSS | `<style>.name { width: 100px; }</style>` |
| 外部样式 CSS | `<link rel="stylesheet" href="..." />` |
| 内部脚本 | `<script>...</script>` |
| 外部脚本 | `<script src="..."></script>` |
| 禁用脚本替代 | `<noscript>...</noscript>` |

**区分：**

- href：标识超文本引用，用在link、a等元素上，是引用和页面关联，在当前元素和引用资源之间建立联系
- src：标识资源引用，用在script、img、iframe等元素上，表示替换当前元素

### 13 - 注释

| 名称 | 描述 |
| --- | --- |
| 常规注释 | `<!-- 注释 -->` |
| 条件注释 | `<!-- [if IE]> 仅在IE中可见 <![endif]-->` |

### 14 - 路径

| 名称 | 描述 |
| --- | --- |
| 绝对路径 | 指向本地文件或者网络文件的完整URL |
| 相对路径 | 相对于当前页面的文件（./open 代表根目录下、open 代表当前目录下、../open 代表上一级目录下） |

**备注：**

- URL：统一资源定位器，语法规则：scheme://host.damain:port/path/filename

### 15 - 框架

| 元素 | 描述 |
| --- | --- |
| frameset -> frame src="" | 框架集不可与body同用，cols垂直设置，rows水平设置，可混合使用 |
| noframes -> body | 不支持框架集 |
| iframe | 内联框架 |

**备注：**

- target="showframe" 用于在框架集中打开链接，也可以用过锚点跳转到网页的具体位置

### 16 - 多媒体

| 元素 | 描述 |
| --- | --- |
| object | 插件 |
| embed | 内嵌对象 |
| audio -> source type="audio/mpeg" | 音频 |
| video -> source type="video/mp4" | 视频 |
| track | 字幕 |
| picture -> source / img | 为不同的设备提供图像 |

**object 属性：**

- width：资源宽度
- height：资源高度
- type：指定资源的类型
- src：和data至少设置一个
- data：URL作为资源地址

**embed 属性：**

- width：资源宽度
- height：资源高度
- type：选择插件实例化类型
- src：被嵌套资源URL

**audio 属性：**

- controls：浏览器提供一个控制面板
- autoplay：布尔属性，尽早自动播放
- loop：布尔属性，循环播放
- src：嵌入音频URL

**video 属性：**

- controls：浏览器提供一个控制面板
- autoplay：布尔属性，尽早自动播放
- autopictureinpicture：切换到画中画模式
- loop：布尔属性，循环播放
- muted：布尔属性，开启静音
- playsinline：内联播放
- poster：海报帧图片URL
- src：嵌入视频URL

### 17 - 表单

| 元素 | 描述 |
| --- | --- |
| form |  |
| input： |  |
| type="text" | 文本输入 |
| type="password" | 密码输入 |
| type="button" | 按钮 |
| type="radio" | 单选按钮 |
| type="checkbox" | 复选按钮 |
| type="submit" | 提交按钮 |
| type="image" | 带图像的提交按钮 |
| type="number" min="" max="" | 数值 |
| type="range" min="" max="" step="" | 范围 |
| type="date" | 日期 |
| type="time" | 时间 |
| type="datetime-local" | 时间（有时区） |
| type="color" | 颜色 |
| type="email" | 邮件 |
| type="search" | 搜索 |
| type="url" | URL |
| type="file" | 文件 |
| list="id" -> datalist -> option value="" | 预定义选项列表 |
| button | 按钮 |
| select -> option value="" | 下拉列表 |
| optgroup | select元素的选项创建分组 |
| textarea rows="" cols="" | 文本域 |
| label for="name" | 获取焦点 |
| fieldest -> legend 标题 | 组合表单数据 |
| output | 表示计算或用户操作的结果 |
| progress max="" value="" | 进度条 |

**form 属性：**

- action：处理表单提交的URL
- method：post 表单数据会被包含在表单体内然后发送给服务器、get 表单数据会附加在action属性的URL中
- name：需要独一无二
- target：表单提交后在哪里显示信息
- accept-charset：字符编码
- autocomplete：默认值自动补全
- novalidata：提交时不需要验证表单

**input 属性：**

- name：以名字/值的对提交表单
- value：表单控件的值
- required：必填项
- checked：控制控件是否被选中
- selected：默认选中
- accept：上传控件中期望的文件类型
- autocomplete：表单自动填充功能
- autofocus：自动获取焦点
- disabled：表单控件是否被禁用
- pattern：匹配有效的value的模式
- placeholder：当表单控件为空时，控件中显示的内容
- readonly：只读不可编辑

**button属性：**

- disabled：布尔属性，不准交互
- name：button的名称，与表单数据一起提交
- type：submit 数据提交、reset 重置、menu 打开一个menu定义的弹出菜单
- value：初始值

## 贰 - 语义化

| 元素 | 描述 |
| --- | --- |
| header | 定义页眉 |
| nav | 定义导航链接 |
| section | 定义独立的一节 |
| article | 定义独立的内容项目 |
| aside | 定义独立于内容的一部分 |
| details | 定义用户可以查看或隐藏的额外细节 |
| summary | 定义details元素的可见标题 |
| figure | 自包含内容，例如：图示、图表、照片、代码 |
| figcaption | 定义figure元素的标题 |
| main | 定主要内容，浏览器的阅读模式会找寻这一部分 |
| mark | 定义重要或强调文本 |
| time | 定义日期/时间 |
| footer | 定义页脚 |

## 叁 - SEO

待更新...

<style>
table {
  display: table !important;
  width: 100% !important;
}
</style>
