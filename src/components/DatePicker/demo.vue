<template>
  <Demo-block title="Date-Picker 日期选择器" subtitle="用于选择或输入日期" :README="README ">
    <Demo-row title="基础用法" :description="`当前日期${date.toLocaleDateString()}`" :code="example1">
      <fat-date-picker class="cn-picker" v-model="date" />
    </Demo-row>

    <Demo-row title="英文" :description="`当前日期${secDate.toLocaleDateString()}`" :code="example2">
      <fat-date-picker class="en-picker" lang="EN" v-model="secDate" />
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

      date: new Date(),
      secDate: new Date()
    };
  },
  computed: {
    example1() {
      return `<fat-date-picker v-model="date" />`;
    },
    example2() {
      return `<fat-date-picker class="en-picker" lang="EN" v-model="secDate" />`;
    }
  },
  methods: {

  }
};
</script>
<style lang="scss">
.cn-picker {
    z-index: 2;
}
.en-picker {
    z-index: 1;
}
</style>