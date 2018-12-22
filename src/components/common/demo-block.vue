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
    }
  },
  created() {
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
};
</script>
<style lang="scss">
</style>
