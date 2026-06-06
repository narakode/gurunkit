import { describe, expect, test } from 'vitest';
import { formatCurrency, parseCurrency } from './utils';

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
