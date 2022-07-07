import request from "../helpers/request.js";
import { Session } from "../models/session.js";
import { User } from "../models/user.js";

class Login {
  #parentElement = document.querySelector('#login-form');
  #message = 'You were logged in successfully';

  constructor() {
    this.session = new Session();
    const isLoggedIn = !!this.session.getUserToken();
    if (isLoggedIn) {
      this.#parentElement.innerHTML = this.#message;
    } else {
      this.addSubmitHandler();
    }
  }

  async login(data) {
    try {
      const response = await request.post('auth/login', data);
      const {
        firstName,
        lastName,
        email,
        gender,
        username,
        image,
        id,
        token
      } = response;
      const user = new User(firstName, lastName, email, gender, username, image, id);

      this.session.open(user, token);
    } catch (error) {

    }
  }

  addSubmitHandler() {
    const _this = this; // Login context
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = [...new FormData(this)]; // form context
      const data = Object.fromEntries(formData);
      _this.login(data);
    });
  }
}

new Login();
