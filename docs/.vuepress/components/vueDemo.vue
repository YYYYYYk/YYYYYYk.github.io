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

<style scoped lang="less"></style>
