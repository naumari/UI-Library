<template>
  <div class="hover-tip">
    <div class="hover-tip__part">
      <slot name="hover-part">
        <fat-icon name="help" size="18" />
      </slot>
    </div>
    <div :class="[type, 'hover-tip__tip']">
      <slot name="tip-part"></slot>
      <div class="tip__arrow"></div>
      <div class="tip__block"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hover-tip",

  props: {
    type: { type: String, default: "top-center" }
  }
};
</script>

<style lang="scss">
$base-offset: 8px;
$tip__arrow-size: 10px;

.hover-tip {
  position: relative;
  display: inline-flex;
  .hover-tip__part {
    display: flex;
    align-items: center;
  }
  .hover-tip__tip {
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

    .tip__arrow {
      position: absolute;
      width: $tip__arrow-size;
      height: $tip__arrow-size;
      background-color: #fff;
      box-shadow: 0 0 4px 0 #babec1;
    }
    .tip__block {
      position: absolute;
      background: #fff;
    }
  }
  .hover-tip__part:hover + .hover-tip__tip {
    display: block;
  }
  .left-center,
  .right-center {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .tip__arrow {
      top: 50%;
    }
    .tip__block {
      top: 50%;
      width: 8px;
      height: 15px;
      transform: translateY(-50%);
    }
  }
  .right-center {
    margin-left: $base-offset;
    left: 100%;

    .tip__arrow {
      left: 0;
      transform: translateY(-50%) translateX(-50%) rotateZ(45deg);
    }
    .tip__block {
      left: 0;
    }
  }
  .left-center {
    margin-right: $base-offset;
    right: 100%;

    .tip__arrow {
      right: 0;
      transform: translateY(-50%) translateX(50%) rotateZ(45deg);
    }
    .tip__block {
      right: 0;
    }
  }
  .top-center,
  .bottom-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .tip__arrow {
      left: 50%;
    }
    .tip__block {
      left: 50%;
      width: 15px;
      height: 8px;
      transform: translateX(-50%);
    }
  }
  .bottom-center {
    margin-top: $base-offset;
    top: 100%;

    .tip__arrow {
      top: 0;
      transform: translateY(-50%) translateX(-50%) rotateZ(45deg);
    }
    .tip__block {
      top: 0;
    }
  }
  .top-center {
    margin-bottom: $base-offset;
    bottom: 100%;

    .tip__arrow {
      bottom: 0;
      transform: translateY(50%) translateX(-50%) rotateZ(45deg);
    }
    .tip__block {
      bottom: 0;
    }
  }
}
</style>
