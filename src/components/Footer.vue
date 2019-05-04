<template>
  <div id="footer" class="footer">
    <p class="address">{{ add.name }} : {{ add.text }}</p>
    <p class="telphone">{{ tel.name }} : {{ tel.number }}</p>
    <p class="copyright">Copyright &copy; 2019 潘多拉高端医疗美容医院</p>
  </div>
</template>

<script>
import Contact from "../data/infomation/contact";
var Footer = {
  name: "Footer",
  data() {
    return {
      add: "",
      tel: ""
    };
  },
  created() {
    const { add, tel } = Contact.contacts;
    this.add = add;
    this.tel = tel;
  },
};
export default Footer;
</script>

<style scoped>
.footer {
  background-color: #000000;
  border-top: 2px solid #dbb960;
  width: 100%;
  padding: 30px 0;
  text-align: center
}
.footer p {
  line-height: 40px;
  font-size: 14px;
  color: #ffffff;
}
.footer .copyright {
  font-size: 12px;
  color: #ccc;
}
</style>
