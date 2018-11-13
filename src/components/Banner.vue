<template>
<div class="banner">
    <img src="../assets/banner.jpg" alt="">
</div>
</template>

<script>
var Banner = {
  name: "Banner",
  data() {
    return {
      BannerList: []
    };
  },
  created() {}
};
export default Banner;
</script>

<style scoped>
.banner {
  width: 100%;
  height: 294px;
  overflow: hidden;
}
</style>
