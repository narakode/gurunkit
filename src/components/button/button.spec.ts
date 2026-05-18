import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './button';

describe('base', () => {
  test('renders button', () => {
    const wrapper = mount(Button);

    expect(wrapper.find('button').exists()).toBe(true);
  });

  test('renders text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Test',
      },
    });

    expect(wrapper.find('button').text()).toEqual('Test');
  });

  test('inherits HTML attributes', () => {
    const wrapper = mount(Button, {
      attrs: {
        type: 'button',
        name: 'test',
      },
    });

    const button = wrapper.find('button');

    expect(button.attributes('type')).toEqual('button');
    expect(button.attributes('name')).toEqual('test');
  });

  test('inherits HTML events', async () => {
    const wrapper = mount(Button);

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
  });
});
