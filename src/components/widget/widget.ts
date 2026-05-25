import { h, type FunctionalComponent } from 'vue';

const Widget: FunctionalComponent<{ label: string; value: string | number }> = (
  props,
) =>
  h(
    'div',
    {
      class:
        'bg-white border border-gray-300 rounded-lg px-5 py-4.5 space-y-2 dark:bg-gray-800 dark:border-gray-700',
    },
    [
      h(
        'p',
        {
          'data-test': 'widget-label',
          class: 'text-gray-700 dark:text-gray-400',
        },
        props.label,
      ),
      h(
        'p',
        {
          'data-test': 'widget-value',
          class: 'text-gray-900 text-xl font-bold dark:text-white',
        },
        props.value,
      ),
    ],
  );

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
