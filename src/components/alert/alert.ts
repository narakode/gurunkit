import { h, type FunctionalComponent, type PropType } from 'vue';
import type { Color } from '../../common';
import X from '../icons/x.vue';

export const classList: {
  base: string;
  colors: Record<Color, string>;
} = {
  base: 'p-4 rounded-md',
  colors: {
    error: 'bg-red-100',
    light: 'bg-gray-100',
    primary: 'bg-blue-100',
    success: 'bg-green-100',
    warning: 'bg-warning-100',
  },
};

const Alert: FunctionalComponent<
  {
    color?: Color;
    closable?: boolean;
  },
  { close(): void }
> = (props, ctx) =>
  h(
    'div',
    { class: [classList.base, classList.colors[props.color ?? 'light']] },
    [
      ctx.slots.icon?.(),
      ctx.slots.default?.(),
      props.closable
        ? h(
            'button',
            { 'aria-label': 'Close Alert', onClick: () => ctx.emit('close') },
            () => h(X),
          )
        : null,
    ],
  );

Alert.props = {
  color: {
    type: String as PropType<Color>,
    default: 'light',
  },
  closable: Boolean,
};

export default Alert;
