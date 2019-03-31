<template>
  <Demo-block title="File-Reader 文件读取" subtitle="通过点击或者拖拽读取文件，方便二次封装为上传组件" :README="README ">
    <Demo-row title="基础用法" description="默认上传显示按钮，点击读取文件" :code="example1">
      <p class="hint c-size-s">只能上传jpg/png文件，且不超过500kb</p>

      <fat-filereader
        accept=".png, .jpg"
        :size="500 * 1024"
        @success="event => readHandler(event, 'file')"
        @error="errorHandler"
      />

      <span v-if="file.name">已上传：{{ file.name }}</span>
    </Demo-row>

    <Demo-row title="自定义上传区域" description="通过改变样式，修改上传区域" :code="example2">
      <fat-filereader @success="event => readHandler(event, 'otherFile')">
        <div slot="clickarea" class="upload-area" :style="filePreviewStyle">
          <fat-icon v-if="!otherFile.url" class="icon" name="cloud_upload" size="24"/>
        </div>
        <span v-if="otherFile.name">已上传：{{ otherFile.name }}</span>
      </fat-filereader>
    </Demo-row>

    <Demo-row title="拖拽上传" description="拖拽至上传区域，或点击上传区域" :code="example3">
      <fat-filereader dragable @success="event => readHandler(event, 'anotherFile')">
        <div slot="clickarea" class="upload-area">
          <fat-icon class="icon" name="cloud_upload" size="24"/>
        </div>
        <span v-if="anotherFile.name">已上传：{{ anotherFile.name }}</span>
      </fat-filereader>
    </Demo-row>

    <Demo-row title="上传多个文件" description="利用该组件读取多个文件" :code="example4">
      <fat-filereader dragable @success="event => readHandler(event, 'anotherFile')">
        <div slot="clickarea" class="upload-area">
          <fat-icon class="icon" name="cloud_upload" size="24"/>
        </div>
        <span v-if="anotherFile.name">已上传：{{ anotherFile.name }}</span>
      </fat-filereader>
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

      file: {},
      otherFile: {},
      anotherFile: {},

      files: []
    };
  },
  computed: {
    filePreviewStyle() {
      return this.otherFile.url
        ? {
            background: `url(${this.otherFile.url}) no-repeat center / contain`
          }
        : {};
    },
    example1() {
      return `<fat-filereader
    accept=".png, .jpg"
    :size="500 * 1024"
    @success="event => readHandler(event, 'file')"
    @error="errorHandler"
/>`;
    },
    example2() {
      return `<fat-filereader dragable @success="event => readHandler(event, 'otherFile')">
    <div slot="clickarea" class="upload-area" :style="filePreviewStyle">
        <fat-icon v-if="!otherFile.url" class="icon" name="cloud_upload" size="24"/>
    </div>
    <span v-if="otherFile.name">已上传：{{ otherFile.name }}</span>
</fat-filereader>`;
    },
    example3() {
      return `<fat-filereader dragable @success="event => readHandler(event, 'anotherFile')">
    <div slot="clickarea" class="upload-area">
        <fat-icon class="icon" name="cloud_upload" size="24"/>
    </div>
    <span v-if="anotherFile.name">已上传：{{ anotherFile.name }}</span>
</fat-filereader>`
    },
    example4() {
      return `<fat-filereader dragable @success="event => readHandler(event, 'anotherFile')">
    <div slot="clickarea" class="upload-area">
        <fat-icon class="icon" name="cloud_upload" size="24"/>
    </div>
    <span v-if="anotherFile.name">已上传：{{ anotherFile.name }}</span>
</fat-filereader>`
    }
  },
  methods: {
    readHandler(event, type) {
      if (type === "otherFile") {
        const [file] = event;
        this[type] = file;
      } else {
        const [{ file }] = event;
        this[type] = file;
      }
    },
    errorHandler(error) {
      const { msg } = error;
      this.$message({ type: "warn", content: msg });
    },
    multipleHandler(event) {
      this.files = event;
    }
  }
};
</script>
<style lang="scss">
.upload-area {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;

  border: 1px dotted $disabled-color;
  border-radius: $base-radius;
  .icon {
    color: $disabled-color;
  }
}
.hint {
  margin-bottom: 16px;
  color: $disabled-color;
}
</style>
