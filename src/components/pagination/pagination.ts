import { h, type FunctionalComponent } from 'vue';

const Pagination: FunctionalComponent<{
  total: number;
  active?: number;
}> = (props) =>
  h('nav', [
    props?.active && props?.active < 2
      ? null
      : h('a', { 'aria-label': 'Prev' }),
    ...Array.from({ length: props.total }, (_, i) => i + 1).map((i) =>
      h(i === props.active ? 'span' : 'a', i),
    ),
    props?.active && props?.active >= props.total
      ? null
      : h('a', { 'aria-label': 'Next' }),
  ]);

Pagination.props = {
  total: {
    type: Number,
    required: true,
  },
  active: Number,
};

export default Pagination;
