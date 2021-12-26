---
title: ES6
date: 2021-12-20
tags:
  - ES6
categories:
  - 前端学习
---

## 面对对象编程

每一个对象都是功能中心，具有明确分工

面向对象编程具有灵活，代码可复用，易于维护和开发的优点，更适合多人合作的大型软件项目

面对对象的特性：**封装性、继承性、多态性**

#### 面向过程和面向对象的对比

##### 面向过程

优点：性能比对象高，适合和硬件联系很紧密的东西，单片机

缺点：没有面向对象那么容易维护，复用及扩展

##### 面向对象

优点：易于维护、复用、拓展、由于面向对象有封装、继承、多态性的特征、可以设计出低耦合的系统，使得系统更灵活且易于维护

缺点：性能比面对过程低

#### 面向对象的思维特点

1、抽取（抽象）对象共用的属性和行为组织（封装）成一个类（模板）

2、对类进行实例化，获取类的对象

#### 对象

对象是具体的事物，无序的相关属性和方法的集合

由属性和方法构成：

属性：事物的特征，在对象中用属性来表示（常用名词）

方法：事物的行为，在对象中用方法来表示（常用动词）

#### 类 class

类抽象了对象的公共部分，泛指某一大类

而对象是类通过实例化产生的

#### 创建类 class xxx {}

通过关键字创建类，类名习惯性定义首字母大小

生成实例 new 不能省略

构造函数不需要加 function

##### 类的共用属性放在 constructor 里面

`constructor(){}`

##### 类添加方法

1、类里面所有的函数不需要写 function

2、多个函数方法之间禁止添加逗号分隔

#### 类的继承 extends

`class Father {constructor (x,y) {this.x = x;this.y = y;}`

`sum (x, y) {console(this.x + this.y);}`

`}`

`class Son extends Father {constructor (x , y) { super(x, y) }`

`}`

`var son = new Son(1, 2);`

`son.sum();`

##### 调用父类中的构造函数用 super 关键字

super 必须在子类 this 之前调用

##### 子类调用父类普通函数

继承中如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就执行子类的；

如果子类没有，就去查找父类有没有这个方法，如果有就执行父类的方法。

### ES6 中类和对象的使用注意点

1、在 ES6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象

2、类里面的共用的属性和方法一定要加 this 使用

3、注意类里面的 this 指向问题

constructor 里的 this 指向创建的实例对象

方法里的 this 指向方法的调用者

# 构造函数和原型

ES6 全称是 ECMAScript 6.0

在 ES6 之前，对象不是基于类创建的，而是用一种称为构建函数的特殊函数来定义对象和他们的特征的。

#### 创建对象的三种方式

1、利用 new Object（）创建对象

2、利用对象字面量创建对象

3、利用构造函数创建对象

#### 构造函数

构造函数是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，他总与 new 一起使用，我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

##### new 在执行时会做的四件事情

1、在内存中创建一个新的空对象

2、让 this 指向这个新的对象

3、执行构造函数里面的代码，给这个新对象添加属性和方法

4、返回这个新对象（所以构造函数里面不需要 return）

##### 实例成员是构造函数内部通过 this 添加的成员

实例成员只能通过实例化的对象进行访问

构造函数本身无法访问实例成员

##### 静态成员 是构造函数本身添加的成员

静态成员只能通过构造函数来访问，不能通过对象来访问

#### 构造函数存在的问题：浪费内存

#### 构造函数原型 prototype

构造函数通过原型分配的函数是所有对象所共享的

JS 规定，每一个构造函数里面都有一个 prototype 属性，指向另一个对象

prototype 本身就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有

我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法

##### 一般情况下，我们公共的属性定义到构造函数里面，公共的方法我们放到原型对象身上

属性——定义到构造函数

方法——定义到原型对象

#### 对象原型

每个对象都有一个原型属性 `__proto__`

指向构造函数的原型对象

方法查找规则：1、首先查看对象上是否有想要的方法，如果有就执行这个对象上的方法

2、 如果没有想要的方法，因为有`__proto__`的存在，就去构造函数原型对象 prototype 上查找

`__proto__` 对象原型和原型对象 `prototype` 是等价的

`__proto__` 对象原型的意义就在于为对象的查找机制提供一个方向，或者说是一条路线，但是他是一个非标准属性，因此在实际开发中，不可以调用这个属性，他只是内部指向原型对象 prototype

#### constructor

对象原型 `__proto__` 和构造函数原型对象 prototype 里面都有一个 constructor 属性，我们称为构造函数，因为他指回构造函数本身。

constructor 主要用于记录该对象引用于哪个构造函数，他可以让原型对象重新指向原来的构造函数

很多情况下，我们需要手动的利用 constructor 这个属性指回原来的构造函数


### 原型链


### JavaScript 成员查找机制

1、当访问一个对象的属性或者方法时，首先查找这个对象自身有没有该属性或方法

2、如果没有就查找它的原型，proto 指向的 prototype 原型对象

3、如果还没有就查找原型对象的原型

4、以此类推一直找到 Object 为止

5、proto 对象原型的意义在于为对象成员查找机制提供一个方向，或者说是路线

### 面向对象 This 的指向问题

##### 1、在构造函数中，里面的 this 指向的是对象实例

##### 2、在原型对象函数里面的 this 指向的也是对象实例

### 继承

在 es 之前并没有给我们提供 extends 继承，我们通过构造函数和原型对象模拟实现继承，称为**组合继承**

##### call（）；

调用函数和改变 this 的指向

##### 借用父构造函数来继承属性

```
function Father (uname,age){

​      // this指向父构造函数的对象实例

​      this.uname = uname;

​      this.age = age;

​    }

​    function Son(uname,age){

​      // this指向子构造函数的对象实例

​      Father.call(this,uname,age);

	}

​    var son = new Son('为什么',18,120);

​    console.log(son);
```

#####

##### 借用直接赋值原型的方式会有问题，修改了子原型对象，父原型对象也会跟着一起改变

```
    function Father (uname,age){
            // this指向父构造函数的对象实例
            this.uname = uname;
            this.age = age;
        }

        Father.prototype.money = function () {
            console.log(100000);
        };

        function Son(uname,age,score){
            // this指向子构造函数的对象实例
            Father.call(this,uname,age);
            this.score = score;
        }
        // Son.prototype = Father.prototype;
        Son.prototype = new Father();
        Son.prototype.constructor = Son;
        // 利用对象的形式修改了对象原型，要用constructor指回原来的构造函数
        var son = new Son('为什么',18,120);
        console.log(son);
        console.log(Father.prototype);
        console.log(Son.prototype.constructor);
```

### ES6 通过 类 实现面向对象编程

##### 类的本质其实还是一个构造函数，是构造函数另外一种写法

ES6 的类它的绝大部分功能，ES5 都可以做到，新的 class 的写法只是让对象原型的写法更加清晰，更像面向对象编程的语法

##### 语法糖：便捷的写法

### ES5 中新增的方法

#### 数组方法

迭代遍历方法：forEach（）、map（）、filter（）、some（）、every（）

filter() 主要用于筛选数组，返回的是新数组

some() 查找数组中是否有满足条件的元素 返回布尔值

#### 字符串方法

`str.trim()`

去除字符串两侧的空格

#### 对象方法

`Object.defineProperty（obj，prop，descriptor）`

obj：必需 目标对象

prop：必需 需要定义或修改的属性的名字

descriptor：必需 目标属性所拥有的特性

第三个参数以对象的格式声明 { }


### 函数进阶

#### 函数的定义方式

function（）{}；自定义函数 命名函数

var fun = function（）{}；函数表达式 匿名函数

var f = new Function （‘参数 1’，‘参数 2’， ‘函数体’）；**效率比较低**

所有函数都是 Function 的实例（对象）

#### 函数的调用方式

1、普通函数

2、对象的方法

3、构造函数

4、绑定时间函数

5、定时器函数

6、立即执行函数 自动调用 (function(){})();

#### 函数内部的 this 指向问题

1、普通函数 指向 window

2、对象的方法 指向对象

3、构造函数 指向实例对象 原型对象里的 this 也指向实例对象

4、绑定时间函数 指向获取的元素 也就是函数的调用者

5、定时器函数 指向 window 相当于普通函数 不需要手动调用

6、立即执行函数 自动调用 (function(){})(); window

#### 改变函数内部的 this 指向

##### call 方法

`call()`

调用函数 改变函数内的 this 指向 主要作用是可以实现继承

##### apply 方法

`apply(thisArg,[argsArray])`

调用函数 改变函数内的 this 指向 它的参数必须是数组（伪数组）

apply 的主要应用是借助于数学内置对象求最大值

##### bind 方法\*

`bind()`

不调用函数 改变原来函数内部的 this 指向

返回的是原函数改变 this 之后产生的新函数

当有函数不需要立即调用，又想改变函数 this 指向时可以用 bind 方法

### JS 严格模式

1、消除了 JS 语法的一些不合理、不严谨之处，减少了一些怪异行为

2、消除代码运行的一些不安全之处，保证代码运行的安全

3、提高编译器效率，增加运行速度

4、禁用了在 ECMAScript 的未来版本中可能会定义的一些语法，为未来新版本的 JS 做好铺垫

##### 开启严格模式

为整个脚本文件开始严格模式 `use strict`

为某个函数开启严格模式 `funtion fn (){ use strict }`

##### 变量规定

1、变量必须声明再使用

2、我们不能随意删除已经声明好的变量

##### this 指向

3、全局作用域 this 指向 undefined

4、严格模式下，如果构造函数不加 new 调用，this 会报错

5、定时器 this 严格模式下仍指向 window

6、事件、对象的指向还是指向调用者

函数变化

7、声明变量不允许重名

8、函数必须声明在顶层，不能在非函数的代码块内声明函数

### 高阶函数

高阶函数是对其他函数进行操作的函数，他接受函数作为参数或将函数作为返回值输出，最典型的是回调函数

### 闭包

##### 变量作用域：变量根据作用域，分为全局变量和局部变量

1、函数内部可以使用全局变量

2、函数外部不可以使用局部变量

3、当函数执行完毕，本作用域内的局部变量会销毁

### 闭包 closure

闭包指的是有权访问一个另一个函数作用域中变量的函数

闭包是一个函数，一个作用域可以访问另外一个函数的局部变量


##### 闭包的主要作用：延伸了变量的作用范围


##### 闭包的缺点：容易造成内存泄漏


## 递归

如果一个函数在内部可以调用其本身，那么这个函数就是递归函数

递归函数的作用和循环效果一样，同时也很容易发生“栈溢出”错误，所以必须添加退出条件

##### 利用递归函数求斐波那契数列

```
        // 利用递归函数求斐波那契数列（兔子序列）
        // 用户输入一个数字n 就可以求出这个数字对应的数字序列值
        // 我们只需要知道用户输入的n 的前面两项（n-1 n-2）就可以计算出n 对应的序列值
        function fb(n) {
            if (n === 1 || n === 2) {
                return 1;
            }
            return fb(n - 1) + fb(n - 2);
        }
        console.log(fb(2));
        console.log(fb(6));

```

### 浅拷贝和深拷贝

###### 浅拷贝只是拷贝一层，更深层次对象级别的只拷贝引用

###### 深拷贝拷贝多层，每一级别的数据都会拷贝

###### 浅拷贝把地址拷贝走了 指向同一个地址 其中一个变化 都跟着变化

##### es6 浅拷贝语法糖：Object.assign (o, obj);

###### 深拷贝拷贝多层，拷贝后分配不同的地址储存

##### 利用递归语法拷贝，判断数据类型进行递归

### 正则表达式

##### 正则表达式是匹配字符串中字符组合的模式，在 JS 中，正则表达式也是对象

##### 通常用于检索、替换符合某个模式（规则）的文本

#### 创建方式

##### 1、利用调用 RegExp 对象的构造函数创建

`var 变量名 = new RegExp ( /表达式/ );`

##### 2、通过字面量创建正则表达式

`var rg = /123/;`

##### 3、测试正则表达式 `test ( str )`

判断文本是否符合规范，返回布尔值

##### 4、正则表达式替换文本

`stringObj.replace ( refexp, replacement )`

### Let 关键字

1、let 的作用：声明变量

2、let 不能重复声明

3、let 块级作用域，变量只在代码块里有效

4、不存在变量提升（变量提升指的是将“定义”的代码提升到所在作用于的顶部去执行）

5、不影响作用域链

### const 关键字

1、一定要赋初始值

2、一般常量使用大写（潜规则）

3、常量的值不能修改

4、块级作用域

5、对于数组和对象的元素修改，不算作对常量的修改，不会报错

### 变量的解构赋值

es6 允许按照一定模式从数组和对象中提取值，对变量进行赋值

##### 数组的解构

```
  const F4 = ['1','2','3','4'];
        let [a,b,c,d] = F4;
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
```

##### 对象的解构

```
const zhao = {
          name: 'yan',
          age: '17',
          song: function(){
            console.log('sing a song');
          }
      };
      let {name,age,song} = zhao;
      console.log(name);
      console.log(age);
      console.log(song);
```

### ES6 引入新的声明字符串的方式 ``

``声明在内容中可以在直接出现换行符

``可以进行变量的拼接

```
   	  let love = 'woaini';
      let out = `${love}是我爱你的意思！`;
      console.log(out);
```

#### ES6 允许在大括号里，直接写入变量和函数，作为对象的属性和方法

### ES6 的箭头函数 => 用作定义函数

```
 <script>
        let fn = (a, b) => {
            return a + b;
        }
        let res = fn(1, 2);
        console.log(res);
    </script>
```

##### 箭头函数的 this 指向时静态的，始终指向函数声明时所在作用域下的 this 的值，call 方法调用不生效

##### 箭头函数不能作为构造函数实例化对象（this 指向静态的原因）

##### 箭头函数不能使用 arguments 变量

##### 箭头函数的简写

1、省略小括号，当形参有且只有一个的时候

2、省略花括号，当代码体只有一条语句的时候

##### 箭头函数的应用场景

箭头函数适合于 this 无关的回调，定时器，数组的方法回调；

不适合于 this 有关的回调，事件回调

#### ES6 允许给函数参数赋初始值

形参可以给默认的参数，一般位置要靠后（潜规则）

可以与解构赋值结合（属性值和属性名同名的时候 ）

#### Rest 参数

##### 用于获取函数的实参，用来代替 arguments

##### ES5 获取实参的方式

```js
function date() {
  console.log(arguments)
}
date('li', 'wo', 'ta')
```

##### rest 获取实参的方式（rest 参数必须放到参数最后）

```js
function date(...args) {
  console.log(args)
}
date('li', 'wo', 'ta')
// 以数组的形式获得
```

#### ...拓展运算符

##### 应用场景

1、数组的合并

```javascript
const yan = ['wo', 'ni']
const a = ['ji', 'ba', 'shui']
const ayan = [...yan, ...a]
console.log(ayan)
```

2、数组的克隆

```js
const a = ['E', 'D', 'G']
const b = [...a]
console.log(b)
```

3、将伪数组转为真正的数组

### Symbol 数据类型

ES6 引入的新的原始数据类型 Symbol，表示独一无二的值

他是 JS 语言的第七种数据类类型

##### 特点

1、Symbol 的值是唯一的，主要用于解决命名冲突

```jsx
var s1 = Symbol('symbol')
var s2 = Symbol('symbol')
console.dir(s1 == s2) //false
```

2、symbol 不能与其他数据进行运算

### 迭代器 iterator

迭代器是一种接口，为各种不同的数据类型，提供统一的访问机制。任何数据结构只要部署 lterator 接口，就可以完成遍历操作

##### 迭代器的应用，自定义遍历数据

```js
<script>
    // 声明一个对象
    const banji = {
        name: "终极一班",
        stus: [
            'ming',
            'ning',
            'tian',
            'knight'
        ],
        [Symbol.iterator]() {
            // 索引变量
            let index = 0;
            let _this = this;
            return {
                next: function () {
                    if (index < _this.stus.length) {
                        const result = { value: _this.stus[index], done: false };
                        index++;
                        // 返回结果
                        return result;
                    } else {
                        return {value:undefined,done:true};
                    }
                }
            };
        }
    }
// 遍历这个对象
for (let v of banji) {
    console.log(v);
}
</script>
```

### 生成器

本质是一个函数，作用是进行异步编程

##### 回调地狱的缺点

- 回调地狱的代码耦合性太强，牵一发而动全身，难以维护
- 大量冗余的代码互相嵌套，代码的可读性变差

##### 解决回调地狱

```js
function one() {
  setTimeout(() => {
    console.log(111)
    iterator.next()
  }, 1000)
}
function two() {
  setTimeout(() => {
    console.log(222)
    iterator.next()
  }, 2000)
}
function three() {
  setTimeout(() => {
    console.log(333)
    iterator.next()
  }, 3000)
}
function* gen() {
  yield one()
  yield two()
  yield three()
}
let iterator = gen()
iterator.next()
```

## Promise 异步编程的解决方法

#### 语法上 Promise 是构造函数，用来封装异步操作并可以获取其成功或失败的结果

1. Promise 是一个构造函数
   - 我们可以创建 Promise 的实例 const p = new Promise（）
   - new 出来的 Promise 实例对象，代表一个异步操作
2. Promise.prototype 上包含一个 .then() 方法
   - 每一次 new Promise（）构造函数得到的实例对象
   - 都可以通过原型链的方式访问到 .then () 方法
3. .then() 方法用来预先指定成功和失败的回调函数

- p.then( 成功的回调函数，失败的回调函数 )
- p.then( result =>{ }, error => { } )
- 调用 .then() 方法时，成功的回调函数是必选的、失败的回调函数是可选的

### Promise.all() 方法

Promise.all() 方法会发起并行的 Promise 异步操作，等所有的异步操作全部结束后才会执行下一步的 .then 操作（等待机制）

Promise.race() 方法会发起并行的 Promise 异步操作，只要任何一个异步操作完成，就立即执行下一步的 .then 操作（赛跑机制）

### async 和 await 关键字

这是 ES8 引入的新语法，用来简化 Promise 异步操作。 在 async / await 出现之前，开发者只能通过链式 .then() 的方式处理 Promise 异步操作

- 如果 方法内使用到了 await 的关键字 ，function 必须要被 async 关键字修饰
- 在 async 方法中，第一个 await 之前的代码会同步执行， await 之后的代码会异步执行

## EventLoop 事件循环

JavaScript 是一门单线程执行的编程语言，同一时间只能做一件事情

单线程执行任务队列的问题：

如果前一个任务非常耗时，则后续的任务就不能不一直等待，从而导致程序假死

为了防止某个耗时的任务导致程序假死的问题，JavaScript 把待执行的任务分为了两类

1. 同步任务（synchronous）

   - 又叫做非耗时任务，指的是在主线程上排队执行的任务

   - 只有前一个任务执行完毕，才能执行后一个任务

2. 异步任务（asynchronous）

   - 又叫做耗时任务，异步任务有 JS 委托给宿主环境进行执行

   - 当异步任务执行完毕之后，会通知 JS 主线程执行异步任务的回调函数

### 同步任务和异步任务的执行过程

1. 同步任务有 JS 主线程次序执行
2. 异步任务委托给宿主环境执行
3. 已完成的异步任务对应的回调函数，会被加入到任务队列中等待执行
4. JS 的主线程的执行栈被清空后，会读取任务队列中的回调函数，次序执行
5. JS 主线程不断重复上面的第 4 步

### 宏任务和微任务（异步任务的进一步划分）

#### 宏任务（macrotask）

- 异步 Ajax 请求 、setTimeout 、 setInterval
- 文件操作
- 其他宏任务

#### 微任务（microtask）

- Promise.then、.catch 和 .finally
- process.nextTick
- 其他微任务

### 宏任务和微任务的执行顺序

![image-20211105202528575](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211105202528575.png)

​ 每一个宏任务执行完之后，都会检查是否存在待执行的微任务

​ 如果有，则执行完所有微任务后，在执行下一个宏任务

## ES6 模块化

- 每个 JS 文件都是一个独立的模块
- 导入其他模块成员使用 import 关键字
- 向外共享模块成员使用 export 关键字

#### 模块化语法

1. 默认导出和默认导入
   - 默认导出的语法 ： export default 默认导出的文件 （只允许导出一次）
   - 默认导入的语法： import 接受名称 from '模块标识符'
2. 按需导出和按需导入
   - 按需导出的语法： export 导出的成员名称
   - 按需导入的语法： import {} from '模块标识符'
3. 直接导入并执行模块中的代码
   - import js 路径
