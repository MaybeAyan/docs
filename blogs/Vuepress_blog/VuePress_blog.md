---
title: VuePress_blog 搭建相关
date: 2021-12-17
tags:
  - Vuepress
categories:
  - Vue
---
## VuePress_blog 搭建

### 前期准备

1、node 版本高于 8.0

2、github 或者 gitee 仓库

3、yarn 的环境依赖

### 搭建过程中遇到的坑

#### 1、VuePress 版本导致的热更新问题

##### 解决方案：

在 package.json 中将运行命令

由 `dev: vuepress dev docs 改为 dev: vuepress dev docs --temp .temp` 即可解决

启动运行命令的时候 vuepress 会生成一个临时文件夹 .temp

可以在 .gitignore 文件中添加下列代码忽略掉生成的该文件夹

`# vuepress temp file .temp`
