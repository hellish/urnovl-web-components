export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const isNumber = (value: any) => {
    return typeof value === 'number' && isFinite(value);
}

export const dev_log_info = (message?: any, ...optionalParams: any[]) => {
    if (process.env.NODE_ENV === 'development') {
        console && console.log(message,  ...optionalParams);
    }
}

export const dev_log_error = (message?: any, ...optionalParams: any[]) => {
    if (process.env.NODE_ENV === 'development') {
        console && console.error(message,  ...optionalParams);
    }
}
