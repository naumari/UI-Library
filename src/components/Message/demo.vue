<template>
  <Demo-block title="Message 消息提示" subtitle="常用于主动操作后的反馈提示。" :README="README">
    <div class="demo-row">
      <span class="demo-row-subtitle">基本用法</span>
      <span>从顶部出现，2 秒后自动消失。</span>

      <div class="demo-row-content">
        <fat-button class="demo-toast-btn" @click.stop="handleClick()">点击打开</fat-button>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">不同状态</span>
      <span>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</span>

      <div class="demo-row-content">
        <fat-button class="demo-toast-btn" @click.stop="handleClick('success')">成功</fat-button>
        <fat-button class="demo-toast-btn" @click.stop="handleClick('warn')">警告</fat-button>
        <fat-button class="demo-toast-btn" @click.stop="handleClick('info')">消息</fat-button>
        <fat-button class="demo-toast-btn" @click.stop="handleClick('error')">错误</fat-button>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">使用HTML片段</span>
      <span>content属性支持传入 HTML 片段。</span>

      <div class="demo-row-content">
        <fat-button class="demo-toast-btn" @click.stop="handleClick('info', 'html')">点击打开</fat-button>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">自定义垂直偏移量</span>
      <span>用户自定义Message组件的位置。</span>

      <div class="demo-row-content">
        <fat-button class="demo-toast-btn" @click.stop="handleClick('info', '', 64)">点击打开</fat-button>
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
    handleClick(type = "info", text = "text", verticalOffset = 32) {
      const content =
        text !== "html" ? "提示内容" : `<p style="color: red;">提示内容</p>`;
      this.$message({
        type,
        content,
        verticalOffset,
        onClose() {
          console.log("close");
        }
      });
    }
  }
};
</script>
<style lang="scss">
</style>
