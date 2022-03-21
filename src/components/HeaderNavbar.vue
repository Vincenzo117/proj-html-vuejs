<template>
  <div class="header-navbar">
    <figure class="logo">
      <img :src="logoSrc" alt="" />
    </figure>
    <nav class="navbar">
      <ul class="navbar__list">
        <li
          class="navbar__list-item"
          v-for="item in navbarItems"
          :key="item.id"
        >
          <a
            :class="['navbar__item-anchor', item.active ? 'active' : '']"
            :href="item.href"
          >
            {{ item.name }}
            <font-awesome-icon v-if="item.icon" :icon="item.icon" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderNavbar",
  computed: {
    ...mapGetters(["logoSrc", "navbarItems"]),
  },
};
</script>

<style lang='scss' scoped>
.header-navbar {
  @apply flex justify-between items-center gap-5 px-10 md:px-20 2xl:container;

  .logo {
    @apply h-24 aspect-square;
  }

  .navbar {
    @apply h-24 flex text-white text-[12px] font-semibold;

    .navbar__list {
      @apply h-9 flex gap-6;

      .navbar__list-item {
        @apply h-full;

        .navbar__item-anchor {
          @apply h-full flex items-end whitespace-nowrap transition-all;

          &.active {
            @apply border-t-[3px] border-saffron text-saffron;
          }

          &:hover {
              @apply text-saffron;
          }
        }
      }
    }
  }
}
</style>