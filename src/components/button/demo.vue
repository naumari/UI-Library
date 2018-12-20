<template>
  <div class="demo-block">
    <h3 class="demo-title">Button 按钮</h3>
    <span class="demo-subtitle demo-row">基础的按钮用法。</span>

    <div class="demo-row">
      <span class="demo-row-subtitle">不同尺寸</span>
      <span>默认设定四个尺寸的按钮，通过size来区分。</span>

      <div class="demo-row-content">
        <fat-button class="btn" size="mini">超小按钮</fat-button>
        <fat-button class="btn" size="small">小型按钮</fat-button>
        <fat-button class="btn" size="medium">默认按钮</fat-button>
        <fat-button class="btn" size="large">大型按钮</fat-button>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">插入不同图标</span>
      <span>可通过slot插入不同的icon、html等内容。</span>

      <div class="demo-row-content">
        <fat-button class="btn">
          <fat-icon name="done"/>确定
        </fat-button>
        <fat-button class="btn">
          <fat-icon name="pets"/>确定
        </fat-button>
        <fat-button class="btn">
          <fat-icon name="search"/>确定
        </fat-button>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">不同类型</span>
      <span>默认五种类型的按钮，普通、成功、警告、错误、文字。</span>

      <div class="demo-row-content">
        <fat-button class="btn" type="primary" @click="handleClick">primary</fat-button>
        <fat-button class="btn" type="success">success</fat-button>
        <fat-button class="btn" type="warning">warning</fat-button>
        <fat-button class="btn" type="error">error</fat-button>
        <fat-button class="btn" type="text">文字按钮</fat-button>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">禁用状态</span>
      <span>不可点击，禁用状态下的按钮。</span>

      <div class="demo-row-content">
        <fat-button class="btn" type="primary" disabled>primary</fat-button>
        <fat-button class="btn" type="success" disabled>success</fat-button>
        <fat-button class="btn" type="warning" disabled>warning</fat-button>
        <fat-button class="btn" type="error" disabled>error</fat-button>
        <fat-button class="btn" type="text" disabled>文字按钮</fat-button>
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
    handleClick(event) {
      alert("button click");
    }
  }
};
</script>
<style lang="scss">
</style>
