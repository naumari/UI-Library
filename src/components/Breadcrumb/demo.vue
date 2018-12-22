<template>
  <Demo-block title="Breadcrumb 面包屑" subtitle="显示当前页面的路径，快速返回之前的任意页面。" :README="README ">
    <div class="demo-row">
      <span class="demo-row-subtitle">基础用法</span>
      <span>适用广泛的基础用法。</span>

      <div class="demo-row-content">
        <fat-breadcrumb
          separator="/"
          :paths="[{ name: '首页', to: '/' }, { name: '面包屑', to: '/Breadcrumb' }, { name: '标签页', to: '/Tabs' }]"
        />
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">图标分隔符</span>
      <span>采用图标来分割不同的cumb。</span>

      <div class="demo-row-content">
        <fat-breadcrumb
          separator-icon="keyboard_arrow_right"
          :paths="[{ name: '首页', to: '/' }, { name: '面包屑', to: '/Breadcrumb' }, { name: '标签页', to: '/Tabs' }]"
        />
      </div>
    </div>
  </Demo-block>
</template>

<script>
import DemoBlock from "../common/demo-block";
import README from "./README.md";

export default {
  components: {
    DemoBlock
  },
  data() {
    return {
      README
    };
  },
  methods: {
    handleClick(event) {
      alert("button click");
    }
  }
};
</script>
<style lang="scss">
</style>
