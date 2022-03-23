<template>
  <main>
    <MoreAboutSection />

    <PlatformsBanner />

    <AudiobookSection />

    <CriticSection />

    <UpcomingEventsSection />

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
import UpcomingEventsSection from "./UpcomingEventsSection.vue";


export default {
  name: "MainContent",
  components: {
    MoreAboutSection,
    AudiobookSection,
    PlatformsBanner,
    NewsletterSubscription,
    CriticSection,
    RecentArticlesSection,
    UpcomingEventsSection
  },
};
</script>

<style lang='scss' scoped>
</style>