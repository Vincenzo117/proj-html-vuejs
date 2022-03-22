<template>
  <main>
    <MoreAboutSection />

    <PlatformsBanner />

    <AudiobookSection />
  </main>
</template>

<script>
import MoreAboutSection from "./MoreAboutSection.vue";
import AudiobookSection from "./AudiobookSection.vue";
import PlatformsBanner from "./PlatformsBanner.vue";

export default {
  name: "MainContent",
  components: {
    MoreAboutSection,
    AudiobookSection,
    PlatformsBanner
  },
};
</script>

<style lang='scss' scoped>
</style>