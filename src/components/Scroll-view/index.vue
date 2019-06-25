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
      :custom-style="verticalBarStyle"
      :offset="thumbTopOffset"
      :track="view"
      :thumb="thumb"
      @thumbDrag="handleDrag"
      @clickTrack="handleClickTrack"
    />

    <Bar
      type="horizontal"
      :custom-style="horizontalBarStyle"
      :offset="thumbLeftOffset"
      :track="view"
      :thumb="thumb"
      @thumbDrag="handleDrag"
      @clickTrack="handleClickTrack"
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
  props: {
    scrollDistance: { type: Number, default: 0 },
    horizontalBarStyle: { type: Object, default: () => ({}) },
    verticalBarStyle: { type: Object, default: () => ({}) }
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
  watch: {
    scrollDistance(newValue) {
      this.$refs.view.scrollTop = newValue;
    }
  },
  methods: {
    handleScroll(e) {
      const {
        view: { width: viewWidth, height: viewHeight },
        slotView: { width: slotViewWidth, height: slotViewHeight },
        thumb: { width, height },
        $refs: {
          view: { scrollTop, scrollLeft }
        }
      } = this;

      this.thumbTopOffset =
        (scrollTop * (viewHeight - height)) / (slotViewHeight - viewHeight);
      this.thumbLeftOffset =
        (scrollLeft * (viewWidth - width)) / (slotViewWidth - viewWidth);
      this.$emit("scroll", e);
    },
    scrollScreen(direction, offset) {
      const key = direction === "vertical" ? "scrollTop" : "scrollLeft";

      this.$refs.view[key] = offset;
    },
    handleClickTrack(direction, offset) {
      const {
        view: { width, height },
        slotView: { width: slotViewWidth, height: slotViewHeight },
        thumb: { width: thumbWidth, height: thumbHeight }
      } = this;
      const scrollOffset =
        direction === "vertical"
          ? (offset * slotViewHeight) / height - thumbHeight / 2
          : (offset * slotViewWidth) / width - thumbWidth / 2;

      this.scrollScreen(direction, scrollOffset);
    },
    handleDrag(direction, rate) {
      const {
        view: { width, height },
        slotView: { width: slotViewWidth, height: slotViewHeight }
      } = this;
      const scrollOffset =
        direction === "vertical"
          ? rate * (slotViewHeight - height)
          : rate * (slotViewWidth - width);

      this.scrollScreen(direction, scrollOffset);
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
        width:
          slotWidth - width > 1 ? ((width * width) / slotWidth).toFixed(2) : 0,
        height:
          slotHeight - height > 1
            ? ((height * height) / slotHeight).toFixed(2)
            : 0
      };
    };
    const ro = new ResizeObserver(handler);

    this.scrollBarWidth = getScrollBarWidth();
    this.$nextTick(() => {
      ro.observe(this.$slots.default[0].elm);
      this.$destroy = () => {
        ro.unobserve(this.$slots.default[0].elm);
      };
    });
  }
};
</script>
<style lang="scss">
.scroll-view-wrapper {
  display: flex;
  flex-direction: column;

  position: relative;
  overflow: hidden;

  .scroll-view-inner {
    flex: 1;
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
