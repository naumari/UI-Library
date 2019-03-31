<template>
  <div class="checkbox-group" name="checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "checkbox-group",
  props: {
    value: { type: Array, required: true },
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
  },
  methods: {
    selectItem(item) {
      const { value } = this;
      this.$emit("select", [...value, item]);
    },
    deleteItem(item) {
      const { value: selectItems } = this;
      this.$emit(
        "select",
        selectItems.filter(selectitem => selectitem !== item)
      );
    }
  }
};
</script>
<style lang="scss">
.checkbox-group {
  display: flex;
  align-items: center;
}
</style>
