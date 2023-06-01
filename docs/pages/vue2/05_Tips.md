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
