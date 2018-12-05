<template>
  <ul class="sider">
      <li>微信</li>
      <li>QQ</li>
      <li>返回</li>
  </ul>
  </template>

<script>
var Sider = {
  name: "Sider",
  data() {
    return {};
  }
};
export default Sider;
</script>

<style scoped>
.sider {
    position: fixed;
    right: 10px;
    bottom: 50px;
}
</style>
