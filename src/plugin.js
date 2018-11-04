import marked from 'marked'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/github.css'

hljs.registerLanguage('javascript', javascript)

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

        Vue.directive('highlight',function (el) {
            let blocks = el.querySelectorAll('code')

            console.log('el', el, blocks)

            blocks.forEach((block)=>{
                hljs.highlightBlock(block)
            })
        })
    }
}