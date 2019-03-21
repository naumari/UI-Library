<template>
  <div :class="['file-reader', { 'is-disabled': disabled }]">
    <div
      class="file-reader__click-area"
      @click.stop="eventHandler('readFile')"
      @dragenter="prevent"
      @dragover="prevent"
      @drop="event => dragable && eventHandler('dropReadFile', event)"
    >
      <slot name="clickarea">
        <fat-button :disabled="disabled" type="success">上传</fat-button>
      </slot>
    </div>
    <slot></slot>
    <input
      ref="input"
      type="file"
      v-show="false"
      v-bind="$attrs"
      @change="event => eventHandler('change', event)"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false },
    size: { type: Number, default: 0 },
    dragable: { type: Boolean, default: false }, // 是否支持drag
    limit: { type: Number, default: 1 }
  },
  data() {
    return {
      sourceFiles: [],
      targetFiles: []
    };
  },
  watch: {
    sourceFiles: {
      handler(value) {
        if (value.length) {
          if (window.URL && window.URL.createObjectURL) {
            this.targetFiles = Array.prototype.map.call(value, file => ({
              url: window.URL.createObjectURL(file),
              file
            }));
          } else {
            const getReader = file => {
              return new Promise(function(resolve, reject) {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);

                fileReader.onload = () => resolve(fileReader.result);
                fileReader.onerror = () => fileReader.abort();
              });
            };
            const readers = Array.prototype.map.call(value, file =>
              getReader(file)
            );
            Promise.all(readers).then(results => {
              this.targetFiles = results.map((url, i) => ({
                url,
                file: value[i]
              }));
            });
          }
        }
      },
      deep: true,
      immediate: true
    },
    targetFiles(value) {
      const { size, limit } = this;

      if (value.length > limit) {
        this.$emit("error", {
          msg: "the quantity of files is too large its number cannot exceed"
        });
      } else {
        if (
          value.some(item => {
            const {
              file: { size: fileSize }
            } = item;
            return size && fileSize > size;
          })
        ) {
          this.$emit("error", {
            msg: "file is too large its size cannot exceed"
          });
        } else {
          this.$emit("success", value);
        }
      }
    }
  },
  methods: {
    eventHandler(type, event = {}) {
      const handler = {
        readFile: () => {
          // fix change again
          this.$refs.input.value = "";
          this.$refs.input.click();
        },
        dropReadFile: event => {
          event.preventDefault();
          this.sourceFiles = event.dataTransfer.files;
        },
        change: event => (this.sourceFiles = event.target.files)
      };
      handler[type] && handler[type](event);
    },
    prevent(event) {
      event.preventDefault();
    }
  },
  destroyed() {
    if (this.targetFiles.length && window.URL.revokeObjectURL) {
      this.targetFiles.forEach(file => {
        window.URL.revokeObjectURL(file.url);
      });
    }
  }
};
</script>

<style lang="scss">
.file-reader {
  display: inline-block;
  &.is-disabled {
    cursor: not-allowed;
  }
  .file-reader__click-area {
    display: inline-flex;
    cursor: pointer;
  }
}
</style>
