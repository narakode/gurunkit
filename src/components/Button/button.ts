import { h, type SetupContext } from 'vue';

type ButtonColor = 'light' | 'primary';
type ButtonProps = {
  classList?: {
    base?: string;
    colors?: {
      light?: string;
      primary?: string;
    };
  };
  color?: ButtonColor;
};

export function Button(props: ButtonProps, context: SetupContext) {
  const colorClassListOptions: Record<ButtonColor, string> = {
    light: props.classList?.colors?.light ?? '',
    primary: props.classList?.colors?.primary ?? '',
  };
  const colorClassList: string = colorClassListOptions[props.color ?? 'light'];

  return h(
    'button',
    { ...context.attrs, class: [props.classList?.base, colorClassList] },
    {
      default: context.slots.default,
    },
  );
}
