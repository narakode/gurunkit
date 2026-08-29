import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Alert, { classList } from './alert';

test('render wrapper', () => {
  const wrapper = mount(Alert);

  expect(wrapper.find('div').exists()).toBe(true);
});

describe('class list', () => {
  test('base class list', () => {
    const wrapper = mount(Alert);

    expect(wrapper.find('div').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });

  describe('color class list', () => {
    test('default color', () => {
      const wrapper = mount(Alert);

      expect(wrapper.find('div').classes()).toEqual(
        expect.arrayContaining(classList.colors.light.split(' ')),
      );
    });

    test('selected color', async () => {
      const wrapper = mount(Alert, {
        props: {
          color: 'error',
        },
      });

      expect(wrapper.find('div').classes()).toEqual(
        expect.arrayContaining(classList.colors.error.split(' ')),
      );

      await wrapper.setProps({
        color: 'success',
      });

      expect(wrapper.find('div').classes()).toEqual(
        expect.arrayContaining(classList.colors.success.split(' ')),
      );
    });
  });
});

test('renders icon slot', () => {
  const wrapper = mount(Alert, {
    slots: {
      icon: '<span data-test="icon">icon</span>',
    },
  });

  expect(wrapper.find('[data-test=icon]').exists()).toBe(true);
});

test('renders body', () => {
  const wrapper = mount(Alert, {
    slots: {
      default: '<span data-test="message">message</span>',
    },
  });

  expect(wrapper.find('[data-test=message]').exists()).toBe(true);
});

describe('closable', () => {
  test('default hidden', () => {
    const wrapper = mount(Alert);

    expect(wrapper.find('button[aria-label="Close Alert"]').exists()).toBe(
      false,
    );
  });
  test('renders button when closeable is true', () => {
    const wrapper = mount(Alert, {
      props: {
        closable: true,
      },
    });

    expect(wrapper.find('button[aria-label="Close Alert"]').exists()).toBe(
      true,
    );
  });
  test('emits close on click', async () => {
    const wrapper = mount(Alert, {
      props: {
        closable: true,
      },
    });

    const button = wrapper.find('button[aria-label="Close Alert"]');

    await button.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('close');
  });
});
