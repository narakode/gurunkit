import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Select, { classList } from './select';

describe('base', () => {
  test('renders select', () => {
    const wrapper = mount(Select);

    expect(wrapper.find('select').exists()).toBe(true);
  });

  test('inherits HTML attributes', () => {
    const wrapper = mount(Select, {
      attrs: {
        name: 'select',
        required: true,
      },
    });

    const select = wrapper.find('select');

    expect(select.attributes('name')).toEqual('select');
    expect(select.attributes('required')).toBeDefined();
  });

  test('inherits HTML events', async () => {
    const wrapper = mount(Select);

    await wrapper.find('select').trigger('change');

    expect(wrapper.emitted()).toHaveProperty('change');
  });
});

describe('option', () => {
  test('renders primitive options', () => {
    const wrapper = mount(Select, {
      props: {
        options: [1, 2, 3],
      },
    });

    const options = wrapper.findAll('option');

    expect(options).toHaveLength(3);

    wrapper.props('options')?.map((option, i) => {
      expect(options[i].attributes('value')).toEqual(`${option}`);
      expect(options[i].text()).toEqual(`${option}`);
    });
  });

  test('renders structured options', () => {
    const wrapper = mount(Select, {
      props: {
        options: [
          { name: 'one', id: 1 },
          { name: 'two', id: 2 },
          { name: 'three', id: 3 },
        ],
      },
    });

    const options = wrapper.findAll('option');

    expect(options).toHaveLength(3);

    wrapper.props('options')?.map((option, i) => {
      expect(options[i].attributes('value')).toEqual(`${option.id}`);
      expect(options[i].text()).toEqual(option.name);
    });
  });
});

test('renders wrapper', () => {
  const wrapper = mount(Select);

  expect(wrapper.find('div').exists()).toBe(true);
});

describe('class list', () => {
  test('base class list', () => {
    const wrapper = mount(Select);

    expect(wrapper.find('select').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });

  test('wrapper class list', () => {
    const wrapper = mount(Select);

    expect(wrapper.find('div').classes()).toEqual(
      expect.arrayContaining(classList.wrapper.split(' ')),
    );
  });

  describe('color class list', () => {
    test('default color', () => {
      const wrapper = mount(Select);

      expect(wrapper.find('select').classes()).toEqual(
        expect.arrayContaining(classList.colors.light.split(' ')),
      );
    });

    test('selected color', async () => {
      const wrapper = mount(Select, {
        props: {
          color: 'error',
        },
      });

      expect(wrapper.find('select').classes()).toEqual(
        expect.arrayContaining(classList.colors.error.split(' ')),
      );

      await wrapper.setProps({ color: 'success' });

      expect(wrapper.find('select').classes()).toEqual(
        expect.arrayContaining(classList.colors.success.split(' ')),
      );
    });
  });

  describe('size class list', () => {
    test('default size', () => {
      const wrapper = mount(Select);

      expect(wrapper.find('div').classes()).toEqual(
        expect.arrayContaining(classList.wrapperSizes.md.split(' ')),
      );
      expect(wrapper.find('select').classes()).toEqual(
        expect.arrayContaining(classList.sizes.md.split(' ')),
      );
    });

    test('selected size', async () => {
      const wrapper = mount(Select, {
        props: {
          size: 'sm',
        },
      });

      expect(wrapper.find('div').classes()).toEqual(
        expect.arrayContaining(classList.wrapperSizes.sm.split(' ')),
      );
      expect(wrapper.find('select').classes()).toEqual(
        expect.arrayContaining(classList.sizes.sm.split(' ')),
      );

      await wrapper.setProps({ size: 'lg' });

      expect(wrapper.find('div').classes()).toEqual(
        expect.arrayContaining(classList.wrapperSizes.lg.split(' ')),
      );
      expect(wrapper.find('select').classes()).toEqual(
        expect.arrayContaining(classList.sizes.lg.split(' ')),
      );
    });
  });

  test('inherits class attributes', () => {
    const wrapper = mount(Select, { attrs: { class: 'w-full' } });

    expect(wrapper.find('select').classes()).toContain('w-full');
    expect(wrapper.find('select').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });
});

describe('model value', () => {
  test('sync value', async () => {
    const wrapper = mount(Select, {
      props: {
        options: [1, 2, 3],
        modelValue: 1,
      },
    });

    expect(wrapper.find('select').attributes('value')).toEqual('1');
  });

  test('updates model value', async () => {
    const wrapper = mount(Select, {
      props: {
        options: [1, 2, 3],
        modelValue: 1,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    });

    await wrapper.find('select').setValue(2);

    expect(wrapper.props('modelValue')).toEqual('2');
  });
});
