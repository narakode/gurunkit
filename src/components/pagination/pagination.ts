import { h, type FunctionalComponent } from 'vue';

export const classList = {
  active: 'bg-blue-600',
  inactive: 'bg-gray-50',
};

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
          class: [props.active === i ? classList.active : classList.inactive],
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
