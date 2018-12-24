<template>
  <div id="home">
    <vHeader />
    <vBanner />
    <vMenu />
    <vItem />
    <vFooter />
    <vSider />
  </div>
</template>

<script>
import vHeader from "../components/Header";
import vBanner from "../components/Banner";
import vMenu from "../components/Menu";
import vItem from "../components/Item";
import vFooter from "../components/Footer";
import vSider from "../components/Sider";

export default {
  name: "home",
  components: {
    vHeader,
    vBanner,
    vMenu,
    vItem,
    vFooter,
    vSider
  }
};
</script>