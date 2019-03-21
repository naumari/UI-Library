<template>
  <Demo-block title="Dropdown 下拉菜单" subtitle="将动作或菜单折叠到下拉菜单中。" :README="README">
    <Demo-row title="基础用法" description="默认设定四个尺寸的按钮，通过size来区分" :code="example1">
      <fat-dropdown title="姓名：">
          <fat-input />
      </fat-dropdown>
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
      nodeList: [],

      README
    };
  },
  computed: {
    example1() {
      return `<fat-button class="btn" size="mini">超小按钮</fat-button>
<fat-button class="btn" size="small">小型按钮</fat-button>
<fat-button class="btn" size="medium">默认按钮</fat-button>
<fat-button class="btn" size="large">大型按钮</fat-button>`;
    },
    example2() {
      return `<fat-button class="btn">
    <fat-icon name="done"/>确定
</fat-button>
<fat-button class="btn">
    <fat-icon name="pets"/>确定
</fat-button>
<fat-button class="btn">
    <fat-icon name="search"/>确定
</fat-button>`;
    },
    example3() {
      return `<fat-button class="btn" type="primary" @click="handleClick">primary</fat-button>
<fat-button class="btn" type="success">success</fat-button>
<fat-button class="btn" type="warning">warning</fat-button>
<fat-button class="btn" type="error">error</fat-button>
<fat-button class="btn" type="text">文字按钮</fat-button>`;
    },
    example4() {
      return `<fat-button class="btn" type="primary" disabled>primary</fat-button>
<fat-button class="btn" type="success" disabled>success</fat-button>
<fat-button class="btn" type="warning" disabled>warning</fat-button>
<fat-button class="btn" type="error" disabled>error</fat-button>
<fat-button class="btn" type="text" disabled>文字按钮</fat-button>`;
    }
  }
};
</script>
<style lang="scss">
</style>
