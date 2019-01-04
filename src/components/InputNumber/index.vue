<template>
  <div class="input-number-wrapper" ref="input-number">
    <fat-input
      class="input-number-inner"
      type="text"
      :disabled="disabled"
      v-model="inputValue"
      v-bind="$attrs"
      @change="handleChange"
      @focus="event => $emit('focus', event)"
      @blur="event => $emit('blur', event)"
    >
      <template slot="prepend">
        <div
          :class="['prepend-part', {
            'is-disabled': addDisabled
          }]"
          @mousedown.stop="!addDisabled && handleClick('add')"
        >
          <fat-icon name="add" size="16"/>
        </div>
      </template>

      <template slot="append">
        <div
          :class="['append-part', {
              'is-disabled': decDisabled
          }]"
          @mousedown.stop="!decDisabled && handleClick('dec')"
        >
          <fat-icon name="remove" size="16"/>
        </div>
      </template>
    </fat-input>
  </div>
</template>

<script>
const isNum = num =>
  !isNaN(num * 1) &&
  Object.prototype.toString.call(num * 1) === "[object Number]";

export default {
  name: "input-number",
  props: {
    value: {
      type: [Number],
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "value",
    event: "input"
  },
  data() {
    return {
      inputValue: 0
    };
  },
  computed: {
    addDisabled() {
      return this.disabled || (isNum(this.max) && this.inputValue >= this.max);
    },
    decDisabled() {
      return this.disabled || (isNum(this.min) && this.inputValue <= this.min);
    },
    inputNumberValue: {
      get() {
        return this.inputValue;
      },
      set(value) {
        const { min, max, inputValue } = this;
        const limits = [
          {
            need: value => !isNum(value),
            value: inputValue
          },
          {
            need: value => value >= max,
            value: max
          },
          {
            need: value => value <= min,
            value: min
          },
          {
            need: () => true,
            value: value * 1
          }
        ];

        this.inputValue = limits.find(limit => limit.need(value)).value;
      }
    }
  },
  watch: {
    value: {
      handler(newVal) {
        this.inputNumberValue = newVal;
      },
      immediate: true
    },
    inputValue(newVal) {
      this.$emit("input", newVal);
    }
  },
  methods: {
    handleClick(type) {
      const { step } = this;
      const period = 100;
      const timerHandler = () => {
        const { addDisabled, decDisabled } = this;
        if (!addDisabled && type === "add") this.inputNumberValue += step;
        if (!decDisabled && type === "dec") this.inputNumberValue -= step;
      };
      const timer = setInterval(timerHandler, period);
      const startTime = new Date();

      const handler = () => {
        const endTime = new Date();

        if (endTime - startTime < period) timerHandler();
        clearInterval(timer);
        document.removeEventListener("mouseup", handler, false);
      };
      document.addEventListener("mouseup", handler, false);
    },
    handleChange(event) {
      this.inputNumberValue = event.target.value.replace(/[^\d.]/g, "");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/var.scss";

.input-number-wrapper {
  .prepend-part,
  .append-part {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    &.is-disabled {
      color: $disabled-color;
      cursor: not-allowed;
    }

    &:not(.is-disabled):hover {
      color: $success-color;
    }
  }
  .input-number-inner {
    max-width: 150px;
    .input-inner {
      text-align: center;
    }
  }
}
</style>
