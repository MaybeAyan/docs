---
title: '一些常用的函数方法'
date: 2021-05-07
categories:
  - 前端学习
sticky: true
---

## 统计出现次数最多的字符串

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

## 数组去重

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
```