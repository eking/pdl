<template>
  <div id="app">
    <Header tel="800-820-98765" />
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
html, body {
  font-family: "Microsoft YaHei";
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
div, p, ul, li, h1, h2, h3 {
  margin: 0;
  padding: 0;
}
ul, li {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  /* background-color: antiquewhite; */
}

@keyframes menu1 {
  0% {
    transform: scale(1, 1);
    transform-origin: 40% 40%;
  }
  50% {
    transform: scale(1.12, 1.4);
    transform-origin: 40% 40%;
  }
  100% {
    transform: scale(1, 1);
    transform-origin: 40% 40%;
  }
}
@keyframes menu2 {
  0% {
    transform: scale(1, 1);
    transform-origin: 40% 60%;
  }
  50% {
    transform: scale(1.12, 1.4);
    transform-origin: 40% 60%;
  }
  100% {
    transform: scale(1, 1);
    transform-origin: 40% 60%;
  }
}
</style>
