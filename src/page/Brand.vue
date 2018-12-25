<template>
  <div id="brand">
    <vItem v-for="(item, key) in datas" :key="key" :paragraph="item" :tit="title" :single="single" />
  </div>
</template>

<script>
import vItem from "../components/Item";
import itemData from "../data/infomation/brand";

export default {
  name: "brand",
  components: {
    vItem
  },
  data() {
    return {
      title: "",
      single: false,
      datas: []
    };
  },
  created() {
    this.title = itemData.name;
    this.datas = itemData.paragraph;
    this.single = itemData.paragraph.length < 2;
  }
};
</script>