import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Button, { classList } from './button';

describe('base', () => {
  test('renders button', () => {
    const wrapper = mount(Button);

    expect(wrapper.find('button').exists()).toBe(true);
  });

  test('renders text', () => {
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
        name: 'test',
      },
    });

    const button = wrapper.find('button');

    expect(button.attributes('type')).toEqual('button');
    expect(button.attributes('name')).toEqual('test');
  });

  test('inherits HTML events', async () => {
    const wrapper = mount(Button);

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
  });
});

describe('class list', () => {
  test('base class list', () => {
    const wrapper = mount(Button);

    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });

  describe('color class list', () => {
    test('default color', () => {
      const wrapper = mount(Button);

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.colors.primary.split(' ')),
      );
    });

    test('selected color', () => {
      const wrapper = mount(Button, {
        props: {
          color: 'error',
        },
      });

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.colors.error.split(' ')),
      );
    });
  });

  describe('size class list', () => {
    test('default size', () => {
      const wrapper = mount(Button);

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.sizes.md.split(' ')),
      );
    });

    test('selected size', () => {
      const wrapper = mount(Button, {
        props: {
          size: 'sm',
        },
      });

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.sizes.sm.split(' ')),
      );
    });
  });

  test('inherits class attributes', () => {
    const wrapper = mount(Button, { attrs: { class: 'w-full' } });

    expect(wrapper.find('button').classes()).toContain('w-full');
    expect(wrapper.find('button').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });
});

test('custom tag', () => {
  const wrapper = mount(Button, { props: { tag: 'a' } });

  expect(wrapper.find('a').exists()).toBe(true);
});
