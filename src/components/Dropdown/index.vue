<template>
  <div
    :class="['dropdown', { 'is-hover': trigger === 'hover' && isOpen }]"
    tabindex="0"
    @click.stop="trigger !== 'hover' && (isOpen = !isOpen)"
    @blur="trigger !== 'hover' && (isOpen = false)"
  >
    <div :class="['dropdown__label']">
      <slot name="label">
        <span class="c-color-success">{{ placeholder }}</span>
      </slot>
      <fat-icon name="expand_more" class="c-color-success" />
    </div>

    <div class="dropdown__menu" v-if="trigger === 'hover' || isOpen">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  provide() {
    return {
      Dropdown: this
    };
  },
  props: {
    placeholder: { type: String, default: "下拉菜单" },
    trigger: { type: String, default: "hover" },
    selectValue: { type: [String, Number] },
    optionKey: { type: String, default: "value" }
  },
  data() {
    return {
      isOpen: this.trigger === "hover"
    };
  },
  model: {
    prop: "selectValue",
    event: "select"
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding-bottom: 12px;

  &:focus {
    outline: none;
  }

  &.is-hover {
    &:hover {
      .dropdown__menu {
        display: block;
      }
    }
    .dropdown__menu {
      display: none;
    }
  }

  .dropdown__menu {
    position: absolute;
    top: 100%;
    left: 0;
    padding: 4px 0;
    box-sizing: border-box;
    min-width: max-content;
    max-height: 170px;
    overflow: auto;
    z-index: 2;

    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
