<template>
  <transition name="fade">
    <div :class="[`message-${type}`, 'center']" v-if="visible" :style="positionStyle">
      <fat-icon :name="icon" class="icon" size="16"/>
      <p class="message-content c-size-m" v-html="content"></p>
    </div>
  </transition>
</template>

<script>
import popupbox from "../mixins/popupbox";
import iconMap from "../mixins/iconMap";

export default {
  mixins: [popupbox],
  props: {
    type: { type: String, default: "info" },
    content: { default: String, required: true },
    duration: { type: Number, default: 2000 },
    verticalOffset: { type: Number, default: 32 }
  },
  data() {
    return {
      timer: null
    };
  },
  computed: {
    positionStyle() {
      return {
        ["top"]: `${this.verticalOffset}px`
      };
    },
    icon() {
      return iconMap[this.type];
    }
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
  methods: {
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
          this.$emit("messageClose");
        }, this.duration);
      }
    },
    stopTimer() {
      if (this.timer) clearTimeout(this.timer);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";

$base-height: 50px;

$color-success: $success-color;
$color-info: $disabled-color;
$color-warning: $warn-color;
$color-error: $error-color;

$border-radius-middle: 2px;

@mixin message-transition-effect($val) {
  transition: opacity $val, transform $val, left $val, right $val, top $val,
    bottom $val;
}

@mixin base-message-style() {
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 103;

  box-sizing: border-box;
  padding: 0 16px;
  height: $base-height;

  border-radius: $border-radius-middle;
  box-shadow: 0 2px 10px 0 hsla(0, 0%, 73%, 0.2);
  background-color: #fff;
  user-select: none;

  @include message-transition-effect(0.3s);
  .message-content {
    display: flex;
    padding-left: 4px;
    align-items: center;
    font-weight: 400;
    color: $disabled-color;
  }
}

.center {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}

.message-normal {
  @include base-message-style();
}
.message-info,
.message-warn,
.message-success,
.message-error {
  @include base-message-style();
}
.message-success {
  .icon {
    color: $color-success;
  }
}
.message-warn {
  .icon {
    color: $color-warning;
  }
}
.message-error {
  .icon {
    color: $color-error;
  }
}
.message-info {
  .icon {
    color: $color-info;
  }
}
</style>