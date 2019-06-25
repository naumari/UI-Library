<template>
  <Demo-block title="Message 消息提示" subtitle="常用于主动操作后的反馈提示。" :README="README">
    <Demo-row title="基本用法" description="从顶部出现，2 秒后自动消失" :code="example1">
      <fat-button class="demo-toast-btn" @click.stop="handleClick()">点击打开</fat-button>
    </Demo-row>

    <Demo-row title="不同状态" description="提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框" :code="example1">
      <fat-button class="demo-toast-btn" @click.stop="handleClick('success')">成功</fat-button>
      <fat-button class="demo-toast-btn" @click.stop="handleClick('warn')">警告</fat-button>
      <fat-button class="demo-toast-btn" @click.stop="handleClick('info')">消息</fat-button>
      <fat-button class="demo-toast-btn" @click.stop="handleClick('error')">错误</fat-button>
    </Demo-row>

    <Demo-row title="使用HTML片段" description="content属性支持传入 HTML 片段" :code="example1">
      <fat-button class="demo-toast-btn" @click.stop="handleClick('info', 'html')">点击打开</fat-button>
    </Demo-row>

    <Demo-row title="自定义垂直偏移量" description="用户自定义Message组件的位置" :code="example1">
      <fat-button class="demo-toast-btn" @click.stop="handleClick('info', '', 64)">点击打开</fat-button>
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
      return ` this.$message({
    type,
    content,
    verticalOffset,
    onClose() {
        console.log("close");
    }
});`
    }
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
