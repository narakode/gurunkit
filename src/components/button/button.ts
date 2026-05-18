import {
  h,
  type Component,
  type FunctionalComponent,
  type PropType,
} from 'vue';

type ButtonColor = 'primary' | 'success' | 'error' | 'warning' | 'light';
type ButtonSize = 'sm' | 'md' | 'lg';

export const classList: {
  base: string;
  colors: Record<ButtonColor, string>;
  sizes: Record<ButtonSize, string>;
} = {
  base: 'font-medium',
  colors: {
    primary: 'bg-blue-600 text-white',
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    warning: 'bg-yellow-600 text-white',
    light: 'bg-white-600 text-gray-700',
  },
  sizes: {
    sm: 'h-8 text-sm px-2.5',
    md: 'h-10 px-3.5',
    lg: 'h-12 px-4.5',
  },
};

type ButtonProps = {
  color?: ButtonColor;
  size?: ButtonSize;
  tag?: string | Component;
};

const Button: FunctionalComponent<ButtonProps> = (props, context) =>
  h(
    props.tag ?? 'button',
    {
      class: [
        classList.base,
        classList.colors[props.color ?? 'primary'],
        classList.sizes[props.size ?? 'md'],
      ],
      ...context.attrs,
    },
    {
      default: context.slots.default,
    },
  );

Button.props = {
  color: {
    type: String as PropType<ButtonProps['color']>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ButtonProps['size']>,
    default: 'md',
  },
  tag: {
    type: null,
    default: 'button',
  },
};

export default Button;
