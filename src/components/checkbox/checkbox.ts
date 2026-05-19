import { h, type FunctionalComponent } from 'vue';

type CheckboxProps = {
  label?: string;
};

const Checkbox: FunctionalComponent<CheckboxProps> = (props, context) =>
  h('div', [
    props.label ? h('label', props.label) : null,
    h('input', { type: 'checkbox', ...context.attrs }),
  ]);

Checkbox.props = {
  label: String,
};

export default Checkbox;
