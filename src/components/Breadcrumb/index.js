import './index.scss';

export default {
  functional: true,
  render: function (_h, context) {
    const {props: {paths, separator, separatorComponent}} = context;
    let elements = paths.map (path => {
      const {label, to} = path;
      const element = to ? 'router-link' : 'span';
      const props = to
        ? {
            to,
          }
        : {};

      return _h (
        element,
        {
          class: {
            breadcrumb__item: true,
            'is-navigative': !!to
          },
          props,
        },
        label
      );
    });

    const _separator = separatorComponent
      ? separatorComponent
      : _h ('span', {
          class: {
            'breadcrumb__separator': true,
          },
          domProps: {
            innerHTML: separator,
          },
        });

    elements = elements.reduce ((pre, cur) => {
      const element = pre.length % 2 ? [_separator, cur] : [cur];

      return [...pre, ...element];
    }, []);

    return _h (
      'div',
      {
        class: {
          'breadcrumb': true,
        },
      },
      elements
    );
  },
  props: {
    paths: {
      type: Array,
      default: () => [],
    },
    separator: {
      type: String,
      default: '/',
    },
    separatorComponent: {
      type: Object,
    },
  },
};
