<template>
<div class="header">
  <a href="/" class="logo">潘多拉</a>
  <p class="tel"><span>{{ tel.name }}:</span> {{ tel.number }}</p>
  <ul class="nav">
    <li v-for="(nav, key) in navList" :key="key" >
      <span v-if="nav.on">{{nav.name}}</span>
      <a v-else :href="nav.href" v-on:click="changeNav(nav.name)">{{nav.name}}</a>
    </li>
  </ul>
</div>
</template>

<script>
import Contact from "../data/infomation/contact";
import Infomation from "../data/infomation";

var Header = {
  name: "Header",
  data() {
    return {
      tel: "",
      navList: []
    };
  },
  created() {
    this.tel = Contact.contacts.tel;
    let navs = [];
    let home = {
      name: "首页",
      href: "/",
      on: true
    };
    navs.push(home);
    Infomation.forEach(item => {
      navs.push({
        name: item.name,
        href: "#/" + item.key
      });
    });
    this.navList = navs;
  },
  methods: {
    changeNav(name) {
      let navs = this.navList.map(item => {
        item.on = false;
        if (item.name === name) item.on = true;
        return item;
      });
      this.navList = navs;
    }
  }
};
export default Header;
</script>

<style scoped>
.header {
  height: 80px;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 2px solid #dbb960;
  position: relative;
  z-index: 9;
}
.logo {
  width: 240px;
  position: absolute;
  left: 50px;
  top: 0;
  height: 150px;
  background: url("../assets/logo.png") center center no-repeat;
  background-size: 100% auto;
  text-indent: -999999em;
}
.logo::before {
  content: "";
  height: 2px;
  width: 280px;
  background-color: #ffffff;
  position: absolute;
  left: -20px;
  top: 80px;
}
.tel {
  position: absolute;
  bottom: 0;
  right: 50px;
  text-align: right;
  color: #dbb960;
  line-height: 30px;
  font: 24px/30px tahoma;
  padding-top: 30px;
  background: url("../assets/icon.png") 52px 7px no-repeat;
  background-size: 15% auto;
}
.tel span {
  font: 16px/30px "microsoft yahei";
  vertical-align: 3px;
}
.nav {
  font-size: 16px;
  width: 500px;
  position: absolute;
  margin-left: -220px;
  left: 50%;
  bottom: 2px;
  text-align: "center";
}
.nav li {
  float: left;
  height: 30px;
  line-height: 30px;
}
.nav a {
  color: #dbb960;
  background-color: #ffffff;
  display: inline-block;
  line-height: 30px;
  height: 30px;
  border: 2px solid rgba(219, 185, 96, 0);
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  margin: 0 10px;
  padding: 0 20px;
  transition: all 0.3s linear 0s;
}
.nav a:hover {
  border: 2px solid rgba(219, 185, 96, 0.33);
  border-bottom: none;
}
.nav span {
  color: #ffffff;
  background-color: #dbb960;
  display: inline-block;
  line-height: 30px;
  height: 30px;
  border: 2px solid #dbb960;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  margin: 0 10px;
  padding: 0 20px;
  cursor: default;
}
</style>


