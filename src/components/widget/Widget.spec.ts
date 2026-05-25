import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import Widget from './widget';

test('render wrapper', () => {
  const wrapper = mount(Widget, { props: { label: 'Test', value: 5 } });

  expect(wrapper.find('div').exists()).toBe(true);
});
test('render label', () => {
  const wrapper = mount(Widget, {
    props: {
      label: 'Test',
      value: 5,
    },
  });

  const label = wrapper.find('div [data-test="widget-label"]');

  expect(label.exists()).toBe(true);
  expect(label.text()).toEqual(wrapper.props('label'));
});
test('render value', () => {
  const wrapper = mount(Widget, {
    props: {
      label: 'Test',
      value: 5,
    },
  });

  const value = wrapper.find('div [data-test="widget-value"]');

  expect(value.exists()).toBe(true);
  expect(value.text()).toEqual(`${wrapper.props('value')}`);
});
