<template>
  <footer id="main-footer">
    <figure class="logo">
      <img :src="logoSrc" alt="" />
    </figure>

    <div class="footer-wrapper">
      <div class="about-me-widget">
        <h3 class="widget__title">{{ aboutMe.title }}</h3>
        <p class="widget__content">{{ aboutMe.content }}</p>
      </div>

      <ul class="useful-links-widget">
        <h3 class="widget__title">{{ usefulLinksList.title }}</h3>
        <li
          class="widget__list-item"
          v-for="item in usefulLinksList.items"
          :key="item.id"
        >
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
          <a :href="item.href">{{ item.name }}</a>
        </li>
      </ul>

      <div class="contact-info-widget">
        <h3 class="widget__title">{{ contactInfo.title }}</h3>
        <div class="widget__item">{{ contactInfo.address }}</div>
        <div class="widget__item">Phone: {{ contactInfo.phone.landline }}</div>
        <div class="widget__item">Mobile: {{ contactInfo.phone.mobile }}</div>
        <div class="widget__item">Email: {{ contactInfo.email }}</div>
        <ul class="widget__social-list">
          <li
            class="widget__social-list-item"
            v-for="item in contactInfo.social"
            :key="item.id"
          >
            <a :href="item.href"><font-awesome-icon :icon="item.icon" /></a>
          </li>
        </ul>
      </div>
      <div class="copyright-text">
        Made by
        <a href="https://github.com/Vincenzo117">Vincenzo</a> 
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MainFooter",
  computed: {
    ...mapGetters(["logoSrc", "aboutMe", "usefulLinksList", "contactInfo"]),
  },
};
</script>

<style lang='scss' scoped>
#main-footer {
  background-image: url("../assets/img/footer-3.jpg");
  @apply bg-cover bg-top relative text-white/80;

  .logo {
    @apply hidden md:block absolute w-28 top-20 left-10;
  }

  .footer-wrapper {
    @apply flex justify-between flex-wrap gap-2 pt-20 pb-9 px-10 md:px-60 2xl:container 2xl:px-60;

    .widget__title {
      @apply text-[22px] font-serif mb-7;
    }

    .about-me-widget {
      @apply w-[200px] mb-6;
      .widget__content {
        @apply text-[14px];
      }
    }

    .useful-links-widget {
      @apply w-[200px] mb-6;
      .widget__list-item {
        @apply text-[7px] flex items-center font-semibold gap-4 mb-2;
        a {
          @apply text-[14px] hover:text-saffron transition-all;
        }
      }
    }

    .contact-info-widget {
      @apply w-[200px] mb-6;
      .widget__item {
        @apply text-[14px] mb-3;
      }
      .widget__social-list {
        @apply flex items-center gap-4 pt-2;
        a {
          @apply hover:text-saffron transition-all;
        }
      }
    }

    .copyright-text {
      @apply text-[13px] text-scorpion mt-9 text-center self-center w-full;

      a {
        @apply text-white hover:text-saffron transition-all;
      }
    }
  }
}
</style>
