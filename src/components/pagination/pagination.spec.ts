import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Pagination from './pagination';

test('renders wrapper', () => {
  const wrapper = mount(Pagination, {
    props: {
      total: 5,
    },
  });

  expect(wrapper.find('nav').exists()).toBe(true);
});

describe('items', () => {
  test('renders total items link', () => {
    const total = 4;
    const wrapper = mount(Pagination, {
      props: {
        total,
      },
    });

    expect(wrapper.findAll('nav a[data-page]')).toHaveLength(total);
  });

  test('renders item link', () => {
    const total = 4;
    const wrapper = mount(Pagination, {
      props: {
        total,
      },
    });

    expect(wrapper.findAll('a[data-page]').map((a) => a.text())).toEqual([
      '1',
      '2',
      '3',
      '4',
    ]);
  });

  describe('active', () => {
    test('renders total items and active span', () => {
      const wrapper = mount(Pagination, {
        props: {
          total: 4,
          active: 1,
        },
      });

      expect(wrapper.findAll('a[data-page]')).toHaveLength(3);
      expect(wrapper.findAll('span')).toHaveLength(1);
    });

    test('updates active onclick', async () => {
      const wrapper = mount(Pagination, {
        props: {
          total: 4,
          active: 1,
          'onUpdate:active': (newValue) =>
            wrapper.setProps({ active: newValue }),
        },
      });

      await wrapper.find('a[data-page="2"]').trigger('click');

      expect(wrapper.props('active')).toEqual(2);
    });
  });

  test('non active class list');
  test('active class list');
});

describe('prev', () => {
  test('not renders prev on first page', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 4,
        active: 1,
      },
    });

    expect(wrapper.find('a[aria-label="Prev"]').exists()).toBe(false);
  });

  test('renders prev', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 4,
        active: 2,
      },
    });

    expect(wrapper.find('a[aria-label="Prev"]').exists()).toBe(true);
  });

  test('updates active onclick', async () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 4,
        active: 2,
        'onUpdate:active': (newValue) => wrapper.setProps({ active: newValue }),
      },
    });

    await wrapper.find('a[aria-label="Prev"]').trigger('click');

    expect(wrapper.props('active')).toEqual(1);
  });
});

describe('next', () => {
  test('not renders next on last page', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 4,
        active: 4,
      },
    });

    expect(wrapper.find('a[aria-label="Next"]').exists()).toBe(false);
  });
  test('renders next', () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 4,
        active: 1,
      },
    });

    expect(wrapper.find('a[aria-label="Next"]').exists()).toBe(true);
  });

  test('updates active onclick', async () => {
    const wrapper = mount(Pagination, {
      props: {
        total: 4,
        active: 2,
        'onUpdate:active': (newValue) => wrapper.setProps({ active: newValue }),
      },
    });

    await wrapper.find('a[aria-label="Next"]').trigger('click');

    expect(wrapper.props('active')).toEqual(3);
  });
});
