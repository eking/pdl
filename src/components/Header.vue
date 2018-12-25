<template>
  <div id="header" class="header">
    <a href="/" class="logo">潘多拉</a>
    <p class="tel">
      <span>{{ tel.name }}:</span>
      {{ tel.number }}
    </p>
    <ul class="nav">
      <li v-for="(nav, key) in navList" :key="key">
        <span v-if="nav.href === path">{{nav.name}}</span>
        <router-link v-else :to="nav.href">{{nav.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Contact from "../data/infomation/contact";
import Infomation from "../data/infomation";

var Header = {
  name: "Header",
  props: ["on"],
  data() {
    return {
      tel: "",
      navList: [],
      path: "/"
    };
  },
  created() {
    this.path = this.$route.fullPath;
    this.tel = Contact.contacts.tel;
    let navs = [];
    Infomation.forEach(item => {
      navs.push({
        name: item.name,
        href: "/" + item.key
      });
    });
    this.navList = navs;
  },
  watch: {
    $route(to, from) {
      this.path = to.fullPath;
    }
  }
};
export default Header;
</script>

<style scoped>
.header {
  height: 80px;
  width: 100%;
  background-color: #000000;
  border-bottom: 2px solid #dbb960;
  position: relative;
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
  background-color: rgba(0, 0, 0, 0.8);
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
  background-color: #000000;
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
