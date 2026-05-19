import { h, type FunctionalComponent, type PropType } from 'vue';
import { type Color, type Size } from '../../common';

export const classList: {
  base: string;
  colors: Record<Color, string>;
  sizes: Record<Size, string>;
} = {
  base: 'border focus:outline-0',
  colors: {
    primary:
      'bg-white text-blue-700 placeholder-blue-500 border-blue-300 focus:border-blue-600 dark:bg-transparent dark:border-blue-600 dark:focus:border-blue-400 dark:placeholder-blue-600 dark:text-blue-300',
    success:
      'bg-white text-green-700 placeholder-green-500 border-green-300 focus:border-green-600 dark:bg-transparent dark:border-green-600 dark:focus:border-green-400 dark:placeholder-green-600 dark:text-green-300',
    error:
      'bg-white text-red-700 placeholder-red-500 border-red-300 focus:border-red-600 dark:bg-transparent dark:border-red-600 dark:focus:border-red-400 dark:placeholder-red-600 dark:text-red-300',
    warning:
      'bg-white text-yellow-700 placeholder-yellow-500 border-yellow-300 focus:border-yellow-600 dark:bg-transparent dark:border-yellow-600 dark:focus:border-yellow-400 dark:placeholder-yellow-600 dark:text-yellow-300',
    light:
      'bg-white text-gray-700 placeholder-gray-400 border-gray-300 focus:border-blue-600 dark:bg-transparent dark:border-gray-600 dark:focus:border-blue-400 dark:placeholder-gray-500 dark:text-gray-300',
  },
  sizes: {
    sm: 'h-8 px-2.5 rounded text-sm',
    md: 'h-10 px-3 rounded-md',
    lg: 'h-12 px-4 rounded-md text-lg',
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

const Input: FunctionalComponent<InputProps, InputEvents> = (
  props,
  context,
) => {
  const { class: inheritClass, ...inheritAttributes } = context.attrs;

  return h('input', {
    class: [
      inheritClass,
      classList.base,
      classList.colors[props.color ?? 'light'],
      classList.sizes[props.size ?? 'md'],
    ],
    ...inheritAttributes,
    value: props.modelValue,
    onInput: (e) =>
      context.emit('update:modelValue', (e.target as HTMLInputElement).value),
  });
};

Input.props = {
  color: {
    type: String as PropType<InputProps['color']>,
    default: 'light',
  },
  size: {
    type: String as PropType<InputProps['size']>,
    default: 'md',
  },
  modelValue: String,
};

export default Input;
