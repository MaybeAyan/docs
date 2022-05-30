---
title: Git 相关的学习问题
date: 2021-12-17
tags:
  - Git
categories:
  - 前端学习
---

## 项目中遇到的小问题

    遇到 `Another git process seem to be running in this repository` 的报错

    触发场景：git commit 提交代码的时候崩溃了 使用另一个终端进行重新提交时出现的问题

    解决方法：到对应的项目文件夹下的 .git 文件夹把 index.lock 文件删除即可

    总结： git 原则上虽然支持多线程同步操作资源，但是如果出现了崩溃，就会出现这样的问题，建议同一时间还是只打开一个 git 进程进行版本管理比较好


## git push遇到的问题

    问题：ssh: Could not resolve hostname github.com: No address associated with hostname

    ssh密钥连接出现了问题，然后通过 ping github.com 发现没反应

    解决：
    
    查询 github 的 ip 地址，添加到hosts文件中
    
    修改本地 DNS 文件 C:\Windows\System32\drivers\etc 目录下的 hosts 文件

    由于该文件在 C 盘中，无法直接打开进行修改，需要使用管理员权限

    此处操作方式为，搜索 记事本 软件，右键以管理员身份运行

    通过左上角文件->打开，选择上述 hosts 文件打开，在文件内容最下方加入一行
