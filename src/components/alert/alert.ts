import { h, type FunctionalComponent, type PropType } from 'vue';
import type { Color } from '../../common';
import X from '../icons/x.vue';
import Spinner from '../icons/spinner.vue';

export const classList: {
  base: string;
  colors: Record<Color, string>;
} = {
  base: 'px-4 py-3 rounded-md border flex items-start gap-2',
  colors: {
    error:
      'bg-red-100 text-red-700 border-red-300 dark:bg-red-900/50 dark:text-red-300 dark:border-red-900',
    light:
      'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700',
    primary:
      'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-900',
    success:
      'bg-green-100 text-green-700 border-green-300 dark:bg-green-900/50 dark:text-green-300 dark:border-green-900',
    warning:
      'bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-900',
  },
};

const Alert: FunctionalComponent<
  {
    color?: Color;
    closable?: boolean;
    loading?: boolean;
  },
  { close(): void }
> = (props, ctx) =>
  h(
    'div',
    { class: [classList.base, classList.colors[props.color ?? 'light']] },
    [
      props.loading
        ? h(Spinner, { class: 'mt-0.75' })
        : ctx.slots.icon
          ? h('div', { class: 'mt-0.75 shrink-0' }, ctx.slots.icon())
          : null,
      ctx.slots.default?.(),
      ctx.slots.action
        ? h('div', { class: 'ml-auto' }, ctx.slots.action())
        : props.closable
          ? h(
              'button',
              {
                class: 'cursor-pointer ml-auto mt-1 shrink-0',
                'aria-label': 'Close Alert',
                onClick: () => ctx.emit('close'),
              },
              h(X, { class: 'size-4' }),
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
  loading: Boolean,
};

export default Alert;
