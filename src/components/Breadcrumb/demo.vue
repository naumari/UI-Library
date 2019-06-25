<template>
  <Demo-block title="Breadcrumb 面包屑" subtitle="显示当前页面的路径，快速返回之前的任意页面。" :README="README ">
    <Demo-row title="基础用法" description="适用广泛的基础用法" :code="example1">
      <fat-breadcrumb
        separator="/"
        :paths="[{ label: '首页', to: '/' }, { label: '面包屑', to: '/Breadcrumb' }, { label: '标签页', to: '/Tabs' }]"
      />
    </Demo-row>

    <Demo-row title="组件分隔符" description="利用组件来分割不同的cumb" :code="example2">
      <fat-breadcrumb
        :separator-component="separatorComponent"
        :paths="[{ label: '首页', to: '/' }, { label: '面包屑', to: '/Breadcrumb' }, { label: '标签页', to: '/Tabs' }]"
      />
    </Demo-row>
  </Demo-block>
</template>

<script>
import DemoCommon from "../common/demo-common";
import README from "./README.md";

export default {
  mixins: [DemoCommon],
  data() {
    const _h = this.$createElement;

    return {
      README,

      separatorComponent: _h("fat-icon", {
        props: {
          name: "keyboard_arrow_right"
        }
      })
    };
  },
  computed: {
    example1() {
      return `<fat-breadcrumb
    separator="/"
    :paths="[{ label: '首页', to: '/' }, { label: '面包屑', to: '/Breadcrumb' }, { label: '标签页', to: '/Tabs' }]"
/>`;
    },
    example2() {
      return `<fat-breadcrumb
    :separator-component="separatorComponent"
    :paths="[{ label: '首页', to: '/' }, { label: '面包屑', to: '/Breadcrumb' }, { label: '标签页', to: '/Tabs' }]"
/>`
    }
  }
};
</script>
<style lang="scss">
</style>
