import { h } from 'vue'

const View = (props, context) => {
  let classes = 'relative flex flex-col h-full bg-white overflow-auto';
  return h('div', { ...context.attrs, class: classes }, context.slots)
}

export default View;
