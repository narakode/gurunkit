import { beforeEach, describe, expect, test, vi } from 'vitest';
import { useMessage } from './message.compose';

describe.only('useMessage', () => {
  beforeEach(() => {
    vi.useFakeTimers();

    const { clear } = useMessage();

    clear();
  });
  describe('getItems', () => {
    test('returns items array', () => {
      const { getItems } = useMessage();

      expect(getItems()).toEqual([]);
    });
  });

  describe('info', () => {
    test('inserts message to items', () => {
      const { getItems, info } = useMessage();

      info('Test');

      expect(getItems()).toHaveLength(1);
    });
  });

  describe('close', () => {
    test('not closes message before duration', () => {
      const { getItems, info } = useMessage();

      info('Test');

      expect(getItems()).toHaveLength(1);

      vi.advanceTimersByTime(200);

      expect(getItems()).toHaveLength(1);
    });
    test('closes message after duration', () => {
      const { getItems, info } = useMessage();

      info('Test');

      expect(getItems()).toHaveLength(1);

      vi.runAllTimers();

      expect(getItems()).toHaveLength(0);
    });
    test('closes message sequently', () => {
      const { getItems, info } = useMessage();

      info('Test');

      vi.advanceTimersByTime(100);

      info('Test');

      vi.advanceTimersByTime(100);

      expect(getItems()).toHaveLength(2);

      vi.advanceTimersByTime(100);

      expect(getItems()).toHaveLength(1);

      vi.advanceTimersByTime(200);

      expect(getItems()).toHaveLength(0);
    });
    test('closes message custom duration', () => {
      const { getItems, info } = useMessage();

      info('Test', 500);

      vi.advanceTimersByTime(400);

      expect(getItems()).toHaveLength(1);

      vi.runAllTimers();

      expect(getItems()).toHaveLength(0);
    });
  });
});
