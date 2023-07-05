# Tips

## 版本支持

vue2 只支持 IE9 以上，因为 Object.defineProperty 不支持低版本的

## 使用 css 变量

**仅适用于当前页面**，即原生 css 写法，不支持 less 或 sass

```vue
<template>
  <div class="box" :style="styleObj"></div>
</template>
<script>
export default {
  data() {
    return {
      height: 0,
    }
  },
  computed: {
    styleObj() {
      return {
        '--boxHeight': this.height + 'px,
      }
    },
  },
}
</script>
<style scoped>
.box {
  height: var(--boxHeight);
}
</style>
```

若要在 less 或 sass 中使用：

- [在 vue 项目中使用 less 全局变量](https://blog.csdn.net/weixin_55510188/article/details/123686594)

## elmentUI 相关

1. **el-input 中想输入 number 类型**，添加 v-model.number 即可，不用加上 type=number

## 项目结构修改

1. Vue CLI 3+ 版本中，默认的静态资源文件夹是 public 文件夹，而不是 static 文件夹。
   请将你的静态资源文件 logo.png 放置在 public 文件夹中，然后在 HTML 文件中使用以下方式引用：
   <img src="<%= BASE_URL %>logo.png" alt="Logo">
   这里使用了 <%= BASE_URL %> 变量，它会被 Vue CLI 替换为正确的路径。这样，在本地启动时，应该能够正确找到并加载资源。
