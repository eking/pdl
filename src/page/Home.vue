<template>
  <div id="home">
    <div v-for="item in infoList" :id="item.key" :key="item.key">
      <vItem v-for="(o, i) in item.datas" :key="item.key+i" :paragraph="o" :tit="item.title" :single="item.single"/>
    </div>
  </div>
</template>

<script>
import vItem from "../components/Item";
import infos from "../data/infomation";

export default {
  name: "home",
  components: {
    vItem
  },
  data() {
    return {
      infoList: []
    };
  },
  created() {
    this.infoList = infos.filter(o => o.paragraph).map(item => {
      var info = {};
      info.key = item.key;
      info.title = item.name;
      info.datas = item.paragraph;
      info.single = item.paragraph && item.paragraph.length < 2;
      return info;
    });
    console.log(this.infoList);
  }
};
</script>