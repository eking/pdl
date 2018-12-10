<template>
    <div class="menu">
        <ul class="list">
            <li v-for="(menu, key) in menuList" :key="key">
                <h3 class="title">{{menu.name}}</h3>
                <div class="box">
                    <a v-for="(item, i) in menu.list" :key="i" :href="'#/' + menu.item + '/' + i">{{item}}</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Products from "../data/product";
var Menu = {
  name: "Menu",
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
        item: item.key,
        list: item.list
      });
    });
    this.menuList = menus;
  }
};
export default Menu;
</script>

<style scoped>
.menu {
    padding: 0 28px;
    background-color: #000000;
    color: #ffffff;
    border-bottom: #dbb960 2px solid
}
.menu::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
}
.list {
    float: left;
}
.list li {
    float: left;
    margin-right: 20px;
    position: relative;
}
.list .title {
    font-size: 16px;
    padding: 0 10px;
    line-height: 50px;
    cursor: pointer;
}
.list .box {
    position: absolute;
    top: -50px;
    left: 0;
    height: 50px;
    line-height: 50px;
    white-space:nowrap;
    display: none
}
.list li:hover .title {
    color: #dbb960
}
.list li:hover .box {
    display: block
}
</style>
