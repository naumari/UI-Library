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
      return this.fatTabs.activeId === this.id;
    }
  },
  inject: ["fatTabs"],
  created() {
    this.fatTabs.childrens.push(this);
  },
  destroyed() {
    this.fatTabs.childrens = this.fatTabs.childrens.filter(
      item => item.id !== this.id
    );
  }
};
</script>
<style lang="scss">
</style>
