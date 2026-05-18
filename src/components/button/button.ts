import { h, type FunctionalComponent, type PropType } from 'vue';

type ButtonColor = 'primary' | 'success' | 'error' | 'warning' | 'light';

export const classList: { base: string; colors: Record<ButtonColor, string> } =
  {
    base: 'font-medium',
    colors: {
      primary: 'bg-blue-600 text-white',
      success: 'bg-green-600 text-white',
      error: 'bg-red-600 text-white',
      warning: 'bg-yellow-600 text-white',
      light: 'bg-white-600 text-gray-700',
    },
  };

type ButtonProps = {
  color?: ButtonColor;
};

const Button: FunctionalComponent<ButtonProps> = (props, context) =>
  h(
    'button',
    {
      class: [classList.base, classList.colors[props?.color ?? 'primary']],
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
};

export default Button;
