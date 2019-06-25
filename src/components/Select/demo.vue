<template>
  <Demo-block title="Select 选择器" subtitle="下拉选择器" :README="README">
    <Demo-row title="基础用法" description="适用广泛的基础单选" :code="example1">
      <fat-select v-model="inputValue">
        <fat-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >{{ item.label }}</fat-option>
      </fat-select>
    </Demo-row>

    <Demo-row title="有禁用选项" description="禁用某些选项" :code="example2">
      <fat-select>
        <fat-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >{{ item.label }}</fat-option>
      </fat-select>
    </Demo-row>

    <Demo-row title="禁用状态" description="选择器不可用状态" :code="example3">
      <fat-select disabled v-model="inputValue">
        <fat-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >{{ item.label }}</fat-option>
      </fat-select>
    </Demo-row>

    <Demo-row title="基础多选" description="适用性较广的基础多选，用 Tag 展示已选项" :code="example4">
      <fat-select multiple v-model="multipleInputValue">
        <fat-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >{{ item.label }}</fat-option>
      </fat-select>
    </Demo-row>

    <Demo-row title="缩略项" description="已选项较多时，用缩略形式进行展示" :code="example5">
        <fat-select multiple collapse-tags v-model="multipleInputValue">
          <fat-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          >{{ item.label }}</fat-option>
        </fat-select>
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
      README,

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

      inputValue: "选项2",
      multipleInputValue: ["选项2"]
    };
  },
  computed: {
    example1() {
      return `<fat-select v-model="inputValue">
    <fat-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    >{{ item.label }}</fat-option>
</fat-select>`;
    },
    example2() {
      return `<fat-select>
    <fat-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
    >{{ item.label }}</fat-option>
</fat-select>`;
    },
    example3() {
      return `<fat-select disabled v-model="inputValue">
    <fat-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
    >{{ item.label }}</fat-option>
</fat-select>`;
    },
    example4() {
      return `<fat-select multiple v-model="multipleInputValue">
    <fat-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
    >{{ item.label }}</fat-option>
</fat-select>`;       
    },
    example5() {
      return `<fat-select multiple collapse-tags v-model="multipleInputValue">
    <fat-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
    >{{ item.label }}</fat-option>
</fat-select>`;
    }
  }
};
</script>
<style lang="scss">
</style>
