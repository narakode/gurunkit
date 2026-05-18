import { h, type FunctionalComponent, type PropType } from 'vue';

type RadioColor = 'light' | 'primary' | 'error' | 'warning' | 'secondary';
type RadioSize = 'sm' | 'md' | 'lg';
type RadioProps = {
  id?: string;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- input value needs flexible type
  inputValue?: any;
  classList?: {
    base?: string;
    wrapper?: string;
    label?: string;
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
  color?: RadioColor;
  size?: RadioSize;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- model value needs flexible type
  modelValue?: any;
};
type RadioEvents = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- new value needs flexible type
  'update:modelValue'(newValue: any): void;
};

export const Radio: FunctionalComponent<RadioProps, RadioEvents> = (
  props,
  context,
) => {
  const colorClassListOptions: Record<RadioColor, string> = {
    light: props.classList?.colors?.light ?? '',
    primary: props.classList?.colors?.primary ?? '',
    error: props.classList?.colors?.error ?? '',
    warning: props.classList?.colors?.warning ?? '',
    secondary: props.classList?.colors?.secondary ?? '',
  };
  const sizeClassListOptions: Record<RadioSize, string> = {
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

  return h('div', { class: props.classList?.wrapper ?? '' }, [
    h(
      'input',
      {
        ...inheritAttrs,
        id: props.id,
        type: 'radio',
        class: classList,
        value: props.inputValue,
        checked: props.modelValue === props.inputValue,
        onChange: () => context.emit('update:modelValue', props.inputValue),
      },
      {
        default: context.slots.default,
      },
    ),
    props.label
      ? h(
          'label',
          { class: props.classList?.label ?? '', for: props.id },
          props.label,
        )
      : null,
  ]);
};

Radio.props = {
  id: String,
  label: String,
  inputValue: null,
  classList: Object,
  color: {
    type: String as PropType<RadioColor>,
    default: 'light',
  },
  size: {
    type: String as PropType<RadioSize>,
    default: 'md',
  },
  modelValue: null,
};
Radio.emits = ['update:modelValue'];
