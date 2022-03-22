<template>
  <main>
    <MoreAboutSection />

    <PlatformsBanner />

    <AudiobookSection />

    <NewsletterSubscription />
  </main>
</template>

<script>
import MoreAboutSection from "./MoreAboutSection.vue";
import AudiobookSection from "./AudiobookSection.vue";
import PlatformsBanner from "./PlatformsBanner.vue";
import NewsletterSubscription from "./NewsletterSubscription.vue";


export default {
  name: "MainContent",
  components: {
    MoreAboutSection,
    AudiobookSection,
    PlatformsBanner,
    NewsletterSubscription
  },
};
</script>

<style lang='scss' scoped>
</style>