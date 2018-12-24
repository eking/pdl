<template>
    <div class="item">
      <dl class="box">
          <dt class="title"></dt>
          <dd class="img"></dd>
          <dd class="des"></dd>
      </dl>
    </div>
</template>

<script>
var Item = {
  name: "Item",
  data() {
    return {
      itemData: []
    };
  },
  created() {
      
  }
};
export default Item;
</script>

<style scoped>
.item {
  width: 100%;
  background-color: rgba(219, 185, 96, 0.33);
  padding: 50px;
}
.box::after {
    content: "";
    display: block;
    height: 2px;
    background-color: #dbb960;
    clear: both;
}
</style>
