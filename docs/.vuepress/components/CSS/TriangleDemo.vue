<template>
  <div class="container">
    <div class="triangle1"></div>
    <pre><code ref="code-container" class="language-css">
  /* border创建,底边颜色保留 */
  .triangle1 {
    width: 0;
    height: 0;
    border: 50px solid;
    border-color: transparent transparent blue transparent;
  }
  /* clip-path创建,注意浏览器兼容性 */
  .triangle2 {
    width: 100px;
    height: 50px;
    background-color: blue;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
  }
  </code></pre>
    <div class="triangle2"></div>
  </div>
</template>

<script>
import Prism from 'prismjs'
export default {
  name: 'Triangle',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style scoped lang="less">
.container {
  .triangle1 {
    width: 0;
    height: 0;
    border: 50px solid;
    border-color: transparent transparent blue transparent;
  }
}
</style>
