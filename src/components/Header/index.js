import { h } from 'vue'

const Header = (props, context) => {
  let classes = 'sticky top-0 px-16 py-4 mb-6 w-full flex items-center bg-white border border-gray-200 select-none';
  return h('div',
    {
      ...context.attrs,
      class: classes
    },
    [
      h('div', { class: 'mx-auto mb-0 text-center font-medium text-base' }, props.text),
      ...context.slots.default(),
    ]
  )
}

Header.props = ['text'];

export default Header;
