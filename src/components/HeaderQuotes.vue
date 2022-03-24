<template>
  <div class="header-quotes">
    <div class="quote-card">
      <div
        :class="quote.active ? 'contents' : 'hidden'"
        v-for="quote in headerQuotes"
        :key="quote.id"
      >
        <h2 class="quote__title">{{ quote.title }}</h2>
        <h4 class="quote__text">{{ quote.text }}</h4>
        <div class="quote__author">- {{ quote.author }}</div>
      </div>

      <div class="quote__arrows">
        <button class="quote__prev" @click="prevQuote">
          <font-awesome-icon icon="fa-solid fa-arrow-left" />
        </button>
        <button class="quote__next" @click="nextQuote">
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HeaderQuotes",
  computed: {
    ...mapGetters(["headerQuotes"]),
  },
  methods: {
    ...mapActions(["prevQuote", "nextQuote"]),
  },
  created() {
    setInterval(this.nextQuote, 3000);
  }
};
</script>

<style lang="scss" scoped>
.header-quotes {
  @apply px-10 sm:px-32 pt-10 pb-20 relative z-20 2xl:container 2xl:px-32 transition-all;

  .quote-card {
    @apply flex flex-col gap-5 w-full md:w-1/2 2xl:w-1/2 text-center md:text-left;
    .quote__title {
      font-family: "Nothing You Could Do", cursive;
      @apply text-saffron text-[38px] md:text-[40px] lg:text-[48px] whitespace-nowrap font-semibold;
    }

    .quote__text {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @apply  font-serif h-[160px] text-[26px] text-white font-semibold;
    }

    .quote__author {
      @apply text-[14px] text-osloGray italic;
    }
  }

  .quote__arrows {
    @apply flex gap-[1px] text-white text-[10px] self-center md:self-start;

    .quote__next,
    .quote__prev {
      @apply w-[29px] h-[29px] flex justify-center items-center bg-black/70 rounded-sm hover:bg-saffron transition-all;
    }
  }
}
</style>