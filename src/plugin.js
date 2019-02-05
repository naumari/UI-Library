import marked from 'marked';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/lightfair.css';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

export default {
  install(Vue) {
    const rendererMD = new marked.Renderer();
    marked.setOptions({
      renderer: rendererMD,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
    });
    Vue.prototype.$marked = marked;

    Vue.directive('highlight', {
      bind(el) {
        let blocks = el.querySelectorAll('code');
        Array.prototype.forEach.call(blocks, block => {
          hljs.highlightBlock(block);
        });
      },
    });

    Vue.mixin({
      beforeCreate() {

        const isDef = v => v !== undefined

        if (isDef(this.$options.store)) {
          const {
            store
          } = this.$options
          const {
            state,
            getters
          } = store
          const computed = Object.create(null)

          this.$store = store
          Object.keys(getters).forEach(key => {
            const fun = getters[key]

            computed[key] = () =>  fun(state)
          })
          this.$options.store._vm = new Vue({
            data: {
              $$state: state
            },
            computed
          })

          Object.keys(getters).forEach(key => {
            Object.defineProperty(this.$store.getters, key, {
              get: () => {
                return store._vm[key]
              }
            })
          })

        } else if (this.$options.parent && this.$options.parent.$store) {
          this.$store = this.$options.parent.$store
        }
      }
    })










  },
};
