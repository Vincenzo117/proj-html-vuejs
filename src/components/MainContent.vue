<template>
  <main>
    <MoreAboutSection />

    <AudiobookSection />
  </main>
</template>

<script>
import MoreAboutSection from "./MoreAboutSection.vue";
import AudiobookSection from "./AudiobookSection.vue";

export default {
  name: "MainContent",
  components: {
    MoreAboutSection,
    AudiobookSection,
  },
};
</script>

<style lang='scss' scoped>
</style>