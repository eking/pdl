<template>
<div class="header">
    <a href="###" class="logo">潘多拉</a>
    <div class="menu">
        <a href="#/jobList/0-1227-10002"><span>技术</span></a>
        <a href="#/jobList/0-1227-37850530"><span>产品</span></a>
        <a href="#/jobList/0-1227-73491303"><span>用户设计</span></a>
        <a href="#/jobList/0-1227-73491301"><span>管理支持</span></a>
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
  left: -3px;
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
