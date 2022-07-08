---
title: TypeScript学习笔记
date: 2022-07-04
tags:
  - TypeScript
categories:
  - 前端学习
sticky: true
---

## 类型声明

```typeScript
// 字符串
let a:string = "HelloWorld"

// 数字
let n:number = 123

// 布尔
let b:boolean = true

// 空值
function voidFn():void {
  console.log('test void');
}

// Null 和 undefined
let u: undefined = undefined;
let n: null = null;

// any 类型
let anys:any = 123
anys = "123"
anys = true

// unknow 类型
let value:unknow;

value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = null;             // OK
value = undefined;        // OK
value = Symbol("type");   // OK

// unknow 类型不能赋值给其他类型，只能赋值给 any 和 unknown
// unknow 不能调用属性和方法

```


## 接口
```TypeScript
// 用接口 interface 来定义对对象的约束，使对象的数据结构满足约束的格式
interface Person {
  a:number
  b:string
}

const person:Person = {
  a:123
  b:'123'
}

// 重名的接口会合并
interface A{
  name:string
}

interface A{
  age:number
}

let x:A = {name:'zs',age:18}

// 接口可以继承
interface A {
  name:string
}

interface B extends A {
  age:number
}

let x:B = {name:'zs',age:18}

// 可选操作符 使用?操作符
interface Person {
  b?:string, // 该属性可以不实现
  a:string,
}

const person:Person = {
  a:"123"
} 

// 任意属性 [porpName:string]
interface Person {
  b?:string,
  readonly a:string, // 用 readonly 修饰的属性不允许被赋值，只能作读取操作
  [porpName:string]:any,
  cb():void
}

const person:Person = {
  a:"123",
  c:"cccccc"
  cb:()=>{
    console.log(1123)
  }
}




```


## 联合类型和类型推断



## 泛型和泛型约束



## 元组与枚举



## symbol 和 迭代器、生成器



## tsconfig.json 的配置



## 命名空间 namespace
```typeScript
   1.使用 export 导出语句

   2.使用 namespace a {} 开辟新的命名空间
```

## 三斜线导入指令