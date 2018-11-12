<template>
<div class="header">
    <a href="/" class="logo">潘多拉</a>
    <div class="menu">
      <a v-for="(menu, key) in menuList" :key="key" :href="menu.href"><span>{{menu.name}}</span></a>
    </div>
    <p class="slogen">{{ tel }}</p>
    <!-- <h1 class="slogen">{{ msg }}</h1> -->
</div>
</template>

<script>
import ChannelInfo from '../data/channel'

var Header = {
  name: "Header",
  props: {
    tel: String
  },
  data() {
    return {
      menuList: []
    };
  },
  created() {
    let menus = [];
    ChannelInfo.forEach(item => {
      menus.push({
        name: item.name,
        href: "#/" + item.key
      })
    })
    this.menuList = menus;
  },
};
export default Header;
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
    position: absolute;
    left: 310px;
    top: 30px;
    text-align: left;
    color: #DBB960;
    line-height: 30px;
    font: 24px/30px tahoma
}
.slogen::before {
  content: "热线电话：";
  font:16px/30px "microsoft yahei";
  vertical-align: 3px
}
.menu {
  float: left;
  font-size: 16px;
  padding-top: 80px;
  margin-left: 50px;
}
.menu a {
  color: #DBB960;
  float: left;
  line-height: 30px;
  height: 30px;
  border: 1px solid rgba(219, 185, 96, 0.33);
  border-radius: 4px;
  margin: 10px 0 10px 10px;
  padding: 0 25px;
  position: relative;
}
.menu .on {
  font-weight: bold;
  border: none;
  background-color: #DBB960;
  color: #FFFFFF;
  padding: 1px 26px;
  cursor: default
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
  border-radius: 4px;
  opacity: 0;
}
.menu .on span::after, .menu .on span::before {
  display: none;
}
.menu a:hover span::after, .menu a:hover span::before {
  opacity: 0.2;
}
.menu a:hover span::after {
  animation: "menu1" 0.5s linear infinite;
}
.menu a:hover span::before {
  animation: "menu2" 0.75s linear infinite;
}
</style>
