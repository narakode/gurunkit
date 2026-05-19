import { h, type FunctionalComponent } from 'vue';

type CheckboxProps = {
  label?: string;
};

export const classList: { wrapper: string; label: string; base: string } = {
  wrapper: 'flex gap-2',
  label: 'font-normal',
  base: 'appearance-none',
};

const Checkbox: FunctionalComponent<CheckboxProps> = (props, context) =>
  h('div', { class: classList.wrapper }, [
    props.label ? h('label', { class: classList.label }, props.label) : null,
    h('input', { type: 'checkbox', class: [classList.base], ...context.attrs }),
  ]);

Checkbox.props = {
  label: String,
};

export default Checkbox;
