<template>
  <Demo-block title="RadioGroup 单选框组" subtitle="在一组备选项中进行单选。" :README="README">
    <div class="demo-row">
      <span class="demo-row-subtitle">基础用法</span>
      <span>适用于在多个互斥的选项中选择的场景。</span>

      <div class="demo-row-content">
        <fat-radio-group v-model="value">
          <fat-radio :value="1">备选项</fat-radio>
          <fat-radio :value="2">备选项</fat-radio>
        </fat-radio-group>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">单独使用Radio组件</span>
      <span>适用少量互斥选项。</span>

      <div class="demo-row-content">
        <fat-radio v-model="otherValue" value="1">备选项</fat-radio>
        <fat-radio v-model="otherValue" value="2">备选项</fat-radio>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">禁用状态</span>
      <span>单选框不可用的状态。</span>

      <div class="demo-row-content">
        <fat-radio-group v-model="anotherValue">
          <fat-radio :value="1">备选项</fat-radio>
          <fat-radio :value="2" disabled>备选项</fat-radio>
        </fat-radio-group>
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
      value: 1,
      otherValue: 1,
      anotherValue: 1,

      README
    };
  },
  watch: {
    value(value) {
      console.log("watch", value);
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
