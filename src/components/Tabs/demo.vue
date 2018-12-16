<template>
  <div class="demo-block">
    <h3 class="demo-title">Tabs 标签页</h3>
    <span class="demo-subtitle demo-row">分隔内容上有关联但属于不同类别的数据集合。</span>

    <div class="demo-row">
      <span class="demo-row-subtitle">基础用法</span>

      <div class="row-item">
        <fat-tabs>
          <fat-tab label="1" id="tab1">内容一</fat-tab>
          <fat-tab label="2" id="tab2">内容二</fat-tab>
          <fat-tab label="3" id="tab3">内容三</fat-tab>
          <fat-tab label="4" id="tab4">内容四</fat-tab>
        </fat-tabs>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">自定义初始位置以及切换</span>
      <fat-button size="mini" @click.stop="tabActive = 'tab2'">点击tab2</fat-button>

      <div class="row-item">
        <fat-tabs v-model="tabActive">
          <fat-tab label="1" id="tab1">内容一</fat-tab>
          <fat-tab label="2" id="tab2">内容二</fat-tab>
          <fat-tab label="3" id="tab3">内容三</fat-tab>
          <fat-tab label="4" id="tab4">内容四</fat-tab>
        </fat-tabs>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">禁用</span>

      <div class="row-item">
        <fat-tabs v-model="otherTabActive">
          <fat-tab label="1" id="tab1">内容一</fat-tab>
          <fat-tab label="2" id="tab2" disabled>内容二</fat-tab>
          <fat-tab label="3" id="tab3" disabled>内容三</fat-tab>
          <fat-tab label="4" id="tab4">内容四</fat-tab>
        </fat-tabs>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">动态修改Tab</span>
      <fat-button size="mini" @click.stop="handleClick('add')">添加</fat-button>
      <fat-button size="mini" @click.stop="handleClick('dec')">减少</fat-button>

      <div class="row-item">
        <fat-tabs v-model="otherTabActive">
          <fat-tab
            v-for="(item, index) in tabs"
            :label="`${item.label}+${index}`"
            :id="`${item.label}+${index}`"
            :key="index"
          >
            {{
            item.content + index
            }}
          </fat-tab>
        </fat-tabs>
      </div>
    </div>

    <div class="markdown-body" v-html="compiledMarkdown" v-highlight></div>
  </div>
</template>

<script>
import "material-design-icons";
import README from "./README.md";

export default {
  data() {
    return {
      range: 10,
      tabActive: "tab3",
      otherTabActive: "tab1",

      tabs: [
        {
          label: "tab",
          content: "tabContent"
        }
      ]
    };
  },
  computed: {
    compiledMarkdown: function() {
      return this.$marked(README, { sanitize: true });
    }
  },
  watch: {
    tabs(value) {
      console.log("value", value);
    }
  },
  methods: {
    handleClick(type) {
      const handler = {
        add: () => this.tabs.push({ label: "tab", content: "tabContent" }),
        dec: () => {
          if (this.tabs.length) {
            this.tabs = this.tabs.slice(0, this.tabs.length - 1);
          }
        }
      };
      handler[type]();
    }
  }
};
</script>
<style lang="scss">
.demo-row {
  .row-item-subtitle {
    min-width: 100px;
  }
  .row-item {
    margin-top: 32px;
  }
  .m-slider-wrap {
    max-width: 320px;
    flex: 1;
  }
  .tabs-content {
    height: 100px;
    border: 2px solid #e4e7ed;
  }
}
</style>
