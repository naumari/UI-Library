<template>
  <table :class="['table', { 'is-stripe': stripe }]">
    <thead>
      <tr class="tr-wrapper">
        <th
          v-for="(item, index) in labels"
          :key="index"
          :colspan="item.colspan"
          :class="`th-wrapper c-size-l c-bold text-${align}`"
        >
          {{ item.label }}
        </th>
      </tr>
    </thead>
    <tbody class="table__body-wrapper">
      <tr
        v-for="(item, index) in data"
        :key="index"
        :data-index="index"
        class="tr-wrapper"
      >
        <slot v-bind:item="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: { type: Array, default: () => [] },
    align: { type: String, default: "left" },
    stripe: { type: Boolean, default: false }
  },
  provide() {
    return {
      fatTable: this
    };
  },
  data() {
    return {
      labels: []
    };
  },
  methods: {
    addLabel(label) {
      const { labels } = this;
      const existItem = labels.find(item => item.label === label);
      if (existItem) {
        existItem.colspan += 1;
      } else {
        labels.push({
          label,
          colspan: 1
        });
      }
    },
    delLabel(label) {
      this.labels = this.labels.filter(item => item.label !== label);
    }
  }
};
</script>
<style lang="scss">
.table {
  &.is-stripe {
    .table__body-wrapper {
      .tr-wrapper:nth-child(2n) {
        background: $main-color;
      }
      .tr-wrapper:hover {
        background: $hover-color;
      }
    }
  }
  .tr-wrapper {
    border-bottom: 1px solid $main-color;
  }
  .th-wrapper {
    padding: $m-offset $l-offset;
    &.text-left {
      text-align: left;
    }
    &.text-center {
      text-align: center;
    }
    &.text-right {
      text-align: right;
    }
  }
  .table__body-wrapper {
    .tr-wrapper:hover {
      background: $hover-color;
    }
  }
}
</style>
