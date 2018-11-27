<template>
  <div class="menu">
    <a v-for="(menu, key) in menuList" :key="key" :href="menu.href">
      <span>{{menu.name}}</span>
    </a>
  </div>
</template>

<script>
import Products from "../data/product";

var Menu = {
  name: "Menu",
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
    Products.forEach(item => {
      menus.push({
        name: item.name,
        href: "#/" + item.key
      });
    });
    this.menuList = menus;
  }
};
export default Menu;
</script>

<style scoped>
.menu {
  position: absolute;
  z-index: 8;
  left: 28px;
  top: 78px;
  width: 280px;
  border: 2px solid #dbb960;
  border-top: none;
  background: rgba(255, 255, 255, 0.8);
  padding: 70px 0 10px;
}
.menu a {
  color: #ffffff;
  background-color: #dbb960;
  display: inline-block;
  line-height: 30px;
  height: 30px;
  width: 100px;
  text-align: center;
  border: 2px solid #dbb960;
  border-radius: 4px;
  margin: 10px 13px 10px 20px;
  position: relative;
}
.menu span::after,
.menu span::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -2px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 2px solid #dbb960;
  border-radius: 4px;
  opacity: 0;
}
.menu a:hover span::after,
.menu a:hover span::before {
  opacity: 0.2;
}
.menu a:hover span::after {
  animation: "flicker1" 0.5s linear infinite;
}
.menu a:hover span::before {
  animation: "flicker2" 0.75s linear infinite;
}
</style>
