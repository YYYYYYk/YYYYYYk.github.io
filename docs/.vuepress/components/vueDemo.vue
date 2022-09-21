<template>
  <div class="container">vue-template</div>
</template>

<script>
export default {
  name: "vueDemo",
  data() {
    return {}
  },
  components: {},
  created() {
    let clientHeight = document.documentElement.scrollTop === 0 ? document.body.clientHeight : document.documentElement.clientHeight
    let scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop
    let scrollHeight = document.documentElement.scrollTop === 0 ? document.body.scrollHeight : document.documentElement.scrollHeight
    if (scrollTop !== 0 && clientHeight + scrollTop > scrollHeight - 20 && pending) {
      pending = false
      getMore()
    }
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style scoped lang="less">
	ul li:not(:first-child){ // 排除某个元素
    color: red;
	}
	li:nth-child(even) {  // 奇odd,2n-1. 偶even,2n
	  color: red
	}
	li:nth-child(-n+3) {     //   前3个
	  color: red
	}
	li:nth-last-child(-n+3) {     //   最后3个
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
</style>
