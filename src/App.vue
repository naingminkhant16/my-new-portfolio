<template>
  <div class="border border-info">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  setup() {
    return {};
  },
  components: {
    NavBar
  }
}
</script>

<style >
@import "animate.css";
</style>