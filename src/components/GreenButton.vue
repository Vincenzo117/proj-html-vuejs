<template>
  <button class="green-button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "GreenButton",
  props: {
    text: {
      tuype: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.green-button {
  @apply bg-[#49A987] text-white text-[14px] px-4 py-2 rounded;
}
</style>