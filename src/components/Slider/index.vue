<template>
  <div :class="['m-slider-wrap', `is-${thumbShape}`]">
    <div class="progress" :style="progressStyle"></div>
    <input class="m-slider-inner" type="range" v-model="rate" v-bind="$attrs" v-on="$listeners">
    <span class="tooltip" :style="toolTipPosition">{{ rate }}</span>
  </div>
</template>

<script>
export default {
  props: {
    showTooltip: { type: Boolean, default: true },
    thumbShape: { type: String, default: "circle" }
  },
  data() {
    return {
      rate: 0
    };
  },
  computed: {
    progressStyle() {
      return {
        width: `${this.rate}%`
      };
    },
    toolTipPosition() {
      const { rate } = this;
      const xOffset = 9 * (1 - rate / 50);

      return {
        left: `calc(${rate}% + ${xOffset}px)`,
        transform: `translateX(-50%)`
      };
    }
  },
  watch: {
    rate(value) {
      console.log("rate", value);
    }
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
        transform: scale(1.2);
      }
    }

    &::-webkit-slider-thumb {
      margin-top: -6px;
      @include circle-slider-thumb();
      @include thumb-common-style();
      transition: all 0.3s;
    }
    & + .tooltip {
      margin-bottom: 12px;
    }
    &::-moz-range-thumb {
      @include circle-slider-thumb();
      @include thumb-common-style();
      transform: translateZ(1px);
    }
    &::-ms-thumb {
      @include circle-slider-thumb();
      @include thumb-common-style();
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

    &:focus::-ms-fill-lower {
      background: #409eff;
    }

    &::-ms-fill-upper {
      background: #3071a9;
      border-radius: 3px;
    }

    &:focus::-ms-fill-upper {
      background: #fff;
    }
  }
}
</style>
