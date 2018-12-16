<template>
  <div class="demo-block">
    <div class="demo-title">MessageBox 弹框</div>
    <div class="demo-subtitle demo-row">模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</div>

    <div class="demo-row" @click.stop="handleClick('alert')">
      <span class="demo-row-subtitle">消息提示</span>
      <span>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</span>

      <div class="demo-row_content">
        <fat-button class="demo-toast-btn">点击打开</fat-button>
      </div>
    </div>

    <div class="demo-row" @click.stop="handleClick('confirm')">
      <span class="demo-row-subtitle">确认消息</span>
      <span>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</span>

      <div class="demo-row_content">
        <fat-button class="demo-toast-btn">点击打开</fat-button>
      </div>
    </div>

    <div class="demo-row" @click.stop="handleClick('custom-content')">
      <span class="demo-row-subtitle">自定义</span>
      <span>可自定义配置不同内容。</span>

      <div class="demo-row_content">
        <fat-button class="demo-toast-btn">点击打开</fat-button>
      </div>
    </div>

    <div class="demo-row" @click.stop="handleClick('custom')">
      <span class="demo-row-subtitle">区分取消与关闭</span>
      <span>有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。</span>

      <div class="demo-row_content">
        <fat-button class="demo-toast-btn">点击打开</fat-button>
      </div>
    </div>

    <div class="demo-row" @click.stop="handleClick('close')">
      <span class="demo-row-subtitle">取消自动关闭，手动控制</span>
      <span>有些场景下，需要手动控制关闭。</span>

      <div class="demo-row_content">
        <fat-button class="demo-toast-btn">点击打开</fat-button>
      </div>
    </div>

    <div class="markdown-body" v-html="compiledMarkdown" v-highlight></div>
  </div>
</template>

<script>
import README from "./README.md";

export default {
  data() {
    return {};
  },
  computed: {
    compiledMarkdown: function() {
      return this.$marked(README, { sanitize: true });
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
              this.$toast({
                content: "确定",
                autoClose: true
              })
          });
          break;
        case "confirm":
          this.$confirm({
            title: "提示",
            content: "此操作不可撤回，确定么?",
            onConfirm: () =>
              this.$toast({
                content: "确定",
                autoClose: true
              }),
            onCancel: () =>
              this.$toast({
                type: "warn",
                content: "取消",
                autoClose: true
              })
          });
          break;
        case "custom-content":
          this.$confirm({
            title: "自定义提示",
            content: `<h1 style="color: red;">自定义HTML</h1>`,
            onConfirm: () =>
              this.$toast({
                content: "确定",
                autoClose: true
              }),
            onCancel: () =>
              this.$toast({
                type: "warn",
                content: "取消",
                autoClose: true
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
              this.$toast({
                content: "保存",
                autoClose: true
              }),
            onCancel: () =>
              this.$toast({
                type: "warn",
                content: "放弃",
                autoClose: true
              })
          });
          break;
        case "close":
          this.$alert({
            title: "提示",
            content: "确认关闭",
            cancelClose: true,
            onConfirm() {
              _self.$toast({
                type: "warn",
                content: "500ms后关闭",
                autoClose: true
              });
              setTimeout(() => {
                this.close();
              }, 500);
            }
          });
          break;
      }
    }
  }
};
</script>
<style lang="scss">
</style>
