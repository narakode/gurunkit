import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Checkbox from './checkbox';

describe.only('base', () => {
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
