import { h, type Component, type FunctionalComponent } from 'vue';

export type TableColumn = {
  id: string;
  name: string;
  render?: Component;
};
const Table: FunctionalComponent<{
  columns?: TableColumn[];
  data?: Record<string, any>[];
  emptyMessage?: string;
}> = (props) =>
  h(
    'div',
    { class: 'overflow-x-auto' },
    h(
      'table',
      { class: 'w-full border border-gray-300 dark:border-gray-700' },
      [
        h(
          'thead',
          h(
            'tr',
            props.columns?.map((column) =>
              h(
                'th',
                {
                  class:
                    'text-left font-bold px-4 py-3 border-b border-gray-300 bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700',
                },
                column.name,
              ),
            ),
          ),
        ),
        h(
          'tbody',
          !props.data?.length
            ? h(
                'tr',
                h(
                  'td',
                  {
                    colspan: 2,
                    class: 'text-gray-900 px-4 py-3 dark:text-white',
                  },
                  props.emptyMessage,
                ),
              )
            : props.data?.map((item) =>
                h(
                  'tr',
                  props.columns?.map((column) =>
                    h(
                      'td',
                      {
                        class:
                          'text-gray-900 px-4 py-3 border-b border-gray-300 dark:text-white dark:border-gray-700',
                      },
                      column.render
                        ? h(column.render, { item })
                        : item[column.id],
                    ),
                  ),
                ),
              ),
        ),
      ],
    ),
  );

Table.props = {
  columns: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  emptyMessage: {
    type: String,
    default: 'Empty data',
  },
};

export default Table;
