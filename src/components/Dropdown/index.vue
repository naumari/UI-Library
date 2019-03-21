<template>
  <div :class="['dropdown', { 'is-hover': trigger === 'hover' }]">
    <div :class="['dropdown__label']">
      <slot name="label">
        <span class="c-color-success">{{ placeholder }}</span>
        <fat-icon name="expand_more" class="c-color-success" />
      </slot>
    </div>

    <div class="dropdown__menu">
      <span>Hello world</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: { type: String, default: "下拉菜单" },
    trigger: { type: String, default: "hover" }
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: flex;
  align-items: center;

  &.is-hover {
    &:hover {
      .dropdown__menu {
        display: block;
      }
    }
  }

  .dropdown__menu {
    position: absolute;
    display: none;
  }
}
</style>
