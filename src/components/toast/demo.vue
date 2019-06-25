<template>
  <Demo-block title="Toast 弹窗" subtitle="悬浮出现在页面角落，显示全局的通知提醒消息。" :README="README">
    <Demo-row title="基础用法" :code="example1">
      <fat-button class="demo-toast-btn" name="normal" @click.stop="handleClick">可自动关闭</fat-button>
      <fat-button class="demo-toast-btn" name="normal-close" @click.stop="handleClick">不可自动关闭</fat-button>
      <fat-button class="demo-toast-btn" name="normal-hide" @click.stop="handleClick">隐藏关闭按钮</fat-button>
    </Demo-row>

    <Demo-row title="不同类型" :code="example2">
      <fat-button class="demo-toast-btn" name="warn" @click.stop="handleClick">警告</fat-button>
      <fat-button class="demo-toast-btn" name="info" @click.stop="handleClick">消息</fat-button>
      <fat-button class="demo-toast-btn" name="error" @click.stop="handleClick">错误</fat-button>
      <fat-button class="demo-toast-btn" name="success" @click.stop="handleClick">成功</fat-button>
    </Demo-row>

    <Demo-row title="不同位置" :code="example3">
      <fat-button class="demo-toast-btn" name="left" @click.stop="handleClick">左上</fat-button>
      <fat-button class="demo-toast-btn" name="right" @click.stop="handleClick">右上</fat-button>
    </Demo-row>

    <Demo-row title="监听事件" :code="example4">
      <fat-button class="demo-toast-btn" name="callback" @click.stop="handleClick">监听toast的关闭</fat-button>
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
      return `this.$toast({
    content: "可自动关闭"
});
this.$toast({
    content: "不可自动关闭",
    autoClose: false
});
this.$toast({
    content: "隐藏关闭按钮",
    showClose: false
});`;
    },
    example2() {
      return `this.$toast({
    type,
    content
});`;
    },
    example3() {
      return `this.$toast({
    content,
    position
});`
    },
    example4() {
      return `this.$toast({
    ...
    onClose() {
        this.$message({
        content: "toast 已经关闭",
        position: "top-left"
        });
    }
});`
    }
  },
  methods: {
    handleClick() {
      let selector = event.target.name;

      switch (selector) {
        case "normal":
          this.$toast({
            content: "可自动关闭"
          });
          break;
        case "normal-close":
          this.$toast({
            content: "不可自动关闭",
            autoClose: false
          });
          break;
        case "normal-hide":
          this.$toast({
            content: "隐藏关闭按钮",
            showClose: false
          });
          break;
        case "warn":
        case "info":
        case "success":
        case "error":
          this.$toast({
            type: selector,
            content: `Content ${selector}`
          });
          break;
        case "left":
        case "right":
        case "center":
          this.$toast({
            content: `Content ${selector}`,
            position: `top-${selector}`
          });
          break;
        case "callback":
          this.$toast({
            content: `Content ${selector}`,
            position: `top-right`,
            onClose() {
              this.$message({
                content: "toast 已经关闭",
                position: "top-left"
              });
            }
          });
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="scss">
</style>
