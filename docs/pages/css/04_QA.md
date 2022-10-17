# QA
## 各种单位
1. pm

像素，用ps无限放大图片即可看到一个个小方格即像素，**显示器不同的分辨率像素显示也不同**，所以电脑高分辨率需做自适应

2. em
   
相对长度单位，相当于**当前对象内文本的fontsize**（如果没设置文本尺寸，则相对于浏览器默认的字体尺寸，也就是16px）  
::: tip
这样计算的话。如果没有设置字体尺寸就是1em = 16px。

如果使用em的话，有个好的建议，就是将body的font-size设置成62.5%，也就是16px * 62.5% =   10px。这样的话  1em = 10px，方便我们计算。
:::
3. rem
   
css3新增的单位，仍然是相对长度单位，**相对的是html根元素的fontsize**，用于适配各种移动设备。
```js
const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = htmlWidth / 7.5+'px';  // 以750px为设计稿，1rem = 100px
};
window.onresize = setHtmlFontSize；
setHtmlFontSize()
```

4. vw/vh
   
**相对于设备可视区域的单位**, 100vw即整个屏幕宽度。

5. rpx

**小程序**专有单位，是以iphone6为设计稿，规定屏幕750rpx，而iphone6屏幕宽度是375px，对应关系就是1px=2rpx。

## 清除默认样式
```css
/* 避免ios滑动滚动条卡顿 */
*{-webkit-overflow-scrolling : touch;-webkit-tap-highlight-color: rgba(255, 255, 255, 0);}
/* reset */
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;}
header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}
table{border-collapse:collapse;border-spacing:0;}
caption,th{text-align:left;font-weight:normal;}
html,body,fieldset,img,iframe,abbr{border:0;}
i,cite,em,var,address,dfn{font-style:normal;}
[hidefocus],summary{outline:0;}
li{list-style:none;}
h1,h2,h3,h4,h5,h6,small{font-size:100%;}
sup,sub{font-size:83%;}
pre,code,kbd,samp{font-family:inherit;}
q:before,q:after{content:none;}
textarea{overflow:auto;resize:none;}
label,summary{cursor:default;}
a,button{cursor:pointer;}
h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}
del,ins,u,s,a,a:hover{text-decoration:none;}
body,textarea,input,button,select,keygen,legend{font:12px/1.14 arial,\5b8b\4f53;color:#333;outline:0;}
body{background:#fff;}
a,a:hover{color:#333;}

/* 清除移动端 input 样式 */
input {
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none; /*解决ios上按钮的圆角问题*/
  border-radius: 0; /*解决ios上输入框圆角问题*/
  outline: medium; /*去掉鼠标点击的默认黄色边框*/
  background-color: transparent;

  /*去除input默认填充的背景颜色*/
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset; 
  }

  /* 清除input[type=number]的默认样式 */
  &[type=number] {
    -moz-appearance: textfield;
  }

  &[type=number]::-webkit-inner-spin-button,
  &[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
```