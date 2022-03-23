<template>
  <main>
    <MoreAboutSection />

    <PlatformsBanner />

    <AudiobookSection />

    <CriticSection />

    <NewsletterSubscription />

    <RecentArticlesSection />
  </main>
</template>

<script>
import MoreAboutSection from "./MoreAboutSection.vue";
import AudiobookSection from "./AudiobookSection.vue";
import PlatformsBanner from "./PlatformsBanner.vue";
import NewsletterSubscription from "./NewsletterSubscription.vue";
import CriticSection from "./CriticSection.vue";
import RecentArticlesSection from "./RecentArticlesSection.vue";


export default {
  name: "MainContent",
  components: {
    MoreAboutSection,
    AudiobookSection,
    PlatformsBanner,
    NewsletterSubscription,
    CriticSection,
    RecentArticlesSection
  },
};
</script>

<style lang='scss' scoped>
</style>