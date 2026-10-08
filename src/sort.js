/** @typedef {import('./normalize.js').Show} Show */

/**
 * C3. Повертає новий масив серіалів, відсортований за полем `key`.
 * Специфікація — ТЗ, C3.
 *
 * @param {Show[]} shows
 * @param {'name' | 'year' | 'rating'} key
 * @param {'asc' | 'desc'} [direction]
 * @returns {Show[]}
 */
export function sortShows(shows, key, direction = 'asc') {
  const modifier = direction === 'desc' ? -1 : 1;

  return shows.toSorted((a, b) => {
    if (a[key] === null && b[key] === null) return 0;
    if (a[key] === null) return 1;
    if (b[key] === null) return -1;

    let comparisonResult;
    if (key === 'name') {
      comparisonResult = a[key].localeCompare(b[key]);
    } else {
      comparisonResult = a[key] - b[key];
    }

    return comparisonResult * modifier;
  });
}
