# 基础

## 常用标签
### meta标签

> meta元素可提供有关页面的元信息(meta-information),这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。

- [meta标签总结与属性使用介绍](https://segmentfault.com/a/1190000004279791)

## 语义化标签

![](https://s1.ax1x.com/2022/09/20/xCHSIg.png)

## 文章
[搞清clientHeight、offsetHeight、scrollHeight、offsetTop、scrollTopt](https://blog.csdn.net/qq_35430000/article/details/80277587) 博客内容里的图片更直观

## TIPS
### 元素的宽高属性
  常见的各种高度
  clientHeight: 设备可视区域高，如667
  clientWidth: 设备可视区域宽，如375
  offsetTop:  当前元素距离最近父元素的距离
  scrollTop + clientHeight = scrollHeight

  Element.**getBoundingClientRect**()方法返回元素的大小及其相对于视口的位置，缺点是会造成重绘回流。
  ![](https://s1.ax1x.com/2022/09/20/xPMqEt.png)

### 标签内容可编辑
  ```html
  <div contenteditable>标签内容可编辑</div>
  ```
### 快速生成多个li
  ```html
  ul>li{$$}*10
  ```
### 文档中的空格问题
  直接输入n个空格会被视为1个空格，而多个 &nbsp + ; 会视为多个空格。
  或者`white-space: pre` 来保留
  
### 文本末端空白
  ```css
  text-align: justify;
  letter-spacing: 1px;
  ```
