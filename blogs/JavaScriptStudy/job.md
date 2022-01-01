---
title: 面试复盘
categories:
  - 面试
---

# 12.29 浩鲸科技

- alert() 是异步的吗？

```
alert()并不是异步执行的，而是同步执行的，可以用定时器包裹将其变成异步操作
```

- round()、ceil()、floor()方法的区别

```JavaScript
console.log(round(3.45)) // 3.5 四舍五入
console.log(ceil(3.45)) // 4 最接近的较大整数  ceil 天花板
console.log(floor(3.45)) // 3 最接近的较小整数  floor 地板
```

- JS 事件处理中'事件传播的三个阶段'

```
  1、事件捕获阶段
    先由文档的根节点 document 往事件触发对象，从外向内捕获事件对象

  2、目标阶段（目标对象本事的事件程序）
    到达目标事件位置，触发事件本身的程序内容

  3、事件冒泡阶段
  再从目标事件位置往文档的根节点方向回溯，从内向外冒泡事件对象
```

- Json 数据对象的格式

```
{"key":"value"}
```

- 所有对象都有原型吗？

```JavaScript
var emObj = Object.create(null)
console.log(emObj) // {} No properties
console.log([])    // [] length: 0;  _proto_: Array(0)
console.log({})    // {} _proto_: Object
```

- 一个简单的统计出现次数最多的字符串（是的...我翻车了）

```JavaScript
var str = 'abdseeeeeaaaasd'
var o ={}
for(var i=0, i < str.length, i++){
  var chars = charAt(i)
  if(o[chars]){
    o[chars]++
  } else {
    o[chars] = 1
  }
}
// 遍历对象
var max = 0
var ch = ''
for (var k in o){
  // k 是属性名
  //o[k]是属性值
  if(o[k] > max){
    max = o[k]
    ch = k
  }
}

```
