<template>
  <div
    :class="['input-wrapper', {
    'have-prefix-icon': prefixIcon,
    'have-suffix-icon': suffixIcon
  }]"
  >
    <textarea
      v-if="type === 'textarea'"
      class="textarea-inner c-normal c-size-m"
      :value="inputValue"
      v-bind="$attrs"
      v-on="inputListeners"
    />

    <template v-else>
      <fat-icon v-if="prefixIcon" class="icon" :name="prefixIcon"/>

      <slot name="prepend"></slot>

      <input
        :class="['input-inner', 'c-normal', 'c-size-m', {
        'have-prepand': havePrepand,
        'have-append': haveAppend
      }]"
        :type="type"
        :value="inputValue"
        v-bind="$attrs"
        v-on="inputListeners"
      />

      <slot name="append"></slot>

      <fat-icon v-if="suffixIcon" class="icon" :name="suffixIcon"/>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    prefixIcon: {
      type: String
    },
    suffixIcon: {
      type: String
    }
  },
  model: {
    prop: "value",
    event: "input"
  },
  data() {
    return {
      inputValue: ""
    };
  },
  computed: {
    havePrepand() {
      return this.$slots.prepend;
    },
    haveAppend() {
      return this.$slots.append;
    },
    inputListeners() {
      return Object.assign({}, this.$listeners, {
        input: event => this.$emit("input", event.target.value)
      });
    }
  },
  watch: {
    value: {
      handler(newVal) {
        this.inputValue = newVal;
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss">


.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  .icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto auto;

    height: 1em;
    color: $disabled-color;
  }

  &.have-prefix-icon {
    .input-inner {
      padding-left: 24px;
    }

    .icon:first-child {
      left: 6px;
    }
  }

  &.have-suffix-icon {
    .input-inner {
      padding-right: 24px;
    }

    .icon:last-child {
      right: 6px;
    }
  }

  .input-inner,
  .textarea-inner {
    padding: 0 $m-offset;
    width: 100%;
    min-height: 32px;
    line-height: 32px;
    box-sizing: border-box;
    border: 1px solid $main-color;
    border-radius: $base-radius;
    color: $font-color;
    text-overflow: ellipsis;
    outline: none;

    transition: all 0.2s;

    &:focus {
      text-overflow: ellipsis;
      border: 1px solid $success-color;
      box-shadow: 0 0 5px 0 rgba($success-color, 0.5);
    }

    &:disabled {
      background-color: rgba($disabled-color, 0.25);
      color: $disabled-color;
      cursor: not-allowed;
    }

    &.have-prepand {
      border-radius: 0 $base-radius $base-radius 0;
      &.have-append {
        border-radius: 0 0 0 0;
      }
    }

    &.have-append {
      border-radius: $base-radius 0 0 $base-radius;
    }
  }

  .textarea-inner {
    min-height: 2.5em;
    line-height: 32px;
  }
}
</style>
