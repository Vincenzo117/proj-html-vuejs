<template>
  <section id="find-out-more">
    <div class="section-wrapper">
      <div class="section__header">
        <h1 class="section__title">Dig A Little Deeper Into Damon Vaughn</h1>
        <h3 class="section__subtitle">
          Find Out More About The Author Himself
        </h3>
      </div>
      <div class="section__body">
        <div
          class="find-out-card"
          v-for="item in findOutMore"
          :key="item.id"
          :style="`background-image: url(${item.thumb})`"
        >
          <div class="find-out-card__text">
            <h4 class="find-out-card__title"> <a :href="item.href">{{ item.title }}</a></h4>
            <p class="find-out-card__description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FindOutMoreSection",
  computed: {
    ...mapGetters(["findOutMore"]),
  },
};
</script>

<style lang="scss">
#find-out-more {
  .section-wrapper {
    @apply px-10 md:px-44 2xl:container 2xl:px-44 pt-9 pb-12;

    .section__header {
      @apply text-center pb-8;

      .section__title {
        @apply text-[30px] font-serif font-extralight mb-2;
      }

      .section__subtitle {
        @apply text-keppel text-[14px] uppercase font-semibold;
      }
    }

    .section__body {
      @apply lg:grid grid-cols-3 gap-8 xl:gap-12;

      .find-out-card {
        @apply mb-8 lg:mb-0 h-[400px] sm:h-[450px] lg:h-[350px] xl:h-[450px] bg-cover bg-center rounded-br-[30px] relative -z-20 overflow-hidden flex flex-col-reverse;

        &:after {
          @apply content-[''] absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white/0 to-black/70 -z-10;
        }

        .find-out-card__text {
          @apply p-12 lg:p-10 xl:p-12 text-center;

          .find-out-card__title {
            @apply text-[20px] text-white mb-6 relative;
            &:after {
                @apply content-[''] block h-[1px] w-8 bg-osloGray/80 absolute -bottom-2 left-1/2 -translate-x-1/2;
            }
          }

          .find-out-card__description {
            @apply text-[14px] text-saffron;
          }
        }
      }
    }
  }
}
</style>