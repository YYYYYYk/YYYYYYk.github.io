# TIPS
## 1. 各种loader

`css-loader`是将css转化为js（因为不能直接require .css文件），从而可以从js中引入css

`style-loader`是将js样式（css-loader生成）插入head

ExtractTextPlugin是将css从js中提取出来

css modules是解决css命名冲突问题，vue中可直接通过scoped解决。

## 2. 判断iPhone刘海屏
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