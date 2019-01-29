const TOP_STORIES = 0;
const NEW_STORIES = 1;
const BEST_STORIES = 2;

const API_ITEM = '/item';
const API_ITEM_SINGLE = '/item/:id';
const API_TOP_STORIES = '/topstories';
const API_NEW_STORIES = '/newstories';
const API_BEST_STORIES = '/beststories';

const PATH_LOGIN = '/login';

const PAGINATION_LIMIT = 10;
const PAGINATION_INCREMENT_FACTOR = 1;
const PAGINATION_DECREMENT_FACTOR = -1;

export const IS_LOGGED_IN_KEY = 'isLoggedIn';
export const USERS_IN_STORAGE = 'users';

export const SIGN_IN_TXT = 'Sign In';
export const SIGN_UP_TXT = 'Sign Up';


export default {
  API_ITEM,
  PATH_LOGIN,
  TOP_STORIES,
  NEW_STORIES,
  BEST_STORIES,
  API_NEW_STORIES,
  API_TOP_STORIES,
  API_ITEM_SINGLE,
  API_BEST_STORIES,
  PAGINATION_LIMIT,
  IS_LOGGED_IN_KEY,
  PAGINATION_INCREMENT_FACTOR,
  PAGINATION_DECREMENT_FACTOR,
};
