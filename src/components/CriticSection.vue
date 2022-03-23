<template>
  <section class="critic-section">
    <div class="section-wrapper">
      <div class="section__header">
        <div class="section__header-text">
          <h1 class="section__title">What The Critics Say</h1>
          <h3 class="section__subtitle">Testimonials from around the world</h3>
        </div>
        <ActionButton text="Read All Testimonials" color="yellow" />
      </div>

      <div class="section__body">
        <div
          :class="[
            'critic-card',
            testimonial.id == 1 ? 'critic-card--big' : 'critic-card--small',
          ]"
          v-for="testimonial in criticTestimonials.slice(0, 3)"
          :key="testimonial.id"
        >
          <div class="critic-card__wrapper">
            <div class="critic-card__header">
              <h2 class="critic-card__title">{{ testimonial.title }}</h2>
            </div>
            <div class="critic-card__body">
              <h4 v-if="testimonial.subtitle">{{ testimonial.subtitle }}</h4>
              <p class="critic-card__text">{{ testimonial.text }}</p>
            </div>
            <div class="critic-card__footer">
              <img
                class="critic-card__company-logo"
                :src="testimonial.companyLogo"
                alt=""
              />
              <span class="critic-card__author-name">
                {{ testimonial.author }},
              </span>
              <span class="critic-card__company-name">
                {{ testimonial.company }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "CriticSection",
  components: {
    ActionButton,
  },
  computed: {
    ...mapGetters(["criticTestimonials"]),
  },
};
</script>

<style lang="scss" scoped>
.critic-section {
  .section-wrapper {
    @apply pt-8 pb-12 px-10 md:px-44 2xl:container 2xl:px-44;

    .section__header {
      @apply flex justify-between items-center gap-3 flex-wrap mb-5;

      .section__header-text {
        .section__title {
          @apply text-[30px] font-serif font-extralight;
        }

        .section__subtitle {
          @apply text-keppel text-[14px] uppercase font-semibold;
        }
      }
    }

    .section__body {
      &::after {
        @apply content-[''] clear-both block;
      }
      .critic-card {
        &.critic-card--big {
          @apply w-full lg:w-3/5 lg:pr-6 mb-8 lg:mb-0 float-left;

          .critic-card__wrapper {
            background-image: url("../assets/img/testimonial2-2x.jpg");
            @apply pt-16 pb-20 px-8 sm:px-14 bg-cover bg-center relative -z-20 text-white rounded-br-[60px] overflow-hidden;

            &:after {
              @apply content-[''] absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white/0 to-black -z-10;
            }

            .critic-card__header {
              @apply border-b border-[#323734];

              .critic-card__title {
                @apply text-[30px] font-serif mb-6;
              }
            }

            .critic-card__body {
              @apply py-6;

              .critic-card__subtitle {
                @apply text-[16px] font-semibold;
              }

              .critic-card__text {
                @apply text-[12px] sm:text-[14px] mt-6;
              }
            }

            .critic-card__footer {
              @apply flex items-center;

              .critic-card__company-logo {
                @apply w-5 mr-3;
              }

              .critic-card__author-name,
              .critic-card__company-name {
                @apply text-[12px] sm:text-[14px];
              }

              .critic-card__company-name {
                @apply text-keppel ml-1;
              }
            }
          }
        }

        &.critic-card--small {
          @apply w-full sm:w-1/2 px-3 lg:w-2/5 float-right mb-6 text-center;

          .critic-card__header,
          .critic-card__body {
            @apply bg-dawnPink px-8;
          }
          .critic-card__header {
            @apply pb-3 pt-6;
            .critic-card__title {
              @apply text-[20px] font-serif;
            }
          }

          .critic-card__body {
            @apply pb-7 mb-3;
            .critic-card__text {
              @apply text-[12px] text-osloGray;
            }
          }

          .critic-card__footer {
            @apply flex items-center;
            .critic-card__company-logo {
              @apply w-5 mr-3;
            }

            .critic-card__author-name,
            .critic-card__company-name {
              @apply text-[14px];
            }

            .critic-card__company-name {
                @apply ml-1;
              }
          }
        }
      }
    }
  }
}
</style>