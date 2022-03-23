<template>
  <section class="more-about">
    <h2 class="more-about__title">More About Damon Vaughn</h2>
    <p class="more-about__text">
      Damon Vaughn is a professor of psychology at the University of Toronto, a
      clinical psychologist and the author of the multi-million copy bestseller
      "The story of my life".
    </p>
    <ActionButton text="Meet the Author" color="green" />
  </section>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
  name: "MoreAboutSection",
  components: {
    ActionButton,
  },
};
</script>

<style lang="scss" scoped>
.more-about {
  @apply py-20 flex flex-col justify-center items-center text-center px-10 md:px-44 2xl:container 2xl:px-44;

  .more-about__title {
    font-family: "Nothing You Could Do", cursive;
    @apply text-saffron text-[38px] md:text-[42px] font-semibold mb-3;
  }

  .more-about__text {
    @apply text-[18px] mb-8;
  }
}
</style>