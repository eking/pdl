<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
html,
body,
div,
p,
ul,
li,
h1,
h2,
h3,
a,
span {
  font-family: "Microsoft YaHei";
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
}

@-webkit-keyframes 'menu1' {
  0% {
    -webkit-transform: scale(1, 1);
    -webkit-transform-origin: 40% 40%;
  }
  50% {
    -webkit-transform: scale(1.12, 1.4);
    -webkit-transform-origin: 40% 40%;
  }
  100% {
    -webkit-transform: scale(1, 1);
    -webkit-transform-origin: 40% 40%;
  }
}

@-webkit-keyframes 'menu2' {
  0% {
    -webkit-transform: scale(1, 1);
    -webkit-transform-origin: 40% 60%;
  }
  50% {
    -webkit-transform: scale(1.12, 1.4);
    -webkit-transform-origin: 40% 60%;
  }
  100% {
    -webkit-transform: scale(1, 1);
    -webkit-transform-origin: 40% 60%;
  }
}

</style>
