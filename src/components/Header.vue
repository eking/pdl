<template>
<div class="header">
    <a href="###" class="logo">潘多拉</a>
    <h1 class="slogen">{{ msg }}</h1>
</div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 150px;
  padding: 0 50px;
  background-color: antiquewhite;
}
.header::after {
  content: "";
  clear: both;
}
.logo {
  width: 200px;
  float: left;
  height: 150px;
  background: url("../assets/logo.png") center center no-repeat;
  background-size:100% auto;
  text-indent: -999999em;
}
.slogen {
    line-height: 150px;
    float: left;
    margin-left: 50px;
}

</style>
