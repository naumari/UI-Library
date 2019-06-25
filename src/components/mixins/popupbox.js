export default {
  data() {
    return {
      visible: true
    }
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },
  mounted() {
    document.body.appendChild(this.$el)
  },
  destroyed() {
    this.$el.parentNode.removeChild(this.$el)
  },
  methods: {
    destroyElement() {
      this.$destroy()
    },
    close() {
      this.visible = false
    }
  }
}
