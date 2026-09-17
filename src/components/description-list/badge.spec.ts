import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import DescriptionList, { classList } from './description-list';

test('renders wrapper', () => {
  const wrapper = mount(DescriptionList, {
    props: {
      title: 'Test',
    },
  });

  expect(wrapper.find('div').exists()).toBe(true);
});
test('renders title', () => {
  const wrapper = mount(DescriptionList, {
    props: {
      title: 'Test',
    },
  });

  expect(wrapper.find('dt').exists()).toBe(true);
  expect(wrapper.find('dt').text()).toEqual('Test');
});
test('renders default slot', () => {
  const wrapper = mount(DescriptionList, {
    props: {
      title: 'Test',
    },
    slots: {
      default: 'Test',
    },
  });

  expect(wrapper.find('dd').exists()).toBe(true);
  expect(wrapper.find('dd').text()).toEqual('Test');
});

describe('class list', () => {
  test('base class list', () => {
    const wrapper = mount(DescriptionList, {
      props: {
        title: 'Test',
      },
    });

    expect(wrapper.find('div').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });
  test('title class list', () => {
    const wrapper = mount(DescriptionList, {
      props: {
        title: 'Test',
      },
    });

    expect(wrapper.find('dt').classes()).toEqual(
      expect.arrayContaining(classList.title.split(' ')),
    );
  });
  test('description class list', () => {
    const wrapper = mount(DescriptionList, {
      props: {
        title: 'Test',
      },
    });

    expect(wrapper.find('dd').classes()).toEqual(
      expect.arrayContaining(classList.description.split(' ')),
    );
  });
});
