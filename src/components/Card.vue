<template>
  <div class="item">
    <div class="box">
      <h2 class="title">{{infos.name}}</h2>
      <section v-for="(detail, key) in details" :key="'detail' + key" class="detail" :class="detail.text">
        <h3 class="tit">{{detail.title}}</h3>
        <ul class="dec">
            <li v-for="(dec, key) in detail.describe" :key="'dec' + key">{{dec}}</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
var Card = {
  name: "Card",
  props: ["datas"],
  data() {
    return {
      details: null,
      items: [],
      infos: {}
    };
  },
  created() {
    var { id, name, key, list, details, items } = this.datas;
    this.details = details;
    this.items = items;
    this.infos = { id, name, key, list };
  }
};
export default Card;
</script>

<style scoped>
.item {
  margin: 0 auto;
}
.box {
  background-color: #ffffff;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 5px 15px #666666;
}
.title {
  line-height: 30px;
  font-size: 18px;
  color: #666;
  padding-left: 10px;
  margin-bottom: 20px;
  position: relative;
}
.title span {
  font-size: 14px;
  margin-left: 10px;
}
.title::before {
  content: "";
  height: 20px;
  width: 4px;
  background-color: #dbb960;
  position: absolute;
  left: 0;
  top: 6px;
}
.detail {
    margin: 20px 0
}
.detail .tit {
    font-size: 14px;
    color: #dbb960;
    margin-right: 10px;
}
.detail .tit::after {
   content: ": "
}
</style>
