<template>
  <section id="upcoming-events">
    <div class="section-wrapper">
      <div class="section__header">
        <h1 class="section__title">Upcoming Events</h1>
        <h3 class="section__subtitle">Meet The Author In Person</h3>
      </div>
      <div class="section__body">
        <div class="event-card" v-for="event in upcomingEvents" :key="event.id">
          <figure class="event-card__thumb">
            <img :src="event.thumb" alt="" />
          </figure>
          <div class="event-card__text">
            <h4 class="event-card__title">{{ event.name }}</h4>
            <p class="event-card__description">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UpcomingEventsSection",
  computed: {
    ...mapGetters(["upcomingEvents"]),
  },
};
</script>

<style lang="scss" scoped>
#upcoming-events {
  @apply bg-dawnPink;

  .section-wrapper {
    @apply px-10 pt-9 pb-12 sm:px-32 2xl:container 2xl:px-32;

    .section__header {
      @apply text-center pb-8;

      .section__title {
        @apply text-[30px] font-serif font-extralight mb-2;
      }

      .section__subtitle {
        @apply text-saffron text-[14px] uppercase font-semibold;
      }
    }

    .section__body {
      @apply lg:grid grid-cols-3 gap-4;

      .event-card {
        @apply bg-white mb-8 lg:mb-0;

        .event-card__text {
            @apply p-7 text-center;

            .event-card__title {
                @apply text-[15px] font-semibold pb-3 border-b border-osloGray/10 mb-3;
            }

            .event-card__description {
                @apply text-[12px] text-osloGray;
            }
        }
      }
    }
  }
}
</style>