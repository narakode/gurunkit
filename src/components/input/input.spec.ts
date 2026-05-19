import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Input, { classList } from './input';

describe('base', () => {
  test('renders input', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input').exists()).toBe(true);
  });

  test('inherits HTML attributes', () => {
    const wrapper = mount(Input, {
      attrs: {
        type: 'password',
        name: 'password',
      },
    });

    const input = wrapper.find('input');

    expect(input.attributes('type')).toEqual('password');
    expect(input.attributes('name')).toEqual('password');
  });

  test('inherits HTML events', async () => {
    const wrapper = mount(Input);

    await wrapper.find('input').trigger('focus');

    expect(wrapper.emitted()).toHaveProperty('focus');
  });
});

describe('class list', () => {
  test('base class list', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });

  describe('color class list', () => {
    test('default color', () => {
      const wrapper = mount(Input);

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.light.split(' ')),
      );
    });

    test('selected color', () => {
      const wrapper = mount(Input, {
        props: {
          color: 'error',
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.error.split(' ')),
      );
    });
  });

  describe('size class list', () => {
    test('default size', () => {
      const wrapper = mount(Input);

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.md.split(' ')),
      );
    });

    test('selected size', () => {
      const wrapper = mount(Input, {
        props: {
          size: 'sm',
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.sm.split(' ')),
      );
    });
  });

  test('inherits class attributes', () => {
    const wrapper = mount(Input, { attrs: { class: 'w-full' } });

    expect(wrapper.find('input').classes()).toContain('w-full');
    expect(wrapper.find('input').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });
});

test('model value', async () => {
  const wrapper = mount(Input, {
    props: {
      modelValue: '',
      'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
    },
  });

  await wrapper.find('input').setValue('test');

  expect(wrapper.props('modelValue')).toEqual('test');
});
