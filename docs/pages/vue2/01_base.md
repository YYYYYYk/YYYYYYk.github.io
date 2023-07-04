# 基础

## 生命周期

https://www.cnblogs.com/chenchunbo/p/16395553.html
[![pptvQ39.md.png](https://s1.ax1x.com/2023/03/20/pptvQ39.md.png)](https://imgse.com/i/pptvQ39)

## 1.MVVM

M: 数据模型 - JS 块中 data 数据

V: 视图 - 前端 html 代码

VM: 调度者 - JS 块，相当于 vue 的实例, 监听数据模型改变和视图上的行为，简单点就是连接数据和视图

## 2.SPA

单页 web 应用(single page web application)

1. 只有 1 个完整页面（1 个 index.html），多个组件
2. 点击页面中的链接不会刷新页面，只会做局部更新
3. 数据都通过 ajax 异步展示到前端

## 3.h 函数

## 4.组件传值

- provider & inject

```js
provide() {
	return {
		commonData: this.vipCommon,  // 值依赖于data所定义的值
		getNewstValue: () => this.vipCommon // 能获取响应式的值
		updateCommonData: this.updateCommonData. // methods
	}
},
inject:['commonData', 'updateCommonData'],
// 相应式取值
Computed: {
    newCommonData() {
        return this.getNewstValue()
	}
}
```

## $event

参数$event - 事件对象

```vuejs
<div @click='handleMethod()'>
<div @click='(e) => handleMethod(e)'>
```

## $on

## $once

## sourcemap

开启 sourcemap 主要是为了方便 debug，比如报错具体出现在哪个文件夹的哪一行。（线上环境不建议开启，会暴露源码）
如果不开启话你的 debug 出来的位置就不是源文件而是编译后的文件了，如 es5 的看不懂。
