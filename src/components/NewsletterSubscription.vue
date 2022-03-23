<template>
  <section class="newsletter-subscription">
    <div class="wrapper">
      <h2 class="section__title">Subscribe To My Newsletter</h2>
      <div class="section__subtitle">Be Notified Book Signing Tour Dates</div>
      <div class="section__form">
        <input
          class="section__input"
          type="email"
          placeholder="Insert your email"
        />
        <ActionButton text="Subscribe" color="green" />
      </div>
      <div class="section__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse
        ab!
      </div>
    </div>
  </section>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
  name: "NewsletterSubscription",
  components: {
    ActionButton,
  },
};
</script>

<style lang="scss" scoped>
.newsletter-subscription {
  background-image: url("../assets/img/banner-2.jpg");
  @apply bg-no-repeat bg-cover relative;

  &:after {
    @apply content-[''] absolute top-0 bottom-0 left-0 right-0 bg-black/50  z-10;
  }

  .wrapper {
    @apply pt-16 pb-20 px-16 m-auto flex flex-col justify-center items-center md:px-0 md:w-[350px] lg:w-[450px] text-center relative z-20;

    .section__title {
      @apply text-white text-[30px] font-serif font-extralight mb-3;
    }

    .section__subtitle {
      @apply text-saffron text-[14px] font-semibold uppercase mb-5;
    }

    .section__form {
      @apply flex gap-3 mb-4;

      .section__input {
        @apply rounded px-3;
      }
    }

    .section__description {
        @apply text-scorpion text-[15px];
    }
  }
}
</style>