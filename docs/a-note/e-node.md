---
title: Node.js
description: Node.js
editLink: false
lastUpdated: false
contributors: false
prev:
  text: TypeScript.js
  link: /a-note/d-typescript.md
next:
  text: Vue.js
  link: /a-note/f-vue.md
---

## 一、Node

### 01 - nvm 的使用

- 列出所有的可用版本，已安装的和可安装的： `nvm ls`、`nvm ls available`

- 安装 nodejs： `nvm install 版本号`

- 切换版本： `nvm use 版本号`

### 02 - fs 文件系统模块

- 作用：用来操作文件。

| 方法 | 描述 |
| --- | --- |
| fs.readFile(path[, options], callback); | 读取指定文件的内容，回调函数接收失败和成功的参数 |
| fs.writeFile(file, data[, option], callback); | 给指定的文件写入内容 |

- `fs.writeFile()` 方法只能创建文件，不能创建路径。

```javascript
const fs = require("fs");

fs.readFile("./text.txt", "utf-8", function (err, dataStr) {
  // 读取成功时 err 的值为 null
  // 读取失败时 err 的值为错误对象
  console.log(err);
  console.log("----------");
  // 读取成功时 dataStr 的值为文件的内容
  // 读取失败时 dataStr 的值为 undefined
  console.log(dataStr);
});
```

```javascript
const fs = require("fs");
const txt = "会当临绝顶，一览众山小";

fs.writeFile("./writeText.txt", txt, "utf-8", function (err) {
  console.log(err);
});
```

**路径拼接问题：**

- 默认情况下会在命令执行的目录下拼接代码中的相对路径，可能会出现拼接错误，解决方法可以使用完整的绝对路径，但是不利于移植，不利于维护。在 nodejs 中 `__dirname` 表示当前文件所处的目录，可以解决路径拼接可能出现的错误，利于维护和移植。

### 03 - path 路径模块

- 作用：路径处理的需求。

| 方法 | 描述 |
| --- | --- |
| path.join([...paths]) | 将多个路径片段拼接成一个完整的路径字符串，返回值为拼接好的字符串 |
| path.basename(path[, ext]) | 获取文件的最后一部分，用作从路径字符串中将文件名解析出来 |
| path.extname() | 获取路径中扩展名部分 |

-  `../` 将会抵消一层路径。

-  文件路径的书写使用 `join` 而不建议 `+` 拼接。

### 04 - http 模块

| 方法 | 描述 |
| --- | --- |
| http.createServer() | 创建一个web服务器实例 |
| server.on('request', (req, res) => {}) | 监听客户端发来的网络请求 |
| req.url | 客户端请求的URL地址 |
| req.method | 客户端的 method 请求类型 |
| res.end | 向客户端发送指定的内容，并结束这次请求处理的过程 |
| server.listen(端口号， 回调) | 启动web服务 |

- `req` 是请求对象，包含了与客户端相关的数据和属性。
- `res` 是响应对象，包含了与服务器相关的数据和属性。
- 解决 `res` 中文乱码，设置响应头 `res.setHeader('Content-Type', 'text/html; charset=utf-8')`

```javascript
const http = require("http");

const server = http.createServer();

server.on("request", function (req, res) {
  console.log("欢迎访问服务");
});

server.listen(8080, function () {
  console.log("服务器地址：http:127.0.0.1:8080");
});
```

- 根据不同的 URL 响应不同的 html 内容。

### 05 - 模块化

-  遵守固定的规则，把一个大文件拆分成独立并且相互依赖的多个小模块。
-  Node 中的3类模块：内置模块、自定义模块、第三方模块。
-  加载模块：使用 `require()` 方法。
-  模块存在模块作用域。
-  向外共享模块作用域中的成员，`module` 对象。使用 `module.exports` 对象将模块成员共享出去供外界使用，外界使用 `require()` 方法导入自定义模块时得到的就是 `module.exports` 所指向的对象。
-  `exports` 和 `module.exports` 指向同一个对象，最终共享的结果以 `module.exports` 指向的对象为准。
-  CommonJS 模块化规范，规定了模块的特性和各模块之间如何相互依赖：① 每个模块内部 `module` 变量代表当前模块；② `module` 变量是一个对象，其中的 `exports` 属性是对外的接口，该属性是一个对象；③ 加载某个模块就是加载该模块的 `module.exports` 属性，`require()` 方法用于加载模块。

### 06 - 包与npm

-  第三方模块又叫做包。
-  npm (Node Package Manager)，包管理工具。
-  包分为项目包和全局包，项目包又分为开发依赖包和核心依赖包。
-  安装包的命令 `npm install 包名`，可以简写为 `npm i 包名`。
-  指定版本号安装 `npm i 包名@版本号` 大版本.功能版本.Bug修复版本。
-  `npm init -y` 在所处的目录快速创建 package.json 包管理的配置文件。
-  `npm install` 一次安装项目中依赖的包。
-  `npm uninstall 包名` 卸载指定的包。
-  仅在开发阶段需要使用，线上不再依赖的包使用 `npm install --save--dev 包名`，可以简写为 `npm i -D 包名`。
-  `npm install -g 包名`，将会在本地的电脑全局安装。
-  查看当前的下载源 `npm config get registry`。
-  切换淘宝镜像 `npm config set registry=https://registry.npmmirror.com`。
-  华为源 `https://repo.huaweicloud.com/repository/npm/`。
-  nrm 工具，快速切换镜像源。
-  查看所有可用的镜像源 `nrm ls`。
-  将镜像源切换为xxx `nrm use xxx`。
-  `npm login`，登录服务器。
-  `npm publish`，将包发布到 npm。
-  `npm unpublish --force 包名`，删除发布的包。
-  模块会优先从缓存中加载，模块在第一次加载后会被缓存。
-  内置模块得加载优先级是最高的。
-  加载自定义模块的时候需要添加 `./` 或 `../` 否则会被当做内置模块或者第三方模块。

## 二、Express

### 01 - 使用

```javascript
// 创建基本的 web 服务器
const express = require("express");

const app = express();

app.listen(80, () => {
  console.log("express server running at 127.0.0.1");
});
```

| 方法 | 描述 |
| --- | --- |
| app.get('请求URL'， function(req, res) {}) | 监听客户端的get请求 |
| app.post('请求URL'， function(req, res) {}) | 监听客户端的post请求 |
| res.send() | 将处理好的内容发送给客户端 |
| req.query | 对象，可以访问客户端通过字符串得形式发送的数据 |
| req.query.name、 req.query.age |  |
| req.params | 对象，可以访问到URL中通过 ：匹配到的动态参数，可以匹配多个动态参数 |
| req.body | 接收客户端发送过来的请求数据，需要配置解析表单的中间件 express.json |
| app.use() | 注册全局中间件 |
| app.use(express.static('目录')) | 创建一个静态资源服务器，存放静态资源的文件名不会出现在URL中 |

- 托管多个静态资源，即多次调用 `express.static()`，根据顺序查找需要的文件
- 挂载路径前缀，访问时就需要使用挂载的前缀，`app.use('/前缀', express.static('/路径'))`
- `nodemon` 监听代码修改，自动重启项目。使用 `nodemon app.js`

### 02 - 路由

-  广义上，路由就是映射关系。
-  Express 中的路由指的是客户端的请求与服务器处理函数之间的映射关系。
-  路由分为三部分，客户端请求的类型、客户端请求的 URL 地址、服务器端的处理函数，`app.METHOD(PATH, HANDLER)`
-  路由匹配按照定义的先后顺序进行匹配，请求类型和请求的 URL 同时匹配成功，才会调用对应的处理函数。
-  模块化路由，不建议将路由挂载到 app 上，而是推荐将理由抽离为单独的模块。

```javascript
const express = require("express");
const router = express.Router();

router.get("/user/list", (req, res) => {
  console.log("Get user list");
});

router.post("/user/add", (req, res) => {
  console.log("Add new user");
});

module.exports = router;
```

- 为路由模块添加前缀 `app.use('/api', router);`

### 03 - 中间件

- 中间件（Middleware）,特指业务流程中的中间处理环节。对请求进行预处理。
- Express 中间件本质上是一个 function 处理函数。中间件函数的形参列表中，必须包含 `next` 函数，而路由处理函数只包含 `req` 和 `res`
- `next` 函数是实现多个中间件连续调用的关键，表示把流转关系转交给下一个中间件或路由。
- 定义中间件函数

```javascript
const express = require("express");
const app = express();

// 创建最基础的中间件函数
const mv = function (req, res, next) {
  console.log("定义了一个最简单的中间件函数");

  // 把流转关系转交给下一个中间件或路由
  next();
};

// 将 mv 注册为全局中间件
app.use(mv);

app.get('/', (req, res) => {
  res.send('Home page.');
});

app.post('/', (req, res) => {
  res.send('User page.');
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
```

- 全局中间件：客户端发起的任何请求，到达服务器之后都会触发的中间件，`app.use()`
- 中间件的作用：多个中间件之间共享一份 `req` 和 `res`，可以在上游中间件中统一为 `req` 或 `res` 对象添加自定义的属性和方法，供下游的中间件或路由使用。
- 可以连续定义多个全局中间件，会按照中间件定义的先后顺序依次进行调用。
- 局部中间件：不适用 `app.use()` 定义的中间件。

```javascript
const express = require("express");
const app = express();

const mw1 = (req, res, next) => {
  console.log("调用了局部生效中间件");
  next();
};

app.get('/', mw1, (req, res) => {
  res.send('Home page');
});

app.post('/user', (req, res) => {
  res.send('User page');
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
```

- 可以使用逗号分隔，或者放置一个数组来定义多个局部中间。
- 使用中间件的注意事项：① 一定要在路由之前注册中间件（除错误中间件外）；② 客户端发送的请求可以调用多个中间件处理；③ 中间件的业务代码执行完毕之后要调用 `next()` 函数；④ `next()` 函数之后不要再添加代码；⑤ 连续调用多个中间件时，多个中间件共享 `res` 和 `req` 对象。
- 中间件的分类：
  - ① 应用级别的中间件；绑定到 app 实例上的中间件。
  - ② 路由级别的中间件；绑定到 router 实例上的中间件，`express.Router()`
  - ③ 错误级别的中间件；用来捕获整个项目中发生的异常错误，防止项目异常崩溃的问题 `err, req, res, next`
  - ④ Express 内置的中间件；`express.static`快速托管静态资源，`express.json`解析JSON格式的请求数据，`express.urlencoded`解析 URL-encoded 格式的请求数据。
  ⑤ 第三方的中间件。

```javascript
const express = require("express");
const app = express();

app.get('/', (req, res) => {
  throw new Error('服务器内部发生错误');
  res.send('Home page.');
});

// 错误级别中间件
app.use((err, req, res, next) => {
  console.log('发生了错误：' + err.message);
  res.send('Error:' + err.message);
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
```

```javascript
const express = require("express");
const app = express();

// 解析 json 格式数据的中间件
app.use(express.json());
// 解析url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  // 不配置中间件，则 req.body 默认为 undefined
  console.log(req.body);
  res.send("ok");
});

app.post("/book", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
```

```javascript
const express = require("express");
// 导入nodejs内置的模块
const qs = require("querystring");

const app = express();

// 自定义中间件
app.use((req, res, next) => {
  // 功能：解析表单数据
  let str = "";

  req.on("data", (chunk) => {
    str += chunk;
  });

  req.on("end", () => {
    // console.log(str);
    const body = qs.parse(str);
    // console.log(body);

    req.body = body;

    next();
  });
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
```

### 04 - 接口

```javascript
const express = require("express");
const app = express();
// 导入路由模块
const router = require("./02_apiRouter");

// 配置解析表单的中间件
app.use(express.urlencoded({ extended: false }));

// 注册路由模块
app.use("/api", router);

app.listen(80, () => {
  console.log("http://1270.0.0.1");
});

//------------------------------------
const express = require("express");
const router = express.Router();

// 挂载对应的路由
router.get("/get", (req, res) => {
  const query = req.query;

  res.send({
    status: 0, // 0表示处理成功，1表示处理失败
    msg: "GET请求成功", // 状态描述
    data: query, // 需要响应给客户端的数据
  });
});

router.post("/post", (req, res) => {
  const body = req.body;

  res.send({
    status: 0,
    msg: "POST请求成功",
    data: body,
  });
});

module.exports = router;
```

- CORS 跨域资源共享解决方法：CORS 主流的解决方案；JSONP 只支持GET请求
- `npm install cors`、`const cors = require('cors');`、`app.use(cors());`
- CORS 主要在服务器端进行配置

| CORS 响应头 | 描述 |
| --- | --- |
| Access-Control-Allow-Origin: &#124; * | 其中指定允许访问该资源的外域URL * 表示允许任何域的请求 |
| Access-Control-Allow-Headers | 默认支持客户端发送9个请求头，额外的请求需要在服务器端进行声明 |
| Access-Control-Allow-Methods &#124; * | 默认仅支持客户端发起GET POST HEAD 请求，额外的请求方法需要在服务器端声明 |

- CORS 请求分类，根据请求方式和请求头的不同，可以分为两大类：
  - 简单请求：① 请求的方式：`GET POST HEAD` 三者之一；② HTTP 头部信息不超过以下几种字段：无自定义头部字段、`Accept`、`Accept-Language`、`Content-Language`、`DPR`、`Downlink`、`Save-Data`、`viewport-Width`、`Width`、`Content-Type`(只有三个值 `application/x-www-form-urlencode`、`multipart/form-data`、`text/plain`)
  - 预检请求：① 上诉三者请求之外的请求方式；② 请求头中包含自定义头部字段；③ 向服务器发送了 `application/json` 格式的数据
  正式通信之前会发送一个OPTION请求进行预检，获知服务器是否允许该实际请求，响应成功之后才会发送真正的请求，并携带真实数据
  - 两种请求的区别：简单请求只发送一次请求；预检请求会发生两次请求。
- JSONP 接口，浏览器端通过。

### 05 - REST API

- RESTful API：充满了“具体的状态转移”的API
- Representational State Transfer：表述/具体的状态转移。
- Representational 状态通过 Method 表达，请求和响应的类型通过 Content-Type 表达。
   - Method：POST、GET、DELETE、PUT、PATCH、HEAD、OPTIONS... 30+
   - Content-Type：.avi .bin .css ....
   - StatusCode：100、101、103、200...
- 总结：通过语义化的方式请求资源 URL，并根据返回的语义来判断本次操作的返回类型和效果。

## 三、Koa

```javascript
const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
})
```

- `ctx` 上下文对象，封装了 `req res`， `app.context` 是其创建原型，可以编辑为 `ctx` 添加其他属性。
