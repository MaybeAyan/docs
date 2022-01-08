---
title: 面试复盘
categories:
  - 面试
---

# 12.29 浩鲸科技笔试

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

# 1.6 浩鲸科技面试复盘

- apply 和 call 的区别

```
1、apply, call 都属于Function.prototype的一个方法，它是JavaSript引擎内在实现的

2、call的语法：函数名.call(obj,参数1,参数2,参数3……);

  apply的语法：函数名.apply(obj,[参数1,参数2,参数3……]);

3、这两个东西功能相同，就是把一个函数里面的this设置为某个对象，

4、区别：call需要使用逗号分隔列出所有参数，
        但是apply是把所有参数写在数组里面。
        需要注意的是即使只有一个参数，也必须写在数组里面。

```

- 数组去重（掌握 6 种方法）

```JavaScript
// 1、Map 记录
function quchong1 (arr){
  const newArr = []
  arr.reduce((pre,next)=>{
    if(!pre.has(next)){
      pre.set(next,1)
      newArr.push(next)
    }
    return pre
  },new Map())
  return newArr
}

// 2、Set去重
function quchong2(arr){
  return [...new Set(arr)]
}

// 3、利用对象的属性不能相同的特点去重
   Array.prototype.unique1 = function () {
      let res = [] // 存放去重后的数组
      let mark = {} // 用来检测重复的值
      for (let i = 0, arrayLen = this.length; i < arrayLen; i++) {
        if (!mark[this[i]]) {
          res.push(this[i])
          mark[this[i]] = true
        }
      }
      return res
    }

    const arr = [1, 1, 5, 3, 6, 8, 8, 9, 9, 1, 0]
    console.log(arr.unique1()); // [1,5,3,6,8,9,0]

// 4、双层循环，外层循环元素，内层循环时比较值
// 如果有相同的数值就跳过，不相同的就push进数组
 Array.prototype.distinct = function () {
      var arr = this,
        result = [],
        i,
        j,
        len = arr.length;
      for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
          if (arr[i] === arr[j]) {
            j = ++i;
          }
        }
        result.push(arr[i])
      }
      return result
    }
    var arra = [1, 2, 3, 4, 4, 1, 1, 2, 1, 1, 1];
    const res = arra.distinct();    //返回[3,4,2,1]
    console.log(res);

// 5、先使用sort()进行排序，然后遍历比较前后的值是否重复
   Array.prototype.unique4 = function () {
      let res = [this[0]]
      this.sort()
      for (let i = 1; i < this.length; i++) {
        if (this[i] !== this[i - 1]) {
          res.push(this[i])
        }
      }
      return res
    }
    var arra = [1, 2, 3, 4, 4, 1, 1, 2, 1, 1, 1];
    const res = arra.unique4();    //返回[3,4,2,1]
    console.log(res);

// 使用indexof()
Array.prototype.unique2 = function () {
    let res = [] // 存放去重后的数组
    for (let i = 0, arrayLen = this.length; i < arrayLen; i++) {
        // 如果this[i]没有在res中，则push进去
        if (res.indexOf(this[i]) === -1) {
            res.push(this[i])
        }
    }
    return res
}
```

- 翻转数组

```JavaScript
// 利用索引遍历
const arr = [1,5,9,3,6,4,7,8]
let newArr = []
for (let i =arr.length - 1; i >= 0; i--){
  newArr[newArr.length] = arr[i]
}
console.log(newArr)

// 利用arr.reverse()方法实现翻转
```
