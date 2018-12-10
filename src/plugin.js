import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'

hljs.configure({
  useBR: true
})

export default {
  install(Vue) {
    const rendererMD = new marked.Renderer()
    marked.setOptions({
      renderer: rendererMD,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    })
    Vue.prototype.$marked = marked

    Vue.directive('highlight', function (el) {
      let blocks = el.querySelectorAll('code')
      Array.prototype.forEach.call(blocks, block => {
        hljs.highlightBlock(block)
      })
    })
  }
}
