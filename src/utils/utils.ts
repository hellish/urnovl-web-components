export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const isNumber = (value: any) => {
    return typeof value === 'number' && isFinite(value);
}
