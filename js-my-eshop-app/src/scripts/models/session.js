import { CustomStorage } from "../helpers/storage.js";

export class Session extends CustomStorage {
  #storageKey = 'user_session';
  user;
  token;

  constructor(storage) {
    super(storage);
  }

  open(user, token) {
    this.user = user;
    this.token = token;
    const data = {
      user: this.user,
      token: this.token,
    }
    this.setItem(this.#storageKey, data);
  }

  get() {
    return this.getItem(this.#storageKey);
  }

  getUserToken() {
    return this.get()?.token; // 'JWT' || undefined || null
  }

  close() {
    this.clear();
  }
}
