<template>
<a :class="['button', `button-${size}`, `button-${type}`, { 'is-disabled': disabled }]"
  v-bind="$attrs" @click="event => !disabled && $emit('click', event)"
>
  <slot></slot>
</a>
</template>

<script>

export default {
  props: {
    type: { type: String, default: 'normal' },
    size: { type: String, default: 'medium' },
    disabled: { type: Boolean, default: false }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/var.scss";

.button {
  position: relative;
  display: inline-flex;
  align-items: center;

  cursor: pointer;
  user-select: none;
  background-color: #fff;
  outline: none;
  box-shadow: inset -1px -1px 0 0 #d9d9d9;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: rgba(0,0,0,0.65);

  &:hover {
    background-color: #e7e7e7;
  }
  &:active {
    box-shadow: inset 1px 1px 0 0 #adafbc;
  }
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:active {
      box-shadow: inset -1px -1px 0 0 #adafbc;
    }
  }

  &.button-mini {
    padding: $s-offset $s-offset;
    font-size: 0.8em;
  }

  &.button-small {
    padding: $s-offset $m-offset;
    font-size: 0.9em;
  }

  &.button-medium {
    padding: $s-offset $l-offset;
    font-size: 1em;
  }

  &.button-large {
    padding: $s-offset $xl-offset;
    font-size: 1.2em;
  }

  &.button-primary {
    color: #f7f7f7;
    border: 1px solid #92cc41;
    background-color: #92cc41;
    box-shadow: inset -2px -2px 0 0 #4aa52e;
    border: none;
    &:hover {
      background-color: #76c442;
    }
    &:active {
      box-shadow: inset 2px 2px 0 0 #4aa52e;
    }
    &.is-disabled {
      &:hover {
        background-color: #76c442;
      }
      &:active {
        box-shadow: inset -2px -2px 0 0 #4aa52e;
      }
    }
  }

  &.button-success {
    color: #f7f7f7;
    border: 1px solid #209cee;
    background-color: #209cee;
    box-shadow: inset -2px -2px 0 0 #006bb3;
    border: none;
    &:hover {
      background-color: #108de0;
    }
    &:active {
      box-shadow: inset 2px 2px 0 0 #006bb3;
    }
    &.is-disabled {
      &:hover {
        background-color: #209cee;
      }
      &:active {
        box-shadow: inset -2px -2px 0 0 #006bb3;
      }
    }
  }

  &.button-warning {
    color: #f7f7f7;
    border: 1px solid #f7d51d;
    background-color: #f7d51d;
    box-shadow: inset -2px -2px 0 0 #e59400;
    border: none;
    &:hover {
      background-color: #f2c409;
    }
    &:active {
      box-shadow: inset 2px 2px 0 0 #e59400;
    }
    &.is-disabled {
      &:hover {
        background-color: #f7d51d;
      }
      &:active {
        box-shadow: inset -2px -2px 0 0 #e59400;
      }
    }
  }

  &.button-error {
    color: #f7f7f7;
    border: 1px solid #e76e55;
    background-color: #e76e55;
    box-shadow: inset -2px -2px 0 0 #8c2022;
    border: none;
    &:hover {
      background-color: #ce372b;
    }
    &:active {
      box-shadow: inset 2px 2px 0 0 #8c2022;
    }
    &.is-disabled {
      &:hover {
        background-color: #e76e55;
      }
      &:active {
        box-shadow: inset -2px -2px 0 0 #8c2022;
      }
    }
  }

  &.button-text {
    padding: 0 0;
    color: #606266;
    background-color: transparent;
    box-shadow: none;
    border: none;
    &:active {
      color: #1f2f3d;
    }
    &.is-disabled {
      &:hover {
        background-color: transparent;
      }
      &:active {
        background-color: transparent;
        box-shadow: none;
        color: #606266;
      }
    }
  }
}
</style>
