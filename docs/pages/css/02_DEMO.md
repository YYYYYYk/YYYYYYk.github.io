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
## 2. 单行/多行省略
```css
/* 单行省略，需设置高度*/
@mixin minHide {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 多行省略，高度可不设置*/
@mixin minHideMulti($number) {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $number;
}
```
## 3. 改变滚动条样式
```css
&::-webkit-scrollbar {
  width: 8px;
  background: white;
}
&::-webkit-scrollbar-corner, /* 滚动条角落 */
&::-webkit-scrollbar-thumb,
&::-webkit-scrollbar-track {
  border-radius: 4px;
}
&::-webkit-scrollbar-corner,
&::-webkit-scrollbar-track {
  /* 滚动条轨道 */
  background-color: rgba(180, 160, 120, 0.1);
  box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
}
&::-webkit-scrollbar-thumb {
  /* 滚动条手柄 */
  background-color: #00adb5;
}
```
## 4. 三角形
<CSS-TriangleDemo />

## 5. 小demo
<CSS-List />

---

