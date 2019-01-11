<template>
  <i class="icon-wrapper material-icons" :style="iconSize" v-bind="$attrs" v-on="$listeners">{{ name }}</i>
</template>

<script>
export default {
  props: {
    name: { type: String, default: "" },
    size: { type: [String, Number], default: 14 }
  },
  computed: {
    iconSize() {
      const { size } = this;

      return {
        fontSize: `${size}px`
      };
    }
  }
};
</script>
<style lang="scss">
.icon-wrapper {
  user-select: none;
}
</style>
