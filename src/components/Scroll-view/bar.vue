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
    offset: { type: Number, default: 0 },
    track: { type: Object, default: () => ({}) },
    thumb: { type: Object, default: () => ({}) },
    customStyle: { type: Object, default: () => ({}) }
  },
  computed: {
    thumbStyle() {
      const { thumb, offset, type, track, customStyle } = this;

      return type === "vertical"
        ? {
            ...customStyle,
            height: `${(thumb.height * 100) / track.height}%`,
            top: `${offset}px`
          }
        : {
            ...customStyle,
            width: `${(thumb.width * 100) / track.width}%`,
            left: `${offset}px`
          };
    }
  },
  methods: {
    handleClick(e) {
      const { type } = this;
      const { clientX, clientY } = e;
      const { top, left } = e.target.getBoundingClientRect();
      let offset = type === "vertical" ? clientY - top : clientX - left;

      this.$emit("clickTrack", type, offset);
    },
    handleDrag(e) {
      const { thumb, offset, type, track } = this;

      let { clientX: x, clientY: y } = e;
      let { top, left } = e.target.getBoundingClientRect();
      const handleDragEnd = () => {
        document.removeEventListener("mousemove", handleDragStart);
        document.removeEventListener("mouseup", handleDragEnd);
      };
      const handleDragStart = e => {
        const { clientX, clientY, movementX, movementY } = e;
        const rate =
          type === "vertical"
            ? (clientY - y) / (track.height - thumb.height)
            : (clientX - x) / (track.width - thumb.width);

        this.$emit("thumbDrag", type, rate);
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
