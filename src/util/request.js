import 'whatwg-fetch';

/**
 * Custom error class for passing meaningful information through from server
 *
 * */
class RequestError extends Error {
  constructor(body = {}, ...params) {
    super(...params);
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequestError);
    }
    // Custom debugging information
    this.body = body;
  }
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  // console.log(' response in request parse JSON' , response);
  if (response.status === 204) {
    return {};
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
async function checkStatus(response) {
  if (response.ok) {
    return response;
  }

  const { url, status, statusText } = response;
  const body = await response.json();

  throw new RequestError({ body, status, statusText, url }, statusText);
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

export function downloadFile(url, options) {
  return fetch(url)
    .then(checkStatus)
    .then(response => response.blob());
}
