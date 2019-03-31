<template>
  <Demo-block
    title="Dropdown 下拉菜单"
    subtitle="将动作或菜单折叠到下拉菜单中。"
    :README="README"
  >
    <Demo-row
      title="基础用法"
      description="移动到下拉菜单上，展开更多操作"
      :code="example1"
    >
      <fat-dropdown v-model="selectValue">
        <template slot="menu">
          <fat-dropdown-option>
            <a
              class="c-color-normal t-none-decoration"
              href="https://fatge.xyz/"
              >主页</a
            >
          </fat-dropdown-option>
          <fat-dropdown-option>
            <a
              class="c-color-normal t-none-decoration"
              href="https://github.com/FatGe"
              >Github</a
            >
          </fat-dropdown-option>
          <fat-dropdown-option>
            <a
              class="c-color-normal t-none-decoration"
              href="https://juejin.im/user/5b3ed96c6fb9a04fc34bed91"
              >掘金</a
            >
          </fat-dropdown-option>
        </template>
      </fat-dropdown>
    </Demo-row>

    <Demo-row
      title="触发方式"
      description="可以配置 click 激活或者 hover 激活"
      :code="example1"
    >
      <fat-dropdown trigger="click">
        <template slot="menu">
          <fat-dropdown-option>
            <a
              class="c-color-normal t-none-decoration"
              href="https://fatge.xyz/"
              >主页</a
            >
          </fat-dropdown-option>
          <fat-dropdown-option>
            <a
              class="c-color-normal t-none-decoration"
              href="https://github.com/FatGe"
              >Github</a
            >
          </fat-dropdown-option>
          <fat-dropdown-option>
            <a
              class="c-color-normal t-none-decoration"
              href="https://juejin.im/user/5b3ed96c6fb9a04fc34bed91"
              >掘金</a
            >
          </fat-dropdown-option>
        </template>
      </fat-dropdown>
    </Demo-row>

    <Demo-row
      title="动态生成自定义下拉列表"
      description="可以通过配置不同插槽，来修改Dropdown的label、menu模块"
      :code="example1"
    >
      <fat-dropdown v-model="selectValue" option-key="label" trigger="click">
        <template slot="label">
          <span class="c-color-success">{{ selectValue }}</span>
        </template>

        <template slot="menu">
          <fat-dropdown-option
            v-for="(option, index) in options"
            :key="index"
            :label="option.label"
            :value="option.value"
          >
            {{ option.label }}
          </fat-dropdown-option>
        </template>
      </fat-dropdown>
    </Demo-row>

    <Demo-row
      title="自定义 Option 事件"
      description="可以修改每个 option 的点击事件"
      :code="example1"
    >
      <fat-dropdown v-model="selectValue" option-key="label" trigger="click">
        <template slot="menu">
          <fat-dropdown-option>
            <span @click="handleClick">警告：小心点</span>
          </fat-dropdown-option>
          <fat-dropdown-option disabled>
            禁止点击
          </fat-dropdown-option>
        </template>
      </fat-dropdown>
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
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭",
          disabled: true
        }
      ],

      selectValue: "黄金糕",

      README
    };
  },
  computed: {
    example1() {
      return `<fat-button class="btn" size="mini">超小按钮</fat-button>
<fat-button class="btn" size="small">小型按钮</fat-button>
<fat-button class="btn" size="medium">默认按钮</fat-button>
<fat-button class="btn" size="large">大型按钮</fat-button>`;
    },
    example2() {
      return `<fat-button class="btn">
    <fat-icon name="done"/>确定
</fat-button>
<fat-button class="btn">
    <fat-icon name="pets"/>确定
</fat-button>
<fat-button class="btn">
    <fat-icon name="search"/>确定
</fat-button>`;
    },
    example3() {
      return `<fat-button class="btn" type="primary" @click="handleClick">primary</fat-button>
<fat-button class="btn" type="success">success</fat-button>
<fat-button class="btn" type="warning">warning</fat-button>
<fat-button class="btn" type="error">error</fat-button>
<fat-button class="btn" type="text">文字按钮</fat-button>`;
    },
    example4() {
      return `<fat-button class="btn" type="primary" disabled>primary</fat-button>
<fat-button class="btn" type="success" disabled>success</fat-button>
<fat-button class="btn" type="warning" disabled>warning</fat-button>
<fat-button class="btn" type="error" disabled>error</fat-button>
<fat-button class="btn" type="text" disabled>文字按钮</fat-button>`;
    }
  },
  methods: {
    handleClick() {
      this.$message({ type: "warn", content: "小心点" });
    }
  }
};
</script>
<style lang="scss">
</style>
