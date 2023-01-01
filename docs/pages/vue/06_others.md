# 其他
## 日常bug
### 二维数组响应式
``` js
  this.arr[0] = [] // 内部数组不具响应式
  this.$set(this.arr, 0, []) // 阔以
```