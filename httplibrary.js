/**
 * Easy HTTP Library
 * Library for making HTTP requests
 */

class EasyHTTP {
  // Make an HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
}
