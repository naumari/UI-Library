<template>
  <div class="pagination">
    <ul :class="['pagination-inner', { 'has-background': background }]">
      <li
        :class="['pagination-item', 'pre', { 'is-disabled': !canPre }]"
        @click.stop="handleClick({ type: 'pre' })"
      >
        <fat-icon name="keyboard_arrow_left" :size="12"/>
      </li>
      <!-- backward Paginations -->
      <li
        v-for="item in forwardPaginations"
        :key="item"
        :class="['pagination-item', { 'is-active': item === current }]"
        @click.stop="handleClick({ type: 'select', data: item })"
      >{{ item }}</li>

      <li v-if="isForwardBrief" class="pagination-item icon-more">
        <fat-icon name="more_horiz" :size="12"/>
      </li>
      <!-- end -->
      <!-- middle paginations -->
      <template v-if="isForwardBrief && isBackwardBrief">
        <li
          v-for="item in middlePaginations"
          :key="item"
          :class="['pagination-item', { 'is-active': item === current }]"
          @click.stop="handleClick({ type: 'select', data: item })"
        >{{ item }}</li>
      </template>
      <!-- end -->
      <!-- backward paginations -->
      <li v-if="isBackwardBrief" class="pagination-item icon-more">
        <fat-icon name="more_horiz" :size="12"/>
      </li>

      <li
        v-for="item in backwardPaginations"
        :key="item"
        :class="['pagination-item', { 'is-active': item === current }]"
        @click.stop="handleClick({ type: 'select', data: item })"
      >{{ item }}</li>
      <!-- end -->
      <li
        :class="['pagination-item', 'next', { 'is-disabled': !canNext }]"
        @click.stop="handleClick({ type: 'next' })"
      >
        <fat-icon name="keyboard_arrow_right" :size="12"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: {
    value: { type: [Number, String], default: 1 },
    total: { type: Number, default: 0 },
    pageSize: { type: Number, default: 10 },
    pageCount: { type: Number, default: 7 },
    background: { type: Boolean, default: false }
  },
  model: {
    prop: "value",
    event: "change"
  },
  data() {
    return {
      current: 1
    };
  },
  computed: {
    paginalNumber() {
      const { total, pageSize } = this;
      return Math.ceil(total / pageSize);
    },
    canPre() {
      return this.current > 1;
    },
    canNext() {
      return this.current < this.paginalNumber;
    },
    isForwardBrief() {
      const { paginalNumber, pageCount, current } = this;
      return paginalNumber > pageCount && current > pageCount - 3;
    },
    forwardPaginations() {
      const { pageCount, isForwardBrief, paginalNumber } = this;
      let start = 0;
      let length =
        paginalNumber <= pageCount
          ? paginalNumber
          : isForwardBrief
          ? 1
          : pageCount;

      return Array.from({ length }, (v, i) => {
        return i + start + 1;
      });
    },
    isBackwardBrief() {
      const { paginalNumber, pageCount, current } = this;
      return paginalNumber > pageCount && current < paginalNumber - 3;
    },
    backwardPaginations() {
      const { current, pageCount, isBackwardBrief, paginalNumber } = this;
      let start = paginalNumber - (isBackwardBrief ? 1 : pageCount + 1);
      let length =
        paginalNumber <= pageCount ? 0 : isBackwardBrief ? 1 : pageCount + 1;

      return Array.from({ length }, (v, i) => {
        return i + start + 1;
      });
    },
    middlePaginations() {
      const { current, pageCount, isForwardBrief, isBackwardBrief } = this;
      const offset = Math.round(pageCount / 2);
      let start = current - offset;

      return Array.from({ length: pageCount }, (v, i) => {
        return i + start + 1;
      });
    }
  },
  watch: {
    value: {
      handler(value) {
        this.current = Number(value);
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleClick({ type, data }) {
      const handler = {
        select: index => (this.current = index),
        pre: () => this.canPre && --this.current,
        next: () => this.canNext && ++this.current
      };
      handler[type] && handler[type](data);
      this.$emit("change", this.current);
    }
  }
};
</script>

<style lang="scss">
.pagination {
  padding: 3px 0 5px 0;

  .pagination-inner {
    display: block;
    font-size: 0;
    &.has-background {
      .pagination-item {
        background: $main-color;
        &:not(:first-child) {
          margin-left: 8px;
        }
      }
    }
    .pagination-item {
      display: inline-block;
      padding: 0 4px;

      min-width: 20px;
      height: 28px;
      line-height: 28px;
      font-size: 14px;
      text-align: center;

      user-select: none;
      cursor: pointer;

      &.is-active {
        color: #5c5cee;
      }

      &.pre {
        .fat-icon {
          transform: rotateZ(90deg);
        }
      }
      &.next {
        .fat-icon {
          transform: rotateZ(-90deg);
        }
      }
      &.is-disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }
  }
}
</style>
