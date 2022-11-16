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

## 壹 - ECMAScript

> `script` 标签：如果设置了 `src` 属性，`script` 标签内容将会被忽略，可以设置多个 `script` 标签。

### 01 - 代码结构

- `"use strict"`：在代码最顶部添加，将开启严格模式（现代模式），激活新特性。`class` 与 `module` 会自动开启该模式。
- 语句：可以省略分号，一个换行代表一个分号（自动插入分号），但有些情况下无法正确识别。
- 单行注释：

```javascript
// 注释内容
```

- 多行注释：
```javascript
/* 多行
   注释
*/
```

### 02 - 变量

- 一个变量只能被声明（定义）一次。
- 一次可以声明多个变量。
- 变量可以被修改。
- 变量可以被拷贝。
- 命名仅可字母、数字、$、_
- 命名首字符非数字，使用小驼峰命名法。
- 常量赋值后不能被修改，采用大写形式。

| 关键字 | 描述 |
| --- | --- |
| let | 声明变量 |
| const | 声明常量 |
| var | 老旧，不建议使用 |

### 03 - 数据类型

- JavaScript 是动态类型语言，有8种数据类型：7种原始类型，1种引用类型：

| 类型 | 描述 |
| --- | --- |
| Number | 整数、浮点数、Infinity（无穷大）、NaN（非数值，具有粘性），注：数值运算是安全的，可以除0 |
| BigInt | 用于表示大于2的253次方-1和小于2的-253次方的整数，数字尾部加n，代表此类型 |
| String | "字符串"、'字符串'、'反引号用于功能扩展${变量名}' |
| Boolean | true、false |
| null | 无、空、值未知，是个特殊值 |
| undefined | 未赋值、未定义 |
| Object | 存储数据集合和更复杂的实体 |
| Symbol | 创建对象的唯一标识符 |

- `typeof` 用于返回数据类型。
- `null` 返回对象类型，是 `typeof` 的错误，并非真正的对象。
- 函数返回 `function` ，函数隶属于对象。

### 04 - 类型转换

| 转换 | 描述 |
| --- | --- |
| String(...) | 转换为字符串类型 |
| Number(...) | 转换为数字型类型 |
|  | undefined 转换为 NaN、null 转换为 0 |
| Boolean(...) | 转换为布尔类型 |

- 非空字符串转布尔为 `true`

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

- 从左向右运算

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

- 32位整数

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
let result = condition ? value1 : value2;
```

- 可以使用多个问号
- 禁止使用如 `break、continue`

### 08 - 逻辑运算

| 符号 | 描述 |
| --- | --- |
| &#124;&#124; | 或运算，一真则真，全假为假，连续或运算返回第一个真值，无真值返回最后一个值，短路求值 |
| && | 与运算，一假则假，全真为真，连续与运算返回第一个假值，无假值返回最后一个值，短路求值，优先级高于 &#124;&#124; |
| ！ | 布尔非运算，!!可用于转布尔值 |
| ?? | 空值合并运算，返回第一个非 null 与 undefined 的值，否则返回最后一个值 |

- `??` 常用于：提供默认值。
- `??` 与 `&& ||` 一块使用需要添加括号标记优先级。

### 09 - if

```javascript
// ---------
if (...) {
    ...;
}

// ----------
if (...) {
    ...;
} else {
    ...;
}

// ---------
if (...) {
    ...;
} else if (...) {
    ...;
} else {
    ...;
}
```

- 只有一条语句可以省略 {}

### 10 - switch

```javascript
switch (...) {
    case n:
    ...;
    break;
    case n:
    ...;
    break;
    default:
    ...;
}
```

- `()` 内为 `===`

### 11 - while

```javascript
// ----------
while (...) {
    ...;
}

// ----------
do {
    ...;
} while (...)
```

- 单体循环可以省略 {}

### 12 - for

```javascript
for (let i = 0; i < 9; i++) {
    ...;
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
let num = 0;
// outer 标签
outer: for (let b = 1; b <= 9; b++) {
  for (let c = 1; c <= 9; c++) {
    num = b * c;
    console.log(num);
    if (num == 18) break outer;
  }
}
```

### 13 - 函数

- 函数就是行为，字符串或数字等常规值代表数据；函数也是值，表示一个“行为”的值。
- 局部变量：在函数内声明，仅在函数内可见。
- 全局变量（外部变量）：函数之外声明，全局可用，单应尽量减少使用。
- 声明同名变量，函数会遮蔽外部变量使用局部变量。

**1、“函数声明”，声明在定义之前就可以被调用：**

```javascript
function funcName(parameter1, parameter2, ...) {
    return ...;
}

funcName();
```

**2、“函数表达式”，代码执行到达时被创建，仅从那一刻起可用：**

```javascript
let x = function (parameter1, parameter2, ...) {
    ...;
};

x();

// 可以被拷贝
let y = x;
y();
```

- 未被传递值的参数，被赋予 `undefined`
- 可以为参数设置默认值。
- 空值 `return` 或没有 `return` 返回值为 `undefined`
- 命名常用前缀：`get...`、`calc...`、`create...`、`check...`
- 回调函数/匿名函数：

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "你吃饭了吗?",
  // 回调，匿名
  function () {
    console.log("你吃了");
  },
  function () {
    console.log("你没吃");
  }
);
```

**3、“箭头函数”，优于函数表达式：**

```javascript
let sum = (a, b) => a + b;
sum(1, 2);

let double = (n) => n * 2;
double(8);

let sayHi = (...) => {
    ...;
    return ...;
}
```

- 不使用 `{}` 会自动返回值。

### 14 - 浏览器调试

- 调试是指在一个脚本中找出并修复错误的过程。
- 断点是调试器会自动暂停 JavaScript 执行的地方，当代码被暂停时，我们可以检查当前的变量，在控制台执行命令等等。

```javascript
function hello(...) {
    ...;
    debugger; // 调试器会在此处暂停
    ...;
}
```

### 15 - 代码风格

- 没有什么规则是必须的，规范、易懂、优雅就是好的代码风格。

### 16 - 自动化测试

- 待更新

### 17 - 对象

- 对象是用来存储键值对和更复杂的实体，是具有一些特殊特性的关联数组。

**1、构造函数方式创建对象：**

```javascript
let user1 = new Object();
```

**2、字面量方式创建对象：**

```javascript
let user2 = {};
```

- 属性：键值对的形式，可以多个词汇命名属性的键，但是需要添加引号。
- 访问属性：`user1.name` 点方法、`user1["likes birds"]` 方括号访问多词属性。
- 添加属性：`user1.age = 30`
- 删除属性：`delete user1.age`
- 判断属性是否存在：

```javascript
console.log("age" in user1);
```

- 计算属性：方括号比点符号更加强大，允许任何属性名和变量。

```javascript
let fruit = prompt("你喜欢吃什么水果？", "apple");

let bag = {
  [fruit]: 5,
};
```

- 属性值简写：对象的属性名不受限制，可以为保留字，其他类型会被自动地转换为字符串。

```javascript
function makeUser(name, age) {
  return {
    name, // 与 name: name 相同
    age, // 与 age: age 相同
    // ...
  };
}
```

- 遍历对象属性的键：`for...in...`

```javascript
for (let key in user1) {
  console.log(key);
}
```

- 遍历对象属性的值：`for...of...`

```javascript
for (let value of user1) {
  console.log(value);
}
```

- JavaScript 能够被访问任何属性，即使属性不存在，读取不存在的属性只会得到 `undefined`
- 对象属性顺序，整数属性会被进行排序，其他属性则按照创建的顺序显示，可以在整数属性前添加 + 解决自动排序。

### 18 - 对象引用与复制

- 赋值了对象的变量存储的不是对象本身，而是该对象在内存中的地址，即该变量存储的是对该对象的引用。
- 当一个对象变量被复制，是引用被复制，而该对象自身并没有被复制。
- 仅当两个对象为同一对象时，两者才相等。
- 想要真正的复制对象本身，需要拷贝该对象：使用 `Object.assign(dest, [src1, src2, src3...])`，被拷贝的项目中没有对象类型，这种拷贝称为“浅拷贝”，如果被拷贝的属性的属性名已经存在，那么它会被覆盖。
- 使用一个拷贝循环来检查 `user[key]` 的每个值，如果它是一个对象，那么也复制它的结构，使用 `_.cloneDeep(obj)`，这种拷贝方式称为“深拷贝”。
- 使用 `const` 声明的对象也是可以被修改的，作为一个整体进行赋值时才会报错。

### 19 - 垃圾回收

- JavaScript 的内存管理是自动的、无形的。
- 可达性：
  - 1、当前执行的函数，它的局部变量和参数。
  - 2、当前嵌套调用链上的其他函数、它们的局部变量和参数。
  - 3、全局变量。
- 如果一个值可以通过引用链从根访问任何其他值，则认为该值是可达的。
- 对外引用不重要，只有传入引用才可以使对象可达。
- 几个对象相互引用，但外部没有对其任意对象的引用，这些对象也可能是不可达的，将会被从内存中删除。
- 垃圾回收的基本算法被称为 “mark-and-sweep”（标记与扫描）。

### 20 - 对象方法与this

- 作为对象属性的函数被称为方法。
- `this` 的值就是在点之前的这个对象，即调用该方法的对象。
- 没有调用对象时，严格模式下的 `this` 值为 `undefined`，非严格模式的情况下，`this` 将会是全局对象。
- 箭头函数没有自己的 `this`，`this` 值取决于外部非箭头函数。

### 21 - 构造器与new

- 构造函数：它们的命名以大写字母开头，它们只能由 `new` 操作符来执行，实现可重用的对象创建代码。

```javascript
function User(name) {
    this.name = name;
    this.isAdmin = false;

    this.sayHi = function () {
      console.log("Myname is " + this.name);
    };
  }

  let user = new User("Jack");
```

- 构造函数被调用时，隐式的创建了一个空对象，并且分配了 `this`，通过 `this` 添加新的属性，最后隐式的返回了 `this`
- `let user = new function() {}` 立即调用，无法重用。
- `new.target` 可以被用在函数内部，来判断该函数是被通过 `new` 调用的“构造器模式”，还是没被通过 `new` 调用的常规模式。

### 22 - 可选链

- 可选链 `?.` 前面的值为 `undefined` 或者 `null`，它会停止运算并返回 `undefined`
- 安全地访问 `user.address.street` 的方式：

```javascript
let user = {};
console.log(user?.address?.street);
```

- 如果 `?.`左边部分不存在，就会立即停止运算，“短路效应”。
- `?.()` 用于调用一个可能不存在的函数。
- `?.[]` 从一个可能不存在的对象上安全地读取属性。
- 可以使用 `?.` 安全地读取或删除，但不能写入，不能用在赋值语句的左侧。

### 23 - Symbol类型

- 只有两种原始类型可以用作对象属性键：字符串类型、Symbol类型。
- Symbol 值表示唯一的标识符，是带有可选描述的原始唯一值，保证是唯一的，不会被自动转换为字符串。

```javascript
let id = Symbol("id");
```

- 允许创建对象的“隐藏”属性，代码的任何其他部分都不能意外访问或重写这些属性。

```javascript
let user = {
  name: "John",
};

let id = Symbol("id");
user[id] = 1;  // 第三方代码看不到
console.log(user[id]);  // 我们可以使用 symbol 作为键来访问数据
```

- Symbol 总是不同的，即使它们有相同的名字。
- Symbol 属性不参与 `for..in...` 循环。
- 从全局注册表中读取，如果不存在就创建它：全局注册表中的 Symbol 再读取复制是相同的。

```javascript
let sym1 = Symbol.for("name");
let sym2 = Symbol.for("id");
```

- 通过全局 symbol 返回一个名字。

```javascript
console.log(Symbol.keyFor(sym1));  // name
console.log(Symbol.keyFor(sym2));  // id
```

- `Symbol.keyFor`内部使用全局 Symbol 注册表来查找 Symbol 的键。

### 24 - 原始值转换

- 转换规则：
  - 布尔值没有转换。
  - 数字转换发生在对象相减或应用数学函数时。
  - 字符串转换通常发生在像`alert(obj)`这样输出一个对象和类似的上下文中。
- `Symbol.toPrimitive`用来给转换方法命名：

```javascript
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint:${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

console.log(String(user));
console.log(+user);
console.log(user + 500);
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
| num.toString(base) | base 指定进制 2-36 默认 10 | 返回给定进制形式的字符串 |
| num.toFixed(n) |  | 返回指定小数位数，字符串形式，最近舍入，不够添0 |
| parseInt(str) | 可选参数，指定进制 | 返回字符串中读取的整数，直到第一个非数字结束 |
| parseFloat(str) | 可选参数，指定进制 | 返回字符串中读取的浮点数，直到第一个非数字结束 |
| Math.random() |  | 返回一个 0 - 1 的随机数 |
| Math.floor(num) |  | 向下舍入 |
| Math.ceil(num) |  | 向上舍入 |
| Math.round(num) |  | 最近整数舍入 |
| Math.trunc(num) |  | 移除小数点后无舍入 |
| Math.max(...) | 任意数量参数 | 返回一个最大值 |
| Math.min(...) | 任意数量参数 | 返回一个最小值 |
| Math.pow(n, power) |  | 返回 n 的 power 次幂 |
| isNaN(value) |  | 将参数转换为数字，判断是否为NaN |
| isFinite(value) |  | 将参数转换为数字，判断是否为常规数字 |
| Object.is(value1, value2) |  | 类似 === 对值进行比较，可以 NaN === NaN |

### 26 - 字符串类型

| 方法 | 参数 | 描述 |
| --- | --- | --- |
| str.length | 数字属性，而不是函数 | 获取字符串的长度 |
| str[n] |  | 访问字符串，未找到返回undefined |
| str.charAt(n) | 建议使用上面的方式 | 访问字符串，未找到返回空字符串 |
| str.toUpperCase() |  | 转大写 |
| str.toLowerCase() |  | 转小写 |
| str.indexOf(substr, [n]) | 可选参数，指定开始位置 | 返回匹配成功子字符串的位置，大小写敏感，失败返回 -1 |
| str.lastIndexOf(subsrt, [n]) | 可选参数，指定开始位置 | 从末尾开始搜索子字符串 |
| str.includes(substr, [n]) | 可选参数，指定开始位置 | 是否包含某个子字符串 |
| str.startsWith(str1) |  | 是否以某字符串开头 |
| str.endsWith(str1) |  | 是否以某字符串结尾 |
| str.slice(start, end) |  | 返回[start end) 部分的字符串，省略end则到结尾，可取负值 |
| str.substring(start, end) |  | 返回[start end) 部分的字符串，允许start大于end，不支持负值 |
| str.substr(start, length) |  | 返回start开始指定长度的字符串，start允许负值 |
| str.codePointAt(pos) |  | 返回pos位置的字符代码 |
| str.localeCompare(str1) |  | str排在str1前面返回负数、str排在str1后面返回正数、相同返回0 |
| str.trim() |  | 删除字符串前后的空格 |
| str.repeat(n) |  | 重复字符串n次 |

- `for (let ... of ...) { ... }` 遍历字符串。
- 字符串是不可以被修改的，需要创建新的字符串。

### 27 - 数组

| 方法 | 参数 | 描述 |
| --- | --- | --- |
| arr.length |  | 获取元素数量，实际是最大数字索引+1，可写，小于实际则数组被截断，不可逆 |
| arr[n] |  | 访问数组元素 |
| arr[n] = ... |  | 替换或增加数组元素 |
| arr.at(-1) |  | 访问最后一个元素 |
| arr.pop() |  | 末端，取出并返回最后一个元素，取出即被删除 |
| arr.push(...) |  | 末端，添加元素 |
| arr.shift() |  | 首端，取出并返回第一个元素，取出即被删除 |
| arr.unshift(...) |  | 首端，添加元素 |
| delete arr[n] |  | 元素被删除，但位置依然存在 |
| arr.splice(n, n, "...") | 起始位置，删除个数，此后插入的新内容 | 返回被删除的元素 |
| arr.slice(start, end) |  | 返回一个按起始位置截取复制的新数组 |
| arr.concat(arr1, arr2...) |  | 返回一个合并的新数组 |
| arr.forEach((item, index, array) => {...}) | 每个元素，每个元素的索引，数组本身 | 遍历数组的每个元素，并为每个元素运行相关函数，无返回 |
| arr.indexOf(item, n) |  | 从n位置搜索item元素，找到返回索引，否则返回-1 |
| arr.lastIndexOf(item, n) |  | 同上，从右向左搜索 |
| arr.includes(item, n) |  | 从n位置搜索item元素，找到返回true，否则返回false |
| arr.find(...) |  | 返回查找到的指定元素，未找到返回undefined |
| arr.findIndex() |  | 返回查找到的指定元素的索引，未找到返回undefined |
| arr.filter(...) |  | 返回所有匹配元素组成的新数组 |
| arr.map(...) |  | 对数组的每个元素都调用相关函数，返回结果数组 |
| arr.sort(...) | 可设置函数参数，提供规则 | 对数组进行原位排序，默认按字符串排序 |
| arr.reverse() |  | 对数组进行原位颠倒顺序 |
| str.split(...) | ... 指定分隔符，可选参数对数组的长度做出限制，空参则分隔为每个字母 | 返回，通过给定分隔符把字符串分隔为数组 |
| arr.join(...) | ... 指定分隔符 | 返回，通过给定分隔符把数组组合为字符串 |
| arr.reduce((acc, item, index, arry)) | acc 是上一个函数的调用结果，可选参数：初始值 | 返回最后值，函数调用结果作为第一个参数传递 |
| arr.reduceRight(...) |  | 返回最后值，遍历时从右向左 |
| Array.isArray(arr) |  | 判断是否为数组 |
| Object.values(obj) |  | 返回一个给定对象自身的所有可枚举属性值的数组 |

- 数组常用于栈和队列。
- `for (let ... of ...) { ... }` 遍历数组。
- `let arr = [ [...], [...]...]` 多维数组。
- 数组有自己的 `toString` 方法，会返回以逗号分隔的元素列表。
- 可选的附加参数 `thisArg` 参数的值在 `func` 中变为 `this`

### 28 - 可迭代对象

- 可以应用 `for..of` 的对象被称为可迭代对象。
- 数组是可迭代的，字符串也是可迭代的，数组和字符串是使用最广泛的内建可迭代对象。
- `Symbol.iterator` 专门用于使对象可迭代的内建 Symbol
```javascript
let range = {
  from: 1,
  to: 5,
};

// 1. for..of 调用首先会调用这个：
range[Symbol.iterator] = function () {
  // ……它返回迭代器对象（iterator object）：
  // 2. 接下来，for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值
  return {
    current: this.from,
    last: this.to,

    // 3. next() 在 for..of 的每一轮循环迭代中被调用
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      // 当 done=true 时，表示循环结束，否则 value 是下一个值
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// 简化：返回 range 对象自身
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};
```

- `Array.from(...)` 可以接受一个可迭代或类数组的值，并从中获取一个“真正的”数组，然后就可以对其调用数组方法了（有索引，有长度）。

### 29 - 映射与集合

- Map 是一个带键的数据项的集合，就像一个 Object 一样，但是它们最大的差别是 Map 允许任何类型的键（key）。

| 方法 | 描述 |
| --- | --- |
| new Map() | 创建 map 映射 |
| map.set(key, value) | 根据键存储值 |
| map.get(key) | 根据键返回值，不存在返回 undefined |
| map.has(key) | 是否存在 key |
| map.delete(key) | 删除指定键的值 |
| map.clear() | 清空 map |
| map.size | 返回当前元素个数 |
| map.keys() | 遍历并返回一个包含所有键的可迭代对象 |
| map.values() | 遍历并返回一个包含所有值的可迭代对象 |
| map.entries() | 遍历并返回一个包含所有实体的可迭代对象 |
| Object.entries(obj) | 返回对象的键值对数组，数组的格式按照map所需格式，用于对象创建映射 |
| Object.fromEntries([[...], [...]]) | 返回给定一个键值对数组来创建一个相应的对象 |

- 与对象不同，键不会被转换成字符串，键可以是任何类型。
- 使用对象作为键是 Map 最值得注意和重要的功能之一。
- Map 有内建的 `forEach` 方法。

```javascript
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
```

- Set 是一个特殊的类型集合，“值的集合”（没有键），它的每一个值只能出现一次。

| 方法 | 描述 |
| --- | --- |
| new Set(通常可以传入一个数组，创建集合) | 创建一个 Set 集合 |
| set.add(value) | 添加一个值，返回set本身 |
| set.delete(value) | 删除相应的值，返回一个布尔值 |
| set.has(value) | 是否存在该值 |
| set.clear() | 清空 set |
| set.size | 返回元素个数 |
| set.keys() | 遍历并返回一个包含所有值的可迭代对象 |
| set.values() | 与上诉的方法一致，目的是兼容Map |
| set.entries() | 遍历并返回一个包含所有实体的可迭代对象，也是为了兼容Map |

-  可以使用 `for...of..` 或者 `forEach` 来遍历 Set

### 30- 弱映射与弱集合

- 使用对象作为常规 Map 的键，那么当 Map 存在时，该对象也将存在，它会占用内存，并且不会被（垃圾回收机制）回收。
- weakMap 和 Map 的第一个不同点就是，weakMap 的键必须是对象，不能是原始值。

```javascript
let weakMap = new WeakMap();
```

-  在 weakMap 中使用一个对象作为键，并且没有其他对这个对象的引用，该对象将会被从内存（和map）中自动清除。
-  weakMap 不支持迭代以及 keys()，values() 和 entries() 方法,所以没有办法获取 weakMap 的所有键或值。
-  weakMap 的主要应用场景是额外数据的存储，可能是第三方库，并想存储一些与之相关的数据，那么这些数据就应该与这个对象共存亡，再有就是缓存的应用。
-  与 Set 类似，但是只能向 weakSet 添加对象。
-  对象只有在其它某个（些）地方能被访问的时候，才能留在 weakSet 中。

### 31 - 解构赋值

- 解构赋值是一种特殊的语法，可以将数组或对象“拆包”至一系列变量中，原来的数组或对象自身没有被修改。

```javascript
// 额外的逗号，实现不需要第二个元素
let [firstName, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
```

- 等号右侧可以是任何可迭代对象。

```javascript
let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];
```

```javascript
// ...rest 是包含从第三项开始的其余数组项的数组
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
```

- 缺少对应值的变量都会被赋 undefined
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
};

let {
  size: { width, height },
  items: [item1, item2],
  title = "Menu",
} = options;
```

```javascript
// 智能函数参数
let options = {
  title: "My menu",
  items: ["item1", "item2"],
};

function showMenu({
  title = "Untitled",
  width = 200,
  height = 300,
  items = [],
}) {
  console.log(`${title} ${width} ${height}`);
  console.log(items);
}

showMenu(options);
```

### 32 - 日期和时间

- 不带参数，创建的是一个表示当前日期和时间的 Date 对象。

```javascript
let now = new Date();
```

- 传入整数参数，代表的是自 1970-01_01 00 : 00 : 00 以来经过的毫秒数，该整数被称为时间戳。
- 如果只有一个参数，并且是字符串，那么它会被自动解析，`new Date(year, month, date, hours, minutes, seconds, ms)`。

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
| date.setFullYear(year, [month], [date]) |  |
| date.setMonth(month, [date]) |  |
| date.setDate(date) |  |
| date.setHours(hour, [min], [sec], [ms]) |  |
| date.setMinutes(min, [sec], [ms]) |  |
| date.setSeconds(sec, [ms]) |  |
| date.setMilliseconds(ms) |  |
| date.setTime(milliseconds) |  |
| Date.now() | 返回当前的时间戳 |
| Date.parse(str) | 从字符串中读取日期，YYYY-MM-DDTHH :mm :ss .sssZ |

- 日期可以相减，相减的结果是以毫秒为单位的时间差。

### 33 - JSON

- JSON（JavaScript Object Notation）是表示值和对象的通用格式。
- `JSON.stringify(obj)` 将对象转换为 JSON

```javascript
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);
```

- JSON 支持以下数据类型：Objects、Arrays、Primitives（strings、numbers、boolean values true/false、null）。
- JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 `JSON.stringify` 跳过：函数属性（方法）、Symbol 类型的键和值、存储 `undefined` 的属性。

```javascript
// 自定义 “toJSON”
let room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup = {
  title: "Conference",
  room,
};
```

- `JSON.parse(json)`解码 JSON为字符串。

```javascript
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(userData);
```

```javascript
// reviver 也适用于嵌套对象
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup1 = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(meetup1.date.getDate());

// 都支持用于智能读/写的转换函数
```

### 34 - 递归与堆栈

- 递归：调用函数自身。

```javascript
// 递归调用
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 10));
```

- 最大的嵌套调用次数（包括首次）被称为递归深度。
- 执行上下文是一个内部数据结构，它包含有关函数执行时的详细细节：当前控制流所在的位置，当前的变量，`this` 的值，以及其它的一些内部细节。
- 函数嵌套调用时：当前函数被暂停，与它关联的执行上下文被一个叫做执行上下文堆栈的特殊数据结构保存，执行嵌套调用，嵌套调用结束后，从堆栈中恢复之前的执行上下文，并从停止的位置恢复外部函数。
- 任何递归都可以用循环来重写，通常循环变体更有效。
- 递归的一个重要应用是递归遍历。

### 35 - Rest参数与Spread语法

- 在 JS 中，无论函数是如何定义的，都可以在调用它时传入任意数量的参数。
- `...变量名`，这将会声明一个数组并指定其名称，其中存有剩余的参数。
- rest 参数必须放到参数列表的末尾

```javascript
// rest 参数
function sumAll(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

console.log(sumAll(1, 2, 3, 4, 5, 6));
```

- `arguments` 是一个特殊类数组对象，可以在函数中被访问，该对象以参数在参数列表中的索引作为键，存储所有参数，箭头函数没有`arguments`
- spread 语法：使用 ...可迭代对象，可以把可迭代对象展开到参数列表中。

```javascript
// Spread 语法
let arr = [3, 5, 6, 9, 8, 4];
// 可以使用逗号分隔，传入多个可迭代对象
console.log(Math.max(...arr));
```

- spread 语法内部使用了迭代器来收集元素，与 `for..of` 的方式相同，可用于复制 array/object

### 36 - 变量作用域与闭包

- `let\const` 如果在代码块 `{...}`内声明了一个变量，那么这个变量只在该代码块内可见。
- `if`，`for` 和 `while` 等，在 `{...}` 中声明的变量也仅在内部可见。
- 闭包是指：一个函数可以记住其外部变量并可以访问这些变量，在JavaScript 中，几乎所有函数都是天生闭包的（有一个例外），JavaScript 中的函数会自动通过隐藏的 `[[Environment]]` 属性记住创建它们的位置，所以它们都可以访问外部变量，函数中创建的函数可以访问外部函数的变量。
- 闭包就是指有权访问另一个函数作用域中的变量的函数。
- 函数将从内到外依次在对应的词法环境中寻找目标变量，它使用最新的值。
- 通常，函数调用完成后，会将词法环境和其中的所有变量从内存中删除，但是，如果有一个嵌套的函数在函数结束后仍可达，则它将具有引用词法环境的 `[[Environment]]` 属性。

### 37 - var

- `var` 没有块级作用域，用 `var` 声明的变量，不是函数作用域就是全局作用域。
- 使用 `var` ，可以重复声明一个变量，不管多少次都行。
- `var` 声明的变量，可以在其声明语句前被使用，被提升，声明会被提升，但是赋值不会。
- 所有的 `var` 声明都是在函数开头处理的，可以在任何地方引用它们，但是在它们被赋值之前都是 undefined
- 全局对象提供可在任何地方使用的变量和函数，默认情况下，这些全局变量内建于语言或环境中，在浏览器中，它的名字是 “window”，对 Node.js 而言，它的名字是 “global”
- `globalThis` 被作为全局对象的标准名称加入到了 JavaScript 中，所有环境都应该支持该名称。

### 38 - 函数对象与NFE

- 命名函数表达式（NFE，Named Function Expression），指带有名字的函数表达式的术语。

```javascript
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // 使用 func 再次调用函数自身
  }
};

sayHi(); // Hello, Guest

// 但这不工作：
func(); // Error, func is not defined（在函数外不可见）
```

- 它允许函数在内部引用自己，它在函数外是不可见的。

```javascript
// 属性 name
function sayHi() {
  console.log("Hi");
}

console.log(sayHi.name);

// 属性 lenght
function f1(a) {}
function f2(a, b) {}

// 返回的是参数的个数，rest 参数不参与计数
console.log(f1.length);
console.log(f2.length);
```

### 39 - new Function
```javascript
let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) );
```

- `new Function` 允许我们将任意字符串变为函数。
- 使用 `new Function` 创建一个函数，那么该函数的 `[[Environment]]` 并不指向当前的词法环境，而是指向全局环境，因此，此类函数无法访问外部（outer）变量，只能访问全局变量。
### 40 - setTimeout与setInterval

- `setTimeout` 允许将函数推迟到一段时间间隔之后再执行。
- `setTimeout` 在调用时会返回一个“定时器标识符“（timer identifier）。
- 任何 `setTimeout` 都只会在当前代码执行完毕之后才会执行。
- `clearTimeout`(返回值) 取消调度。

```javascript
// setTimeout()
function sayHi(phrase, who) {
  console.log(phrase + ", " + who);
}

setTimeout(sayHi, 5000, "Hello", "John");

// 箭头函数简写
setTimeout(() => console.log("Hello Xiaofan"), 2000);
```

- `setInterval` 允许重复运行一个函数，从一段时间间隔之后开始运行，之后以该时间间隔连续重复运行该函数。
- `clearInterval`(返回值) 取消调度。

```javascript
// setInterval()
let timerId = setInterval(() => console.log("xiaofan"), 3000);

setTimeout(() => {
  clearInterval(timerId);
  console.log("stop");
}, 9000);
```

- 嵌套的 `setTimeout` 要比 `setInterval` 灵活得多，采用这种方式可以根据当前执行结果来调度下一次调用，因此下一次调用可以与当前这一次不同，嵌套的 `setTimeout` 能够精确地设置两次执行之间的延时，而 `setInterval` 却不能。
- 使用 `setInterval` 时，`func` 函数的实际调用间隔要比代码中设定的时间间隔要短。
- 嵌套的 `setTimeout` 就能确保延时的固定，这是因为下一次调用是在前一次调用完成时再调度的。
- 当不再需要调度函数时，最好取消它。
- 在浏览器环境下，嵌套定时器的运行频率是受限制的，时间间隔被强制设定为至少 4 毫秒。

### 41 - 装饰器模式与转发

- 装饰器是一个围绕改变函数行为的包装器，主要工作仍由该函数来完成。
- 装饰器（decorator）：一个特殊的函数，它接受另一个函数并改变它的行为。

```javascript
function slow(x) {
  // 这里可能会有重负载的 CPU 密集型工作
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // 如果缓存中有对应的结果
      return cache.get(x); // 从缓存中读取结果
    }

    let result = func(x); // 否则就调用 func

    cache.set(x, result); // 然后将结果缓存（记住）下来
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1)); // slow(1) 被缓存下来了，并返回结果
console.log("Again: " + slow(1)); // 返回缓存中的 slow(1) 的结果

console.log(slow(2)); // slow(2) 被缓存下来了，并返回结果
console.log("Again: " + slow(2)); // 返回缓存中的 slow(2) 的结果
```

- 它们调用的都是 `func`，参数是 `1`、`2` 和 `3`，唯一的区别是 `func.call` 还会将 `this` 设置为 `obj`

```javascript
// 二者几乎等效
func(1, 2, 3);
func.call(obj, 1, 2, 3)
```
```javascript
func.call(context, ...args);
func.apply(context, args);
```

- `call` 期望一个参数列表，而 `apply` 期望一个包含这些参数的类数组对象。
- 将所有参数连同上下文一起传递给另一个函数被称为“呼叫转移”（call forwarding）。

```javascript
// 方法借用
function hash() {
  console.log([].join.call(arguments));
}
```

- 防抖：`debounce` 会在“冷却（cooldown）”期后运行函数一次，适用于处理最终结果。在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。用户触发时间过于频繁，只要最后一次请求的操作就叫做防抖。
- 节流：`throttle` 运行函数的频率不会大于所给定的时间 `ms` 毫秒，适用于不应该经常进行的定期更新。当持续触发事件时，保证在一定时间内只调用一次事件处理函数，意思就是说，假设一个用户一直触发这个函数，且每次触发小于既定值，函数节流会每隔这个时间调用一次。
- 防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行。

### 42 - 函数绑定

- 丢失 `this`，一旦方法被传递到与对象分开的某个地方 `this` 就丢失。
- 解决方法1：包装器，它从外部词法环境中获取到了需要的变量。
- 解决方法2： `bind` 方法，它可以绑定 `this`，不能重新绑定。

```javascript
let user = {
  firstName: "John",
};

function func() {
  console.log(this.firstName);
}

let funcUser = func.bind(user);
funcUser();
```

- 一个对象有很多方法，并且都打算将它们都传递出去，那么可以在一个循环中完成所有方法的绑定：

```javascript
for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}
```

- 偏函数：通过绑定先有函数的一些参数来创建一个新函数。
```javascript
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

console.log(double(3)); // 6
console.log(double(4)); // 8
```

- `partial(func[, arg1, arg2...])` 调用的结果是一个包装器 。
```javascript
function partial(func, ...argsBound) {
  return function(...args) {
    return func.call(this, ...argsBound, ...args);
  }
}
```

- `.bind(this)` 创建了一个该函数的“绑定版本”。
- 箭头函数 `=>` 没有创建任何绑定，箭头函数只是没有 `this`，`this` 的查找与常规变量的搜索方式完全相同：在外部词法环境中查找。箭头函数也没有 `arguments` 变量。
- 箭头函数是针对那些没有自己的“上下文”，但在当前上下文中起作用的短代码的。

### 43 - 属性标志与描述符

- 属性标志：`writable` 如果为 `true`，则为可写的，否则不可写；`enumerable` 如果为 `true`，则会在循环中列出，否则不可以；`configurable` 如果为 `true`，则是可以被删除/修改，否则不可以；用“常用的方式”创建一个属性时，它们都为 `true`

| 方法 | 描述 |
| --- | --- |
| Object.getOwnPropertyDescriptor(obj, propertyName) | 查询有关属性的完整信息 |
| Object.getOwnPropertyDescriptors(obj) | 一次获取所有属性的描述 |
| Object.defineProperety(obj, propertyName, descriptor) | 如果该属性存在，会更新其标志，否则，它会使用给定的值和标志创建属性，没有提供标志，则会假定它是 false |
| Object.defineProperties(obj, descriptors) | 允许一次定义多个属性 |
| 限制整个对象的方法 |  |
| Object.preventExtensions(obj) | 禁止向对象添加新属性 |
| Object.seal(obj) | 禁止添加/删除属性，为所有现有的属性设置 `configurable: false` |
| Object.freeze(obj) | 禁止添加/删除/更改属性，为所有现有的属性设置 `configurable: false, writable: false` |
| 针对测试： |  |
| Object.isExtensible(obj) | 如果添加属性被禁止，则返回 false，否则返回 true |
| Object.isSealed(obj) | 如果添加/删除属性被禁止，并且所有现有的属性都具有 `configurable: false`
则返回 true |
| Object.isFrozen(obj) | 如果添加/删除/更改属性被禁止，并且所有当前属性都是 `configurable: false, writable: false`
，则返回 true |

```javascript
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});
```

- 完全克隆对象，包括属性、symbol类型、不可枚举类型。

```javascript
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
```

### 44 - getter与setter

- 两种类型的对象属性：第一种是数据属性；第二种是访问器属性，本质上是用于获取和设置值的函数。
- 对于访问器属性，没有 `value` 和 `writable`，但是有 `get` 和 `set` 函数。
- 一个属性要么是访问器（具有 `get/set` 方法），要么是数据属性（具有 `value`），但不能两者都是。

```javascript
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// 访问器属性看起来就像一个普通属性
// 不以函数的方式调用 user.fullName，我们正常读取它：getter 在幕后运行
console.log(user.fullName);

user.fullName = "Alice Cooper";
console.log(user.fullName);
```

### 45 - 原型继承

- 在 JS 中，对象有一个特殊的隐藏属性 `[[Prototype]]`，它要么为 `null`，要么就是对另一个对象的引用，该对象被称为“原型”。

```javascript
// 将 animal 设置为 rabbit 的原型
// rabbit 的原型是从 animal 继承而来的
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

// 设置 rabbit.[[Prototype]] = animal
rabbit.__proto__ = animal;

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

console.log(rabbit.eats);
console.log(rabbit.jumps);
```

- 从 `object` 中读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性。
- 引用不能形成闭环，如果我们试图在一个闭环中分配 `__proto__`，JavaScript 会抛出错误。
- `__proto__` 的值可以是对象，也可以是 `null`，而其他的类型都会被忽略。
- 只能有一个 `[[Prototype]]`，一个对象不能从其他两个对象获得继承。
- `__proto__` 是 `[[Prototype]]` 的因历史原因而留下来的 getter/setter
- 访问器（accessor）属性是一个例外，因为分配（assignment）操作是由 setter 函数处理的。因此，写入此类属性实际上与调用函数相同。
- 无论在哪里找到方法，在一个对象还是在原型中。在一个方法调用中，`this` 始终是点符号 `.` 前面的对象（调用者）。
- 当继承的对象运行继承的方法时，它们将仅修改自己的状态，而不会修改大对象的状态。
- 方法是共享的，但对象状态不是。
- 现代编程语言建议应该使用函数 `Object.getPrototypeOf/Object.setPrototypeOf` 来取代 `__proto__` 去 get/set 原型。
- `for..in` 循环也会迭代继承的属性。

| 方法 | 描述 |
| --- | --- |
| obj.hasOwnProperty(key) | 如果 `obj`具有自己的（非继承的）名为 `key`的属性，则返回 `true` |

```javascript
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}
```

- 几乎所有其他键/值获取方法都忽略继承的属性。

### 46 - F.prototype

- `F.prototype` 属性仅在 `new F` 被调用时使用，它为新对象的 `[[Prototype]]` 赋值。
- `F.prototype` 的值要么是一个对象，要么就是 `null`：其他值都不起作用。
- `prototype` 属性仅当设置在一个构造函数上，并通过 `new` 调用时，才具有这种特殊的影响。
- 默认情况下，所有函数都有 `F.prototype = {constructor：F}`，所以我们可以通过访问它的 `constructor` 属性来获取一个对象的构造器，属性 `constructor` 指向函数自身，当我们有一个对象，但不知道它使用了哪个构造器（例如它来自第三方库），并且我们需要创建另一个类似的对象时，用这种方法就很方便。

```javascript
// 通过构造函数创建的对象设置 [[Prototype]] 的方法
let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

// 当创建了一个 new Rabbit 时，把它的 [[Prototype]] 赋值为 animal
Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log(rabbit.eats); // true
```

### 47 - 原生的原型

- 所有的内建对象都遵循相同的模式（pattern）：方法都存储在 prototype 中，对象本身只存储数据，原始数据类型也将方法存储在包装器对象的 prototype 中。
- `obj = {}` 和 `obj = new Object()` 是一个意思，其中 `Object` 就是一个内建的对象构造函数，其自身的 `prototype` 指向一个带有 `toString` 和其他方法的一个巨大的对象。
- `Array`、`Date`、`Function` 及其他，都在 prototype 上挂载了方法。
- 访问基本数据类型的属性，那么临时包装器对象将会通过内建的构造器 `String`、`Number` 和 `Boolean` 被创建。它们提供操作字符串、数字和布尔值的方法然后消失。
- 值 `null` 和 `undefined` 没有对象包装器。
- 修改原生原型：Polyfilling 是一个术语，表示某个方法在 JavaScript 规范中已存在，但是特定的 JavaScript 引擎尚不支持该方法，那么我们可以通过手动实现它，并用以填充内建原型。

```javascript
console.dir([1, 2, 3]);

// 原型借用
let obj = {
  0: "Hello",
  1: "xiaofan",
  length: 2,
};

obj.join = Array.prototype.join;

console.log(obj.join(", "));
```

### 48 - 原型方法

- `Object.getPrototypeOf(obj)` ： 返回对象 obj 的 [[Prototype]]
- `Object.setPrototypeOf(obj, proto)` ：将对象 obj 的 [[Prototype]] 设置为 proto
- `Object.create(proto, [descriptors])` ：利用给定的 proto 作为 [[Prototype]] 和可选的属性描述来创建一个空对象

```javascript
let animal = {
  eats: true
};

// 创建一个以 animal 为原型的新对象
let rabbit = Object.create(animal); // 与 {__proto__: animal} 相同

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // 将 rabbit 的原型修改为 {}
```

- `Object.create` 方法更强大，因为它有一个可选的第二参数：属性描述器，可以在此处为新对象提供额外的属性。
- 使用描述器创建一个属性，它的标识默认是 `false`

```javascript
// 更加强大的准确拷贝（浅拷贝）
let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
```

- `__proto__` 不是对象的属性，而是 `Object.prototype` 的访问器属性。
- `__proto__` 是一种访问 `[[Prototype]]` 的方式，而不是 `[[prototype]]` 本身。
- 大多数与对象相关的方法都是 `Object.something(...)`，例如 `Object.keys(obj)` ，它们不在 prototype 中，因此在 “very plain” 对象中它们还是可以继续使用。
- ![原型.png](https://pic.jitudisk.com/public/2022/11/16/953738a9e5030.png)

### 49 - Class

-  在 JavaScript 中，类是一种函数。
-  `class` 是用于创建对象的可扩展的程序代码模版，它为对象提供了状态（成员变量）的初始值和行为（成员函数或方法）的实现。
-  类的方法之间没有逗号。

```javascript
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// class 是一个函数
console.log(typeof User); // function

// ...或者，更确切地说，是 constructor 方法
console.log(User === User.prototype.constructor); // true

// 方法在 User.prototype 中，例如：
console.log(User.prototype.sayHi); // sayHi 方法的代码

// 在原型中实际上有两个方法
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
```

- 通过 `class` 创建的函数具有特殊的内部属性标记 `[[IsClassConstructor]]: true`。因此，它与手动创建并不完全相同。
- 类方法不可枚举。
- 类总是使用 `use strict`
- 类字段的不同之处在于，它们会在每个独立对象中被设置，而不是设在 `User.prototype`，可以用于函数绑定。

```javascript
// 类表达式
let User = class {
  sayHi() {
    console.log("Hello");
  }
};
// class 之后可以跟一个名字，只有内部可见
```
```javascript
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
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }
}
```

### 50 - 类继承

- 类继承是一个类扩展另一个类的一种方式。
- 类语法不仅允许指定一个类，在 `extends` 后可以指定任意表达式。

```javascript
function f(phrase) {
  return class {
    sayHi() { console.log(phrase); }
  };
}

class User extends f("Hello") {}

new User().sayHi(); // Hello
```

- 执行 `super.method(...)` 来调用一个父类方法。
- 执行 `super(...)` 来调用一个父类 constructor（只能在 constructor 中）。
- 箭头函数没有`super`，如果被访问，它会从外部函数获取。
- 继承时如果没有写自己的 `constructor`：

```javascript
class Rabbit extends Animal {
  // 为没有自己的 constructor 的扩展类生成的
  constructor(...args) {
    super(...args);
  }
}
```

- 继承类的 constructor 必须调用 `super(...)`，并且一定要在使用 `this` 之前调用。
- 派生类的 constructor 必须调用 `super()`，否则 `"this"` 不会被定义。

```javascript
class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}
```

- 当父类构造器在派生的类中被调用时，它会使用被重写的方法。
- 父类构造器总是会使用它自己字段的值，而不是被重写的那一个。
- 类字段初始化：对于基类（还未继承任何东西的那种），在构造函数调用前初始化，对于派生类，在 `super()` 后立刻初始化。
- 当一个函数被定义为类或者对象方法时，它的 `[[HomeObject]]` 属性就成为了该对象，然后 `super` （仅用于）使用它来解析（resolve）父原型及其方法。
- `[[HomeObject]]` 是为类和普通对象中的方法定义的，不是函数属性。

### 51 - 静态属性与方法

- 静态方法被用于实现属于整个类的功能，它与具体的类实例无关。
- 把一个方法作为一个整体赋值给类，这样的方法被称为静态的（static）。
- 通常静态方法用于实现属于整个类，但不属于该类任何特定对象的函数。
- 静态方法也被用于与数据库相关的公共类，可以用于搜索/保存/删除数据库中的条目。
- 静态方法可以在类上调用，而不是在单个对象上。
- 静态属性和方法是可被继承的。
- 内建的 `Object` 构造函数，`Object.__proto__ === Function.prototype`
- class Rabbit： `Rabbit.__proto__ === Function.prototype`
- class Rabbit extends Object： `Rabbit.__proto__ === Object`

```javascript
// 近期新规 静态属性
class Article {
  static publisher = "levi Ding";
}

console.log(Article.publisher);
```

### 52 - 私有的与受保护的

- 内部接口：可以通过该类的其他方法访问，但不能从外部访问的方法和属性。
- 外部接口：也可以从类的外部访问的方法和属性。
- 公有的：可从任何地方访问，它们构成了外部接口。
- 私有的：只能从类的内部访问，这些用于内部接口。
- 受保护的：（不是JS语言级别实现的），私有的，但可以从继承的类进行访问。
- 受保护的属性通常以下划线 `_` 作为前缀。

```javascript
// 受保护的
class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

  // 设置为只读 没有setter
  get power() {
    return this._power;
  }
}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = -10;
console.log(coffeeMachine.waterAmount);

console.log(coffeeMachine.power);
coffeeMachine.power = 250;
console.log(coffeeMachine.power);
```

- 新增语言级私有语法：私有属性和方法应该以 `#` 开头。它们只在类的内部可被访问，无法从外部或从继承的类中访问它。
- 私有字段与公共字段不会发生冲突，可以同时拥有私有的 `#waterAmount` 和公共的 `waterAmount` 字段。
- 私有字段不能通过 `this[name]` 访问。

### 53 - 扩展内建类

- 内建的方法例如 `filter`，`map` 等，返回的正是子类 `PowerArray` 的新对象，它们内部使用了对象的 `constructor` 属性来实现这一功能。
- 添加一个特殊的静态 getter `Symbol.species`，如果存在，则应返回 JavaScript 在内部用来在 `map` 和 `filter` 等方法中创建新实体的 `constructor`
- 内建类却是一个例外，它们相互间不继承静态方法。
- `Date` 和 `Object` 之间没有连结，它们是独立的，只有 `Date.prototype` 继承自 `Object.prototype`

### 54 - 类检查

- `instanceof` 操作符用于检查一个对象是否属于某个特定的 class，同时它还考虑了继承。
- 多态性（polymorphic） 的函数，该函数根据参数的类型对参数进行不同的处理。
- `instanceof` 并不关心函数，而是关心函数的与原型链匹配的 `prototype`，真正决定类型的是 `prototype`，而不是构造函数。
- 可以将 `obj instanceof Class` 检查改为 `Class.prototype.isPrototypeOf(obj)`
- 使用特殊的对象属性 `Symbol.toStringTag` 自定义对象的 `toString` 方法的行为：

```javascript
let user = {
  [Symbol.toStringTag]: "User"
};

alert( {}.toString.call(user) );
```

- 类型检查方法

|  | 用于 | 返回值 |
| --- | --- | --- |
| typeof | 原始数据类型 | string |
| {}.toString | 原始数据类型，内建对象，包含 `Symbol.toStringTag`
 属性的对象 | string |
| instanceof | 对象，考虑继承时更出色 | true/false |

### 55 - Mixin模式

- `mixin` 是一个包含可被其他类使用而无需继承的方法的类。
- JavaScript 不支持多重继承，但是可以通过将方法拷贝到原型中来实现 `mixin`

```javascript
// 这里没有继承，只有一个简单的方法拷贝。所以 User 可以从另一个类继承
// mixin
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

// 用法：
class User {
  constructor(name) {
    this.name = name;
  }
}

// 拷贝方法
Object.assign(User.prototype, sayHiMixin);

// 现在 User 可以打招呼了
new User("Dude").sayHi(); // Hello Dude!
```

- `mixin` 提供 `.trigger(name, [...data])` 方法，以在发生重要的事情时“生成一个事件”，`name` 参数（arguments）是事件的名称，`[...data]` 是可选的带有事件数据的其他参数（arguments）。
- `.on(name, handler)` 方法，它为具有给定名称的事件添加了 `handler` 函数作为监听器（listener），当具有给定 `name` 的事件触发时将调用该方法，并从 `.trigger` 调用中获取参数（arguments）。
- `.off(name, handler)` 方法，它会删除 `handler` 监听器（listener）。

### 56 - 错误处理

-  `try...catch...`：首先，执行 `try {...}` 中的代码，如果这里没有错误，则忽略 `catch (err)`：执行到 `try` 的末尾并跳过 `catch` 继续执行，如果这里出现错误，则 `try` 执行停止，控制流转向 `catch (err)` 的开头，变量 `err`（我们可以使用任何名称）将包含一个 `error` 对象，该对象包含了所发生事件的详细信息。
-  `try...catch` 仅对运行时的 `error` 有效，只能处理有效代码中出现的错误，这类错误被称为“运行时的错误（runtime errors）”，有时被称为“异常（exceptions）”。
-  发生错误时，JavaScript 生成一个包含有关其详细信息的对象，然后将该对象作为参数传递给 `catch`。
-  `error` 对象的常用属性：`name/message/stack`
-  `throw` 操作符会生成一个 error 对象，在try中不符合要求时，主动抛出一个异常。
-  JavaScript 中有很多内建的标准 error 的构造器：`Error`，`SyntaxError`，`ReferenceError`，`TypeError` 等，也可以使用它们来创建 `error` 对象。

```javascript
let error = new Error(message);
// 或
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```

- 再次抛出：`catch` 应该只处理它知道的 `error`，并“抛出”所有其他 `error`，可以接由外部的 `try...catch` 处理。
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
- 全局 `catch`，将一个函数赋值给特殊的 `window.onerror` 属性，该函数将在发生未捕获的 `error` 时执行。

```javascript
// 自定义错误
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// 用法
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }

  return user;
}

// try..catch 的工作示例

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message);
  } else if (err instanceof SyntaxError) {
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err;  // 未知的 error，再次抛出
  }
}
```

- “包装异常（wrapping exceptions）”，将“低级别”的异常“包装”到了更抽象的 `ReadError` 中。

### 57 - 回调

- 基于回调的异步编程风格，异步执行某项功能的函数应该提供一个 `callback` 参数用于在相应事件完成时调用。
- 可以在回调中回调。

```javascript
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// Error 优先回调（error-first callback）
loadScript('/my/script.js', function(error, script) {
  if (error) {
    // 处理 error
  } else {
    // 脚本加载成功
  }
});
```

- “回调地狱”或“厄运金字塔”：过多的嵌套调用，可以通过使每个行为都成为一个独立的函数来尝试减轻这种问题，最好的方法之一就是 “promise”。

### 58 - Promise

- `Promise` 是将“生产者代码”和“消费者代码”连接在一起的一个特殊的 JavaScript 对象。
- 在前端编程中，`promise` 通常被用于网络请求。

```javascript
// Promise 对象的构造器（constructor）语法
let promise = new Promise(function(resolve, reject) {
  // executor（生产者代码）
});
```

- 传递给 `new Promise` 的函数被称为 `executor`，当 `new Promise` 被创建，`executor` 会自动运行，它包含最终应产出结果的生产者代码，它的参数 `resolve` 和 `reject` 是由 JavaScript 自身提供的回调。
- 当 `executor` 获得了结果，调用以下回调之一：`resolve(value)` ，如果任务成功完成并带有结果 `value；reject(error)`如果出现了 `error`，`error` 即为 `error` 对象。总之，`executor` 会自动运行并尝试执行一项工作，尝试结束后，如果成功则调用 `resolve`，如果出现 `error` 则调用 `reject`
- 构造器返回的 `promise` 对象具有以下内部属性：`state`最初是 `"pending"`，然后在 `resolve` 被调用时变为 `"fulfilled"`，或者在 `reject` 被调用时变为 `"rejected"`；`result`  最初是 `undefined`，然后在 `resolve(value)` 被调用时变为 `value`，或者在 `reject(error)` 被调用时变为 `error`
- `executor` 只能调用一个 `resolve` 或一个 `reject`，任何状态的更改都是最终的，`resolve/reject` 只需要一个参数（或不包含任何参数），并且将忽略额外的参数。

```javascript
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
```

- `.then` 的第一个参数是一个函数，该函数将在 promise resolved 且接收到结果后执行，`.then` 的第二个参数也是一个函数，该函数将在 promise rejected 且接收到 `error` 信息后执行。

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) 与 promise.then(null, f) 一样
promise.catch(alert);  // 1 秒后显示 "Error: Whoops!"
```

- `.catch(f)` 调用是 `.then(null, f)` 的完全的模拟，它只是一个简写形式。
- 调用 `.finally(f)` 类似于 `.then(f, f)`，因为当 promise settled 时 `f` 就会执行：无论 `promise` 被 `resolve` 还是 `reject`，`finally` 的功能是设置一个处理程序在前面的操作完成后，执行清理/终结。

```javascript
new Promise((resolve, reject) => {
  /* 做一些需要时间的事儿，之后调用可能会 resolve 也可能会 reject */
})
// 在 promise 为 settled 时运行，无论成功与否
.finally(() => stop loading indicator)
// 所以，加载指示器（loading indicator）始终会在继续之前停止
.then(result => show result, err => show error)
```

- `finally` 处理程序（handler）没有参数，`finally` 处理程序也不应该返回任何内容。
- `finally` 处理程序没有得到前一个处理程序的结果（它没有参数），而这个结果被传递给了下一个合适的处理程序，如果 `finally` 处理程序返回了一些内容，那么这些内容会被忽略，当 `finally` 抛出 `error` 时，执行将转到最近的 `error` 的处理程序。
- 如果 `promise` 为 `pending` 状态，`.then/catch/finally` 处理程序（handler）将等待它的结果，`Promise` 则更加灵活，可以随时添加处理程序（handler）：如果结果已经在了，它们就会执行。
- Promise链：
- `.then(handler)` 中所使用的处理程序（handler）可以创建并返回一个 `promise`，返回 `promise` 使能够构建异步行为链。
- 确切地说，处理程序（handler）返回的不完全是一个 `promise`，而是返回的被称为 “thenable” 对象，一个具有方法 `.then` 的任意对象，它会被当做一个 `promise` 来对待。
- `fetch(url)`方法从远程服务器加载用户信息。
- `response.text()` 方法：当全部文字（full text）内容从远程服务器下载完成后，它会返回一个 `promise`，该 `promise` 以刚刚下载完成的这个文本作为 `result` 进行 `resolve`
-  `fetch` 返回的 `response` 对象还包括 `response.json()` 方法，该方法读取远程数据并将其解析为 JSON
-  作为一个好的做法，异步行为应该始终返回一个 `promise`
-  总结：如果 `.then`（或 `catch/finally` 都可以）处理程序（handler）返回一个 `promise`，那么链的其余部分将会等待，直到它状态变为 `settled`，当它被 `settled` 后，其 `result`（或 error）将被进一步传递下去。
-  捕获所有 `error` 的最简单的方法是，将 `.catch` 附加到链的末尾。
-  在 `executor` 周围的隐式 `try..catch`自动捕获了 `error`，并将其变为 `rejected promise`，`.then` 处理程序（handler）中 `throw`，这意味着 `promise` 被 `rejected`，因此控制权移交至最近的 `error` 处理程序（handler）。
-  在 `.catch` 中 `throw`，那么控制权就会被移交到下一个最近的 `error` 处理程序（handler），处理该 `error` 并正常完成，那么它将继续到最近的成功的 `.then` 处理程序（handler）。
-  在任何情况下都应该有 `unhandledrejection` 事件处理程序（用于浏览器，以及其他环境的模拟），以跟踪未处理的 error 并告知用户（可能还有我们的服务器）有关信息，以使应用程序永远不会“死掉”。

```javascript
window.addEventListener('unhandledrejection', function(event) {
  // 这个事件对象有两个特殊的属性：
  alert(event.promise); // [object Promise] - 生成该全局 error 的 promise
  alert(event.reason); // Error: Whoops! - 未处理的 error 对象
});

new Promise(function() {
  throw new Error("Whoops!");
}); // 没有用来处理 error 的 catch
```

### 59 - Promise API

| 方法 | 参数 | 描述 |
| --- | --- | --- |
| Promise.all(iterable) | 通常是一个数组项为 promise 的数组 | 并行执行多个 promise，并等待所有 promise 都准备就绪，返回存放它们结果的数组 |
| Promise.allSettled(iterable) | 通常是一个数组项为 promise 的数组 | 等待所有的 promise 都被 settle，无论结果如何，返回结果的对象数组 |
| Promise.race(iterable) | 通常是一个数组项为 promise 的数组 | 只等待第一个 settled 的 promise 并获取其结果（或 error），将其 result/error 作为结果返回 |
| Promise.any(iterable) | 通常是一个数组项为 promise 的数组 | 等待第一个 fulfilled 的 promise，并将这个 fulfilled 的 promise 返回，如果给出的 promise 都 rejected，那么则返回 rejected 的 promise 和 `AggregateError`
错误类型的 error 实例，并将其结果作为结果返回 |
| Promise.resolve(value) | 现在很少被使用 | 用结果 `value`
 创建一个 resolved 的 promise |
| Promise.reject(error) | 基本没被使用 | 用 `error`
 创建一个 rejected 的 promise |

-  一个常见的技巧是，将一个任务数据数组映射（map）到一个 `promise` 数组，然后将其包装到 `Promise.all`
-  任意一个 `promise` 被 `reject`，由 `Promise.all` 返回的 `promise` 就会立即 `reject`，并且带有的就是这个 `error`，如果出现 `error`，其他 `promise` 将被忽略。
-  `Promise.all(...)` 接受含有 `promise` 项的可迭代对象（大多数情况下是数组）作为参数，但是如果这些对象中的任何一个不是 `promise`，那么它将被“按原样”传递给结果数组。
-  `Promise.allSettled`，对于每个 promise，都得到了其状态（status）和 `value/reason`，以对象数组的形式返回它们的结果：`status`: `"fulfilled"` 或 `"rejected"`、`value`（如果 fulfilled）或 `reason`（如果 rejected）。
-  `Promisification`：指将一个接受回调的函数转换为一个返回 `promise` 的函数，但不是回调的完全替代。
-  在实际开发中，可能需要 `promisify` 很多函数，所以使用一个 `helper`（辅助函数）很有意义，将其称为 `promisify(f)`：它接受一个需要被 `promisify` 的函数 `f`，并返回一个包装（wrapper）函数。

```javascript
function promisify(f) {
  return function (...args) {  // 返回一个包装函数（wrapper-function） (*)
    return new Promise((resolve, reject) => {
      function callback(err, result) {  // 对 f 的自定义的回调 (**)
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // 将自定义的回调附加到 f 参数（arguments）的末尾

      f.call(this, ...args);  // 调用原始的函数
    });
  };
}

// 用法：
let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);
```

- `promisification` 仅适用于调用一次回调的函数，进一步的调用将被忽略。

### 60 - 微任务

- `Promise` 处理始终是异步的，内部队列 `PromiseJobs`，通常被称为“微任务队列（microtask queue）”。
- 当一个 `promis`e 准备就绪时，它的 `.then/catch/finally` 处理程序（handler）就会被放入队列中：但是它们不会立即被执行，当 JavaScript 引擎执行完当前的代码，它会从队列中获取任务并执行它。
- 如果需要确保一段代码在 `.then/catch/finally` 之后被执行，可以将它添加到链式调用的 `.then` 中。

### 61 - Async/await

- `Async/await` 是以更舒适的方式使用 `promise` 的一种特殊语法。

```javascript
async function f() {
  return 1;
}
```

- 这个函数总是返回一个 `promise`，其他值将自动被包装在一个 `resolved` 的 `promise` 中。

```javascript
// 只在 async 函数内工作
let value = await promise;
```

- `await` 让 JavaScript 引擎等待直到 `promise` 完成（settle）并返回结果，不能在普通函数中使用 `await`
- `await` 实际上会暂停函数的执行，直到 `promise` 状态变为 `settled`，然后以 `promise` 的结果继续执行。
- 现代浏览器在 `modules` 里允许顶层的 `await`，也可以包装到匿名的异步函数中。
- `await` 允许使用 `thenable` 对象（那些具有可调用的 `then` 方法的对象）。
- 当使用 `async/await` 时，几乎就不会用到 `.then` 了，因为 `await` 处理了等待，并且使用常规的 `try..catch` 而不是 `.catch`，在所有 `async` 函数之外，在语法上就不能使用 `await` 了，所以这时候通常的做法是添加 `.then/catch` 来处理最终的结果（result）或掉出来的（falling-through）error

### 62 - Generator

- `Generator` 可以按需一个接一个地返回（“yield”）多个值。它们可与 `iterable` 完美配合使用，从而可以轻松地创建数据流。

```javascript
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();
let one = generator.next();
let two = generator.next();
let three = generator.next();
```

- 此类函数被调用时，它不会运行其代码。而是返回一个被称为 “generator object” 的特殊对象（生成器对象），来管理执行流程。
- `generator` 的主要方法就是 `next()`：`next()` 的结果始终是一个具有两个属性的对象，`value`: 产出的（yielded）的值，`done`: 如果 `generator` 函数已执行完成则为 `true`，否则为 `false`
- `function* f(…)` 或 `function *f(…)`，两种语法都是对的，更倾向第一种。
- `Generator` 是可迭代的，当 `done: true` 时，`for..of` 循环会忽略最后一个 `value`，想要通过 `for..of` 循环显示所有的结果，必须使用 `yield` 返回它们，可以使用 `iterator` 的所有相关功能，例如：`spread` 语法 `...`
- `Generator` 组合（composition）是 `generator` 的一个特殊功能，它允许透明地（transparently）将 `generator` 彼此“嵌入（embed）”到一起。使用 `yield*` 这个特殊的语法来将一个 `generator` “嵌入”（组合）到另一个 `generator` 中。
- `yield*` 指令将执行委托给另一个 `generator`。
- `yield` 是一条双向路（two-way street）：它不仅可以向外返回结果，而且还可以将外部的值传递到 `generator` 内。

```javascript
for (let value of generator) {
  console.log(value);
}

function* gen() {
  let result = yield "2 + 2 = ?";

  console.log(result);
}

let generators = gen();

let question = generators.next().value;

generators.next(4);
```

- 向 `yield` 传递一个 `error`，应该调用 `generator.throw(err)`。在这种情况下，`error` 将被抛到对应的 `yield` 所在的那一行。
- `generator.return(value)` 完成 `generator` 的执行并返回给定的 `value`，在已完成的 `generator` 上再次使用 `generator.return()`，它将再次返回该值。

### 63 - 异步迭代与generator

- 异步迭代允许对按需通过异步请求而得到的数据进行迭代。
- 异步可迭代对象：使用 `Symbol.asyncIterator` 取代 `Symbol.iterator`。`next()` 方法应该返回一个 `promise`（带有下一个值，并且状态为 `fulfilled`），关键字 `async` 可以实现这一点，可以简单地使用 `async next()`。应该使用 `for await (let item of iterable)` 循环来迭代这样的对象。
- `Spread` 语法 `...` 无法异步工作。

```javascript
let range = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,

      async next() {

        // 注意：可以在 async next 内部使用 "await"
        await new Promise((resolve) => setTimeout(resolve, 1000));  // (3)

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

(async () => {
  for await (let value of range) {
    console.log(value);  // 1,2,3,4,5
  }
})();
```

- 在 `function` 前面加上 `async`，这即可使 `generator` 变为异步的，使用 `for await (...)` 来遍历它。
- 异步 `generator` 和常规的 `generator` 在内部是有区别的，对于异步 `generator`，`generator.next()` 方法是异步的，它返回 `promise`。在一个常规的 `generator` 中，使用 `result = generator.next()` 来获得值。但在一个异步 `generator` 中，应该添加 `await` 关键字。

```javascript
async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    yield i;
  }
}

(async () => {
  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    console.log(value);  // 1，然后 2，然后 3，然后 4，然后 5（在每个 alert 之间有延迟）
  }
})();
```

### 64 - 模块

- 随着应用越来越大，想要将其拆分成多个文件，即所谓的“模块（module）”。一个模块可以包含用于特定目的的类或函数库，一个模块（module）就是一个文件。一个脚本就是一个模块。
- `export` 关键字标记了可以从当前模块外部访问的变量和函数。
- `import` 关键字允许从其他模块导入功能。

```javascript
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

```javascript
// 📁 main.js
import { sayHi } from './sayHi.js';

console.log(sayHi);  // function...
sayHi('John');  // Hello, John!
```

- 使用 `<script type="module">` 特性（attribute）来告诉浏览器，此脚本应该被当作模块（module）来对待。
- 模块只通过 HTTP(s) 工作，而非本地。
- 模块始终在严格模式下运行。
- 每个模块都有自己的顶级作用域（top-level scope）。一个模块中的顶级作用域变量和函数在其他脚本中是不可见的，模块应该 `export` 它们想要被外部访问的内容，并 `import` 它们所需要的内容。
- 可以通过将变量显式地分配给 `window` 的一个属性，使其成为窗口级别的全局变量，这样所有脚本都会看到它，无论脚本是否带有 `type="module"`，但应尽量避免创建全局变量。
- 模块代码仅在第一次导入时被解析。
- `import.meta` 对象包含关于当前模块的信息，它的内容取决于其所在的环境。
- 在一个模块中，顶级 `this` 是 `undefined`，非模块脚本的顶级 `this` 是全局对象。
- 在浏览器中，模块脚本是被延迟的，所以要等到 HTML 文档被处理完成才会执行它。
- 对于非模块脚本，`async` 特性（attribute）仅适用于外部脚本，异步脚本会在准备好后立即运行，独立于其他脚本或 HTML 文档，对于模块脚本，它也适用于内联脚本。
- 具有 `type="module"` 的外部脚本，相同 `src` 的外部脚本仅运行一次。
- 在浏览器中，`import` 必须给出相对或绝对的 URL 路径。没有任何路径的模块被称为“裸（bare）”模块。

### 65 - 导出与导入

- 导出（export）和导入（import）
- 可以通过在声明之前放置 `export` 来标记任意声明为导出，无论声明的是变量，函数还是类都可以。

```javascript
// 导出数组
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 导出 const 声明的变量
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// 导出类
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

- 大部分 JavaScript 样式指南都不建议在函数和类声明后使用分号。
- 导出与声明分开：

```javascript
// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

// 导出变量列表
export {sayHi, sayBye};
```

- 通常，把要导入的东西列在花括号 `import {...}` 中：

```javascript
// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John');  // Hello, John!
sayBye('John');  // Bye, John!
```

- 如果有很多要导入的内容，可以使用 `import * as <obj>` 将所有内容导入为一个对象：

```javascript
// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

- Import “as”，可以使用 `as` 让导入具有不同的名字。Export “as”，与之类似：

```javascript
...
export {sayHi as hi, sayBye as bye};
```

- 模块提供了一个特殊的默认导出 `export default` 语法，将 `export default` 放在要导出的实体前，每个文件应该只有一个 `export default`，然后将其导入而不需要花括号。
- 在某些情况下，`default` 关键词被用于引用默认的导出。
- 重新导出：语法 `export ... from ...` 允许导入内容，并立即将其导出：

```javascript
// 📁 auth/index.js
// 导入 login/logout 然后立即导出它们
import {login, logout} from './helpers.js';
export {login, logout};

// 将默认导出导入为 User，然后导出它
import User from './user.js';
export {User};
...

// 📁 auth/index.js
// 重新导出 login/logout
export {login, logout} from './helpers.js';

// 将默认导出重新导出为 User
export {default as User} from './user.js';
```

- 要重新导出默认导出，必须明确写出 `export {default as User}`，`export * from './user.js'` 重新导出只导出了命名的导出，但是忽略了默认的导出。

- 动态导入：`import(module)` 表达式加载模块并返回一个 `promise`，该 `promise resolve` 为一个包含其所有导出的模块对象，可以在代码中的任意位置调用这个表达式，它不是一个函数。

```javascript
let modulePath = prompt("Which module to load?");

import(modulePath)
  .then(obj => <module object>)
  .catch(err => <loading error, e.g. if no such module>)
```

```javascript
export function hi() {
  alert(`Hello`);
}

export function bye() {
  alert(`Bye`);
}

let {hi, bye} = await import('./say.js');

hi();
bye();
```

- 动态导入在常规脚本中工作时，不需要 `script type="module"`

### 66 - Proxy与Reflect

- `Proxy` 对象包装另一个对象并拦截诸如读取/写入属性和其他操作，可以选择自行处理它们，或者透明地允许该对象处理它们，`Proxy` 是对象的包装器，将代理上的操作转发到对象，并可以选择捕获其中一些操作。

```javascript
let proxy = new Proxy(target, handler)
```

- `target`：要包装的对象，可以是任何东西，包括函数。`**handler**`：代理配置，带有“捕捉器”（“traps”，即拦截操作的方法）的对象。比如 `get` 捕捉器用于读取 `target` 的属性，`set` 捕捉器用于写入 `target` 的属性。
- 没有捕捉器，所有对 `proxy` 的操作都直接转发给了 `target`，没有任何捕捉器，`proxy` 是一个 `target` 的透明包装器。
- 常见的捕捉器是用于读取/写入的属性，要拦截读取操作，`handler` 应该有 `get(target, property, receiver)` 方法。

| get(target, property, receiver) |  |
| --- | --- |
| target | 目标对象，该对象被作为第一个参数传递给 new Proxy |
| property | 目标属性名 |
| receiver | 如果目标属性是一个 getter 访问器属性，则 receiver 就是本次读取属性所在的 this 对象 |

- 代理应该在所有地方都完全替代目标对象。目标对象被代理后，任何人都不应该再引用目标对象。

```javascript
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  }
});

console.log(numbers[1]);  // 1
console.log(numbers[123]);  // 0
```

- 当写入属性时 `set` 捕捉器被触发，`set(target, property, value, receiver)`。

| set(target, property, value, receiver) |  |
| --- | --- |
| target | 目标对象，该对象被作为第一个参数传递给 new Proxy |
| property | 目标属性名称 |
| value | 目标属性的值 |
| receiver | 与 get 捕捉器类似，仅与 setter 访问器属性相关，对于 set 操作，它必须在成功写入时返回 true |

```javascript
let numbers = [];

numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if (typeof val == 'number') {
      target[prop] = val;
        return true;
    } else {
      return false;
    }
  }
});

numbers.push(1);
console.log(numbers);

numbers.push("test");
```

- 使用 `ownKeys` 捕捉器拦截 `for..in` 的遍历。
- 使用 `in` 操作符来检查一个数字是否在 `range` 范围内，`has` 捕捉器会拦截 `in` 调用。
- `apply(target, thisArg, args)` 捕捉器能使代理以函数的方式被调用。

| apply(target, thisArg, args) |  |
| --- | --- |
| target | 目标对象 |
| thisArg | this 的值 |
| args | 参数列表 |

- `Reflect` 是一个内建对象，可简化 `Proxy` 的创建，`Reflect` 对象使调用这些内部方法成为了可能。它的方法是内部方法的最小包装。
- 对于每个可被 `Proxy` 捕获的内部方法，在 `Reflect` 中都有一个对应的方法，其名称和参数与 `Proxy` 捕捉器相同，所以可以使用 `Reflect` 来将操作转发给原始对象。

```javascript
let user = {
  name: "John",
};

user = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);  // (1)
  },
  set(target, prop, val, receiver) {
    console.log(`SET ${prop}=${val}`);
    return Reflect.set(target, prop, val, receiver);  // (2)
  }
});

let name = user.name;  // 显示 "GET name"
user.name = "Pete";  // 显示 "SET name=Pete"
```

- 如果一个捕捉器想要将调用转发给对象，则只需使用相同的参数调用 Reflect. 就足够了。
- 第三个参数 `receiver`，它保证将正确的 `this` 传递给 getter
- `Reflect` 调用的命名与捕捉器的命名完全相同。

```javascript
get(target, prop, receiver) {
  return Reflect.get(...arguments);
}
```

- 许多内建对象，都使用了所谓的“内部插槽”，内建方法可以直接访问它们，而不通过 `[[Get]]/[[Set]]` 内部方法。所以 `Proxy` 无法拦截它们，内建对象被代理后，代理对象没有这些内部插槽，因此内建方法将会失败，但是可以通过 `Reflect` 和 `.bind` 解决。内建 `Array` 没有使用内部插槽，代理数组时没有这种问题。

```javascript
class User {
  #name = "Guest";

  getName() {
    return this.#name;
  }
}

let user = new User();

user = new Proxy(user, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments);
    return typeof value == 'function' ? value.bind(target) : value;
  }
});

alert(user.getName()); // Guest
```

- `Proxy` 无法拦截严格相等性检查 ===，没有办法拦截对于对象的严格相等性检查。一个对象只严格等于其自身，没有其他值。
- 一个可撤销的代理是可以被禁用的代理，`Proxy.revocable()` 方法可以用来创建一个可撤销的代理对象：

```javascript
let {proxy, revoke} = Proxy.revocable(target, handler)
// 该调用返回一个带有 proxy 和 revoke 函数的对象以将其禁用
```

```javascript
let object = {
  data: "Valuable data"
};

let {proxy, revoke} = Proxy.revocable(object, {});

// 将 proxy 传递到其他某处，而不是对象...
alert(proxy.data); // Valuable data

// 稍后，在代码中
revoke();

// proxy 不再工作（revoked）
alert(proxy.data); // Error
```

- 对 `revoke()` 的调用会从代理中删除对目标对象的所有内部引用，因此它们之间再无连接。

### 67 - Eval

- 内建函数 `eval` 允许执行一个代码字符串。

```javascript
let code = 'console.log("Hello")';
eval(code);  // Hello
```

- `eval` 的结果是最后一条语句的结果，`eval` 内的代码在当前词法环境（lexical environment）中执行。
- 严格模式下，`eval` 有属于自己的词法环境。因此我们不能从外部访问在 `eval` 中声明的函数和变量，如果不启用严格模式，`eval` 没有属于自己的词法环境，因此我们可以从外部访问变量。
- 现代编程中，已经很少使用 `eval` 了。
- 如果 `eval` 中的代码没有使用外部变量，请以 `window.eval(...)` 的形式调用 `eval`通过这种方式，该代码便会在全局作用域内执行。
- 如果 `eval` 中的代码需要访问局部变量，可以使用 `new Function` 替代 `eval`，并将它们作为参数传递。

### 68 - 柯里化

- 柯里化是一种函数的转换，是一种关于函数的高阶技术。
- 指将一个函数从可调用的 `f(a, b, c)` 转换为可调用的 `f(a)(b)(c)`。柯里化不会调用函数，它只是对函数进行转换。

```javascript
function curry(f) {
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// 用法
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(1)(2) );  // 3
```

- `curry(func)` 的结果就是一个包装器 `function(a)`
- 柯里化要求函数具有固定数量的参数，使用 `rest` 参数的函数，例如 `f(...args)`，不能以这种方式进行柯里化。
- 它们使得函数可以被多参数变体调用，JavaScript 实现通常都保持该函数可以被正常调用，并且如果参数数量不足，则返回偏函数。

```javascript
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}
```

### 69 - Reference Type

- `obj.method()` 语句中，点 `'.'` 返回的不是一个函数，而是一个特殊的 `Reference Type` 的值。
- `Reference Type` 是 ECMA 中的一个“规范类型”。不能直接使用它，但它被用在 JavaScript 语言内部。
- `Reference Type` 的值是一个三个值的组合 `(base, name, strict)`，其中 `base` 是对象，`name` 是属性名，`strict` 在 use strict 模式下为 true
- `Reference Type` 是一个特殊的“中间人”内部类型，目的是从 `.` 传递信息给 `()` 调用，当 `()` 被在 `Reference Type` 上调用时，它们会接收到关于对象和对象的方法的完整信息，然后可以设置正确的 `this`。任何例如赋值 `hi = user.hi` 等其他的操作，都会将 `Reference Type` 作为一个整体丢弃掉，而会取 `user.hi`（一个函数）的值并继续传递，所以任何后续操作都“丢失”了 `this`，因此，`this` 的值仅在函数直接被通过点符号 `obj.method()` 或方括号 `obj[method]` 语法（此处它们作用相同）调用时才被正确传递。还有很多种解决这个问题的方式，例如 `func.bind()`

### Cookie

### Token

## 贰 - DOM

## 叁 - BOM

## 肆 - Ajax

> Ajax (Asynchronous JavaScript And XML) 称为异步的 JS 和 XML，可以在浏览器中向服务器发送异步请求，最大优势是无刷新获取数据。

### 01 - HTTP 协议简介

| 请求报文 | 内容 |
| --- | --- |
| 请求行 | 请求类型、URL请求路径、HTTP协议版本 |
| 请求头 | Host、Cookie、Content-type、User-Agent... |
| 空行 | (必选) |
| 请求体 | (可选) GET请求为空、POST请求可携带内容 |

| 响应报文 | 内容 |
| --- | --- |
| 响应行 | 状态码、状态字符串、HTTP版本 |
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

> 以 Node Express 为例

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
  console.log('http://127.0.0.1:8080');
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
  // 2、初始化 设置请求方法和 url
  xhr.open('GET', 'http://127.0.0.1:8080/server?a=10&b=20&c=30')
  // 3、发送
  xhr.send()
  // 4、事件绑定 处理服务端返回的结果
  // ready state 是 xhr 对象中的属性，表示状态：
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
        // console.log(xhr.status);  // 状态码
        // console.log(xhr.statusText); // 状态字符串
        // console.log(xhr.getAllResponseHeaders());  // 所有响应头
        // console.log(xhr.response);  // 响应体
        // 设置展示文本
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
  // 2、初始化 设置类型与URL
  xhr.open('POST', 'http://127.0.0.1:8080/server')
  // 3、发送
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
  // 绑定键盘按下事件
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
        // console.log(data);

        // 自动转换 需要设置响应体的类型
        console.log(xhr.response);

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

## 伍 - Axios

## 陆 - jQuery

### - Ajax

```javascript
// GET
$('button').eq(0).click(function() {
  $.get('http://127.0.0.1:8080/jquery-server', {a:100, b:200}, function(data) {
    console.log(data);
  }, 'json')
})

// POST
$('button').eq(1).click(function() {
  $.post('http://127.0.0.1:8080/jquery-server', {a:100, b:200}, function(data) {
    console.log(data);
  })
})

// 通用方法
$('button').eq(2).click(function() {
  $.ajax({
    url: 'http://127.0.0.1:8080/jquery-server',
    data: {a: 100, b: 200},
    type: 'GET',
    dataType: 'json',
    // 成功的回调
    success: function(data) {
      console.log(data);
    },
    // 超时时间
    timeout: 2000,
    // 失败的回调
    error: function() {
      console.log('出错了！');
    },
    // 头信息
    headers: {
      c: 300,
      d: 400
    }
  })
})
```

## 柒 - Canvas

## 捌 - Echarts

<style>
table {
  display: table !important;
  width: 100% !important;
}
</style>
