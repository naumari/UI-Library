import Vue from 'vue'
import CONST from '../CONST.json'
import GeneratorRows from './basic'

export default Vue.component('panel', {
  functional: true,
  render: function (_h, context) {
    const {
      lang,
      data,
      type
    } = context.props
    let result = null
    let list = type === 'day' ? CONST[lang].day.concat(data) : data
    let num = type === 'day' ? 7 : 3

    const clickHandler = (e) => {
      if (e.target.attributes.index) {
        let value = e.target.attributes.index.value
        let params = {
          type,
          value
        }

        type === 'day' && Object.assign(params, {
          dateType: e.target.attributes.dateType.value
        })
        context.listeners.select(params)
      }
      e.stopPropagation()
    }

    result = _h('table', {
      attrs: {
        class: context.data.staticClass,
        cellspacing: 0,
        cellpadding: 0
      },
      on: {
        click: clickHandler
      }
    }, GeneratorRows(_h, type, list, num))

    return result
  },
  props: {
    lang: {
      type: String,
      default: 'CN'
    },
    state: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    },
    type: {
      type: String
    }
  }
})
