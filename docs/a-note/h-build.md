---
title: BuildTools
description: BuildTools
editLink: false
lastUpdated: false
contributors: false
prev:
  text: React.js
  link: /a-note/g-react.md
next:
  text: UniApp
  link: /a-note/i-uniapp.md
---

## 一、Babel

> JS 编译器，用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法：

- 语法转换；
- 通过 Polyfill 方式在目标环境中添加缺失的特性；
- 源码转换 `codemods`；
- 转换 React 中的 JSX 语法；

### 01 - 安装

- `npm install --save-dev @babel/core @babel/cli @babel/preset-env`

### 02 - 配置：babel.config.json

```json
{
  // 预设
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage", // 只包含所需要的 polyfill
        "corejs": "3.6.5"
      }
    ]
  ],
  // 插件
  "plugins": [
  ]
}
```

### 03 - 编译

- `npx babel src --out-dir lib`

### 04 - 预设 Presets 和插件 Plugins

- `npm install --save-dev @babel/plugin-transform-arrow-functions` 转换为ES5的官方插件
- `npm install --save-dev @babel/preset-env` 预设，启用一组插件

**官方提供的预设：**

- `@babel/preset-env for compiling ES2015+ syntax`
- `@babel/preset-typescript for TypeScript`
- `@babel/preset-react for React`
- `@babel/preset-flow for Flow`

### 05 - Polyfill

```javascript
// 建议使用：
import "core-js/stable";
```

## 二、Browserify

> JS 编译打包工具，使浏览器可以支持 CommodJS 模块化规范。

### 01 - 安装

- `npm install -g browserify`

### 02 - 编译

- `browserify main.js -o bundle.js`

## 三、Grunt

> 自动化构建工具，支持大量插件。

### 01 - 安装

- `npm install -g grunt-cli`
- `npm install grunt --save-dev`

### 02 - 配置 Gruntfile.js

- "wrapper" 函数
- 项目与任务配置
- 加载 grunt 插件和任务
- 自定义任务

```javascript
// 举例：
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);
};
```

### 03 - 选择插件

## 四、Gulp

> 自动化构建工具，支持大量插件。

### 01 - 安装

- `npm install --g gulp-cli`
- `npm install --save-dev gulp`

### 02 - 配置 gulpfile.js

```javascript
// 举例：
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

exports.default = function() {
  return src('src/*.js')
    // gulp-uglify 插件并不改变文件名
    .pipe(uglify())
    // 因此使用 gulp-rename 插件修改文件的扩展名
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('output/'));
}
```

### 03 - 选择插件

## 五、Parcel

> Web 应用打包工具，零配置，内置服务支持热更新

### 01 - 安装

- `npm install parcel-bundler --save-dev`

### 02 - 热更新的服务

- 设置一个入口文件：`parcel index.html`

### 03 - 打包到生产模式

- `parcel build index.js`

## 六、Rollup

> JS模块打包器，可以将小块代码编译成大块复杂代码，使用 ES6 模块规范

### 01 - 安装

- `npm install --save-dev rollup`

### 02 - 打包

```javascript
# UMD format requires a bundle name
$ rollup main.js --file bundle.js --format umd --name "myBundle"
```

### 03 - 配置文件 roullup.config.js

## 七、Webpack

> JS应用程序静态模块打包器，可以不引入配置文件，但 webpack 仍然是高度可配置的，有一个或多个文件作为打包入口，输出的文件叫做 bundle

### 01 - 安装

- `npm install webpack-cli webpack --save-dev`

### 02 - 打包：

- development 开发环境
- production 生产环境

- 默认打包至 dist 目录下：`npx webpack ./src/main --mode=development`

### 03 - 配置

- 入口 entry
- 输出 output
- 加载器 loader
- 插件 plugins
- 模式 mode 开发、生产

```javascript
const path = require('path')

module.exports = {
  // 入口
  entry: './src/main.js', // 使用相对路径
  // 输出
  output: {
    // 输出的路径
    path: path.resolve(__dirname, 'dist'), // 使用绝对路径
    // 入口文件输出的文件名和位置
    filename: 'build.js',
  },
  // 加载器
  module: {
    rules: [
      // loader 的配置
    ],
  },
  // 插件
  plugins: [
    // plugin 的配置
  ],
  // 模式
  mode: 'development',
}
```
