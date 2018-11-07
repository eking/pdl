<template>
<div class="header">
    <a href="###" class="logo">潘多拉</a>
    <div class="menu">
        <a href="#/{}"><span>技术</span></a>
        <a href="#/{}"><span>技术</span></a>
        <a href="#/{}"><span>技术</span></a>
        <a href="#/{}"><span>技术</span></a>
    </div>

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

<style scoped>
.header {
  height: 150px;
  padding: 0 50px;
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
    color: #DBB960;
    line-height: 150px;
    float: left;
    margin-left: 50px;
}
.menu {
  float: left;
  font-size: 16px;
}
.menu a {
  color: #DBB960;
  float: left;
  line-height: 24px;
  height: 24px;
  border: 1px solid rgba(219, 185, 96, 0.33);
  margin: 10px 0 10px 10px;
  padding: 0 20px;
  position: relative;
}
.menu span::after, .menu span::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -2px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid #DBB960;
  opacity: 0;
}
.menu a:hover span::after, .menu a:hover span::before {
  opacity: 0.2;
}
.menu a:hover span::after {
  -webkit-animation: "menu1" 0.5s linear;
}
.menu a:hover span::before {
  -webkit-animation: "menu2" 0.75s linear;
}
</style>
