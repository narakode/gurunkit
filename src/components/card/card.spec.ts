import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Card from './card';

test('renders content', () => {
  const wrapper = mount(Card);

  expect(wrapper.find('[data-test="card-content"]').exists()).toBe(true);
});

test('inherits class attributes', () => {
  const wrapper = mount(Card, { attrs: { class: 'max-w-md' } });

  expect(wrapper.find('[data-test="card-content"]').classes()).toContain(
    'max-w-md',
  );
});

describe('header', () => {
  test('renders header', async () => {
    const wrapper = mount(Card);

    expect(wrapper.find('header').exists()).toBe(false);

    await wrapper.setProps({ title: 'Test' });

    expect(wrapper.find('header').exists()).toBe(true);
  });

  test('renders title', () => {
    const wrapper = mount(Card, {
      props: {
        title: 'Test',
      },
    });

    expect(wrapper.find('h2').exists()).toBe(true);
    expect(wrapper.find('h2').text()).toEqual('Test');
  });

  test('renders action slot', () => {
    const wrapper = mount(Card, {
      props: {
        title: 'Test',
      },
      slots: {
        action: '<button aria-label="Close">Close</button>',
      },
    });

    const closeButton = wrapper.find('button[aria-label="Close"]');

    expect(closeButton.exists()).toBe(true);
  });
});

describe('body', () => {
  test('renders body', () => {
    const wrapper = mount(Card, {});

    expect(wrapper.find('[data-test="card-body"]').exists()).toBe(true);
  });

  test('renders body slot', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '<p id="test-body"></p>',
      },
    });

    expect(wrapper.find('p#test-body').exists()).toBe(true);
  });
});

describe('footer', () => {
  test('not renders footer', () => {
    const wrapper = mount(Card, {});

    expect(wrapper.find('footer').exists()).toBe(false);
  });

  test('renders footer slot', () => {
    const wrapper = mount(Card, {
      slots: {
        footer: '<button id="test-footer"></button>',
      },
    });

    expect(wrapper.find('footer').exists()).toBe(true);
    expect(wrapper.find('button#test-footer').exists()).toBe(true);
  });
});
