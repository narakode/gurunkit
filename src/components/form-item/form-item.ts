import { h, useId, type FunctionalComponent } from 'vue';

export const classList = {
  wrapper: '',
  label: 'block mb-1',
};

const FormItem: FunctionalComponent<{
  label: string;
  id?: string;
}> = (props, context) => {
  const id = props.id || useId();

  return h('div', { class: classList.wrapper }, [
    h('label', { class: classList.label, for: id }, props.label),
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
