<template>
  <div id="app">
    <vHeader/>
    <vBanner/>
    <vMenu/>
    <router-view></router-view>
    <vFooter/>
    <vSider/>
  </div>
</template>

<script>
import vHeader from "./components/Header";
import vBanner from "./components/Banner";
import vMenu from "./components/Menu";
import vFooter from "./components/Footer";
import vSider from "./components/Sider";

export default {
  name: "app",
  components: {
    vHeader,
    vBanner,
    vMenu,
    vFooter,
    vSider
  },
  watch: {
    $route(to, from) {
      console.log(to);
      if (to.name === "home") window.scrollTo(0, 0);
      else window.scrollTo(0, 583);
    }
  }
};
</script>

<style>
html,
body {
  font-family: "Microsoft YaHei";
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
div, p, ul, li, h1, h2, h3, dl, dt, dd, b, strong, i {
  margin: 0;
  padding: 0;
  font-weight: normal
}
ul, li {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  background-color: #eeeeee;
}
#header {
  z-index: 198;
}
#sider {
  z-index: 999;
}
#menu {
  z-index: 199;
}
@keyframes flicker1 {
  0% {
    transform: scale(1, 1);
    transform-origin: 40% 40%;
  }
  50% {
    transform: scale(1.12, 1.4);
    transform-origin: 40% 40%;
  }
  100% {
    transform: scale(1, 1);
    transform-origin: 40% 40%;
  }
}
@keyframes flicker2 {
  0% {
    transform: scale(1, 1);
    transform-origin: 40% 60%;
  }
  50% {
    transform: scale(1.12, 1.4);
    transform-origin: 40% 60%;
  }
  100% {
    transform: scale(1, 1);
    transform-origin: 40% 60%;
  }
}
</style>
