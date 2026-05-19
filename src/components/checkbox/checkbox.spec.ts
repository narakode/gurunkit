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

describe('id', () => {
  test('has default id', () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: 'Test',
      },
    });

    const id = wrapper.find('input').attributes('id');

    expect(id).toBeDefined();
    expect(wrapper.find('label').attributes('for')).toEqual(id);
  });

  test('sets id', () => {
    const wrapper = mount(Checkbox, {
      props: {
        id: 'test',
        label: 'Test',
      },
    });

    expect(wrapper.find('input').attributes('id')).toEqual('test');
    expect(wrapper.find('label').attributes('for')).toEqual('test');
  });
});

describe('class list', () => {
  test('wrapper class list', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.find('div').classes()).toEqual(
      expect.arrayContaining(classList.wrapper.split(' ')),
    );
  });

  test('label class list', () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: 'Test',
      },
    });

    expect(wrapper.find('label').classes()).toEqual(
      expect.arrayContaining(classList.label.split(' ')),
    );
  });

  test('checkbox class list', () => {
    const wrapper = mount(Checkbox);

    expect(wrapper.find('input').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });

  describe('color', () => {
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

  describe('size', () => {
    test('default size', () => {
      const wrapper = mount(Checkbox);

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.md.split(' ')),
      );
    });

    test('selected size', () => {
      const wrapper = mount(Checkbox, {
        props: {
          size: 'sm',
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.sm.split(' ')),
      );
    });
  });
});
