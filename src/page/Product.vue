<template>
  <div id="product">
    <Subject :datas="datas" />
  </div>
</template>

<script>
import Subject from "../components/Subject";
import datas from "../data/product/liposuction";

export default {
  name: "product",
  components: {
    Subject
  },
  data() {
    return {
      details: []
    };
  },
  created() {
    this.datas = datas;
  },
  watch: {
    $route(to, from) {
      console.log(to.params.id);
    }
  }
};
</script>