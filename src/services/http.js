import axios from 'axios';

import * as appConstants from '../constants/common';

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
async function getNews(path) {
  try {
    return await instance.get(path + '.json');
  } catch (err) {
    return Promise.reject(err);
  }
}

/**
 * GET method to retrieve data of single item from API.
 *
 * @param {Number} id Id of an item to be retrieved from API.
 * @returns
 */
async function getItem(id) {
  try {
    return await instance.get(appConstants.API_ITEM + '/' + id + '.json');
  } catch (err) {
    return Promise.reject(err);
  }
}
export default {
  getNews,
  getItem,
};
