export const safeKey = (...values: (string | number)[]): string =>
  btoa(unescape(encodeURIComponent(values.join('')))).replace(/[=|+|\\/]/g, '')
