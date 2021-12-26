---
title: JQuery
date: 2021-12-20
tags:
  - JQuery
categories:
  - 前端学习
---

### jQuery 对象和 DOM 对象的区别

DOM 对象是通过原生 JS 获取来的对象；

使用 jQuery 的方式来获取元素；$('div')是一个 jQuery 对象；

jQuery 对象的本质是：利用$对 DOM 对象包装后产生的对象（伪数组的形式存储）;

jQuery 对象只能使用 jQuery 方法，DOM 对象则使用原生 JS 的属性和方法;

### jQuery 对象和 DOM 对象的互相转换

`var myvideo = document.querySelector('video');`

`// 将jQuery对象转换为DOM对象`

`$('video')[0].play();`

`$('video').get(0).play();`

### jQuery 设置样式

$("div").css("background", "pink");

#### 隐式迭代

遍历内部 DOM 元素（伪数组形式存储）的过程就叫做隐式迭代。

简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，简化操作，方便调用。

#### 链式编程

`$(this).css("color","red").siblings().css("color"."");`

原生 JS 的 className 会覆盖原先的类名

jquery 在原先的基础上追加了一个类名，不影响以前的类名，和原生的 classList 功能一样

### jQuery 元素操作

#### 遍历元素

`$("div").each(funtion(index,domEle) { xxx; } )`

index 是每个元素的索引号,可以自己指定索引号名称 ；domEle 是每个 DOM 元素对象，不是 jQuery 对象

想要使用 jquery 方法，需要给这个 DOM 元素转换为 jQuery 对象 $(domEle)

#### 创建元素

`动态创建元素 $("<Li>我是后来创建的li</li>")`

#### 内部添加

`$("ul").append(li);` 内部添加并且放到内容的最后面

`$("ul").prepend(li); ` 内部添加并且放到内容的最前面

#### 外部添加

`var div = $(”<div>我是后来添加的</div>“)`

`$("element").before(div);` 外部添加到最前面

`$("element").after(div);` 外部添加到最后面

#### 删除元素

`$("elelment") . remove()` 删除匹配的元素 自杀

`$("element") . empty()` 删除匹配的元素里面的子节点 子级元素

`$("element") . html(" ")` 删除匹配元素里面的子节点

#### 动画节流

`stop()` 用于动画节流

### jQuery 属性操作

设置或获取元素固有属性值 `prop()` （可用于复选和全选的同步）

### jQuery 事件处理

事件处理 `·on()` 绑定事件，可以注册多个事件

on 可以给未来动态创建的元素绑定事件，原理是通过事件委托添加的事件

### 浅拷贝和深拷贝

浅拷贝是把被拷贝的对象复杂数据类型中的地址拷贝给目标对象，修改目标对象会影响被拷贝对象；

深拷贝是完全克隆 修改目标对象不会影响被拷贝对象

### 图片懒加载技术

##### 定义

当打开一个很多图片的页面时，先只加载页面上可视范围的图片，滚动到页面下面时候，在加载所需的图片，这就是图片懒加载

##### 作用

减少或延迟请求次数，缓解浏览器的压力，增强用户体验

##### 应用

性能优化
