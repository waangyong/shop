<template>
  <div id="index">
    <router-view />
    <MainTabbar class="MainTabbar" />
  </div>
</template>

<script>
import MainTabbar from "../components/content/mainTabbar/MainTabBar.vue";
import home from "./home/Home";
export default {
  name: "index",
  components: {
    MainTabbar,
    home,
  },
};
</script>

<style>
/* @import "assets/css/base.css";

/* .MainTabbar {
    z-index: 10;
  } */
</style> 
