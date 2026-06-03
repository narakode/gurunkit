import { h, type FunctionalComponent } from 'vue';

const Pagination: FunctionalComponent<
  {
    total: number;
    active?: number;
  },
  {
    'update:active'(newValue: number): void;
  }
> = (props, ctx) =>
  h('nav', [
    props?.active && props?.active < 2
      ? null
      : h('a', {
          'aria-label': 'Prev',
          onClick: (e) => {
            e.preventDefault();

            if (props.active) {
              ctx.emit('update:active', props.active - 1);
            }
          },
        }),
    ...Array.from({ length: props.total }, (_, i) => i + 1).map((i) =>
      h(
        i === props.active ? 'span' : 'a',
        {
          'data-page': i,
          onClick: (e) => {
            e.preventDefault();

            ctx.emit('update:active', i);
          },
        },
        i,
      ),
    ),
    props?.active && props?.active >= props.total
      ? null
      : h('a', {
          'aria-label': 'Next',
          onClick: (e) => {
            e.preventDefault();

            if (props.active) {
              ctx.emit('update:active', props.active + 1);
            }
          },
        }),
  ]);

Pagination.props = {
  total: {
    type: Number,
    required: true,
  },
  active: Number,
};
Pagination.emits = ['update:active'];

export default Pagination;
