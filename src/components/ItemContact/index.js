import { h } from 'vue'

const ItemContact = (props, context) => {
  return h('div',
    {
      ...context.attrs,
      class: 'block w-full px-3 py-1 mb-4 bg-gray-100 border border-gray-200 select-none cursor-pointer',
    },
    [
      h('div',
        { class: 'font-normal text-base' },
        props.fullName,
      ),
      h('div',
        { class: 'font-normal text-base text-gray-400' },
        props.email,
      ),
    ],
  );
};

ItemContact.props = ['fullName', 'email'];

export default ItemContact;
