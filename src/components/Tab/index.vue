<template>
  <div v-if="isOpen">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    id: { type: [String, Number], required: true },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    isOpen() {
      return this.$parent.activeId === this.id;
    }
  },
  created() {
    this.$parent.children.push(this);
  },
  destroyed() {
    this.$parent.children = this.$parent.children.filter(item => item.id !== this.id)
  }
};
</script>
<style lang="scss">
.m-slider-wrap {
  position: relative;
  display: flex;
  align-items: center;
  .tooltip {
    position: absolute;
    bottom: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.7);
  }
  .progress {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto auto;
    border-radius: 3px;
    height: 6px;
    background: #409eff;
    z-index: 1;
  }
  @mixin thumb-common-style() {
    position: relative;
    z-index: 3;
    border: 2px solid #409eff;
    background: #fff;
    cursor: grab;
  }
  .m-slider-inner {
    position: relative;
    margin: 0 0;
    padding: 0 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    //reset
    -webkit-appearance: none;
    &:active {
      cursor: grabbing;
      & + .tooltip {
        display: flex;
      }
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }
    &:focus {
      outline: none;
    }
    &::-ms-track {
      width: 100%;
      cursor: pointer;
      background: transparent;
      /* Hides the slider so custom styles can be added */
      border-color: transparent;
      color: transparent;
    }
    // init thumb
    @mixin circle-slider-thumb() {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      &:active {
        cursor: grabbing;
        transform: scale(1.1);
      }
    }
    &::-webkit-slider-thumb {
      margin-top: -6px;
      @include circle-slider-thumb();
      @include thumb-common-style();
      transition: all 0.3s;
    }
    &.is-disabled {
      &::-webkit-slider-thumb {
        border: 2px solid #c4c4c4;
        cursor: not-allowed;
      }
    }
    &::-moz-range-thumb {
      @include circle-slider-thumb();
      @include thumb-common-style();
      transform: translateZ(1px);
    }
    &.is-disabled {
      &::-moz-range-thumb {
        border: 2px solid #c4c4c4;
      }
    }
    &::-ms-thumb {
      @include circle-slider-thumb();
      @include thumb-common-style();
    }
    &.is-disabled {
      &::-ms-thumb {
        border: 2px solid #c4c4c4;
      }
    }
    // init track
    @mixin common-track {
      width: 100%;
      height: 6px;
      background: #e4e7ed;
      border-radius: 3px;
      cursor: pointer;
    }

    &::-webkit-slider-runnable-track {
      @include common-track();
    }
    &::-moz-range-track {
      @include common-track();
    }

    &::-ms-track {
      width: 100%;
      height: 6px;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      border-width: 16px 0;
      color: transparent;
    }

    &::-ms-fill-lower {
      background: #409eff;
      border-radius: 3px;
    }

    &::-ms-fill-upper {
      background: #c4c4c4;
      border-radius: 3px;
    }
    &.is-disabled {
      &::-webkit-slider-runnable-track {
        cursor: not-allowed;
      }
      &::-moz-range-track {
        cursor: not-allowed;
      }
      &::-ms-track {
        cursor: not-allowed;
      }
    }
  }
  &.is-disabled {
    .m-slider-inner {
      cursor: not-allowed;
    }
    &::-webkit-slider-thumb {
      border: 2px solid #c4c4c4;
      cursor: not-allowed;
    }
  }
}
</style>
