<template>
  <header id="main-header">
    <HeaderNavbar />

    <HeaderQuotes />
  </header>
</template>

<script>
import HeaderNavbar from "./HeaderNavbar.vue";
import HeaderQuotes from "./HeaderQuotes";

export default {
  name: "MainHeader",
  components: {
    HeaderNavbar,
    HeaderQuotes
  },
};
</script>

<style lang='scss' scoped>
#main-header {
  background-image: url("../assets/img/hero-07-2x.jpg");
  @apply bg-center bg-cover relative;

  &:after {
    @apply content-[''] absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white/10 to-black  z-10;
  }

  &::before {
    @apply content-[''] absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-l from-white/0 to-black/50  z-10;
  }
}
</style>