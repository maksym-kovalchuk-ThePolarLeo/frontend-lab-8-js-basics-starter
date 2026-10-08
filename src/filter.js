/** @typedef {import('./normalize.js').Show} Show */

/**
 * @typedef {object} FilterOptions
 * @property {string | null} [query] частина назви
 * @property {string | null} [genre] жанр
 * @property {number | null} [minRating] мінімальна оцінка
 */

/**
 * C2. Повертає серіали, які відповідають усім заданим фільтрам.
 * Специфікація — ТЗ, C2.
 *
 * @param {Show[]} shows
 * @param {FilterOptions} [options]
 * @returns {Show[]}
 */
export function filterShows(shows, options = {}) {
  const query = options.query?.trim().toLowerCase();

  return shows.filter((show) => {
    if (query) {
      if (!show.name.toLowerCase().includes(query)) return false;
    }

    if (options.genre) {
      if (!show.genres.includes(options.genre)) return false;
    }

    if (options.minRating) {
      if (show.rating === null || show.rating < options.minRating) return false;
    }

    return true;
  });
}
