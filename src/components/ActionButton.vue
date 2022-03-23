<template>
  <button :class="['action-button' , color ]">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'green'
    }
  },
};
</script>

<style lang="scss" scoped>
.action-button {
  @apply  text-white text-[14px] px-4 py-2 rounded transition-all;

  &.green {
    @apply bg-[#49A987] hover:bg-[#357F60];
  }

  &.yellow {
    @apply bg-[#F4B429] hover:bg-[#F4A700];
  }
}
</style>