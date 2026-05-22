import { h, type FunctionalComponent, type PropType } from 'vue';
import { type Color, type Size } from '../../common';

export const classList: {
  base: string;
  file: string;
  colors: Record<Color, Record<'base' | 'file', string>>;
  sizes: Record<Size, Record<'base' | 'input' | 'textarea' | 'file', string>>;
} = {
  base: 'border focus:outline-1',
  file: 'pl-0 file:bg-gray-100 file:h-full file:text-gray-900 file:border-r dark:file:bg-gray-700 dark:file:text-white',
  colors: {
    primary: {
      base: 'bg-white text-blue-700 placeholder-blue-500 border-blue-300 focus:border-blue-600 focus:outline-blue-600 dark:bg-transparent dark:border-blue-600 dark:focus:border-blue-400 dark:focus:outline-blue-400 dark:placeholder-blue-600 dark:text-blue-300',
      file: 'file:border-blue-300 focus:file:border-blue-600 dark:file:border-blue-600 dark:focus:file:border-blue-400',
    },
    success: {
      base: 'bg-white text-green-700 placeholder-green-500 border-green-300 focus:border-green-600 focus:outline-green-600 dark:bg-transparent dark:border-green-600 dark:focus:border-green-400 dark:focus:outline-green-400 dark:placeholder-green-600 dark:text-green-300',
      file: 'file:border-green-300 focus:file:border-green-600 dark:file:border-green-600 dark:focus:file:border-green-400',
    },
    error: {
      base: 'bg-white text-red-700 placeholder-red-500 border-red-300 focus:border-red-600 focus:outline-red-600 dark:bg-transparent dark:border-red-600 dark:focus:border-red-400 dark:focus:outline-red-400 dark:placeholder-red-600 dark:text-red-300',
      file: 'file:border-red-300 focus:file:border-red-600 dark:file:border-red-600 dark:focus:file:border-red-400',
    },
    warning: {
      base: 'bg-white text-yellow-700 placeholder-yellow-500 border-yellow-300 focus:border-yellow-600 focus:outline-yellow-600 dark:bg-transparent dark:border-yellow-600 dark:focus:border-yellow-400 dark:focus:outline-yellow-400 dark:placeholder-yellow-600 dark:text-yellow-300',
      file: 'file:border-yellow-300 focus:file:border-yellow-600 dark:file:border-yellow-600 dark:focus:file:border-yellow-400',
    },
    light: {
      base: 'bg-white text-gray-700 placeholder-gray-400 border-gray-300 focus:border-blue-600 focus:outline-blue-600 dark:bg-transparent dark:border-gray-600 dark:focus:border-blue-400 dark:focus:outline-blue-400 dark:placeholder-gray-500 dark:text-gray-300',
      file: 'file:border-gray-300 focus:file:border-blue-600 dark:file:border-gray-600 dark:focus:file:border-blue-400',
    },
  },
  sizes: {
    sm: {
      base: 'px-2.5 rounded text-sm',
      input: 'h-8',
      textarea: 'min-h-8 py-2',
      file: 'file:text-sm file:px-2.5 file:mr-2.5',
    },
    md: {
      base: 'px-3 rounded-md',
      input: 'h-10',
      textarea: 'min-h-10 py-2',
      file: 'file:px-3 file:mr-3',
    },
    lg: {
      base: 'px-4 rounded-md text-lg',
      input: 'h-12',
      textarea: 'min-h-12 py-3',
      file: 'file:text-lg file:px-4 file:mr-4',
    },
  },
};

type InputProps = {
  color?: Color;
  size?: Size;
  modelValue?: string;
  tag?: 'input' | 'textarea';
};
type InputEvents = {
  'update:modelValue'(newValue: string): void;
};

const Input: FunctionalComponent<InputProps, InputEvents> = (
  props,
  context,
) => {
  const { class: inheritClass, type, ...inheritAttributes } = context.attrs;

  return h(props.tag === 'textarea' ? 'textarea' : 'input', {
    type,
    class: [
      inheritClass,
      classList.base,
      ...(type === 'file'
        ? [
            classList.file,
            classList.colors[props.color ?? 'light'].file,
            classList.sizes[props.size ?? 'md'].file,
          ]
        : []),
      classList.colors[props.color ?? 'light'].base,
      classList.sizes[props.size ?? 'md'].base,
      classList.sizes[props.size ?? 'md'][
        props.tag === 'textarea' ? 'textarea' : 'input'
      ],
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
  tag: {
    type: String as PropType<InputProps['tag']>,
    default: 'input',
  },
};

export default Input;
