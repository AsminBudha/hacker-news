import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
  responseType: 'json'
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

// export async function addTodosToStore(toBeAdded) {
//   try {
//     let data = mapTodoToResponse(toBeAdded);
//     data = await http.post(API.TODOS, data);
//     return Promise.resolve(data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// }

// export async function deleteTodoFromStore(index, obj) {
//   try {
//     let data = await http.delete(API.TODOS + `/${obj.id}`);
//     return Promise.resolve(data);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }

// export async function markTodoCompleteInStore(obj) {
//   try {
//     let data = await http.put(API.TODOS + `/${obj.id}`, { ...obj });
//     console.log(data);
//     return Promise.resolve(data);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }

// export async function searchTodosFromStore(searchText) {
//   try {
//     let data = await http.get(`${API.TODOS}?q=${searchText}&limit=7`);
//     return Promise.resolve(data);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }

// export async function editTodo(obj) {
//   try {
//     console.log(obj);
//   } catch (error) {
//     console.log(error);
//   }
// }

export default {
  get,
};
