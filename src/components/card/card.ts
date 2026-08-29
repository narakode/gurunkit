import { h, type FunctionalComponent } from 'vue';

const Card: FunctionalComponent<{
  title?: string;
}> = (props, ctx) =>
  h(
    'div',
    {
      'data-test': 'card-content',
      class: ['bg-white text-gray-900 rounded-md', ctx.attrs.class],
    },
    [
      props.title
        ? h(
            'header',
            {
              class:
                'p-4 border-b border-gray-300 flex items-center justify-between',
            },
            [
              h('h2', { class: 'font-bold text-lg' }, props.title),
              ctx.slots.action?.(),
            ],
          )
        : null,
      h(
        'div',
        { 'data-test': 'card-body', class: 'p-4' },
        ctx.slots.default?.(),
      ),
      ctx.slots.footer
        ? h(
            'footer',
            { class: 'p-4 border-t border-gray-300' },
            ctx.slots.footer(),
          )
        : null,
    ],
  );

Card.props = {
  title: String,
};

export default Card;
