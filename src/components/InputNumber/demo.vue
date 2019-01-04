<template>
  <Demo-block title="InputNumber 计数器" subtitle="仅允许输入标准的数字值，可定义范围。" :README="README">
    <div class="demo-row">
      <span class="demo-row-subtitle">基础用法</span>
      <span>点击+\-按钮(当前值为{{ value }})。</span>

      <div class="demo-row-content">
        <fat-input-number v-model="value" />
      </div>
    </div>

    <!-- <div class="demo-row">
      <span class="demo-row-subtitle">禁用状态</span>
      <span>禁止点击和输入。</span>

      <div class="demo-row-content">
        <fat-input-number disabled />
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">步数</span>
      <span>允许定义递增递减的步数控制(step为5)。</span>

      <div class="demo-row-content">
        <fat-input-number :step="5" v-model="stepValue" />
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">最大,最小值限制</span>
      <span>超出范围,按钮禁用。</span>

      <div class="demo-row-content">
        <fat-input-number :max="20" :min="0" :step="5" v-model="limitValue" />
      </div>
    </div> -->
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
      README,

      value: 0,
      stepValue: 0,
      limitValue: 0
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/var.scss";

.demo-row-content {
  .input-wrapper {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
}
.prepend-part,
.append-part {
  display: block;
  padding: 0 $s-offset;
  height: 32px;
  line-height: 32px;
  background-color: #fafafa;
  border: 1px solid $main-color;
  border-radius: $base-radius 0 0 $base-radius;
}
.append-part {
  border-radius: 0 $base-radius $base-radius 0;
}
</style>
