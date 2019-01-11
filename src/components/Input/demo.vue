<template>
  <Demo-block title="Input 输入框" subtitle="通过鼠标或键盘输入内容，是最基础的表单域的包装。" :README="README">
    <Demo-row title="基础用法" description="键盘输入内容" :code="example1">
      <fat-input placeholder="请输入内容" v-model="inputValue"/>
      <span class="c-size-s">输入内容为：{{ inputValue }}</span>
    </Demo-row>

    <Demo-row title="禁用状态" description="禁用该组件" :code="example2">
      <fat-input disabled placeholder="请输入内容"/>
    </Demo-row>

    <Demo-row title="带icon的输入框" description="带有图标标记输入类型" :code="example3">
      <fat-input placeholder="请输入内容" prefix-icon="search"/>
      <fat-input placeholder="请输入内容" suffix-icon="date_range"/>
    </Demo-row>

    <Demo-row class="slot-row-item" title="复合型输入框" description="可前置或后置元素，一般为标签或按钮" :code="example4">
      <fat-input placeholder="请输入内容">
        <template slot="prepend">
          <div class="prepend-part c-size-s">Http://</div>
        </template>

        <template slot="append">
          <div class="append-part c-size-s">.com</div>
        </template>
      </fat-input>
    </Demo-row>

    <Demo-row
      class="slot-row-item"
      title="文本域"
      description="用于输入多行文本信息，通过将 type 属性的值指定为 textarea"
      :code="example5"
    >
      <fat-input type="textarea" placeholder="请输入内容"/>
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

      inputValue: "hello world"
    };
  },
  computed: {
    example1() {
      return `<fat-input placeholder="请输入内容" v-model="inputValue" />`;
    },
    example2() {
      return `<fat-input disabled placeholder="请输入内容" />`;
    },
    example3() {
      return `<fat-input placeholder="请输入内容" prefix-icon="search" />
<fat-input placeholder="请输入内容" suffix-icon="date_range" />`;
    },
    example4() {
      return `<fat-input placeholder="请输入内容">
    <template slot="prepend">
        <div class="prepend-part c-size-s">Http://</div>
    </template>

    <template slot="append">
        <div class="append-part c-size-s">.com</div>
    </template>
</fat-input>`;
    },
    example5() {
      return `<fat-input type="textarea" placeholder="请输入内容"/>`;
    }
  },
  methods: {
    handleClick() {
      console.log("handleClick");
    }
  }
};
</script>
<style lang="scss">
.demo-row-content {
  .input-wrapper {
    width: 240px;
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
