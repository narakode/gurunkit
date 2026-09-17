import { describe, expect, test, vi } from 'vitest';
import { debounce, formatCurrency, parseCurrency } from './utils';

describe('format currency', () => {
  test('formats number to currency', () => {
    expect(formatCurrency(125000)).toEqual('125,000');
  });

  test('formats numeric string to currency', () => {
    expect(formatCurrency('125000')).toEqual('125,000');
  });

  test('formats mixed string to currency', () => {
    expect(formatCurrency('125000ada')).toEqual('125,000');
    expect(formatCurrency('ada.125000')).toEqual('125,000');
    expect(formatCurrency('125jj000')).toEqual('125,000');
  });
});

describe('parse currency', () => {
  test('parses numeric string', () => {
    expect(parseCurrency('250,000')).toEqual('250000');
  });

  test('parses leading zero numeric string', () => {
    expect(parseCurrency('0250,000')).toEqual('250000');
  });
});

describe('debounce', () => {
  test('calls debounced function', () => {
    const mock = vi.fn();
    const fn = debounce(mock, 300);

    vi.useFakeTimers();

    fn();

    vi.advanceTimersByTime(100);

    fn();

    vi.advanceTimersByTime(300);

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
