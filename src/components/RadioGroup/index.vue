<template>
  <div class="radio-group" name="radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "radio-group",
  props: {
    value: { type: [String, Number] },
    disabled: { type: Boolean }
  },
  model: {
    prop: "value",
    event: "select"
  },
  watch: {
    value(newValue) {
      this.$emit("change", newValue);
    }
  }
};
</script>
<style lang="scss">
.radio-group {
  display: flex;
  align-items: center;

  $base-space: 20px;
  .radio-item {
    &:not(:last-child) {
      margin-right: $base-space;
    }
  }
}
</style>
