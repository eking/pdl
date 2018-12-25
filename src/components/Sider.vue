<template>
  <ul id="sider" class="sider">
    <li>微信</li>
    <li>QQ</li>
    <li>地址</li>
    <li>电话</li>
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
  bottom: 50px
}
.sider li {
  width: 50px;
  height: 50px;
  background-color: #dbb960;
  opacity: 0.8;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  border: 1px #000000 solid;
  margin-bottom: -1px;
  cursor: pointer;
}
.sider li:hover {
  opacity: 1;
}
</style>
