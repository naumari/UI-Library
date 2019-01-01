<template>
  <transition name="fade">
    <div class="mock" v-if="visible">
      <div :class="['message-box']">
        <h5 class="message-box-header c-size-l">
          <span>{{ title }}</span>
          <fat-icon v-if="showClose" name="close" class="close-btn" @click.stop="close"/>
        </h5>

        <div class="message-box-content c-size-m" v-html="content"></div>

        <div class="message-box-footer">
          <fat-button
            size="mini"
            v-if="cancelButtonText && type !== 'alert'"
            @click.stop="handleClick('cancel')"
          >{{ cancelButtonText }}</fat-button>
          <fat-button
            size="mini"
            type="success"
            v-if="confirmButtonText"
            @click.stop="handleClick('confirm')"
          >{{ confirmButtonText }}</fat-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import popupbox from "../mixins/popupbox";

export default {
  mixins: [popupbox],
  props: {
    type: { type: String, default: "" },
    title: { type: String, default: "提示" },
    content: { type: String, required: true },
    confirmButtonText: { type: String, default: "确定" },
    cancelButtonText: { type: String, default: "取消" },
    showClose: { type: Boolean, default: true }
  },
  methods: {
    handleClick(type) {
      this.$emit(type);
      this.close();
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/var.scss";

.mock {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
}

.message-box {
  display: inline-flex;
  flex-direction: column;
  min-width: 420px;
  padding: $m-offset;
  background-color: #fff;
  border-radius: $base-radius;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
  .message-box-header {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    .close-btn {
      cursor: pointer;
    }
  }
  .message-box-content {
    padding: $l-offset 0;
    max-width: 420px;
    line-height: 20px;
  }
  .message-box-footer {
    display: inline-flex;
    justify-content: flex-end;
    .button {
      &:not(:last-child) {
        margin-right: $l-offset;
      }
    }
  }
}
</style>
