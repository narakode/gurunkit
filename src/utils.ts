export function formatCurrency(input: string | number): string {
  if (typeof input === 'number') {
    return new Intl.NumberFormat().format(input);
  }

  return new Intl.NumberFormat().format(Number(input.replace(/\D/gi, '')));
}

export function parseCurrency(input: string): string {
  return `${Number(input.replace(/\D/gi, ''))}`;
}
