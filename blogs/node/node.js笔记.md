---
title: Node
date: 2021-12-20
tags:
  - node
categories:
  - Node
---

## 命令行窗口

##### 常用的指令

###### dir ：列出当前目录所有文件

###### cd 目录名 ：进入到指定的目录

###### . 表示当前目录

###### ..表示上一级目录

###### md 目录名 ：创建新的文件夹

###### rd 目录名 ： 删除一个文件夹

##### 环境变量（windows 中的系统变量）

###### path 中添加文件路径进行配置环境变量

## Node.js

node.js 是基于 chrome 的 v8JS 引擎构建的 JS 运行环境

他既不是新语言，也不是一个框架或者一个库，而是一个软件

node.js 是一个 JS 的运行环境，用来运行 JS 的

#### node 的应用

1、web 服务器

2、命令行工具

3、网络爬虫

4、桌面应用开发

5、app

6、嵌入式

7、游戏

#### Nvm 的作用，包容不同版本的 node

C:\Users\Administrator\AppData\Roaming\nvm

C:\Program Files\nodejs

### TCP/IP 模型 三次握手四次挥手

http 协议是基于 TCP/IP 协议的，TCP/IP 是一个可靠的传输协议；

##### TCP 协议

传输数据之前需要建立连接，为了保障双方都能正常地进行数据的发送和接受

##### 三次握手

在建立连接的过程中，发生了 3 次握手，保证双方都知道了对方能够正常发送和接收数据

![image-20211114153320718](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20211114153320718.png)

##### 四次挥手

关闭连接的时候，客户端请求断开连接，服务端收到请求，然后发出断开连接的响应，客户端收到；四次挥手是因为有可能收到断开连接的请求的时候，服务端还在处理数据，因此需要多一次挥手
