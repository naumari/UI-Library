<template>
  <Demo-block title="Slider 滑块" subtitle="通过拖动滑块在一个固定区间内进行选择。" :README="README">
    <Demo-row title="基础用法" description="当用户操作时，左右滑动，快速改变数值" :code="example1">
      <fat-slider/>
    </Demo-row>

    <Demo-row title="基本设置" description="设定min为20，max为40，step为5" :code="example2">
      <fat-slider :min="20" :max="40" step="5" />
    </Demo-row>

    <Demo-row title="自定义初始值" description="可自定义初始值数值" :code="example3">
      <fat-slider v-model="initValue" />
    </Demo-row>

    <Demo-row title="隐藏Tooltip" :description="`隐藏Tooltip，取消提示功能，值为${ value }`" :code="example4">
      <fat-slider v-model="value" :show-tooltip="false"/>
    </Demo-row>

    <Demo-row title="禁用状态" description="禁用该组件" :code="example5">
      <fat-slider disabled />
    </Demo-row>
  </Demo-block>
</template>

<script>
import DemoCommon from "../common/demo-common";
import README from "./README.md";

export default {
  mixins: [DemoCommon],
  data() {
    return {
      initValue: 10,
      value: 10,

      README
    };
  },
  computed: {
    example1() {
      return `<fat-slider />`;
    },
    example2() {
      return `<fat-slider :min="20" :max="40" step="5" />`;
    },
    example3() {
      return `<fat-slider v-model="initValue" />`;
    },
    example4() {
      return `<fat-slider v-model="value" :show-tooltip="false" />`;
    },
    example5() {
      return `<fat-slider disabled />`
    }
  }
};
</script>
<style lang="scss">
.demo-row {
  .row-item-subtitle {
    min-width: 100px;
  }
  .row-item {
    margin-top: 32px;
  }
  .slider-wrapper {
    max-width: 520px;
    flex: 1;
  }
}
</style>
