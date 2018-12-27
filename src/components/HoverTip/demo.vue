<template>
  <Demo-block title="HoverTip Hover提示" subtitle="常用于展示鼠标 hover 时的提示信息。" :README="README">
    <div class="demo-row">
      <span class="demo-row-subtitle">基本用法</span>
      <span>提供 4 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</span>

      <div class="demo-row-content">
        <div class="row-content-item">
          <span>Tip 向上显示</span>
          <fat-hovertip>
            <template slot="tip-part">向上</template>
          </fat-hovertip>
        </div>

        <div class="row-content-item">
          <span>Tip 向下显示</span>
          <fat-hovertip type="bottom-center">
            <template slot="tip-part">向下</template>
          </fat-hovertip>
        </div>

        <div class="row-content-item">
          <span>Tip 向右显示</span>
          <fat-hovertip type="right-center">
            <template slot="tip-part">向右</template>
          </fat-hovertip>
        </div>

        <div class="row-content-item">
          <span>Tip 向左显示</span>
          <fat-hovertip type="left-center">
            <template slot="tip-part">向左</template>
          </fat-hovertip>
        </div>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">自定义Hover-part</span>
      <span>提供 4 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</span>

      <div class="demo-row-content">
        <div class="row-content-item">
          <fat-hovertip>
            <template slot="hover-part">文字</template>
            <template slot="tip-part">文字</template>
          </fat-hovertip>
        </div>

        <div class="row-content-item">
          <fat-hovertip>
            <template slot="hover-part">
              <fat-button>组件</fat-button>
            </template>
            <template slot="tip-part">向下</template>
          </fat-hovertip>
        </div>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">自定义Tip-part</span>
      <span>提供 4 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</span>

      <div class="demo-row-content">
        <div class="row-content-item">
          <fat-hovertip type="right-center">
            <template slot="hover-part">展示图片</template>
            <template slot="tip-part">
              <img src="http://img5.imgtn.bdimg.com/it/u=2291808233,1250989260&fm=26&gp=0.jpg" alt>
            </template>
          </fat-hovertip>
        </div>
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
  }
};
</script>
<style lang="scss" scoped>
.demo-row-content {
  .row-content-item {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #5e6d82;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
    span:first-child {
      margin-right: 16px;
    }
  }
}
</style>
