---
title: 常用的小知识
date: 2021-12-17
tags:
  - js小知识
categories:
  - 前端学习
---

## 正则表达式相关

#### 邮箱的正则验证

`/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-])+/`

#### 手机号码的正则验证

`/^(0|86|17951)?(13[0-9]|15[012356789]|17(678)|18[0-9]|14[57])[0-9]{8}$/`

<br />

## 一些好用的属性与方法

```JavaScript
classlist 属性，用于在<div>元素中添加类
classlit.add(c1,c2,...) 添加类名
classlist.contains(class) 判断指定类名是否存在 返回布尔值
classlist.item() 返回元素中索引值对应的类名
classlist.remove() 移除类名
classlist.toggle() 在元素中切换类名
```

## 方法

#### padStart() 和 padEnd() 的使用

前端开发中，会遇到字符串填充的问题，padStart()和 padEnd()可能会有帮助：

str.padStart(targetLength,string)：

使用指定字符串填充到目标字符串前面，使其达到目标长度；

str.padEnd(targetLength,string)：

使用指定字符串填充到目标字符串后面，使其达到目标长度；

```JavaScript

应用场景:

// 使用过滤器封装一个时间转换函数
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  // 月份从0开始计算，因此需要+1 后加''是为了隐式转换成字符串填充不足两位时前面的0
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${hh}:${mm}:${ss}`

})
```

#### 数组方法 findIndex() 和 find() 的使用

- find()

该方法主要应用于查找第一个符合条件的数组元素。它的参数是一个回调函数。在回调函数中可以写你要查找元素的条件，当条件成立为 true 时，返回该元素。如果没有符合条件的元素，返回值为 undefined

```JavaScript

应用场景:

// 在myArr数组中查找元素值大于4的元素，找到后立即返回。返回的结果为查找到的元素：
const myArr=[1,2,3,4,5,6];
var v=myArr.find(value=>value>4);
console.log(v);// 5

// 没有符合元素，返回undefined:
const myArr=[1,2,3,4,5,6];
var v=myArr.find(value=>value>40);
console.log(v);// undefined

// 回调函数有三个参数。value：当前的数组元素。index：当前索引值。arr：被查找的数组。
// 查找索引值为4的元素：
const myArr=[1,2,3,4,5,6];
var v=myArr.find((value,index,arr)=>{
    return index==4
});
console.log(v);// 5
```

- findIndex()

findIndex()与 find()的使用方法相同，只是当条件为 true 时 findIndex()返回的是索引值，而 find()返回的是元素。如果没有符合条件元素时 findIndex()返回的是-1，而 find()返回的是 undefined。findIndex()当中的回调函数也是接收三个参数，与 find()相同。

```JavaScript

应用场景:

const bookArr=[
    {
        id:1,
        bookName:"三国演义"
    },
    {
        id:2,
        bookName:"水浒传"
    },
    {
        id:3,
        bookName:"红楼梦"
    },
    {
        id:4,
        bookName:"西游记"
    }
];
var i=bookArr.findIndex((value)=>value.id==4);
console.log(i);// 3
var i2=bookArr.findIndex((value)=>value.id==100);
console.log(i2);// -1
```
