<template>
    <div id="menu" class="menu">
        <ul class="list">
            <li v-for="(menu, key) in menuList" :key="key">
                <h3 class="title">{{menu.name}}</h3>
                <div class="box">
                    <a v-for="(item, i) in menu.list" :key="i" :href="'/' + menu.item + '/' + i">{{item}}</a>
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
    position: sticky;
    top: 0;
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
    width: 1000px;
    margin: 0 auto;
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
    padding: 0;
    position: absolute;
    float: left;
    top: 48px;
    left: -4px;
    background-color: rgba(0, 0, 0, 0.8);
    border: #000000 2px solid;
    border-bottom: none;
    display: none
}
.list .box a{
    display: block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    white-space: nowrap;
    text-align: left;
    padding:0 10px;
    color: #ffffff
}
.list .box a:hover {
    background-color: #000000;
    color: #dbb960
}
.list li:hover .title {
    color: #dbb960
}
.list li:hover .box {
    display: block
}
</style>
