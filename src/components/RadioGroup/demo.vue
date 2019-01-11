<template>
  <Demo-block title="RadioGroup 单选框组" subtitle="在一组备选项中进行单选。" :README="README">
    <Demo-row title="基础用法" description="适用于在多个互斥的选项中选择的场景" :code="example1">
      <fat-radio-group v-model="value">
        <fat-radio :value="1">备选项</fat-radio>
        <fat-radio :value="2">备选项</fat-radio>
      </fat-radio-group>
    </Demo-row>

    <Demo-row title="单独使用Radio组件" description="适用少量互斥选项" :code="example2">
      <fat-radio v-model="otherValue" value="1">备选项</fat-radio>
      <fat-radio v-model="otherValue" value="2">备选项</fat-radio>
    </Demo-row>

    <Demo-row title="禁用状态" description="单选框不可用的状态" :code="example3">
      <fat-radio-group v-model="anotherValue">
        <fat-radio :value="1">备选项</fat-radio>
        <fat-radio :value="2" disabled>备选项</fat-radio>
      </fat-radio-group>
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
      value: 1,
      otherValue: 1,
      anotherValue: 1,

      README
    };
  },
  computed: {
    example1() {
      return `<fat-radio-group v-model="value">
    <fat-radio :value="1">备选项</fat-radio>
    <fat-radio :value="2">备选项</fat-radio>
</fat-radio-group>`;
    },
    example2() {
      return `<fat-radio v-model="otherValue" value="1">备选项</fat-radio>
<fat-radio v-model="otherValue" value="2">备选项</fat-radio>`;
    },
    example3() {
      return `<fat-radio-group v-model="anotherValue">
    <fat-radio :value="1">备选项</fat-radio>
    <fat-radio :value="2" disabled>备选项</fat-radio>
</fat-radio-group>`;
    }
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
