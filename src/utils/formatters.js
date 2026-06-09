/**
 * formatNumber — Converts number to readable string with commas
 * Example: formatNumber(12450) → "12,450"
 */
export function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

/**
 * formatCurrency — Converts number to USD currency string
 * Example: formatCurrency(1500) → "$1,500.00"
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

/**
 * formatDate — Converts date to readable string
 * @param {Date|string} date
 * @param {'short'|'long'} style
 * Example: formatDate('2024-01-15') → "Jan 15, 2024"
 */
export function formatDate(date, style = 'short') {
  const d = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(d.getTime())) return 'Invalid Date';

  if (style === 'long') {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'short' }).format(d);
  }
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(d);
}

/**
 * capitalize — Capitalizes first letter of a string
 * Example: capitalize('hello') → "Hello"
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * truncate — Truncates long strings with ellipsis
 * Example: truncate('Hello World', 5) → "Hello..."
 */
export function truncate(str, maxLength = 50) {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}
