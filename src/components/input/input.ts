import { h, type FunctionalComponent, type PropType } from 'vue';

type InputColor = 'light' | 'primary' | 'error' | 'warning' | 'secondary';
type InputSize = 'sm' | 'md' | 'lg';
type InputProps = {
  classList?: {
    base?: string;
    colors?: {
      light?: string;
      primary?: string;
      error?: string;
      warning?: string;
      secondary?: string;
    };
    sizes?: {
      sm?: string;
      md?: string;
      lg?: string;
    };
  };
  color?: InputColor;
  size?: InputSize;
  modelValue?: string;
};
type InputEvents = {
  'update:modelValue'(newValue: string): void;
};

export const Input: FunctionalComponent<InputProps, InputEvents> = (
  props,
  context,
) => {
  const colorClassListOptions: Record<InputColor, string> = {
    light: props.classList?.colors?.light ?? '',
    primary: props.classList?.colors?.primary ?? '',
    error: props.classList?.colors?.error ?? '',
    warning: props.classList?.colors?.warning ?? '',
    secondary: props.classList?.colors?.secondary ?? '',
  };
  const sizeClassListOptions: Record<InputSize, string> = {
    sm: props.classList?.sizes?.sm ?? '',
    md: props.classList?.sizes?.md ?? '',
    lg: props.classList?.sizes?.lg ?? '',
  };
  const colorClassList: string = colorClassListOptions[props.color ?? 'light'];
  const sizeClassList: string = sizeClassListOptions[props.size ?? 'md'];

  const { class: inheritClass, ...inheritAttrs } = context.attrs;
  const classList = [
    inheritClass,
    props.classList?.base ?? '',
    colorClassList,
    sizeClassList,
  ]
    .filter((cls) => !!cls)
    .join(' ');

  return h(
    'input',
    {
      ...inheritAttrs,
      class: classList,
      value: props.modelValue,
      onInput: (e) =>
        context.emit('update:modelValue', (e.target as HTMLInputElement).value),
    },
    {
      default: context.slots.default,
    },
  );
};

Input.props = {
  classList: Object,
  color: {
    type: String as PropType<InputColor>,
    default: 'light',
  },
  size: {
    type: String as PropType<InputSize>,
    default: 'md',
  },
  modelValue: String,
};
Input.emits = ['update:modelValue'];
