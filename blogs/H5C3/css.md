---
title: CSS知识点补充
date: 2021-12-26
categories:
  - 前端学习
---

## 贝塞尔曲线

    贝塞尔曲线主要应用在 CSS3 动画演变方面，在变化的过渡中可以加入，`transition：ease/linear/ease-in/ease-out）`就是贝塞尔曲线的常用参数

    同时你也可以自定义属性，来改变每个阶段动画的过渡速度

    具体的样式代码可以从以下网站获取

    [cubic-bezier](https://cubic-bezier.com/#.63,.56,.79,.69)

## form:valid {}

    `form:valid {} ` 的选择器指的是表单在验证通过下的样式

## "+" 选择器

    CSS 中的加号选择器指的是：

    对找到的某类的元素除第一个元素以外的兄弟元素起作用，即第一个元素不起作用，后面的兄弟元素都会起作用

```
<style>
        ul{
            list-style: none;
        }
        li{
            float: left;
            width: 50px;
            height: 40px;
            background: #eee;
        }
        li+li{
            border-left: 1px solid #666666;
        }
</style>

<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>

效果：给每一个li加一个左边框，使用加号选择器之后，第一个li标签没有左边框效果
```
