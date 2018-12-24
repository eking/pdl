<template>
    <div class="item">
      <dl class="box">
          <dt class="title">活动专区</dt>
          <dd class="img">活动专区</dd>
          <dd class="des">活动专区</dd>
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
  background-color: rgba(219, 185, 96, 0.33);
  padding: 50px 100px;
}
.box::after {
    content: "";
    display: block;
    height: 2px;
    background-color: #dbb960;
    clear: both;
}
</style>
