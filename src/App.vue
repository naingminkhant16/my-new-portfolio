<template>
  <div class="border border-info">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer class="text-center bg-dark p-2 small">
      Copy right @ 2022, Created by Naing Min Khant
    </footer>
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