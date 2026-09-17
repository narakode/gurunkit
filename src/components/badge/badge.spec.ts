import { describe, expect, test } from 'vitest';
import Badge, { classList } from './badge';
import { mount } from '@vue/test-utils';

test('render wrapper', () => {
  const wrapper = mount(Badge);

  expect(wrapper.find('span').exists()).toBe(true);
});

test('renders text', () => {
  const wrapper = mount(Badge, {
    slots: {
      default: 'Badge',
    },
  });

  expect(wrapper.text()).toEqual('Badge');
});

describe('class list', () => {
  test('base class list', () => {
    const wrapper = mount(Badge);

    expect(wrapper.find('span').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });

  describe('color class list', () => {
    test('default color', () => {
      const wrapper = mount(Badge);

      expect(wrapper.find('span').classes()).toEqual(
        expect.arrayContaining(classList.colors.light.split(' ')),
      );
    });

    test('selected color', async () => {
      const wrapper = mount(Badge, {
        props: {
          color: 'error',
        },
      });

      expect(wrapper.find('span').classes()).toEqual(
        expect.arrayContaining(classList.colors.error.split(' ')),
      );

      await wrapper.setProps({
        color: 'success',
      });

      expect(wrapper.find('span').classes()).toEqual(
        expect.arrayContaining(classList.colors.success.split(' ')),
      );
    });
  });
});
