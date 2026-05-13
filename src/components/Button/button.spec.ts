import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { Button } from './button';

test('renders button element', () => {
  const wrapper = mount(Button);

  expect(wrapper.find('button').exists()).toBeTruthy();
});

test('renders button text', () => {
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
      name: 'cancel',
    },
  });

  expect(wrapper.find('button').attributes('type')).toEqual('button');
  expect(wrapper.find('button').attributes('name')).toEqual('cancel');
});

test('inherits HTML events', async () => {
  const wrapper = mount(Button);

  await wrapper.trigger('click');

  expect(wrapper.emitted()).toHaveProperty('click');
});
