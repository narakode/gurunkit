import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Checkbox from './checkbox';

describe('base', () => {
  test('renders checkbox', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.find('input[type=checkbox]').exists()).toBe(true);
  });

  test('renders wrapper', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.find('div').exists()).toBe(true);
  });

  test('inherits HTML attributes', () => {
    const wrapper = mount(Checkbox, {
      attrs: {
        name: 'test',
      },
    });

    expect(wrapper.find('input[type=checkbox]').attributes('name')).toEqual(
      'test',
    );
  });
});

describe('label', () => {
  test('not renders label', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.find('label').exists()).toBe(false);
  });

  test('renders label when exists', () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: 'Test',
      },
    });

    const label = wrapper.find('label');

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe('Test');
  });
});
