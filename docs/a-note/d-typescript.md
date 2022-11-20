---
title: TypeScript
description: TypeScript
editLink: false
lastUpdated: false
contributors: false
prev:
  text: JavaScript
  link: /a-note/c-javascript.md
next:
  text: Node.js
  link: /a-note/e-node.md
---

## 一、基础

> 添加了类型系统的 JavaScript，使其成为静态类型语言（动态类型指的是运行才会进行类型检查确定变量的类型，而静态类型在编译阶段就会进行类型检查）<br />因为存在隐式类型转换所有 TS 是弱类型的，强类型语言不存在隐式转换时需要强制类型转换。

- `:` 指定变量的类型，主要针对编译时的类型检查，运行时还需要代码手动判断类型。

### 01 - 原始数据类型

- `:boolean`、构造函数 `Boolean`
- `:number`、构造函数 `Number`
- `:string`、构造函数 `String`
- `:null`
- `:undefined`
- `:void` 表示没有任何返回值的函数。

### 02 - 任意值

- `:any` 变量声明的时候未指明其类型，那将会被识别为任意值类型。

### 03 - 类型推论

- 没有明确指定类型时，会根据初始化的值进行类型推论。

### 04 - 联合类型

- 取值可以为多种类型之一，例如 `string | number`
- 联合类型只能访问共有的属性和方法。
- 联合类型，在被赋值后，会进行类型推断。

### 05 - 对象的类型-接口

- `interface Person { name: string, age: number}`
- `let tom: Person = { name: 'Tom', age: 18 }`
- 赋值时变量的形状必须和接口的形状保持一致
- `?:` 可选属性，该属性可以不存在，但不可以添加未定义的属性。
- `[propName:string]: any` 任意属性，定义了任意属性那么确定属性和可选属性的类型必须是它的类型的子集。
- 任意属性只能定义一个，可以使用联合类型。前提是属性名和任意值设定的类型相同时即 `[proName:string]` 时符合，`[proName:number]` 时，其他属性的属性名为 `string` 可不受约束。
- `readonly id: number` 只读属性，只在创建的时候被赋值。

### 06 - 数组的类型

- `:number[] = ...` 数组对应的方法也会收到类型约束。
- `Array<number> = ...` 数组泛型。
- 也可以使用接口表示数组，但常用于表示类数组。
- `let args: { [index: number]: number; length: number; callee: Function; } = arguments `
- `:IArguments` `:NodeList` `:HTMLCollection`
- `:any[] = ...` 数组中可以出现任意类型。

### 07 - 函数的类型

- 函数是 JS 中的一等民
- 函数声明：`function sum(x: number, y: number): number { return ...}` 设置了输入输出的类型。
- 函数表达式：`let sum: (x: number, y: number)=> number = function(x: number, y: number): number { return ... }`
- 通过接口的方式定义函数的形状，`interface sum { ...: ..., ...: ... }: ...`
- `?:` 规定可选参数，可以不传入的参数，此属性后面不可再设置必须参数。
- TS 将默认参数识别为可选参数，不受其后是必须参数的约束。
- `...rest` 参数，使用数组类型。
- 通过联合类型可以实现函数的重载，多个函数定义如果有包含关系，需要优先把精确的定义写在前面。

### 08 - 类型断言

- 可以用来手动指定一个值的类型。
- `值 as 类型` `<类型>值` 建议使用第一种。
- 联合类型可以被断言为其中的一个类型。
- 父类可以断言为子类。
- 任何一个类型可以断言为 `any`，访问任何属性都是允许的，也可以将 `any` 断言为一个具体的类型。
- 要 A 可以断言为 B，只要 A 兼容 B 或 B 兼容 A 即可，（具有兼容性时才可以断言）
- 万不得已不要使用双重断言。
- 类型断言不是类型转换，不会影响到真的变量类型，只影响 TS 的编译。
- 类型声明优于类型断言，更加严格。

### 09 - 声明文件

- `declare var/let/const` 声明全局变量。
- `declare function` 声明全局方法。
- `declare class` 声明全局类。
- `declare enum` 声明全局枚举类型。
- `declare namespace` 声明全局对象，可嵌套。
- `interface 和 type` 声明全局类型。
- `export` 导出全局变量。
- `export namespace` 导出全局对象。
- `export default` ES6 默认导出。
- `export = ` CommonJS 导出模块。
- `export as namespace` UMD 库声明全局变量。
- `declare global` 扩展全局变量。
- `declare module` 扩展模块。
- `/// <reference />` 三斜线指令。
- 用来定义类型而不是具体的值或者实现。
- 声明文件：xxx.d.ts
- 安装对对应的声明文件：`npm install @type/... --save-dev`
- 只有 `function/class/interface` 可以直接默认导出。

### 10 - 内置对象

- `:Boolean`
- `:Error`
- `:Date`
- `:RegExp`

- TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。
- Node.js 不是内置对象的一部分，需要引入第三方声明 `npm install @type/node --save-dev`

### 11 - 类型别名

- 使用 `type` 给一个类型起个新名字，多用于联合类型。
- `type Name = string`

### 12 - 字符串字面量类型

- 用来约束取值只能是字符串中的一个。
- `type EventNames = 'click' | 'scroll' | 'mousemove'`

### 13 - 元组

- 数组合并了相同类型的对象，元组合并的是不同类型的对象。
- `let tom: [string, number] = ['Tom', 25]`
- 越界时被限定为元组中每个类型的联合类型。

### 14 - 枚举

- `enum Days {Sun, Mon, Tue, Web, Thu, Fri, Sat}` 成员被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名反向映射，也可以为枚举项手动赋值。
- 常数枚举 `const enum` 会在编译阶段被删除且不能包含计算成员。
- 外部枚举 `declare enum`

### 15 - 类

- 修饰符 `public private protected`
- `readonly`
- `abstract class` 抽象类不允许被实例化，只能被继承，其中的抽象方法必须在子类被实现。

### 16 - 类与接口

- `implements 接口` 类中实现接口，一个类可以实现多个接口。
- 接口可以继承接口
- TS 支持接口继承类，因为类在创建的同时还创建了一个同名的类型（只包含实例属性和方法）

### 17 - 泛型

- Generics 在定义函数、接口、类的时候不预先指定具体的类型而是在使用的时候再指定类型的一种特性。
- `<T>` T 指代任意输入的类型。
- 可以设置多个类型参数`<T, U>`
- 对泛型进行约束 `<T extends 接口>`
- 泛型接口
- 泛型类
- 默认类型 `<T = string>`

### 18 - 声明合并

- 函数、接口、类

## 二、进阶

待更新...

<style>
table {
  display: table !important;
  width: 100% !important;
}
</style>
