import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Checkbox, { classList } from './checkbox';

describe('base', () => {
  test('renders checkbox', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.find('input[type=checkbox]').exists()).toBe(true);
  });

  test('renders wrapper', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.find('div').exists()).toBe(true);
  });

  test('inherits HTML attributes', () => {
    const wrapper = mount(Checkbox, {
      attrs: {
        name: 'test',
      },
    });

    expect(wrapper.find('input[type=checkbox]').attributes('name')).toEqual(
      'test',
    );
  });
});

describe('label', () => {
  test('not renders label', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.find('label').exists()).toBe(false);
  });

  test('renders label when exists', () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: 'Test',
      },
    });

    const label = wrapper.find('label');

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe('Test');
  });
});

describe('class list', () => {
  test('wrapper class list', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.find('div').classes()).toEqual(classList.wrapper.split(' '));
  });

  test('label class list', () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: 'Test',
      },
    });

    expect(wrapper.find('label').classes()).toEqual(classList.label.split(' '));
  });

  test('checkbox class list', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.find('input').classes()).toEqual(classList.base.split(' '));
  });

  describe.only('color', () => {
    test('default color', () => {
      const wrapper = mount(Checkbox);

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.light.split(' ')),
      );
    });

    test('selected color', () => {
      const wrapper = mount(Checkbox, {
        props: {
          color: 'error',
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.error.split(' ')),
      );
    });
  });
});
