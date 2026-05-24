import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import Table, { type TableColumn } from './table';
import { h } from 'vue';

test('renders wrapper', () => {
  const wrapper = mount(Table);

  expect(wrapper.find('div').exists()).toBe(true);
});
test('renders table', () => {
  const wrapper = mount(Table);

  expect(wrapper.find('div table').exists()).toBe(true);
});
test('renders columns', () => {
  const columns = [
    { id: 'no', name: 'No' },
    { id: 'name', name: 'Name' },
  ];
  const wrapper = mount(Table, {
    props: {
      columns,
    },
  });

  expect(wrapper.find('table thead').exists()).toBe(true);
  expect(wrapper.find('thead tr').exists()).toBe(true);

  const th = wrapper.findAll('thead tr th');

  expect(th).toHaveLength(columns.length);

  columns.forEach((column, i) => {
    expect(th[i].text()).toEqual(column.name);
  });
});
test('renders data', () => {
  const columns = [
    { id: 'id', name: 'No' },
    { id: 'name', name: 'Name' },
  ];
  const data = [
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
    { id: 3, name: 'Test 3' },
  ];

  const wrapper = mount(Table, {
    props: {
      columns,
      data,
    },
  });

  expect(wrapper.find('table tbody').exists()).toBe(true);
  expect(wrapper.find('tbody tr').exists()).toBe(true);

  const tr = wrapper.findAll('tbody tr');

  expect(tr).toHaveLength(data.length);

  data.forEach((item, i) => {
    const itemTr = tr[i];
    const td = itemTr.findAll('td');

    expect(td).toHaveLength(columns.length);

    columns.forEach((column, i) => {
      expect(td[i].text()).toEqual(`${item[column.id as keyof typeof item]}`);
    });
  });
});
test('renders empty item', () => {
  const columns = [
    { id: 'id', name: 'No' },
    { id: 'name', name: 'Name' },
  ];

  const wrapper = mount(Table, {
    props: {
      columns,
    },
  });

  expect(wrapper.find('table tbody').exists()).toBe(true);

  const tr = wrapper.findAll('tbody tr');

  expect(tr).toHaveLength(1);

  const td = tr[0].findAll('td');

  expect(td).toHaveLength(1);
  expect(td[0].attributes('colspan')).toEqual('2');
  expect(td[0].text()).toEqual('Empty data');
});
test('renders item', () => {
  const columns: TableColumn[] = [
    { id: 'id', name: 'No' },
    { id: 'name', name: 'Name', render: ({ item }) => h('p', item.name) },
  ];

  const wrapper = mount(Table, {
    props: {
      columns,
      data: [{ id: '1', name: 'Test 1' }],
    },
  });

  const td = wrapper.findAll('td');
  const tdName = td[1];

  expect(tdName.html().trim()).toContain('<p>Test 1</p>');
});
test('wrapper overflow', () => {
  const wrapper = mount(Table);

  expect(wrapper.classes()).toContain('overflow-x-auto');
});
