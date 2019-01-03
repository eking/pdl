<template>
  <div id="detail">
    <Subject :datas="datas" />
  </div>
</template>

<script>
import Subject from "../components/Subject";
import datas from "../data/product/liposuction";

export default {
  name: "detail",
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
      console.log(to.params.name);
    }
  }
};
</script>