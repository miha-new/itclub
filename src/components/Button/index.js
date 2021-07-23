import { h } from 'vue'

const Button = (props, context) => {
  const propsClasses = [];
  const attrsClasses = context.attrs.class;

  propsClasses.push('btn');
  propsClasses.push(`btn-${props.variant}`);

  let strPropsClasses = propsClasses.join(' ');

  return h('button', { ...context.attrs, class: strPropsClasses }, context.slots);
}

Button.props = {
  variant: {
    type: [String],
    required: true,
  },
};

export default Button;
