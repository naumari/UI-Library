<template>
  <div class="input-number-wrapper" ref="input-number">
    <template v-if="controlsPosition === 'sides'">
      <fat-input :disabled="disabled" @change="handleChange" v-model="inputValue" class="input-number-inner">
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
    </template>

    <template v-else></template>
  </div>
</template>

<script>
const isNum = num =>
  !isNaN(num) && Object.prototype.toString.call(num) === "[object Number]";

export default {
  name: "input-number",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [Number],
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    controlsPosition: {
      type: String,
      default: "sides"
    },
    max: {
      type: Number
    },
    min: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "value",
    event: "change"
  },
  data() {
    return {
      inputValue: ""
    };
  },
  computed: {
    addDisabled() {
      return this.disabled || (isNum(this.max) && this.inputValue >= this.max);
    },
    decDisabled() {
      return this.disabled || (isNum(this.min) && this.inputValue <= this.min);
    }
  },
  watch: {
    value: {
      handler(newVal) {
        if (isNum(newVal)) this.inputValue = newVal;
      }
    },
    inputValue(newVal) {
      this.$emit("change", newVal);
    }
  },
  methods: {
    handleClick(type) {
      const { step } = this;
      const period = 100;
      const timerHandle = () => {
        const { addDisabled, decDisabled } = this;
        if (!addDisabled && type === "add") this.inputValue += step;
        if (!decDisabled && type === "dec") this.inputValue -= step;
      };
      const timer = setInterval(timerHandle, period);
      const startTime = new Date();

      const handler = () => {
        const endTime = new Date();
        if (endTime - startTime < period) timerHandle();

        clearInterval(timer);
        document.removeEventListener("mouseup", handler, false);
      };
      document.addEventListener("mouseup", handler, false);
    },
    handleChange(event) {
      const { max, min } = this;
      const value = event.target.value.replace(/[^\d.]/g, "");
      this.inputValue = test;
    }
  },
  created() {
    const { value } = this;
    if (
      !isNaN(value) &&
      Object.prototype.toString.call(value) === "[object Number]"
    )
      this.inputValue = this.value;
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
  }
  .input-number-inner {
    max-width: 150px;
    .input-inner {
      text-align: center;
    }
  }
}
</style>
