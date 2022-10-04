# 字符和数组方法
## 字符串操作
 let str="abcdabcd";
### charAt
返回指定索引的字符
```js
str.charAt(0); //a
str[0]  // a
```
### charCodeAt
返回指定索引的Unicode值
```js
str.charCodeAt(0); //97
```
### indexOf
判断一个字符第一次出现在某字符串的索引，没有则返回-1
```js
 str.indexOf('a');  //0        
 str.indexOf('e'); //-1
```
### lastIndexOf
判断一个字符最后次出现在某字符串的索引，没有则返回-1
```js
str.indexOf('a');  //4       
str.lastIndexOf('e'); //-1
```
### concat
拼接2个字符串，并返回一个新的字符串，对源字符串没有改变
```js
str.concat("ef"); //abcdabcdef
```
### substr(n,m)
从下标n开始截取m位，将截取的字符串返回，不改变原字符串
```js
 str.substr(1,3); //bcd
```
### substring(n,m)
从索引n开始截取至索引m处（不包括m），将截取的字符串返回，不改变原字符串
```js
 str.substring(1,3); //bc
```
### slice(n,m)
从索引n开始截取至索引m处（不包括m），将截取的字符串返回，不改变原字符串
```js
str.slice(1); //bcdabcd
str.slice(1,3); //bc
```
### split
指定字符串分割字符串，并返回一个数组，不改变原字符串
```js
let arr=str.split(''); //["a","b","c","d","a","b","c","d"] 
```
### replace
替换指定的字符串，只能替换一次，并返回替换后新的字符串，不改变原字符串
```js
str.replace('a',s); //sbcdabcd 
```
::: tip 
第一个参数可配合正合表达式使用
```js
let reg=/a/g;   
str.replace(reg,'s');//sbcdsbcd  
```
若是变量的话，采用对象正则表达式RegExp
```js
let str = 'abcdabcd'
let key='a';   
str.replace(new RegExp(key, 'g'),'s');//sbcdsbcd 
```
:::
### match
检索字符串内指定的值，并返回指定的值，没有则返回null
```js
str.match('abcd');  //abcd    
str.match('ef');  //null
```
::: tip
配合正则匹配所有则返回值数组
```js
let reg=/a/g;    
str.match(reg);  //['a','a']
```
:::
### startsWith/endsWith
用于检测字符串是否以指定的子字符串开始或结束，返回布尔值
### padStart/padEnd
字符串填充方法,默认是用空格进行填充。第一个参数表示填充后的字符串长度
```js
str.padStart(10,'*')   //**abcdabcd
```
## 数组操作
let arr=['a','b','c','d']
### join
将数组中的所有元素拼接成字符串，可指定分割符号，不改变原数组
```js
arr.join();  //a,b,c,d
arr.join('-');  //a-b-c-d
```
### reverse
反转数组中的元素，该方法会改变原数组
```js
arr.reverse();  //['d','c','b','a']
```
### concat
数组拼接，并返回拼接后的数组，不改变原数组
```js
let arr2=['e','f'];  
arr.concat(arr2); //['a','b','c','d','e','f']
```
::: tip 
等同于 [...arr1, ...arr2]
:::
### splice(n,m,...params)
剪接从数组索引n开始, 删除m位，并添加后续参数到原数组。该方法会返回删除的元素(数组类型),会改变原数组
```js
let arr = [1,2,3,4,5]
arr.splice(2,1) // [3]
arr // [1,2,4,5]
arr.splice(2) // [3,4,5]
arr // [1,2]
arr.splice(2,0,7,8) // []
arr // [1,2,7,8,3,4,5]
```
### slice(m,n)
从数组索引n开始, 截取至索引m位，返回获取的的元素（数组类型），不改变原数组，参数负值表示末端
``` js
let arr = [1,2,3,4,5]
arr.slice(2,1) // 无效
arr.slice(2,3) // [3]
arr.slice(2) // [3,4,5]
arr.slice(1,-1) // [2,3,4] 表示从索引1截取到倒数第一个(不包括自己)为止
arr.slice(-2) // [4,5] 表示截取最后2个
arr // [1,2,3,4,5]
```
::: tip
比如给数组做个浅拷贝
``` js
let new = arr.slice()
等同于
let new = […arr]
```
:::
### push
向数组末端添加一个或多个元素，并返回新数组的长度，该方法会改变原数组
``` js
arr.push('e'); //5    arr; //['a','b','c','d','e']
```
### unShift
向数组首端添加一个或多个元素，并返回新数组的长度，该方法会改变原数组
``` js
arr.shift('e'); //5    arr; //['e','a','b','c','d']
```
### pop
从数组末端删除元素（只能删除一个），并返回删除的元素，该方法会改变原数组
``` js
arr.pop();  //d  
```
### shift
从数组首端删除元素（只能删除一个），并返回删除的元素，该方法会改变原数组
``` js
arr.pop();  //a
```
### toString
将数组的每个元素转化为字符串，并且输入用逗号分隔的字符串列表。类似join()
``` js
arr.toString();  //a,b,c,d 
```
### indexOf
判断一个字符第一次出现在数组中的索引，没有则返回-1，可指定第二个参数表示查找起点
``` js
str.indexOf('a');  // 0        
str.indexOf('e');  // -1
```
### lastIndexOf
判断一个字符最后次出现在数组中的索引，没有则返回-1，可指定第二个参数表示查找起点
``` js
str.indexOf('a');  //4      
str.lastIndexOf('e'); //-1
```
### sort
没有传比较方法的话默认是按`Unicode`做排序，会改变原数组
``` js
let arr = [20,10,2,1,3]
ar.sort() // [1,10,2,20,3]
```
::: tip 排序
``` js
arr.sort((a,b) => {
  return a - b // 升序
})
```
:::
### includes
判断是否包含某项，返回布尔值
### find
返回数组中满足第一个是符合条件的值，跟some一样匹配到即停止，未匹配到则返回undefined
``` js
let arr = [{id: 1, name: 'y'},{id: 2, name: 'k'}]
arr.find(item => item.id === 1) // {id: 1, name: 'y'}
```
### findIndex
返回符合条件元素的下标位置，未匹配到则返回-1
### map
调用的数组每一个元素传递给指定的函数，并返回新的数组，不修改原数组
### tip 可用来过滤数组
``` js
let arr = [{id: 1, name: 'y'},{id: 2, name: 'k'}]
arr.find(item => item.id) // [1, 2]
```
### filter
数组中的每一项传递给指定的函数，返回满足条件组成的新数组，不修改原数组（可巧妙用来去重）
::: tip 可用来去重
``` js
```
:::
### every
遍历数组，用来判断数组中的每一项是否满足条件,返回布尔值
### some
遍历数组，只要数组中有一项满足即返回true
::: warn 
空数组[] 会使every得到的都是true，使用some得到的都是false，所以要做长度空判断
:::
### reduce
从数组第一项开始遍历到最后一项，2个参数

``` js
let arr = [1,2,3,4,5]
arr.reduce((total, item) => {
  return total + item
})
```
###  forEach
遍历数组，无返回值，该方法会修改原数组
## 对象操作
### Object.keys
遍历对象，返回key所组成的数组
### Object.values
返回由对象value组成的数组
### Object.entries
返回由健key值value对组成的数组
### delete Object.aa   
删除对象的某一属性，返回布尔值
