import { h, type FunctionalComponent, type PropType } from 'vue';

type CheckboxColor = 'light' | 'primary' | 'error' | 'warning' | 'secondary';
type CheckboxSize = 'sm' | 'md' | 'lg';
type CheckboxProps = {
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
  color?: CheckboxColor;
  size?: CheckboxSize;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- model value needs flexible type
  modelValue?: boolean | any[];
};
type CheckboxEvents = {
  'update:modelValue'(newValue: boolean | string[]): void;
};

export const Checkbox: FunctionalComponent<CheckboxProps, CheckboxEvents> = (
  props,
  context,
) => {
  const colorClassListOptions: Record<CheckboxColor, string> = {
    light: props.classList?.colors?.light ?? '',
    primary: props.classList?.colors?.primary ?? '',
    error: props.classList?.colors?.error ?? '',
    warning: props.classList?.colors?.warning ?? '',
    secondary: props.classList?.colors?.secondary ?? '',
  };
  const sizeClassListOptions: Record<CheckboxSize, string> = {
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

  const checked = Array.isArray(props.modelValue)
    ? props.modelValue.findIndex((item) => item === props.inputValue) !== -1
    : props.modelValue;

  return h('div', { class: props.classList?.wrapper ?? '' }, [
    h(
      'input',
      {
        ...inheritAttrs,
        id: props.id,
        type: 'checkbox',
        class: classList,
        value: props.inputValue,
        checked,
        onChange: (e) => {
          const checked = (e.target as HTMLInputElement).checked;

          if (Array.isArray(props.modelValue)) {
            const newModelValue = checked
              ? [...props.modelValue, props.inputValue]
              : props.modelValue.filter((item) => item !== props.inputValue);

            context.emit('update:modelValue', newModelValue);
          } else {
            context.emit('update:modelValue', checked);
          }
        },
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

Checkbox.props = {
  id: String,
  label: String,
  inputValue: null,
  classList: Object,
  color: {
    type: String as PropType<CheckboxColor>,
    default: 'light',
  },
  size: {
    type: String as PropType<CheckboxSize>,
    default: 'md',
  },
  modelValue: [Boolean, Array],
};
Checkbox.emits = ['update:modelValue'];
