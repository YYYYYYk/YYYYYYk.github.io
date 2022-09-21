# 基础
## 样式种类
1. 内联样式（style）
2. 内部样式（选择器）
3. 外部样式（link标签引入）

## 选择器
1. 标签选择器(标签名)
2. id选择器(id)
3. class选择器(class)
4. 后代选择器(空格) 
5. 子代选择器(>)
6. 相邻兄弟选择器(+， ~)
::: tip 区分
a b:  选取a后代的所有b

a+b:  选取a相邻的后**第一个**b

a~b:  选取a同级后面的所有b
::: 
7. 伪类选择器(a: hover  :link（链接未访问）  :visited（已访问）  :active（链接点击） :not(除了))
8. 伪元素选择器(::after  ::before，表现为行内元素, content属性必备)
9.  属性选择器([ 属性名 ] [ 属性名=属性值] )
```css
a[href] {color:red;}   // a标签内含href属性则会生效
```
## background
- [CSS中background的用法](https://www.cnblogs.com/sheshou/p/5202947.html)

**background-color || background-image || background-repeat || background-attachment || background-size || background-clip || background-position**

::: tip
1. 若div不设置宽高则不会显示
2. background-size: 100% 100% 会铺满全屏,可通过cover或contain保持原比例
3. 图片默认是repeat
4. 针对精灵图(雪碧图)，通过background-position（x，y）来定位相应的图片。如（10px, 10px）像右像向下移动10px；
:::

## transfrom
**属性值**
- translate(x,y)、translateX(x)、translateY(y)、translateZ(z)、translate3d(x,y,z) 定义位置的移动距离
- scale(x,y)、scaleX(x)、scaleY(y)、scaleZ(z)、scale3d(x,yz) 定义元素的缩放比例
- rotate(angle)、rotateX(angle)、rotateY(angle)、rotateZ(angle)、rotate3d(x,y,z,angle) 定义元素的旋转度
- skew(x-angle,y-angle)、skewX(angle)、skewY(angle) 定义元素的倾斜度
::: tip
可以为transform添加动画： transition：transform  1s;
:::

## 动画
- [CSS动画与transform属性](https://juejin.cn/post/7051148335708651528)

**3种实现动画的方式: transtion, animation, transform**

**transition**和**animation**会触发页面的【重绘】【重排】，因此他们的渲染成本是比较高的。

而**transform**是GPU进程渲染的，不会触发重绘和重排，效率更高。所以即使浏览器渲染进程阻塞了，我们会发现transform的动画仍然会正常运行。
::: tip
animation动画有3个事件：
  开始事件: webkitAnimationStart

  结束事件: webkitAnimationEnd
  
  重复运动事件: webkitAnimationIteration
:::


