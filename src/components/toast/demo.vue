<template>
    <div class="demo-block">
      <div class="demo-title">Toast 弹窗</div>
      <div class="demo-subtitle">基本用法</div>

      <div class="demo-row" @click.stop="handleClick">
        <fat-button class="demo-toast-btn" name="normal">可自动关闭</fat-button>
        <fat-button class="demo-toast-btn" name="normal-close">不可自动关闭</fat-button>
        <fat-button class="demo-toast-btn" name="normal-hide">隐藏关闭按钮</fat-button>
      </div>

      <div class="demo-row" @click.stop="handleClick">
        <fat-button class="demo-toast-btn" name="warn">警告</fat-button>
        <fat-button class="demo-toast-btn" name="info">消息</fat-button>
        <fat-button class="demo-toast-btn" name="error">错误</fat-button>
        <fat-button class="demo-toast-btn" name="success">成功</fat-button>
      </div>

      <div class="demo-row" @click.stop="handleClick">
        <fat-button class="demo-toast-btn" name="left">左上</fat-button>
        <fat-button class="demo-toast-btn" name="right">右上</fat-button>
      </div>

      <div class="demo-row" @click.stop="handleClick">
        <fat-button class="demo-toast-btn" name="callback">监听toast的关闭</fat-button>
      </div>
      <div class="markdown-body" v-html="compiledMarkdown" v-highlight></div>
    </div>
</template>

<script>
import README from './README.md'

export default {
  data() {
    return {}
  },
  computed: {
    compiledMarkdown: function () {
      return this.$marked(README, { sanitize: true })
    }
  },
  methods: {
    handleClick() {
      let selector = event.target.name;

      switch (selector) {
        case "normal":
          this.$toast({
            content: "可自动关闭",
            autoClose: true
          })
          break
        case "normal-close":
          this.$toast({
            content: "不可自动关闭"
          })
          break
        case "normal-hide":
          this.$toast({
            content: "隐藏关闭按钮",
            autoClose: true,
            showClose: false
          })
          break
        case "warn":
        case "info":
        case "success":
        case "error":
          this.$toast({
            type: selector,
            content: `Content ${selector}`
          })
          break
        case "left":
        case "right":
        case "center":
          this.$toast({
            content: `Content ${selector}`,
            position: `top-${selector}`,
            autoClose: true
          });
          break
        case "callback":
          this.$toast({
            content: `Content ${selector}`,
            position: `top-right`,
            autoClose: true,
            onClose() {
              this.$toast({
                content: "toast 已经关闭",
                position: "top-left",
                autoClose: true
              })
            }
          })
          break
        default:
          break
      }
    }
  }
};
</script>
<style lang="scss">
</style>
