import { BASE_API_URL } from "./config.js";

class Request {
  #baseUrl;
  #headers;

  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
    this.#headers = {
      'Content-type': 'application/json',
      Accept: 'application/json'
    };
  }

  #makeCall(url, options) {
    return fetch(url, options)
      .then((response) => {
        // success scenario
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }

        // error scenario
        return response.json().then((data) => {
          throw new Error(`API failed. Status code ${response.status}, reason ${JSON.stringify(data)}`);
        })
      }, (error) => {
        console.log(error);
        throw new Error('Network failed');
      });
  }

  async get(path) {
    return this.#makeCall(`${this.#baseUrl}/${path}`, {
      method: 'GET',
      headers: this.#headers,
    });
  }

  async post(path, body) {
    return this.#makeCall(`${this.#baseUrl}/${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: this.#headers,
    });
  }
}

export default new Request(BASE_API_URL);
