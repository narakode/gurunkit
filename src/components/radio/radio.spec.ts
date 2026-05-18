import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { Radio } from './radio';
import { ref } from 'vue';

describe('base', () => {
  test('renders input type radio element', () => {
    const wrapper = mount(Radio);

    expect(wrapper.find('input[type=radio]').exists()).toBeTruthy();
  });

  test('inherits HTML attributes', () => {
    const wrapper = mount(Radio, {
      attrs: {
        name: 'test',
      },
    });

    expect(wrapper.find('input[type=radio]').attributes('name')).toEqual(
      'test',
    );
  });

  test('inherits HTML events', async () => {
    const wrapper = mount(Radio);

    await wrapper.trigger('change');

    expect(wrapper.emitted()).toHaveProperty('change');
  });

  test('sets radio value', () => {
    const wrapper = mount(Radio, {
      attrs: {
        inputValue: 'test',
      },
    });

    expect(wrapper.find('input[type=radio]').attributes('value')).toEqual(
      'test',
    );
  });
});

describe('label', () => {
  test('not renders label elements', () => {
    const wrapper = mount(Radio);

    expect(wrapper.find('label').exists()).toBeFalsy();
  });

  test('renders label elements from props', () => {
    const wrapper = mount(Radio, {
      props: {
        label: 'Test',
      },
    });

    const label = wrapper.find('label');

    expect(label.exists()).toBeTruthy();
    expect(label.text()).toEqual('Test');
  });

  test('has for attribute', () => {
    const wrapper = mount(Radio, {
      props: {
        id: 'test',
        label: 'Test',
      },
    });

    expect(wrapper.find('label').attributes('for')).toEqual('test');
    expect(wrapper.find('input[type=radio]').attributes('id')).toEqual('test');
  });
});

describe('class list', () => {
  test('has base class list', () => {
    const classList = {
      base: 'w-full',
    };
    const wrapper = mount(Radio, {
      props: {
        classList,
      },
    });

    expect(wrapper.find('input[type=radio]').classes()).toEqual(
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
      const wrapper = mount(Radio, {
        props: {
          classList,
        },
      });

      expect(wrapper.find('input[type=radio]').classes()).toEqual(
        expect.arrayContaining(classList.colors.light.split(' ')),
      );
    });

    test('has color class list', () => {
      const classList = {
        colors: {
          primary: 'border border-red-300',
        },
      };
      const wrapper = mount(Radio, {
        props: {
          classList,
          color: 'primary',
        },
      });

      expect(wrapper.find('input[type=radio]').classes()).toEqual(
        expect.arrayContaining(classList.colors.primary.split(' ')),
      );
    });
  });

  describe('size', () => {
    test('has default size class list (md)', () => {
      const classList = {
        sizes: {
          md: 'size-4',
        },
      };
      const wrapper = mount(Radio, {
        props: {
          classList,
        },
      });

      expect(wrapper.find('input[type=radio]').classes()).toEqual(
        expect.arrayContaining(classList.sizes.md.split(' ')),
      );
    });

    test('has size class list', () => {
      const classList = {
        sizes: {
          sm: 'size-3',
        },
      };
      const wrapper = mount(Radio, {
        props: {
          classList,
          size: 'sm',
        },
      });

      expect(wrapper.find('input[type=radio]').classes()).toEqual(
        expect.arrayContaining(classList.sizes.sm.split(' ')),
      );
    });
  });

  test('sets wrapper class list', () => {
    const wrapper = mount(Radio, {
      props: {
        classList: {
          wrapper: 'gap-4',
        },
      },
    });

    expect(wrapper.find('div').classes('gap-4')).toBeTruthy();
  });

  test('sets label class list', () => {
    const wrapper = mount(Radio, {
      props: {
        label: 'Test',
        classList: {
          label: 'text-lg',
        },
      },
    });

    expect(wrapper.find('label').classes('text-lg')).toBeTruthy();
  });

  test('inherits HTML class attributes', () => {
    const wrapper = mount(Radio, {
      attrs: {
        class: 'w-full',
      },
    });

    expect(wrapper.find('input[type=radio]').classes('w-full')).toBeTruthy();
  });
});

describe('model value', () => {
  test('default checked', () => {
    const selected = ref<number>(2);

    const checkboxFirst = mount(Radio, {
      props: {
        inputValue: 1,
        modelValue: selected.value,
      },
    });
    const checkboxSecond = mount(Radio, {
      props: {
        inputValue: 2,
        modelValue: selected.value,
      },
    });
    const checkboxThird = mount(Radio, {
      props: {
        inputValue: 3,
        modelValue: selected.value,
      },
    });

    expect(
      checkboxFirst.find('input[type=radio]').attributes('checked'),
    ).not.toBeDefined();
    expect(
      checkboxSecond.find('input[type=radio]').attributes('checked'),
    ).toBeDefined();
    expect(
      checkboxThird.find('input[type=radio]').attributes('checked'),
    ).not.toBeDefined();
  });

  test('updates model value', async () => {
    const selected = ref<string>();

    const checkboxFirst = mount(Radio, {
      props: {
        inputValue: 'first',
        modelValue: selected.value,
        'onUpdate:modelValue': (e) => {
          selected.value = e;
        },
      },
    });
    const checkboxSecond = mount(Radio, {
      props: {
        inputValue: 'second',
        modelValue: selected.value,
        'onUpdate:modelValue': (e) => (selected.value = e),
      },
    });

    await checkboxFirst.find('input[type=radio]').setValue(true);

    await checkboxSecond.setProps({
      modelValue: selected.value,
    });

    await checkboxSecond.find('input[type=radio]').setValue(true);

    expect(selected.value).toEqual('second');
  });
});
