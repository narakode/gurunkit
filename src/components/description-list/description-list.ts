import { h, type FunctionalComponent } from 'vue';

export const classList = {
  base: 'space-y-1',
  title: 'text-sm text-gray-500 dark:text-gray-400',
  description: 'font-medium text-gray-900 dark:text-white',
};

const DescriptionList: FunctionalComponent<{ title: string }> = (props, ctx) =>
  h('div', { class: classList.base }, [
    h('dt', { class: classList.title }, props.title),
    h('dd', { class: classList.description }, ctx.slots.default?.()),
  ]);

export default DescriptionList;

DescriptionList.props = {
  title: {
    type: String,
    required: true,
  },
};
