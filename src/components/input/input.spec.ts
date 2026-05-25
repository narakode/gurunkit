import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Input, { classList } from './input';

describe('base', () => {
  test('renders input', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input').exists()).toBe(true);
  });

  test('inherits HTML attributes', () => {
    const wrapper = mount(Input, {
      attrs: {
        type: 'password',
        name: 'password',
      },
    });

    const input = wrapper.find('input');

    expect(input.attributes('type')).toEqual('password');
    expect(input.attributes('name')).toEqual('password');
  });

  test('inherits HTML events', async () => {
    const wrapper = mount(Input);

    await wrapper.find('input').trigger('focus');

    expect(wrapper.emitted()).toHaveProperty('focus');
  });
});

describe('class list', () => {
  test('base class list', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });

  describe('color class list', () => {
    test('default color', () => {
      const wrapper = mount(Input);

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.light.base.split(' ')),
      );
    });

    test('selected color', async () => {
      const wrapper = mount(Input, {
        props: {
          color: 'error',
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.error.base.split(' ')),
      );

      await wrapper.setProps({ color: 'success' });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.success.base.split(' ')),
      );
    });
  });

  describe('size class list', () => {
    test('default size', () => {
      const wrapper = mount(Input);

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.md.base.split(' ')),
      );
    });

    test('selected size', async () => {
      const wrapper = mount(Input, {
        props: {
          size: 'sm',
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.sm.base.split(' ')),
      );

      await wrapper.setProps({ size: 'lg' });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.lg.base.split(' ')),
      );
    });
  });

  describe('type file class list', () => {
    test('not applied', () => {
      const wrapper = mount(Input);

      expect(wrapper.find('input').classes()).not.toEqual(
        expect.arrayContaining(classList.file.split(' ')),
      );
      expect(wrapper.find('input').classes()).not.toEqual(
        expect.arrayContaining(classList.colors.light.file.split(' ')),
      );
      expect(wrapper.find('input').classes()).not.toEqual(
        expect.arrayContaining(classList.sizes.md.file.split(' ')),
      );
    });

    test('not applied when type file', () => {
      const wrapper = mount(Input, {
        attrs: {
          type: 'file',
        },
      });

      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.file.split(' ')),
      );
      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.colors.light.file.split(' ')),
      );
      expect(wrapper.find('input').classes()).toEqual(
        expect.arrayContaining(classList.sizes.md.file.split(' ')),
      );
    });
  });

  test('inherits class attributes', () => {
    const wrapper = mount(Input, { attrs: { class: 'w-full' } });

    expect(wrapper.find('input').classes()).toContain('w-full');
    expect(wrapper.find('input').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });
});

describe('model value', () => {
  test('sync value', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
      },
    });

    expect(wrapper.find('input').attributes('value')).toEqual('test');
  });

  test('updates model value', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (e: string) =>
          wrapper.setProps({ modelValue: e }),
      },
    });

    await wrapper.find('input').setValue('test');

    expect(wrapper.props('modelValue')).toEqual('test');
  });
});

describe('textarea', () => {
  test('not renders textarea class', () => {
    const wrapper = mount(Input);

    expect(wrapper.find('input').classes()).toEqual(
      expect.arrayContaining(classList.sizes.md.input.split(' ')),
    );
    expect(wrapper.find('input').classes()).not.toEqual(
      expect.arrayContaining(classList.sizes.md.textarea.split(' ')),
    );
  });

  test('render textarea', () => {
    const wrapper = mount(Input, {
      props: {
        tag: 'textarea',
      },
    });

    expect(wrapper.find('textarea').exists()).toBe(true);
  });

  test('renders textarea class', () => {
    const wrapper = mount(Input, {
      props: {
        tag: 'textarea',
      },
    });

    expect(wrapper.find('textarea').classes()).not.toEqual(
      expect.arrayContaining(classList.sizes.md.input.split(' ')),
    );
    expect(wrapper.find('textarea').classes()).toEqual(
      expect.arrayContaining(classList.sizes.md.textarea.split(' ')),
    );
  });
});
