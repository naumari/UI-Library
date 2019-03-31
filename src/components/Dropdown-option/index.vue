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
  watch: {
    ["Dropdown.selectValue"]: {
      handler(newValue) {
        const {
          value,
          label,
          Dropdown: { optionKey, selectItem }
        } = this;
        const key = this[optionKey] || this.$attrs[optionKey];

        if (newValue === value) {
          this.Dropdown.selectItem = {
            key,
            label,
            value
          };
        }
      },
      immediate: true
    }
  },
  methods: {
    handleSelect(key) {
      let {
        Dropdown: { multiple, selectItem, trigger },
        value,
        label
      } = this;

      this.Dropdown.selectItem = {
        key,
        label,
        value
      };
      this.Dropdown.$emit("change", this.Dropdown.selectItem);
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
        this.handleSelect(key);
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