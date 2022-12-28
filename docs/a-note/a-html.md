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

## （一）标签语法

### 01 - 根

| 元素 | 描述 |
| --- | --- |
| html | 根元素 (顶级元素)，所有元素为其后代 |
| `lang="zh-CN"` | 默认语言 |
| > head | 头部配置元素 |
| > body | 文档主体元素 |

### 02 - 头部

| 元素 | 描述 |
| --- | --- |
| base | 所有相对 URL 的根 URL |
| `href="..."` | 相对地址的 URL |
| `target` : | 新页面的打开方式 |
| `target="_self"` | 在当前页面打开 |
| `target="_blank"` | 在新页面打开 |
| `target="_parent"` | 在内联框架下在父级页面打开 |
| `target="_top"` | 在顶级页面中打开 |
| meta | 文档级元数据 |
| `charset="UTF-8"` | 编码格式 |
| `http-equiv"` : | 编译指示指令 |
| `http-equiv="X-UA-Compatible" content="IE=edge"` | 兼容性模式设置 |
| `http-equiv="refresh" content="3; url='...'"` | 重定向用户 |
| `name` : | 元数据的名称 |
| `name="viewport"` | 设备初始大小提供指示 |
| `name="author"` | 作者信息 |
| `name="description"` | 文档描述 |
| `name="generator"` | 软件标识符 |
| `name="keywords"` | 文档关键词 |
| `name="referrer"` | HTTP Referer 请求头 |
| `name="theme-color"` | 页面建议颜色 |
| `content="..."` | http-equiv/name 属性的值 |
| link | 外部资源链接 |
| `rel` : | 链接资源与当前文档的关系 |
| `rel="stylesheet"` | 样式表关系 |
| `rel="icon"` | 图标关系 |
| `type` : | 链接资源的类型 |
| `type="text/css"` | 样式表类型 |
| `type="image/png"` | 图片类型 |
| `href="..."` | 链接资源的 URL |
| `media="screen and (max-width: 666px)"` | 媒体类型或条件，满足时加载 |
| `sizes="36x36"` | 图标大小 |
| title | 文档标题 |
| style | 样式表 |
| script | 脚本 |

### 03 - 标题

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
| `border="..."` | 表格边框 |
| > caption | 表格标题 |
| > tr | 定义表格的行 |
| > th | 定义表头单元格 |
| > td | 定义单元格 |
| > thead | 一组表格的表头 |
| > tbody | 一组表格的单元格 |
| > tfoot | 一组表格的表尾 |

### 06 - 列表

| 元素 | 描述 |
| --- | --- |
| ul | 无序列表 |
| `type="disc"` | 实心圆 |
| `type="circle"` | 空心圆 |
| `type="square"` | 正方形 |
| ol | 有序列表 |
| `type="A"` | 大写字母 |
| `type="a"` | 小写字母 |
| `type="Ⅰ"` | 罗马字符 |
| `type="1"` | 数值 |
| `start="..."` | 起始数值 |
| `reversed="true"` | 倒序 |
| > li | 列表里的条目 |
| dl | 自定义列表 |
| > dt | 声明一个术语 |
| > dd | 描述术语的子元素与dt搭配 |
| menu | 一组用户可执行或激活的命令 |

> 可嵌套使用

### 07 - 链接

| 元素 | 描述 |
| --- | --- |
| a | 超链接 |
| `href` : | 跳转链接 |
| `href="..."` | URL 或 本地 |
| `href="mailto: ..."` | 电子邮件 |
| `href="tel: ..."` | 电话 |
| `target="..."` | 新页面打开方式 |

### 08 - 图像

| 元素 | 描述 |
| --- | --- |
| img | 图像 |
| `src="..."` | 图像路径 |
| `alt="..."` | 替代文本 |
| `title="..."` | 图像描述 |
| `width="..."` | 图像宽度 |
| `height="..."` | 图像高度 |
| `loading="eager、lazy"` | 立即加载、延迟加载 |
| map > area | 图片中定义一个热点区域 |
| `coords="..."` | 热点区域的具体坐标值 |
| `shape="..."` | 热点的形状 |
| `href="..."` | 关联的资源 |
| `target="..."` | 显示资源的方式 |

### 09 - 格式化

| 元素 | 描述 |
| --- | --- |
| q | 短引用 |
| blockquote | 长引用 |
| abbr | 缩略词 |
| `title="..."` | 提供完整的描述 |
| cite | 作品的引用 |
| bdi | 双向隔离 |
| bdo | 双向重写 |
| `dir="rtl"` | 从右向左 |
| `dir="ltr"` | 从左向右 |
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
| code | 代码 |
| kbd | 键盘码 |
| samp | 输出示例 |
| pre | 预文本 |
| var | 数学变量 |
| address | 联系信息 |
| dfn | 定义术语 |
| mark | 标记引用 |

### 10 - 表单

| 元素 | 描述 |
| --- | --- |
| form |  |
| > input : | 各类型表单 |
| `type="text"` | 文本输入 |
| `type="password"` | 密码输入 |
| `type="radio"` | 单选按钮 |
| `type="checkbox"` | 复选按钮 |
| `type="button"` | 按钮 |
| `type="submit"` | 提交按钮 |
| `type="image"` | 带图像的提交按钮 |
| `type="date"` | 日期 |
| `type="time"` | 时间 |
| `type="datetime-local"` | 时间（有时区） |
| `type="color"` | 颜色 |
| `type="email"` | 邮件 |
| `type="search"` | 搜索 |
| `type="url"` | URL |
| `type="file"` | 文件 |
| `type="number" min="..." max="..."` | 数值 |
| `type="range" min="..." max="..." step="..."` | 范围 |
| `list="hello"` | 选项列表 |
| > datalist `id="hello"` > option `value="数据"` | 列表对应的选项 |
| > button | 按钮 |
| > textarea `rows="..." cols="..."` | 文本域 |
| > select > option `value="数据"` | 下拉列表 |
| > select > optgroup `label="分组名"` > option `value="数据"` | 下拉分组 |
| > label `for="input的id"` | 获取焦点 |
| > fieldest > legend > ... | 组合表单数据 |
| > output | 表示计算或用户操作的结果 |
| > progress `max="..." value="..."` | 进度条 |

**form 属性：**

- `action`：处理表单提交的 URL
- `method`：请求方法，`GET` `POST` 等。
- `name`：唯一名称。
- `target`：表单提交跳转方式。
- `autocomplete`：默认值自动补全。
- `novalidata`：提交时不需要验证表单。
- `accept-charset`：字符编码。

**input 属性：**

- `name`：唯一名称，键值对的键。
- `value`：表单控件的值，键值对的值。
- `required`：必填项。
- `checked`：控制控件是否被选中。
- `selected`：默认选中。
- `accept`：上传控件中期望的文件类型。
- `autocomplete`：表单自动填充功能。
- `autofocus`：自动获取焦点。
- `disabled`：表单控件是否被禁用。
- `pattern`：匹配有效的 `value` 的模式。
- `placeholder`：当表单控件为空时，控件中显示的内容。
- `readonly`：只读不可编辑。

**button属性：**

- `name`：唯一名称。
- `disabled`：布尔属性，不准交互。
- `type`：`submit` 数据提交、`reset` 重置、`menu` 打开一个 `menu` 定义的弹出菜单。
- `value`：初始值。

### 11 - 多媒体

| 元素 | 描述 |
| --- | --- |
| object | 插件 |
| `data="..."` | 资源地址 |
| `type="..."` | 资源类型 |
| `width="..."` | 资源宽度 |
| `height="..."` | 资源高度 |
| embed | 内嵌对象 |
| `src="..."` | 资源地址 |
| `type="..."` | 资源类型 |
| `width="..."` | 资源宽度 |
| `height="..."` | 资源高度 |
| audio > source | 音频 |
| `src="..."` | 音频地址 |
| `type="audio/mpeg"` | 音频类型 |
| `loop="true"` | 循环播放 |
| `autoplay="true"` | 自动播放 |
| `controls` | 浏览器提供一个控制面板 |
| video > source | 视频 |
| `src="..."` | 视频地址 |
| `type="video/mp4"` | 视频类型 |
| `loop="true"` | 循环播放 |
| `autoplay="true"` | 自动播放 |
| `muted="true"` | 开启静音 |
| `playsinline` | 内联播放 |
| `autopictureinpicture` | 切换到画中画模式 |
| `poster="..."` | 海报帧图片 URL |
| `controls` | 浏览器提供一个控制面板 |
| > track | 字幕 |
| picture > source / img | 为不同的设备提供图像 |

### 12 - 容器

| 元素 | 描述 |
| --- | --- |
| div | 块级容器 |
| span | 内联容器 |

### 13 - 框架

| 元素 | 描述 |
| --- | --- |
| frameset >  | 框架集不可与 body 同用 |
| `cols="..."` | 垂直占比 |
| `rows="..."` | 水平占比 |
| > frame `src="..."` | 要展示的页面 |
| noframes > body | 不支持框架集 |
| iframe `src="..."` | 内联框架 |

> `target="showframe"` 用于在框架集中打开链接，也可以用过锚点跳转到网页的具体位置。

### 14 - 注释

| 名称 | 描述 |
| --- | --- |
| 常规注释 | `<!-- 注释 -->` |
| 条件注释 | `<!-- [if IE]> 仅在IE中可见 <![endif]-->` |

### 15 - 路径

| 名称 | 描述 |
| --- | --- |
| 绝对路径 | 指向本地文件或者网络文件的完整 URL |
| 相对路径 | 相对于当前页面的文件（./open 代表根目录下、open 代表当前目录下、../open 代表上一级目录下） |

> URL：统一资源定位器，语法规则：`scheme://host.damain:port/path/filename`

### 16 - 外部

| 名称 | 描述 |
| --- | --- |
| CSS: 内联样式 | `<div style="..."></div>` |
| CSS: 内部样式 | `<style>...</style>` |
| CSS: 外部样式 | `<link rel="stylesheet" href="..." />` |
| JS: 内部脚本 | `<script>...</script>` |
| JS: 外部脚本 | `<script src="..."></script>` |
| JS: 禁用脚本替代 | `<noscript>...</noscript>` |

### 17 - 其他

::: tip 区分 href 与 src
`href`：标识超文本引用，用在`link`、`a`等元素上，是引用和页面关联，在当前元素和引用资源之间建立联系。<br />
`src`：标识资源引用，用在`script`、`img`、`iframe`等元素上，表示替换当前元素。
:::

## （二）语义化

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

<style>
table {
  display: table;
  width: 100%;
}
</style>
