<template>
  <div :class="['hover-tip', customClass]">
    <div class="hover-part">
      <slot name="hover-part">
        <fat-icon name="help" size="18" />
      </slot>
    </div>
    <div :class="[type, 'tip-part']">
      <slot name="tip-part"></slot>
      <div class="arrow"></div>
      <div class="block"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hover-tip",

  props: {
    type: { type: String, default: "top-center" },
    customClass: { type: String, default: "" }
  }
};
</script>

<style lang="scss">
$base-offset: 8px;
$arrow-size: 10px;

.hover-tip {
  position: relative;
  display: inline-flex;
  .hover-part {
    display: flex;
    align-items: center;
  }
  .tip-part {
    display: none;
    padding: 20px;
    width: max-content;
    white-space: normal;
    word-break: break-all;
    border-radius: 4px;
    background-color: #fff;
    border-color: transparent #fff transparent transparent;
    box-shadow: 0 0 4px 0 #babec1;
    z-index: 2;

    .arrow {
      position: absolute;
      width: $arrow-size;
      height: $arrow-size;
      background-color: #fff;
      box-shadow: 0 0 4px 0 #babec1;
    }
    .block {
      position: absolute;
      background: #fff;
    }
  }
  .hover-part:hover + .tip-part {
    display: block;
  }
  .left-center,
  .right-center {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .arrow {
      top: 50%;
    }
    .block {
      top: 50%;
      width: 8px;
      height: 15px;
      transform: translateY(-50%);
    }
  }
  .right-center {
    margin-left: $base-offset;
    left: 100%;

    .arrow {
      left: 0;
      transform: translateY(-50%) translateX(-50%) rotateZ(45deg);
    }
    .block {
      left: 0;
    }
  }
  .left-center {
    margin-right: $base-offset;
    right: 100%;

    .arrow {
      right: 0;
      transform: translateY(-50%) translateX(50%) rotateZ(45deg);
    }
    .block {
      right: 0;
    }
  }
  .top-center,
  .bottom-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .arrow {
      left: 50%;
    }
    .block {
      left: 50%;
      width: 15px;
      height: 8px;
      transform: translateX(-50%);
    }
  }
  .bottom-center {
    margin-top: $base-offset;
    top: 100%;

    .arrow {
      top: 0;
      transform: translateY(-50%) translateX(-50%) rotateZ(45deg);
    }
    .block {
      top: 0;
    }
  }
  .top-center {
    margin-bottom: $base-offset;
    bottom: 100%;

    .arrow {
      bottom: 0;
      transform: translateY(50%) translateX(-50%) rotateZ(45deg);
    }
    .block {
      bottom: 0;
    }
  }
}
</style>
