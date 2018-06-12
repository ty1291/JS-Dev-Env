import 'whatwg-fetch'; // this polyfill will ensure this code runs in browsers that don't support fetch natively
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl(); // determine whether in localhost or not

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

// private functions: gives us centralised spot to handle all 'get' calls
// all public functions are nice and short
function get(url) { // i.e. localhost:3000/users
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since reserved word.
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
