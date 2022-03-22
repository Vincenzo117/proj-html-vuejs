<template>
  <section class="platforms-banner">
    <div class="wrapper">
      <ul class="platforms__list">
        <li
          class="platforms__item"
          v-for="platform in platforms"
          :key="platform.id"
        >
          <img :src="platform.tanLogo" alt="" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PlatformsBanner",
  computed: {
    ...mapGetters(["platforms"]),
  },
};
</script>

<style lang="scss" scoped>
.platforms-banner {
  @apply bg-dawnPink;

  .wrapper {
    @apply px-10 py-8 md:px-44 2xl:container 2xl:px-64;

    .platforms__list {
      @apply grid grid-cols-4 gap-4 lg:gap-14 xl:gap-24 2xl:gap-32;
    }
  }
}
</style>