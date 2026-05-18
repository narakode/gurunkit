import { h, type FunctionalComponent } from 'vue';

const Button: FunctionalComponent = (props, context) =>
  h(
    'button',
    {
      ...context.attrs,
    },
    {
      default: context.slots.default,
    },
  );

export default Button;
