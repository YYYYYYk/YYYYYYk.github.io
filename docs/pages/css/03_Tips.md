# TIPS

## 有关nth选择器
```css
  ul li:not(:first-child) { // 排除第一个元素
    color: red;
  }
  li:nth-child(even) {  // 奇odd,2n-1. 偶even,2n
    color: red
  }
  li:nth-child(-n+3) {     // 前3个
    color: red
  }
  li:nth-last-child(-n+3) {     // 最后3个
    color: red
  }
  li:nth-child(n+3) {   // 从第3个之后的
    color: red
  }
  li:nth-child(n+3):nth-child(-n+8) { // 第3个到第8个
    color: red
  }
  li:nth-child(3n), (3n+1), (3n+2) {   // 周期(0,1,2,  3,4,5,  6,7,8....)
    color: red
  }
```
## 判断iPhone刘海屏
```js
function hasNotch() {
  let proceed = false
  let div = document.createElement('div')
  if (CSS.supports('padding-bottom: env(safe-area-inset-bottom)')) {
    div.style.paddingBottom = 'env(safe-area-inset-bottom)'
    proceed = true
  } else if (CSS.supports('padding-bottom: constant(safe-area-inset-bottom)')) {
    div.style.paddingBottom = 'constant(safe-area-inset-bottom)'
    proceed = true
  }
  if (proceed) {
    document.body.appendChild(div)
    let calculatedPadding = window.parseInt(window.getComputedStyle(div).paddingBottom)
    document.body.removeChild(div)
    if (calculatedPadding > 0) {
    return true
    }
  }
  return false
}
```
## 文本域右下角不可拖拽
```html
  <textarea  style="resize: none;"></textarea>
```
## 刷新页面不记录上次滚动条位置
``` js
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual'
}
```