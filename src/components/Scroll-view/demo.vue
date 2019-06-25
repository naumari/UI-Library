<template>
  <Demo-block
    title="ScrollView 滚动框"
    subtitle="具备兼容主流游览器的自定义滚动条的组件。"
    :README="README"
  >
    <Demo-row
      title="基础用法"
      :description="`在ie、firefox、chrome等游览器环境中同一的滚动条样式`"
      :code="example1"
    >
      <fat-scroll-view class="box">
        <ul style="width: max-content;">
          <li
            style="width: max-content;"
            v-for="(item, index) in arr"
            :key="index"
          >
            {{ _duplicate("这是一段话。", index) }}
          </li>
        </ul>
      </fat-scroll-view>
    </Demo-row>

    <Demo-row
      title="自定义滚动条样式"
      :description="`自定义滚动条样式`"
      :code="example2"
    >
      <fat-scroll-view class="box" :horizontalBarStyle="{ height: '100px' }">
        <ul style="width: max-content;">
          <li
            style="width: max-content;"
            v-for="(item, index) in arr"
            :key="index"
          >
            {{ _duplicate("这是一段话。", index) }}
          </li>
        </ul>
      </fat-scroll-view>
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
      arr: Array.from({ length: 20 }, (v, i) => i),
      README
    };
  },
  computed: {
    example1() {
      return `<fat-scroll-view class="box">
    <ul style="width: max-content;">
        <li
        style="width: max-content;"
        v-for="(item, index) in arr"
        :key="index"
        >
        {{ _duplicate("这是一段话。", index) }}
        </li>
    </ul>
</fat-scroll-view>`;
    },
    example2() {
      return `<fat-scroll-view class="box" :horizontalBarStyle="{ height: '100px' }">
    <ul style="width: max-content;">
        <li
        style="width: max-content;"
        v-for="(item, index) in arr"
        :key="index"
        >
        {{ _duplicate("这是一段话。", index) }}
        </li>
    </ul>
</fat-scroll-view>`;
    },
    example3() {
      return `<fat-slider v-model="initValue" />`;
    },
    example4() {
      return `<fat-slider v-model="value" :show-tooltip="false" />`;
    },
    example5() {
      return `<fat-slider disabled />`;
    }
  },
  methods: {
    _duplicate(str, size) {
      let result = "";
      for (let index = 0; index < size; index++) {
        result += str;
      }
      return result;
    }
  }
};
</script>
<style lang="scss">
.box {
  display: flex;
  width: 200px;
  height: 200px;
}
</style>
