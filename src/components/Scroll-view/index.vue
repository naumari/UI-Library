<template>
  <div :class="['scroll-view-wrapper']">
    <div
      :class="['scroll-view-inner']"
      :style="hiddenScrollBar"
      ref="view"
      @scroll="handleScroll"
    >
      <slot></slot>
    </div>

    <Bar
      type="vertical"
      :offset="thumbTopOffset"
      @move="handleMove"
    />

    <Bar
      type="horizontal"
      :offset="thumbLeftOffset"
      @move="handleMove"
    />
  </div>
</template>

<script>
import ResizeObserver from "resize-observer-polyfill";
import Bar from "./bar";
import { getScrollBarWidth } from "../utils";
import { thisTypeAnnotation } from "babel-types";

export default {
  components: {
    Bar
  },
  provide() {
    return {
      View: this
    };
  },
  data() {
    return {
      scrollBarWidth: 0,

      view: {},
      slotView: {},
      thumb: {},

      thumbTopOffset: 0,
      thumbLeftOffset: 0
    };
  },
  computed: {
    hiddenScrollBar() {
      return {
        marginRight: `-${this.scrollBarWidth + 1}px`,
        marginBottom: `-${this.scrollBarWidth + 1}px`
      };
    },
    verticalThumbStyle() {
      const {
        view: { height: viewHeight },
        thumb: { height: thumbHeight }
      } = this;

      return {
        height: `${(thumbHeight * 100) / viewHeight}%`
      };
    },
    horizontalThumbStyle() {
      const {
        view: { width: viewWidth },
        thumb: { width: thumbWidth },
        thumbLeftOffset
      } = this;

      return {
        width: `${(thumbWidth * 100) / viewWidth}%`,
        left: `${thumbLeftOffset}px`
      };
    }
  },
  methods: {
    handleScroll(direction) {
      const {
        view: { width: viewWidth, height: viewHeight },
        slotView: { width: slotViewWidth, height: slotViewHeight }
      } = this;

      this.thumbTopOffset =
        (viewHeight + this.$refs.view.scrollTop) *
          (viewHeight / slotViewHeight) -
        this.thumb.height;
      this.thumbLeftOffset =
        (viewWidth + this.$refs.view.scrollLeft) * (viewWidth / slotViewWidth) -
        this.thumb.width;
    },
    handleMove (direction, offset) {
        const key = direction === "vertical" ? "scrollTop" : "scrollLeft";

        this.$refs.view[key] = offset;
    }
  },
  created() {
    const handler = () => {
      let { width, height } = this.$refs.view.getBoundingClientRect();
      let {
        width: slotWidth,
        height: slotHeight
      } = this.$slots.default[0].elm.getBoundingClientRect();

      width -= this.scrollBarWidth;
      height -= this.scrollBarWidth;
      this.view = {
        width,
        height
      };
      this.slotView = {
        width: slotWidth,
        height: slotHeight
      };

      this.thumb = {
        width: Math.abs(width - slotWidth) > 1 ? ((width * width) / slotWidth).toFixed(2) : 0,
        height:
          Math.abs(height - slotHeight) > 1 ? ((height * height) / slotHeight).toFixed(2) : 0
      };
    };
    const ro = new ResizeObserver(handler);

    this.scrollBarWidth = getScrollBarWidth();
    this.$nextTick(() => {
      ro.observe(this.$slots.default[0].elm);
    });
  }
};
</script>
<style lang="scss">
.scroll-view-wrapper {
  display: inline-block;
  position: relative;
  overflow: hidden;

  .scroll-view-inner {
    overflow: scroll;
  }
}
.scroll-bar__track {
  position: absolute;

  &.is-vertical {
    top: 0;
    right: 0;
    bottom: 0;
    .scroll-bar__thumb {
      width: 5px;
    }
  }
  &.is-horizontal {
    left: 0;
    right: 0;
    bottom: 0;
    .scroll-bar__thumb {
      height: 5px;
    }
  }
}
.scroll-bar__thumb {
  position: relative;
  cursor: pointer;
  border-radius: inherit;
  background-color: rgba(144, 147, 153, 0.3);
}
</style>
