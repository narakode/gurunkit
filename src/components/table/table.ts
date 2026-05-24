import { h, type Component, type FunctionalComponent } from 'vue';

export type TableColumn = {
  id: string;
  name: string;
  render?: Component;
};
const Table: FunctionalComponent<{
  columns?: TableColumn[];
  data?: Record<string, any>[];
}> = (props) =>
  h(
    'div',
    { class: 'overflow-x-auto' },
    h('table', [
      h(
        'thead',
        h(
          'tr',
          props.columns?.map((column) => h('th', column.name)),
        ),
      ),
      h(
        'tbody',
        !props.data?.length
          ? h('tr', h('td', { colspan: 2 }, 'Empty data'))
          : props.data?.map((item) =>
              h(
                'tr',
                props.columns?.map((column) =>
                  h(
                    'td',
                    column.render
                      ? h(column.render, { item })
                      : item[column.id],
                  ),
                ),
              ),
            ),
      ),
    ]),
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
};

export default Table;
