<template>
  <header id="main-header">
    <HeaderNavbar />
  </header>
</template>

<script>
import HeaderNavbar from "./HeaderNavbar.vue";
export default {
  name: "MainHeader",
  components: {
    HeaderNavbar,
  },
};
</script>

<style lang='scss' scoped>
#main-header {
  background-image: url("../assets/img/hero-07-2x.jpg");
  @apply bg-center bg-cover relative;
}
</style>