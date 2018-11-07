<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
html, body, div, p, ul, li, h1, h2, h3, a, span {
  margin: 0;
  padding: 0;
}
#app {
}
</style>
