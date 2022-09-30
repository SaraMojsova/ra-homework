export class CustomStorage {
  #storage;

  constructor(storage = localStorage) {
    this.#storage = storage;
  }

  set storage(st) {
    if (!storage) return;

    this.#storage = st;
  }

  setItem(key, value) {
    let toStore = value;
    if (typeof value === 'object') {
      toStore = JSON.stringify(value);
    }

    this.#storage.setItem(key, toStore);
  }

  getItem(key) {
    const data = this.#storage.getItem(key);
    return JSON.parse(data);
  }

  removeItem(key) {
    this.#storage.removeItem(key);
  }

  clear() {
    this.#storage.clear();
  }
}
