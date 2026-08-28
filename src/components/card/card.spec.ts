import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { Card } from './card';

test('renders content', () => {
  const wrapper = mount(Card);

  expect(wrapper.find('[data-test="card-content"]').exists()).toBe(true);
});

describe.only('header', () => {
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

  //   test('render close button', () => {
  //     const wrapper = mount(Card, {
  //       props: {
  //         title: 'Test',
  //         visible: true,
  //       },
  //     });

  //     const closeButton = wrapper.find('button[aria-label="Close Card"]');

  //     expect(closeButton.exists()).toBe(true);
  //     expect(closeButton.find('svg').exists()).toBe(true);
  //   });
});
