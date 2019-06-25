<template>
  <Demo-block
    title="Table 表格"
    subtitle="用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作"
    :README="README"
  >
    <Demo-row
      title="基础用法"
      description="基础的表格展示用法"
      :code="example1"
    >
      <fat-table v-loading :data="tableData">
        <template slot-scope="{ item }">
          <fat-table-column label="姓名">{{ item.name }}</fat-table-column>

          <fat-table-column label="日期">{{ item.date }}</fat-table-column>

          <fat-table-column label="地址">{{ item.address }}</fat-table-column>
        </template>
      </fat-table>
    </Demo-row>

    <Demo-row
      title="带斑马纹表格"
      description="使用带斑马纹的表格，可以更容易区分出不同行的数据"
      :code="example2"
    >
      <fat-table :data="tableData" stripe>
        <template slot-scope="{ item }">
          <fat-table-column label="姓名">{{ item.name }}</fat-table-column>

          <fat-table-column label="日期">{{ item.date }}</fat-table-column>

          <fat-table-column label="地址">{{ item.address }}</fat-table-column>
        </template>
      </fat-table>
    </Demo-row>

    <Demo-row title="合并表头" description="合并某些相关项" :code="example2">
      <fat-table :data="tableData" algin="center">
        <template slot-scope="{ item }">
          <fat-table-column label="真实姓名以及出生日期">{{
            item.name
          }}</fat-table-column>

          <fat-table-column label="真实姓名以及出生日期">{{
            item.date
          }}</fat-table-column>

          <fat-table-column label="地址">{{ item.address }}</fat-table-column>
        </template>
      </fat-table>
    </Demo-row>

    <Demo-row
      title="自定义列模板"
      description="自定义列的显示内容，可组合其他组件使用"
      :code="example2"
    >
      <fat-table :data="tableData">
        <template slot-scope="{ item }">
          <fat-table-column label="头像">
            <fat-hover-tip type="right-center">
              <template slot="hover-part">{{ item.name }}</template>
              <template slot="tip-part">
                <img src="/static/img/gakki.jpg" alt="示意图" />
              </template>
            </fat-hover-tip>
          </fat-table-column>

          <fat-table-column label="地址">{{ item.address }}</fat-table-column>

          <fat-table-column label="操作">
            <fat-button
              class="btn"
              type="primary"
              size="mini"
              @click="$message({ content: '编辑' })"
              >编辑</fat-button
            >
            <fat-button
              class="btn"
              type="primary"
              size="mini"
              @click="$message({ content: '删除' })"
              >删除</fat-button
            >
          </fat-table-column>
        </template>
      </fat-table>
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
      tableData: [],

      README
    };
  },
  computed: {
    example1() {
      return `<fat-table :data="tableData">
    <template slot-scope="{ item }">
        <fat-table-column label="姓名">{{ item.name }}</fat-table-column>

        <fat-table-column label="日期">{{ item.date }}</fat-table-column>

        <fat-table-column label="地址">{{ item.address }}</fat-table-column>
    </template>
</fat-table>`;
    },
    example2() {
      return `<fat-table :data="tableData" stripe>
    <template slot-scope="{ item }">
        <fat-table-column label="姓名">{{ item.name }}</fat-table-column>

        <fat-table-column label="日期">{{ item.date }}</fat-table-column>

        <fat-table-column label="地址">{{ item.address }}</fat-table-column>
    </template>
</fat-table>`;
    }
  },
  created() {
    setTimeout(() => {
      this.tableData = [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ];
    }, 1000);
  }
};
</script>
<style lang="scss">
</style>
