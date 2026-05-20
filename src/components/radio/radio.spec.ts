import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Radio, { classList } from './radio';

describe('base', () => {
  test('renders radio', () => {
    const wrapper = mount(Radio);

    expect(wrapper.find('input[type=radio]').exists()).toBe(true);
  });

  test('renders wrapper', () => {
    const wrapper = mount(Radio);

    expect(wrapper.find('div').exists()).toBe(true);
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
});

describe('label', () => {
  test('not renders label', () => {
    const wrapper = mount(Radio);

    expect(wrapper.find('label').exists()).toBe(false);
  });

  test('renders label by props', async () => {
    const wrapper = mount(Radio, {
      props: {
        label: 'Test',
      },
    });

    const label = wrapper.find('label');

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe('Test');

    await wrapper.setProps({ label: 'Update label' });

    expect(label.text()).toBe('Update label');
  });
});

describe('id', () => {
  test('has default id', () => {
    const wrapper = mount(Radio, {
      props: {
        label: 'Test',
      },
    });

    const id = wrapper.find('input').attributes('id');

    expect(id).toBeDefined();
    expect(wrapper.find('label').attributes('for')).toEqual(id);
  });

  test('sets id from props', async () => {
    const wrapper = mount(Radio, {
      props: {
        id: 'test',
        label: 'Test',
      },
    });

    expect(wrapper.find('input').attributes('id')).toEqual('test');

    const label = wrapper.find('label');

    expect(label.attributes('for')).toEqual('test');

    await wrapper.setProps({
      id: 'update_test',
    });

    expect(label.attributes('for')).toEqual('update_test');
  });
});

describe('class list', () => {
  test('wrapper class list', () => {
    const wrapper = mount(Radio);

    expect(wrapper.find('div').classes()).toEqual(
      expect.arrayContaining(classList.wrapper.split(' ')),
    );
  });

  test('label class list', () => {
    const wrapper = mount(Radio, {
      props: {
        label: 'Test',
      },
    });

    expect(wrapper.find('label').classes()).toEqual(
      expect.arrayContaining(classList.label.split(' ')),
    );
  });

  test('radio class list', () => {
    const wrapper = mount(Radio);

    expect(wrapper.find('input').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });

  describe('color', () => {
    test('default color', () => {
      const wrapper = mount(Radio);

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.light.split(' ')),
      );
    });

    test('selected color', async () => {
      const wrapper = mount(Radio, {
        props: {
          color: 'error',
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.error.split(' ')),
      );

      await wrapper.setProps({
        color: 'success',
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.success.split(' ')),
      );
    });
  });

  describe('size', () => {
    test('default size', () => {
      const wrapper = mount(Radio);

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.md.split(' ')),
      );
    });

    test('selected size', async () => {
      const wrapper = mount(Radio, {
        props: {
          size: 'sm',
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.sm.split(' ')),
      );

      await wrapper.setProps({
        size: 'lg',
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.lg.split(' ')),
      );
    });
  });
});

describe('model value', () => {
  test('sync checked', async () => {
    let selected = 'first';

    const first = mount(Radio, {
      props: {
        inputValue: 'first',
        modelValue: selected,
      },
    });
    const second = mount(Radio, {
      props: {
        inputValue: 'second',
        modelValue: selected,
      },
    });

    expect(first.find('input').attributes('checked')).toBeDefined();
    expect(second.find('input').attributes('checked')).not.toBeDefined();

    selected = 'second';

    await first.setProps({
      modelValue: selected,
    });
    await second.setProps({
      modelValue: selected,
    });

    expect(first.find('input').attributes('checked')).not.toBeDefined();
    expect(second.find('input').attributes('checked')).toBeDefined();
  });

  test('updates model value', async () => {
    let selected = 'first';

    const first = mount(Radio, {
      props: {
        inputValue: 'first',
        modelValue: selected,
        'onUpdate:modelValue': (e) => (selected = e as string),
      },
    });

    const second = mount(Radio, {
      props: {
        inputValue: 'second',
        modelValue: selected,
        'onUpdate:modelValue': (e) => (selected = e as string),
      },
    });
    await second.find('input').setValue(true);

    const third = mount(Radio, {
      props: {
        inputValue: 'third',
        modelValue: selected,
        'onUpdate:modelValue': (e) => (selected = e as string),
      },
    });
    await third.find('input').setValue(true);

    await first.setProps({
      modelValue: selected,
    });
    await second.setProps({
      modelValue: selected,
    });
    await third.setProps({
      modelValue: selected,
    });

    expect(first.find('input').attributes('checked')).not.toBeDefined();
    expect(second.find('input').attributes('checked')).not.toBeDefined();
    expect(third.find('input').attributes('checked')).toBeDefined();

    expect(selected).toEqual('third');
  });
});
