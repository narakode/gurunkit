import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { Button } from './button';

describe('base', () => {
  test('renders button element', () => {
    const wrapper = mount(Button);

    expect(wrapper.find('button').exists()).toBeTruthy();
  });

  test('renders button text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Test',
      },
    });

    expect(wrapper.find('button').text()).toEqual('Test');
  });

  test('inherits HTML attributes', () => {
    const wrapper = mount(Button, {
      attrs: {
        type: 'button',
        name: 'cancel',
      },
    });

    expect(wrapper.find('button').attributes('type')).toEqual('button');
    expect(wrapper.find('button').attributes('name')).toEqual('cancel');
  });

  test('inherits HTML events', async () => {
    const wrapper = mount(Button);

    await wrapper.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
  });
});

describe('class list', () => {
  test('has base class list', () => {
    const classList = {
      base: 'bg-red-900 text-white',
    };
    const wrapper = mount(Button, {
      props: {
        classList,
      },
    });

    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });

  describe('color', () => {
    test('has default color class list (light)', () => {
      const classList = {
        colors: {
          light: 'bg-red-900 text-white',
        },
      };
      const wrapper = mount(Button, {
        props: {
          classList,
        },
      });

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.colors.light.split(' ')),
      );
    });

    test('has color class list', () => {
      const classList = {
        colors: {
          primary: 'bg-blue-900 text-white',
        },
      };
      const wrapper = mount(Button, {
        props: {
          classList,
          color: 'primary',
        },
      });

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.colors.primary.split(' ')),
      );
    });
  });

  describe('size', () => {
    test('has default size class list (md)', () => {
      const classList = {
        sizes: {
          md: 'bg-red-900 text-white',
        },
      };
      const wrapper = mount(Button, {
        props: {
          classList,
        },
      });

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.sizes.md.split(' ')),
      );
    });

    test('has size class list', () => {
      const classList = {
        sizes: {
          sm: 'bg-blue-900 text-white',
        },
      };
      const wrapper = mount(Button, {
        props: {
          classList,
          size: 'sm',
        },
      });

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.sizes.sm.split(' ')),
      );
    });
  });

  test('inherits HTML class attributes', () => {
    const wrapper = mount(Button, {
      attrs: {
        class: 'w-full',
      },
    });

    expect(wrapper.find('button').classes('w-full')).toBeTruthy();
  });
});
