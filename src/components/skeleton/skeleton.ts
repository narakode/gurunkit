import { h, type FunctionalComponent } from 'vue';

export const classList = {
  base: 'bg-gray-200 h-40 rounded-md animate-pulse dark:bg-gray-800',
};

const Skeleton: FunctionalComponent = () => h('div', { class: classList.base });

export default Skeleton;
