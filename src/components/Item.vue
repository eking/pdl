<template>
    <div class="item">
      <dl class="box">
          <dt class="tit">{{tit}}<span v-if="single">{{paragraph.name}}</span></dt>
          <dd v-if="paragraph.pic" class="img">
              <img :src="paragraph.pic" alt="">
          </dd>
          <dd class="name-tit" v-if="paragraph.subList"><b>{{paragraph.name}}</b><span>{{paragraph.subName}}</span></dd>
          <dd class="name-list" v-if="paragraph.subList">
              <b v-for="(sub, key) in paragraph.subList" :key="'b' + key">{{sub}}</b>
          </dd>
          <dd v-for="(decs, key) in paragraph.decList" :key="'dd' + key" class="des">
              <p v-if="decs.tit" class="no-indent"><b class="t">{{decs.tit}}</b>{{decs.dec[0]}}</p>
              <p v-else v-for="(dec, key) in decs.dec" :key="'p' + key">
                  <img v-if="paragraph.pics && paragraph.pics[key]" class="img" :class="{'img-r':key%2}" :src="paragraph.pics[key]"/>
                  {{dec}}
              </p>
          </dd>
      </dl>
    </div>
</template>

<script>
var Item = {
  name: "Item",
  props: ["paragraph", "tit", "single"],
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
}
.box {
    background-color: #ffffff;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0 5px 15px #666666;
}
.box dd {
    margin-bottom: 10px;
}
.box b {
    color: #dbb960;
}
.tit {
    line-height: 30px;
    font-size: 18px;
    color: #666;
    padding-left: 10px;
    margin-bottom: 20px;
    position: relative;
}
.tit span {
    font-size: 14px;
    margin-left: 10px;
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
.img-full {
    width: 100%;
}
.img {
    float: left;
    width: 30%;
    min-width: 200px;
    margin: 0 20px 20px 0;
}
.img-r {
    float: right;
    margin: 0 0 20px 20px;
}
.img img {
    width: 100%
}
.des {
    color: #666666;
    text-indent: 2rem;
}
.des p {
   text-indent: 2rem;
   font-size: 14px;
   line-height: 26px;
   margin-bottom: 10px;
}
.des p::after {
    content: "";
    display: block;
    clear: both;
}
.des .no-indent {
    text-indent: 0;
}
.des .t::after {
   content: ": "
}
.name-tit b {
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
}
.name-tit span {
    font-size: 14px;
    color: #dbb960;
}
.name-list b{
    display: block;
    line-height: 30px
}
.box::after {
    content: "";
    display: block;
    clear: both;
}
</style>
