---
title: 基础知识点
date: 2021-12-17
tags:
  - JavaScript
categories:
  - 前端学习
---

## JavaScipt 查缺补漏

<font color=#6495ED size=5 >1、JavaScript 有几种数据类型</font>

```
- number: 数字类型

- string: 字符串类型

- boolean: 布尔值类型

- undefined: 未定义类型

- null: 空值类型

- object: 对象类型

- symbol: symbol类型

- bigint: 大数字类型（Es11新增）
```

- 其中 number string boolean undefined null symbol(ES6) 为基本数据类型

- 引用数据类型是对象数据类型 object 比如：object、array、function、data 等

<br />
<hr />

<font color=#6495ED size=5 >2、深拷贝与浅拷贝的区别</font>

- 深拷贝层层拷贝，浅拷贝只拷贝第一层，深层只是引用

- 在深拷贝中，新对象的更改不会影响原始对象，而在浅拷贝中，新对象中的更改，原始对象中也会跟着改变

- 在深拷贝中，原始对象不与新对象共享相同的属性，而在浅拷贝中，他们具有相同的属性

```Javascript

浅拷贝可以在 ES6 中用 assign() 方法实现：

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }


深拷贝可以使用函数递归来实现：

function deepClone(newObj,Obj) {
  for( k in Obj){
    // 获取属性值
    let item = Obj[k];
    // 判断属性值是否是基本数据类型
    // 数组也是对象类型，因此先判断是否是数组
    if(item instanceof Array) {
      newObj[k]=[];
      deepClone(newObj[k],item)
    } else if (item instanceof Object) {
      newObj[k]={};
      deepClone(newObj[k],item)
    } else {
      // 简单数据类型 直接赋值
      newObj[k] = item;
    }
  }
}
let textObj ={
  name: 'zs',
  age: 18,
  fri:{ ming: 'good',yan: 'best' }
  }

let o = {};

deepClone(o, textObj)
```

<br />
<hr />

<font color=#6495ED size=5 >3、闭包是什么？</font>

闭包是一个能读取其他函数内部变量的函数

- 优点：使外部能访问到局部的东西

- 缺点：使用不当容易造成内存泄漏的问题

<br />
<hr />

<font color=#6495ED size=5 >4、变量提升与函数提升</font>

变量提升

```JavaScript
console.log(name) // undefined
var name = 'Linyiyan'

if (false) {
  var age = 23
}
console.log(age) // undefined 不会报错
```

函数提升

```JavaScript
console.log(fun) // function fun() {}
function fun() {}

if (false) {
  function fun2(){}
}
console.log(fun2) // undefined 不会报错
```

函数提升优先级 > 变量提升优先级

```JavaScript
console.log(fun) // function fun() {}
var fun = 'Linyiyan'
function fun() {}
console.log(fun) // 'Linyiyan'
```

<br />
<hr />

<font color=#6495ED size=5 >5、isNaN 和 Number.isNaN 的区别</font>

- isNaN: 除了判断 NaN 为 true ，还会把不能转成数字的判断为 true， 例如 'xxx'

- Number.isNaN: 只有判断 NaN 时为 true ，其余情况都为 false

<br />
<hr />

<font color=#6495ED size=5 >6、JavaScript 变量在内存中具体存储形式</font>

- 基本数据类型：存放在 '栈内存' 里

- 引用数据类型：指针存在 '栈内存' 里，指向 '堆内存' 中一块地址，内容存在堆内存中

<br />
<hr />

<font color=#6495ED size=5 >7、栈内存和堆内存</font>

|         栈内存         |           堆内存           |
| :--------------------: | :------------------------: |
|    储存基本数据类型    |      存储引用数据类型      |
|        按值访问        |       按引用地址访问       |
| 由系统自动分配内存空间 |     由代码进行指定分配     |
|   空间小，运行效率高   |  空间大，运行效率相对较低  |
|   先进后出，后进先出   | 无序存储，根据引用直接获取 |

<br />
<hr />

<font color=#6495ED size=5 >8、null 和 undefined 的异同点</font>

- 相同点：

  - 都是空变量

  - 都是假值，转为布尔值都是 false

  - null == undefined 打印结果为 true

- 不同点：

  - typeof 判断 null 为 object，判断 undefined 为 undefined

  - null 转数字类型为 0，undefined 转数字类型为 NaN

  - null 是一个对象未初始化，undefined 是初始化了还未赋值

  - null === undefined 打印结果为 false

<br />
<hr />

<font color=#6495ED size=5 >9、== 和 === 的区别</font>

- == 在比较过程中存在隐式转换

- === 需要类型相同，值相同，才能为 true

<br />
<hr />

<font color=#6495ED size=5 >10、双等号左右两边的转换规则</font>

1、null == undefined 为 true

- 1、如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false 转换为 0，而 true 转换为 1

- 2、如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值

- 3、如果一个操作数是对象，另一个操作数不是，则调用对象的 toString()方法，用得到的基本类型值按照前面的规则进行比较

<br />
<hr />

<font color=#6495ED size=5 >11、[] == ![] 为什么是 true</font>

按照双等号左右两边的转换规则

- 1、! 优先级高于 ==，[]不是假值，所以先转换成了 [] == false

- 2、右边为布尔值，false 先转换为数字 0，所以可转换为 [] == 0

- 3、左边为对象，[] 调用 toString 转换为 ''，转换为 '' == 0

- 4、左边为字符串，'' 转换为 0，最终为 0 == 0

<br />
<hr />

<font color=#6495ED size=5 >12、0.1 + 0.2 === 0.3,对吗？</font>

不对，JavaScript 的计算存在精度丢失的问题

```JavaScript
console.log(0.1+0.2 === 0.3) // false
```

- 原因：
  JavaScript 中小数是浮点数，需要转换为二进制进行计算，有些小数无法用二进制表示，所以只能取近似值，所以造成误差

- 解决方法：

1、先变成整数运算，然后再变回小数

2、toFixed() 性能不好，不推荐使用

<br />
<hr />

<font color=#6495ED size=5 >13、什么是匿名函数？</font>
匿名函数：就是没有函数名的函数

```JavaScript
(function(x, y){
    alert(x + y);
})(2, 3);
```

这里第一个括号创建了一个匿名函数，第二个括号立即调用了该函数，并传入了参数

<br />
<hr />

<font color=#6495ED size=5 >14、绑定点击事件有几种方式？</font>

- `xxx.onclick = function(){}`

- `<xxx onclick=""></xxx>`

- `xxx.addEventListener('click', function(){}, false)`

<br />
<hr />

<font color=#6495ED size=5 >15、addEventListener 的第三个参数是干嘛的？</font>

第三个变量传一个布尔值，需不需要阻止冒泡，默认是 false，不阻止冒泡

<br />

<hr />

<font color=#6495ED size=5 >16、JavaScript 的事件流模型有哪些？</font>

- 事件冒泡：由最具体的元素接收，并往上传播

- 事件捕获：由最不具体的元素接收，并往下传播

- DOM 事件流：事件捕获 -> 目标阶段 -> 事件冒泡

<br />
<hr />

<font color=#6495ED size=5 >17、如何判断数据类型？</font>

<br />

- typeof xxx ：能判断出 number，string，undefined，boolean，object，function（null 是 object）

- Object.prototype.toString.call(xxx)：能判断出大部分类型

- Array.isArray(xxx)：判断是否为数组

<br />
<hr />

<font color=#6495ED size=5 >18、什么是事件委托？</font>

<br />

当所有子元素都需要绑定相同的事件的时候，可以把事件绑定在父元素上，这就是事件委托，优点有：

- 绑定在父元素上只需要绑定一次，节省性能

- 子元素不需要每个都去绑定同一个事件

- 如果后续又有新的子元素添加，由于事件委托，会自动接收到父元素的事件监听

<br />
<hr />

<font color=#6495ED size=5 >19、创建一个对象的方式有哪几种？</font>

<br />

<font color=#ED size=4 >new Object 创建</font>

```JavaScript
const obj = new Object()
obj.name = 'Linyiyan'
```

<br />

<font color=#ED size=4 >字面量创建</font>

```JavaScript
const obj = { name: 'Linyiyan' }
```

<br />

<font color=#ED size=4 >工厂模式创建</font>

```JavaScript
function createObj(name) {
  const obj = new Object()
  obj.name = name
  return obj
}
const obj = createObj('Linyiyan')
```

<br />

<font color=#ED size=4 >构造函数创建</font>

```JavaScript
function Person(name) {
  this.name = name
}
const person = new Person('Sunshine_Lin')
```

<br />
<hr />

<font color=#6495ED size=5 >20、this 指向的四种情况</font>

<br />
<font color=#ED size=4 >1、new 操作符创建实例</font>

```JavaScript
function Person(name) {
  this.name = name
  console.log(this)
}
// this指向当前person实例对象
const person = new Person('Linyiyan')
```

<br />

<font color=#ED size=4 >2、指向 window</font>

```JavaScript
function fn() {
  console.log(this)
}
fn() // 浏览器window，node里global
```

<br />

<font color=#ED size=4 >3、对象调用方法</font>

```JavaScript
const target = {
  fn: function () { console.log(this) }
}
target.fn() // target

// 这种就是改变了this了
const fn = target.fn
fn() // 浏览器window，node里global
```

<br />
<hr />

<font color=#6495ED size=5 >21、LocalStorage 和 sessionStorage 的区别</font>

<br />

从使用的角度来看，两者的唯一区别在于时效性。

sessionStorage 在关闭窗口或标签页之后将会删除这些数据。

而 localStorage 则没有这样的特性，今天、下周、明年、一百年，甚至理论上的成千上万年后都能用，除非你手动去删除。

如果你想在浏览器窗口关闭后还保留数据，请使用 localStorage。

如果你是想用于临时保存同一窗口（或标签页）的数据，请使用 sessionStorage。

<br />
<hr />

<font color=#6495ED size=5 >22、LocalStorage 和 sessionStorage 的区别</font>

<br />
