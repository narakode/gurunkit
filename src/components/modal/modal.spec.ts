import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Modal, { classList } from './modal';
import { Transition } from 'vue';

describe('wrapper', () => {
  test('renders wrapper', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
    });

    expect(wrapper.find('[role=dialog]').exists()).toBe(true);
  });

  test('render transition', () => {
    const wrapper = mount(Modal);

    expect(wrapper.findComponent(Transition).exists()).toBe(true);
  });
});

describe('content', () => {
  test('renders content', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
    });

    expect(wrapper.find('[data-test="dialog-content"]').exists()).toBe(true);
  });

  test('default content size', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
    });

    expect(wrapper.find('[data-test="dialog-content"]').classes()).toEqual(
      expect.arrayContaining(classList.size.md.split(' ')),
    );
  });

  test('set content size', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        size: 'lg',
      },
    });

    expect(wrapper.find('[data-test="dialog-content"]').classes()).toEqual(
      expect.arrayContaining(classList.size.lg.split(' ')),
    );
  });
});

describe('header', () => {
  test('renders header', async () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
    });

    expect(wrapper.find('header').exists()).toBe(false);

    await wrapper.setProps({ title: 'Test' });

    expect(wrapper.find('header').exists()).toBe(true);
  });

  test('renders title', () => {
    const wrapper = mount(Modal, {
      props: {
        title: 'Test',
        visible: true,
      },
    });

    expect(wrapper.find('h2').exists()).toBe(true);
    expect(wrapper.find('h2').text()).toEqual('Test');
  });

  test('render close button', () => {
    const wrapper = mount(Modal, {
      props: {
        title: 'Test',
        visible: true,
      },
    });

    const closeButton = wrapper.find('button[aria-label="Close Modal"]');

    expect(closeButton.exists()).toBe(true);
    expect(closeButton.find('svg').exists()).toBe(true);
  });
});

describe('body', () => {
  test('renders body', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
    });

    expect(wrapper.find('[data-test="dialog-body"]').exists()).toBe(true);
  });

  test('renders body slot', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
      slots: {
        default: '<p id="test-body"></p>',
      },
    });

    expect(wrapper.find('p#test-body').exists()).toBe(true);
  });
});

describe('footer', () => {
  test('not renders footer', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
    });

    expect(wrapper.find('footer').exists()).toBe(false);
  });

  test('renders footer slot', () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
      },
      slots: {
        footer: '<button id="test-footer"></button>',
      },
    });

    expect(wrapper.find('footer').exists()).toBe(true);
    expect(wrapper.find('button#test-footer').exists()).toBe(true);
  });
});

describe('visible', () => {
  test('sync visible', async () => {
    const wrapper = mount(Modal);

    expect(wrapper.find('[role="dialog"]').exists()).toBe(false);

    await wrapper.setProps({
      visible: true,
    });

    expect(wrapper.find('[role="dialog"]').exists()).toBe(true);
  });

  test('close', async () => {
    const wrapper = mount(Modal, {
      props: {
        title: 'Test',
        visible: true,
        'onUpdate:visible': (newValue) =>
          wrapper.setProps({ visible: newValue }),
      },
    });

    await wrapper.find('button').trigger('click');

    expect(wrapper.find('[role="dialog"]').exists()).toBe(false);
    expect(wrapper.emitted()).toHaveProperty('close');
  });
});

describe('click outside', () => {
  test('closes when click outside content', async () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        'onUpdate:visible': (newValue) =>
          wrapper.setProps({ visible: newValue }),
      },
    });

    await wrapper.find('[role="dialog"]').trigger('click');

    expect(wrapper.props('visible')).toBe(false);
  });

  test('not closes when click inside content', async () => {
    const wrapper = mount(Modal, {
      props: {
        visible: true,
        'onUpdate:visible': (newValue) =>
          wrapper.setProps({ visible: newValue }),
      },
    });

    await wrapper.find('[data-test="dialog-content"]').trigger('click');

    expect(wrapper.props('visible')).toBe(true);
  });
});
