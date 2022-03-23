<template>
  <section class="audiobook-section">
    <div class="wrapper">
      <figure class="thumb">
        <img src="../assets/img/audible-app-2x.png" alt="" />
      </figure>

      <div class="audiobook">
        <div class="audiobook__title">New Audiobook</div>
        <div class="audiobook__subtitle">
          No time to read? No problem. Listen to it
        </div>
        <div class="audiobook__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          impedit quasi temporibus quod perspiciatis?
        </div>
        <ul class="audiobook__platform-list">
          <li
            v-for="platform in audiobookPlatforms"
            :key="platform.id"
            class="audiobook__platform"
          >
            <img v-if="platform.audiobook" :src="platform.logo" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AudiobookSection",
  computed: {
    ...mapGetters(["audiobookPlatforms"]),
  },
};
</script>

<style lang="scss" scoped>
.audiobook-section {
  background-image: url("../assets/img/banner.jpg");
  @apply bg-no-repeat bg-cover relative;

  &:after {
    @apply content-[''] absolute top-0 bottom-0 left-0 right-0 bg-black/30  z-10;
  }

  .wrapper {
    @apply px-10 pt-10 md:px-44 2xl:container 2xl:px-64 flex items-center justify-center flex-wrap-reverse relative z-20;

    .thumb {
      @apply w-2/3 lg:w-1/2 shrink-0;
    }

    .audiobook {
      @apply text-center flex flex-col items-center px-4 pb-4 mb-6 lg:mb-0 w-full lg:w-1/2 shrink-0;

      .audiobook__title {
        @apply text-white text-[30px] font-serif font-extralight mb-3;
      }

      .audiobook__subtitle {
        @apply text-saffron text-[14px] uppercase font-semibold mb-5;
      }

      .audiobook__description {
        @apply text-pewter lg:text-scorpion text-[15px] mb-5;
      }

      .audiobook__platform-list {
        @apply flex gap-5 justify-center;

        .audiobook__platform {
          @apply shrink-0;
          img {
            @apply h-[25px] xl:h-[30px];
          }
        }
      }
    }
  }
}
</style>