export default {
  functional: true,
  render: function (_h, context) {
    const {
      props: {
        paths,
        separator,
        separatorIcon
      }
    } = context
    let elements = paths.map(path => {
      const {
        name,
        to
      } = path
      const element = to ? 'router-link' : 'span'
      const props = to ? {
        to
      } : {}

      return _h(element, {
        'class': {
          'breadcrumb-item': true
        },
        props
      }, name)
    })
    
    let _separator = separatorIcon ? _h('fat-icon', {
      props: {
        name: separatorIcon
      }
    }) : _h('span', {
      'class': {
        'separator': true
      },
      domProps: {
        innerHTML: separator
      }
    })

    elements = elements.reduce((pre, cur) => {
      const element = pre.length % 2 ? [_separator, cur] : [cur]

      return [...pre, ...element]
    }, [])

    return _h('div', {
      'class': {
        'breadcrumb': true
      }
    }, elements)
  },
  props: {
    paths: {
      type: Array,
      default: () => []
    },
    separator: {
      type: String,
      default: '/'
    },
    separatorIcon: {
      type: String,
      default: ''
    }
  }
}
