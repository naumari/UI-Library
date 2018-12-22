<template>
  <Demo-block title="Slider 滑块" subtitle="通过拖动滑块在一个固定区间内进行选择。" :README="README">
    <div class="demo-row">
      <span class="demo-row-subtitle">基础用法</span>
      <span>当用户操作时，左右滑动，快速改变数值。</span>

      <div class="demo-row-content">
        <fat-slider/>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">基本设置</span>
      <span>设定min为20，max为40，step为5。</span>

      <div class="demo-row-content">
        <fat-slider :min="20" :max="40" step="5"/>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">自定义初始值</span>
      <span>可自定义初始值数值。</span>

      <div class="demo-row-content">
        <fat-slider v-model="initValue"/>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">隐藏Tooltip</span>
      <span>隐藏Tooltip，取消提示功能，值为{{ value }}。</span>

      <div class="demo-row-content">
        <fat-slider v-model="value" :show-tooltip="false"/>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">Disabled</span>
      <span>disable 该组件，无法拖拽</span>

      <div class="demo-row-content">
        <fat-slider disabled/>
      </div>
    </div>
  </Demo-block>
</template>

<script>
import DemoBlock from "../common/demo-block";
import "material-design-icons";
import README from "./README.md";

export default {
  components: {
    DemoBlock
  },
  data() {
    return {
      initValue: 10,
      value: 10,

      README
    };
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
