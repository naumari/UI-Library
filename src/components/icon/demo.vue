<template>
  <Demo-block title="Icon 图标" subtitle="基础的图标。" :README="README">
    <div class="demo-row">
      <span class="demo-row-subtitle">不同类型的图标</span>
      <span>依据material-design-icons的icon，定义name属性，可以显示不同类型的图标。</span>

      <div class="demo-row-content">
        <fat-icon name="backup" size="32"/>
        <fat-icon name="book" size="32"/>
        <fat-icon name="bookmark" size="32"/>
        <fat-icon name="code" size="32"/>
        <fat-icon name="done" size="32"/>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">可调整大小</span>
      <span>依据size属性，可以显示不同大小的图标。</span>

      <div class="demo-row-content">
        <fat-icon name="done_all" size="16"/>
        <fat-icon name="face" size="24"/>
        <fat-icon name="extension" size="32"/>
        <fat-icon name="help" size="40"/>
        <fat-icon name="input" size="48"/>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">可调整样式</span>
      <span>可自定义图标的样式。</span>

      <div class="demo-row-content">
        <fat-icon class="icon" name="done_all" size="16"/>
        <fat-icon class="icon" name="pets" size="24"/>
        <fat-icon class="icon" name="print" size="32"/>
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
      README
    };
  }
};
</script>
<style lang="scss" scoped>
.icon:nth-of-type(1) {
  color: red;
}
.icon:nth-of-type(2) {
  color: green;
}
.icon:nth-of-type(3) {
  color: antiquewhite;
}
.demo-row {
  .material-icons {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }
}
</style>
