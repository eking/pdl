<template>
  <div class="wrap">
    <div class="menu">
      <a v-for="(menu, key) in menuList" :key="key" :href="menu.href">
        <span>{{menu.name}}</span>
      </a>
    </div>
    <div class="banner">
      <Slider height="500px" animation="fade">
        <SliderItem v-for="(banner, key) in bannerList" :key="key">
          <img :src="banner" alt>
        </SliderItem>
      </Slider>
    </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider";
import Products from "../data/product";
import Banner0 from "../assets/banner.jpg";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.jpg";
import Banner4 from "../assets/banner4.jpg";
import Banner5 from "../assets/banner5.jpg";
import Banner6 from "../assets/banner6.jpg";
import Banner7 from "../assets/banner7.jpg";
import Banner8 from "../assets/banner8.jpg";
var Banner = {
  name: "Banner",
  components: {
    Slider,
    SliderItem
  },
  data() {
    return {
      bannerList: [
        Banner0,
        Banner1,
        Banner2,
        Banner3,
        Banner4,
        Banner5,
        Banner6,
        Banner7,
        Banner8,
      ],
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
export default Banner;
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 500px;
  position: relative;
}
.banner {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
}
.banner img {
  width: 100%
}
.menu {
  position: absolute;
  z-index: 100;
  left: 28px;
  top: -2px;
  width: 280px;
  border: 2px solid #dbb960;
  background: rgba(0, 0, 0, 0.8);
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
