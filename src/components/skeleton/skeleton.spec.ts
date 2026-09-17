import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Skeleton, { classList } from './skeleton';

describe('base', () => {
  test('renders input', () => {
    const wrapper = mount(Skeleton);

    expect(wrapper.find('div').exists()).toBe(true);
  });

  test('base class list', () => {
    const wrapper = mount(Skeleton);

    expect(wrapper.find('div').classes()).toEqual(
      expect.arrayContaining(classList.base.split(' ')),
    );
  });
});
