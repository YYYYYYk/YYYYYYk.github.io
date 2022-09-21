<template>
<div>
  <table style="width:100%; border-collapse:collapse;">
    <tr>
      <th>姓名</th>
      <th colspan="2">电话</th>
    </tr>
    <tr>
      <td>张三</td>          
      <td>111111</td>          
      <td>222222</td>
    </tr>
    <tr>
      <td>李四</td>
      <td colspan="2" rowspan="2">444444</td>
    </tr>
    <tr>
      <td>王五</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
 name: 'TableDemo',
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

<style lang="less">
  table, th, td {
    border-collapse:collapse;
    text-align: center;
  }
  th, td {
    padding:5px;
    text-align: left;
    background: #fff;
  }
</style>
