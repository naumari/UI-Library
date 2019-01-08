<template>
  <Demo-block title="Input 输入框" subtitle="通过鼠标或键盘输入内容，是最基础的表单域的包装。" :README="README">
    <div class="demo-row">
      <span class="demo-row-subtitle">基础用法</span>
      <span>键盘输入内容。</span>

      <div class="demo-row-content">
        <fat-input placeholder="请输入内容" v-model="inputValue" />
        <span class="c-size-s">输入内容为：{{ inputValue }}</span>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">禁用状态</span>
      <span>禁用该组件。</span>

      <div class="demo-row-content">
        <fat-input disabled placeholder="请输入内容"/>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">带icon的输入框</span>
      <span>带有图标标记输入类型。</span>

      <div class="demo-row-content">
        <fat-input placeholder="请输入内容" prefix-icon="search"/>

        <fat-input placeholder="请输入内容" suffix-icon="date_range"/>
      </div>
    </div>

    <div class="demo-row slot-row-item">
      <span class="demo-row-subtitle">复合型输入框</span>
      <span>可前置或后置元素，一般为标签或按钮。</span>

      <div class="demo-row-content">
        <fat-input placeholder="请输入内容">
          <template slot="prepend">
            <div class="prepend-part c-size-s">Http://</div>
          </template>

          <template slot="append">
            <div class="append-part c-size-s">.com</div>
          </template>
        </fat-input>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">文本域</span>
      <span>用于输入多行文本信息，通过将 type 属性的值指定为 textarea。</span>

      <div class="demo-row-content">
        <fat-input type="textarea" placeholder="请输入内容"/>
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
      README,

      inputValue: "hello world"
    };
  },
  methods: {
    handleClick() {
      console.log('handleClick')
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/styles/var.scss";

.demo-row-content {
  .input-wrapper {
    width: 240px;
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
