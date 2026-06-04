import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
import Message from './message';

vi.mock(import('./message.compose'), () => ({
  useMessage: vi.fn().mockImplementation(() => ({
    getItems() {
      return [{ message: 'Test 1' }, { message: 'Test 2' }];
    },
  })),
}));

test('renders wrapper', () => {
  const wrapper = mount(Message);

  expect(wrapper.find('div[data-test="message-wrapper"]').exists()).toBe(true);
});

describe.only('items', () => {
  test('renders total items', () => {
    const wrapper = mount(Message);

    expect(wrapper.findAll('div[data-test="message"]')).toHaveLength(2);
  });
  test('renders item message', () => {
    const wrapper = mount(Message);

    expect(
      wrapper
        .findAll('div[data-test="message"]')
        .map((message) => message.text()),
    ).toEqual(['Test 1', 'Test 2']);
  });
  test('closes item on duration');
});
