<template>
  <Demo-block title="File-Reader 文件读取" subtitle="通过点击或者拖拽读取文件，方便二次封装为上传组件。" :README="README ">
    <div class="demo-row">
      <span class="demo-row-subtitle">基础用法</span>
      <span>默认上传显示按钮，点击读取文件。</span>

      <div class="demo-row-content">
        <p class="hint c-size-s">只能上传jpg/png文件，且不超过500kb</p>
        <fat-filereader
          accept=".png, .jpg"
          :size="500 * 1024"
          @success="event => readHandler(event, 'file')"
          @error="errorHandler"
        />

        <span v-if="file.name">已上传：{{ file.name }}</span>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">自定义上传区域</span>
      <span>自定义上传区域。</span>

      <div class="demo-row-content">
        <fat-filereader dragable @success="event => readHandler(event, 'otherFile')">
          <div slot="clickarea" class="upload-area" :style="filePreviewStyle">
            <fat-icon v-if="!otherFile.url" class="icon" name="cloud_upload" size="24"/>
          </div>

          <span v-if="otherFile.name">已上传：{{ otherFile.name }}</span>
        </fat-filereader>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">拖拽上传</span>
      <span>拖拽至上传区域，或点击上传区域。</span>

      <div class="demo-row-content">
        <fat-filereader dragable @success="event => readHandler(event, 'anotherFile')">
          <div slot="clickarea" class="upload-area">
            <fat-icon class="icon" name="cloud_upload" size="24"/>
          </div>

          <span v-if="anotherFile.name">已上传：{{ anotherFile.name }}</span>
        </fat-filereader>
      </div>
    </div>

    <div class="demo-row">
      <span class="demo-row-subtitle">上传多个文件</span>
      <span>利用该组件读取多个文件。</span>

      <div class="demo-row-content">
        <fat-filereader multiple :limit="5" @success="multipleHandler" @error="errorHandler"/>

        <div v-if="files.length">已上传：
          <p v-for="(item, index) in files" :key="index">{{ item.file.name }}</p>
        </div>
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

      file: {},
      otherFile: {},
      anotherFile: {},

      files: []
    };
  },
  computed: {
    filePreviewStyle() {
      console.log("otherFile", this.otherFile);

      return this.otherFile.url
        ? {
            background: `url(${this.otherFile.url}) no-repeat center / contain`
          }
        : {};
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
@import "@/assets/styles/var.scss";

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
