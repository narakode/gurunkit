import {
  h,
  type Component,
  type FunctionalComponent,
  type PropType,
} from 'vue';
import { type Color, type Size } from '../../common';
import Spinner from '../icons/spinner.vue';

type Variant = 'solid' | 'outline';

export const classList: {
  base: string;
  colors: Record<Color, Record<Variant, string>>;
  sizes: Record<Size, string>;
} = {
  base: 'font-medium cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
  colors: {
    primary: {
      solid: 'bg-blue-600 text-white hover:bg-blue-700',
      outline:
        'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    },
    success: {
      solid: 'bg-green-600 text-white hover:bg-green-700',
      outline:
        'border-green-600 text-green-600 hover:bg-green-600 hover:text-white',
    },
    error: {
      solid: 'bg-red-600 text-white hover:bg-red-700',
      outline: 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
    },
    warning: {
      solid: 'bg-yellow-600 text-white hover:bg-yellow-700',
      outline:
        'border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white',
    },
    light: {
      solid: 'bg-white text-gray-700 hover:bg-gray-100',
      outline: 'border-gray-300 text-gray-900 hover:bg-gray-100',
    },
  },
  sizes: {
    sm: 'h-8 px-3 rounded text-sm',
    md: 'h-10 px-4 rounded-md',
    lg: 'h-12 px-6 rounded-md text-lg',
  },
};

type ButtonProps = {
  color?: Color;
  size?: Size;
  tag?: string | Component;
  variant?: Variant;
  loading?: boolean;
};

const Button: FunctionalComponent<ButtonProps> = (props, context) => {
  const { class: inheritClass, ...inheritAttributes } = context.attrs;
  return h(
    props.tag ?? 'button',
    {
      disabled: props.loading,
      class: [
        inheritClass,
        classList.base,
        classList.colors[props.color ?? 'primary'][props.variant ?? 'solid'],
        classList.sizes[props.size ?? 'md'],
        props.variant === 'solid' ? '' : 'border',
      ],
      ...inheritAttributes,
    },
    [
      props.loading
        ? h(Spinner, { 'data-test': 'spinner' })
        : context.slots.icon
          ? context.slots.icon()
          : null,
      context.slots.default ? context.slots.default() : null,
    ],
  );
};

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
  variant: {
    type: String as PropType<ButtonProps['variant']>,
    default: 'solid',
  },
  loading: {
    type: Boolean,
    default: false,
  },
};

export default Button;
