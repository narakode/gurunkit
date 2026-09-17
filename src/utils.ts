export function formatCurrency(input: string | number): string {
  if (typeof input === 'number') {
    return new Intl.NumberFormat().format(input);
  }

  return new Intl.NumberFormat().format(Number(input.replace(/\D/gi, '')));
}

export function parseCurrency(input: string): string {
  return `${Number(input.replace(/\D/gi, ''))}`;
}

export function debounce(callback: (...args: any[]) => any, wait: number) {
  let timeoutId: number;

  return (...args: any[]) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}
