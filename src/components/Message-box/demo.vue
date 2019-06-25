<template>
  <Demo-block
    title="MessageBox 弹框"
    subtitle="模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。"
    :README="README"
  >
    <Demo-row title="消息提示" description="当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭" :code="example1">
      <fat-button class="demo-message-btn"  @click.stop="handleClick('alert')">点击打开</fat-button>
    </Demo-row>

    <Demo-row title="自定义" description="可自定义配置不同内容" :code="example2">
      <fat-button class="demo-message-btn" @click.stop="handleClick('custom-content')">点击打开</fat-button>
    </Demo-row>

    <Demo-row title="区分取消与关闭" description="有些场景下，点击取消按钮与点击关闭按钮有着不同的含义" :code="example3">
      <fat-button class="demo-message-btn" @click.stop="handleClick('custom')">点击打开</fat-button>
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
      return `this.$alert({
    title: "标题名称",
    content: "这是一段内容",
    onConfirm: () => this.$message({
        content: "确定"
    })
});`;
    },
    example2() {
      return `this.$confirm({
    title: "提示",
    content: "此操作不可撤回，确定么?",
    onConfirm: () => this.$message({
        content: "确定"
    }),
    onCancel: () => this.$message({
        type: "warn",
        content: "取消"
    })
});`
    },
    example3() {
      return `this.$confirm({
    title: "自定义提示",
    content: "自定义内容",
    confirmButtonText: "保存",
    cancelButtonText: "放弃",
    onConfirm: () => this.$message({
        content: "保存"
    }),
    onCancel: () => this.$message({
        type: "warn",
        content: "放弃"
    })
});`;
    }
  },
  methods: {
    handleClick(selector) {
      const _self = this;
      switch (selector) {
        case "alert":
          this.$alert({
            title: "标题名称",
            content: "这是一段内容",
            onConfirm: () =>
              this.$message({
                content: "确定"
              })
          });
          break;
        case "confirm":
          this.$confirm({
            title: "提示",
            content: "此操作不可撤回，确定么?",
            onConfirm: () =>
              this.$message({
                content: "确定"
              }),
            onCancel: () =>
              this.$message({
                type: "warn",
                content: "取消"
              })
          });
          break;
        case "custom-content":
          this.$confirm({
            title: "自定义提示",
            content: `<h1 style="color: red;">自定义HTML</h1>`,
            onConfirm: () =>
              this.$message({
                content: "确定"
              }),
            onCancel: () =>
              this.$message({
                type: "warn",
                content: "取消"
              })
          });
          break;
        case "custom":
          this.$confirm({
            title: "自定义提示",
            content: "自定义内容",
            confirmButtonText: "保存",
            cancelButtonText: "放弃",
            onConfirm: () =>
              this.$message({
                content: "保存"
              }),
            onCancel: () =>
              this.$message({
                type: "warn",
                content: "放弃"
              })
          });
          break;
      }
    }
  }
};
</script>
<style lang="scss">
</style>
