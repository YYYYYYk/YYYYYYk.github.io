# DEMO
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
## 单行/多行省略
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

## 改变滚动条样式
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

## 三角形
<CSS-TriangleDemo />

## 背景结合文字居中
<CSS-List />

## 图片异常最佳实践
``` html
<img src='' alt="图片描述" onerror="this.classList.add('error')">
```
``` css
img.error {
  display: inline-block;
  transform: scale(1);
}
img.error::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5
    url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cpath d='M304.128 456.192c48.64 0 88.064-39.424 88.064-88.064s-39.424-88.064-88.064-88.064-88.064 39.424-88.064 88.064 39.424 88.064 88.064 88.064zm0-116.224c15.36 0 28.16 12.288 28.16 28.16s-12.288 28.16-28.16 28.16-28.16-12.288-28.16-28.16 12.288-28.16 28.16-28.16z' fill='%23e6e6e6'/%3E%3Cpath d='M887.296 159.744H136.704C96.768 159.744 64 192 64 232.448v559.104c0 39.936 32.256 72.704 72.704 72.704h198.144L500.224 688.64l-36.352-222.72 162.304-130.56-61.44 143.872 92.672 214.016-105.472 171.008h335.36C927.232 864.256 960 832 960 791.552V232.448c0-39.936-32.256-72.704-72.704-72.704zm-138.752 71.68v.512H857.6c16.384 0 30.208 13.312 30.208 30.208v399.872L673.28 408.064l75.264-176.64zM304.64 792.064H165.888c-16.384 0-30.208-13.312-30.208-30.208v-9.728l138.752-164.352 104.96 124.416-74.752 79.872zm81.92-355.84l37.376 228.864-.512.512-142.848-169.984c-3.072-3.584-9.216-3.584-12.288 0L135.68 652.8V262.144c0-16.384 13.312-30.208 30.208-30.208h474.624L386.56 436.224zm501.248 325.632c0 16.896-13.312 30.208-29.696 30.208H680.96l57.344-93.184-87.552-202.24 7.168-7.68 229.888 272.896z' fill='%23e6e6e6'/%3E%3C/svg%3E")
    no-repeat center / 50% 50%;
  color: transparent;
}
img.error::after {
  content: attr(alt);
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 2;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```