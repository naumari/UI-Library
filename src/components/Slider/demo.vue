<template>
  <div class="demo-block">
    <h3 class="demo-title">Slider 滑块</h3>
    <span class="demo-subtitle demo-row">通过拖动滑块在一个固定区间内进行选择。</span>

    <div class="demo-row">
      <span class="demo-row-subtitle">基础用法</span>

      <div class="row-item">
        <span class="row-item-subtitle">默认</span>
        <fat-slider/>
      </div>

      <div class="row-item">
        <span class="row-item-subtitle">自定义初始值</span>
        <fat-slider v-model="range"/>
      </div>

      <div class="row-item">
        <span class="row-item-subtitle">隐藏Tooltip</span>
        <fat-slider :show-tooltip="false" />
      </div>

      <div class="row-item">
        <span class="row-item-subtitle">Disabled</span>
        <fat-slider :show-tooltip="false" disabled />
      </div>
    </div>

    <div class="markdown-body" v-html="compiledMarkdown" v-highlight></div>
  </div>
</template>

<script>
import "material-design-icons";
import README from "./README.md";

export default {
  data() {
    return {
      range: 10
    };
  },
  computed: {
    compiledMarkdown: function() {
      return this.$marked(README, { sanitize: true });
    }
  },
  methods: {
    handleClick() {
      console.log("11");
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
  .m-slider-wrap {
    max-width: 320px;
    flex: 1;
  }
}
</style>
