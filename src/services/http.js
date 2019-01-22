import axios from 'axios';

const instance = axios.create({
  responseType: 'json',
  baseURL: 'https://hacker-news.firebaseio.com/v0',
});

/**
 * Get method to retrieve data having path.
 *
 * @param {String} path Path from where data is to be retrieved.
 * @returns
 */
async function get(path) {
  try {
    return await instance.get(path + '.json');
  } catch (err) {
    return Promise.reject(err);
  }
}

export default {
  get,
};
