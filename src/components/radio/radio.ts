import { h, useId, type FunctionalComponent, type PropType } from 'vue';
import type { Color, Size } from '../../common';

type RadioProps = {
  label?: string;
  color?: Color;
  size?: Size;
  inputValue?: string;
  modelValue?: string;
  id?: string;
};
type RadioEvents = {
  'update:modelValue'(e?: string): void;
};

export const classList: {
  wrapper: string;
  label: string;
  base: string;
  colors: Record<Color, string>;
  sizes: Record<Size, string>;
} = {
  wrapper: 'flex items-center gap-2.5',
  label: 'font-normal text-gray-900 dark:text-gray-300',
  base: "appearance-none relative border focus-visible:outline-2 focus:ring-0 focus-visible:outline-offset-2 after:hidden checked:after:block after:content-[''] after:border-white after:-rotate-45 after:absolute",
  colors: {
    light:
      'border-gray-300 checked:bg-blue-600 checked:border-blue-600 dark:border-gray-600 focus-visible:outline-blue-600',
    primary:
      'border-blue-300 checked:bg-blue-600 checked:border-blue-600 dark:border-blue-600 focus-visible:outline-blue-600',
    error:
      'border-red-300 checked:bg-red-600 checked:border-red-600 dark:border-red-600 focus-visible:outline-red-600',
    warning:
      'border-yellow-300 checked:bg-yellow-600 checked:border-yellow-600 dark:border-yellow-600 focus-visible:outline-yellow-600',
    success:
      'border-green-300 checked:bg-green-600 checked:border-green-600 dark:border-green-600 focus-visible:outline-green-600',
  },
  sizes: {
    sm: 'size-3 rounded-sm after:w-1.5 after:border-l-1 after:border-b-1 after:h-1 after:top-0.5 after:left-0.5',
    md: 'size-4 rounded after:w-2.5 after:border-l-2 after:border-b-2 after:h-1.5 after:top-0.75 after:left-0.5',
    lg: 'size-6 rounded-md after:w-4 after:border-l-3 after:border-b-3 after:h-2.5 after:top-0.75 after:left-0.75',
  },
};

const Radio: FunctionalComponent<RadioProps, RadioEvents> = (
  props,
  context,
) => {
  const id = props.id || useId();

  return h('div', { class: classList.wrapper }, [
    h('input', {
      ...context.attrs,
      id,
      type: 'radio',
      checked: props.modelValue === props.inputValue,
      class: [
        classList.base,
        classList.colors[props.color ?? 'light'],
        classList.sizes[props.size ?? 'md'],
      ],
      onChange: () => {
        context.emit('update:modelValue', props.inputValue);
      },
    }),
    props.label
      ? h('label', { class: classList.label, for: id }, props.label)
      : null,
  ]);
};

Radio.props = {
  label: String,
  color: {
    type: String as PropType<RadioProps['color']>,
    default: 'light',
  },
  size: {
    type: String as PropType<RadioProps['size']>,
    default: 'md',
  },
  inputValue: String,
  modelValue: String,
  id: String,
};
Radio.emits = ['update:modelValue'];

export default Radio;
