<template>
    <div class="item">
      <div class="box">
          <h2 class="title">{{infos.name}}</h2>
      </div>
    </div>
</template>

<script>
var Item = {
  name: "Item",
  props: ["datas"],
  data() {
    return {
      details: null,
      items: [],
      infos: {}
    };
  },
  created() {
      var { id, name, key, list, details, items } = datas;
      this.details = details;
      this.items = items;
      this.infos = { id, name, key, list };
  }
};
export default Item;
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
</style>
