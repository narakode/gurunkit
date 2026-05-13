import { h, type SetupContext } from 'vue';

export function Button(props: object, context: SetupContext) {
  return h(
    'button',
    { ...context.attrs },
    {
      default: context.slots.default,
    },
  );
}
