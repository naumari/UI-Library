<template>
  <div
    :class="[
      'scroll-bar__track',
      { 'is-vertical': type === 'vertical' },
      { 'is-horizontal': type === 'horizontal' }
    ]"
    @mousedown="handleClick"
  >
    <div
      class="scroll-bar__thumb"
      :style="thumbStyle"
      @mousedown.stop="e => handleDrag(e)"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String },
    offset: { type: Number, default: 0 }
  },
  inject: { View: { default: "View" } },
  computed: {
    thumbStyle() {
      const { thumb, offset, type, View } = this;

      if (type === "vertical") {
        const {
          view: { height: viewHeight },
          thumb: { height: thumbHeight }
        } = View;

        return {
          height: `${(thumbHeight * 100) / viewHeight}%`,
          top: `${offset}px`
        };
      } else {
        const {
          view: { width: viewWidth },
          thumb: { width: thumbWidth }
        } = View;

        return {
          width: `${(thumbWidth * 100) / viewWidth}%`,
          left: `${offset}px`
        };
      }
    }
  },
  methods: {
    handleClick(e) {
      const { type, View } = this;
      let offset = 0;

      if (type === "vertical") {
        const {
          view: { height },
          slotView: { height: slotViewHeight },
          thumb: { height: thumbHeight }
        } = View;
        const { clientY } = e;
        const { top } = e.target.getBoundingClientRect();
        offset +=
          ((clientY - top) * slotViewHeight) / height - thumbHeight / 2;
      } else {
        const {
          view: { width },
          slotView: { width: slotViewWidth },
          thumb: { width: thumbWidth }
        } = View;
        const { clientX } = e;
        const { left } = e.target.getBoundingClientRect();

        offset +=
          ((clientX - left) * slotViewWidth) / width - thumbWidth / 2;
      }
      this.$emit("move", type, offset);
    },
    handleDrag(e) {
      const { type, View } = this;
      let { screenX: x, screenY: y } = e;
      const handleDragEnd = () => {
        document.removeEventListener("mousemove", handleDragStart);
        document.removeEventListener("mouseup", handleDragEnd);
      };
      const handleDragStart = e => {
        const { screenX, screenY } = e;
        const { scrollLeft, scrollTop } = View.$refs.view;
        let offset =
          type === "vertical"
            ? scrollTop + screenY - y
            : scrollLeft + screenX - x;

        this.$emit("move", type, offset);
      };

      document.addEventListener("mousemove", handleDragStart);
      document.addEventListener("mouseup", handleDragEnd);

      e.preventDefault();
    }
  }
};
</script>
<style lang="scss">
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
