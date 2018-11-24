<template>
  <div class="demo-block">
    <h3 class="demo-title">Icon 图标</h3>
    <span class="demo-subtitle demo-row">基础的图标。</span>

    <div class="demo-row">
      <span class="demo-row-subtitle">不同类型的图标</span>

      <fat-icon name="backup" size="32" />
      <fat-icon name="book" size="32" />
      <fat-icon name="bookmark" size="32" />
      <fat-icon name="code" size="32" />
      <fat-icon name="done" size="32" />
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">可调整大小</span>

      <fat-icon name="done_all" size="32" />
      <fat-icon name="face" size="48" />
      <fat-icon name="extension" size="64" />
      <fat-icon name="help" size="80" />
      <fat-icon name="input" size="96" />
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">可调整样式</span>

      <fat-icon class="icon" name="done_all" size="32" />
      <fat-icon class="icon" name="pets" size="80" />
      <fat-icon class="icon" name="print" size="96" />
    </div>

    <div class="markdown-body" v-html="compiledMarkdown" v-highlight></div>
  </div>
</template>

<script>
import 'material-design-icons'
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
    handleClick () {
      console.log('11')
    }
  }
};
</script>
<style lang="scss">
.icon:nth-of-type(1) {
  color: red;
}
.icon:nth-of-type(2) {
  color: green;
}
.icon:nth-of-type(3) {
  color: antiquewhite;
}
</style>
