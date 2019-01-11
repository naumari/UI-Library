<template>
  <div class="demo-block" ref="demo-block" @scroll="handleScroll">
    <h3 class="demo-title">{{ title }}</h3>
    <span class="demo-subtitle">{{ subtitle }}</span>

    <div class="demo-nav-wrapper">
      <p
        v-for="(item, index) in nodeList"
        :key="index"
        :class="['demo-nav-item', { 'is-active': index === UI.activeIndex }]"
        @click.stop="scrollTo(item.offsetTop)"
      >{{ item.title }}</p>
    </div>

    <slot></slot>

    <div class="markdown-body" v-html="compiledMarkdown" v-highlight></div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    README: { type: String, default: "" }
  },
  provide() {
    return {
      DemoBlock: this
    };
  },
  data() {
    return {
      UI: {
        activeIndex: 0
      },
      nodeList: []
    };
  },
  computed: {
    compiledMarkdown: function() {
      return this.$marked(this.README, { sanitize: true });
    }
  },
  methods: {
    scrollTo(offsetTop) {
      this.$refs["demo-block"].scrollTop = offsetTop;
    },
    handleScroll(event) {
      const scrollTop = event.target.scrollTop;

      for (let index = 0; index < this.nodeList.length; index++) {
        const { offsetTop } = this.nodeList[index];
        if (offsetTop >= scrollTop) {
          this.UI.activeIndex = index;
          break;
        }
      }
    },
    updateNode() {
      this.$nextTick(() => {
        let nodeList = this.$refs["demo-block"].childNodes;
        nodeList = Array.prototype.reduce.call(
          nodeList,
          (pre, node) => {
            const result =
              node.className && node.className.includes("demo-row")
                ? [
                    {
                      title: node.textContent.split(" ")[0],
                      offsetTop: node.offsetTop
                    }
                  ]
                : [];

            return [...pre, ...result];
          },
          []
        );

        this.nodeList = nodeList;
      });
    }
  },
  created() {
    this.updateNode();
  }
};
</script>
<style lang="scss">
.demo-block {
  padding: 50px 0;
  font-size: 16px;
  scroll-behavior: smooth;

  .demo-title:first-child {
    font-size: 32px;
    font-weight: 600;
    color: #1f2f3d;

    & + .demo-subtitle {
      margin-top: 14px;
      display: inline-block;
      color: #5e6d82;
      line-height: 1.5em;

      & + .demo-row {
        margin-top: 28px;
      }
    }
  }

  .btn {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  .demo-nav-wrapper {
    display: none;
    position: fixed;
    top: 128px;
    right: 5%;

    .demo-nav-item {
      position: relative;
      cursor: pointer;
      color: $disabled-color;

      &:not(:last-child) {
        margin-bottom: $l-offset;
      }

      &.is-active {
        color: $success-color;

        &::before {
          box-sizing: content-box;
          position: absolute;
          top: 1px;
          left: -4px;
          content: "";
          width: 4px;
          height: 100%;
          border-left: 2px solid $success-color;
        }
      }
    }
  }

  @media screen and (min-width: 1180px) {
    .demo-nav-wrapper {
      display: block;
    }
  }
}
</style>
