<template>
  <div id="info">
    <vHeader />
    <vBanner />
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