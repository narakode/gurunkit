import { h, type FunctionalComponent } from 'vue';

const Widget: FunctionalComponent<{ label: string; value: string | number }> = (
  props,
) =>
  h('div', [
    h('p', { 'data-test': 'widget-label' }, props.label),
    h('p', { 'data-test': 'widget-value' }, props.value),
  ]);

Widget.props = {
  label: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
};

export default Widget;
