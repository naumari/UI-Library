<template>
  <label
    class="radio"
    :class="[
        { 'is-checked': value === model },
        { 'is-disabled': isDisabled }
    ]"
    @click.stop="handleClick"
  >
    <span class="radio-inner"></span>
    <input
      class="f-hide"
      type="radio"
      :disabled="isDisabled"
      v-bind="$attrs"
      :value="model"
      @click.stop
    >
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: [Boolean],
      default: false
    },
    propValue: {
      type: [String, Number]
    }
  },
  model: {
    prop: "propValue",
    event: "select"
  },
  computed: {
    isGroup() {
      return this.$parent.$options._componentTag === "fat-radiogroup";
    },
    isDisabled() {
      return this.$parent.disabled || this.disabled;
    },
    model: {
      get() {
        return this.isGroup ? this.$parent.value : this.propValue;
      },
      set(newValue) {
        this.isGroup
          ? this.$parent.$emit("select", newValue)
          : this.$emit("select", newValue);
      }
    }
  },
  methods: {
    handleClick(event) {
      !this.isDisabled && (this.model = this.value);
    }
  }
};
</script>

<style lang="scss">
.radio {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  user-select: none;

  $radio-size: 14px;
  $radio-space: 8px;
  .radio-inner {
    margin-right: $radio-space;
    display: inline-block;
    width: $radio-size;
    height: $radio-size;

    border: 1px solid #ccc;
    border-radius: 50%;
  }

  $radio-checked-size: 16px;
  &.is-checked {
    .radio-inner {
      width: $radio-checked-size;
      height: $radio-checked-size;
      box-sizing: border-box;
      border: 5px solid #5c5cee;
    }
  }

  &.is-disabled {
    user-select: none;
    cursor: not-allowed;

    opacity: 0.5;
    &:hover {
      opacity: 0.5;
    }
  }

  .f-hide {
    display: none;
  }
}
</style>
