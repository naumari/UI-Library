<template>
  <Demo-block title="HoverTip Hover提示" subtitle="常用于展示鼠标 hover 时的提示信息。" :README="README">
    <Demo-row title="基本用法" description="提供 4 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果" :code="example1">
      <div class="row-content-item">
        <span>Tip 向上显示</span>
        <fat-hover-tip>
          <template slot="tip-part">向上</template>
        </fat-hover-tip>
      </div>

      <div class="row-content-item">
        <span>Tip 向下显示</span>
        <fat-hover-tip type="bottom-center">
          <template slot="tip-part">向下</template>
        </fat-hover-tip>
      </div>

      <div class="row-content-item">
        <span>Tip 向右显示</span>
        <fat-hover-tip type="right-center">
          <template slot="tip-part">向右</template>
        </fat-hover-tip>
      </div>

      <div class="row-content-item">
        <span>Tip 向左显示</span>
        <fat-hover-tip type="left-center">
          <template slot="tip-part">向左</template>
        </fat-hover-tip>
      </div>
    </Demo-row>

    <Demo-row title="自定义Hover-part" description="利用具名插槽来自定义Hover内容" :code="example2">
      <div class="row-content-item">
        <fat-hover-tip>
          <template slot="hover-part">文字</template>
          <template slot="tip-part">文字</template>
        </fat-hover-tip>
      </div>

      <div class="row-content-item">
        <fat-hover-tip>
          <template slot="hover-part">
            <fat-button>组件</fat-button>
          </template>
          <template slot="tip-part">向下</template>
        </fat-hover-tip>
      </div>
    </Demo-row>

    <Demo-row title="自定义Tip-part" description="利用具名插槽来自定义Tip内容" :code="example3">
      <div class="row-content-item">
        <fat-hover-tip type="right-center">
          <template slot="hover-part">展示图片</template>
          <template slot="tip-part">
            <img src="/static/img/gakki.jpg" alt="示意图">
          </template>
        </fat-hover-tip>
      </div>
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
      README
    };
  },
  computed: {
    example1() {
      return `<fat-hover-tip>
    <template slot="tip-part">向上</template>
</fat-hover-tip>
<fat-hover-tip type="bottom-center">
    <template slot="tip-part">向下</template>
</fat-hover-tip>
<fat-hover-tip type="right-center">
    <template slot="tip-part">向右</template>
</fat-hover-tip>
<fat-hover-tip type="left-center">
    <template slot="tip-part">向左</template>
</fat-hover-tip>`;
    },
    example2() {
      return `<fat-hover-tip>
    <template slot="hover-part">文字</template>
    <template slot="tip-part">文字</template>
</fat-hover-tip>
<fat-hover-tip>
    <template slot="hover-part">
        <fat-button>组件</fat-button>
    </template>
    <template slot="tip-part">向下</template>
</fat-hover-tip>`;
    },
    example3() {
      return `<fat-hover-tip type="right-center">
    <template slot="hover-part">展示图片</template>
    <template slot="tip-part">
        <img
        src="/static/img/gakki.jpg"
        alt="示意图"
        >
    </template>
</fat-hover-tip>`;
    }
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
