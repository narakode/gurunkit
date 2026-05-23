import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Modal from './modal';

test('renders wrapper', () => {
  const wrapper = mount(Modal);

  expect(wrapper.find('[role=dialog]').exists()).toBe(true);
});

test('renders content', () => {
  const wrapper = mount(Modal);

  expect(wrapper.find('[data-test="dialog-content"]').exists()).toBe(true);
});

describe('header', () => {
  test('renders header', async () => {
    const wrapper = mount(Modal);

    expect(wrapper.find('header').exists()).toBe(false);

    await wrapper.setProps({ title: 'Test' });

    expect(wrapper.find('header').exists()).toBe(true);
  });

  test('renders title', () => {
    const wrapper = mount(Modal, {
      props: {
        title: 'Test',
      },
    });

    expect(wrapper.find('h2').exists()).toBe(true);
    expect(wrapper.find('h2').text()).toEqual('Test');
  });

  test('render close button', () => {
    const wrapper = mount(Modal, {
      props: {
        title: 'Test',
      },
    });

    const closeButton = wrapper.find('button[aria-label="Close Modal"]');

    expect(closeButton.exists()).toBe(true);
    expect(closeButton.find('svg').exists()).toBe(true);
  });
});

describe('body', () => {
  test('renders body', () => {
    const wrapper = mount(Modal);

    expect(wrapper.find('[data-test="dialog-body"]').exists()).toBe(true);
  });

  test('renders body slot', () => {
    const wrapper = mount(Modal, {
      slots: {
        default: '<p id="test-body"></p>',
      },
    });

    expect(wrapper.find('p#test-body').exists()).toBe(true);
  });
});

describe('footer', () => {
  test('not renders footer', async () => {
    const wrapper = mount(Modal);

    expect(wrapper.find('footer').exists()).toBe(false);
  });

  test('renders footer slot', () => {
    const wrapper = mount(Modal, {
      slots: {
        footer: '<button id="test-footer"></button>',
      },
    });

    expect(wrapper.find('footer').exists()).toBe(true);
    expect(wrapper.find('button#test-footer').exists()).toBe(true);
  });
});
