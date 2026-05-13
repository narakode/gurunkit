import { h, type SetupContext } from 'vue';

type ButtonProps = {
  classList?: {
    base?: string;
  };
};

export function Button(props: ButtonProps, context: SetupContext) {
  return h(
    'button',
    { ...context.attrs, class: props.classList?.base },
    {
      default: context.slots.default,
    },
  );
}
