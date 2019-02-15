<template>
  <div class="tabs-wrapper">
    <ul :class="['tabs__header', { 'is-card': card }]">
      <li
        :class="['tabs__header-item', { 'is-active': activeId === item.id }, { 'is-disabled': item.disabled }]"
        v-for="(item, index) in childrens"
        :key="index"
        @click.stop="!item.disabled && handleClick(item)"
      >
        <span>{{ item.label }}</span>
        <fat-icon
          v-if="item.closable"
          class="delete-btn"
          name="close"
          @click.stop="handleDelete(item)"
        />
      </li>
    </ul>

    <div class="tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: [Number, String] },
    card: { type: Boolean, default: false }
  },
  model: {
    prop: "value",
    event: "change"
  },
  data() {
    return {
      activeId: "",
      childrens: []
    };
  },
  provide() {
    return {
      fatTabs: this
    };
  },
  watch: {
    childrens(value) {
      const idMap = {};
      const error = value.every(item => {
        const { id } = item;
        if (idMap[id]) {
          return false;
        }
        idMap[id] = true;
        return true;
      });
      if (!error) throw new Error("Tab has duplicate ID");
      if (this.childrens.length) {
        let flag = false;
        for (const iterator of this.childrens) {
          if (this.value === iterator.id && !iterator.disabled) {
            this.activeId = iterator.id;
            flag = true;
            break;
          }
        }
        if (!flag)
          this.activeId = this.childrens.filter(item => !item.disabled)[0].id;
      }
    },
    value(value) {
      this.activeId = value;
    }
  },
  methods: {
    handleClick(item) {
      if (this.activeId !== item.id) {
        this.activeId = item.id;
        this.$emit("change", item.id);
      }
    },
    handleDelete(element) {
      this.childrens = this.childrens.filter(item => item.id !== element.id);
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/styles/var.scss";

.tabs-wrapper {
  display: flex;
  flex-direction: column;

  .tabs__header {
    position: relative;
    display: flex;
    z-index: 2;

    .tabs__header-item {
      min-width: 72px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      &.is-active {
        color: #209cee;
        &::after {
          display: block;
          content: "";
          width: 100%;
          height: 2px;
          background: #209cee;
        }
      }
      &.is-disabled {
        cursor: not-allowed;
        color: $disabled-color;
      }
      &:not(.is-disabled) {
        &:not(.is-active) {
          &::after {
            display: block;
            content: "";
            width: 100%;
            height: 2px;
            background: #209cee;
            transform: scaleX(0);
            transition: all 0.5s;
          }
          &:hover {
            color: #209cee;
            &::after {
              display: block;
              content: "";
              width: 100%;
              background: #209cee;
              transform: scaleX(1);
            }
          }
        }
      }
      &:not(:last-child) {
        margin-right: 32px;
      }
    }
    &.is-card {
      border-bottom: none;
      .tabs__header-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1em;
        margin: 0 0;
        border-top: 1px solid #e4e7ed;
        border-right: 1px solid #e4e7ed;
        &:first-child {
          border-left: 1px solid #e4e7ed;
        }
        &.is-active {
          border-bottom: 2px solid transparent;
          &::after {
            display: none;
          }
        }
        &:not(.is-disabled) {
          &:not(.is-active) {
            border-bottom: 1px solid #e4e7ed;
            &::after {
              display: none;
            }
            &:hover {
              &::after {
                display: none;
              }
            }
          }
        }
      }
      .delete-btn {
        display: inline-block;
      }
    }
    .delete-btn {
      display: none;
    }
  }
  .tabs__content {
    padding: 32px 0;
  }
}
</style>
