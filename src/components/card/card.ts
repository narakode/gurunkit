import { h, type FunctionalComponent } from 'vue';

export const Card: FunctionalComponent<{
  title?: string;
}> = (props) =>
  h(
    'div',
    { 'data-test': 'card-content', class: 'bg-white text-gray-900 rounded-md' },
    [
      props.title
        ? h(
            'header',
            {
              class:
                'p-4 border-b border-gray-300 flex items-center justify-between',
            },
            [h('h2', { class: 'font-bold text-lg' }, props.title)],
          )
        : null,
    ],
  );

Card.props = {
  title: String,
};
