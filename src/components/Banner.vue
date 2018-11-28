<template>
<div class="banner">
  <Slider height="298px" animation="fade">
    <SliderItem><img src="../assets/banner.jpg" alt></SliderItem>
    <SliderItem><img src="../assets/banner1.jpg" alt></SliderItem>
    <SliderItem><img src="../assets/banner2.jpg" alt></SliderItem>
  </Slider>
</div>
</template>

<script>
import { Slider, SliderItem } from "vue-easy-slider"

var Banner = {
  name: "Banner",
  components: {
    Slider,
    SliderItem
  },
  data() {
    return {
      bannerList: []
    };
  }
};
export default Banner;
</script>

<style scoped>
.banner {
  width: 100%;
  height: 298px;
  overflow: hidden;
  position:relative;
  top:-2px
}
</style>
