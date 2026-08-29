import { mount } from '@vue/test-utils';
import { expect, test, vi } from 'vitest';
import Message from './message';

vi.mock(import('./message.compose'), () => ({
  useMessage: vi.fn().mockImplementation(() => ({
    getItems() {
      return [{ message: 'Test 1' }, { message: 'Test 2' }];
    },
  })),
}));

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
