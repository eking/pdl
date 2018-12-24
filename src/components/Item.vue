<template>
    <div class="item">
      <dl class="box">
          <dt class="tit">活动专区</dt>
          <dd class="img">
              <img src="../assets/about.jpg" alt="">
          </dd>
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
  padding: 0 100px;
  color: #dbb960
}
.box {
    background-color: #ffffff;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0 5px 15px #666666;
}
.tit {
    line-height: 30px;
    font-size: 18px;
    color: #666;
    padding-left: 10px;
    margin-bottom: 20px;
    position: relative;
}
.tit::before {
    content: "";
    height: 20px;
    width: 4px;
    background-color: #dbb960;
    position: absolute;
    left: 0;
    top: 6px
}
.img {
    float: left;
    width: 30%;
    min-width: 200px;
}
.img img {
    width: 100%
}
.des {
    float: left;
    margin-left: 20px;
}
.box::after {
    content: "";
    display: block;
    clear: both;
}
</style>
