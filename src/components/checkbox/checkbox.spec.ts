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

  test('renders label by props', async () => {
    const wrapper = mount(Checkbox, {
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
    const wrapper = mount(Checkbox, {
      props: {
        label: 'Test',
      },
    });

    const id = wrapper.find('input').attributes('id');

    expect(id).toBeDefined();
    expect(wrapper.find('label').attributes('for')).toEqual(id);
  });

  test('sets id from props', async () => {
    const wrapper = mount(Checkbox, {
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

    test('selected color', async () => {
      const wrapper = mount(Checkbox, {
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
      const wrapper = mount(Checkbox);

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.md.split(' ')),
      );
    });

    test('selected size', async () => {
      const wrapper = mount(Checkbox, {
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
  describe('boolean value', () => {
    test('sync checked', async () => {
      const wrapper = mount(Checkbox, {
        props: {
          modelValue: true,
        },
      });

      const checkbox = wrapper.find('input');

      expect(checkbox.attributes('checked')).toBeDefined();

      await wrapper.setProps({
        modelValue: false,
      });

      expect(checkbox.attributes('checked')).not.toBeDefined();
    });

    test('updates model value', async () => {
      const wrapper = mount(Checkbox, {
        props: {
          modelValue: false,
          'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        },
      });

      const checkbox = wrapper.find('input');

      expect(checkbox.attributes('checked')).not.toBeDefined();

      await checkbox.setValue(true);

      expect(wrapper.props('modelValue')).toBe(true);
    });
  });

  describe('array values', () => {
    test('sync checked', async () => {
      let selected: string[] = ['first'];

      const first = mount(Checkbox, {
        props: {
          inputValue: 'first',
          modelValue: selected,
        },
      });
      const second = mount(Checkbox, {
        props: {
          inputValue: 'second',
          modelValue: selected,
        },
      });

      expect(first.find('input').attributes('checked')).toBeDefined();
      expect(second.find('input').attributes('checked')).not.toBeDefined();

      selected = ['second'];

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
      let selected: string[] = ['first'];

      const first = mount(Checkbox, {
        props: {
          inputValue: 'first',
          modelValue: selected,
          'onUpdate:modelValue': (e) => (selected = e as string[]),
        },
      });
      await first.find('input').setValue(false);
      await first.setProps({
        modelValue: selected,
      });

      const second = mount(Checkbox, {
        props: {
          inputValue: 'second',
          modelValue: selected,
          'onUpdate:modelValue': (e) => (selected = e as string[]),
        },
      });
      await second.find('input').setValue(true);
      await second.setProps({
        modelValue: selected,
      });

      const third = mount(Checkbox, {
        props: {
          inputValue: 'third',
          modelValue: selected,
          'onUpdate:modelValue': (e) => (selected = e as string[]),
        },
      });
      await third.find('input').setValue(true);
      await third.setProps({
        modelValue: selected,
      });

      expect(first.find('input').attributes('checked')).not.toBeDefined();
      expect(second.find('input').attributes('checked')).toBeDefined();
      expect(third.find('input').attributes('checked')).toBeDefined();

      expect(selected).toEqual(['second', 'third']);
    });
  });
});
