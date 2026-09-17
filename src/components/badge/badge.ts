import { h, type FunctionalComponent, type PropType } from 'vue';
import type { Color } from '../../common';

export const classList: { base: string; colors: Record<Color, string> } = {
  base: 'border h-6 inline-flex items-center text-sm font-medium px-2 rounded whitespace-nowrap',
  colors: {
    light:
      'bg-gray-100 border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white',
    warning:
      'bg-yellow-50 border-yellow-500 text-yellow-700 dark:bg-yellow-600 dark:border-yellow-500 dark:text-yellow-100',
    primary:
      'bg-sky-50 border-sky-500 text-sky-700 dark:bg-sky-600 dark:border-sky-500 dark:text-sky-100',
    success:
      'bg-green-50 border-green-500 text-green-700 dark:bg-green-600 dark:border-green-500 dark:text-green-100',
    error:
      'bg-red-50 border-red-500 text-red-700 dark:bg-red-600 dark:border-red-500 dark:text-red-100',
  },
};

const Badge: FunctionalComponent<{ color?: Color }> = (props, ctx) =>
  h(
    'span',
    { class: [classList.base, classList.colors[props.color ?? 'light']] },
    ctx.slots.default?.(),
  );

export default Badge;

Badge.props = {
  color: {
    type: String as PropType<Color>,
    default: 'light',
  },
};
