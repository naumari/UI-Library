<template>
  <td class="td-wrapper c-size-m">
    <slot>无</slot>
  </td>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true }
  },
  inject: ["fatTable"],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
    this.$nextTick(() => {
      let dom = this.$el.parentNode;
      let index = null;

      while (dom.tagName !== "TR") {
        dom = dom.parentNode;
      }

      index = dom.getAttribute("data-index");
      if (index === "0") {
        this.fatTable.addLabel(this.label);

        this.$destroy = () => {
          this.fatTable.delLable(this.label);
        };
      }
    });
  }
};
</script>
<style lang="scss">
.td-wrapper {
  padding: $m-offset $l-offset;
}
</style>
