<template>
<transition name="toast-fade">
  <div :class="[`toast-${type}`, horizontalClass]"
       v-if="visible"
       :style="positionStyle"
  >
    <fat-icon :name="iconType" />
    <p class="toast-content" :title="content">{{ content }}</p>
    <fat-icon v-if="showClose" name="close" class="toast-close-btn" @click.stop="close" />
  </div>
</transition>
</template>

<script>

const iconMap = {
  warn: "info",
  info: "info",
  success: "check_circle",
  error: "error"
};

export default {
  props: {
    type: { type: String, default: 'info' },
    content: { default: String, required: true },
    duration: { type: Number, default: 2500 },
    position: { type: String, default: "top-right" },
    autoClose: { type: Boolean, default: false },
    showClose: { type: Boolean, default: true }
  },
  data() {
    return {
      closed: false,
      visible: true,
      timer: null,
      verticalOffset: 16
    };
  },
  computed: {
    horizontalClass() {
      let position = this.position;
      return this.position.includes("right") ? "right" : "left";
    },
    positionStyle() {
      return {
        ["top"]: `${this.verticalOffset}px`
      };
    },
    iconType() {
      return this.type !== "normal" ? iconMap[this.type] : this.type;
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener("transitionend", this.destroyElement);
        this.$emit("toastClose");
      }
    }
  },
  mounted() {
    document.body.appendChild(this.$el);
    if (this.autoClose) this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
    this.$el.removeEventListener("transitionend", this.destroyElement);
  },
  destroyed() {
    this.$el.parentNode.removeChild(this.$el);
  },
  methods: {
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    stopTimer() {
      if (this.timer) clearTimeout(this.timer);
    },
    close() {
      this.closed = true;
    },
    destroyElement() {
      this.$destroy();
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/styles/var.scss';

$content-font-size: 14px;
$close-btn-size: 10px;
$position-offset: 8px;
$toast-width: 250px;
$toast-height: 80px;
$border-radius-middle: 4px;


@mixin toast-transition-effect($val) {
  transition: opacity $val, transform $val, left $val, right $val, top $val,
    bottom $val;
}

@mixin base-toast-style() {
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 16px;
  z-index: 9999;

  box-sizing: border-box;
  width: $toast-width;
  height: $toast-height;

  border-radius: $border-radius-middle;
  box-shadow: 0 2px 12px #a8abaf;
  background-color: #fff;
  user-select: none;

  @include toast-transition-effect(0.3s);
  .toast-content {
    margin-left: 4px;
    max-width: $toast-width;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    word-break: break-all;    
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .toast-close-btn {
    position: absolute;
    top: $position-offset;
    right: $position-offset;
    font-size: $close-btn-size;
    color: gray;
    cursor: pointer;
  }
}

@mixin toast-type() {
  .toast-type {
    margin-right: 12px;
    font-size: 14px;
  }
}

.left {
  left: $position-offset;
}
.right {
  right: $position-offset;
}

.toast-normal {
  @include base-toast-style();
}

.toast-info,
.toast-warn,
.toast-success,
.toast-error {
  @include base-toast-style();
  @include toast-type();
}
.toast-success {
  color: $success-color;
}
.toast-warn {
  color: $warn-color;
}
.toast-error {
  color: $error-color;
}
.toast-info {
  color: $primary-color;
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  @include toast-transition-effect(0.5s);
}

.toast-fade-enter,
.toast-fade-leave-to {
  opacity: 0;
}
</style>
