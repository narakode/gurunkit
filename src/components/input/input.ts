import { h, type FunctionalComponent, type PropType } from 'vue';
import { type Color, type Size } from '../../common';

export const classList: {
  base: string;
  colors: Record<Color, string>;
  sizes: Record<Size, string>;
} = {
  base: 'font-medium cursor-pointer inline-flex items-center justify-center',
  colors: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
    error: 'bg-red-600 text-white hover:bg-red-700',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700',
    light: 'bg-white text-gray-700 hover:bg-gray-100',
  },
  sizes: {
    sm: 'h-8 px-3 rounded text-sm',
    md: 'h-10 px-4 rounded-md',
    lg: 'h-12 px-6 rounded-md text-lg',
  },
};

type InputProps = {
  color?: Color;
  size?: Size;
  modelValue?: string;
};
type InputEvents = {
  'update:modelValue'(newValue: string): void;
};

const Input: FunctionalComponent<InputProps, InputEvents> = (props, context) =>
  h('input', {
    class: [
      classList.base,
      classList.colors[props.color ?? 'primary'],
      classList.sizes[props.size ?? 'md'],
    ],
    ...context.attrs,
    value: props.modelValue,
    onInput: (e) =>
      context.emit('update:modelValue', (e.target as HTMLInputElement).value),
  });

Input.props = {
  color: {
    type: String as PropType<InputProps['color']>,
    default: 'primary',
  },
  size: {
    type: String as PropType<InputProps['size']>,
    default: 'md',
  },
  modelValue: String,
};

export default Input;
