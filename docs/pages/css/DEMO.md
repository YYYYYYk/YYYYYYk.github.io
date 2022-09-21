# DEMO
## 1. 有关nth选择器
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