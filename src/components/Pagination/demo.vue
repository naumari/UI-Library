<template>
  <Demo-block title="Pagination 分页" subtitle="为网站提供导航功能的菜单" :README="README">
    <Demo-row title="基础用法" description="页数较少时的效果" :code="example1">
      <fat-pagination :total="50"/>
    </Demo-row>

    <Demo-row title="带有省略项" description="大于 7 页时的效果" :code="example2">
      <fat-pagination :total="1000"/>
    </Demo-row>

    <Demo-row title="设置最大页码按钮数" :description="`当前${current}页`" :code="example3">
      <fat-pagination v-model="current" :total="1000" :page-size="20" :page-count="11"/>
    </Demo-row>

    <Demo-row title="带有背景色的分页" description="适用性较广的基础多选，用 Tag 展示已选项" :code="example4">
      <fat-pagination
        background
        :total="1000"
        :page-size="20"
        :page-count="11"
        @change="handleChange"
      />
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

      current: 2
    };
  },
  computed: {
    example1() {
      return `<fat-pagination :total="50"/>`;
    },
    example2() {
      return `<fat-pagination :total="1000"/>`;
    },
    example3() {
      return `<fat-pagination v-model="current" :total="1000" :page-size="20" :page-count="11"/>`;
    },
    example4() {
      return `<fat-pagination
    background
    :total="1000"
    :page-size="20"
    :page-count="11"
    @change="handleChange"
/>`;
    }
  },
  methods: {
    handleChange() {
      this.$message({ content: "翻页" });
    }
  }
};
</script>
<style lang="scss">
.demo-row-content {
  .select-wrapper {
    width: 240px;
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
}
</style>
