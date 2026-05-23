import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import FormItem, { classList } from './form-item';
import { h } from 'vue';

describe('base', () => {
  test('renders wrapper', () => {
    const wrapper = mount(FormItem, {
      props: {
        label: 'Test',
      },
    });

    expect(wrapper.find('div').exists()).toBe(true);
  });

  test('renders label', () => {
    const wrapper = mount(FormItem, {
      props: {
        label: 'Test',
      },
    });

    const divWrapper = wrapper.find('div');

    expect(divWrapper.find('label').exists()).toBe(true);
    expect(divWrapper.find('label').text()).toEqual('Test');
  });

  test('renders default slot', () => {
    const wrapper = mount(FormItem, {
      props: {
        label: 'Test',
      },
      slots: {
        default: () => h('p', 'test'),
      },
    });

    const divWrapper = wrapper.find('div');

    expect(divWrapper.find('p').exists()).toBe(true);
    expect(divWrapper.find('p').text()).toEqual('test');
  });

  test('wrapper inherit HTML attributes', () => {
    const wrapper = mount(FormItem, {
      props: {
        label: 'Test',
      },
      attrs: {
        ariaLabel: 'test',
      },
    });

    expect(wrapper.find('div').attributes('aria-label')).toEqual('test');
  });
});

describe('class list', () => {
  test('wrapper class list', () => {
    if (classList.wrapper) {
      const wrapper = mount(FormItem, {
        props: {
          label: 'Test',
        },
      });

      expect(wrapper.find('div').classes()).toEqual(
        expect.arrayContaining(classList.wrapper.split(' ')),
      );
    }
  });

  test('label class list', () => {
    const wrapper = mount(FormItem, {
      props: {
        label: 'Test',
      },
    });

    expect(wrapper.find('label').classes()).toEqual(
      expect.arrayContaining(classList.label.split(' ')),
    );
  });
});

describe('id', () => {
  test('has default id', () => {
    const wrapper = mount(FormItem, {
      props: {
        label: 'Test',
      },
    });

    expect(wrapper.find('label').attributes('for')).toBeDefined();
  });

  test('renders props id', () => {
    const wrapper = mount(FormItem, {
      props: {
        label: 'Test',
        id: 'test',
      },
    });

    expect(wrapper.find('label').attributes('for')).toEqual('test');
  });

  test('default slots scoped id', () => {
    const wrapper = mount(FormItem, {
      props: {
        label: 'Test',
        id: 'test',
      },
      slots: {
        default: ({ id }) => h('input', { id }),
      },
    });

    expect(wrapper.find('input').attributes('id')).toEqual('test');
  });
});
