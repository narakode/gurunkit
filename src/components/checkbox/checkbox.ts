import { h, type FunctionalComponent, type PropType } from 'vue';
import type { Color } from '../../common';

type CheckboxProps = {
  label?: string;
  color?: Color;
};

export const classList: {
  wrapper: string;
  label: string;
  base: string;
  colors: Record<Color, string>;
} = {
  wrapper: 'flex gap-2',
  label: 'font-normal',
  base: 'appearance-none border rounded',
  colors: {
    light: 'border-gray-300 checked:bg-blue-600',
    primary: 'border-blue-300 checked:bg-blue-600',
    error: 'border-red-300 checked:bg-red-600',
    warning: 'border-yellow-300 checked:bg-yellow-600',
    success: 'border-green-300 checked:bg-green-600',
  },
};

const Checkbox: FunctionalComponent<CheckboxProps> = (props, context) =>
  h('div', { class: classList.wrapper }, [
    props.label ? h('label', { class: classList.label }, props.label) : null,
    h('input', {
      type: 'checkbox',
      class: [classList.base, classList.colors[props.color ?? 'light']],
      ...context.attrs,
    }),
  ]);

Checkbox.props = {
  label: String,
  color: {
    type: String as PropType<CheckboxProps['color']>,
    default: 'light',
  },
};

export default Checkbox;
