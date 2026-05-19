import { h, type FunctionalComponent } from 'vue';

const Checkbox: FunctionalComponent = (props, context) =>
  h('div', [h('input', { type: 'checkbox', ...context.attrs })]);

export default Checkbox;
