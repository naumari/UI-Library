<template>
  <Demo-block title="Tabs 标签页" subtitle="分隔内容上有关联但属于不同类别的数据集合。" :README="README">
    <div class="demo-row">
      <span class="demo-row-subtitle">基础用法</span>
      <span>当用户进行点击Tab操作时会被触发相关内容的切换。</span>

      <div class="demo-row-content">
        <fat-tabs @change="handleChange">
          <fat-tab label="Tab 1" id="tab1">Content of Tab Pane 1</fat-tab>
          <fat-tab label="Tab 2" id="tab2">Content of Tab Pane 2</fat-tab>
          <fat-tab label="Tab 3" id="tab3">Content of Tab Pane 3</fat-tab>
          <fat-tab label="Tab 4" id="tab4">Content of Tab Pane 4</fat-tab>
        </fat-tabs>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">卡片样式</span>
      <span>卡片化的标签页，在卡片模式下可设定标签页的关闭按钮。</span>

      <div class="row-item">
        <fat-tabs v-model="tab" card>
          <fat-tab label="Tab 1" id="tab1">Content of Tab Pane 1</fat-tab>
          <fat-tab label="Tab 2" id="tab2" closable>Content of Tab Pane 2</fat-tab>
          <fat-tab label="Tab 3" id="tab3">Content of Tab Pane 3</fat-tab>
          <fat-tab label="Tab 4" id="tab4">Content of Tab Pane 4</fat-tab>
        </fat-tabs>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">自定义初始位置以及切换</span>
      <span>通过v-model指令控制tab活跃的标签页。</span>
      <fat-button size="mini" @click.stop="tabActive = 'tab2'">点击选中tab2</fat-button>

      <div class="demo-row-content">
        <fat-tabs v-model="tabActive">
          <fat-tab label="Tab 1" id="tab1">Content of Tab Pane 1</fat-tab>
          <fat-tab label="Tab 2" id="tab2">Content of Tab Pane 2</fat-tab>
          <fat-tab label="Tab 3" id="tab3">Content of Tab Pane 3</fat-tab>
          <fat-tab label="Tab 4" id="tab4">Content of Tab Pane 4</fat-tab>
        </fat-tabs>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">禁用</span>
      <span>禁用指定tab页。</span>

      <div class="row-item">
        <fat-tabs v-model="otherTabActive">
          <fat-tab label="Tab 1" id="tab1">Content of Tab Pane 1</fat-tab>
          <fat-tab label="Tab 2" id="tab2" disabled>Content of Tab Pane 2</fat-tab>
          <fat-tab label="Tab 3" id="tab3">Content of Tab Pane 3</fat-tab>
          <fat-tab label="Tab 4" id="tab4">Content of Tab Pane 4</fat-tab>
        </fat-tabs>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">动态修改Tab</span>
      <span class="demo-row-subtitle">实现动态修改Tabs数量，默认选中第一个Tab页</span>
      <fat-button size="mini" @click.stop="handleClick('add')">添加</fat-button>
      <fat-button size="mini" @click.stop="handleClick('dec')">减少</fat-button>

      <div class="row-item">
        <fat-tabs v-model="anotherTabActive">
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
      range: 10,
      tab: "tab1",
      tabActive: "tab3",
      otherTabActive: "tab1",
      anotherTabActive: "tab1",

      tabs: [
        {
          label: "tab",
          content: "tabContent"
        }
      ],

      README
    };
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
    },
    handleChange() {
      this.$toast({
        content: "tab已经改变"
      });
    }
  }
};
</script>
<style lang="scss">
.demo-row {
  .tabs-content {
    max-width: 640px;
    height: 100px;
    border: 1px solid #e4e7ed;
  }
  &:nth-of-type(2) {
    .tabs-content {
      height: 100px;
      border: none;
    }
  }
}
</style>
