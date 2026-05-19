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
