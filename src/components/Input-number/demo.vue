<template>
  <Demo-block title="InputNumber 计数器" subtitle="仅允许输入标准的数字值，可定义范围。" :README="README">
    <Demo-row title="基础用法" :description="`点击+\-按钮(当前值为${ value }`" :code="example1">
      <fat-input-number v-model="value"/>
    </Demo-row>

    <Demo-row title="禁用状态" description="禁止点击和输入" :code="example2">
      <fat-input-number disabled/>
    </Demo-row>

    <Demo-row title="步数" description="允许定义递增递减的步数控制(step为5)" :code="example3">
      <fat-input-number :step="5" v-model="stepValue"/>
    </Demo-row>

    <Demo-row title="最大,最小值限制" description="超出范围,按钮禁用" :code="example4">
      <fat-input-number :max="20" :min="0" :step="5" v-model="limitValue"/>
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
      README,

      value: 0,
      stepValue: 0,
      limitValue: 0
    };
  },
  computed: {
    example1() {
      return `<fat-input-number v-model="value"/>`;
    },
    example2() {
      return `<fat-input-number disabled/>`;
    },
    example3() {
      return `<fat-input-number :step="5" v-model="stepValue"/>`;
    },
    example4() {
      return `<fat-input-number :max="20" :min="0" :step="5" v-model="limitValue"/>`;
    }
  }
};
</script>
<style lang="scss">
.demo-row-content {
  .input-wrapper {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
}
.prepend-part,
.append-part {
  display: block;
  padding: 0 $s-offset;
  height: 32px;
  line-height: 32px;
  background-color: #fafafa;
  border: 1px solid $main-color;
  border-radius: $base-radius 0 0 $base-radius;
}
.append-part {
  border-radius: 0 $base-radius $base-radius 0;
}
</style>
