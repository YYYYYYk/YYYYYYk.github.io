

# DEMO
## 1.简易的table表格
  <HTML-TableDemo />
  ```html
    <table style="width:100%; border-collapse:collapse;">
      <tr>
        <th>姓名</th>
        <th colspan="2">电话</th>
      </tr>
      <tr>
        <td>张三</td>          
        <td>111111</td>          
        <td>222222</td>
      </tr>
      <tr>
        <td>李四</td>
        <td colspan="2" rowspan="2">444444</td>
      </tr>
      <tr>
        <td>王五</td>
      </tr>
  </table>
  ```

## 2. 无限滚动临界条件
```js
  let clientHeight = document.documentElement.scrollTop === 0 ? document.body.clientHeight : document.documentElement.clientHeight
  let scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop
  let scrollHeight = document.documentElement.scrollTop === 0 ? document.body.scrollHeight : document.documentElement.scrollHeight
  if (scrollTop !== 0 && clientHeight + scrollTop > scrollHeight - 20 && pending) {
    pending = false
    getMore()
  }
```

