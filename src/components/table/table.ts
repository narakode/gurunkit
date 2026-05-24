import { h, type FunctionalComponent } from 'vue';

type TableColumn = {
  id: string;
  name: string;
};
const Table: FunctionalComponent<{
  columns?: TableColumn[];
  data?: Record<string, any>[];
}> = (props) =>
  h(
    'div',
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
        props.data?.map((item) =>
          h(
            'tr',
            props.columns?.map((column) => h('td', item[column.id])),
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
