---
title: '一些常用的函数方法'
date: 2021-05-07
categories:
  - 前端学习
sticky: true
---

### 统计出现次数最多的字符串

```JavaScript
const str = 'abdseeeeeaaaasd';
var o = {};
for(i = 0; i < str.length; i++){
    // charAt()返回的是指定位置的字符
    let chars = charAt(i);
    if(o[chars]){
        o[chars]++;
    } else {
        o[chars] = 1;
    }
}

// 遍历经过遍历字符串得到的对象o
var max = 0;
var ch = '';
for(k in o){
    if(o[k] > max){
        max = o[k];
        ch = k;
    }
}
const result = `出现最多的字符串是${ch},出现的次数是${max}次`
console.log(result)
```

### 数组去重

```JavaScript
var arr = [2,2,5,8,9,6,4,852,6,500,3,10,20,50,20,10,11,15]

// 方法1 利用 set 这一数据结构成员值唯一的特点去重
function uniqueArr(){
    var result = [...new Set(arr)]
    console.log(result)
}
uniqueArr()

// 方法2 遍历数组往新数组里push
function uniqueArr2(){
    var result = []
    arr.forEach(item => {
        if(result.indexOf(item) == -1){
            result.push(item)
        }
    });
    console.log(result)
}
uniqueArr2()

// 方法3 利用filter()过滤
function uniqueArr3(){
    var result = arr.filter((item,index)=>{
       return arr.indexOf(item) == index
    })
    console.log(result)
}
uniqueArr3()

// 方法4 利用对象属性的唯一性筛选
function uniqueArr4 (){
    var result = {}
    arr.forEach((item,index)=>{
        result[arr[index]] = 'suibian'
    })
    // 双波浪线强制转换类型，表示做两次按位取反操作
    result = Object.keys(result).map(item => ~~item)
}
uniqueArr4()

// 方法5 利用sort方法排序后比较前后
function uniqueArr5(){
    var result = []
    var temp = arr.sort()
    for(let i = 0;i<length;i++){
        if(temp[i] !== temp[i+1]){
            result.push(temp(i))
        }
    }
    console.log(result)
}
uniqueArr5()

// 方法6 双循环
function uniqueArr6(){
    var result = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                j = ++i
            }
        }
        result.push(arr[i])
    }
}
unique6()
```

### 数组翻转

```javascript
// 方法1 利用索引遍历
const arr = [1,5,9,3,6,4,7,8]
let newArr = []
for(let i = arr.length - 1; i >= 0;i--){
    newArr[newArr.length] = arr[i]
}
console.log(newArr)

// 方法2 语法糖 arr.reserve()

```