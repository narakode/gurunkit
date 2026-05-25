import { h, useId, type FunctionalComponent } from 'vue';

const FormItem: FunctionalComponent<{
  label: string;
  id?: string;
}> = (props, context) => {
  const id = props.id || useId();

  return h('div', [
    h('label', { class: 'block mb-1', for: id }, props.label),
    context.slots.default ? context.slots.default({ id }) : null,
  ]);
};

FormItem.props = {
  label: {
    type: String,
    required: true,
  },
  id: String,
};

export default FormItem;
