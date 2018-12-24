<template>
  <div id="info">
    <vHeader />
    <vBanner pics="hide" />
    <vItem />
    <vFooter />
    <vSider />
  </div>
</template>

<script>
import vHeader from "../components/Header";
import vBanner from "../components/Banner";
import vItem from "../components/Item";
import vFooter from "../components/Footer";
import vSider from "../components/Sider";

export default {
  name: "info",
  components: {
    vHeader,
    vBanner,
    vItem,
    vFooter,
    vSider
  }
};
</script>

<style>
html, body {
  font-family: "Microsoft YaHei";
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
div, p, ul, li, h1, h2, h3, dl, dt, dd {
  margin: 0;
  padding: 0;
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