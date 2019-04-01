<template>
  <div
    :class="[
      'dorpdown-option',
      { 'is-disabled': disabled },
      { 'is-selected': isSelected }
    ]"
    @mousedown="handleClick"
  >
    <slot>
      {{ label }}
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: [Object, String, Number] },
    label: { type: String },
    disabled: { type: Boolean, default: false }
  },
  inject: {
    Dropdown: { default: "Dropdown" }
  },
  computed: {
    isSelected() {
      const {
        Dropdown: { optionKey, selectValue }
      } = this;
      const key = this[optionKey] || this.$attrs[optionKey];

      return key === selectValue;
    }
  },
  methods: {
    handleSelect(key) {
      let {
        Dropdown: { multiple, trigger },
        value,
        label
      } = this;

      this.Dropdown.$emit("change", key);
      this.Dropdown.$emit("select", key);
      if (trigger !== "hover") {
        this.Dropdown.isOpen = false;
      }
    },
    handleClick() {
      let {
        Dropdown: { optionKey },
        disabled
      } = this;
      const key = this[optionKey] || this.$attrs[optionKey];

      if (!disabled) {
        this.$slots.default[0].elm.click && this.$slots.default[0].elm.click();
        key && this.handleSelect(key);
      }
    }
  }
};
</script>

<style lang="scss">
.dorpdown-option {
  padding: 0 24px 0 12px;
  line-height: 32px;
  cursor: pointer;

  &:not(.is-disabled):hover {
    background-color: #f5f7fa;
  }

  &.is-selected {
    color: $success-color;
  }

  &.is-disabled {
    color: $disabled-color;
    cursor: not-allowed;
  }
}
</style>