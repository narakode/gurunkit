import { h, type FunctionalComponent } from 'vue';
import ChevronLeft from '../icons/chevron-left.vue';
import ChevronRight from '../icons/chevron-right.vue';

export const classList = {
  active: 'bg-blue-600 text-white dark:bg-blue-600',
  inactive:
    'text-gray-900 cursor-pointer hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700',
  item: 'w-9 h-9 flex items-center justify-center',
};

const Pagination: FunctionalComponent<
  {
    total: number;
    active?: number;
  },
  {
    'update:active'(newValue: number): void;
  }
> = (props, ctx) => {
  const nextVisible = props?.active && props?.active >= props.total;
  return h(
    'nav',
    {
      class:
        'border flex w-fit rounded-md border-gray-300 dark:border-gray-700',
    },
    [
      props?.active && props?.active < 2
        ? null
        : h(
            'a',
            {
              'aria-label': 'Prev',
              class: [
                classList.item,
                classList.inactive,
                'border-r border-gray-300 rounded-l-md dark:border-gray-700',
              ],
              onClick: (e) => {
                e.preventDefault();

                if (props.active) {
                  ctx.emit('update:active', props.active - 1);
                }
              },
            },
            h(ChevronLeft, { class: 'size-4' }),
          ),
      ...Array.from({ length: props.total }, (_, i) => i + 1).map((i) =>
        h(
          i === props.active ? 'span' : 'a',
          {
            class: [
              props.active === i ? classList.active : classList.inactive,
              classList.item,
              i === 1 ? 'rounded-l-md' : '',
              i < props.total || (i === props.total && !nextVisible)
                ? 'border-r border-gray-300 dark:border-gray-700'
                : 'rounded-r-md',
            ],
            'data-page': i,
            onClick: (e) => {
              e.preventDefault();

              ctx.emit('update:active', i);
            },
          },
          i,
        ),
      ),
      nextVisible
        ? null
        : h(
            'a',
            {
              'aria-label': 'Next',
              class: [classList.item, classList.inactive, 'rounded-r-md'],
              onClick: (e) => {
                e.preventDefault();

                if (props.active) {
                  ctx.emit('update:active', props.active + 1);
                }
              },
            },
            h(ChevronRight, { class: 'size-4' }),
          ),
    ],
  );
};

Pagination.props = {
  total: {
    type: Number,
    required: true,
  },
  active: Number,
};
Pagination.emits = ['update:active'];

export default Pagination;
