import { h, type FunctionalComponent, type PropType } from 'vue';
import { type Color, type Size } from '../../common';

export const classList: {
  base: string;
  wrapper: string;
  colors: Record<Color, string>;
  wrapperSizes: Record<Size, string>;
  sizes: Record<Size, string>;
} = {
  base: 'appearance-none border focus:outline-1',
  wrapper:
    "w-fit relative after:block after:content-[''] after:border-l-2 after:border-b-2 after:border-gray-500 after:-rotate-45 has-focus:after:rotate-135 after:absolute",
  colors: {
    primary:
      'bg-white text-blue-700 placeholder-blue-500 border-blue-300 focus:border-blue-600 focus:outline-blue-600 dark:bg-transparent dark:border-blue-600 dark:focus:border-blue-400 dark:focus:outline-blue-400 dark:placeholder-blue-600 dark:text-blue-300',
    success:
      'bg-white text-green-700 placeholder-green-500 border-green-300 focus:border-green-600 focus:outline-green-600 dark:bg-transparent dark:border-green-600 dark:focus:border-green-400 dark:focus:outline-green-400 dark:placeholder-green-600 dark:text-green-300',
    error:
      'bg-white text-red-700 placeholder-red-500 border-red-300 focus:border-red-600 focus:outline-red-600 dark:bg-transparent dark:border-red-600 dark:focus:border-red-400 dark:focus:outline-red-400 dark:placeholder-red-600 dark:text-red-300',
    warning:
      'bg-white text-yellow-700 placeholder-yellow-500 border-yellow-300 focus:border-yellow-600 focus:outline-yellow-600 dark:bg-transparent dark:border-yellow-600 dark:focus:border-yellow-400 dark:focus:outline-yellow-400 dark:placeholder-yellow-600 dark:text-yellow-300',
    light:
      'bg-white text-gray-700 placeholder-gray-400 border-gray-300 focus:border-blue-600 focus:outline-blue-600 dark:bg-transparent dark:border-gray-600 dark:focus:border-blue-400 dark:focus:outline-blue-400 dark:placeholder-gray-500 dark:text-gray-300',
  },
  wrapperSizes: {
    sm: 'after:size-1.75 after:top-2.5 after:right-2.5 has-focus:after:top-3.5',
    md: 'after:size-2 after:top-3.25 after:right-3 has-focus:after:top-4.25',
    lg: 'after:size-2 after:top-4.25 after:right-4 has-focus:after:top-5.25',
  },
  sizes: {
    sm: 'h-8 px-2.5 pr-8 rounded text-sm',
    md: 'h-10 pl-3 pr-10 rounded-md',
    lg: 'h-12 px-4 pr-12 rounded-md text-lg',
  },
};

type SelectProps = {
  color?: Color;
  size?: Size;
  modelValue?: any;
  options?: any[] | { id: string; name: string }[];
};
type SelectEvents = {
  'update:modelValue'(newValue: string | null): void;
};

const Select: FunctionalComponent<SelectProps, SelectEvents> = (
  props,
  context,
) => {
  const { class: inheritClass, type, ...inheritAttributes } = context.attrs;

  return h(
    'div',
    { class: [classList.wrapper, classList.wrapperSizes[props.size ?? 'md']] },
    h(
      'select',
      {
        type,
        class: [
          inheritClass,
          classList.base,
          classList.colors[props.color ?? 'light'],
          classList.sizes[props.size ?? 'md'],
        ],
        ...inheritAttributes,
        value: props.modelValue === null ? '' : props.modelValue,
        onChange: (e) => {
          const value = (e.target as HTMLInputElement).value;
          context.emit('update:modelValue', value === '' ? null : value);
        },
      },
      props.options?.map((option) =>
        h(
          'option',
          {
            value:
              typeof option === 'object' && option !== null
                ? option.id === null
                  ? ''
                  : option.id
                : option === null
                  ? ''
                  : option,
          },
          typeof option === 'object' && option !== null ? option.name : option,
        ),
      ),
    ),
  );
};

Select.props = {
  color: {
    type: String as PropType<SelectProps['color']>,
    default: 'light',
  },
  size: {
    type: String as PropType<SelectProps['size']>,
    default: 'md',
  },
  modelValue: null,
  options: {
    type: Array,
    default: () => [],
  },
};

export default Select;
