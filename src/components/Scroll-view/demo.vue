<template>
  <Demo-block title="Slider 滑块" subtitle="通过拖动滑块在一个固定区间内进行选择。" :README="README">
    <Demo-row title="基础用法" description="当用户操作时，左右滑动，快速改变数值" :code="example1">
      <fat-scroll-view>
          <div style="width: max-content;">
              <p v-for="(item, index) in tests" :key="index">{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}{{ item }}</p>
          </div>
      </fat-scroll-view>
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

      tests: Array.from({length: 20}, (v, i) => i),
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
  },
  created() {
    // let size = 40
    // setInterval(() => {
    //     this.tests = Array.from({length: size}, (v, i) => i)
    //     size += 40
    // }, 100)
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
