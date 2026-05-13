import { h, type Component, type SetupContext } from 'vue';

type ButtonColor = 'light' | 'primary' | 'error' | 'warning' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonProps = {
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
  color?: ButtonColor;
  size?: ButtonSize;
  tag?: string | Component;
};

export function Button(props: ButtonProps, context: SetupContext) {
  const colorClassListOptions: Record<ButtonColor, string> = {
    light: props.classList?.colors?.light ?? '',
    primary: props.classList?.colors?.primary ?? '',
    error: props.classList?.colors?.error ?? '',
    warning: props.classList?.colors?.warning ?? '',
    secondary: props.classList?.colors?.secondary ?? '',
  };
  const sizeClassListOptions: Record<ButtonSize, string> = {
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
    props.tag ?? 'button',
    {
      ...inheritAttrs,
      class: classList,
    },
    {
      default: context.slots.default,
    },
  );
}
