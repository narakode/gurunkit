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
        expect.arrayContaining(classList.colors.primary.solid.split(' ')),
      );
    });

    test('selected color', async () => {
      const wrapper = mount(Button, {
        props: {
          color: 'error',
        },
      });

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.colors.error.solid.split(' ')),
      );

      await wrapper.setProps({
        color: 'success',
      });

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.colors.success.solid.split(' ')),
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

    test('selected size', async () => {
      const wrapper = mount(Button, {
        props: {
          size: 'sm',
        },
      });

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.sizes.sm.split(' ')),
      );

      await wrapper.setProps({
        size: 'lg',
      });

      expect(wrapper.find('button').classes()).toEqual(
        expect.arrayContaining(classList.sizes.lg.split(' ')),
      );
    });
  });

  describe('variant class list', () => {
    test('default not bordered', () => {
      const wrapper = mount(Button);

      expect(wrapper.find('button').classes()).not.toContain('border');
    });

    test('not bordered when variant is solid', () => {
      const wrapper = mount(Button, {
        props: {
          variant: 'solid',
        },
      });

      expect(wrapper.find('button').classes()).not.toContain('border');
    });

    describe('when variant is outline', () => {
      test('bordered when variant is outline', () => {
        const wrapper = mount(Button, {
          props: {
            variant: 'outline',
          },
        });

        expect(wrapper.find('button').classes()).toContain('border');
      });

      test('doesnt has backgorund class', () => {
        const wrapper = mount(Button, {
          props: {
            variant: 'outline',
            color: 'error',
          },
        });

        expect(wrapper.find('button').classes()).not.toContain(
          classList.colors.error,
        );
      });

      test('has bordered variant class', () => {
        const wrapper = mount(Button, {
          props: {
            variant: 'outline',
            color: 'error',
          },
        });

        expect(wrapper.find('button').classes()).toEqual(
          expect.arrayContaining(classList.colors.error.outline.split(' ')),
        );
      });
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

describe('loading', () => {
  test('default value is false', () => {
    const wrapper = mount(Button);

    expect(wrapper.find('button').attributes('disabled')).toBeUndefined();
  });
  test('default not renders spinner', () => {
    const wrapper = mount(Button);

    expect(wrapper.find('[data-test=spinner]').exists()).toBe(false);
  });

  describe('when value is true', () => {
    test('has disabled attributes', () => {
      const wrapper = mount(Button, {
        props: {
          loading: true,
        },
      });

      expect(wrapper.find('button').attributes('disabled')).toBeDefined();
    });
    test('renders spinner', () => {
      const wrapper = mount(Button, {
        props: {
          loading: true,
        },
      });

      expect(wrapper.find('[data-test=spinner]').exists()).toBe(true);
    });
  });
});
