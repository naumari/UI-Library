<template>
  <transition name="move">
    <div v-if="isOpen">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    id: { type: [String, Number], required: true },
    disabled: { type: Boolean, default: false },
    closable: { type: Boolean, default: false }
  },
  computed: {
    isOpen() {
      return this.$parent.activeId === this.id;
    }
  },
  created() {
    this.$parent.childrens.push(this);
  },
  destroyed() {
    this.$parent.childrens = this.$parent.childrens.filter(
      item => item.id !== this.id
    );
  }
};
</script>
<style lang="scss">
</style>
