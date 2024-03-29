---
title: JavaScript
description: JavaScript
editLink: false
lastUpdated: false
contributors: false
prev:
  text: CSS
  link: /a-note/b-css.md
next:
  text: TypeScript
  link: /a-note/d-typescript.md
---

## （一）ECMAScript

### 01 - 注释

- 语句可以省略分号会自动插入分号，但有些情况下无法正确识别，例如上一句的结尾为括号或中括号时。
- `<script>` 标签如果设置了 `src` 属性，`<script>` 标签的内容将会被忽略，可以设置多个 `<script>` 标签。
- `"use strict"` 开启严格模式并激活新特性，要在代码顶部添加，`class` 与 `module` 中会自动开启该模式。
- 单行注释：

```javascript
// 单行注释
```

- 多行注释：

```javascript
/* 多行
   注释
*/
```

### 02 - 变量

- 命名仅可字母、数字、$、_ 且命名首字符非数字，建议使用小驼峰命名法。
- 常量赋值后不能被修改，建议使用大写形式。

| 关键字 | 描述 |
| --- | --- |
| let | 声明变量 |
| const | 声明常量 |
| var | 老旧（不建议使用） |

### 03 - 数据类型

- JavaScript 是动态类型语言，有8种数据类型：7种原始类型，1种引用类型：

| 类型 | 描述 |
| --- | --- |
| null | 无、空、值未知，是个特殊值 |
| undefined | 未赋值、未定义 |
| Number | 整数、浮点数、Infinity（无穷大）、NaN（非数值），数值运算是安全的，可以除0 |
| String | "字符串"、'字符串'、'反引号用于功能扩展${变量名}' |
| Boolean | true、false |
| BigInt | 用于表示大于2的253次方-1和小于2的-253次方的整数，数字尾部加n，代表此类型 |
| Symbol | 用于创建对象属性的唯一标识符 |
| Object | 存储数据集合和更复杂的实体 |

- `typeof(...)` 用于返回数据类型。
- `null` 返回对象类型，是 `typeof(...)` 的错误，并非真正的对象。
- 函数返回 `function` ，函数隶属于对象。

### 04 - 类型转换

| 转换 | 描述 |
| --- | --- |
| String(...) | 转换为字符串类型 |
| Number(...) | 转换为数字型类型 |
|  | undefined 转换为 NaN |
|  | null 转换为 0 |
| Boolean(...) | 转换为布尔类型 |
|  | 非空字符串均为 `true` |

### 05 - 运算符

| 一元运算符 | 描述 |
| --- | --- |
| let x = -1; | 表示负数 |
| +true | 转数字型 |

| 二元运算符 | 描述 |
| --- | --- |
| a + b | 加法，任一运算元有字符串时为拼接 |
| a - b | 减法 |
| a * b | 乘法 |
| a / b | 除法 |
| a % b | 取余 |
| a ** b | 幂运算 |

- 遵循从左向右运算。

| 赋值运算符 | 描述 |
| --- | --- |
| = | 赋值 |
| += | 相加并赋值 |
| -= | 相减并赋值 |
| *= | 相乘并赋值 |
| /= | 相除并赋值 |

| 自增、自减 | 描述 |
| --- | --- |
| a++ | 后置自增，先返回自身后自增 |
| ++a | 前置自增，先自增再返回 |
| b-- | 后置自减，先返回自身后自减 |
| --b | 前置自减，先自减再返回 |

| 逗号运算符 | 描述 |
| --- | --- |
| a, b | 返回最后一个结果，优先级低于赋值 |

| 位运算 | 描述 |
| --- | --- |
| & | 按位与 |
| &#124; | 按位或 |
| ^ | 按位异或 |
| ~ | 按位非 |
| << | 按位左移 |
| >> | 按位右移 |
| >>> | 无符号右移 |

- 32位整数。

### 06 - 值比较

- 比较后返回的结果是布尔值。
- 不同类型之间先转数字。
- `null` 和 `undefined` 仅在相等性运算中不转换，它们之间 `==` 相等、 `===` 不相等，仅仅等于对方而不等于任何其他值。
- 字符串按字典（非真实字典）顺序挨个比较。

| 符号 | 描述 |
| --- | --- |
| >、>= | 大于、大于等于 |
| <、<= | 小于、小于等于 |
| == | 值相等 |
| != | 值不相等 |
| === | 值与类型相等 |
| !== | 值与类型不相等 |

### 07 - 三元运算

```javascript
// 结果为真，返回 value1，否则返回 value2
let result = condition ? value1 : value2
```

- 可以使用多个问号。
- 禁止使用如 `break`、`continue`

### 08 - 逻辑运算

| 符号 | 描述 |
| --- | --- |
| &#124;&#124; | 或运算，一真则真，全假为假，连续或运算返回第一个真值，无真值返回最后一个值，短路求值 |
| && | 与运算，一假则假，全真为真，连续与运算返回第一个假值，无假值返回最后一个值，短路求值，优先级高于 &#124;&#124; |
| ！ | 布尔非运算，!!可用于转布尔值 |
| ?? | 空值合并运算，返回第一个非 null 与 undefined 的值，否则返回最后一个值 |

- `??` 常用于提供默认值。
- `??` 与 `&& ||` 一块使用需要添加括号标记优先级。

### 09 - if

```javascript
// ---------
if (...) {
  ...
}

// ----------
if (...) {
  ...
} else {
  ...
}

// ---------
if (...) {
  ...
} else if (...) {
  ...
} else {
  ...
}
```

- 只有一条语句可以省略 {}

### 10 - switch

```javascript
switch (...) {
  case n1:
  ...
  break
  case n2:
  ...
  break
  default:
  ...
}
```

- `()` 内为 `===`

### 11 - while

```javascript
// ----------
while (...) {
  ...
}

// ----------
do {
  ...
} while (...)
```

- 单体循环可以省略 {}

### 12 - for

```javascript
for (let i = 0; i < 9; i++) {
  ...
}
```

- 单体循环可以省略 `{}`
- `()` 内的三条语句都可以省略，分号不能省略。

| 关键词 | 描述 |
| --- | --- |
| break | 用于结束循环 |
| continue | 用于结束本次循环，继续下一次循环 |

- 标签，用于跳出多层循环。

```javascript
let num = 0

// outer 标签
outer: for (let b = 1; b <= 9; b++) {
  for (let c = 1; c <= 9; c++) {
    num = b * c
    console.log(num)
    if (num == 18) break outer
  }
}
```

### 13 - 函数

- 函数即行为，字符串或数字等常规值代表数据，同时函数也是值，表示一个行为的值。
- 局部变量：在函数内声明，仅在函数内可见。
- 全局变量（外部变量）：函数之外声明，全局可用，但应尽量减少使用。
- 声明同名变量，函数会遮蔽外部变量使用局部变量。

**（1）“函数声明”，声明在定义之前就可以被调用：**

```javascript
funcName()

function funcName(parameter1, parameter2, ...) {
  return ...
}

funcName()
```

**（2）“函数表达式”，代码执行到达时被创建，仅从那一刻起可用：**

```javascript
let funcName = function(parameter1, parameter2, ...) {
  ...
}

funcName()

// 可以被拷贝
let copyFunc = funcName
copyFunc()
```

- 未被传递值的参数，被赋予 `undefined`
- 可以为参数设置默认值。
- 空值 `return` 或没有 `return` 返回值为 `undefined`
- 命名常用前缀：`get...`、`calc...`、`create...`、`check...`
- 回调函数/匿名函数：

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask(
  "你吃饭了吗?",
  // 回调，匿名
  function () {
    console.log("你吃了")
  },
  function () {
    console.log("你没吃")
  }
)
```

**（3）“箭头函数”，优于函数表达式：**

```javascript
let sum = (a, b) => a + b
sum(1, 2)

let double = (n) => n * 2
double(8)

let sayHi = (...) => {
  ...
  return ...
}
```

- 不使用 `{}` 会自动返回值。

### 14 - 浏览器调试

- 调试是指在一个脚本中找出并修复错误的过程。
- 断点是调试器会自动暂停 JavaScript 执行的地方，当代码被暂停时，可以检查当前的变量，在控制台执行命令等等。

```javascript
function hello(...) {
  ...
  debugger // 调试器会在此处暂停
  ...
}
```

### 15 - 代码风格

- 没有什么规则是必须的，规范、易懂、优雅就是好的代码风格。

### 16 - 自动化测试

待更新...

### 17 - 对象

- 对象是用来存储键值对和更复杂的实体，是具有一些特殊特性的关联数组。

**（1）构造函数方式创建对象：**

```javascript
let user1 = new Object()
```

**（2）字面量方式创建对象：**

```javascript
let user2 = {}
```

- 属性以键值对的形式存在，可以多个词汇命名属性的键，但是需要添加引号。
- 访问属性：`user1.name` 点方法、`user1["likes birds"]` 方括号访问多词属性。
- 添加属性：`user1.age = 30`
- 删除属性：`delete user1.age`
- 判断属性是否存在：

```javascript
console.log("age" in user1)
```

- 计算属性：方括号比点符号更加强大，允许任何属性名和变量。

```javascript
let fruit = prompt("你喜欢吃什么水果？", "apple")

let bag = {
  [fruit]: 5,
}
```

- 属性值简写：对象的属性名不受限制，可以为保留字，其他类型会被自动地转换为字符串。

```javascript
function makeUser(name, age) {
  return {
    name, // 与 name: name 相同
    age, // 与 age: age 相同
    // ...
  }
}
```

- 遍历对象属性的键：`for...in...`

```javascript
for (let key in user1) {
  console.log(key)
}
```

- 遍历对象属性的值：`for...of...`

```javascript
for (let value of user1) {
  console.log(value)
}
```

- JavaScript 能够被访问任何属性，即使属性不存在，读取不存在的属性只会得到 `undefined`
- 对象属性顺序，整数属性会被进行排序，其他属性则按照创建的顺序显示，可以在整数属性前添加 `+` 解决自动排序。

### 18 - 对象引用与复制

- 赋值了对象的变量存储的不是对象本身，而是该对象在内存中的地址，即该变量存储的是对该对象的引用。
- 当一个对象变量被复制，是引用被复制，而该对象自身并没有被复制。
- 仅当两个对象为同一对象时，两者才相等。
- 想要真正的复制对象本身，需要拷贝该对象：使用 `Object.assign(dest, [src1, src2, src3...])`，被拷贝的项目中没有对象类型，这种拷贝称为“浅拷贝”，如果被拷贝的属性的属性名已经存在，那么它会被覆盖。
- 如果属性值也是一个对象，那么也复制它的结构而不是其引用地址，使用 `structuredClone(value)`，这种拷贝方式称为“深拷贝”。
- 使用 `const` 声明的对象也是可以被修改的，作为一个整体进行赋值时才会报错。

### 19 - 垃圾回收

- JavaScript 的内存管理是自动的、无形的。
- 可达性：
  - 当前执行的函数，它的局部变量和参数。
  - 当前嵌套调用链上的其他函数、它们的局部变量和参数。
  - 全局变量。
- 不可达便会被回收。
- 如果一个值可以通过引用链从根访问任何其他值，则认为该值是可达的。
- 对外引用不重要，只有传入引用才可以使对象可达。
- 几个对象相互引用，但外部没有对其任意对象的引用，这些对象也可能是不可达的，将会被从内存中删除。
- 垃圾回收的基本算法被称为 “mark-and-sweep”（标记与扫描）。

### 20 - 对象方法与 this

- 作为对象属性的函数被称为方法。
- `this` 的值就是在点之前的这个对象，即调用该方法的对象。
- 没有调用对象时，严格模式下的 `this` 值为 `undefined`，非严格模式的情况下，`this` 将会是全局对象。
- 箭头函数没有自己的 `this`，`this` 值取决于外部非箭头函数。

### 21 - 构造器与 new

- 构造函数的命名以大写字母开头，只能由 `new` 操作符来执行，实现可重用的对象创建代码。

```javascript
function User(name) {
  this.name = name
  this.isAdmin = false

  this.sayHi = function () {
    console.log("Myname is " + this.name)
  }
}

let user = new User("Jack")
```

- 构造函数被调用时，隐式的创建了一个空对象，并且分配了 `this`，通过 `this` 添加新的属性，最后隐式的返回了 `this`
- `let user = new function() {}` 立即调用，无法重用。
- `new.target` 可以被用在函数内部，来判断该函数是被通过 `new` 调用的“构造器模式”，还是没被通过 `new` 调用的常规模式。

### 22 - 可选链

- 可选链 `?.` 前面的值为 `undefined` 或者 `null`，它会停止运算并返回 `undefined`
- 安全地访问 `user.address.street` 的方式：

```javascript
let user = {}
console.log(user?.address?.street)
```

- 如果 `?.`左边部分不存在，就会立即停止运算，“短路效应”。
- `?.()` 用于调用一个可能不存在的函数。
- `?.[]` 从一个可能不存在的对象上安全地读取属性。
- 可以使用 `?.` 安全地读取或删除，但不能写入，不能用在赋值语句的左侧。

### 23 - Symbol 类型

- 只有两种原始类型可以用作对象属性的键：字符串类型、`Symbol`类型。
- `Symbol` 的值表示唯一的标识符，是带有可选描述的原始唯一值，保证是唯一的，不会被自动转换为字符串。

```javascript
let id = Symbol("id")
```

- 允许创建对象的“隐藏”属性，代码的任何其他部分都不能意外访问或重写这些属性。

```javascript
let user = {
  name: "John",
}

let id = Symbol("id")

// 第三方代码看不到
user[id] = 1

// 可以使用 symbol 作为键来访问数据
console.log(user[id])
```

- `Symbol` 总是不同的，即使它们有相同的名字。
- `Symbol` 属性不参与 `for..in...` 循环。
- `Symbol.for(...)` 从全局注册表中读取，如果不存在就创建它，全局注册表中的 `Symbol` 再读取复制是相同的：

```javascript
let sym1 = Symbol.for("name")
let sym2 = Symbol.for("id")
```

- `Symbol.keyFor(...)` 通过全局 `symbol` 返回一个名字，不存在则返回 `undefined`：

```javascript
console.log(Symbol.keyFor(sym1))  // name
console.log(Symbol.keyFor(sym2))  // id
```

### 24 - 原始值转换

- 转换规则：
  - 布尔值没有转换。
  - 数字转换发生在对象相减或应用数学函数时。
  - 字符串转换通常发生在像 `alert(...)` 这样输出一个对象和类似的上下文中。
- `Symbol.toPrimitive` 用来给转换方法命名：

```javascript
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint:${hint}`)
    return hint == "string" ? `{name: "${this.name}"}` : this.money
  }
}

console.log(String(user))  // hint:string '{name: "John"}'
console.log(+user)  // hint:number 1000
console.log(user + 500)  // hint:default 1500
```

- 过程：
  - 首先，调用 `obj.Symbol.[toPrimitive] (hint)` 如果这个方法存在。
  - 如果 `hint` 是 `string`，尝试调用 `obj.toString()` 或 `obj.valueOf()`
  - 如果 `hint` 是 `number` 或者 `default`，尝试调用 `obj.valueOf()` 或 `obj.toString()`
- 如果 `toString` 或 `valueOf` 返回一个对象，则不会出现 `error`，但是这种值会被忽略，而 `Symbol.toPrimitive` 更严格，它必须返回一个原始值，否则就会出现 `error`
- 通常只实现 `obj.toString()` 作为字符串转换的“全能”方法就足够了，该方法应该返回对象的“人类可读”表示，用于日志记录或调试。

### 25 - 数字类型

| 方法 | 参数 | 描述 |
| --- | --- | --- |
| num.toString(base) | 指定进制 2-36，默认为 10 | 返回指定进制形式的字符串 |
| num.toFixed(n) | 指定小数位数 | 返回字符串形式，最近舍入，不够添0 |
| parseInt(str) | 字符串 | 返回读取的整数，直到第一个非数字结束 |
| parseFloat(str) | 字符串 | 返回读取的浮点数，直到第一个非数字结束 |
| Math.random() |  | 返回一个 0 - 1 的随机数 |
| Math.floor(num) | 数值 | 向下舍入 |
| Math.ceil(num) | 数值 | 向上舍入 |
| Math.round(num) | 数值 | 最近整数舍入 |
| Math.trunc(num) | 数值 | 移除小数点后无舍入 |
| Math.max(...) | 任意数量数值 | 返回一个最大值 |
| Math.min(...) | 任意数量数值 | 返回一个最小值 |
| Math.pow(n, power) | 底数，幂 | 返回 n 的 power 次幂 |
| isNaN(...) |  | 将参数转换为数字，判断是否为NaN |
| isFinite(...) |  | 将参数转换为数字，判断是否为常规数字 |
| Object.is(value1, value2) |  | 类似 === 对值进行比较，可以 NaN === NaN |

### 26 - 字符串类型

| 方法 | 参数 | 描述 |
| --- | --- | --- |
| str.length |  | 获取字符串的长度 |
| str[n] |  | 访问字符串，未找到返回 undefined |
| str.charAt(n) |  | 访问字符串，未找到返回空字符串 |
| str.toUpperCase() |  | 转大写 |
| str.toLowerCase() |  | 转小写 |
| str.indexOf(substr, [n]) | 子串，指定开始位置 | 返回匹配成功子字符串的位置，大小写敏感，失败返回 -1 |
| str.lastIndexOf(subsrt, [n]) | 子串，指定开始位置 | 从末尾开始搜索子字符串 |
| str.includes(substr, [n]) | 子串，指定开始位置 | 是否包含某个子字符串 |
| str.startsWith(str1) | 字符串 | 是否以某字符串开头 |
| str.endsWith(str1) | 字符串 | 是否以某字符串结尾 |
| str.slice(start, end) | 开始位置，结束位置 | 返回 [start end) 部分的字符串，省略 end 则到结尾，可取负值 |
| str.substring(start, end) | 开始位置，结束位置 | 返回 [start end) 部分的字符串，允许 start 大于 end，不支持负值 |
| str.substr(start, length) | 开始位置，长度 | 返回 start 开始指定长度的字符串，start 允许负值 |
| str.codePointAt(pos) | 位置 | 返回 pos 位置的字符代码 |
| str.localeCompare(str1) | 字符串 | str 排在 str1 前面返回负数、str 排在 str1 后面返回正数、相同返回0 |
| str.trim() |  | 删除字符串前后的空格 |
| str.repeat(n) |  | 重复字符串 n 次 |

- `for (let ... of ...) { ... }` 遍历字符串。
- 字符串是不可以直接被修改的，需要创建新的字符串。

### 27 - 数组

| 方法 | 参数 | 描述 |
| --- | --- | --- |
| arr.length |  | 获取元素数量，实际是最大数字索引+1，可写，小于实际则数组被截断，不可逆 |
| arr[n] |  | 访问数组元素 |
| arr[n] = ... |  | 替换或增加数组元素 |
| arr.at(n) |  | 访问第 n 个元素，-1 表示最后一个元素 |
| arr.pop() |  | 末端，取出并返回最后一个元素，取出即被删除 |
| arr.push(...) |  | 末端，添加元素，返回数组的长度 |
| arr.shift() |  | 首端，取出并返回第一个元素，取出即被删除 |
| arr.unshift(...) |  | 首端，添加元素，返回数组的长度 |
| delete arr[n] |  | 元素被删除，但位置依然存在 |
| arr.splice(n, n, ...) | 起始位置，删除个数，插入的新内容 | 返回被删除的元素 |
| arr.slice(start, end) | 起始位置，结束位置 | 返回一个按起始位置截取复制的新数组 |
| arr.concat(arr1, arr2...) | 数组... | 返回一个合并的新数组 |
| arr.forEach((item, index, array) => {...}) | 每个元素，每个元素的索引，数组本身 | 遍历数组的每个元素，并为每个元素运行相关函数，无返回 |
| arr.indexOf(item, n) | 元素，位置 | 从 n 位置搜索 item 元素，找到返回索引，否则返回-1 |
| arr.lastIndexOf(item, n) | 元素，位置 | 同上，从右向左搜索 |
| arr.includes(item, n) | 元素，位置 | 从 n 位置搜索 item 元素，找到返回 true，否则返回 false |
| arr.find(func) | 函数 | 返回符合函数条件的元素，未找到返回 undefined |
| arr.findIndex(func) | 函数 | 返回符合函数条件的元素索引，未找到返回 undefined |
| arr.filter(func) | 函数 | 返回所有匹配元素组成的新数组，浅拷贝 |
| arr.map(func) | 函数 | 对数组的每个元素都调用相关函数，返回结果数组 |
| arr.sort(func) | 函数（提供排序规则） | 对数组进行原位排序，默认按字符串排序 |
| arr.reverse() |  | 对数组进行原位颠倒顺序 |
| str.split("...") | 指定分隔符，可选参数对数组的长度做出限制，空参则分隔为每个字母 | 返回给定分隔符把字符串分隔的数组 |
| arr.join("...") | 指定分隔符 | 返回给定分隔符把数组组合为字符串 |
| arr.reduce(callback(prev, item, index, array), init) | 回调函数、初始值 | 返回最后值，函数调用结果作为第一个参数传递 |
| arr.reduceRight(...) |  | 返回最后值，遍历时从右向左 |
| Array.isArray(arr) |  | 判断是否为数组 |
| Object.values(obj) |  | 返回一个给定对象自身的所有可枚举属性值的数组 |

- 数组常用于栈和队列。
- `for (let ... of ...) { ... }` 遍历数组。
- `let arr = [ [...], [...]...]` 多维数组。
- 数组有自己的 `toString` 方法，会返回以逗号分隔的元素列表。

### 28 - 可迭代对象

- 可以应用 `for..of...` 的对象被称为可迭代对象。
- 数组是可迭代的，字符串也是可迭代的，数组和字符串是使用最广泛的内建可迭代对象。
- `Symbol.iterator` 是专门用于使对象可迭代的内建 `Symbol`

```javascript
let range = {
  from: 1,
  to: 5,
}

// 1. for..of 首先会调用这个方法：
range[Symbol.iterator] = function () {
  // 它返回迭代器对象（iterator object）：
  // 2. 接下来，for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值
  return {
    current: this.from,
    last: this.to,

    // 3. next() 在 for..of 的每一轮循环迭代中被调用
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      // 当 done=true 时，表示循环结束，否则 value 是下一个值
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    },
  }
}

// 简化：返回 range 对象自身
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from
    return this
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ }
    } else {
      return { done: true }
    }
  },
}
```

- `Array.from(...)` 接受一个可迭代对象或类数组的值，并从中获取一个真正的数组，然后就可以对其调用数组方法了（有索引，有长度）。

### 29 - 映射与集合

- `Map` 是一个带键的数据项的集合，就像一个 `Object` 一样，但是它们最大的差别是 `Map` 允许任何类型的键，包括对象。

| 方法 | 描述 |
| --- | --- |
| new Map() | 创建 Map 映射 |
| map.set(key, value) | 根据键存储值 |
| map.get(key) | 根据键返回值，不存在返回 undefined |
| map.has(key) | 是否存在 key |
| map.delete(key) | 删除指定键的值，返回布尔值 |
| map.clear() | 清空 map |
| map.size | 返回当前元素个数 |
| map.keys() | 遍历并返回一个包含所有键的可迭代对象 |
| map.values() | 遍历并返回一个包含所有值的可迭代对象 |
| map.entries() | 遍历并返回一个包含所有实体的可迭代对象 |
| Object.entries(obj) | 返回对象的键值对数组，数组的格式按照 Map 所需格式，用于对象创建映射 |
| Object.fromEntries([[...], [...]]) | 返回给定一个键值对数组来创建一个相应的对象 |

- 与对象不同，键不会被转换成字符串，键可以是任何类型。
- 使用对象作为键是 `Map` 最值得注意和重要的功能之一。
- `Map` 有内建的 `forEach` 方法。

```javascript
// 通过指定形式的数组创建映射
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
])
```

- `Set` 是一个特殊的类型集合，值的集合没有键，它的每一个值只能出现一次。

| 方法 | 描述 |
| --- | --- |
| new Set() | 创建 Set 集合，可以传入数组创建集合 |
| set.add(value) | 添加值 |
| set.delete(value) | 删除相应的值，返回布尔值 |
| set.has(value) | 是否存在该值 |
| set.clear() | 清空 set |
| set.size | 返回元素个数 |
| set.keys() | 遍历并返回一个包含所有值的可迭代对象 |
| set.values() | 与上诉的方法一致，目的是兼容 Map |
| set.entries() | 遍历并返回一个包含所有实体的可迭代对象，为了兼容 Map |

- 可以使用 `for...of..` 或者 `forEach` 来遍历 `Set`

### 30 - 弱映射与弱集合

- 使用对象作为常规 `Map` 的键，那么当 `Map` 存在时，该对象也将存在，它会占用内存，并且不会被垃圾回收机制回收。
- `weakMap` 和 `Map` 的不同点就是 `weakMap` 的键必须是对象，不能是原始值，`let weakMap = new WeakMap()`
- 在 `weakMap` 中使用一个对象作为键，并且没有其他对这个对象的引用，该对象将会被从内存和 `map` 中自动清除。
- `weakMap` 不支持迭代以及 `keys()`，`values()` 和 `entries()` 方法，所以没有办法获取 `weakMap` 的所有键或值。
- `weakMap` 的主要应用场景是额外数据的存储，可能是第三方库，并想存储一些与之相关的数据，那么这些数据就应该与这个对象共存亡，再有就是缓存的应用。
- `weakSet` 与 `Set` 类似，但是只能向 `weakSet` 添加对象。
- 对象只有在其它某些地方能被访问的时候，才能留在 `weakSet` 中。

### 31 - 解构赋值

- 一种特殊的语法，可以将数组或对象拆包至一系列变量中，原来的数组或对象自身没有被修改。

```javascript
// 额外的逗号，可以实现不需要第二个元素
let [firstName, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
]
```

- 等号右侧可以是任何可迭代对象。

```javascript
// 不借助中间变量实现数据交换
let guest = "Jane"
let admin = "Pete"

[guest, admin] = [admin, guest]
```

- `...rest` 接收剩余的值存入数组中。

```javascript
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
]
```

- 缺少对应值的变量都会被赋 `undefined`
- 可以使用冒号来设置变量名称 `let {width: w, height: h, title} = obj`

```javascript
// 嵌套结构 使用相同的模式
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
}

let {
  size: { width, height },
  items: [item1, item2],
  title = "Menu",
} = options
```

```javascript
// 智能函数参数
let options = {
  title: "My menu",
  items: ["item1", "item2"],
}

function showMenu({
  title = "Untitled",
  width = 200,
  height = 300,
  items = [],
}) {
  console.log(`${title} ${width} ${height}`)
  console.log(items)
}

showMenu(options)
```

### 32 - 日期和时间

```javascript
let now = new Date()
```

- `new Date()` 不带参数，创建的是一个表示当前日期和时间的 `Date` 对象。
- 传入整数参数，代表的是自 `1970-01-01 00 : 00 : 00` 以来经过的毫秒数，该整数被称为时间戳。
- 传入字符串参数，那么它会被自动解析，`new Date(year, month, date, hours, minutes, seconds, ms)`
- 日期可以相减，相减的结果是以毫秒为单位的时间差。

| 方法 | 描述 |
| --- | --- |
| date.getFullYear() | 获取年份，4位整数 |
| date.getMonth() | 获取月份，从0-11 |
| date.getDate() | 获取日，从1-31 |
| date.getHours() | 获取小时 |
| date.getMinutes() | 获取分钟 |
| date.getSeconds() | 获取秒 |
| date.getMilliseconds() | 获取毫秒 |
| date.getDay() | 获取周，从0-6 |
| date.getTime() | 返回日期的时间戳，毫秒 |
| date.getTimezoneOffset() | 返回UTC与本地之间的时差，分钟 |
| **设置日期：** |  |
| date.setFullYear(year, [month], [date]) | 设置年份 |
| date.setMonth(month, [date]) | 设置月份 |
| date.setDate(date) | 设置日 |
| date.setHours(hour, [min], [sec], [ms]) | 设置小时 |
| date.setMinutes(min, [sec], [ms]) | 设置分钟 |
| date.setSeconds(sec, [ms]) | 设置秒 |
| date.setMilliseconds(ms) | 设置毫秒 |
| date.setTime(milliseconds) | 设置时间戳 |
| Date.now() | 返回当前的时间戳 |
| Date.parse(str) | 从字符串中读取日期，'YYYY-MM-DD hh:mm:ss' |

### 33 - JSON

- 全称 JavaScript Object Notation，是表示值和对象的通用格式。
- JSON 支持以下数据类型：`Objects`、`Arrays`、`Primitives`（`strings`、`numbers`、`boolean`、`null`）
- `JSON.stringify(obj)` 将对象转换为 JSON

```javascript
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
}

let json = JSON.stringify(student)
```

- JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 `JSON.stringify` 跳过：函数属性（方法）、`Symbol` 类型的键和值、存储 `undefined` 的属性。
- `JSON.parse(json)` 解码 JSON 为对象。

```javascript
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }'
let user = JSON.parse(userData)
```

```javascript
// 处理日期
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}'

let meetup = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value)
  return value
})

console.log(meetup.date.getDate())
```

### 34 - 递归与堆栈

- 递归即调用函数自身。

```javascript
function pow(x, n) {
  if (n == 1) {
    return x
  } else {
    return x * pow(x, n - 1)
  }
}

console.log(pow(2, 10))
```

- 最大的嵌套调用次数（包括首次）被称为递归深度。
- 执行上下文是一个内部数据结构，它包含有关函数执行时的详细细节，包括：当前控制流所在的位置、当前的变量、`this` 的值、其它的一些内部细节。
- 函数嵌套调用时：当前函数被暂停，与它关联的执行上下文被一个叫做执行上下文堆栈的特殊数据结构保存，执行嵌套调用，嵌套调用结束后，从堆栈中恢复之前的执行上下文，并从停止的位置恢复外部函数。
- 任何递归都可以用循环来重写，通常循环变体更有效。
- 递归的一个重要应用是递归遍历。

### 35 - Rest 参数与 Spread 语法

- 在 JS 中无论函数是如何定义的，都可以在调用它时传入任意数量的参数。
- `...rest`，这将会声明一个数组并指定其名称，其中存有剩余的参数，`rest` 参数必须放到参数列表的末尾。
- `arguments` 是一个特殊类数组对象，可以在函数中被访问，该对象以参数在参数列表中的索引作为键，存储所有参数，箭头函数没有 `arguments`

```javascript
// rest 参数
function sumAll(...args) {
  let sum = 0
  for (let arg of args) sum += arg
  return sum
}

console.log(sumAll(1, 2, 3, 4, 5, 6))

// arguments 类数组对象
function num(one, two, three) {
  console.log(arguments)
  console.log(typeof arguments)
  for (let i of arguments) console.log(i)
}

num(1, 2, 3, 4, 5, 6)
```

- `spread` 语法是使用 `...可迭代对象`，把可迭代对象展开到参数列表中。
- `spread` 语法内部使用了迭代器来收集元素，与 `for..of` 的方式相同，可用于复制 `array/object`

```javascript
// Spread 语法
let arr = [3, 5, 6, 9, 8, 4]
// 可以使用逗号分隔，传入多个可迭代对象
console.log(Math.max(...arr));
```

### 36 - 变量作用域与闭包

- `let` 与 `const` 如果在代码块 `{...}` 内声明了一个变量，那么这个变量只在该代码块内可见，`if` 、 `for` 、 `while` 等，在 `{...}` 中声明的变量也仅在内部可见。
- （1）闭包是指一个嵌套内部函数可以记住其外部变量并可以访问这些变量，在 JS 中几乎所有函数都是天生闭包的（有一个例外），函数会自动通过隐藏的 `[[Environment]]` 属性记住创建它们的位置，所以它们都可以访问外部变量，即函数中创建的函数可以访问外部函数的变量。
- （2）闭包就是指有权访问另一个函数作用域中的变量的函数。
- 函数将从内到外依次在对应的词法环境中寻找目标变量，它使用最新的值。
- 一般情况下函数调用完成后，会将词法环境和其中的所有变量从内存中删除，但是如果有一个嵌套的函数在函数结束后仍可达，则它将具有引用词法环境的 `[[Environment]]` 属性。

### 37 - 关于 var

- `var` 没有块级作用域，用 `var` 声明的变量为函数作用域或全局作用域。
- 使用 `var` ，可以重复声明一个变量，新声明的将覆盖旧的。
- `var` 声明的变量，可以在其声明语句前被使用，声明会被提升，但是赋值不会。
- `var` 声明都是在函数开头处理的，可以在任何地方引用它们，但是在它们被赋值之前都是 `undefined`
- 全局对象提供可在任何地方使用的变量和函数，默认情况下这些全局变量内建于语言或环境中；在浏览器中，它的名字是 `window`，在 Node.js 中，它的名字是 `global`
- `globalThis` 被作为全局对象的标准名称加入到了 JS 中，所有环境都应该支持该名称。

### 38 - 函数对象与 NFE

- 命名函数表达式（NFE：Named Function Expression），指带有名字的函数表达式的术语。

```javascript
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`)
  } else {
    func("Guest")
  }
}

sayHi()  // Hello, Guest

func()  // Error, func is not defined（在函数外不可见）
```

- 它允许函数在内部引用自己，但在函数外是不可见的。

```javascript
// 属性 name
function sayHi() {
  console.log("Hi")
}

console.log(sayHi.name)

// 属性 lenght
function f1(a) {}
function f2(a, b) {}

// 返回的是参数的个数，rest 参数不参与计数
console.log(f1.length)
console.log(f2.length)
```

### 39 - new Function

- `new Function` 允许将任意字符串变为函数。
- 使用 `new Function` 创建的函数，该函数的 `[[Environment]]` 并不指向当前的词法环境，而是指向全局环境，因此此类函数无法访问外部（outer）变量，只能访问全局变量，即无法实现闭包。

```javascript
let sum = new Function('a', 'b', 'return a + b')

console.log(sum(1, 2))
```

### 40 - setTimeout 与 setInterval

- `setTimeout` 允许将函数推迟到一段时间间隔之后再执行。
- `setTimeout` 在调用时会返回一个定时器标识符（timer identifier）
- 任何 `setTimeout` 都只会在当前代码执行完毕之后才会执行，原因是事件循环机制。
- `clearTimeout(timeoutID)` 取消调度。

```javascript
setTimeout(() => console.log("Hello Xiaofan"), 2000)
```

- `setInterval` 允许重复运行一个函数，从一段时间间隔之后开始运行，之后以该时间间隔连续重复运行该函数。
- `clearInterval(timeoutID)` 取消调度。

```javascript
let timeoutID = setInterval(() => console.log("xiaofan"), 3000)

setTimeout(() => {
  clearInterval(timeoutID)
  console.log("stop")
}, 9000)
```

- 嵌套的 `setTimeout` 要比 `setInterval` 灵活得多，采用这种方式可以根据当前执行结果来调度下一次调用，因此下一次调用可以与当前这一次不同，嵌套的 `setTimeout` 能够精确地设置两次执行之间的延时，而 `setInterval` 却不能。
- 使用 `setInterval` 时，`func` 函数的实际调用间隔要比代码中设定的时间间隔要短，嵌套的 `setTimeout` 就能确保延时的固定，这是因为下一次调用是在前一次调用完成时再调度的。
- 当不再需要调度函数时最好取消它。
- 在浏览器环境下，嵌套定时器的运行频率是受限制的，时间间隔被强制设定为至少 4 毫秒。

### 41 - 装饰器模式与转发

- 装饰器（decorator）是一个围绕改变函数行为的包装器，主要工作仍由该函数来完成。
- 装饰器一个特殊的函数，它接受另一个函数并改变它的行为。

```javascript
function slow(x) {
  // 这里可能会有重负载的 CPU 密集型工作
  console.log(`Called with ${x}`)
  return x
}

function cachingDecorator(func) {
  let cache = new Map()

  return function (x) {
    // 如果缓存中有对应的结果
    if (cache.has(x)) {
      // 从缓存中读取结果
      return cache.get(x)
    }

    // 否则就调用 func
    let result = func(x)
    // 然后将结果缓存（记住）下来
    cache.set(x, result)
    return result
  }
}

slow = cachingDecorator(slow)

console.log(slow(1))  // slow(1) 被缓存下来了，并返回结果
console.log("Again: " + slow(1))  // 返回缓存中的 slow(1) 的结果

console.log(slow(2))  // slow(2) 被缓存下来了，并返回结果
console.log("Again: " + slow(2))  // 返回缓存中的 slow(2) 的结果
```

- 将所有参数连同上下文一起传递给另一个函数被称为呼叫转移（call forwarding）

| 方法 | 描述 |
| --- | --- |
| func.call(obj, 参数列表) | 调用函数时会将 this 设置为传入的对象 |
| func.apply(obj, 类数组对象) | 调用函数时会将 this 设置为传入的对象 |

```javascript
func.call(context, ...args)
func.apply(context, args)

// 方法借用
function hash() {
  console.log([].join.call(arguments))
}
```

- 防抖（debounce）会在冷却期后运行函数一次，适用于处理最终结果；在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时；用户触发时间过于频繁，只要最后一次请求的操作就叫做防抖

```javascript
// 简单的防抖函数
function debounce(func, wait) {
  let timeout = null

  return function (arguments) {
    // 先清除定时器
    clearTimeout(timeout)
    // 设置多久后执行回调
    timeout = setTimeout(() => {
      func.apply(this, arguments)
    }, wait)
  }
}
```

- 节流（throttle）运行函数的频率不会大于所给定的时间（毫秒），适用于不应该经常进行的定期更新；当持续触发事件时，保证在一定时间内只调用一次事件处理函数，假设一个用户一直触发这个函数，且每次触发小于既定值，函数节流会每隔这个时间调用一次。

```javascript
// 简单的节流函数
function throttle(func, wait) {
  let timeout = null

  return function (arguments) {
    // 时间未到会退出执行
    if (timeout) return
    // 设置每次执行的间隔时间
    timeout = setTimeout(() => {
      func.apply(this, arguments)
      timeout = null
    }, wait)
  }
}
```

- 总结，防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行。

### 42 - 函数绑定

- 丢失 `this` 是指一旦方法被传递到与对象分开的某个地方 `this` 就会丢失。
- 解决方法1：包装器，它从外部词法环境中获取到了需要的变量。
- 解决方法2：`bind` 方法，它可以绑定 `this`，该方法会创建一个新函数，新函数的 `this` 被指定为第一个参数，其余参数作为新函数的参数。
- 备注：`call`、`apply` 用于调用函数传递上下文，`bind` 用于创建函数传递上下文，它们都来自 `Function.prototype` 都是为了解决 `this` 问题。

```javascript
let user = {
  firstName: "John",
}

function func() {
  console.log(this.firstName)
}

let funcUser = func.bind(user)
funcUser()
```

- 一个对象有很多方法，并且都打算将它们都传递出去，那么可以在一个循环中完成所有方法的绑定。

```javascript
for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user)
  }
}
```

- 偏函数是指通过绑定先有函数的一些参数来创建一个新函数。

```javascript
function mul(a, b) {
  return a * b
}

let double = mul.bind(null, 2);

console.log(double(3))  // 6
console.log(double(4))  // 8
```

- `.bind(this)` 创建一个该函数的绑定版本。
- 箭头函数没有创建任何绑定，箭头函数只是没有 `this`，`this` 的查找与常规变量的搜索方式完全相同，即在外部词法环境中查找。箭头函数也没有 `arguments` 变量。总之，箭头函数是针对那些没有自己的上下文，但在当前上下文中起作用的短代码的。

### 43 - 属性标志与描述符

- 属性标志 `writable` 如果为 `true`，则为可写的，否则不可写；`enumerable` 如果为 `true`，则会在循环中列出，否则不可以；`configurable` 如果为 `true`，则是可以被删除/修改，否则不可以；用常用的方式创建一个属性时，它们都为 `true`

| 方法 | 描述 |
| --- | --- |
| Object.getOwnPropertyDescriptors(obj) | 一次获取所有属性的描述 |
| Object.getOwnPropertyDescriptor(obj, propertyName) | 查询有关属性的完整信息 |
| Object.defineProperties(obj, descriptors) | 允许一次定义多个属性 |
| Object.defineProperety(obj, propertyName, descriptor) | 如果该属性存在会更新其标志，否则它会使用给定的值和标志创建属性，没有提供标志，则会假定它是 false |
| **限制整个对象的方法：** |  |
| Object.preventExtensions(obj) | 禁止向对象添加新属性 |
| Object.seal(obj) | 禁止添加/删除属性，为所有现有的属性设置 `configurable: false` |
| Object.freeze(obj) | 禁止添加/删除/更改属性，为所有现有的属性设置 `configurable: false, writable: false` |
| **针对测试的方法：** |  |
| Object.isExtensible(obj) | 如果添加属性被禁止，则返回 false，否则返回 true |
| Object.isSealed(obj) | 如果添加/删除属性被禁止，并且所有现有的属性都具有 `configurable: false` 则返回 true |
| Object.isFrozen(obj) | 如果添加/删除/更改属性被禁止，并且所有当前属性都是 `configurable: false, writable: false` 则返回 true |

```javascript
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
})
```

- 完全克隆对象，包括属性、`Symbol`、不可枚举类型：

```javascript
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj))
```

### 44 - getter 与 setter

- 存在两种类型的对象属性，一种是数据属性，另一种是访问器属性本质上是用于获取和设置值的函数。
- 对于访问器属性，没有 `value` 和 `writable`，但是有 `get` 和 `set` 函数。
- 一个属性要么是访问器（具有 `get/set` 方法），要么是数据属性（具有 `value`），但不能两者都是。
- 访问器属性的分配操作是由 `setter` 函数处理的，因此写入此类属性实际上与调用函数相同。

```javascript
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
}

// 访问器属性看起来就像一个普通属性
// 不以函数的方式调用，而使用 user.fullName，正常读取 getter 会在幕后运行
console.log(user.fullName)

user.fullName = "Alice Cooper"
console.log(user.fullName)
```

### 45 - 原型继承

- 对象有一个特殊的隐藏属性 `[[Prototype]]`，它要么为 `null` 要么就是对另一个对象的引用，该对象被称为原型。

```javascript
// 将 animal 设置为 rabbit 的原型
// rabbit 的原型是从 animal 继承而来的
let animal = {
  eats: true,
}

let rabbit = {
  jumps: true,
}

// 设置 rabbit.[[Prototype]] = animal
rabbit.__proto__ = animal

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// }

console.log(rabbit.eats)
console.log(rabbit.jumps)
```

- 从对象中读取一个缺失的属性时，JS 会自动从原型中获取该属性。
- 引用不能形成闭环，如果试图在一个闭环中分配 `__proto__`，JS 会抛出错误。
- `__proto__` 的值可以是对象，也可以是 `null`，而其他的类型都会被忽略。
- `__proto__` 是 `[[Prototype]]` 的因历史原因而留下来的 `getter/setter`
- 建议应该使用函数 `Object.getPrototypeOf/Object.setPrototypeOf` 来取代 `__proto__` 的 `get/set` 原型。
- 只能有一个 `[[Prototype]]`，一个对象不能从其他两个对象获得继承。
- 无论在哪里找到方法，在一个对象还是在原型中，`this` 始终是点符号 `.` 前面的对象（调用者）
- 当继承的对象运行继承的方法时，它们将仅修改自己的状态，而不会修改大对象的状态。
- 方法是共享的，但对象状态不是。
- 几乎所有键/值获取方法都会忽略继承的属性，`for..in` 循环会迭代继承的属性。

| 方法 | 描述 |
| --- | --- |
| obj.hasOwnProperty(key) | 如果 obj 具有自己的（非继承的）名为 key 的属性，则返回 true |

```javascript
let animal = {
  eats: true,
}

let rabbit = {
  jumps: true,
  __proto__: animal,
}

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop)

  if (isOwn) {
    alert(`Our: ${prop}`)
  } else {
    alert(`Inherited: ${prop}`)
  }
}
```

### 46 - F.prototype

- `F.prototype` 属性仅在 `new F` 被调用时使用，它为新对象的 `[[Prototype]]` 赋值。
- `F.prototype` 的值要么是一个对象，要么就是 `null` 其他值都不起作用。
- `prototype` 属性仅当设置在一个构造函数上，并通过 `new` 调用时，才具有这种特殊的影响。
- 默认情况下，所有函数都有 `F.prototype = {constructor：F}` 所以可以通过访问它的 `constructor` 属性来获取一个对象的构造器，属性 `constructor` 指向函数自身，当有一个对象但不知道它使用了哪个构造器（例如它来自第三方库），并且需要创建另一个类似的对象时，用这种方法就很方便 `F.prototype.constructor`。

```javascript
// 通过构造函数创建的对象设置 [[Prototype]] 的方法
let animal = {
  eats: true,
}

function Rabbit(name) {
  this.name = name
}

// 当创建了一个 new Rabbit 时，把它的 [[Prototype]] 赋值为 animal
Rabbit.prototype = animal

// rabbit.__proto__ == animal
let rabbit = new Rabbit("White Rabbit")

console.log(rabbit.eats)  // true
```

### 47 - 原生的原型

- 所有的内建对象都遵循相同的模式：方法都存储在 `prototype` 中，对象本身只存储数据，原始数据类型也将方法存储在包装器对象的 `prototype` 中。
- `obj = {}` 和 `obj = new Object()` 是一个意思，其中 `Object` 就是一个内建的对象构造函数，其自身的 `prototype` 指向一个带有 `toString` 和其他方法的一个巨大的对象。
- `Array`、`Date`、`Function` 及其他，都在 `prototype` 上挂载了方法。
- 访问基本数据类型的属性，那么临时包装器对象将会通过内建的构造器 `String`、`Number` 和 `Boolean` 被创建。它们提供操作字符串、数字和布尔值的方法然后消失。
- 值 `null` 和 `undefined` 没有对象包装器。
- 修改原生原型 Polyfilling 是一个术语，表示某个方法在 JS 规范中已存在，但是特定的 JS 引擎尚不支持该方法，那么可以通过手动实现它，并用以填充内建原型。

```javascript
console.dir([1, 2, 3])

// 原型借用
let obj = {
  0: "Hello",
  1: "xiaofan",
  length: 2,
}

obj.join = Array.prototype.join

console.log(obj.join(", "))
```

### 48 - 原型方法

| 方法 | 描述 |
| --- | --- |
| Object.getPrototypeOf(obj) | 返回对象 obj 的 [[Prototype]] |
| Object.setPrototypeOf(obj, proto) | 将对象 obj 的 [[Prototype]] 设置为 proto |
| Object.create(proto, [descriptors]) | 利用给定的 proto 作为 [[Prototype]] 和可选的属性描述来创建一个空对象 |

```javascript
let animal = {
  eats: true,
}

// 创建一个以 animal 为原型的新对象，与 {__proto__: animal} 相同
let rabbit = Object.create(animal)

alert(rabbit.eats)
alert(Object.getPrototypeOf(rabbit) === animal)
Object.setPrototypeOf(rabbit, {})
```

- `Object.create()` 方法更强大，因为它有一个可选的第二参数，属性描述器，可以在此处为新对象提供额外的属性。
- 使用描述器创建的属性，它的标识默认是 `false`

```javascript
// 更加强大的准确拷贝（浅拷贝）
let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
)
```

**注意点：**
- `__proto__` 不是对象的属性，而是 `Object.prototype` 的访问器属性。
- `__proto__` 是一种访问 `[[Prototype]]` 的方式，而不是 `[[prototype]]` 本身。
- 大多数与对象相关的方法都是 `Object.something(...)`，例如 `Object.keys(obj)`，它们不在 `prototype` 中。
![原型链.png](https://pic.img.ski/1672816523.png)

### 49 - Class

- 在 JS 中，类是一种函数。
- Class 是用于创建对象的可扩展的程序代码模版，它为对象提供了状态（成员变量）的初始值和行为（成员函数或方法）的实现。
- 类的方法之间没有逗号。

```javascript
class User {
  constructor(name) { this.name = name }
  sayHi() { alert(this.name) }
}

// Class 是一个函数
console.log(typeof User)

// 更确切地说是 constructor 方法
console.log(User === User.prototype.constructor)

// 方法在 User.prototype 中
console.log(User.prototype.sayHi)

// 在原型中实际上有两个方法
console.log(Object.getOwnPropertyNames(User.prototype))  // ['constructor', 'sayHi']
```

- 类总是使用 `"use strict"`
- 类的方法不可枚举。
- 类字段的不同之处在于，它们会在每个独立对象中被设置，而不是设在 `User.prototype`，可以用于函数绑定。
- 通过 `class` 创建的函数具有特殊的内部属性标记 `[[IsClassConstructor]]: true` 因此它与手动创建并不完全相同。

```javascript
// 类表达式
// class 之后可以跟一个名字，只有内部可见
let User = class {
  sayHi() {
    console.log("Hello")
  }
}

// get / set
class User {
  constructor(name) {
    // 调用 setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.")
      return
    }
    this._name = value
  }
}
```

### 50 - 类继承

- 类继承是一个类扩展另一个类的一种方式。
- 类语法不仅允许指定一个类，在 `extends` 后可以指定任意表达式。

```javascript
function f(phrase) {
  return class {
    sayHi() { console.log(phrase) }
  }
}

class User extends f("Hello") {}

new User().sayHi()  // Hello
```

- 执行 `super.method(...)` 来调用一个父类方法。
- 执行 `super(...)` 来调用一个父类 `constructor`（只能在 `constructor` 中）
- 箭头函数没有 `super`，如果被访问，它会从外部函数获取。

```javascript
// 当继承时没有写自己的 constructor
class Rabbit extends Animal {
  // 为没有自己的 constructor 的扩展类生成的
  constructor(...args) {
    super(...args)
  }
}
```

- 继承类的 `constructor` 必须调用 `super(...)`，并且一定要在使用 `this` 之前调用。
- 派生类的 `constructor` 必须调用 `super()`，否则 `this` 不会被定义。

```javascript
class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name)
    this.earLength = earLength
  }

  // ...
}
```

- 当父类构造器在派生的类中被调用时，它会使用被重写的方法。
- 父类构造器总是会使用它自己字段的值，而不是被重写的那一个。
- 类字段初始化，对于基类（还未继承任何东西的那种），在构造函数调用前初始化，对于派生类，在 `super()` 后立刻初始化。
- 当一个函数被定义为类或者对象方法时，它的 `[[HomeObject]]` 属性就成为了该对象，然后 `super` （仅用于）使用它来解析父原型及其方法。
- `[[HomeObject]]` 是为类和普通对象中的方法定义的，不是函数属性。

### 51 - 静态属性与方法

- 静态方法被用于实现属于整个类的功能，它与具体的类实例无关。
- 把一个方法作为一个整体赋值给类，这样的方法被称为静态的（static）
- 通常静态方法用于实现属于整个类，但不属于该类任何特定对象的函数。
- 静态方法也被用于与数据库相关的公共类，可以用于搜索/保存/删除数据库中的条目。
- 静态方法可以在类上调用，而不是在单个对象上。
- 静态属性和方法是可被继承的。
- 内建的 `Object` 构造函数 `Object.__proto__ === Function.prototype`
- class Rabbit：`Rabbit.__proto__ === Function.prototype`
- class Rabbit extends Object： `Rabbit.__proto__ === Object`

```javascript
// 静态属性
class Article {
  static publisher = "levi Ding"
}

console.log(Article.publisher)
```

### 52 - 私有的与受保护的

- 内部接口：可以通过该类的其他方法访问，但不能从外部访问的方法和属性。
- 外部接口：可以从类的外部访问的方法和属性。
- 公有的：可从任何地方访问，它们构成了外部接口。
- 私有的：只能从类的内部访问，这些用于内部接口。
- 受保护的：（不是JS语言级别实现的）私有的，但可以从继承的类进行访问。
- 受保护的属性通常以下划线 `_` 作为前缀。

```javascript
// 受保护的
class CoffeeMachine {
  _waterAmount = 0

  set waterAmount(value) {
    if (value < 0) {
      value = 0
    }
    this._waterAmount = value
  }

  get waterAmount() {
    return this._waterAmount
  }

  constructor(power) {
    this._power = power
  }

  // 设置为只读 没有 setter
  get power() {
    return this._power
  }
}

let coffeeMachine = new CoffeeMachine(100)

coffeeMachine.waterAmount = -10
console.log(coffeeMachine.waterAmount)

console.log(coffeeMachine.power)
coffeeMachine.power = 250
console.log(coffeeMachine.power)
```

- 新增语言级私有语法，私有属性和方法应该以 `#` 开头，它们只在类的内部可被访问，无法从外部或从继承的类中访问它。
- 私有字段与公共字段不会发生冲突，可以同时拥有私有的 `#waterAmount` 和公共的 `waterAmount` 字段。
- 私有字段不能通过 `this[name]` 访问。

### 53 - 扩展内建类

- 内建的方法例如 `filter`、`map` 等，返回的正是子类 `PowerArray` 的新对象，它们内部使用了对象的 `constructor` 属性来实现这一功能。
- 添加一个特殊的静态 getter `Symbol.species`，如果存在，则应返回 JS 在内部用来在 `map` 和 `filter` 等方法中创建新实体的 `constructor`
- 内建类却是一个例外，它们相互间不继承静态方法。
- `Date` 和 `Object` 之间没有连结，它们是独立的，只有 `Date.prototype` 继承自 `Object.prototype`

### 54 - 类检查

- `instanceof` 操作符用于检查一个对象是否属于某个特定的 Class，同时它还考虑了继承。
- `instanceof` 并不关心函数，而是关心函数的与原型链匹配的 `prototype`，真正决定类型的是 `prototype`，而不是构造函数。
- 可以将 `obj instanceof Class` 检查改为 `Class.prototype.isPrototypeOf(obj)`
- 使用特殊的对象属性 `Symbol.toStringTag` 自定义对象的 `toString` 方法的行为：

```javascript
let user = {
  [Symbol.toStringTag]: "User"
}

alert({}.toString.call(user))
```

- 类型检查方法：

| 方法 | 用于 | 返回值 |
| --- | --- | --- |
| typeof | 原始数据类型 | string |
| {}.toString | 原始数据类型、内建对象、包含 Symbol.toStringTag 属性的对象 | string |
| instanceof | 对象，考虑继承时更出色 | true/false |

- 多态性（polymorphic）的函数，该函数根据参数的类型对参数进行不同的处理。

### 55 - Mixin 模式

- Mixin 模式是一个包含可被其他类使用而无需继承的方法的类。
- JS 不支持多重继承，但是可以通过将方法拷贝到原型中来实现 Mixin

```javascript
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`)
  },
  sayBye() {
    console.log(`Bye ${this.name}`)
  }
}

class User {
  constructor(name) {
    this.name = name
  }
}

// 拷贝方法
Object.assign(User.prototype, sayHiMixin)

new User("Dude").sayHi()  // Hello Dude
```

| 方法 | 参数 | 描述 |
| --- | --- | --- |
| .trigger(name, [...data]) | 事件名称， 带有事件数据的其他参数 | 在发生重要的事情时生成一个事件 |
| .on(name, handler) | 给定的事件， 监听器函数 | 为具有给定名称的事件添加 handler 函数作为监听器，当具有给定 name 的事件触发时将调用该方法，并从 .trigger 调用中获取参数 |
| .off(name, handler) | 删除 handler 监听器 |

```javascript
class Menu {
  choose(value) {
    this.trigger("select", value)
  }
}
// 添加带有事件相关方法的 mixin
Object.assign(Menu.prototype, eventMixin)

let menu = new Menu()

// 添加一个事件处理程序（handler），在被选择时被调用：
menu.on("select", value => alert(`Value selected: ${value}`))

// 触发事件 => 运行上述的事件处理程序（handler）并显示：
// 被选中的值：123
menu.choose("123")
```

### 56 - 错误处理

- `try...catch...` 首先执行 `try {...}` 中的代码，如果这里没有错误则忽略 `catch (err)`，即执行到 `try` 的末尾并跳过 `catch` 继续执行；如果这里出现错误，则 `try` 执行停止，控制流转向 `catch (err)` 的开头，变量 `err`（可以使用任何名称）将包含一个 `error` 对象，该对象包含了所发生事件的详细信息。
- `try...catch...` 仅对运行时的 `error` 有效，只能处理有效代码中出现的错误，这类错误被称为运行时的错误（runtime errors），有时被称为异常（exceptions）
- 发生错误时，JS 生成一个包含有关其详细信息的对象，然后将该对象作为参数传递给 `catch`
- `error` 对象的常用属性有 `name`、`message`、`stack`
- `throw` 操作符会生成一个 `error` 对象，在 `try` 中不符合要求时主动抛出一个异常。
- JS 中有很多内建的标准 `error` 的构造器 `Error`（错误）、`SyntaxError`（语法错误）、`ReferenceError`（引用错误）、`TypeError`（类型错误） 等，也可以使用它们来创建 `error` 对象。

```javascript
let error = new Error(message)
let error = new SyntaxError(message)
let error = new ReferenceError(message)
// ...
```

- 再次抛出时 `catch` 应该只处理它知道的 `error`，并抛出所有其他 `error`，可以接由外部的 `try...catch` 处理。
- `try...catch...finally...`

```javascript
try {
  ... 尝试执行的代码 ...
} catch (err) {
  ... 处理 error ...
} finally {
  ... 总是会执行的代码 ...
}
```

- `finally` 子句适用于 `try...catch` 的任何出口，这包括显式的 `return`，`finally` 会在控制转向外部代码前被执行，在跳出之前需要执行 `finally` 中的代码。
- 全局 `catch` 将一个函数赋值给特殊的 `window.onerror` 属性，该函数将在发生未捕获的 `error` 时执行。

```javascript
// 自定义错误
class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = "ValidationError"
  }
}

// 用法
function readUser(json) {
  let user = JSON.parse(json)

  if (!user.age) {
    throw new ValidationError("No field: age")
  }

  if (!user.name) {
    throw new ValidationError("No field: name")
  }

  return user
}

// try..catch 的工作示例

try {
  let user = readUser('{ "age": 25 }')
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message)
  } else if (err instanceof SyntaxError) {
    alert("JSON Syntax Error: " + err.message)
  } else {
    // 未知的 error，再次抛出
    throw err
  }
}
```

### 57 - 回调

- 基于回调的异步编程风格，异步执行某项功能的函数应该提供一个 Callback 参数用于在相应事件完成时调用，可以在回调中回调。

```javascript
function loadScript(src, callback) {
  let script = document.createElement('script')
  script.src = src

  script.onload = () => callback(null, script)
  script.onerror = () => callback(new Error(`Script load error for ${src}`))

  document.head.append(script)
}

// Error 优先回调
loadScript('/my/script.js', function(error, script) {
  if (error) {
    // 处理 error
  } else {
    // 脚本加载成功
  }
})
```

- 回调地狱或厄运金字塔是指过多的嵌套调用，可以通过使每个行为都成为一个独立的函数来尝试减轻这种问题，最好的方法之一就是使用 Promise

### 58 - Promise

- Promise 是将生产者代码和消费者代码连接在一起的一个特殊的 JS 对象，它表示一个异步操作的最终结果与值。
- Promise 使得异步方法可以像同步方法那样返回值，但异步方法并不会立即返回最终的值，而是会返回一个 Promise 对象，以便在未来某个时候把值交给使用者。
- Promise 通常被用于网络请求。

```javascript
// Promise 对象的构造器语法
let promise = new Promise(function(resolve, reject) {
  // executor（生产者代码）
})
```

- 传递给 `new Promise()` 的函数被称为 executor，当 `new Promise()` 被创建 executor 会自动运行，它包含最终应产出结果的生产者代码，它的参数 `resolve` 和 `reject` 是由 JS 自身提供的回调。
- 当 executor 获得了结果，将调用以下回调之一：`resolve(value)` 如果任务成功完成并带有结果 value，`reject(error)` 如果出现了 error 即为 error 对象。总之 executor 会自动运行并尝试执行一项工作，尝试结束后，如果成功则调用 `resolve(value)` 如果出现 error 则调用 `reject(error)`
- 构造器返回的 Promise 对象具有以下内部属性：`state` 最初是 pending，然后在 `resolve(value)` 被调用时变为 fulfilled，在 `reject(error)` 被调用时变为 rejected；`result` 最初是 undefined，然后在 `resolve(value)` 被调用时变为 value，在 `reject(error)` 被调用时变为 error
- executor 只能调用一个 `resolve(value)` 或一个 `reject(error)`，任何状态的更改都是最终的，`resolve/reject` 只需要一个参数（或不包含任何参数）并且将忽略额外的参数。

```javascript
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
)
```

- `.then()` 的第一个参数是一个函数，该函数将在 promise resolved 且接收到结果后执行，`.then()` 的第二个参数也是一个函数，该函数将在 promise rejected 且接收到 error 信息后执行。

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000)
})

// .catch(f) 与 promise.then(null, f) 一样
promise.catch(alert)
```

- `.catch()` 调用是 `.then(null, f)` 的完全的模拟，它只是一个简写形式。
- `.finally()` 类似于 `.then(f, f)`，因为当 promise settled 时 f 就会执行，即无论 Promise 被 `resolve` 还是 `reject`，`finally` 的功能是设置一个处理程序在前面的操作完成后，执行清理/终结。

```javascript
new Promise((resolve, reject) => {
  /* 做一些需要时间的事儿，之后调用可能会 resolve 也可能会 reject */
})

// 在 promise 为 settled 时运行，无论成功与否
.finally(() => stop loading indicator)
// 所以，加载指示器（loading indicator）始终会在继续之前停止
.then(result => show result, err => show error)
```

- `.finally()` 处理程序没有参数，`.finally()` 处理程序也不应该返回任何内容。
- `.finally()` 处理程序没有得到前一个处理程序的结果（它没有参数），而这个结果被传递给了下一个合适的处理程序，如果 `.finally()` 处理程序返回了一些内容，那么这些内容会被忽略，当 `.finally()` 抛出 error 时，执行将转到最近的 error 的处理程序。
- 如果 Promise 为 pending 状态，`.then()/catch()/finally()` 处理程序将等待它的结果。

**Promise链**

- 作为一个好的方法，异步行为应该始终返回一个 Promise
- `.then()` 中所使用的处理程序可以创建并返回一个 Promise，返回 Promise 使能够构建异步行为链，确切地说处理程序返回的不完全是一个 Promise，而是返回的被称为 thenable 对象，一个具有方法 `.then()` 的任意对象，它会被当做一个 Promise 来对待。
- 在 executor 周围的隐式 `try..catch...` 自动捕获了 error，并将其变为 rejected promise，`.then()` 处理程序中 `throw()`，这意味着 Promise 被 rejected，因此控制权移交至最近的 error 处理程序。
- 在 `.catch()` 中 `throw()` 那么控制权就会被移交到下一个最近的 error 处理程序，处理该 error 并正常完成，那么它将继续到最近的成功的 `.then()` 处理程序。
- 捕获所有 error 的最简单的方法是将 `.catch()` 附加到链的末尾。
- 在任何情况下都应该有 `unhandledrejection` 事件处理程序，以跟踪未处理的 error 并告知用户（可能还有的服务器）有关信息，以使应用程序永远不会死掉。
- 总结，如果 `.then()` 或 `.catch()` `.finally()` 处理程序返回一个 Promise，那么链的其余部分将会等待，直到它状态变为 settled，当它被 settled 后，其 result 或 error 将被进一步传递下去。

```javascript
window.addEventListener('unhandledrejection', function(event) {
  // 这个事件对象有两个特殊的属性：
  alert(event.promise)  // [object Promise] - 生成该全局 error 的 promise
  alert(event.reason)  // Error: Whoops! - 未处理的 error 对象
})

// 没有用来处理 error 的 catch
new Promise(function() {
  throw new Error("Whoops!")
})
```

**Fetch()**

- `fetch(url)` 方法从远程服务器加载用户信息。
- `fetch(url)` 返回的 response 对象还包括 `response.json()` 方法，该方法读取远程数据并将其解析为 JSON，`response.text()` 方法，当全部文字内容从远程服务器下载完成后，它会返回一个 Promise，该 Promise 以刚刚下载完成的这个文本作为 result 进行 `resolve()`

### 59 - Promise API

| 方法 | 参数 | 描述 |
| --- | --- | --- |
| Promise.all(iterable) | 由 Promise 项组成的数组 | 并行执行多个 Promise 并等待所有 Promise 准备就绪，如果出现 error，其他 Promise 将被忽略，返回存放它们结果的数组 |
| Promise.allSettled(iterable) | 由 Promise 项组成的数组 | 等待所有的 Promise 被 settle 无论结果如何，返回结果的对象数组 |
| Promise.race(iterable) | 由 Promise 项组成的数组 | 只等待第一个 settled 的 Promise 并获取其结果，将其 result/error 作为结果返回 |
| Promise.any(iterable) | 由 Promise 项组成的数组 | 等待第一个 fulfilled 的 Promise，并将这个 fulfilled 的 Promise 返回，如果给出的 Promise 都 rejected，那么则返回 rejected 的 Promise 和 AggregateError 错误类型的 error 实例，并将其结果作为结果返回 |
| Promise.resolve(value) | 结果数据 | 用结果 value 创建一个 resolved 的 Promise |
| Promise.reject(error) | 错误对象 | 用 error 创建一个 rejected 的 Promise |

- 一个常见的技巧是，将一个任务数据数组映射到一个 Promise 数组，然后将其包装到 `Promise.all()`
- 任意一个 Promise 被 `reject()`，由 `Promise.all()` 返回的 Promise 就会立即 `reject()`，并且带有的就是这个 error，如果出现 error，其他 Promise 将被忽略。
- `Promise.all()` 接受含有 Promise 项的可迭代对象（大多数情况下是数组）作为参数，但是如果这些对象中的任何一个不是 Promise，那么它将被按原样传递给结果数组。
- `Promise.allSettled()`，对于每个 Promise，都得到了其状态 `status` 和 `value/reason`，以对象数组的形式返回它们的结果: `status` 为 fulfilled 或 rejected、`value`（如果为 fulfilled）或 `reason`（如果为 rejected）
- Promisification 是指将一个接受回调的函数转换为一个返回 Promise 的函数，但不是回调的完全替代。
- 在实际开发中，可能需要 promisify 很多函数，所以使用一个 helper（辅助函数）很有意义，将其称为 `promisify(f)`：它接受一个需要被 promisify 的函数 f，并返回一个包装函数。

```javascript
function promisify(f) {
  // 返回一个包装函数
  return function (...args) {
    return new Promise((resolve, reject) => {
      // 对 f 的自定义的回调
      function callback(err, result) {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      }

      // 将自定义的回调附加到 f 参数的末尾
      args.push(callback)

      // 调用原始的函数
      f.call(this, ...args)
    })
  }
}

let loadScriptPromise = promisify(loadScript)
loadScriptPromise(...).then(...)
```

- Promisification 仅适用于调用一次回调的函数，进一步的调用将被忽略。

### 60 - Promise 微任务

- Promise 处理始终是异步的，内部队列 PromiseJobs，通常被称为微任务队列（microtask queue）
- 当一个 Promise 准备就绪时，它的 `.then()/catch()/finally()` 处理程序就会被放入队列中，但是它们不会立即被执行，当 JS 引擎执行完当前的代码，它会从队列中获取任务并执行它。
- 如果需要确保一段代码在 `.then()/catch()/finally()` 之后被执行，可以将它添加到链式调用的 `.then()` 中。

### 61 - async/await

- `async/await` 是以更舒适的方式使用 Promise 的一种特殊语法。

```javascript
async function f() {
  return 1
}
```

- 加上 `async` 的函数总是返回一个 Promise，其他值将自动被包装在一个 resolved 的 Promise 中。

```javascript
// 只在 async 函数内工作
let value = await promise
```

- `await` 让 JS 引擎等待直到 Promise 完成并返回结果，不能在普通函数中使用 `await`
- `await` 实际上会暂停函数的执行，直到 Promise 状态变 settled，然后以 Promise 的结果继续执行。
- 现代浏览器在 modules 里允许顶层的 `await`，也可以包装到匿名的异步函数中。
- `await` 允许使用 thenable 对象（那些具有可调用的 `.then()` 方法的对象）
- 当使用 `async/await` 时，几乎就不会用到 `.then()` 了，因为 `await` 处理了等待，并且使用常规的 `try..catch...` 而不是 `.catch()` 在所有 `async` 函数之外，在语法上就不能使用 `await` 了，所以这时候通常的做法是添加 `.then()/catch()` 来处理最终的结果或掉出来的 error

### 62 - Generator

- Generator 可以按需一个接一个地返回 `yield` 多个值，它们可与 iterable 完美配合使用，从而轻松地创建数据流。

```javascript
function* generateSequence() {
  yield 1
  yield 2
  return 3
}

let generator = generateSequence()
let one = generator.next()  // {value: 1, done: false}
let two = generator.next()  // {value: 2, done: false}
let three = generator.next()  // {value: 3, done: true}
```

- 此类函数被调用时，它不会运行其代码，而是返回一个被称为 generator object 的特殊对象（生成器对象）来管理执行流程。
- Generator 的主要方法就是 `.next()` 其结果始终是一个具有两个属性的对象：`value` 产出的的值，`done` 如果 Generator 函数已执行完成则为 true，否则为 false
- `function* f()` 或 `function *f()` 两种语法都是对的，但更倾向第一种。
- Generator 是可迭代的，当 `{..., done: true}` 时 `for..of...` 循环会忽略最后一个 value，想要通过 `for..of...` 循环显示所有的结果必须使用 `yield` 返回它们，另外可以使用 iterator 的所有相关功能，例如 spread 语法 `...`
- Generator 组合是一个特殊功能，它允许透明地将 Generator 彼此嵌入到一起，使用 `yield*` 这个特殊的语法来将一个 Generator 嵌入组合到另一个 Generator 中。
- `yield` 是一条双向路，它不仅可以向外返回结果，而且还可以将外部的值传递到 Generator 内。

```javascript
// for (let value of generator) {
//   console.log(value)
// }

function* gen() {
  let result = yield "2 + 2 = ?"

  console.log(result)
}

let generators = gen()

let question = generators.next().value

generators.next(4)
```

- 向 `yield` 传递一个 error，应该调用 `generator.throw(err)` 在这种情况下 error 将被抛到对应的 `yield` 所在的那一行。
- `generator.return(value)` 完成 Generator 的执行并返回给定的 value，在已完成的 Generator 上再次使用 `generator.return()`，它将再次返回该值。

### 63 - 异步迭代与 Generator

- 异步迭代允许对按需通过异步请求而得到的数据进行迭代。
- 异步可迭代对象使用 `Symbol.asyncIterator` 取代 `Symbol.iterator` `next()` 方法应该返回一个 Promise 且带有下一个值，状态为 fulfilled 关键字 `async` 可以实现这一点，可以简单地使用 `async next()` ，然后应该使用 `for await (let item of iterable)` 循环来迭代这样的对象。
- Spread 语法 `...` 无法异步工作。

```javascript
let range = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,

      async next() {
        // 可以在 async next 内部使用 await
        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      },
    }
  },
}

(async () => {
  for await (let value of range) {
    console.log(value)  // 1 2 3 4 5
  }
})()
```

- 在 function 前面加上 `async` 这即可使 Generator 变为异步的，使用 `for await (...)` 来遍历它。
- 异步 Generator 和常规的 Generator 在内部是有区别的，对于异步 Generator `generator.next()` 方法是异步的，它返回 Promise，在一个常规的 Generator 中，使用 `result = generator.next()` 来获得值，但在一个异步 Generator 中，应该添加 `await` 关键字。

```javascript
async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    yield i
  }
}

(async () => {
  let generator = generateSequence(1, 5)
  for await (let value of generator) {
    console.log(value)  // 1 2 3 4 5
  }
})()
```

### 64 - 模块

- 随着应用越来越大，想要将其拆分成多个文件，即所谓的模块（module）。一个模块可以包含用于特定目的的类或函数库，一个模块就是一个文件，一个脚本就是一个模块。
- `export` 关键字标记了可以从当前模块外部访问的变量和函数。
- `import` 关键字允许从其他模块导入功能。

```javascript
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`)
}
```

```javascript
// 📁 main.js
import { sayHi } from './sayHi.js'

console.log(sayHi)
sayHi('John')
```

- 使用 `<script type="module">` 特性来告诉浏览器，此脚本应该被当作模块来对待。
- 模块只通过 HTTP(s) 工作，而非本地。
- 模块始终在严格模式下运行。
- 每个模块都有自己的顶级作用域，一个模块中的顶级作用域变量和函数在其他脚本中是不可见的，模块应该 `export` 它们想要被外部访问的内容，并 `import` 它们所需要的内容。
- 可以通过将变量显式地分配给 `window` 的一个属性，使其成为窗口级别的全局变量，这样所有脚本都会看到它，无论脚本是否带有 `type="module"`，但应尽量避免创建全局变量。
- 模块代码仅在第一次导入时被解析。
- `import.meta` 对象包含关于当前模块的信息，它的内容取决于其所在的环境。
- 在一个模块中顶级 this 是 undefined，非模块脚本的顶级 this 是全局对象。
- 在浏览器中，模块脚本是被延迟的，所以要等到 HTML 文档被处理完成才会执行它。
- 对于非模块脚本 `async` 特性仅适用于外部脚本，异步脚本会在准备好后立即运行，独立于其他脚本或 HTML 文档，对于模块脚本，它也适用于内联脚本。
- 在浏览器中 `import` 必须给出相对或绝对的 URL 路径，没有任何路径的模块被称为裸模块。

### 65 - 导出与导入

- 导出（export）和导入（import）
- 可以通过在声明之前放置 `export` 来标记任意声明为导出，无论声明的是变量，函数还是类都可以。

```javascript
// 导出数组
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// 导出 const 声明的变量
export const MODULES_BECAME_STANDARD_YEAR = 2020

// 导出类
export class User {
  constructor(name) {
    this.name = name
  }
}
```

- 导出与声明可以分开。

```javascript
// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`)
}

function sayBye(user) {
  alert(`Bye, ${user}!`)
}

// 导出变量列表
export {sayHi, sayBye}
```

- 把要导入的东西列在花括号 `import {...}` 中。

```javascript
// 📁 main.js
import {sayHi, sayBye} from './say.js'

sayHi('John')
sayBye('John')
```

- 如果有很多要导入的内容，可以使用 `import * as <obj>` 将所有内容导入为一个对象。

```javascript
// 📁 main.js
import * as say from './say.js'

say.sayHi('John')
say.sayBye('John')
```

- `import as`，可以使用 `as` 让导入具有不同的名字 `export as` 与之类似。

```javascript
...
export {sayHi as hi, sayBye as bye}
```

- 模块提供了一个特殊的默认导出 `export default` 语法，将 `export default` 放在要导出的实体前，每个文件应该只有一个 `export default`，然后将其导入而不需要花括号。
- 在某些情况下 `default` 关键词被用于引用默认的导出。
- 重新导出，语法 `export ... from ...` 允许导入内容，并立即将其导出。
- 要重新导出默认导出，必须明确写出 `export {default as User}` `export * from './user.js'` 重新导出只导出了命名的导出，但是忽略了默认的导出。
- 动态导入 `import(module)` 表达式加载模块并返回一个 Promise，该 Promise resolve 为一个包含其所有导出的模块对象，可以在代码中的任意位置调用这个表达式，它不是一个函数。

```javascript
let modulePath = prompt("Which module to load?")

import(modulePath)
  .then(obj => <module object>)
  .catch(err => <loading error, e.g. if no such module>)
```

- 动态导入在常规脚本中工作时不需要 `script type="module"`

### 66 - Proxy 与 Reflect

- Proxy 对象包装另一个对象并拦截诸如读取/写入属性和其他操作，可以选择自行处理它们，或者透明地允许该对象处理它们，Proxy 是对象的包装器，将代理上的操作转发到对象，并可以选择捕获其中一些操作。

```javascript
let proxy = new Proxy(target, handler)
```

- `target` 是要包装的对象，可以是任何东西，包括函数。
- `handler` 是代理配置，带有捕捉器（traps，即拦截操作的方法）的对象，比如 `get` 捕捉器用于读取 `target` 的属性，`set` 捕捉器用于写入 `target` 的属性。
- 没有捕捉器时所有对 Proxy 的操作都直接转发给了 `target`，没有任何捕捉器 Proxy 是一个 `target` 的透明包装器。
- 常见的捕捉器是用于读取/写入的属性，要拦截读取操作 `handler` 应该有 `get(target, property, receiver)` 方法。
- `get(target, property, receiver)`

| 参数 | 描述 |
| --- | --- |
| target | 目标对象 |
| property | 目标属性名 |
| receiver | 当目标属性是 getter 访问器属性则 receiver 就是本次读取属性所在的 this 对象 |

- 代理应该在所有地方都完全替代目标对象，目标对象被代理后，任何人都不应该再引用目标对象。

```javascript
let numbers = [0, 1, 2]

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop]
    } else {
      return 0
    }
  }
})

console.log(numbers[1])  // 1
console.log(numbers[123])  // 0
```

- 当写入属性时 `set` 捕捉器被触发 `set(target, property, value, receiver)`

| 参数 | 描述 |
| --- | --- |
| target | 目标对象 |
| property | 目标属性名称 |
| value | 目标属性的值 |
| receiver | 与 get 捕捉器类似，仅与 setter 访问器属性相关，对于 set 操作，它必须在成功写入时返回 true |

```javascript
let numbers = []

numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if (typeof val == 'number') {
      target[prop] = val
      return true
    } else {
      return false
    }
  }
})

numbers.push(1)
console.log(numbers)  // Proxy {0: 1}

numbers.push("test")  // TypeError
```

- 使用 `ownKeys` 捕捉器拦截 `for..in...` 的遍历。
- 使用 `in` 操作符来检查一个数字是否在 `range` 范围内 `has` 捕捉器会拦截 `in` 调用。
- `apply(target, thisArg, args)` 捕捉器能使代理以函数的方式被调用。

| 参数 | 描述 |
| --- | --- |
| target | 目标对象 |
| thisArg | this 的值 |
| args | 参数列表 |

- Reflect 是一个内建对象，可简化 Proxy 的创建，Reflect 对象使调用这些内部方法成为了可能，它的方法是内部方法的最小包装。
- 对于每个可被 Proxy 捕获的内部方法，在 Reflect 中都有一个对应的方法，其名称和参数与 Proxy 捕捉器相同，所以可以使用 Reflect 来将操作转发给原始对象。

```javascript
let user = {
  name: "John"
}

user = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`)
    return Reflect.get(target, prop, receiver)
  },
  set(target, prop, val, receiver) {
    console.log(`SET ${prop}=${val}`)
    return Reflect.set(target, prop, val, receiver)
  }
})

let name = user.name  // 打印 GET name 返回 'John'
user.name = "Pete"  // 打印 SET name=Pete 返回 'Pete'
```

- 如果一个捕捉器想要将调用转发给对象，则只需使用相同的参数调用 Reflect 就足够了。
- 第三个参数 `receiver` 它保证将正确的 this 传递给 `getter`
- Reflect 调用的命名与捕捉器的命名完全相同。

```javascript
get(target, prop, receiver) {
  return Reflect.get(...arguments)
}
```

- 许多内建对象，都使用了所谓的内部插槽，内建方法可以直接访问它们，而不通过 `[[Get]]/[[Set]]` 内部方法，所以 Proxy 无法拦截它们，内建对象被代理后，代理对象没有这些内部插槽，因此内建方法将会失败，但是可以通过 Reflect 和 `.bind` 解决，内建 Array 没有使用内部插槽，代理数组时没有这种问题。

```javascript
class User {
  #name = "Guest"

  getName() {
    return this.#name
  }
}

let user = new User()

user = new Proxy(user, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments)
    return typeof value == 'function' ? value.bind(target) : value
  }
})

alert(user.getName())  // Guest
```

- Proxy 无法拦截严格相等性检查 ===，没有办法拦截对于对象的严格相等性检查，一个对象只严格等于其自身，没有其他值。
- 一个可撤销的代理是可以被禁用的代理，`Proxy.revocable()` 方法可以用来创建一个可撤销的代理对象。

```javascript
// 该调用返回一个带有 proxy 和 revoke 函数的对象以将其禁用
let {proxy, revoke} = Proxy.revocable(target, handler)
```

```javascript
let object = {
  data: "Valuable data"
}

let {proxy, revoke} = Proxy.revocable(object, {})

alert(proxy.data)  // Valuable data

revoke()

// proxy 不再工作
alert(proxy.data)  // TypeError
```

- `.revoke()` 的调用会从代理中删除对目标对象的所有内部引用，因此它们之间再无连接。

### 67 - Eval

- 现代编程中，已经很少使用 `eval()`
- 内建函数 `eval()` 允许执行一个代码字符串。

```javascript
let code = 'console.log("Hello")'
eval(code)  // Hello
```

- `eval()` 的结果是最后一条语句的结果，`eval()` 内的代码在当前词法环境中执行。
- 严格模式下 `eval()` 有属于自己的词法环境，因此不能从外部访问在 `eval()` 中声明的函数和变量，如果不启用严格模式，`eval()` 没有属于自己的词法环境，因此可以从外部访问变量。
- 如果 `eval()` 中的代码没有使用外部变量，请以 `window.eval()` 的形式调用 `eval()` 通过这种方式，该代码便会在全局作用域内执行。
- 如果 `eval()` 中的代码需要访问局部变量，可以使用 `new Function` 替代 `eval()`，并将它们作为参数传递。

### 68 - 柯里化

- 柯里化是一种函数的转换，是一种关于函数的高阶技术，指将一个函数从可调用的 `f(a, b, c)` 转换为可调用的 `f(a)(b)(c)`，柯里化不会调用函数，它只是对函数进行转换。

```javascript
function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b)
    }
  }
}

// 用法
function sum(a, b) {
  return a + b
}

let curriedSum = curry(sum)

alert(curriedSum(1)(2))  // 3
```

- `curry(func)` 的结果就是一个包装器 `function(a)`
- 柯里化要求函数具有固定数量的参数，使用 `...rest` 参数的函数，例如 `f(...args)` 不能以这种方式进行柯里化。
- 柯里化使得函数可以被多参数变体调用，JS 实现通常都保持该函数可以被正常调用，并且如果参数数量不足，则返回偏函数。

```javascript
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}
```

### 69 - Reference Type

- Reference Type 是 ECMA 中的一个规范类型，不能直接使用它，但它被用在 JS 语言内部。
- Reference Type 的值是一个三个值的组合(base, name, strict)，其中 base 是对象，name 是属性名，strict 在 use strict 模式下为 true
- `obj.method()` 语句中，点 `.` 返回的不是一个函数，而是一个特殊的 Reference Type 的值。
- Reference Type 是一个特殊的中间人内部类型，目的是从 `.` 传递信息给 `()` 调用，当 `()` 被在 Reference Type 上调用时，它们会接收到关于对象和对象的方法的完整信息，然后可以设置正确的 this。任何例如赋值 `hi = user.hi` 等其他的操作，都会将 Reference Type 作为一个整体丢弃掉，而会取 `user.hi`（一个函数）的值并继续传递，所以任何后续操作都丢失了 this，因此 this 的值仅在函数直接被通过点符号 `obj.method()` 或方括号 `obj[method]` 语法（此处它们作用相同）调用时才被正确传递，还有很多种解决这个问题的方式，例如 `func.bind()`

### 70 - 微任务与宏任务

- 浏览器中 JS 的执行流程和 Node.js 中的流程都是基于事件循环的，是一个在 JS 引擎等待任务、执行任务和进入休眠状态等待更多任务这几个状态之间转换的无限循环。
- 多个任务组成了一个队列，即所谓的宏任务队列，队列中的任务基于先进先出的原则执行。
- 引擎执行任务时永远不会进行渲染，如果任务执行需要很长一段时间也没关系，仅在任务完成后才会绘制对 DOM 的更改，如果一项任务执行花费的时间过长，浏览器将无法执行其他任务，例如处理用户事件。因此，在一定时间后，浏览器会抛出一个如页面未响应之类的警报，建议你终止这个任务，这种情况常发生在有大量复杂的计算或导致死循环的程序错误时。
- 每个宏任务之后，引擎会立即执行微任务队列中的所有任务，然后再执行其他的宏任务或渲染或进行其他任何操作。
- 微任务仅来自于的代码，它们通常是由 Promise 创建的，对 `.then()/catch()/finally()` 处理程序的执行会成为微任务，微任务也被用于 `async/await` 的幕后，因为它是 Promise 处理的另一种形式。
- 微任务会在执行任何其他事件处理或渲染或执行任何其他宏任务之前完成。
- 有一个特殊的函数 `queueMicrotask(func)` 它对 `func` 进行排队，以在微任务队列中执行。
- 安排一个新的宏任务，使用零延迟的 `setTimeout(f)`，它可被用于将繁重的计算任务拆分成多个部分，以使浏览器能够对用户事件作出反应，并在任务的各部分之间显示任务进度。此外，也被用于在事件处理程序中，将一个行为安排在事件被完全处理（冒泡完成）后。
- 安排一个新的微任务，使用 `queueMicrotask(f)`，Promise 处理程序也会通过微任务队列，在微任务之间没有 UI 或网络事件的处理，它们一个立即接一个地执行，所以可以使用 `queueMicrotask()` 来在保持环境状态一致的情况下，异步地执行一个函数。

## （二）DOM 与 BOM

### 01 - 介绍

- Window 对象（根），代表着浏览器窗口，该对象提供了控制浏览器窗口的方法；文档对象模型（Document Object Model）简称 DOM，将所有页面内容表示为可以修改的对象；浏览器对象模型（Browser Object Model）简称 BOM，表示由浏览器（主机环境）提供的用于处理文档之外的所有内容的其他对象。
- 按照 DOM 规范，必须具有 `<tbody>` 标签，但 HTML 文本可能会忽略它，然后浏览器在创建 DOM 时，自动地创建了 `<tbody>`
- HTML 中的所有内容，甚至注释，都会成为 DOM 的一部分。
- 每个 HTML 标签都是一个对象，标签内的文本也是一个对象，DOM 将 HTML 表示为标签的树形结构，每个树的节点都是一个对象，标签被称为元素节点，元素内的文本称为文本节点。
- 一共有 12 种节点类型，通常用到的是其中的 4 种。

| 类型 | 描述 |
| --- | --- |
| document | DOM 的入口点 |
| 元素节点 | HTML 标签 |
| 文本节点 | 标签中的文本、空格 |
| 注释节点 | 不会显示，但 JS 可以从 DOM 中读取 |

**关于 Node （节点）和 Element （元素）**

- Node 中包含不同类型的节点，Element 是 Node 的一种，Element 继承于 Node，具有 Node 的方法，Element 一定是 Node 而 Node 不一定是 Element
- Node 包括有：Element、Text、Comment...

**关于 NodeList 和 HTMLCollection**

- NodeList 是节点的集合，既包含元素节点，也包括文本节点、注释节点等；HTMLCollection 是元素的集合，只包含元素节点。

### 02 - 访问 DOM

- 对 DOM 的所有操作都是以 `document` 对象开始的。
- 如果一个脚本是在 `<head>` 中，那么脚本是访问不到 `document.body` 元素的，因为浏览器还没有读到它。
- `<html> == document.documentElement`
- `<body> == document.body`
- `<head> == document.head`

| 属性 | 描述 |
| --- | --- |
| Node.childNodes | 返回指定节点的子节点集合，该集合为即时更新的集合 |
| Node.firstChild | 返回指定节点的第一个子节点，如果无子节点，返回 null |
| Node.lastChild | 返回指定节点的最后一个子节点，如果无子节点，返回 null |
| Node.nextSibling | 返回其父节点的 childNodes 列表中的后一个节点，如果节点为最后一个节点，返回 null |
| Node.previousSibling | 返回其父节点的 childNodes 列表中的前一个节点，如果节点为第一个节点，返回 null |
| Node.parentNode | 返回指定的节点在 DOM 树中的父节点 |
| **方法** | **描述** |
| Node.hasChildNodes() | 检查指定节点是否有子节点 |

- `Node.childNodes` 的返回结果是一个集合，一个类数组的可迭代对象，可以使用 `for..of...` 来迭代它。

### 03 - 搜索 DOM

| 方法 | 描述 |
| --- | --- |
| Document.getElementById('id') | 匹配给定 ID 的元素，返回值是 Element 对象 |
| Document.getElementsByClassName('class') | 匹配给定 class 的元素，返回值是匹配元素的实时集合 HTMLCollection |
| Document.getElementsByTagName('tag') | 匹配给定标签的元素，返回值是匹配元素的实时集合 HTMLCollection |
| Document.getElementsByName('name') | 匹配给定 name 的节点，返回值是匹配节点的实时集合 NodeList |
| Document.querySelectorAll('selectors') | 匹配给定 CSS 选择器的节点，返回值是所有匹配节点的静态集合 NodeList |
| Document.querySelector('selectors') | 匹配给定 CSS 选择器的第一个元素，返回值是 Element 对象 |
| Element.matches('selectors') | 检查给定元素是否与给定的 CSS 选择器匹配，返回 true 或 false |
| Element.closest('selectors') | 查找给定元素的该 CSS 选择器的最近祖先，元素自身也会被搜索 |

- 不要使用以 ID 命名的全局变量来访问元素。
- `.getElementsBy*` 方法都会返回一个实时的（live）集合，这样的集合始终反映的是文档的当前状态，并且在文档发生更改时会自动更新。
- `.querySelector*` 返回的是一个静态的集合，像元素的固定数组。

### 04 - 节点属性

- 在规范中 DOM 类不是使用 JS 来描述的，而是一种特殊的接口描述语言（Interface description language），简写为 IDL
- 每个 DOM 节点都属于相应的内建类，DOM 节点是常规的 JS 对象，它们使用基于原型的类进行继承。
- `console.log(elem)` 显示元素的 DOM 树。
- `console.dir(elem)` 将元素显示为 DOM 对象，非常适合探索其属性。

| 属性 | 描述 |
| --- | --- |
| Node.nodeName | 返回当前节点的名称 |
| Element.tagName | 返回当前元素的名称 |
| Element.innerHTML | 获取或设置 HTML 语法表示的元素的后代 |
| Element.outerHTML | 获取或设置 HTML 语法表示的元素及其后代 |
| Element.innerText | 返回节点及其后代的渲染文本内容，只展示页面出现的 |
| Node.textContent | 返回节点及其后代的所有文本内容，包括 `<script>` 和 `<style>` 元素中的内容 |
| Element.data | 返回当前元素的值 |
| Node.nodeValue | 返回当前节点的值 |
| Element.hidden | 元素的可见性 |
| Element.value | 表单元素中的数据 |
| Element.href | 超链接元素中的地址 |
| Element.id | 元素的 ID |

### 05 - 特性和属性

- DOM 节点是常规的 JS 对象，可以更改它们。
- 当浏览器加载页面时，它会解析 HTML 并从中生成 DOM 对象。对于元素节点，大多数标准的 HTML 特性（attributes）会自动变成 DOM 对象的属性（properties），所以当一个元素有 id 或其他标准的特性，那么就会生成对应的 DOM 属性，但非标准的特性则不会，特性与属性映射并不是一一对应的。
- 所有特性都可以通过使用以下方法进行访问。

| 方法 | 描述 |
| --- | --- |
| Element.hasAttribute('name') | 检查特性是否存在 |
| Element.getAttribute('name') | 返回元素上指定的特性值 |
| Element.setAttribute('name', value) | 设置元素上指定的特性值 |
| Element.removeAttribute('name') | 移除元素上指定的特性值 |
| Element.attributes | 返回元素上指定特性的集合 |

- 特性的名称是大小写不敏感的，可以将任何东西赋值给特性，但是这些东西都会变成字符串类型的，而 DOM 属性不总是字符串类型的。
- Attributes 集合是可迭代对象，该对象将所有元素的特性（标准和非标准的）作为 `name` 和 `value` 属性存储在对象中。
- 当一个标准的特性被改变，对应的属性也会自动更新。

```html
<input type="text" />

<script>
  let input = document.querySelector('input')

  // 特性 => 属性
  input.setAttribute('id', 'id')
  // id（被更新了）
  alert(input.id)

  // 属性 => 特性
  input.id = 'newId'
  // newId（被更新了）
  alert(input.getAttribute('id'))
</script>
```

- 存在一些例外，例如 `input.value` 只能从特性同步到属性，反过来则不行，如果想从 HTML 中恢复原始值，那么该值就在特性中。
- 非标准的特性常常用于将自定义的数据从 HTML 传递到 JS，或者用于为 JS 标记 HTML 元素。

```html
<!-- 标记这个 div 以在这显示 "name" -->
<div show-info="name"></div>
<!-- 标记这个 div 以在这显示 "age" -->
<div show-info="age"></div>

<script>
  // 这段代码找到带有标记的元素，并显示需要的内容
  let user = {
    name: "Pete",
    age: 25
  }

  for(let div of document.querySelectorAll('[show-info]')) {
    // 在字段中插入相应的信息
    let field = div.getAttribute('show-info')
    // 首先 "name" 变为 Pete，然后 "age" 变为 25
    div.innerHTML = user[field]
  }
</script>
```

- 以 `data-` 开头的特性均被保留供程序员使用，它们可在 `dataset` 属性中使用。

```html
<body data-about="Elephants">

<script>
  // 以驼峰形式调用
  alert(document.body.dataset.about)  // Elephants
</script>
```

- 像 `data-order-state` 这样的多词特性可以以驼峰式进行调用 `dataset.orderState`
- 总结：特性（attribute）是写在 HTML 中的内容，属性（property）是 DOM 对象中的内容，特性会同步到属性中，属性不一定同步到特性中。

### 06 - 修改文档

| 方法 | 描述 |
| --- | --- |
| Document.createElement('tagName') | 创建给定名称的 HTML 元素节点 |
| Document.createTextNode('text') | 创建给定内容的文本节点，可用于转义 HTML 字符 |
| Element.append(...) | 在子元素列表末尾插入给定的 Node 或 DOMString 对象 |
| Element.prepend(...) | 在子元素列表开头插入给定的 Node 或 DOMString 对象 |
| Element.before(...) | 在该元素之前插入给定的 Node 或 DOMString 对象 |
| Element.after(...) | 在该元素之后插入给定的 Node 或 DOMString 对象 |
| Element.replaceWith(...) | 把该元素替换为给定的 Node 或 DOMString 对象 |
| Element.remove() | 把对象从它所属的 DOM 树中删除 |
| Node.appendChild(obj) | 在子节点列表末尾插入给定的 Node 对象，并返回该追加的对象 |
| Document.write('html') | 将 html 就地马上写入页面，调用只在页面加载时工作 |
| Element.insertAdjacentHTML(where, html) | 将内容作为 HTML 代码插入 |
| Element.insertAdjacentText(where, text) | 将 text 字符串作为文本插入 |
| Element.insertAdjacentElement(where, elem) | 将内容作为元素插入 |
| Node.cloneNode(true) | 创建节点的副本，具有所有特性和子元素 |
| Node.cloneNode(false) | 创建节点的副本，但不包括子元素 |

**关于 where**

- `beforebegin` 将内容插入到 elem 之前。
- `afterend` 将内容插入到 elem 之后。
- `afterbegin` 将内容插入到 elem 开头。
- `beforeend` 将内容插入到 elem 末尾。

```javascript
let div = document.createElement('div')

div.className = "alert"

div.innerHTML = "<strong>Hi there!</strong> You've read an important message."

document.body.append(div)
```

- 如果要将一个元素移动到另一个地方，则无需将其从原来的位置中删除，所有插入方法都会自动从旧位置删除该节点。
- `DocumentFragment` 是一个特殊的 DOM 节点，用作来传递节点列表的包装器。

```javascript
<ul id="ul"></ul>

<script>
function getListContent() {
  let result = []

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li')
    li.append(i)
    result.push(li)
  }

  return result
}

ul.append(...getListContent())
</script>
```

### 07 - 样式和类

| 方法 | 描述 |
| --- | --- |
| Element.className | 获取或设置指定元素的 class 属性的值 |
| Element.classList | 返回元素 class 属性的动态 DOMTokenList 集合 |
| Element.classList.add(class) | 将给定的标记添加到列表中 |
| Element.classList.remove(class) | 将给定的标记移除列表 |
| Element.classList.replace(class) | 将给定的标记替换为新标记 |
| Element.classList.toggle(class) | 存在则删除标记并返回 false 不存在则添加标记并返回 true |
| Node.contains(class) | 检查传入的节点是否为该节点的后代节点 |
| Element.style | style 特性中所写内容的对象 |
| Window.getComputedStyle(element, [pseudo]) | 该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有 CSS 属性的值，element 需要被读取样式值的元素，pseudo 伪元素结果是一个具有样式属性的对象，可以读取设置的样式 |

- `-moz-border-radius` 和 `-webkit-border-radius` 这样的浏览器前缀属性，遵循同样的规则：连字符 - 表示大写。
- `.getComputedStyle` 实际上返回的是属性的解析值。
- JS 看不到 `:visited` 所应用的样式，此外 CSS 中也有一个限制，即禁止在 `:visited` 中应用更改几何形状的样式，这是为了确保一个不好的页面无法测试链接是否被访问，进而窥探隐私。

```javascript
button.style.MozBorderRadius = '5px'
button.style.WebkitBorderRadius = '5px'
```

### 08 - 元素大小与滚动

- 元素具有以下几何属性。

![元素几何属性.jpg](https://pic.img.ski/1673228421.jpg)

| 几何属性 | 描述 |
| --- | --- |
| HTMLElement.offsetParent | 返回指向最近的（指包含层级上的最近）包含该元素的定位元素或者最近的 table, td, th, body 元素 |
| HTMLElement.offsetLeft/offsetTop | 相对于 offsetParent 的左上角边缘的坐标 |
| HTMLElement.offsetWidth/offsetHeight | 元素的外部 width/height 边框尺寸计算在内 |
| HTMLElement.clientLeft/clientTop | 元素左边框的宽度，某些情况下也包括滚动条的宽度 |
| HTMLElement.clientWidth/clientHeight | 内容的 width/height 包括 padding 但不包括滚动条 |
| HTMLElement.scrollLeft/scrollTop | 从元素的左上角开始，滚动出元素的上半部分的 width/height |
| HTMLElement.scrollWidth/scrollHeight | 内容的 width/height 就像 clientWidth/clientHeight 一样，但还包括元素的滚动出的不可见的部分 |

- 除了 `scrollLeft/scrollTop` 外，所有属性都是只读的，如果修改 `scrollLeft/scrollTop`，浏览器会滚动对应的元素。

### 09 - Window 大小与滚动

| 方法 | 描述 |
| --- | --- |
| document.documentElement.clientWidth/clientHeight | 文档的可见部分大小（不包括滚动条） |
| document.documentElement.scrollWidth/scrollHeight | 文档的完整大小（不包括滚动条） |
| document.documentElement.scrollLeft/scrollTop | 文档的滚动状态 |
| window.innerWidth/innerHeight | 窗口的可见部分大小（包括滚动条） |
| window.pageXOffset/pageYOffset | 页面当前滚动信息，window.scrollX/Y的别名 |
| window.scrollBy(x, y, [behavior]) | 将页面滚动至相对于当前位置的 (x, y) 位置，可设置滚动行为：smooth、instant、auto |
| window.scrollTo(pageX, pageY) | 将页面滚动至绝对坐标，使得可见部分的左上角具有相对于文档左上角的坐标 (pageX, pageY) |
| Element.scrollIntoView(top) | 将滚动页面以使 Element 可见，如果 top=true 页面滚动，使 Element 出现在窗口顶部，如果 top=false 页面滚动，使 Element 出现在窗口底部 |

```javascript
// 整个文档的 width height
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
)
```

### 10 - 坐标

- 相对于窗口：类似于 `position:fixed`，从窗口的顶部/左侧边缘计算得出，将这些坐标表示为 `clientX/clientY`
- 相对于文档：类似于 `position:absolute` ，从文档的顶部/左侧边缘计算得出，将它们表示为 `pageX/pageY`

![坐标.jpg](https://pic.img.ski/1673243756.jpg)

| 方法 | 描述 |
| --- | --- |
| Element.getBoundingClientRect() | 返回最小矩形的窗口坐标，该矩形将 Element 作为内建 DOMRect 类的对象 |
| Document.elementFromPoint(x, y) | 返回在窗口坐标 (x, y) 处嵌套最多的元素，对于在窗口之外的坐标，返回 null |

![getBoundingClientRect.jpg](https://pic.img.ski/1673243779.jpg)

![DOMRect.jpg](https://pic.img.ski/1673244904.jpg)

- 文档相对坐标从文档的左上角开始计算，而不是窗口。
- 窗口坐标非常适合和 `position: fixed` 一起使用，文档坐标非常适合和 `position: absolute` 一起使用。

### 11 - 事件

| 常见事件 | 描述 |
| --- | --- |
| **鼠标事件** |  |
| click | 当鼠标点击一个元素时，当触摸屏设备触摸时 |
| contextmenu | 当鼠标右键点击一个元素时 |
| mouseover/mouseout | 当鼠标指针移入/离开一个元素时 |
| mousedown/mouseup | 当在元素按下/释放鼠标按钮时 |
| mousemove | 当鼠标移动时 |
| **键盘事件** |  |
| keydown/keyup | 当按键按下/松开时 |
| **表单元素事件** |  |
| submit | 当访问者提交表单时 |
| focus | 当访问者聚焦于一个元素时 |
| **Document 事件** |  |
| DOMContentLoaded | 当 HTML 的加载和处理均完成 DOM 被完全构建完成时 |
| **CSS事件** |  |
| transitionend | 当一个 CSS 动画完成时 |

- 处理程序可以设置在 HTML 中名为 `on<event>` 的特性中，最好创建一个 JS 函数，然后在 HTML 特性中调用这个函数。
- 可以使用 DOM 属性 `on<event>` 来分配处理程序，例如 `elem.onclick`
- 错误警示，例如，函数应该是以 `sayThanks` 的形式进行赋值，而不是 `sayThanks()`，但在HTML标记中，需要括号。
- 不要对处理程序使用 `setAttribute`，因为特性总是字符串的，函数变成了一个字符串。
- `Element.addEventListener(event, handler, [options])` 多次调用 `addEventListener` 允许添加多个处理程序。
- 可以使用 `addEventListener` 将一个对象分配为事件处理程序，当事件发生时，就会调用该对象的 `handleEvent` 方法。

| 参数 | 说明 |
| --- | --- |
| event | 事件名 |
| handler | 处理程序 |
| options | 附加可选对象 |
| -> once | 如果为 true 那么会在被触发后自动删除监听器 |
| -> passive | 如果为 true 那么处理程序将不会调用 `.preventDefault()` |
| -> capture | 事件处理的阶段（启动捕获） |

- `Element.removeEventListener(event, handler, [options])` 移除处理程序，需要传入与分配的函数完全相同的函数。

```javascript
function handler() {
  alert( 'Thanks!' )
}

input.addEventListener("click", handler)

input.removeEventListener("click", handler)
```

- 对于某些事件，只能通过 `addEventListener` 设置处理程序。

```javascript
// 永远不会运行
document.onDOMContentLoaded = function() {
  alert("DOM built")
}

// 这种方式可以运行
document.addEventListener("DOMContentLoaded", function() {
  alert("DOM built")
})
```

- 当事件发生时，浏览器会创建一个 event 对象，将详细信息放入其中，并将其作为参数传递给处理程序。

```javascript
<input type="button" value="ClickMe" id="elem">

<script>
elem.onclick = function(event) {
  // 显示事件类型、元素和点击的坐标
  alert(event.type + " at " + event.currentTarget)
  alert("Coordinates: " + event.clientX + ":" + event.clientY)
}
</script>
```

| event 对象 | 描述 |
| --- | --- |
| .type | 事件类型 |
| .target | 目标元素 |
| .currentTarget | 处理事件的元素 |
| .clientX / .clientY | 指针事件的指针的窗口相对坐标 |
| .stopPropagation() | 停止冒泡 |
| .stopImmediatePropagation() | 停止冒泡，并阻止当前元素上的处理程序运行 |
| .preventDefault() | 阻止浏览器默认行为 |
| ... |  |

- event 对象在 HTML 处理程序中也可用。

### 12 - 冒泡与捕获

- 当一个事件发生在一个元素上时，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序，这就是冒泡。几乎所有事件都会冒泡，但例如 `focus` 事件不会冒泡。
- 如果有一个处理程序 `form.onclick` 那么它可以捕获表单内的所有点击，无论点击发生在哪里，它都会冒泡到 `<form>` 并运行处理程序。
- 事件传播的三个阶段：
<br />（1）捕获阶段（Capturing phase），事件从 Window 向下走近元素；
<br />（2）目标阶段（Target phase），事件到达目标元素；
<br />（3）冒泡阶段（Bubbling phase），事件从元素上开始冒泡。
- 使用 `on<event>` 属性或使用 HTML 特性或使用两个参数的 `.addEventListener(event, handler)` 添加的处理程序，对捕获一无所知，它们仅在第二阶段和第三阶段运行，为了在捕获阶段捕获事件，需要将处理程序的 `capture` 选项设置为 true

### 13 - 事件委托

- 它通常用于为许多相似的元素添加相同的处理，在容器上放一个处理程序，在处理程序中检查源元素 `event.target`，如果事件发生在感兴趣的元素内，那么处理该事件，但是事件必须冒泡。
- 可以使用事件委托将行为以声明方式添加到具有特殊特性和类的元素中，将自定义特性添加到描述其行为的元素，用文档范围级的处理程序追踪事件，如果事件发生在具有特定特性的元素上，则执行行为。
- `Element.closest(selector)` 匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身），如果匹配不到，则返回 null。

### 14 - 浏览器默认行为

- 阻止浏览器默认行为主流的方式是使用 event 对象上的 `.preventDefault()` 方法，如果处理程序是使用 `on<event>` 分配的，那返回 false 也同样有效。
- 如果默认行为被阻止，那么 `event.defaultPrevented` 属性为 true 否则为 false

```javascript
<a href="/" onclick="return false">Click here</a>
// 或
<a href="/" onclick="event.preventDefault()">Click here</a>
```

- `addEventListener` 的可选项 `passive: true` 向浏览器发出信号，表明处理程序将不会调用 `.preventDefault()`
- `event.stopPropagation()` 阻止冒泡可以使用 `event.defaultPrevented` 来代替，来通知其他事件处理程序该事件已经被处理。

### 15 - 自定义事件

- 自定义事件可用于创建图形组件，这会有助于自动化测试。
- 使用自己的名称的自定义事件通常是出于架构的目的而创建的。
- 内建事件类形成一个层次结构，类似于 DOM 元素类，根是内建的 Event 类。

```javascript
// 返回的是 event 对象
let event = new Event(type, [options])
```

| 参数 | 描述 |
| --- | --- |
| type | 事件类型，可以是像 click 的字符串，或像 my-event 的参数 |
| options | 具有两个可选属性的对象 |
| -> bubbles: true/false | 如果为 true，事件会冒泡 |
| -> cancelable: true/false | 如果为 true，那么默认行为就会被阻止 |

- 默认情况下，以上两者都为 false `{bubbles: false, cancelable: false}`
- 事件对象被创建后，应该使用 `EventTarget.dispatchEvent(event)` 在元素上运行它。
- 对于来自真实用户操作的事件 `event.isTrusted` 属性为 true，对于脚本生成的事件 `event.isTrusted` 属性为 false
- 对于自定义事件，还可以使用 `CustomEvent` 构造器，它有一个 `detail` 的附加选项，应该将事件特定的数据分配给它，然后所有处理程序可以以 `event.detail` 的形式访问它。
- 事件中的事件是同步的，通常事件是在队列中处理的，但存在例外，即一个事件是在另一个事件中发起的。例如：使用 `EventTarget.dispatchEvent(event)`，这类事件将会被立即处理，即在新的事件处理程序被调用之后，恢复到当前的事件处理程序。

### 16 - 鼠标事件

- 遵循 mousedown（按下） → mouseup（释放） → click（点击）的顺序调用处理程序。
- 与点击相关的事件始终具有 `button` 属性，该属性允许获取确切的鼠标按钮，可以使用 `button` 属性来区分是左键单击还是右键单击。
- 所有的鼠标事件都提供了两种形式的坐标，一种是相对于窗口的坐标 `clientX` 和 `clientY`，另一种是相对于文档的坐标 `pageX` 和 `pageY`
- `mousedown` 的默认浏览器操作是文本选择，如果它对界面不利，则应避免它。

```javascript
// oncopy 防止复制
<div oncopy="alert('禁止复制 哇哇哇'); return false">
  试试复制我
</div>
```

- `mouseover` 事件的 event 对象。

| event | 描述 |
| --- | --- |
| .target | 鼠标移过的元素 |
| .relatedTarget | 鼠标来自的元素 |

- `event.relatedTarget` 属性可以为 null，意味着鼠标不是来自另一个元素，而是来自窗口之外，或者它离开了窗口。
- `mouseenter/mouseleave` 类似于 `mouseover/mouseout` 它们在鼠标指针进入/离开元素时触发，元素内部与后代之间的转换不会产生影响，事件 `mouseenter/mouseleave` 不会冒泡。
- 关于基础的拖放算法：在 `mousedown` 上，根据需要准备要移动的元素（也许创建一个它的副本，向其中添加一个类或其他任何东西），然后在 `mousemove` 上，通过更改 `position:absolute` 情况下的 `left/top` 来移动它，在 `mouseup` 上，执行与完成的拖放相关的所有行为。

```javascript
// 禁用浏览器的默认拖放处理
elem.ondragstart = function() {
  return false
}
```

- 在拖动开始时，记住鼠标指针相对于元素的初始偏移 `shiftX/shiftY`，并在拖动过程中保持它不变。

### 17 - 指针事件

- 指针事件具备和鼠标事件完全相同的属性。

| 属性 | 描述 |
| --- | --- |
| .target | 目标元素 |
| .pointerId | 触发当前事件的指针唯一标识符 |
| .pointerType | 指针的设备类型 |
| .isPrimary | 当指针为首要指针（多点触控时按下的第一根手指）时为 true |
| .width | 指针（例如手指）接触设备的区域的宽度，对于不支持的设备如鼠标，这个值总是 1 |
| .height | 指针（例如手指）接触设备的区域的长度，对于不支持的设备，这个值总是 1 |
| .pressure | 触摸压力，是一个介于 0 到 1 之间的浮点数，对于不支持压力检测的设备，这个值总是 0.5 或 0 |
| .tangentialPressure | 归一化后的切向压力 |
| .clientX/Y | 指针在窗口中的位置 |
| .tiltX/Y, twist | 针对触摸笔的几个属性，用于描述笔和屏幕表面的相对位置 |

- `pointercancel` 事件将会在一个正处于活跃状态的指针交互由于某些原因被中断时触发，也就是在这个事件之后，该指针就不会继续触发更多事件了。
- `Element.setPointerCapture(pointerId)` 将给定的 pointerId 绑定到 Element，在调用之后，所有具有相同 pointerId 的指针事件都将 Element 作为目标（就像事件发生在 Element 上一样），无论这些 Element 在文档中的实际位置是什么，当 `Element.releasePointerCapture(pointerId)` 被调用，绑定会被移除，当 `pointerup` 或 `pointercancel` 事件出现时，绑定会被自动地移除。指针捕获可以被用于简化拖放类的交互。
- `gotpointercapture` 事件会在一个元素使用 `Element.setPointerCapture(pointerId)` 来启用捕获后触发。
- `lostpointercapture` 会在捕获被释放后触发，其触发可能是由于 `Element.releasePointerCapture(pointerId)` 的显式调用，或是 `pointerup/pointercancel` 事件触发后的自动调用。

### 18 - 键盘事件

- 当一个按键被按下时，会触发 `keydown` 事件，而当按键被释放时，会触发 `keyup` 事件。
- `event.code` 和 `event.key` 属性允许获取物理按键代码和字符。

```javascript
document.addEventListener('keydown', function(event) {
  console.log(event.code)
  console.log(event.key)

  if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    alert('Undo!')
  }
})
```

- 对于由自动重复触发的事件，event 对象的 `event.repeat` 属性被设置为 true
- 跟踪 `oninput` 事件，即在任何修改后都会触发此事件，这样就可以检查新的 `input.value`，并在其无效时修改它/高亮显示 `<input>`

### 19 - 滚动事件

```javascript
// 显示当前滚动
window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px'
})
```

- 不能通过在 `onscroll` 监听器中使用 `event.preventDefault()` 来阻止滚动，因为它会在滚动发生之后才触发，但是可以在导致滚动的事件上，例如在 `pageUp` 和 `pageDown` 的 `keydown` 事件上，使用 `event.preventDefault()` 来阻止滚动。

### 20 - 聚焦与其他事件

**聚焦**

- 当元素聚焦时，会触发 `focus` 事件，当元素失去焦点时，会触发 `blur` 事件。
- `focus` 和 `blur` 事件不会向上冒泡，但会在捕获阶段向下传播。
- `Element.focus()` 和 `Element.blur()` 方法可以设置和移除元素上的焦点。
- 可以通过 `document.activeElement` 来获取当前所聚焦的元素。
- 使用 `focusin` 和 `focusout` 事件与 `focus/blur` 事件完全一样，只是它们会冒泡，必须使用 `Element.addEventListener()` 来分配它们，而不是 `on<event>`
- 任何具有 `tabindex` 特性的元素，都会变成可聚焦的。该特性的 `value` 是当使用 Tab（或类似的东西）在元素之间进行切换时，元素存在顺序号，也就是说，如果有两个元素，第一个具有 `tabindex="1"`，第二个具有 `tabindex="2"`，然后当焦点在第一个元素的时候，按下 Tab 键，会使焦点移动到第二个元素身上，`tabindex="0"` 会使该元素被与那些不具有 `tabindex` 的元素放在一起，`tabindex="-1"` 只允许以编程的方式聚焦于元素。

**更新**

- 当元素更改完成时，将触发 `change` 事件，对于文本输入框，当其失去焦点时，就会触发 `change` 事件，单选和复选，会在选项更改后立即触发 `change` 事件。

**输入**

- 现代 HTML 允许使用 `input` 特性进行许多验证，例如 `required`、`pattern` 等。
- 每当用户对输入值进行修改后，就会触发 `input` 事件，与键盘事件不同，只要值改变了，`input` 事件就会触发，即使那些不涉及键盘行为的值的更改也是如此，例如，使用鼠标粘贴，或者使用语音识别来输入文本。另一方面，`input` 事件不会在那些不涉及值更改的键盘输入或其他行为上触发，例如，在输入时按方向键 `⇦ ⇨` 无法阻止 `oninput` 中的任何事件，无法使用 `event.preventDefault()`，已经太迟了，不会起任何作用了。

**CV**

- `cut/copy/paste` 这些事件发生于剪切/拷贝/粘贴一个值的时候，它们属于 ClipboardEvent 类，并提供了对剪切/拷贝/粘贴的数据的访问方法，也可以使用 `event.preventDefault()` 来中止行为，然后什么都不会被复制/粘贴。`event.clipboardData` 属性可以用于访问剪贴板。

**提交**

- 提交表单时，会触发 `submit` 事件，它通常用于在将表单发送到服务器之前对表单进行校验或者中止提交，并使用 JS 来处理表单。`form.submit()` 方法允许从 JS 启动表单发送，可以使用此方法动态地创建表单，并将其发送到服务器。
- 提交表单主要有两种方式，一种是点击 `<input type="submit">` 或 `<input type="image">`，另一种是在 `input` 字段中按下 Enter 键。
- 在输入框中使用 Enter 发送表单时，会在 `<input type="submit">` 上触发一次 `click` 事件。如果要手动将表单提交到服务器，可以调用 `form.submit()`，这样就不会产生 `submit` 事件。

```javascript
let form = document.createElement('form')
form.action = 'https://baidu.com/'
form.method = 'GET'
form.innerHTML = '<input name="s" value="百度一下">'

// 该表单必须在文档中才能提交
document.body.append(form)

form.submit()
```

### 21 - 表单属性与方法

- 文档中的表单是特殊集合 `document.forms` 的成员，该集合为命名的集合：既是被命名了的，也是有序的，既可以使用名字，也可以使用在文档中的编号来获取表单。

```javascript
document.forms.my  // name="my" 的表单
document.forms[0]  // 文档中的第一个表单
```

- 表单中，任何元素都可以通过命名的集合 `form.elements.xxx` 来获取到。

```html
<form name="my">
  <input name="one" value="1">
  <input name="two" value="2">
</form>

<script>
  let form = document.forms.my
  let elem = form.elements.one
  alert(elem.value)
</script>
```

- 可能会有多个名字相同的元素，这种情况经常在处理单选按钮中出现，此时 `form.elements[name]` 将会是一个集合。
- 一个表单内会有一个或多个 `<fieldset>` 元素，它们也具有 `elements` 属性。
- 可以通过 `form[index/name]` 来访问元素，可以将 `form.elements.login` 写成 `form.login`，但是会有一个小问题：如果访问一个元素，然后修改它的 `name`，之后它仍然可以被通过旧的 `name` 访问到（当然也能通过新的 `name` 访问）。
- 对于任何元素，其对应的表单都可以通过 `Element.form` 访问到，即表单引用了所有元素，元素也引用了表单。
- 可以通过 `input.value`（字符串）或 `input.checked`（布尔值）来访问复选框 checkbox 和单选按钮 radio button 中的 `value`
- `<select>` 元素有 3 个重要的属性：

| 属性 | 描述 |
| --- | --- |
| .options | 当前所选择的子元素的集合 |
| .value | 当前所选择的 value |
| .selectedIndex | 当前所选择的编号 |

```html
<select id="select">
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
  <option value="banana">Banana</option>
</select>

<script>
  // 下面三行做的都是同一件事
  select.options[2].selected = true
  select.selectedIndex = 2
  select.value = 'banana'
</script>
```

- 对于多选的值，在 `<option>` 子元素中添加/移除 `selected` 属性。

```html
<select id="select" multiple>
  <option value="blues" selected>Blues</option>
  <option value="rock" selected>Rock</option>
  <option value="classic">Classic</option>
</select>

<script>
  // 从 multi-select 中获取所有选定的 value
  let selected = Array.from(select.options)
    .filter(option => option.selected)
    .map(option => option.value)

  alert(selected)
</script>
```

```javascript
// 创建 option 元素
let option = new Option(text, value, defaultSelected, selected)
```

| 参数 | 描述 |
| --- | --- |
| text | 当前所选中的文本 |
| value | 当前所选择的 value |
| defaultSelected | 如果为 true 那么 selected 特性会被创建 |
| selected | 如果为 true 那么这个就会被选中 |

- `defaultSelected` 和 `selected` 的区别是 `defaultSelected` 设置的是 HTML 特性，可以使用 `option.getAttribute('selected')` 来获得，而 `selected` 设置的是选项是否被选中。

### 22 - 页面生命周期

- HTML 页面的生命周期包含三个重要事件：
<br />（1）DOMContentLoaded：浏览器已完全加载 HTML 并构建了 DOM 树，但像 `<img>` 和样式表之类外部资源可能未加载完成。
<br />（2）load：浏览器不仅加载完成了 HTML 还加载完成了所有外部资源，图片、样式等。
<br />（3）beforeunload/unload：当用户正要离开和已经离开页面时。
- `DOMContentLoaded` 事件：DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口。事件发生在 `document` 对象上，必须使用 `addEventListener` 来捕获它。
- `load` 事件：外部资源已加载完成，样式已被应用，图片大小也已知了。`window` 对象上的 `load` 事件，可以通过 `onload` 属性获取此事件。
- `beforeunload` 事件：用户正在离开，可以检查用户是否保存了更改，并询问他是否真的要离开。如果访问者触发了离开页面的导航或试图关闭窗口处理程序将要求进行更多确认。`event.preventDefault()` 在 `beforeunload` 处理程序中不起作用。
- `unload` 事件：用户几乎已经离开了，但是仍然可以启动一些操作。`window` 对象上的 `unload` 事件就会被触发，可以在那里做一些不涉及延迟的操作，例如关闭相关的弹出窗口、发送统计数据。

```javascript
// 它在后台发送数据，转换到另外一个页面不会有延迟：浏览器离开页面，但仍然在执行 sendBeacon
let analyticsData = { /* 带有收集数据的对象 */ }

window.addEventListener("unload", function() {
  // navigator.sendBeacon() 方法可用于通过 HTTP POST 将少量数据异步传输到 Web 服务器
  navigator.sendBeacon("/analytics", JSON.stringify(analyticsData))
})
```

- `document.readyState` 属性可以提供当前加载状态的信息。
- `readystatechange` 事件，会在状态发生改变时触发。

| 状态 | 描述 |
| --- | --- |
| loading | 文档正在被加载 |
| interactive | 文档被全部读取 |
| complete | 文档被全部读取，并且所有资源都已加载完成 |

```javascript
function work() { /*...*/ }

if (document.readyState == 'loading') {
  // 仍在加载，等待事件
  document.addEventListener('DOMContentLoaded', work)
} else {
  // DOM 已就绪
  work()
}
```

### 23 - 脚本

- 当浏览器加载 HTML 时遇到 `<script></script>` 标签，浏览器就不能继续构建 DOM，它必须立刻执行此脚本，对于外部脚本 `<script src="..."></script>` 也是一样的，浏览器必须等脚本下载完，并执行结束，之后才能继续处理剩余的页面。这将导致脚本不能访问到位于它们下面的 DOM 元素，无法给它们添加处理程序等。如果页面顶部有一个笨重的脚本，它会阻塞页面，在该脚本下载并执行结束前，用户都不能看到页面内容。
- 可以把脚本放在页面底部，它可以访问到它上面的元素，并且不会阻塞页面显示内容。
- `<script>` 的特性：
  - `defer` 特性告诉浏览器不要等待脚本，浏览器将继续处理 HTML，构建 DOM，脚本会在后台下载，等 DOM 构建完成后，脚本才会执行。不会阻塞页面，脚本总是要等到 DOM 解析完毕，但在 `DOMContentLoaded` 事件之前执行。脚本保持其相对顺序，就像常规脚本一样，特性仅适用于外部脚本。
  - `async` 特性意味着脚本是完全独立的，浏览器不会因脚本而阻塞（与 `defer` 类似），其他脚本不会等待 `async` 脚本加载完成，同样 `async` 脚本也不会等待其他脚本。`DOMContentLoaded` 事件和异步脚本不会彼此等待，`DOMContentLoaded` 事件可能会发生在异步脚本之前（如果异步脚本在页面完成后才加载完成），`DOMContentLoaded` 事件也可能发生在异步脚本之后（如果异步脚本很短，或者是从 HTTP 缓存中加载的）。脚本会在后台加载，并在加载就绪时运行，DOM 和其他脚本不会等待它们，它们也不会等待其它的东西，特性仅适用于外部脚本。
- 可以使用 JS 动态地创建一个脚本，并将其附加到文档中。默认情况下，动态脚本的行为是异步的，如果显式地设置了 `script.async = false`，则可以改变这个规则
- 在实际开发中，`defer` 用于需要整个 DOM 的脚本，适用于脚本的相对执行顺序很重要的时候。`async` 用于独立脚本，例如计数器或广告，这些脚本的相对执行顺序无关紧要。

### 24 - 资源加载

- 浏览器允许跟踪外部资源的加载，脚本、图片、`iframe`等。`onload` 成功加载，`onerror` 出现 error
- `script.onload` 它会在脚本加载并执行完成时触发：

```javascript
let script = document.createElement('script')
script.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"
document.head.append(script)

script.onload = function() {
  // 显示库的版本
  alert( _.VERSION )
}
```

- `script.onerror` 发生在脚本加载期间的 error 会被 error 事件跟踪到：

```javascript
let script = document.createElement('script')
script.src = "https://example.com/404.js"
document.head.append(script)

script.onerror = function() {
  alert("Error loading " + this.src)
}
```

- `onload`、`onerror` 事件仅跟踪加载本身。基本上适用于具有外部 `src` 的任何资源。
- 大多数资源在被添加到文档中后，便开始加载，但是 `<img>` 是个例外，它要等到获得 `src (*)` 后才开始加载，对于 `<iframe>` 加载完成时会触发 `iframe.onload` 事件，无论是成功加载还是出现 error
- 要允许跨源访问 `<script>` 标签需要具有 crossorigin 特性，并且远程服务器必须提供特殊的 header
- 三个级别的跨源访问：
<br />（1）无 `crossorigin` 特性：禁止访问；
<br />（2）`crossorigin = "anonymous"`：如果服务器发送回带有的源的 header `Access-Control-Allow-Origin` 则允许访问。浏览器不会将授权信息和 cookie 发送到远程服务器。
<br />（3）`crossorigin= "use-credentials"`：如果服务器发送回带有的源的 header `Access-Control-Allow-Origin` 和 `Access-Control-Allow-Credentials: true` 则允许访问。浏览器会将授权信息和 cookie 发送到远程服务器。

### 25 - DOM 变动观察器

- MutationObserver 是一个内建对象，它观察 DOM 元素，并在检测到更改时触发回调。

```javascript
let observer = new MutationObserver(callback)
observer.observe(...)
```

```javascript
// 选择需要观察变动的节点
const target = document.getElementById('some-id')

// 观察器的配置（需要观察什么变动）
const config = { attributes: true, childList: true, subtree: true }

// 当观察到变动时执行的回调函数
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.')
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.')
        }
    }
}

// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback)

// 以上述配置开始观察目标节点
observer.observe(target, config)

// 之后，可停止观察
observer.disconnect()
```

| observe 参数 | 描述 |
| --- | --- |
| target | 被观察的节点 |
| config | 布尔选项的对象，表示将对哪些更改做出反应，childList、attributes 和 characterData 中，必须有一个参数为 true |
| -> subtree: true | 监听以 target 为根节点的整个子树 |
| -> childList: true | 监听 target 节点中发生的节点的新增与删除 |
| -> attributes: true | 观察所有监听的节点属性值的变化 |
| -> attributeFilter | 一个用于声明哪些属性名会被监听的数组，如果不声明该属性，所有属性的变化都将触发通知 |
| -> attributeOldValue: true | 记录上一次被监听的节点的属性变化 |
| -> characterData: true | 监听声明的 target 节点上所有字符的变化 |
| -> characterDataOldValue:true | 记录前一个被监听的节点中发生的文本变化 |

- 在发生任何更改后，将执行回调，更改被作为一个 MutationRecord 对象列表，传入第一个参数，而观察器自身作为第二个。

| 属性 | 描述 |
| --- | --- |
| .type | 变动类型 |
| .target | 更改发生处 |
| .addedNodes/removedNodes | 添加/删除的节点 |
| .previousSibling/nextSibling | 添加/删除的节点的上一个/下一个兄弟节点 |
| .attributeName/attributeNamespace | 被更改的特性的名称/命名空间（用于 XML） |
| .oldValue | 之前的值，仅适用于特性或文本更改 |

- 使用 MutationObserver，可以监测到不需要的元素何时出现在 DOM 中，并将其删除。
- 可以使用 MutationObserver 来自动检测何时在页面中插入了代码段，并高亮显示它们。

| 方法 | 描述 |
| --- | --- |
| MutationObserver.observe() | 根据需求开始观察 |
| MutationObserver.disconnect() | 观察者停止观察变动 |
| MutationObserver.takeRecords() | 返回已检测到但尚未由观察者的回调函数处理的所有匹配 DOM 更改的列表，使变更队列保持为空 |

### 26 - 选择与范围

- Range 对象表示一个包含节点与文本节点的一部分的文档片段 `let range = new Range()`

| 属性/方法 | 描述 |
| --- | --- |
| .startContainer | 返回开始的节点 |
| .endContainer | 返回终点的节点 |
| .startOffset | 返回在 startContainer 中的起始位置的数字 |
| .endOffset | 返回终点在 endContainer 中的终点位置的数字 |
| .collapsed | 返回起始位置是否相同 |
| .commonAncestorContainer | 返回包含 startContainer 和 endContainer 的最深一级的节点 |
|  |  |
| .setStart(node, offset) | 边界起点 |
| .setEnd(node, offset) | 边界终点 |
| .setStartBefore(node) | 将起点设置在 node 前面 |
| .setStartAfter(node) | 将起点设置在 node 后面 |
| .setEndBefore(node) | 将终点设置为 node 前面 |
| .setEndAfter(node) | 将终点设置为 node 后面 |
| .selectNode(node) | 设置范围以选择整个 node |
| .selectNodeContents(node) | 设置范围以选择整个 node 的内容 |
| .collapse(toStart) | 如果 toStart = true 则设置 end = start，从而折叠范围 |
| .cloneRange() | 创建一个具有相同起点/终点的新范围 Range 对象 |
| .deleteContents() | 从文档中删除范围中的内容 |
| .extractContents() | 从文档中删除范围中的内容，并将删除的内容作为 DocumentFragment 返回 |
| .cloneContents() | 复制范围中的内容，并将复制的内容作为 DocumentFragment 返回 |
| .insertNode(node) | 在范围的起始处将 node 插入文档 |
| .surroundContents(node) | 使用 node 将所选范围中的内容包裹起来，要使此操作有效，则该范围必须包含其中所有元素的开始和结束标签 |

- 如果 node 是一个文本节点，那么 offset 则必须是其文本中的位置。如果 node 是一个元素节点，那么 offset 则必须是子元素的编号，不是必须在 `setStart` 和 `setEnd` 中使用相同的节点。一个范围可能会跨越很多不相关的节点，唯一要注意的是终点要在起点之后。
- 文档选择是由 Selection 对象表示的，可通过 `window.getSelection()` 或 `document.getSelection()` 来获取，一个选择可以包括零个或多个范围。

| 属性/方法 | 描述 |
| --- | --- |
| .anchorNode | 返回该选区起点所在的节点 |
| .focusNode | 返回该选区终点所在的节点 |
| .anchorOffset | 返回一个数字，其表示的是选区起点在 anchorNode 中的位置偏移量 |
| .focusOffset | 返回一个数字，其表示的是选区终点在 focusNode 中的位置偏移量 |
| .isCollapsed | 返回一个布尔值，用于判断选区的起始点和终点是否在同一个位置 |
| .rangeCount | 返回该选区所包含的连续范围的数量 |
|  |  |
| .getRangeAt(i) | 获取第 i 个范围，返回选区包含的指定区域的引用 |
| .collapse(node, offset) | 用一个新的范围替换选定的范围，该新范围从给定的 node 处开始到偏移 offset 处结束 |
| .setPosition(node, offset) | collapse 的别名 |
| .extend(node, offset) | 将选择的焦点移到给定的 node 位置偏移 offset |
| .modify() | 修改当前的选区 |
| .collapseToStart() | 折叠（替换为空范围）到选择起点 |
| .collapseToEnd() | 折叠到选择终点 |
| .selectAllChildren(node) | 选择 node 的所有子节点 |
| .addRange(range) | 将 range 添加到选择中，如果选择已有关联的范围将忽略该调用 |
| .removeRange(range) | 从选择中删除 range |
| .removeAllRanges() | 删除所有范围 |
| .empty() | removeAllRanges 的别名 |
| .deleteFromDocument() | 从文档中删除所选择的内容 |
| .toString() | 返回当前选区存文本内容 |
| .containsNode(node, allowPartialContainment = false) | 检查选择中是否包含 node（特别是如果第二个参数是 true 的话） |
| .setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset) | 用给定的起点 anchorNode/anchorOffset 和终点 focusNode/focusOffset 来替换选择范围，选中它们之间的所有内容 |
| Element.onselectstart | 当在元素 Element 上或在其内部开始选择时 |
| Document.onselectionchange | 当选择发生变化或开始时 |

- 诸如 `input` 和 `textarea` 等表单元素提供了专用的选择 API，没有 Selection 或 Range 对象。

| 方法 | 描述 |
| --- | --- |
| input.onselect | 当某个东西被选择时触发 |
| input.selectionStart | 选择的起始位置（可写） |
| input.selectionEnd | 选择的结束位置（可写） |
| input.selectionDirection | 选择方向 forward、backward、none（例如使用鼠标双击进行的选择） |
| input.select() | 选择文本控件中的所有内容（可以是 textarea 而不是 input） |
| input.setSelectionRange(start, end, [direction]) | 在给定方向上（可选），从 start 一直选择到 end |
| input.setRangeText(replacement, [start], [end], [selectionMode]) | 用新文本替换范围中的文本 |

### 27 - 弹窗

- 弹窗（popup）是向用户显示其他文档的最古老的方法之一，`window.open(url, name, params)` 它将打开一个具有给定 URL 的新窗口。

| 参数 | 描述 |
| --- | --- |
| url | 要在新窗口中加载的 URL |
| name | 新窗口的名称 |
| params | 新窗口的配置字符串，它包括设置用逗号分隔，参数之间不能有空格，例如：width=200,height=100 |

- 默认情况下，浏览器会打开一个新标签页，但如果提供了窗口大小，那么浏览器将打开一个弹窗。
- 弹窗是一个独立的窗口，具有自己的独立 JS 环境，因此，使用弹窗打开一个不信任的第三方网站是安全的。
- 如果弹窗是在用户触发的事件处理程序（如 `onclick`）之外调用的，大多数浏览器都会阻止此类弹窗。

```javascript
let params = `scrollbars=no,resizable=no,
  status=no,location=no,
  toolbar=no,menubar=no,
  width=600,height=300,
  left=100,top=100`
open('/', 'test', params)
```

- `open` 调用会返回对新窗口的引用，它可以用来操纵弹窗的属性，更改位置，甚至更多操作。
- 只有在窗口是同源的时，窗口才能自由访问彼此的内容。

| 弹窗方法 | 描述 |
| --- | --- |
| window.opener | 访问 opener 窗口，除了弹窗之外，对其他所有窗口来说均为 null |
| window.close() | 关闭一个窗口 |
| window.closed | 检查一个窗口是否被关闭 |
| window.moveBy(x,y) | 将窗口相对于当前位置向右移动 x 像素，并向下移动 y 像素，允许负值（向上/向左移动） |
| window.moveTo(x,y) | 将窗口移动到屏幕上的坐标 (x,y) 处 |
| window.resizeBy(width, height) | 根据给定的相对于当前大小的 width/height 调整窗口大小，允许负值 |
| window.resizeTo(width, height) | 将窗口调整为给定的大小 |
| window.scrollBy(x,y) | 相对于当前位置，将窗口向右滚动 x 像素，并向下滚动 y 像素，允许负值 |
| window.scrollTo(x,y) | 将窗口滚动到给定坐标 (x,y) |
| Element.scrollIntoView(top = true) | 滚动窗口，使 elem 显示在 elem.scrollIntoView(false) 的顶部（默认）或底部 |

- 如果窗口不是通过 `window.open()` 创建的，那么大多数浏览器都会忽略 `window.close()`，因此 `close()` 只对弹窗起作用。

### 28 - 跨窗口通信

- 如果两个 URL 具有相同的协议、域和端口，则称它们是同源的。
- 一个 `<iframe>` 标签承载了一个单独的嵌入的窗口，它具有自己的 `document` 和 `window`。当访问嵌入的窗口中的东西时，浏览器会检查是否具有相同的源，如果不是，则会拒绝访问（对 `location` 进行写入是一个例外，它是会被允许的）。
- 如果窗口的二级域相同，可以使浏览器忽略该差异，使得它们可以被作为同源的来对待，以便进行跨窗口通信，每个这样的窗口都应该执行下面这行代码：`document.domain = 'xxxxx.com'` 该属性正在被从规范中删除，跨窗口通信是建议的替代方案。
- 不应该对尚未加载完成的 `<iframe>` 的文档进行处理，因为那是错误的文档。
- 一个 `<iframe>` 内可能嵌套了其他的 `<iframe>`，相应的 `window` 对象会形成一个层次结构。

| 属性/方法 | 描述 |
| --- | --- |
| iframe.contentWindow | 获取 `<iframe>` 中的 window |
| window.frames[0]/.name | 获取 `<iframe>` 中的 window 的另一种方式 |
| iframe.contentDocument | 获取 `<iframe>` 中的 document |
| window.frames | 子窗口的集合 |
| window.parent | 对父（外部）窗口的引用 |
| window.top | 对最顶级父窗口的引用 |

- `sandbox` 特性允许在 `<iframe>` 中禁止某些特定行为，以防止其执行不被信任的代码。它通过将 `<iframe>` 视为非同源的，或者应用其他限制来实现 `<iframe>` 的沙盒化，对于 `<iframe sandbox src="...">` 有一个应用于其上的默认的限制集，但是可以通过提供一个以空格分隔的限制列表作为特性的值，来放宽这些限制，该列表中的各项为不应该应用于这个 `<iframe>` 的限制，例如：`<iframe sandbox="allow-forms allow-popups">`。一个空的 `sandbox` 特性会施加最严格的限制，但是用一个以空格分隔的列表，列出要移除的限制。

| value | 描述 |
| --- | --- |
| allow-same-origin | 默认情况下 sandbox 会为 `<iframe>` 强制实施不同来源的策略，具有所有隐含的脚本限制，此选项会移除这些限制 |
| allow-top-navigation | 允许 `<iframe>` 更改 parent.location |
| allow-forms | 允许在 `<iframe>` 中提交表单 |
| allow-scripts | 允许在 `<iframe>` 中运行脚本 |
| allow-popups | 允许在 `<iframe>` 中使用 window.open 打开弹窗

- `window.postMessage` 接口允许窗口之间相互通信，无论它们来自什么源。
- 想要发送消息的窗口需要调用接收窗口的 `postMessage` 方法。例如，如果想把消息发送给 win，应该调用 `win.postMessage(data, targetOrigin)`，data 是要发送的数据，可以是任何对象，数据会被通过使用结构化序列化算法进行克隆，IE 浏览器只支持字符串，因此需要对复杂的对象调用 `JSON.stringify` 方法进行处理，以支持该浏览器，targetOrigin 是指定目标窗口的源，以便只有来自给定的源的窗口才能获得该消息。
- 为了接收消息，目标窗口应该在 `message` 事件上有一个处理程序，当 `postMessage` 被调用时触发该事件（并且 `targetOrigin` 检查成功）。此时 `event` 对象具有几个特殊属性：data 是从 `postMessage` 传递来的数据，origin 是发送方的源，source 是对发送方窗口的引用。

```javascript
window.addEventListener("message", function(event) {
  if (event.origin != 'http://xxx.com') {
    // 来自未知的源的内容忽略它
    return
  }

  alert( "received: " + event.data )
  // 可以使用 event.source.postMessage(...) 向回发送消息
})
```

### 29 - 点击劫持攻击

- 点击劫持攻击允许恶意页面以用户的名义点击受害网站，例如在用户操作界面放置伪装的 `<frame>` 提供恶意访问攻击。
- 服务器端设置 header `X-Frame-Options` 可以允许或禁止在 `<frame>` 中显示页面，它必须被完全作为 HTTP-header 发送。如果浏览器在 HTML `<meta>` 标签中找到它，则会忽略它，因此 `<meta http-equiv="X-Frame-Options"...>` 没有任何作用。

| header | 描述 |
| --- | --- |
| DENY | 始终禁止在 `<frame>` 中显示此页面 |
| SAMEORIGIN | 允许在和父文档同源的 `<frame>` 中显示此页面 |
| ALLOW-FROM domain | 允许在来自给定域的父文档的 `<frame>` 中显示此页面 |

- `X-Frame-Options` 有一个副作用，其他的网站即使有充分的理由也无法在 `<frame>` 中显示页面。
- samesite cookie 特性也可以阻止点击劫持攻击，`samesite` 特性的 cookie 仅在网站是通过直接方式打开（而不是通过 `<frame>` 或其他方式）的情况下才发送到网站。

### 30 - 二进制

**ArrayBuffer 对象**

- 基本的二进制对象是 ArrayBuffer 是对固定长度的连续内存空间的引用。

```javascript
// 创建一个长度为 16 的 buffer
// 它会分配一个 16 字节的连续内存空间，并用 0 进行预填充
let buffer = new ArrayBuffer(16)
alert(buffer.byteLength)  // 16
```

**TypedArray 对象**

- 操作 ArrayBuffer 需要使用视图对象。

| 视图对象 | 描述 |
| --- | --- |
| Uint8Array / Uint16Array / Uint32Array | 用于 8 位、16 位、32 位无符号整数 |
| Int8Array / Int16Array / Int32Array | 用于有符号整数，可以为负数 |
| Float32Array、Float64Array | 用于 32 位、 64 位的有符号浮点数 |
| Uint8ClampedArray | 用于 8 位整数，在赋值时便固定其值 |

```javascript
// 创建一个长度为 16 的 buffer
let buffer = new ArrayBuffer(16)

// 将 buffer 视为一个 32 位整数的序列 数组
let view = new Uint32Array(buffer)

alert(Uint32Array.BYTES_PER_ELEMENT)  // 每个整数 4 个字节
alert(view.length)  // 它存储了 4 个整数
alert(view.byteLength)  // 16 字节中的大小

// 写入一个值
view[0] = 123456

// 遍历值
for(let num of view) {
  alert(num)  // 123456 0 0 0
}
```

- 所有这些视图的通用术语是 TypedArray，它们共享同一方法和属性集，没有称为 TypedArray 的全局属性，也没有直接可用的 TypedArray 构造函数，但是有很多不同的全局属性，其值是指定元素类型的类型化数组构造函数，如上。类型化数组的行为类似于常规数组，具有索引并且是可迭代的。参数有 5 种变体：

```javascript
new TypedArray(buffer, [byteOffset], [length])
new TypedArray(object)
new TypedArray(typedArray)
new TypedArray(length)
new TypedArray()
```

- TypedArray 具有常规的 Array 方法，可以遍历、`map`、`slice`、`find`、`reduce` 等，没有 `splice` 无法删除一个值，因为类型化数组是缓冲区（buffer）上的视图，并且缓冲区是固定的、连续的内存区域，所能做的就是分配一个零值，也无 `concat` 方法。

| 方法 | 描述 |
| --- | --- |
| arr.set(fromArr, [offset]) | 从 offset（默认为 0）开始，将 fromArr 中的所有元素复制到 arr |
| arr.subarray([begin, end]) | 创建一个从 begin 到 end（不包括）相同类型的新视图，这类似于 `slice` 方法，但不复制任何内容，只是创建一个新视图，以对给定片段的数据进行操作 |

**DataView 对象**

- DataView 是在 ArrayBuffer 上的一种特殊的超灵活未类型化视图，它允许以任何格式访问任何偏移量（offset）的数据。

```javascript
new DataView(buffer, [byteOffset], [byteLength])
```

| 参数 | 描述 |
| --- | --- |
| buffer | 底层的 ArrayBuffer， 与类型化数组不同 DataView 不会自行创建缓冲区（buffer），需要事先准备好 |
| byteOffset | 视图的起始字节位置，默认为 0 |
| byteLength | 视图的字节长度，默认至 buffer 的末尾 |

```javascript
// 4 个字节的二进制数组，每个都是最大值 255
let buffer = new Uint8Array([255, 255, 255, 255]).buffer

let dataView = new DataView(buffer)

// 在偏移量为 0 处获取 8 位数字
alert(dataView.getUint8(0))  // 255

// 在偏移量为 0 处获取 16 位数字，它由 2 个字节组成，一起解析为 65535
alert(dataView.getUint16(0))  // 65535（最大的 16 位无符号整数）

// 在偏移量为 0 处获取 32 位数字
alert(dataView.getUint32(0))  // 4294967295（最大的 32 位无符号整数）

// 将 4 个字节的数字设为 0，即将所有字节都设为 0
dataView.setUint32(0, 0)
```

**TextDecoder / TextEncoder 对象**

- TextDecoder 对象在给定缓冲区（buffer）和编码格式（encoding）的情况下，允许将值读取为实际的 JS 字符串。

```javascript
let decoder = new TextDecoder([label], [options])
```

| 参数 | 描述 |
| --- | --- |
| label | 编码格式，默认为 utf-8，但同时也支持 big5，windows-1251 等 |
| options | 可选对象 |
| -> fatal: true | 如果为 true 则无效（不可解码）字符抛出异常，否则（默认）用字符 \\uFFFD 替换无效字符 |
| -> gnoreBOM: true | 如果为 true 则 BOM（可选的字节顺序 Unicode 标记） |

```javascript
// 解码
let str = decoder.decode([input], [options])
```

| 参数 | 描述 |
| --- | --- |
| input | 要被解码的 BufferSource |
| options | 可选对象 |
| -> stream | 对于解码流为 true，则将传入的数据块（chunk）作为参数重复调用 decoder，在这种情况下，多字节的字符可能偶尔会在块与块之间被分割，这个选项告诉 TextDecoder 记住未完成的字符，并在下一个数据块来的时候进行解码 |

```javascript
let uint8Array = new Uint8Array([72, 101, 108, 108, 111])

alert(new TextDecoder().decode(uint8Array))  // Hello
```

- TextEncoder 对象做相反的事情，将字符串转换为字节。

```javascript
let encoder = new TextEncoder()
```

| 方法 | 描述 |
| --- | --- |
| .encode(str) | 从字符串返回 Uint8Array |
| .encodeInto(str, destination) | 将 str 编码到 destination 中，该目标必须为 Uint8Array |

```javascript
let encoder = new TextEncoder()

let uint8Array = encoder.encode("Hello")

alert(uint8Array)  // 72 101 108 108 111
```

**Blob 对象**

- Blob 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作。

```javascript
let blob = new Blob(blobParts, [options])
```

| 参数 | 描述 |
| --- | --- |
| blobParts | 是 Blob / BufferSource / String 类型值的数组 |
| options | 可选对象 |
| -> type | Blob 类型，通常是 MIME 类型，例如 image/png |
| -> endings | 是否转换换行符，使 Blob 对应于当前操作系统的换行符（\\r\\n 或 \\n），默认为 transparent（啥也不做），不过也可以是 native（转换） |

- MIME 指媒体类型，是一种标准，其通用结构为 `type/subtype`

| MIME 媒体类型 | 描述 |
| --- | --- |
| text/plain | 文本文件默认值，即使它意味着未知的文本文件，但浏览器认为是可以直接展示的 |
| text/html |  |
| text/css |  |
| text/javascript |  |
| image/gif |  |
| image/png |  |
| image/jpeg |  |
| image/bmp |  |
| image/webp |  |
| image/x-icon |  |
| image/svg+xml |  |
| audio/midi |  |
| audio/mpeg |  |
| audio/webm |  |
| audio/ogg |  |
| audio/wav |  |
| video/webm |  |
| video/ogg |  |
| application/octet-stream | 应用程序文件的默认值，意思是未知的应用程序文件，浏览器一般不会自动执行或询问执行 |
| application/pkcs12 |  |
| application/vnd.mspowerpoint |  |
| application/xhtml+xml |  |
| application/xml |  |
| application/pdf |  |

```javascript
// 提取 blob 片段
blob.slice([byteStart], [byteEnd], [contentType])
```

| 参数 | 描述 |
| --- | --- |
| byteStart | 起始字节，默认为 0 |
| byteEnd | 最后一个字节，默认为最后 |
| contentType | 新 blob 的 type，默认与源 blob 相同 |

- 无法直接在 blob 中更改数据，但可以通过 `.slice` 获得 blob 的多个部分，从这些部分创建新的 Blob 对象，将它们组成新的 blob
- （1）Blob 用作 URL，Blob 可以很容易用作 `<a>`、`<img>` 或其他标签的 URL，来显示它们的内容。

```html
<!-- download 特性强制浏览器下载而不是导航 -->
<a download="hello.txt" href='#' id="link">Download</a>

<script>
let blob = new Blob(["Hello, world!"], {type: 'text/plain'})

link.href = URL.createObjectURL(blob)
</script>
```

- `URL.createObjectURL()` 取一个 blob，并为其创建一个唯一的 URL，形式为 `blob:<origin>/<uuid>` 也就是 `link.href` 的值的样子。

```javascript
blob:https://javascript.com/1e67e00e-860d-40a5-89ae-6ab0cbee6273
```

- 浏览器内部为每个通过 `URL.createObjectURL()` 生成的 URL 存储了一个 URL → Blob 的映射，因此，此类 URL 很短，但可以访问 Blob。生成的 URL 仅在当前文档打开的状态下才有效，它允许引用 `<img>`、`<a>` 中的 Blob，以及基本上任何其他期望 URL 的对象。虽然这里有 Blob 的映射，但 Blob 本身只保存在内存中的，浏览器无法释放它。
- `URL.revokeObjectURL(url)` 从内部映射中移除引用，因此允许 Blob 被删除（如果没有其他引用的话），并释放内存。
- `URL.createObjectURL()` 的一个替代方法是将 Blob 转换为 base64-编码的字符串。这种编码将二进制数据表示为一个由 0 到 64 的 ASCII 码组成的字符串。
- （2）Image 转换为 Blob，图像操作是通过 `<canvas>` 元素来实现的，使用 `canvas.drawImage` 在 Canvas 上绘制图像（或图像的一部分）。调用 `canvas.toBlob(callback, format, quality)` 创建一个 Blob，并在创建完成后使用其运行 callback

```javascript
// 获取任何图像
let img = document.querySelector('img')

// 生成同尺寸的 <canvas>
let canvas = document.createElement('canvas')
canvas.width = img.clientWidth
canvas.height = img.clientHeight

let context = canvas.getContext('2d')
// 向其中复制图像（此方法允许剪裁图像）
context.drawImage(img, 0, 0)
// context.rotate()，并在 canvas 上做很多其他事情

// toBlob 是异步操作，结束后会调用 callback
canvas.toBlob(function(blob) {
  // blob 创建完成，下载它
  let link = document.createElement('a')
  link.download = 'example.png'

  link.href = URL.createObjectURL(blob)
  link.click()

  // 删除内部 blob 引用，这样浏览器可以从内存中将其清除
  URL.revokeObjectURL(link.href)
}, 'image/png')
```

- （3）Blob 转换为 ArrayBuffer，如果需要执行低级别的处理时，可以从 `blob.arrayBuffer()` 中获取最低级别的 ArrayBuffer

```javascript
// 从 bolb 获取 arrayBuffer
const bufferPromise = await blob.arrayBuffer()

// 或
blob.arrayBuffer().then(buffer => /* 处理 ArrayBuffer */)
```

- （4）Blob 转换为 Stream，Stream 是一种特殊的对象，可以从它那里逐部分地读取（或写入）。Blob 接口里的 `.stream()` 方法返回一个 ReadableStream，在被读取时可以返回 Blob 中包含的数据。

```javascript
// 从 blob 获取可读流（readableStream）
const readableStream = blob.stream()
const stream = readableStream.getReader()

while (true) {
  // 对于每次迭代：value 是下一个 blob 数据片段
  let { done, value } = await stream.read()
  if (done) {
    // 读取完毕 stream 里已经没有数据了
    console.log('all blob processed.')
    break
  }

  // 对刚从 blob 中读取的数据片段做一些处理
  console.log(value)
}
```

**File / FileReader 对象**

- File 对象继承自 Blob，并扩展了与文件系统相关的功能。

```javascript
let file = new File(fileParts, fileName, [options])
```

| 参数 | 描述 |
| --- | --- |
| fileParts | Blob / BufferSource / String 类型值的数组 |
| fileName | 文件名 |
| options | 可选对象 |
| -> lastModified | 最后一次修改的时间戳（整数日期） |

- 常见的是从 `<input type="file">` 或拖放或其他浏览器接口来获取文件。

```html
<input type="file" onchange="showFile(this)">

<script>
function showFile(input) {
  let file = input.files[0]

  alert(`File name: ${file.name}`)
  alert(`Last modified: ${file.lastModified}`)
}
</script>
```

- 输入 input 可以选择多个文件，因此 `input.files` 是一个类数组对象。
- FileReader 对象，其唯一目的是从 Blob（因此也从 File）对象中读取数据。

```javascript
let reader = new FileReader()
```

| 方法 | 描述 |
| --- | --- |
| .readAsArrayBuffer(blob) | 将数据读取为二进制格式的 ArrayBuffer |
| .readAsText(blob, [encoding]) | 将数据读取为给定编码（默认为 utf-8 编码）的文本字符串 |
| .readAsDataURL(blob) | 读取二进制数据，并将其编码为 base64 的 dataUrl |
| .abort() | 取消操作 |

```html
<input type="file" onchange="readFile(this)">

<script>
function readFile(input) {
  let file = input.files[0]

  let reader = new FileReader()

  reader.readAsText(file)

  reader.onload = function() {
    console.log(reader.result)
  }

  reader.onerror = function() {
    console.log(reader.error)
  }
}
</script>
```

- 在很多情况下，不必读取文件内容，就像处理 Blob 一样，可以使用 `URL.createObjectURL(file)` 创建一个短的 URL，并将其赋给 `<a>` 或 `<img>` 这样，文件便可以下载文件或者将其呈现为图像，作为 Canvas 等的一部分，如果要通过网络发送一个 File，像 XMLHttpRequest 或 fetch 等网络 API 本身就接受 File 对象。

### 31 - LocalStorge / SessionStorage

- Web 存储对象 localStorage 和 sessionStorage 允许在浏览器上保存键 / 值对。
- 与 cookie 不同，Web 存储对象不会随每个请求被发送到服务器，因此，可以保存更多数据，大多数现代浏览器都允许保存至少 5 MB 的数据，并且具有用于配置数据的设置。还有一点和 cookie 不同，服务器无法通过 HTTP header 操纵存储对象，一切都是在 JS 中完成的，存储绑定到源（域/协议/端口三者），也就是说，不同协议或子域对应不同的存储对象，它们之间无法访问彼此数据。
- 两个存储对象都提供相同的方法和属性：

| 方法 | 描述 |
| --- | --- |
| .setItem(key, value) | 存储键 / 值对 |
| .getItem(key) | 按照键获取值 |
| .key(index) | 获取该索引下的键名 |
| .removeItem(key) | 删除键及其对应的值 |
| .clear() | 删除所有数据 |
| .length | 存储的内容的长度 |

- localStorage 的特点是：在同源的所有标签页和窗口之间共享数据。数据不会过期，它在浏览器重启甚至系统重启后仍然存在。键和值都必须是字符串，如果是任何其他类型，例数字或对象，它会被自动转换为字符串。
- sessionStorage 的特点是：数据只存在于当前浏览器标签页，具有相同页面的另一个标签页中将会有不同的存储。但在同一标签页下的 `<iframe>` 之间是共享的（假如它们来自相同的源）。数据在页面刷新后仍然保留，但在关闭/重新打开浏览器标签页后不会被保留。
- 当 localStorage 或 sessionStorage 中的数据更新后，storage 事件就会触发，此时 event 对象具有以下属性：

| 属性 | 描述 |
| --- | --- |
| .key | 发生更改的数据的 key，如果调用的是 .clear() 方法，则为 null |
| .oldValue | 旧值，如果是新增数据，则为 null |
| .newValue | 新值，如果是删除数据，则为 null |
| .url | 发生数据更新的文档的 url |
| .storageArea | 发生数据更新的 localStorage 或 sessionStorage 对象 |

### 32 - IndexedDB

- IndexedDB 是一个浏览器内建的数据库，通过支持多种类型的键，来存储几乎可以是任何类型的值。支持键值范围查询、索引，和 localStorage 相比它可以存储更大的数据量。IndexedDB 适用于离线应用，可与 ServiceWorkers 和其他技术相结合使用。

- 打开数据库 `let openRequest = indexedDB.open(name, version)`

| 参数 | 描述 |
| --- | --- |
| name | 数据库的名称 |
| version | 一个正整数版本，默认为 1，调用之后会返回 |

- 监听 openRequest 对象上的事件。

| 事件 | 描述 |
| --- | --- |
| success | 数据库准备就绪 |
| error | 打开失败 |
| upgradeneeded | 数据库已准备就绪，但其版本已过时 |

- 如果本地数据库版本低于 `.open()` 中指定的版本，会触发一个特殊事件 upgradeneeded，可以根据需要比较版本并升级数据结构。

```javascript
let openRequest = indexedDB.open("store", 1)

openRequest.onupgradeneeded = function() {
  // 如果客户端没有数据库则触发
  // ...执行初始化...
}

openRequest.onerror = function() {
  console.error("Error", openRequest.error)
}

openRequest.onsuccess = function() {
  let db = openRequest.result
  // 继续使用 db 对象处理数据库
}
```

- 删除数据库 `let deleteRequest = indexedDB.deleteDatabase(name)`
- `deleteRequest.onsuccess/onerror` 用于追踪（tracks）结果。
- versionchange 事件会在过时的数据库对象上触发。需要监听这个事件，关闭对旧版本数据库的连接，还应该建议访问者重新加载页面，以加载最新的代码。

```javascript
let openRequest = indexedDB.open("store", 2)

openRequest.onupgradeneeded = ...
openRequest.onerror = ...

openRequest.onsuccess = function() {
  let db = openRequest.result

  db.onversionchange = function() {
    db.close()
    alert("Database is outdated, please reload the page.")
  }

  // ……数据库已经准备好，请使用它……
}

openRequest.onblocked = function() {
  // 如果正确处理了 onversionchange 事件，这个事件就不应该触发
  // 这意味着还有另一个指向同一数据库的连接
  // 并且在 db.onversionchange 被触发后，该连接没有被关闭
}
```

- 对象库是 IndexedDB 的核心概念，在其他数据库中对应的对象称为表或集合，它是储存数据的地方。一个数据库可能有多个存储区，尽管被命名为对象库，但也可以存储原始类型。有一种对象不能被存储，即循环引用的对象，此类对象不可序列化，也不能进行 `JSON.stringify`
- 库中的每个值都必须有唯一的键 key，键的类型必须为数字、日期、字符串、二进制或数组。它是唯一的标识符，所以可以通过键来搜索/删除/更新值。

- 创建对象库 `let objectStore = db.createObjectStore(name, [keyOptions])`

| 参数 | 描述 |
| --- | --- |
| name | 存储区名称 |
| keyOptions | 可选对象 |
| -> keyPath | 对象属性的路径，IndexedDB 将以此路径作为键，例如 id |
| -> autoIncrement | 如果为 true，则自动生成新存储的对象的键，键是一个不断递增的数字 |

- 在 upgradeneeded 处理程序中，只有在创建数据库版本时，对象库被才能被创建/修改。

```javascript
let openRequest = indexedDB.open("db", 2)

// 创建/升级 数据库而无需版本检查
openRequest.onupgradeneeded = function(event) {
  let db = event.target.result

  if (!db.objectStoreNames.contains('books')) {
    db.createObjectStore('books', {keyPath: 'id'})
  }
}
```

- 删除对象库 `db.deleteObjectStore('books')`
- 事务是一组操作，要么全部成功，要么全部失败。所有数据操作都必须在 IndexedDB 中的事务内进行。
- 启动事务 `db.transaction(store, [type])`

| 参数 | 描述 |
| --- | --- |
| store | 事务要访问的库名称，要访问多个库，则是库名称的数组 |
| type | 事务类型 |
| -> readonly | 只读，默认值 |
| -> readwrite | 只能读取和写入数据，而不能创建/删除/更改对象库 |

```javascript
let transaction = db.transaction("books", "readwrite")

// 获取对象库进行操作
let books = transaction.objectStore("books")

let book = {
  id: 'js',
  price: 10,
  created: new Date()
}

let request = books.add(book)

request.onsuccess = function() {
  console.log("Book added to the store", request.result)
}

request.onerror = function() {
  console.log("Error", request.error)
}
```

- 对象库支持两种存储值的方法：

| 方法 | 描述 |
| --- | --- |
| .put(value, [key]) | 将 value 添加到存储区，仅当对象库没有 keyPath 或 autoIncrement 时，才提供 key，如果已经存在具有相同键的值，则将替换该值 |
| .add(value, [key]) | 与 put 相同，但是如果已经有一个值具有相同的键，则请求失败，并生成一个名为 ConstraInterror 的错误 |

- 当所有事务的请求完成，并且微任务队列为空时，它将自动提交。为了检测到成功完成的时刻，可以监听 `transaction.oncomplete` 事件。
- 要手动中止事务，调用 `transaction.abort()` 取消请求里所做的所有修改，并触发 `transaction.onabort` 事件。
- 失败的请求将自动中止事务，并取消所有的更改。
- 自己去处理失败事务（例如尝试另一个请求）并让它继续执行，而不是取消现有的更改。可以调用 `request.onerror` 处理程序，在其中调用 `event.preventDefault()` 防止事务中止。
- IndexedDB 事件冒泡：请求 → 事务 → 数据库。可以通过在 `request.onerror` 中使用 `event.stopPropagation()` 来停止冒泡，从而停止 `db.onerror` 事件。

```javascript
request.onerror = function(event) {
  if (request.error.name == "ConstraintError") {
    console.log("Book with such id already exists")  // 处理错误
    event.preventDefault()  // 不要中止事务
    event.stopPropagation()  // 不要让错误冒泡, 停止它的传播
  } else {
    // 什么都不做
    // 事务将中止
    // 可以解决 transaction.onabort 中的错误
  }
}
```

- 对象库有两种主要的搜索类型：通过键值或键值范围。
- 在 books 存储中，将是 `book.id` 的值或值的范围。通过另一个对象字段，例如 `book.price`，这需要一个额外的数据结构，名为索引（index）
- IDBKeyRange 对象，指定一个可接受的键值范围，IDBKeyRange 对象是通过下列调用创建的：

| 方法 | 描述 |
| --- | --- |
| IDBKeyRange.lowerBound(lower, [open]) | 表示：≥ lower（如果 open 是 true，表示 > lower） |
| IDBKeyRange.upperBound(upper, [open]) | 表示：≤ upper（如果 open 是 true，表示 < upper） |
| IDBKeyRange.bound(lower, upper, [lowerOpen], [upperOpen]) | 表示: 在 lower 和 upper 之间（如果 open 为 true，则相应的键不包括在范围中） |
| IDBKeyRange.only(key) | 仅包含一个键的范围 key，很少使用 |

- 要进行实际的搜索，有以下方法，它们接受一个可以是精确键值或键值范围的 query 参数：

| 方法 | 描述 |
| --- | --- |
| store.get(query) | 按键或范围搜索第一个值 |
| store.getAll([query], [count]) | 搜索所有值，如果 count 给定，则按 count 进行限制 |
| store.getKey(query) | 搜索满足查询的第一个键，通常是一个范围 |
| store.getAllKeys([query], [count]) | 搜索满足查询的所有键，通常是一个范围，如果 count 给定，则最多为 count |
| store.count([query]) | 获取满足查询的键的总数，通常是一个范围 |

```javascript
// 获取一本书
books.get('js')

// 获取 'css' <= id <= 'html' 的书
books.getAll(IDBKeyRange.bound('css', 'html'))

// 获取 id < 'html' 的书
books.getAll(IDBKeyRange.upperBound('html', true))

// 获取所有书
books.getAll()

// 获取所有 id > 'js' 的键
books.getAllKeys(IDBKeyRange.lowerBound('js', true))
```

- 对象内部存储的值是按键对值进行排序的，因此请求的返回值，是按照键的顺序排列的。
- 索引是存储的附加项，用于跟踪给定的对象字段。对于该字段的每个值，它存储有该值的对象的键列表。
- 创建索引 `objectStore.createIndex(name, keyPath, [options])`

| 参数 | 描述 |
| --- | --- |
| name | 索引名称 |
| keyPath | 索引应该跟踪的对象字段的路径（将根据该字段进行搜索） |
| option | 可选对象 |
| -> unique | 如果为true，则存储中只有一个对象在 keyPath 上具有给定值，如果尝试添加重复项，索引将生成错误 |
| -> multiEntry | 只有 keypath 上的值是数组时才使用。默认情况下，索引将默认把整个数组视为键。但是如果 multiEntry 为 true，那么索引将为该数组中的每个值保留一个存储对象的列表，所以数组成员成为了索引键 |

```javascript
openRequest.onupgradeneeded = function() {
  // 在 versionchange 事务中，必须在这里创建索引
  let books = db.createObjectStore('books', {keyPath: 'id'})
  let index = books.createIndex('price_idx', 'price')
}
```

- `delete` 方法查找要由查询删除的值，调用格式类似于 `getAll`。`books.delete(query)` 通过查询删除匹配的值，`books.clear()` 删除所有内容。
- 像 `getAll/getAllKeys` 这样的方法，会返回一个键/值数组。光标是一种特殊的对象，它在给定查询的情况下遍历对象库，一次返回一个键/值，从而节省内存。由于对象库是按键在内部排序的，因此光标按键顺序（默认为升序）遍历存储。
- 类似于 getAll，但带有光标 `let request = store.openCursor(query, [direction])` 获取键，而不是值（例如 getAllKeys）

| 参数 | 描述 |
| --- | --- |
| query | 是一个键值或键值范围，与 getAll 相同 |
| direction | 可选参数 |
| -> next | 默认值，光标从有最小索引的记录向上移动 |
| -> prev | 相反的顺序，从有最大的索引的记录开始下降 |
| -> nextunique/prevunique | 同上，但是跳过键相同的记录，仅适用于索引上的光标 |

- 光标对象的主要区别在于 `request.onSuccess` 多次触发，每个结果触发一次。

| 方法 | 描述 |
| --- | --- |
| .advance(count) | 将光标向前移动 count 次，跳过值 |
| .continue([key]) | 将光标移至匹配范围中的下一个值（如果给定键，紧接键之后） |

- 无论是否有更多的值匹配光标调用 onsuccess，结果中，可以获得指向下一条记录的光标，或者 undefined
- 索引是允许按对象字段进行搜索，在索引上的光标与在对象存储上的光标完全相同，它们通过一次返回一个值来节省内存。
- 使用一个轻便的承诺包装器 [https://github.com/jakearchibald/idb](https://github.com/jakearchibald/idb) 。它使用 promisified IndexedDB 方法创建全局 idb 对象，可以不使用 onsuccess/onerror，而是这样写：

```javascript
let db = await idb.openDB('store', 1, db => {
  if (db.oldVersion == 0) {
    // 执行初始化
    db.createObjectStore('books', {keyPath: 'id'})
  }
})

let transaction = db.transaction('books', 'readwrite')
let books = transaction.objectStore('books')

try {
  await books.add(...)
  await books.add(...)

  await transaction.complete

  console.log('jsbook saved')
} catch(err) {
  console.log('error', err.message)
}

// 错误处理
window.addEventListener('unhandledrejection', event => {
  let request = event.target  // IndexedDB 本机请求对象
  let error = event.reason  //  未处理的错误对象，与 request.error 相同
  // ……报告错误……
})
```

- 浏览器一旦执行完成当前的代码和微任务之后，事务就会自动提交，因此，如果在事务中间放置一个类似 fetch 的宏任务，事务只是会自动提交，而不会等待它执行完成，所以下一个请求会失败。

### 33 - 动画

- 贝塞尔曲线用于计算机图形绘制形状，贝塞尔曲线由控制点定义。
- 时间函数 `steps(number of steps, [start/end])` 允许让动画分段进行，`number of steps` 表示需要拆分为多少段。
- transitionend 的事件对象 event 有几个特定的属性：

| 属性 | 描述 |
| --- | --- |
| .propertyName | 当前完成动画的属性，这在同时为多个属性加上动画时会很有用 |
| .elapsedTime | 动画完成的时间（按秒计算），不包括 transition-delay |

- 使用 `setInterval()` 重复调用一个函数或执行一个代码片段来控制动画：

```javascript
elem.onclick = function() {
  let start = Date.now()

  let timer = setInterval(function() {
    let timePassed = Date.now() - start

    train.style.left = timePassed / 5 + 'px'

    if (timePassed > 2000) clearInterval(timer)

    }, 20)
  }
```

- 使用 `let requestId = requestAnimationFrame(callback)` 告诉浏览器执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。会让 callback 函数在浏览器每次重绘的最近时间运行。返回值 requestId 可用来取消回调，取消回调的周期执行 `cancelAnimationFrame(requestId)`

```javascript
function animate({timing, draw, duration}) {
  let start = performance.now()

  requestAnimationFrame(function animate(time) {
    // timeFraction 从 0 增加到 1
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1

    // 计算当前动画状态
    let progress = timing(timeFraction)

    draw(progress)  // 绘制

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }
  })
}
```

- `animate()` 函数接受 3 个描述动画的基本参数：

| 参数 | 描述 |
| --- | --- |
| timing | 时序函数 |
| draw | 获取动画完成状态并绘制的函数 |
| duration | 动画总时间，比如 1000 |

- 时序函数是类似 CSS 属性 `transition-timing-function`，传入一个已过去的时间与总时间之比的小数（0 代表开始，1 代表结束），返回动画完成度（类似 Bezier 曲线中的 y）。
- 值 `progress = 0` 表示开始动画状态，`progress = 1` 表示结束状态，这是实际绘制动画的函数。
- （1）n 次幂的抛物线：

```javascript
function quad(timeFraction) {
  return Math.pow(timeFraction, 2)
}
```

- （2）圆弧：

```javascript
function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction))
}
```

- （3）反弹、弓箭射击：

```javascript
function back(x, timeFraction) {
  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
}
```

- （4）弹跳：

```javascript
function bounce(timeFraction) {
  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}
```

- （5）伸缩：

```javascript
function elastic(x, timeFraction) {
  return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
}
```

- 变换函数 `makeEaseOut()`，接受一个常规时序函数 `timing` 并返回一个封装器，里面封装了 `timing` 函数：

```javascript
// 接受时序函数，返回变换后的变体
function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction)
  }
}
```

- 在动画的开头和结尾都显示效果，该变换称为 easeInOut：

```javascript
function makeEaseInOut(timing) {
  return function(timeFraction) {
    if (timeFraction < .5)
      return timing(2 * timeFraction) / 2
    else
      return (2 - timing(2 * (1 - timeFraction))) / 2
  }
}
```

### 34 - Web Components

- 一个组件有自己的 JS 类与 DOM 结构，并且只由自己的类管理，无法被外部代码操作。API 指事件、类方法等，让组件可以与其他组件交互。
- 可以通过描述带有自己的方法、属性和事件等的类来创建自定义 HTML 元素。在 Custom elements（自定义标签）定义完成之后，可以将其和 HTML 的内建标签一同使用。
- Custom elements 有两种：一种是 Autonomous custom elements（自主自定义标签），全新的元素，继承自 HTMLElement 抽象类；另一种是Customized built-in elements（自定义内建元素），继承内建的 HTML 元素，比如自定义 HTMLButtonElement 等。

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super()
    // 元素在这里创建
  }

  connectedCallback() {
    // 在元素被添加到文档之后，浏览器会调用这个方法
    // 如果一个元素被反复添加到文档／移除文档，那么这个方法会被多次调用
  }

  disconnectedCallback() {
    // 在元素从文档移除的时候，浏览器会调用这个方法
    // 如果一个元素被反复添加到文档／移除文档，那么这个方法会被多次调用
  }

  static get observedAttributes() {
    return [/* 属性数组，这些属性的变化会被监视 */]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // 当上面数组中的属性发生变化的时候，这个方法会被调用
  }

  adoptedCallback() {
    // 在元素被移动到新的文档的时候，这个方法会被调用
    // document.adoptNode 会用到, 非常少见
  }
  // 还可以添加更多的元素方法和属性
}

// 注册元素，让浏览器知道新定义的类是为 <my-element> 服务的
customElements.define("my-element", MyElement)
```

- Custom element 名称必须包括一个短横线,，比如 `my-element` 和 `super-button` 都是有效的元素名，这是为了确保 Custom element 和内建 HTML 元素之间不会发生命名冲突。
- 为了监视这些属性，可以在 `observedAttributes()` static getter 中提供属性列表。当这些属性发生变化的时候，`attributeChangedCallback` 会被调用。出于性能优化的考虑，其他属性变化的时候并不会触发这个回调方法。

```html
<script>
class TimeFormatted extends HTMLElement {
  render() {
    let date = new Date(this.getAttribute('datetime') || Date.now())

    this.innerHTML = new Intl.DateTimeFormat("default", {
      year: this.getAttribute('year') || undefined,
      month: this.getAttribute('month') || undefined,
      day: this.getAttribute('day') || undefined,
      hour: this.getAttribute('hour') || undefined,
      minute: this.getAttribute('minute') || undefined,
      second: this.getAttribute('second') || undefined,
      timeZoneName: this.getAttribute('time-zone-name') || undefined
    }).format(date)
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render()
      this.rendered = true
    }
  }

  static get observedAttributes() {
    return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render()
  }
}

customElements.define("time-formatted", TimeFormatted)
</script>

<time-formatted id="elem" hour="numeric" minute="numeric" second="numeric"></time-formatted>

<script>
setInterval(() => elem.setAttribute('datetime', new Date()), 1000)
</script>
```

- 在 HTML 解析器构建 DOM 的时候，会按照先后顺序处理元素，先处理父级元素再处理子元素。如果需要子元素，可以使用延迟时间为零的 `setTimeout` 来推迟访问子元素。

```html
<script>
// 这个按钮在被点击的时候说 hello
class HelloButton extends HTMLButtonElement {
  constructor() {
    super()
    this.addEventListener('click', () => alert("Hello!"))
  }
}

customElements.define('hello-button', HelloButton, {extends: 'button'})
</script>

<button is="hello-button">Click me</button>
```

- Shadow DOM 为封装而生，可以让一个组件拥有自己的影子 DOM 树，这个 DOM 树不能在主文档中被任意访问，可能拥有局部样式规则，还有其他特性。
- 一个 DOM 元素可以有以下两类 DOM 子树，一类是 Light tree（光明树），即常规 DOM 子树，由 HTML 子元素组成，另一类是 Shadow tree（影子树），一个隐藏的 DOM 子树，不在 HTML 中反映，无法被察觉。
- 如果一个元素同时有以上两种子树，那么浏览器只渲染 Shadow tree，但是同样可以设置两种树的组合。

```html
<script>
customElements.define('show-hello', class extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'})
    shadow.innerHTML = `<p>
      Hello, ${this.getAttribute('name')}
    </p>`
  }
})
</script>

<show-hello name="John"></show-hello>
```

- `Element.attachShadow({mode: …})` 可以创建一个 Shadow tree，这里有两个限制，一是在每个元素中，只能创建一个 Shadow root，二是 Element 必须是自定义元素，或者是以下元素的其中一个：`「article」`、`「aside」`、`「blockquote」`、`「body」`、`「div」`、`「footer」`、`「h1…h6」`、`「header」`、`「main」`、`「nav」`、`「p」`、`「section」`、`「span」`，其他元素，如 `<img>`，不能容纳 Shadow tree。mode 选项可以设定封装层级，必须是以下两个值之一：

| 参数 | 描述 |
| --- | --- |
| open | Shadow root 可以通过 `elem.shadowRoot` 访问，任何代码都可以访问 Element 的 Shadow tree |
| closed | `elem.shadowRoot` 永远是 null，只能通过 `attachShadow` 返回的指针来访问 Shadow DOM（并且可能隐藏在一个 class 中） |

- 浏览器原生的 Shadow tree，比如 `<input type="range">` 是封闭的，没有任何方法可以访问它们。
- Shadow DOM 元素对于 Light DOM 中的 `querySelector` 不可见。Shadow DOM 中的元素可能与 Light DOM 中某些元素的 id 冲突，这些元素必须在 Shadow tree 中独一无二，Shadow DOM 有自己的样式，外部样式规则在 Shadow DOM 中不产生作用。

```html
<style>
  /* 文档样式对 #elem 内的 shadow tree 无作用 */
  p { color: red }
</style>

<div id="elem"></div>

<script>
  elem.attachShadow({mode: 'open'})
  // shadow tree 有自己的样式
  elem.shadowRoot.innerHTML = `
    <style> p { font-weight: bold } </style>
    <p>Hello, John!</p>
  `

  // <p> 只对 shadow tree 里面的查询可见
  alert(document.querySelectorAll('p').length)  // 0
  alert(elem.shadowRoot.querySelectorAll('p').length)  // 1
</script>
```

- 内建的 `<template>` 元素用来存储 HTML 模板，浏览器将忽略它的内容，仅检查语法的有效性，但可以在 JS 中访问和使用它来创建其他元素。

```javascript
<template id="tmpl">
  <style> p { font-weight: bold } </style>
  <p id="message"></p>
</template>

<div id="elem">Click me</div>

<script>
  elem.onclick = function() {
    elem.attachShadow({mode: 'open'})

    elem.shadowRoot.append(tmpl.content.cloneNode(true))

    elem.shadowRoot.getElementById('message').innerHTML = "Hello from the shadows!"
  }
</script>
```

- `<template>` 的内容可以是任何语法正确的 HTML，`<template>` 内容被视为超出文档范围，因此它不会产生任何影响。可以在 JS 中访问 `template.content`，将其克隆以在新组件中重复使用。
- 通常，如果一个元素含有 Shadow DOM，那么其 Light DOM 就不会被展示出来，插槽允许在 Shadow DOM 中显示 Light DOM 子元素。Shadow DOM 支持 `<slot>` 元素，由 Light DOM 中的内容自动填充。

```html
<script>
customElements.define('user-card', class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = `
      <div>Name:
        <slot name="username"></slot>
      </div>
      <div>Birthday:
        <slot name="birthday"></slot>
      </div>
    `
  }
})
</script>

<user-card>
  <span slot="username">John Smith</span>
  <span slot="birthday">01.01.2001</span>
</user-card>
```

- `<slot name="X">` 定义了一个插入点，一个带有 `slot="X"` 的元素被渲染的地方。属性仅仅对 Shadow host 的直接子代有效，对于嵌套元素它将被忽略。
- 如果在 Light DOM 里有多个相同插槽名的元素，那么它们会被一个接一个地添加到插槽中。
- 如果在一个 `<slot>` 内部放点什么，它将成为后备内容，如果 Light DOM 中没有相应填充物的话浏览器就展示它。
- Shadow DOM 中第一个没有名字的 `<slot>` 是一个默认插槽，它从 Light DOM 中获取没有放置在其他位置的所有节点。
- 如果添加/删除了插槽元素，浏览器将监视插槽并更新渲染。如果组件想知道插槽的更改，那么可以用 slotchange 事件。

```html
<custom-menu id="menu">
  <span slot="title">Candy menu</span>
</custom-menu>

<script>
customElements.define('custom-menu', class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = `<div class="menu">
      <slot name="title"></slot>
      <ul><slot name="item"></slot></ul>
    </div>`

    this.shadowRoot.firstElementChild.addEventListener('slotchange',
      e => alert("slotchange: " + e.target.name)
    )
  }
})

setTimeout(() => {
  menu.insertAdjacentHTML('beforeEnd', '<li slot="item">Lollipop</li>')
}, 1000)

setTimeout(() => {
  menu.querySelector('[slot="title"]').innerHTML = "New menu"
}, 2000)
</script>
```

- `node.assignedSlot` 返回 node 分配给的 `<slot>` 元素。
- `slot.assignedNodes({flatten: true/false})` 分配给插槽的 DOM 节点。默认情况下，flatten 选项为 false，如果显式地设置为 true，则它将更深入地查看扁平化 DOM ，如果嵌套了组件，则返回嵌套的插槽，如果未分配节点，则返回备用内容。
- `slot.assignedElements({flatten: true/false})` 分配给插槽的 DOM 元素，与上面相同，但仅元素节点。

```html
<custom-menu id="menu">
  <span slot="title">Candy menu</span>
  <li slot="item">Lollipop</li>
  <li slot="item">Fruit Toast</li>
</custom-menu>

<script>
customElements.define('custom-menu', class extends HTMLElement {
  items = []

  connectedCallback() {
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = `<div class="menu">
      <slot name="title"></slot>
      <ul><slot name="item"></slot></ul>
    </div>`

    // 插槽能被添加/删除/代替
    this.shadowRoot.firstElementChild.addEventListener('slotchange', e => {
      let slot = e.target
      if (slot.name == 'item') {
        this.items = slot.assignedElements().map(elem => elem.textContent)
        alert("Items: " + this.items)
      }
    })
  }
})

// items 在 1 秒后更新
setTimeout(() => {
  menu.insertAdjacentHTML('beforeEnd', '<li slot="item">Cup Cake</li>')
}, 1000)
</script>
```

- Shadow DOM 可以包含 `<style>` 和 `<link rel="stylesheet" href="…">` 标签，在后一种情况下，样式表是 HTTP 缓存的，因此不会为使用同一模板的多个组件重新下载样式表。
- `:host` 选择器允许选择 Shadow 宿主（包含 Shadow 树的元素）
- Shadow 宿主（ `<custom-dialog>` 本身）驻留在 Light DOM 中，因此它受到文档 CSS 规则的影响。如果在局部的 `:host` 和文档中都给一个属性设置样式，那么文档样式优先。唯一的例外是当局部属性被标记 `!important` 时，对于这样的属性，局部样式优先。
- `:host(selector)` 与 `:host` 相同，但仅在 Shadow 宿主与 selector 匹配时才应用样式。
- `:host-context(selector)` 与 `:host` 相同，但仅当外部文档中的 Shadow 宿主或它的任何祖先节点与 selector 匹配时才应用样式。
- 占槽元素来自 Light DOM，所以它们使用文档样式，局部样式不会影响占槽内容。如果想要在组件中设置占槽元素的样式，有两种选择：首先可以对 `<slot>` 本身进行样式化，并借助 CSS 继承；另一个选项是使用 `::slotted(selector)` 伪类，它根据两个条件来匹配元素，这是一个占槽元素，来自于 Light DOM，插槽名并不重要，任何占槽元素都可以，但只能是元素本身，而不是它的子元素 ，该元素与 selector 匹配，`::slotted` 选择器不能用于任何插槽中更深层的内容，`::sloated` 只能在 CSS 中使用，不能在 `querySelector` 中使用。
- 自定义 CSS 属性存在于所有层次，包括 Light DOM 和 Shadow DOM

- Shadow tree 背后的思想是封装组件的内部实现细节：

```html
<user-card></user-card>

<script>
  customElements.define('user-card', class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({mode: 'open'})
      this.shadowRoot.innerHTML = `<p>
        <button>Click me</button>
      </p>`
      this.shadowRoot.firstElementChild.onclick =
        e => alert("Inner target: " + e.target.tagName)
    }
  })

  document.onclick = e => alert("Outer target: " + e.target.tagName)
</script>
```

- 当事件在组件外部捕获时，Shadow DOM 中发生的事件将会以 `host` 元素作为目标。事件重定向是一件很棒的事情，因为外部文档并不需要知道组件的内部情况，从它的角度来看，事件是发生在 `<user-card>`
- 如果事件发生在 `slotted` 元素上，实际存在于 Light DOM 上，则不会发生重定向。

```html
<user-card id="userCard">
  <span slot="username">John Smith</span>
</user-card>

<script>
customElements.define('user-card', class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = `<div>
      <b>Name:</b> <slot name="username"></slot>
    </div>`

    this.shadowRoot.firstElementChild.onclick =
      e => alert("Inner target: " + e.target.tagName)
  }
})

userCard.onclick = e => alert(`Outer target: ${e.target.tagName}`)
</script>
```

- 如果单击事件发生在 John Smith 上，则对于内部和外部处理程序来说，其目标是 `<span slot="username">`，这是 Light DOM 中的元素，所以没有重定向。另一方面，如果单击事件发生在源自 Shadow DOM 的元素上，例如，在 Name 上，然后当它冒泡出 Shadow DOM 后，其 `event.target` 将重置为 `<user-card>`
- 出于事件冒泡的目的，使用扁平 DOM。如果有一个 `slot` 元素，并且事件发生在它的内部某个地方，那么它就会冒泡到 `<slot>` 并继续向上，使用 `event.composedPath()` 获得原始事件目标的完整路径以及所有 Shadow 元素。

```html
<user-card id="userCard">
  #shadow-root
    <div>
      <b>Name:</b>
      <slot name="username">
        <span slot="username">John Smith</span>
      </slot>
    </div>
</user-card>
```

- 对于 `<span slot="username">` 上的点击事件，会调用 `event.composedPath()` 并返回一个数组 `[span, slot, div, shadow-root, user-card, body, html, document, window]`，在组合之后，这正是扁平 DOM 中目标元素的父链。
- Shadow 树详细信息仅提供给 `{mode:'open'}` 树，如果 Shadow 树是用 `{mode: 'closed'}` 创建的，那么组合路径就从 `host` 开始`user-card` 及其更上层。
- 大多数事件能成功冒泡到 Shadow DOM 边界，很少有事件不能冒泡到 Shadow DOM 边界。这由 `composed` 事件对象属性控制，如果 `composed` 是 true，那么事件就能穿过边界，否则它仅能在 Shadow DOM 内部捕获。内建事件大部分都是 `composed: true` 的。
- 当发送自定义事件，需要设置 `bubbles` 和 `composed` 属性都为 true 以使其冒泡并从组件中冒泡出来。

```html
<div id="outer"></div>

<scrip>
outer.attachShadow({mode: 'open'})

let inner = document.createElement('div')
outer.shadowRoot.append(inner)

/*
div(id=outer)
  #shadow-dom
    div(id=inner)
*/

document.addEventListener('test', event => alert(event.detail))

inner.dispatchEvent(new CustomEvent('test', {
  bubbles: true,
  composed: true,
  detail: "composed"
}))

inner.dispatchEvent(new CustomEvent('test', {
  bubbles: true,
  composed: false,
  detail: "not composed"
}))
</script>
```

## （三）正则表达式

- 正则表达式是搜索和替换字符串的一种强大方式，通过内建的 RegExp(regular expression) 类的对象来实现并与字符串集成。正则表达式包含模式和可选的修饰符。
- 创建一个正则表达式对象，一种方式是 `regexp = new RegExp("pattern", "flags")`，另一种方式是 `regexp = /pattern/gmi`
- `.match()` 方法检索返回一个字符串匹配正则表达式的结果。
- `.test()` 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。

**修饰符**

- 正则表达式的修饰符会影响搜索结果，有 6 个修饰符：

| 修饰符 | 描述 |
| --- | --- |
| /i | 搜索时不区分大小写 |
| /g | 搜索时会查找所有的匹配项 |
| /m | 启用多行模式 |
| /s | 启用 dotall 模式，允许点 `.` 匹配换行符 `\n` |
| /u | 启用完整的 unicode 支持 |
| /y | 启用粘滞模式 |

**字符类**

- 字符类是一个特殊的符号，匹配特定的任何符号：

| 种类 | 描述 |
| --- | --- |
| **字符类** |  |
| \d | 数字，包括 0 到 9 的字符 |
| \s | 空格，包括空格、制表符 \t、换行符 \n、其他少数稀有字符，例如 \v \f \r |
| \w | 单字字符，包括拉丁字母、数字、下划线 _ |
| **反向字符类** |  |
| \D | 非数字，除 \d 以外的任何字符 |
| \S | 非空格，除 \s 以外的任何字符 |
| \W | 非单字字符，除 \w 以外的任何字符 |
| **特殊字符类** |  |
| . | 与除换行符之外的任何字符匹配，表示任何字符，而不是缺少字符，必须有一个与之匹配的字符 |
| **其他** |  |
| \s\S | 空格或非空格，即任何东西 |
| \d\D | 数字或非数字，即任何东西 |

- 带有 `/s` 标志时点字符类严格匹配任何字符。
- 空格是一个字符，与其他字符同等重要。

```javascript
alert("I love HTML5!".match(/\s\w\w\w\w\d/))  // HTML5

alert("A\nB".match(/A[\s\S]B/))  // A（换行）B
```

**Unicode**

- JS 使用 Unicode 编码对字符串进行编码。大多数字符使用 2 个字节编码，但这种方式只能编码最多 65536 个字符， 4 个字节对一些罕见的字符进行编码，例如：😀
- 默认情况下，正则表达式同样把一个 4 个字节的长字符当成一对 2 个字节长的字符。`/u` 当一个正则表达式使用这个修饰符后，4 个字节长的字符将被正确地处理。
- 查找具有某种属性的字符，写作 `\p{…}`

```javascript
let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u
alert("number: xAF".match(regexp))  // xAF

let regexp = /\p{sc=Han}/gu
let str = `Hello Привет 你好 123_456`
alert(str.match(regexp))  // 你,好
```
**锚点**

- 锚点：插入符号 `^` 匹配文本开头，美元符号 `$`  则匹配文本末尾。锚点属于测试，它们的宽度为零。

```javascript
let str1 = "Mary had a little lamb"
alert(/^Mary/.test(str1))  // true

let str1 = "it's fleece was white as snow"
alert(/snow$/.test(str1))  // true
```

- 两个锚点 `^...$` 放在一起被用于测试一个字符串是否完全匹配一个模式，比如，测试用户的输入是否符合正确的格式。

```javascript
let goodInput = "12:34"
let badInput = "12:345"

let regexp = /^\d\d:\d\d$/
alert(regexp.test(goodInput))  // true
alert(regexp.test(badInput))  // false
```

- 通过 `/m` 可以开启多行模式，这仅仅会影响 `^` 和 `$` 锚符的行为。在多行模式下，它们不仅仅匹配文本的开始与结束，还匹配每一行的开始与结束。

```javascript
// /^\d+/gm 将匹配每一行的开头数字
let str = `1st place: Winnie
2nd place: Piglet
33rd place: Eeyore`

alert(str.match(/^\d+/gm))  // 1, 2, 33
```

- 默认情况下，锚符 `^` 仅匹配文本的开头，在多行模式下，它匹配行的开头。
- 要寻找新的一行的话，不仅可以使用锚符 `^` 和 `$`，也可以使用换行符 `\n`。它和锚符的第一个不同点是它不像锚符那样，它会消耗掉 `\n` 并且将其加入到匹配结果中，还有一个不同点，换行符 `\n` 不会匹配字符串结尾。

```javascript
let str = `1st place: Winnie
2nd place: Piglet
33rd place: Eeyore`

alert(str.match(/\w+\n/gim) )  // Winnie\n,Piglet\n
```

**边界词**

- 词边界 `\b` 是一种检查，就像锚点一样，当正则表达式引擎遇到 `\b` 时，它会检查字符串中的位置是否是词边界。
- 有三种不同的位置可作为词边界：第一种是在字符串开头，如果第一个字符是单词字符 `\w`。第二种是在字符串中的两个字符之间，其中一个是单词字符 `\w`，另一个不是。第三种是在字符串末尾，如果最后一个字符是单词字符 `\w`

```javascript
alert("Hello, Java!".match(/\bJava\b/))  // Java
alert("Hello, JavaScript!".match(/\bJava\b/))  // null
```

- `\b` 既可以用于单词，也可以用于数字，例如，模式 `\b\d\d\b` 查找独立的两位数。
- 词边界 `\b` 不适用于非拉丁字母。

**转义**

- 如果要把特殊字符作为常规字符来使用，只需要在它前面加个反斜杠，这种方式也被叫做转义一个字符。

```javascript
alert("Chapter 5.1".match(/\d\.\d/))  // 5.1
alert("function g()".match(/g\(\)/))  // g()
alert("1\\2".match(/\\/))  // \
alert("/".match(/\//))  // /
alert("/".match(new RegExp("/")))  // /
```

- 斜杠符号 `/` 并不是一个特殊符号，但是它被用于在 JS 中开启和关闭正则匹配 `/...pattern.../`，所以也应该转义它。
- 调用 `new RegExp()` 会获得一个没有反斜杠的字符串，要修复这个问题，需要双斜杠，因为引用会把 `\\` 变为 `\`
- 一个反斜杠 `\`  是用来表示匹配字符类的，所以它是一个特殊字符。

**集合与范围**

- 在方括号 `[…]` 中的几个字符或字符类意味着搜索给定的字符中的任意一个这被叫做一个集合。

```javascript
// 查找 [t 或 m]，然后再匹配 op
alert("Mop top".match(/[tm]op/gi))  // Mop, top

// 查找 V，然后匹配 [o 或 i]，之后再匹配 la
alert("Voila".match(/V[oi]la/))  // null
```

- 尽管在集合中有多个字符，但它们在匹配中只会对应其中的一个。
- 方括号也可以包含字符范围，比如说 `[a-z]` 会匹配从 a 到 z 范围内的字母，`[0-5]` 表示从 0 到 5 的数字。

```javascript
alert("Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g))  // xAF
```

- `[0-9A-F]` 表示两个范围：搜索一个字符，满足数字 0 到 9 或字母 A 到 F
- 可以在 `[…]` 里面使用字符类，`\d` 和 `[0-9]` 相同，`\w` 和 `[a-zA-Z0-9_]` 相同，`\s` 和 `[\t\n\v\f\r]` 外加少量罕见的 unicode 空格字符相同。
- 更通用的模式，该模式可以查找任何语言中的文字字符使用 Unicode 属性：`[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]`

```javascript
let regexp = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu

let str = `Hi 你好 12`;

alert( str.match(regexp) )  // H,i,你,好,1,2
```

- 类似 `[^…]`的排除范围匹配，通过在匹配查询的开头添加插入符号 `^` 来表示，它会匹配所有除了给定的字符之外的任意字符。

```javascript
alert("alice15 @gmail.com".match(/[^\d\sA-Z]/gi))  // @ .
```

- 在方括号表示中，绝大多数特殊字符可以在不转义的情况下使用。

```javascript
let reg = /[-().^+]/g;

alert("1 + 2 - 3".match(reg))  // + -
```

- 如果集合中有代理对，则需要标志 `/u` 以使其正常工作。
- 没有标志 `/u` 的代理对被视为两个字符。

```javascript
alert('𝒳'.match(/[𝒳𝒴]/u))  // 𝒳
```

**量词**

- 用来形容所需要的数量的词被称为量词，最明显的量词便是一对引号间的数字 `{n}`。在一个字符后跟着一个量词，用来指出具体需要的数量，`\d{5}` 表示 5 位的数字，如同 `\d\d\d\d\d`

```javascript
alert("I'm 12345 years old".match(/\d{5}/))  // 12345
```

- 某个范围的位数 `{3,5}`

```javascript
alert("I'm not 12, but 1234 years old".match(/\d{3,5}/))  // 1234
```

- 可以省略上限，那么正则表达式 `\d{3,}` 就会查找位数大于或等于 3 的数字。大多数常用的量词都可以有缩写，如下。
- `?` 代表零个或一个，相当于 `{0,1}`

```javascript
let str = "Should I write color or colour?"

alert(str.match(/colou?r/g))  // color, colour
```

- `*`代表着零个或多个，相当于 `{0,}`

```javascript
alert("100 10 1".match(/\d0*/g))  // 100, 10, 1
```

- `+` 代表一个或多个，相当于 `{1,}`

```javascript
let str = "+7(903)-123-45-67"

alert(str.match(/\d+/g))  // 7,903,123,45,67
```

**贪婪量词与惰性量词**

- 贪婪搜索：为了查找到一个匹配项，正则表达式引擎采用了以下算法，对于字符串中的每一个字符用这个模式来匹配此字符若无匹配，移至下一个字符。在贪婪模式下（默认），量词都会尽可能地重复多次。
- 懒惰模式：懒惰模式中的量词与贪婪模式中的是相反的，它想要重复最少次数。能够通过在量词之后添加一个问号 `?` 来启用它。通常，一个问号 `?` 就是一个它本身的量词（0 或 1），但如果添加另一个量词（甚至可以是它自己），就会有不同的意思，它将匹配的模式从贪婪转为懒惰。懒惰模式只能够通过带 `?` 的量词启用，其它的量词依旧保持贪婪模式。

**捕获组**

- 模式的一部分可以用括号括起来 `(...)`，这称为捕获组，将允许匹配的一部分作为结果数组中的单独项，如果将量词放在括号后，则它将括号视为一个整体。

```javascript
alert('Gogogo now!'.match(/(go)+/i) )  // Gogogo

let regexp = /(\w+\.)+\w+/g
alert("site.com my.site.com".match(regexp) )  // site.com,my.site.com

let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g
alert("my@mail.com @ his@site.com.uk".match(regexp))  // my@mail.com, his@site.com.uk
```

- 括号从左到右编号，正则引擎会记住它们各自匹配的内容，并允许在结果中获得它。

```javascript
let str = '<h1>Hello, world!</h1>'

let tag = str.match(/<(.*?)>/);

alert(tag[0])  // <h1>
alert(tag[1])  // h1
```

- 括号可以嵌套，在这种情况下，编号也从左到右。

```javascript
let str = '<span class="my">'

let regexp = /<(([a-z]+)\s*([^>]*))>/

let result = str.match(regexp)

alert(result[0])  // <span class="my">
alert(result[1])  // span class="my"
alert(result[2])  // span
alert(result[3])  // class="my"
```

- 即使组是可选的并且在匹配项中不存在（例如，具有数量词 (...)?），也存在相应的 result 数组项，并且等于 undefined

```javascript
let match = 'a'.match(/a(z)?(c)?/)

alert(match.length)  // 3
alert(match[0])  // a（完全匹配）
alert(match[1])  // undefined
alert(match[2])  // undefined

let match = 'ac'.match(/a(z)?(c)?/)

alert(match.length)  // 3
alert(match[0])  // ac（完全匹配）
alert(match[1])  // undefined，因为 (z)? 没匹配项
alert(match[2])  // c
```

- 搜索所有具有组的匹配项 `.matchAll()`
- 当搜索所有匹配项（标志 g）时，`.match()` 方法不会返回组的内容。

```javascript
let str = '<h1> <h2>'

let tags = str.match(/<(.*?)>/g)

alert(tags)  // <h1>,<h2>
// 结果是一个匹配数组，但没有每个匹配项的详细信息
```

- 由 `.matchAll()` 所返回的每个匹配，其格式与不带标志 `/g` 的 `.match()` 所返回的格式相同，它是一个具有额外的 index（字符串中的匹配索引）属性和 input（源字符串）的数组。
- 调用 `.matchAll()` 不会执行搜索，相反它返回一个可迭代的对象，最初没有结果。每当对它进行迭代时才会执行搜索，例如在循环中。因此这将根据需要找到尽可能多的结果，而不是全部。

```javascript
let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi)

alert(results)  // [object RegExp String Iterator]

alert(results[0])  // undefined (*)

results = Array.from(results)  // let's turn it into array

alert(results[0])  // <h1>,h1 (1st tag)
alert(results[1])  // <h2>,h2 (2nd tag)
```

- 计算括号很不方便，但有一个更好的选择，即给括号起个名字，是通过在开始括号之后立即放置 `?<name>` 来完成的。

```javascript
let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
let str = "2019-04-30";

let groups = str.match(dateRegexp).groups

alert(groups.year)  // 2019
alert(groups.month)  // 04
alert(groups.day)  // 30
```

```javascript
let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g

let str = "2019-10-30 2020-01_01"

let results = str.matchAll(dateRegexp)

for(let result of results) {
  let {year, month, day} = result.groups

  alert(`${day}.${month}.${year}`)
  // 第一个 alert：30.10.2019
  // 第二个 01.01.2020
}
```

- 方法 `str.replace(regexp, replacement)` 用 replacement 替换 str 中匹配 regexp 的所有捕获组。这使用 `$n` 来完成，其中 n 是组号，代表第 n 个捕获组。

```javascript
let str = "John Bull"
let regexp = /(\w+) (\w+)/

alert(str.replace(regexp, '$2, $1'))  // Bull, John
```

- 对于命名括号，引用为 `$<name>`

```javascript
let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g

let str = "2019-10-30, 2020-01_01"

alert(str.replace(regexp, '$<day>.$<month>.$<year>'))
// 30.10.2019, 01.01.2020
```

- 非捕获组 `?:` 有时需要括号才能正确应用量词，但不希望它们的内容出现在结果中，可以通过在开头添加 `?:` 来排除组。

```javascript
let str = "Gogogo John!"

// ?: 从捕获组中排除 'go'
let regexp = /(?:go)+ (\w+)/i;

let result = str.match(regexp)

alert(result[0])  // Gogogo John（完全匹配）
alert(result[1])  // John
alert(result.length)  // 2
```

**反向引用**

- 按编号反向引用 `\N`，可以使用 `\N` 在模式中引用一个组，其中 N 是组号。

```javascript
let str = `He said: "She's the one!".`

let regexp = /(['"])(.*?)\1/g

alert(str.match(regexp))  // "She's the one!"
```

- 在模式中用 `\1`，在替换项中用 `$1`
- 按命名反向引用 `\k<name>`，要引用命名组，可以使用 `\k<name>`

```javascript
let str = `He said: "She's the one!".`

let regexp = /(?<quote>['"])(.*?)\k<quote>/g

alert(str.match(regexp))  // "She's the one!"
```

**选择 OR**

- 选择是正则表达式中的一个术语，实际上是一个简单的或。

```javascript
let reg = /html|php|css|java(script)?/gi

let str = "First HTML appeared, then CSS, then JavaScript";

alert(str.match(reg))  // HTML,CSS,JavaScript
```

- 选择符号并非在字符级别生效，而是在表达式级别。正则表达式 `A|B|C` 意思是命中 A、B 或 C 其一均可。

```javascript
let reg = /([01]\d|2[0-3]):[0-5]\d/g

alert("00:00 10:10 23:59 25:99 1:2".match(reg))  // 00:00,10:10,23:59
```

**断言**

- 前瞻断言 `x(?=y)`，它表示仅在后面是 y 的情况匹配 x

```javascript
let str = "1 turkey costs 30€"

alert(str.match(/\d+(?=€)/))  // 30（正确地跳过了单个的数字 1）
```

- 前瞻否定断言 `x(?!y)`，意思是查找 x, 但是仅在不被 y 跟随的情况下匹配成功。

```javascript
let str = "2 turkeys cost 60€"

alert(str.match(/\d+(?!€)/))  // 2（正确地跳过了价格）
```

- 后瞻断言也是类似的，只不过它是在相反的方向上进行条件判断。它只允许匹配前面有特定字符串的模式。
- 后瞻肯定断言 `(?<=y)x`, 匹配 x 仅在前面是 y 的情况。
- 后瞻否定断言 `(?<!y)x`, 匹配 x, 仅在前面不是 y 的情况。
- 如果想要捕捉整个环视表达式或其中的一部分，那也是有可能的，只需要将其包裹在另加的括号中。

```javascript
let str = "1 turkey costs 30€"
let reg = /\d+(?=(€|kr))/  // €|kr 两边有额外的括号

alert(str.match(reg))  // 30, €
```

**回溯**

- 灾难性回溯，又译作回溯陷阱，有 2 种处理它的思路：一是，重写正则表达式，尽可能减少其中排列组合的数量；二是，使用前瞻断言来防止回溯。

**粘性修饰符**

- `/y` 标志允许在源字符串中的指定位置执行搜索。
- `regexp.exec()` 是 `str.matchAll()` 方法的替代方法，与其他方法不同可以设置自己的 lastIndex，从给定位置开始搜索。

```javascript
let str = 'let varName = "value"'
let regexp = /\w+/g  // 如果没有标志 g，属性 lastIndex 会被忽略
regexp.lastIndex = 4
let word = regexp.exec(str)

alert(word)  // varName
```

- 标记 `/y` 使 `regexp.exec()` 正好在 lastIndex 位置，而不是在它之前，也不是在它之后。

```javascript
let str = 'let varName = "value"'
let regexp = /\w+/y

regexp.lastIndex = 3
alert(regexp.exec(str))  // null（位置 3 有一个空格，不是单词）

regexp.lastIndex = 4
alert(regexp.exec(str))  // varName（在位置 4 的单词）
```

**正则与字符串的方法**

- `str.match(regexp)` 方法在字符串 str 中找到匹配 regexp 的字符。它有 3 种模式：
  <br />（1）如果 regexp 不带有 g 标记，则它以数组的形式返回第一个匹配项，其中包含分组和属性 index（匹配项的位置）、input（输入字符串，等于 str）；
  <br />（2）如果 regexp 带有 g 标记，则它将所有匹配项的数组作为字符串返回，而不包含分组和其他详细信息；
  <br />（3）如果没有匹配项，则无论是否带有标记 g，都将返回 null
- `str.matchAll(regexp)` 是 `str.match()` 变体，主要用来搜索所有组的所有匹配项。与 match 相比有 3 个区别：
  <br />（1）它返回包含匹配项的可迭代对象，而不是数组，可以用 `Array.from` 从中得到一个常规数组；
  <br />（2）每个匹配项均以包含分组的数组形式返回（返回格式与不带 g 标记的 `str.match` 相同）；
  <br />（3）如果没有结果，则返回的不是 `null`，而是一个空的可迭代对象。
- `str.split(regexp|substr, limit)`，使用正则表达式（或子字符串）作为分隔符来分割字符串。
- `str.search(regexp)`，返回第一个匹配项的位置，如果未找到，则返回 -1、重要限制 `search()` 仅查找第一个匹配项。
- `str.replace(str|regexp, str|func)`，这是用于搜索和替换的通用方法，是最有用的方法之一。当 `replace()` 的第一个参数是字符串时，它仅替换第一个匹配项，应使用带 g 标记的正则表达式 。第二个参数是一个替代字符串，对于需要智能替换的场景，第二个参数可以是一个函数。

```javascript
let str = "html and css"

let result = str.replace(/html|css/gi, str => str.toUpperCase())

alert(result)  // HTML and CSS
```

- `regexp.exec(str)` 方法返回字符串 str 中的 regexp 匹配项。与以前的方法不同，它是在正则表达式而不是字符串上调用的。如果没有 g，那么返回的第一个匹配与 `str.match(regexp)` 完全相同。如果有标记 g，那么会返回第一个匹配项，并将紧随其后的位置保存在属性 `regexp.lastIndex` 中。下一次同样的调用会从位置 `regexp.lastIndex` 开始搜索，返回下一个匹配项，并将其后的位置保存在 `regexp.lastIndex` 中，以此类推。如果没有匹配项，则返回 null，并将 `regexp.lastIndex` 重置为 0。 重复调用会挨个返回所有的匹配项，属性 `regexp.lastIndex` 用来跟踪当前的搜索位置。
- `regexp.test(str)` 查找匹配项，然后返回 true/false 表示是否存在。如果正则表达式带有标记 g，则从 `regexp.lastIndex` 属性中查找，并更新此属性，就像 `regexp.exec()` 一样。
- 如果在不同的源字符串上应用相同的全局表达式，可能会出现错误的结果，因为 `regexp.test()` 的调用会增加 `regexp.lastIndex` 属性值，因此在另一个字符串中的搜索可能是从非 0 位置开始的。

## （四）Ajax

> Ajax (Asynchronous JavaScript And XML) 称为异步的 JS 和 XML，可以在浏览器中向服务器发送异步请求，最大优势是无刷新获取数据。

### 01 - HTTP 协议

| 请求报文 | 内容 |
| --- | --- |
| 请求行 | 请求类型、URL 请求路径、HTTP 协议版本 |
| 请求头 | Host、Cookie、Content-type、User-Agent... |
| 空行 | (必选) |
| 请求体 | (可选) GET 请求为空、POST 请求可携带内容 |

| 响应报文 | 内容 |
| --- | --- |
| 响应行 | 状态码、状态字符串、HTTP 版本 |
| 响应头 | Content-type、Content-length、Content-encoding... |
| 空行 | (必选) |
| 响应体 | 响应的内容... |

| 状态码 | 内容 |
| --- | --- |
| 成功 2** | 200 OK、201 Created、202 Accepted、203 Non-Authoritative Information、204 No Content、205 Reset Content、206 Partial Content、207 Multi-Status |
| 重定向 3** | 300 Multiple Choices、301 Moved Permanently、302 Move Temporarily、303 See Other、304 Not Modifled、305 Use Proxy、306 Switch Proxy、307 Temporary Redirect |
| 请求错误 4** | 400 Bad Request、401 Unauthorized、402 Payment Required、403 Forbidden、404 Not Found、405 Method Not Allowed、406 Not Acceptable、407 Proxy Authentication Reauired、408 Request Timeout、409 Conflict、410 Gone、411 Length Required、412 Precondition Failed、413 Request-URL Too Long、415 Unsupported Media Type、416 Requested Range Not Satisfiable、417 Expectation Failed、418 I'm a teapot、421 Misdirected Request、422 Unprocessable Entity、423 Locked、424 Failed Dependency、425 Too Early、426 Upgrade Required、449 Retry With、451 Unavailable For Legal Reasons |
| 服务器错误 5** 6** | 500 Internal Server Error、501 Not Implemented、502 Bad Gateway、503 Service Unavailable、504 Gateway Timeout、505 HTTP Version Not Supported、506 Variant Also Negotiates、507 Insufficient Storage、509 Bandwidth Limit Exceeded、510 Not Extended、600 Unparseable Response Headers |

### 02 - 服务端

> 以 Node 的 Express 为例

```javascript
const express = require('express')

const app = express()

app.get('/server', (request, response) => {
  // 设置响应头
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应体
  response.send('Hello Ajax')
})

app.listen(8080, () => {
  console.log('http://127.0.0.1:8080')
})
```

### 03 - 客户端

#### GET

```javascript
const btn = document.getElementsByTagName('button')[0]
const result = document.getElementById('result')

btn.onclick = function () {
  // 1、创建对象
  const xhr = new XMLHttpRequest()
  // 2、初始化 设置请求方法和 URL
  xhr.open('GET', 'http://127.0.0.1:8080/server?a=10&b=20&c=30')
  // 3、发送请求
  xhr.send()
  // 4、事件绑定 处理服务端返回的结果
  // readyState 是 xhr 对象中的属性，表示状态：
  // 0 表示未初始化、1 表示 open 方法完毕、2 表示 send 完毕、
  // 3 表示服务返回部分结果、4 表示服务已经返回所有结果
  xhr.onreadystatechange = function () {
    // 判断（服务端返回了所有的结果）
    if (xhr.readyState === 4) {
      // 判断响应状态码 200 404 403 401 500
      // 2xx 代表成功
      if (xhr.status >= 200 && xhr.status < 300) {
        // 处理结果 行、头、空行、体
        // 响应行
        // console.log(xhr.status)  // 状态码
        // console.log(xhr.statusText) // 状态字符串
        // console.log(xhr.getAllResponseHeaders())  // 所有响应头
        // console.log(xhr.response)  // 响应体
        result.innerHTML = xhr.response
      } else {
        ...
      }
    }
  }
}
```

#### POST

```javascript
const result = document.getElementById('result')
result.addEventListener('mouseover', function() {
  // 1、创建对象
  const xhr = new XMLHttpRequest()
  // 2、初始化 设置类型与 URL
  xhr.open('POST', 'http://127.0.0.1:8080/server')
  // 3、发送请求 可携带内容
  // xhr.send('a=90&b=80&c=70')
  xhr.send('a:1,b:2,b:3')
  // 4、事件绑定
  xhr.onreadystatechange = function() {
    // 判断
    if (xhr.readyState === 4) {
      if (xhr.status >=200 && xhr.status < 300) {
        // 处理返回的结果
        result.innerHTML = xhr.response
      } else {
        ...
      }
    }
  }
})
```

### 04 - 设置请求头

```javascript
// 设置请求头
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// 自定义请求头 需要服务端做相应的设置
xhr.setRequestHeader('name', 'Xiaofan')
```

### 05 - 响应 JSON 数据

#### 服务端

```javascript
app.get('/json-server', (request, response) => {
  // 设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  // 设置响应头 接受所有的响应头
  response.setHeader('Access-Control-Allow-Headers', '*')
  // 响应一个数据
  const data = {
    name: 'xiaofan',
    age: 18
  }
  // 对象进行字符串转换
  let str = JSON.stringify(data)
  // 设置响应体
  response.send(str)
})
```

#### 客户端

```javascript
const result = document.getElementById('result')
window.onkeydown = function() {
  const xhr = new XMLHttpRequest()
  // 设置响应体的类型
  xhr.responseType = 'json'

  xhr.open('GET', 'http://127.0.0.1:8080/json-server')
  xhr.send()
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        // result.innerHTML = xhr.response

        // 手动对数据进行转换
        // let data = JSON.parse(xhr.response)
        // console.log(data)

        // 自动转换 需要设置响应体的类型
        console.log(xhr.response)

        // result.innerHTML = data.name
        result.innerHTML = xhr.response.name
      }
    }
  }
}
```

### 06 - 网络超时与异常

```javascript
const btn = document.getElementsByTagName('button')[0]
const result = document.getElementById('result')

btn.addEventListener('click', function () {
  const xhr = new XMLHttpRequest()
  // 超时设置 2s 设置
  xhr.timeout = 2000
  // 超时回调
  xhr.ontimeout = function () {
    alert('网络超时，请稍后重试')
  }
  // 网络异常回调
  xhr.onerror = function () {
    alert('你的网络似乎出了一些问题')
  }

  xhr.open('GET', 'http://127.0.0.1:8080/delay')
  xhr.send()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        result.innerHTML = xhr.response
      }
    }
  }
})
```

### 07 - 取消请求

```javascript
const btns = document.querySelectorAll('button')

let xhr = null
btns[0].onclick = function() {
  xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://127.0.0.1:8080/delay')
  xhr.send()
}

// 取消请求
btns[1].onclick = function() {
  xhr.abort()
}
```

### 08 - 重复请求

```javascript
const btn = document.querySelectorAll('button')

// 是否正在发送 AJAX 请求
let isSending = false

btn[0].onclick = function() {
  // 判断标识变量
  if (isSending) xhr.abort()
  xhr = new XMLHttpRequest()
  // 修改标识变量的值
  isSending = true
  xhr.open('GET', 'http://127.0.0.1:8080/delay')
  xhr.send()
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      isSending = false
    }
  }
}
```

### 09 - 属性/方法/事件

**属性总结**

| 属性 | 描述 |
| --- | --- |
| .readyState | 返回请求状态码 |
| .status | 返回请求响应码 |
| .statusText | 返回带有文本的响应码 |
| .response | 返回响应体 |
| .responseText | 返回字符串形式的响应体 |
| .responseXML | 返回 XML 形式的响应体 |
| .responseURL | 返回序列化的响应 URL |
| .upload | 返回上传进度 |
| .responseType | 设置响应类型 |
| .timeout | 设置超时时间 |
| .withCredentials | 设置跨域是否应携带授权信息 |

- 设置响应格式：

| 属性值 | 描述 |
| --- | --- |
| "" | 默认响应格式为字符串 |
| "text" | 响应格式为字符串 |
| "arraybuffer" | 响应格式为 ArrayBuffer |
| "blob" | 响应格式为 Blob |
| "document" | 响应格式为 XML document（可以使用 XPath 和其他 XML 方法）或 HTML document（基于接收数据的 MIME 类型） |
| "json" | 响应格式为 JSON（自动解析） |

**方法总结**

| 方法 | 描述 |
| --- | --- |
| .open() | 初始化请求 |
| .send() | 发送请求 |
| .abort() | 中止请求 |
| .setRequestHeader() | 设置请求头 |
| .getAllResponseHeaders() | 获取所有响应头 |
| .overrideMimeType() | 覆写服务器返回的 MIME 类型 |

**事件总结**

| 事件 | 描述 |
| --- | --- |
| .onreadystatechange | 当 readyState 属性发生变化时触发 |
| .onabort | 当请求被停止时触发 |
| .ontimeout | 当请求超时时触发 |
| .onload | 当请求完成（即使 HTTP 状态为 400 或 500 等）并且响应已完全下载时触发 |
| .onloadend | 当请求结束时触发 |
| .onloadstart | 当接受到响应数据时触发 |
| .onerror | 当无法发出请求，例如网络中断或者无效的 URL 时触发 |
| .onprogress | 在下载响应期间定期触发，报告已经下载了多少 |

```javascript
let xhr = new XMLHttpRequest()

xhr.open('GET', 'URL')

xhr.send()

xhr.onload = function() {
  // 分析响应的 HTTP 状态
  if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`)  // 例如 404: Not Found
  } else {
    alert(`Done, got ${xhr.response.length} bytes`)  // response 是服务器响应
  }
}

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`)
  } else {
    alert(`Received ${event.loaded} bytes`)  // 没有 Content-Length
  }
}

xhr.onerror = function() {
  alert("Request failed")
}
```

- `XMLHttpRequest` 可以使用和 `fetch` 相同的 CORS 策略进行跨源请求。默认情况下不会将 cookie 和 HTTP 授权发送到其他域。要启用它们，可以将 `xhr.withCredentials` 设置为 true

### 10 - 恢复上传

- 要恢复上传，需要确切地知道服务器接收的字节数，而且只有服务器能告诉，因此将发出一个额外的请求：

```javascript
class Uploader {
  constructor({file, onProgress}) {
    this.file = file
    this.onProgress = onProgress

    // 创建唯一标识文件的 fileId
    // 还可以添加用户会话标识符（如果有的话），以使其更具唯一性
    this.fileId = file.name + '-' + file.size + '-' + file.lastModified
  }

  async getUploadedBytes() {
    let response = await fetch('status', {
      headers: {
        'X-File-Id': this.fileId
      }
    })

    if (response.status != 200) {
      throw new Error("Can't get uploaded bytes: " + response.statusText)
    }

    let text = await response.text()

    return +text
  }

  async upload() {
    this.startByte = await this.getUploadedBytes()

    let xhr = this.xhr = new XMLHttpRequest()
    xhr.open("POST", "upload", true)

    // 发送文件 id，以便服务器知道要恢复哪个文件
    xhr.setRequestHeader('X-File-Id', this.fileId)
    // 发送要从哪个字节开始恢复，因此服务器知道正在恢复
    xhr.setRequestHeader('X-Start-Byte', this.startByte)

    xhr.upload.onprogress = (e) => {
      this.onProgress(this.startByte + e.loaded, this.startByte + e.total)
    }

    console.log("send the file, starting from", this.startByte)
    xhr.send(this.file.slice(this.startByte))

    // return
    // true —— 如果上传成功，
    // false —— 如果被中止
    // 出现 error 时将其抛出
    return await new Promise((resolve, reject) => {
      xhr.onload = xhr.onerror = () => {
        console.log("upload end status:" + xhr.status + " text:" + xhr.statusText)

        if (xhr.status == 200) {
          resolve(true)
        } else {
          reject(new Error("Upload failed: " + xhr.statusText))
        }
      }

      // onabort 仅在 xhr.abort() 被调用时触发
      xhr.onabort = () => resolve(false)
    })
  }

  stop() {
    if (this.xhr) {
      this.xhr.abort()
    }
  }
}
```

## （五）Axios

> 基于 Promise 的网络请求库

### 01 - GET

```javascript
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
  // 发起 get 请求
  axios.get('http://127.0.0.1:8080/axios-get', {
    params: {
      ID: 123,
      name: 'marry'
    }
  }).then(function(response) {
    // 处理成功的情况
    console.log(response)
    console.log(response.data)
    console.log(response.status)
    console.log(response.statusText)
  }).catch(function(error) {
    // 处理错误情况
    console.log(error)
  }).then(function () {
    // 总会执行
  })
})
```

### 02 - POST

```javascript
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
  axios.post('http://127.0.0.1:8080/axios-post', {
    userName: 'marry',
    password: '123456'
  }).then(function(response) {
    console.log(response.data)
  })
})
```

### 03 - 通用方式

```javascript
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
  axios({
    // 请求方法，默认 GET
    method: 'POST',
    baseURL: 'http://127.0.0.1:8080',
    url: '/axios-post',
    responseType: 'json',
    // URL参数
    params: {
      ID: 1
    },
    headers: {
      width: 180,
      height: 180
    },
    data: {
      vip: 123,
      name: 'sun'
    },
    // 跨域是否需要携带凭证
    withCredentials: false,
    // 超时
    timeout: 2000
  }).then(function(response) {
    console.log(response)
  })
})
```

### 04 - 响应结构

```
{
	data: {...},
	status: 200,
	statusText: OK,
	headers: {...},
	config: {...},
	request: {...}
}
```

### 05 - 拦截器

```javascript
const btn = document.querySelector('button')

// 配置全局默认值
axios.defaults.baseURL = 'http://127.0.0.1:8080'
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    console.log('正在发送请求...')
    return config
  },
  function(error) {
    console.log('请求发生了错误')
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    console.log('响应成功！')
    return response
  },
  function(error) {
    console.log('发生了一些错误，响应失败')
    return Promise.reject(error)
  }
)

btn.addEventListener('click', function () {
  axios({
    method: 'POST',
    url: '/axios-post',
    responseType: 'json',
    params: {
      ID: 1,
    },
    headers: {
      width: 180,
      height: 180,
    },
    data: {
      vip: 123,
      name: 'sun',
    },
    withCredentials: false,
    timeout: 2000
  }).then(function (response) {
    console.log(response)
  })
})
```

### 06 - 错误处理

```javascript
axios.get('/user/12345').catch(function(error) {
  if (error.response) {
    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    // 请求已经成功发起，但没有收到响应
    // `error.request` 在浏览器中是 XMLHttpRequest 的实例
    // 而在node.js中是 http.ClientRequest 的实例
    console.log(error.request)
  } else {
    // 发送请求时出了点问题
    console.log('Error', error.message)
  }
  console.log(error.config)
})
```

### 07 - 取消请求

```javascript
const btn = document.querySelectorAll('button')

axios.defaults.baseURL = 'http://127.0.0.1:8080'

// 创建控制器器对象
const controller = new AbortController()

btn[0].addEventListener('click', function() {
  axios({
    signal: controller.signal,
    method: 'post',
    url: '/axios-all',
    params: {
      id: 12
    },
    headers: {
      width: 100
    },
    data: {
      username: 'sun',
      password: '123456'
    },
  }).then(function(response) {
    console.log(response.data)
  })
})

btn[1].addEventListener('click', function () {
  // 取消请求
  controller.abort()
})
```

### 08 - 跨域方案

**JSONP**

- 通过 `script` 标签本身可跨域的特性返回的结果应该是一个函数的执行，函数的参数就是服务端要给客户端的数据，函数本身的定义是在客户端中，数据和函数的调用在服务端中（仅支持 GET 请求）

```javascript
// 检测用户名是否存在
app.all('/check-username', (request, response) => {
  const data = {
    exist: 1,
    msg: '用户名已经存在'
  }
  // 将数据转换为字符串
  let str = JSON.stringify(data)
  // 返回结果
  response.end(`handle(${str})`)
})

//-------------------------------------------------

const input = document.querySelector('input')
const p = document.querySelector('p')

function handle(data) {
  input.style.border = '1px solid red'
  p.innerHTML = data.msg
}

input.onblur = function() {
  // 获取用户输入的值
  let username = this.value
  // 向服务器发送请求
  const script = document.createElement('script')
  script.src = 'http://127.0.0.1:8080/check-username'
  document.body.appendChild(script)
}
```

```javascript
$('button').eq(0).click(function() {
  $.getJSON('http://127.0.0.1:8080/jquery-json-server?callback=?', function(data) {
    $('#result').html (`
      名称：${data.name}<br/>
      校区：${data.city}
    `)
  })
})

//---------------------------------------------------------------

app.all('/jquery-json-server', (request, response) => {
  const data = {
    name: '城市',
    city: ['北京', '上海', '武汉']
  }
  let str = JSON.stringify(data)
  let cb = request.query.callback

  response.end(`${cb}(${str})`)
})
```

**CORS**

- Cross-Origin Resource Sharing 跨域资源共享，是官方的跨域解决方案。跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些站点可以访问哪些资源
- [跨源资源共享（CORS） - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)

## （六）Fetch

### 01 - 使用

- `fetch()` 是一种现代通用的异步资源请求方法，返回一个 Promise

```javascript
let promise = fetch(URL, [options])
```

| 参数 | 描述 |
| --- | --- |
| URL | 要访问的 URL |
| options | 可选参数 |
| -> method | 请求方式 |
| -> header | 请求头信息 |
| -> body | 请求体信息 |

- 无 options 时，是一个简单的 GET 请求。
- 获取响应通常需要经过两个阶段：
  - 第一阶段：当服务器发送了响应头，fetch 返回的 Promise 就使用内建的 Response class 对象来对响应头进行解析。可以在 response 的属性中看到 HTTP 状态 status，Response header 位于 `response.headers` 中的一个类似于 Map 的 header 对象，它不是真正的 Map，但是它具有类似的方法，可以按名称获取各个 header 或迭代它们。
  - 第二阶段：为了获取 Response body，需要使用一个其他的方法调用，response 提供了多种基于 Promise 的方法，来以不同的格式访问 body

| 方法 | 描述 |
| --- | --- |
| response.text() | 以文本形式返回 response |
| response.json() | 以 JSON 形式返回 response |
| response.formData() | 以 FormData 对象的形式返回 response |
| response.blob() | 以 Blob（具有类型的二进制数据）形式返回 response |
| response.arrayBuffer() | 以 ArrayBuffer（低级别的二进制数据）形式返回 response |
| response.body | 是 ReadableStream 对象，它允许你逐块读取 body |

```javascript
fetch('https://v.api.aa1.cn/api/api-wenan-wangyiyunreping/index.php?aa1=json')
	.then(response => response.json())
	.then(data => console.log(data[0].wangyiyunreping))
```

**设置请求头**

```javascript
fetch(URL, {
  header: {
    Authentication: 'secret'
  }
})
```

**POST 请求**

```javascript
let user = {
  name: 'John',
  surname: 'Smith'
}

fetch(URL, {
  method: 'POST',
  header: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
})
```

**发送图片**

```html
<canvas id="canvasElem" width="100" height="80" style="border:1px solid"></canvas>

<input type="button" value="Submit" onclick="submit()">

<script>
  canvasElem.onmousemove = function(e) {
    let ctx = canvasElem.getContext('2d')
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()
  }

  async function submit() {
    let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'))
    let response = await fetch(URL, {
      method: 'POST',
      body: blob
    })

    // 服务器给出确认信息和图片大小作为响应
    let result = await response.json()
    alert(result.message)
  }
</script>
```

### 02 - FormData

- 关于发送 HTML 表单的，带有或不带文件，带有其他字段等，如果提供了 HTML 的 form 元素，它会自动捕获 form 元素字段。

```javascript
let formData = new FormData([form])
```

- FormData 的特殊之处在于网络方法，例如 fetch 可以接受一个 FormData 对象作为 body，它会被编码并发送出去，带有 `Content-Type: multipart/form-data`

| 方法 | 描述 |
| --- | --- |
| formData.append(name, value) | 添加具有给定 name 和 value 的表单字段 |
| formData.append(name, blob, fileName) | 添加一个字段，就像是 `<input type="file">`，fileName 设置文件名 |
| formData.get(name) | 获取带有给定 name 的字段值 |
| formData.delete(name) | 移除带有给定 name 的字段 |
| formData.has(name) | 判断是否存在该字段 |
| formData.set(name, value) | 设置给定 name 字段的 value |
| formData.set(name, blob, fileName) | 设置给定 name 字段的文件和文件名 |

- 一个表单可以包含多个具有相同 name 的字段。set 方法与 append 相同，不同之处在于 set 移除所有具有给定 name 的字段，然后附加一个新字段。
- 可以使用 `for..of` 循环迭代 formData 字段。
- 表单始终以 `Content-Type: multipart/form-data` 来发送数据，这个编码允许发送文件。因此 `<input type="file">` 字段也能被发送，类似于普通的表单提交。
- 通常更方便的发送图片的方式不是单独发送，而是将其作为表单的一部分，并带有附加字段，例如 name 和其他 metadata 一起发送。

### 03 - 下载进度

- `fetch()` 方法允许去跟踪下载进度，无法跟踪上传进度。要跟踪下载进度，可以使用 `response.body` 属性，它是 ReadableStream 的一个特殊的对象，它可以逐块（chunk）提供 body
- 流读取器（stream reader）：`response.body.getReader()`

```javascript
// 代替 response.json() 以及其他方法
const reader = response.body.getReader()

// 在 body 下载时，一直为无限循环
while(true) {
  // 当最后一块下载完成时，done 值为 true
  // value 是块字节的 Uint8Array
  const {done, value} = await reader.read()

  if (done) {
    break
  }

  console.log(`Received ${value.length} bytes`)
}
```

- 要将进度打印出来，只需要将每个接收到的片段 value 的长度 length 加到 counter 即可。

### 04 - 中止任务

- AbortController 它不仅可以中止 fetch，还可以中止其他异步任务。

```javascript
let controller = new AbortController()
```

- 具有单个方法 `.abort()`，和单个属性 `.signal`，可以在这个属性上设置事件监听器。
- 当 `.abort()` 被调用时 `controller.signal` 就会触发 abort 事件，`controller.signal.aborted` 属性变为 true
- 需要处理两部分：一部分是通过在 `controller.signal` 上添加一个监听器，来执行可取消操作；另一部分是触发取消在需要的时候调用 `controller.abort()`

```javascript
// 1 秒后中止
let controller = new AbortController()
setTimeout(() => controller.abort(), 1000)

try {
  let response = await fetch('/article/fetch-abort/demo/hang', {
    signal: controller.signal
  })
} catch(err) {
  if (err.name == 'AbortError') {
    alert("Aborted!")
  } else {
    throw err
  }
}
```

- AbortController 是可伸缩的，允许一次取消多个 fetch

### 05 - 跨源请求

- 有两种类型的跨源请求：安全请求、非安全请求。
- 安全的方法：`GET`、`POST`、`HEAD`，安全的 header 仅允许自定义下列 header：

| Header | 值 |
| --- | --- |
| Accept |  |
| Accept-Language |  |
| Content-Language |  |
| Content-Type | application/x-www-form-urlencoded、multipart/form-data、text/plain |

- 与非安全请求本质区别在于，可以使用 `<form>` 或 `<script>` 进行安全请求，而无需任何其他特殊方法。
- 关于非安全请求：

| 阶段 | 描述 |
| --- | --- |
| Step 1 | 预检请求（preflight request） |
| Step 2 | 预检响应（preflight response） |
| Step 3 | 实际请求（actual request） |
| Step 4 | 实际响应（actual response） |

- 如果一个请求是跨源的，浏览器始终会向其添加 Origin header，Origin 包含了确切的源 `domain/protocol/port`，没有路径，服务器可以检查 Origin，如果同意接受这样的请求，就会在响应中添加一个特殊的 header `Access-Control-Allow-Origin`，该 header 包含了允许的源，或者一个星号 ，然后响应成功，否则报错。
- 对于跨源请求，默认情况下，JS 只能访问安全的 response header：`Cache-Control`、`Content-Language`、`Content-Type`、`Expires`、`Last-Modified`、`Pragma`
- 要授予 JS 对任何其他 response header 的访问权限，服务器必须发送 `Access-Control-Expose-Headers` header。它包含一个以逗号分隔的应该被设置为可访问的非安全 header 名称列表。
- 默认情况下，由 JS 代码发起的跨源请求不会带来任何凭据（cookies 或者 HTTP 认证（HTTP authentication））
- 要在 `.fetch()` 中发送凭据，需要添加 `credentials: "include"` 选项。

```javascript
fetch('http://another.com', {
  credentials: "include"
})
```

- 如果服务器同意接受带有凭据的请求，则除了 `Access-Control-Allow-Origin` 外，服务器还应该在响应中添加 header `Access-Control-Allow-Credentials: true`

### 06 - Fetch API

```javascript
let promise = fetch(url, {
  method: "GET",  // POST，PUT，DELETE...
  headers: {
    // 内容类型 header 值通常是自动设置的
    // 取决于 request body
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined  // string，FormData，Blob，BufferSource，URLSearchParams
  referrer: "about:client",  // 或 "" 以不发送 Referer header
  referrerPolicy: "no-referrer-when-downgrade",  // no-referrer，origin，same-origin...
  mode: "cors",  // same-origin，no-cors
  credentials: "same-origin",  // omit，include
  cache: "default",  // no-store，reload，no-cache，force-cache，或 only-if-cached
  redirect: "follow",  // manual，error
  integrity: "",  // 一个 hash，像 "sha256-abcdef1234567890"
  keepalive: false,  // true
  signal: undefined,  // AbortController 来中止请求
  window: window  // null
})
```

## （七）其他网络请求

### 01 - URL 对象

- 内建的 URL 类提供了用于创建和解析 URL 的便捷接口，没有任何一个网络方法一定需要使用 URL 对象，字符串就足够了。

```javascript
new URL(url, [base])
```

| 参数 | 描述 |
| --- | --- |
| url | 完整的 URL 或者仅路径（如果设置了 base） |
| base | 可选的 base URL，如果设置了此参数，且参数 url 只有路径，则会根据这个 base 生成 URL |

```javascript
let url1 = new URL('https://javascript.info/profile/admin')
let url2 = new URL('/profile/admin', 'https://javascript.info')

alert(url1)  // https://javascript.info/profile/admin
alert(url2)  // https://javascript.info/profile/admin
```

- URL 对象立即允许访问其组件，因此这是一个解析 url 的好方法。

```javascript
let url = new URL('https://javascript.info/url')

alert(url.protocol)  // https:
alert(url.host)  // javascript.info
alert(url.pathname)  // /url
```

- 可以将 URL 对象传递给网络（和大多数其他）方法，而不是字符串。
- URL 的 SearchParams，它为搜索参数提供了简便的方法。

| 方法 | 描述 |
| --- | --- |
| append(name, value) | 按照 name 添加参数 |
| delete(name) | 按照 name 移除参数 |
| get(name) | 按照 name 获取参数 |
| getAll(name) | 获取相同 name 的所有参数 |
| has(name) | 按照 name 检查参数是否存在 |
| set(name, value) | set/replace 参数 |
| sort() | 按 name 对参数进行排序，并且它是可迭代的，类似于 Map |

```javascript
let url = new URL('https://google.com/search')

url.searchParams.set('q', 'test me!')  // 添加带有一个空格和一个 ! 的参数

alert(url)  // https://google.com/search?q=test+me%21

url.searchParams.set('tbs', 'qdr:y')  // 添加带有一个冒号 : 的参数

// 参数会被自动编码
alert(url)  // https://google.com/search?q=test+me%21&tbs=qdr%3Ay

// 遍历搜索参数（被解码）
for(let [name, value] of url.searchParams) {
  alert(`${name}=${value}`)  // q=test me!，然后是 tbs=qdr:y
}
```

- 用于编码/解码 URL 的内建函数：

| 方法 | 描述 |
| --- | --- |
| encodeURL | 编码整个 URL |
| decodeURL | 解码为编码前的状态 |
| encodeURLComponent | 编码 URL 组件，例如搜索参数、hash、pathname |

- encodeURI 仅编码 URL 中完全禁止的字符。encodeURIComponent 也编码这类字符，此外，还编码 `# $ & + , / : ; = ? @` 字符。对于一个 URL 整体，可以使用 encodeURI，而对于 URL 参数，应该改用 encodeURIComponent。对于每个搜索参数，应该使用 encodeURIComponent，以将其正确地插入到 URL 字符串中。最安全的方式是对 name 和 value 都进行编码，除非能够绝对确保它只包含允许的字符。

### 02 - 长轮询

- 长轮询是与服务器保持持久连接的最简单的方式，它不使用任何特定的协议，例如 WebSocket 或者 Server Sent Event
- 从服务器获取新信息的最简单的方式是定期轮询。
- 长轮询的流程：
	- 请求发送到服务器。
	- 服务器在有消息之前不会关闭连接。
	- 当消息出现时，服务器将对其请求作出响应，浏览器立即发出一个新的请求。

```javascript
async function subscribe() {
  let response = await fetch("/subscribe")

  if (response.status == 502) {
    // 状态 502 是连接超时错误
    // 连接挂起时间过长时可能会发生
    // 远程服务器或代理会关闭它
    // 让重新连接
    await subscribe()
  } else if (response.status != 200) {
    // 一个 error 让显示它
    showMessage(response.statusText)
    // 一秒后重新连接
    await new Promise(resolve => setTimeout(resolve, 1000))
    await subscribe()
  } else {
    // 获取并显示消息
    let message = await response.text()
    showMessage(message)
    // 再次调用以获取下一条消息
    await subscribe()
  }
}

subscribe()
```

- 服务器架构必须能够处理许多挂起的连接。
- 在消息很少的情况下，长轮询很有效。

### 03 - WebSocket

- WebSocket 协议，提供了一种在浏览器和服务器之间建立持久连接来交换数据的方法。数据可以作为数据包在两个方向上传递，而无需中断连接也无需额外的 HTTP 请求，WebSocket 没有跨源限制。

```javascript
let socket = new WebSocket("ws://javascript.info")
```

- 加密的 `wss://` 协议，类似于 WebSocket 中的 HTTPS，`wss://` 协议不仅是被加密的，而且更可靠，因为 `ws://` 数据不是加密的，对于任何中间人来说其数据都是可见的，并且旧的代理服务器不了解 WebSocket，它们可能会因为看到奇怪的 header 而中止连接。另一方面，`wss://` 是基于 TLS 的 WebSocket，类似于 HTTPS 是基于 TLS 的 HTTP，传输安全层在发送方对数据进行了加密，在接收方进行解密。因此，数据包是通过代理加密传输的。它们看不到传输的里面的内容，且会让这些数据通过。
- 一旦 socket 被建立，就应该监听 socket 上的事件。一共有 4 个事件：

| 事件 | 描述 |
| --- | --- |
| open | 连接已建立 |
| message | 接收到数据 |
| error | WebSocket 错误 |
| close | 连接已关闭 |

- 发送一些东西，使用 `socket.send(data)`
- 如果服务器同意切换为 WebSocket 协议，服务器应该返回响应码 101
- WebSocket 可能还有其他 header

| header | 描述 |
| --- | --- |
| Sec-WebSocket-Extensions 和 Sec-WebSocket-Protocol | 描述了扩展和子协议 |
| Sec-WebSocket-Extensions: deflate-frame | 表示浏览器支持数据压缩 |
| Sec-WebSocket-Extensions header | 由浏览器自动发送，其中包含其支持的所有扩展的列表 |
| Sec-WebSocket-Protocol: soap, wamp | 表示不仅要传输任何数据，还要传输 SOAP 或 WAMP 协议中的数据，WebSocket 子协议已经在 IANA catalogue 中注册，因此，此 header 描述了将要使用的数据格式 |

- 扩展与传输数据有关，扩展了 WebSocket 协议的功能。

```javascript
let socket = new WebSocket("wss://javascript.info/chat", ["soap", "wamp"])
```

- WebSocket 通信由 frames（即数据片段）组成，可以从任何一方发送。在浏览器里，仅直接使用文本或二进制 frames

| 类型 | 描述 |
| --- | --- |
| text frames | 包含各方发送给彼此的文本数据 |
| binary data frames | 包含各方发送给彼此的二进制数据 |
| ping/pong frames | 被用于检查从服务器发送的连接，浏览器会自动响应它们 |

- `socket.send(data)` 方法可以发送文本或二进制数据。调用允许 body 是字符串或二进制格式，包括 Blob、ArrayBuffer 等。
- 当收到数据时，文本总是以字符串形式呈现。而对于二进制数据，可以在 Blob 和 ArrayBuffer 格式之间进行选择，它是由 `socket.binaryType` 属性设置的，默认为 blob，因此二进制数据通常以 Blob 对象呈现。
- `socket.bufferedAmount` 属性储存了目前已缓冲的字节数，等待通过网络发送。

```javascript
// 每 100ms 检查一次 socket
// 仅当所有现有的数据都已被发送出去时，再发送更多数据
setInterval(() => {
  if (socket.bufferedAmount == 0) {
    socket.send(moreData())
  }
}, 100)
```

- 通常，当一方想要关闭连接时（浏览器和服务器都具有相同的权限），会发送一个带有数字码和文本形式的原因的 “connection close frame”

```javascript
socket.close([code], [reason])
```

| 参数 | 描述 |
| --- | --- |
| code | 一个特殊的 WebSocket 关闭码 |
| reason | 一个描述关闭原因的字符串 |

```javascript
// 关闭方：
socket.close(1000, "Work complete")

// 另一方
socket.onclose = event => {
  event.code === 1000
  event.reason === "Work complete"
  event.wasClean === true (clean close)
}
```

- 要获取连接状态，可以通过带有值的 `socket.readyState` 属性。

| 属性值 | 描述 |
| --- | --- |
| 0 | CONNECTING：连接还未建立 |
| 1 | OPEN：通信中 |
| 2 | CLOSING：连接关闭中 |
| 3 | CLOSED：连接已关闭 |

### 04 - Server Sent Events

- Server Sent Events 规范描述了一个内建的类 EventSource，它能保持与服务器的连接，并允许从中接收事件。与 WebSocket 类似，其连接是持久的。
- 要开始接收消息，只需要创建 `new EventSource(url)` 即可。浏览器将会连接到 url 并保持连接打开，等待事件。服务器响应状态码应该为 200，header 为 `Content-Type: text/event-stream`，然后保持此连接并以一种特殊的格式写入消息。

```javascript
let eventSource = new EventSource("/events/subscribe")

eventSource.onmessage = function(event) {
  console.log("New message", event.data)
}

// 或 eventSource.addEventListener('message', ...)
```

- EventSource 支持跨源请求，就像 fetch 和任何其他网络方法。
- 如果服务器想要浏览器停止重新连接，那么它应该使用 HTTP 状态码 204 进行响应。如果浏览器想要关闭连接，则应该调用 `eventSource.close()` 当连接最终被关闭时，就无法重新打开它。如果想要再次连接，只需要创建一个新的 EventSource
- EventSource 对象有 `readyState` 属性，该属性具有下列值之一。

| 属性值 | 描述 |
| --- | --- |
| EventSource.CONNECTING = 0 | 连接中或者重连中 |
| EventSource.OPEN = 1 | 已连接 |
| EventSource.CLOSED = 2 | 连接已关闭 |

- 默认情况下 EventSource 对象生成三个事件。

| 事件 | 描述 |
| --- | --- |
| message | 收到消息，可以用 `event.data` 访问 |
| open | 连接已打开 |
| error | 无法建立连接，例如，服务器返回 HTTP 500 状态码 |

-  要处理自定义事件，必须使用 addEventListener 而非 onmessage

### 05 - Cookie

- Cookie 是直接存储在浏览器中的一小串数据，是 HTTP 协议的一部分，Cookie 通常是由 Web 服务器使用响应 Set-Cookie HTTP-header 设置的。然后浏览器使用 Cookie HTTP-header 将它们自动添加到（几乎）每个对相同域的请求中。
- 最常见的用处之一就是身份验证：登录后，服务器在响应中使用 Set-Cookie HTTP-header 来设置具有唯一会话标识符（session identifier）的 cookie。下次当请求被发送到同一个域时，浏览器会使用 Cookie HTTP-header 通过网络发送 cookie。所以服务器知道是谁发起了请求。
- 可以使用 `document.cookie` 属性从浏览器访问 cookie。`document.cookie` 的值由 `name=value` 对组成，以 ; 分隔。每一个都是独立的 cookie
- 可以写入 `document.cookie` 但这不是一个数据属性，它是一个访问器（getter/setter）。对其的赋值操作会被特殊处理，对 `document.cookie` 的写入操作只会更新其中提到的 cookie，而不会涉及其他 cookie

```javascript
document.cookie = "user=John"  // 只会更新名称为 user 的 cookie
alert(document.cookie)  // 展示所有 cookie
```

- 为了保持有效的格式，它们应该使用内建的 `encodeURIComponent()` 函数对其进行转义。

```javascript
// 特殊字符（空格），需要编码
let name = "my name"
let value = "John Smith"

// 将 cookie 编码为 my%20name=John%20Smith
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

alert(document.cookie)  // ...; my%20name=John%20Smith
```

- `encodeURIComponent()` 编码后的 `name=value` 对，大小不能超过 4KB。因此不能在一个 cookie 中保存大的东西。每个域的 cookie 总数不得超过 20+ 左右，具体限制取决于浏览器。

```javascript
// 在 site.com
// 使 cookie 可以被在任何子域 *.site.com 访问
document.cookie = "user=John; domain=site.com"

// 之后

// 在 forum.site.com
alert(document.cookie)  // 有 cookie user=John
```

- expires、max-age，默认情况下，如果一个 cookie 没有设置这两个参数中的任何一个，那么在关闭浏览器之后，它就会消失，此类 cookie 被称为 session cookie

```javascript
// 当前时间 +1 天
let date = new Date(Date.now() + 86400e3)
date = date.toUTCString()
document.cookie = "user=John; expires=" + date
```

- 如果将 expires 设置为过去的时间，则 cookie 会被删除。

```javascript
// cookie 会在一小时后失效
document.cookie = "user=John; max-age=3600"

// 删除 cookie（让它立即过期）
document.cookie = "user=John; max-age=0"
```

- 指明了 cookie 的过期时间距离当前时间的秒数，如果将其设置为 0 或负数，则 cookie 会被删除。
- 默认情况下，如果在 `http://site.com` 上设置了 cookie，那么该 cookie 也会出现在 `https://site.com` 上，反之亦然。

```javascript
// 假设现在在 HTTPS 环境下
// 设置 cookie secure（只在 HTTPS 环境下可访问）
document.cookie = "user=John; secure"
```

- samesite，旨在防止 XSRF（跨网站请求伪造）攻击。Cookie 的 samesite 选项提供了另一种防止此类攻击的方式，（理论上）不需要要求 XSRF 保护 token
- `samesite=strict`（和没有值的 samesite 一样），如果用户来自同一网站之外，那么设置了 `samesite=strict` 的 cookie 永远不会被发送。`samesite=lax`，宽松（lax）模式，和 strict 模式类似，当从外部来到网站，则禁止浏览器发送 cookie，但是增加了一个例外，如果以下两个条件均成立，则会发送含 `samesite=lax` 的 cookie，一是 HTTP 方法是安全的（例如 GET 方法，而不是 POST），二是该操作执行顶级导航（更改浏览器地址栏中的 URL）
- Web 服务器使用 Set-Cookie header 来设置 cookie。并且，它可以设置 httpOnly 选项，这个选项禁止任何 JavaScript 访问 cookie。使用 `document.cookie` 看不到此类 cookie，也无法对此类 cookie 进行操作。

| 方法 | 描述 |
| --- | --- |
| getCookie(name) | 函数返回具有给定 name 的 cookie |
| setCookie(name, value, options) | 将 cookie 的 name 设置为具有默认值 path=/（可以修改以添加其他默认值）和给定值 value |
| deleteCookie(name) | 要删除一个 cookie，也可以给它设置一个负的过期时间来调用它 |

## （八）jQuery

[中文 API 文档](https://www.jquery123.com/)

## （九）Canvas

[中文 API 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)

## （十）WebGL

[中文 API 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)

## （十一）three.js

[官方文档](https://threejs.org/docs/index.html#manual/zh/introduction)

## （十二）Echarts

[官方文档](https://echarts.apache.org/zh/index.html)

<style>
table {
  display: table;
  width: 100%;
}
</style>
