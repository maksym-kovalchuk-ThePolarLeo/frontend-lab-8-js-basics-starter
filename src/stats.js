/** @typedef {import('./normalize.js').Show} Show */

/**
 * @typedef {object} GenreStats
 * @property {number} count скільки серіалів мають цей жанр
 * @property {number | null} averageRating середня оцінка цих серіалів
 */

/**
 * C4. Рахує статистику для кожного жанру.
 * Специфікація — ТЗ, C4.
 *
 * @param {Show[]} shows
 * @returns {Record<string, GenreStats>} ключ — назва жанру
 */
export function genreStats(shows) {
  let tempStats = {};

  for (const show of shows) {
    if (!show.genres || show.genres.length === 0) continue;

    for (const genre of show.genres) {
      if (!tempStats[genre]) {
        tempStats[genre] = { count: 0, ratedCount: 0, sum: 0 };
      }
      tempStats[genre].count++;

      if (show.rating !== null){
        tempStats[genre].ratedCount++;
        tempStats[genre].sum += show.rating;
      }
    }
  }

  const result = {};

  for (const genre in tempStats){
    const data = tempStats[genre];

    let averageRating = null;

    if (data.ratedCount > 0){
      const avg = data.sum / data.ratedCount;
      averageRating = Number(avg.toFixed(1))
    }
    result[genre] = { count: data.count, averageRating };
  }
  return result;
}
