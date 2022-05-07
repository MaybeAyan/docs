---
title: '刷题补漏'
date: 2022-4-11
categories:
  - 前端学习
sticky: true
---

## 面向对象的三要素

    封装、多态、继承


## Bind的简单理解

    bind是用来绑定上下文的，强制将函数的执行环境绑定到目标作用域中去。
    
    与call和apply类似，但不同点在于，他不会立即执行，而是返回一个函数。

## setTimeout()和setInterVel

     setTimeout()方法在执行一次后即停止了操作；
     
     而setInterval()方法一旦开始执行，在不加干涉的情况下，间歇调用将会一直执行到页面关闭为止。

## 三种继承方式

    借用构造函数的目的：通过父构造函数给当前对象添加属性。
    
    原型继承的目的：通过父对象给当前对象扩展属性和方法。
    
    组合继承：由借用构造函数和原型继承组合而成。


## 返回布尔值的数组方法

    some() 可以用于检测数组中的元素是否满足指定条件（函数提供），只要数组中有一个元素满足条件就返回true，不存在就返回false

    includes() 可以用于检测数组中是否包含某一元素

## 易混淆的标签

    strong标签效果是加粗，对应的是b标签。

    ins标签的效果是下划线，对应的是u标签。

    em标签的效果是斜体，对应的是i标签。

    del标签的效果是删除线，对应的是s标签。

## 前端路由和后端路由

    1. 什么是路由？
    
        路由是根据不同的url地址展示不同的内容或页面；

    2. 什么是前端路由？

        根据不同的Hash地址，展示不同前端组件；

        主要用于单页面应用程序。

    3. 什么是后端路由？

        其实就是一个web服务器。通过用户请求的url导航到具体的html页面；

## 重绘和重排

    1、重绘

        重绘是一个元素外观的改变导致的浏览器的行为，浏览器根据元素新的属性呈现新的外观

        例如改变：outline、background、visibility等属性

    2、重排（回流）

        重排是DOM元素被js触发某种变化、渲染树需要重新计算，浏览器对DOM树进行重新排列

        例如：DOM元素的几何属性变化、获取某些属性（offsetTop、clientHeight等）、改变元素的一些样式

    3、区别
    
        重绘不会带来重新布局，不一定伴随着重排

        重排一定伴随着重绘

    4、如何减少重排次数或影响

        1、将多次改变样式的操作，合成一次操作

        2、将需要多次重排的元素，使其脱离文档流，变化就不会影响其他元素

## BFC

    1、什么是 BFC ？

        BFC 是块级格式上下文，独立渲染区域

    2、创建 BFC 有什么方式？

        float 属性不为 none；

        position 为 absolute 或者 fixed；

        display 为 inline-block，table-cell 或 flex；

        overflow 为 hidden，auto 或者 scroll

    3、BFC 能解决什么问题？

        边距重叠问题；

        盒子塌陷问题；

        清除浮动；

        浮动环绕文字问题；

## alrt() 是异步操作吗？

    alert()并不是异步执行的，而是同步执行的，可以用定时器包裹将其变成异步操作

## round() ceil() floor()

```JavaScript
console.log(Math.round(3.45)) // 3.5 四舍五入

console.log(Math.ceil(3.45)) // 4 最接近的较大整数 ceil 天花板
console.log(Math.ceil(-3.45)) // -3 最接近的较大整数 ceil 天花板

console.log(Math.floor(3.45)) // 3 最接近的较小整数 floor 地板
console.log(Math.floor(-3.45)) // -4 最接近的较小整数 floor 地板
```

## JS 事件传播

    1、事件捕获阶段

        先由文档的根节点 document 事件触发对象，从外向内捕获事件对象

    2、目标阶段

        到达目标时间未知，触发事件本身的程序内容

    3、事件冒泡阶段

        再从目标事件位置往文档的根节点方向回溯，从内向外冒泡事件对象

## 所有的对象都有原型吗？

    不是所有的对象都有原型，用 Object.create(null) 创建的 null 对象是没有原型的

    空对象都有原型，但以上述的形式创建的 null 对象没有，因为它没有继承任何原型方法

    也就是说它的原型链没有上一层

```JavaScript
var emObj = Object.create(null)
console.log(emObj) // {} No properties
console.log([])    // [] length: 0;  _proto_: Array(0)
console.log({})    // {} _proto_: Object
```

## apply 和 call

    1、apply 和 call 都属于 function.prototype 的一个方法，是JavaSript 引擎内在实现的

    2、call 的语法：函数名.call(obj,参数1,参数2,参数3......)

       apply 的语法：函数名.apply(boj,[参数1,参数2,参数3......])

    3、功能相同，改变函数里 this 的指向

    4、区别，参数的形式，call 需要用逗号分隔列出，apply 则是数组形式