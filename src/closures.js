/**
 * @typedef {object} Counter
 * @property {() => number} increment збільшує значення на 1 і повертає нове
 * @property {() => number} reset повертає значення до початкового і повертає його
 * @property {() => number} value поточне значення
 */

/**
 * C5.1. Створює лічильник.
 * Специфікація — ТЗ, C5.
 *
 * @param {number} [start]
 * @returns {Counter}
 */
export function createCounter(start = 0) {
  let startValue = start
  let value = start;

  return {
    increment: () => {
      value++;
      return value;
    },
    reset: () => {
      value = startValue;
      return value;
    },
    value: () => {
      return value;
    }
  }
}

/**
 * C5.2. Обгортає `fn` так, що вона виконується щонайбільше один раз.
 * Специфікація — ТЗ, C5.
 *
 * @template {(...args: any[]) => any} F
 * @param {F} fn
 * @returns {F}
 */
export function once(fn) {
  let hasRun = false;
  let result;

  return (...args) => {
    if (!hasRun) {
      result = fn(...args);
      hasRun = true;
    }
    return result;
  };
}

/**
 * C5.3. Запам'ятовує результати `fn` для кожного значення її єдиного аргументу.
 * Специфікація — ТЗ, C5.
 *
 * @template T, R
 * @param {(arg: T) => R} fn
 * @returns {(arg: T) => R}
 */
export function memoize(fn) {
  const cache = new Map()
  return (arg) =>{
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  }
}
