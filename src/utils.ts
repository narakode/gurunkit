export function formatCurrency(input: number): string {
  return new Intl.NumberFormat().format(input);
}

export function parseCurrency(input: string): string {
  return input.replace(/\D/gi, '');
}
