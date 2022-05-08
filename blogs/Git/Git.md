---
title: Git 相关的学习问题
date: 2021-12-17
tags:
  - Git
categories:
  - 前端学习
---

### 项目中遇到的小问题

    遇到 `Another git process seem to be running in this repository` 的报错

    触发场景：git commit 提交代码的时候崩溃了 使用另一个终端进行重新提交时出现的问题

    解决方法：到对应的项目文件夹下的 .git 文件夹把 index.lock 文件删除即可

    总结： git 原则上虽然支持多线程同步操作资源，但是如果出现了崩溃，就会出现这样的问题，建议同一时间还是只打开一个 git 进程进行版本管理比较好
