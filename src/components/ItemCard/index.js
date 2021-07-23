import { h } from 'vue'

const ItemCard = (props, context) => {
  return h('div',
    {
      ...context.attrs,
      class: 'relative block w-full px-3 py-1 mb-4 bg-gray-100 border border-gray-200 select-none cursor-pointer',
    },
    [
      h('div', { class: 'mb-2 w-8 h-6 bg-green-400' }),
      h('div', { class: 'font-normal text-base' }, props.name),
      h('div', { class: 'flex' }, [
        h('div', { class: 'font-normal text-base' }, props.number),
        h('div', { class: 'ml-auto font-normal text-base text-gray-400' }, props.code),
      ]),
      ...context.slots.default(),
    ],
  );
};

ItemCard.props = ['name', 'number', 'code'];

export default ItemCard;
