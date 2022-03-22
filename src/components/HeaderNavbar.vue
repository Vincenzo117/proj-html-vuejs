<template>
  <div :class="['header-navbar' , mobileMenu ? 'mb-36' : '']">
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

    <nav class="mobile-nav">
      <button
        :class="['hamburger-icon', mobileMenu ? 'text-saffron' : '']"
        @click="mobileMenu ? (mobileMenu = false) : (mobileMenu = true)"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
      <ul :class="['navbar__list', this.mobileMenu ? 'block' : 'hidden']">
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
  data() {
    return {
      mobileMenu: false,
    };
  },
  computed: {
    ...mapGetters(["logoSrc", "navbarItems"]),
  },
};
</script>

<style lang='scss' scoped>
.header-navbar {
  @apply flex justify-between items-center gap-5 pl-2 pr-10 md:px-20 2xl:container relative z-20;

  .logo {
    @apply h-24 aspect-square;
  }

  .navbar {
    @apply h-24 text-white text-[12px] font-semibold hidden md:block;

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

  .mobile-nav {
    @apply grow md:hidden text-white text-[18px] font-semibold text-right relative;

    .hamburger-icon {
      @apply hover:text-saffron transition-all;
    }
    .navbar__list {
      @apply text-center absolute top-0 right-1/2;
    }
    .navbar__list-item {
      @apply text-[16px] hover:text-saffron transition-all;

      .navbar__item-anchor {
        &.active {
          @apply text-saffron;
        }
      }
    }
  }
}
</style>