const localStorage = window.localStorage;

/**
 * Store value into local storage with key.
 *
 * @param {String} key
 * @param {String} value
 */
export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

/**
 * Retrieve data from local storage with key.
 *
 * @param {String} key
 */
export const getLocalStorage = (key) => localStorage.getItem(key);
