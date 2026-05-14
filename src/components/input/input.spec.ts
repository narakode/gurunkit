import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { Input } from './input';

describe('base', () => {
  test('renders input element', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input').exists()).toBeTruthy();
  });

  test('inherits HTML attributes', () => {
    const wrapper = mount(Input, {
      attrs: {
        type: 'email',
        name: 'email',
      },
    });

    expect(wrapper.find('input').attributes('type')).toEqual('email');
    expect(wrapper.find('input').attributes('name')).toEqual('email');
  });

  test('inherits HTML events', async () => {
    const wrapper = mount(Input);

    await wrapper.trigger('focus');

    expect(wrapper.emitted()).toHaveProperty('focus');
  });
});

describe('class list', () => {
  test('has base class list', () => {
    const classList = {
      base: 'w-full',
    };
    const wrapper = mount(Input, {
      props: {
        classList,
      },
    });

    expect(wrapper.find('input').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });

  describe('color', () => {
    test('has default color class list (light)', () => {
      const classList = {
        colors: {
          light: 'border border-neutral-300',
        },
      };
      const wrapper = mount(Input, {
        props: {
          classList,
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.light.split(' ')),
      );
    });

    test('has color class list', () => {
      const classList = {
        colors: {
          primary: 'border border-red-300',
        },
      };
      const wrapper = mount(Input, {
        props: {
          classList,
          color: 'primary',
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.primary.split(' ')),
      );
    });
  });

  describe('size', () => {
    test('has default size class list (md)', () => {
      const classList = {
        sizes: {
          md: 'h-12',
        },
      };
      const wrapper = mount(Input, {
        props: {
          classList,
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.md.split(' ')),
      );
    });

    test('has size class list', () => {
      const classList = {
        sizes: {
          sm: 'h-8',
        },
      };
      const wrapper = mount(Input, {
        props: {
          classList,
          size: 'sm',
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.sm.split(' ')),
      );
    });
  });

  test('inherits HTML class attributes', () => {
    const wrapper = mount(Input, {
      attrs: {
        class: 'w-full',
      },
    });

    expect(wrapper.find('input').classes('w-full')).toBeTruthy();
  });
});

test('updates model value', async () => {
  const wrapper = mount(Input, {
    props: {
      modelValue: '',
      'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
    },
  });

  await wrapper.find('input').setValue('test');
  expect(wrapper.props('modelValue')).toEqual('test');
});
