# TIPS

## DOM 的类操作

1. 添加

```js
// 新类名会覆盖原有的类名
DOM.setAttribute('class', '类名1')
// 不会覆盖已有的类名
DOM.classList.add('类名1', '类名2')
// 添加内联样式
DOM.style.cssText = 'height: 200px;'
DOM.setAttribute('style', 'height: 200px;')
DOM.setAttribute('style', 'color: red; font-size: 20px;')
// 清空内联样式
DOM.removeAttribute('style')
```

2. 删除

```js
DOM.classList.remove('类名1', '类名2')
```

3. 是否包含某类

```js
DOM.classList.contains('类名') // return true or false
```

## Math.random 生成随机数

> Math.floor 向下取整

- 比如要生成范围 0-19 的整数，`Math.floor(Math.random()*20)`
- 比如要生成范围 10-20 的整数，`Math.floor(Math.random()*11+10)`

## 匿名函数

```js
;(() => {})()
```

## 辨析 event.target 和 event.currentTarget

2 者在没有冒泡的情况下，是一样的值。

在有冒泡的事件中，如<u>给父元素绑定点击事件，然后点击子元素</u>。`event.target`是实际触发的元素，`event.currentTarget`是事件绑定的元素，就是父元素

## 原生点击事件的触发 3 种方式

1. 添加 onclick 事件
2. 获取 dom，dom.addEventListener('click', () => { })
3. 获取 dom，dom.onclick = () => {}

## 元素移动

- `append`，`appendChild`移动成功后会删除旧节点
- `cloneNode`复制节点，不会删除旧节点

## 浅拷贝

`Object.assign({}, obj)`

## 日常

1. break 与 continue 在 for 循环中也能使用
