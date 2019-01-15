<template>
  <div class="date-picker-wrapper" ref="date-picker">
    <fat-input
      type="text"
      readonly
      :class="['picker-data', 'not-select', {'disabled': disabled}]"
      :value="selectValue | dateFormat('day', lang)"
      :placeholder="placeholder"
      @click="toggle"
    />
    <transition name="fade">
      <div class="picker-panel" v-show="UI.isOpen">
        <div class="panel-header">
          <div class="left-part">
            <fat-icon
              class="panel-header-btn"
              name="chevron_left"
              @click.stop="handleClick('decYear')"
              :size="20"
            />
            <fat-icon
              class="panel-header-btn"
              name="chevron_left"
              @click.stop="handleClick('decMonth')"
              :size="20"
            />
          </div>
          <div>
            <span
              class="panel-header-btn"
              @click.stop="handleClick('year')"
            >{{ date.year | dateFormat('year', lang) }}</span>
            <span
              class="panel-header-btn"
              @click.stop="handleClick('month')"
            >{{ date.month | dateFormat('month', lang) }}</span>
          </div>

          <div>
            <fat-icon
              class="panel-header-btn"
              name="chevron_right"
              :size="20"
              @click.stop="handleClick('addMonth')"
            />

            <fat-icon
              class="panel-header-btn"
              name="chevron_right"
              :size="20"
              @click.stop="handleClick('addYear')"
            />
          </div>
        </div>

        <date-panel
          class="panel-content"
          :type="panelType"
          :data="list"
          @select="panelClick"
          :lang="lang"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import datePanel from "./panel/panel";
import CONST from "./CONST.json";
import { isNum, dateToObj, isEqualDay } from "../utils";

export default {
  name: "date-picker",
  components: { datePanel },
  props: {
    lang: { type: String, default: "CN" },
    value: { type: [Date, String, Number] },
    disabled: { type: Boolean, default: false },
    placeholder: { type: String, default: "请选择日期" }
  },
  filters: {
    dateFormat(val, mode, lang) {
      let result = null;
      const handlers = {
        year: () => (lang === "CN" ? `${val}年` : `${val}`),
        month: () => `${CONST[lang].month[val].label}`,
        day: () => {
          let { year, month, day } = dateToObj(val);
          return `${year}-${month + 1}-${day}`.replace(/\d+/g, a => {
            return a.length === 4 ? a : a.length === 2 ? a : "0" + a;
          });
        }
      };
      return val !== "" ? handlers[mode]() : "";
    }
  },
  model: {
    prop: "value",
    event: "input"
  },
  data() {
    return {
      date: {
        year: null,
        month: null,
        day: null
      },
      UI: {
        isOpen: false
      },
      selectValue: null,
      panelType: "day"
    };
  },
  computed: {
    yearList() {
      const {
        date: { year }
      } = this;
      return Array.from(
        {
          length: 12
        },
        (v = year, i) => ({
          type: "year",
          value: v + i
        })
      );
    },
    monthList() {
      const { lang } = this;
      return CONST[lang].month;
    },
    dayList() {
      const {
        date: { year, month },
        selectValue
      } = this;
      let curMonthDays = new Date(year, month + 1, 0).getDate();
      let firstDay = new Date(year, month, 1).getDay();
      let preMonthDays = new Date(year, month, 0).getDate();
      let days = Array.from(
        {
          length: curMonthDays
        },
        (val, index) => {
          let value = index + 1;
          let date = {
            year,
            month,
            day: value
          };
          let type = isEqualDay(date, new Date(selectValue))
            ? "cur-month is-selected"
            : "cur-month";
          return {
            type,
            value
          };
        }
      );
      for (let index = 0; index < firstDay; index++) {
        days = [
          {
            type: "pre-month",
            value: preMonthDays--
          }
        ].concat(days);
      }
      for (let index = days.length, item = 1; index < 42; index++, item++) {
        days.push({
          type: "next-month",
          value: item
        });
      }
      return days;
    },
    list() {
      const { panelType, yearList, monthList, dayList } = this;
      return panelType === "year"
        ? yearList
        : panelType === "month"
        ? monthList
        : dayList;
    }
  },
  watch: {
    date: {
      handler(newValue) {
        let { month } = newValue;
        if (month > 11) {
          ++this.date.year;
          this.date.month = 0;
        } else if (month < 0) {
          --this.date.year;
          this.date.month = 11;
        } else {
          this.date.month = newValue.month;
        }
      },
      deep: true
    },
    value: {
      handler(newValue) {
        this.date = dateToObj(newValue ? new Date(newValue) : new Date());
        this.selectValue = newValue ? new Date(newValue) : "";
      },
      immediate: true
    }
  },
  methods: {
    handleClick(type) {
      const handlers = {
        addYear: () => ++this.date.year,
        decYear: () => --this.date.year,
        addMonth: () => ++this.date.month,
        decMonth: () => --this.date.month,
        year: () => (this.panelType = "year"),
        month: () => (this.panelType = "month")
      };
      handlers[type]();
    },
    panelClick(e) {
      const { type, value, dateType } = e;
      const handlers = {
        day: () => {
          this.date.month +=
            dateType === "cur-month" ? 0 : dateType === "pre-month" ? -1 : 1;
          const {
            date: { year, month, day }
          } = this;
          this.selectValue = new Date(year, month, day);
          this.$emit("input", this.selectValue);
          this.UI.isOpen = false;
        },
        month: () => (this.panelType = "day"),
        year: () => (this.panelType = "month")
      };
      this.date[type] = Number(value);
      handlers[type]();
    },
    toggle() {
      this.UI.isOpen = !this.UI.isOpen;
      if (this.UI.isOpen) {
        const datePicker = this.$refs["date-picker"];
        const handler = event => {
          let dom = event.target;
          let flag = false;

          while (dom) {
            if (dom === datePicker) {
              flag = true;
              break;
            }
            dom = dom.parentNode;
          }
          if (!flag) {
            this.UI.isOpen = flag;
            document.removeEventListener("click", handler, true);
          }
        };
        document.addEventListener("click", handler, true);
      }
    }
  }
};
</script>

<style lang="scss">
.date-picker-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
  height: 34px;
  &:focus {
    outline: none;
  }
  .arrow {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    text-align: center;
    background: #fff;
  }
  .picker-data {
    position: relative;
  }
  .picker-panel {
    position: absolute;
    top: 100%;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    user-select: none;
    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 48px;
      .panel-header-btn {
        &:hover {
          color: $success-color;
        }
      }
    }
    .panel-content {
      width: 250px;
      background: #fff;
      .head-item,
      .data-item {
        padding: 0.4em 0;
        text-align: center;
      }
      .data-item {
        &:not(.is-selected):hover {
          cursor: pointer;
          color: #fff;
          background: $success-color;
        }
        &.is-selected {
          color: $success-color;
        }
        &.pre-month,
        &.next-month {
          color: $disabled-color;
        }
      }
    }
  }
}
</style>