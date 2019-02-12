<template>
  <div id="product">
    <Card :datas="datas" />
  </div>
</template>

<script>
import Card from "../components/Card";
import datas from "../data/product/liposuction";

export default {
  name: "product",
  components: {
    Card
  },
  data() {
    return {
      details: []
    };
  },
  created() {
    this.datas = datas;
  }..
};
</script>