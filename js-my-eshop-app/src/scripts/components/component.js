import { Session } from '../models/session.js';

export class Component {
  rootElement;

  constructor(element) {
    this.session = new Session();
    this.isLoggedIn = !!this.session.get();
    this.rootElement = document.querySelector(element);
  }

  logout() {
    this.session.close();
    this.isLoggedIn = false;
    this.render();
  }

  render() { }

  renderSpinner(shouldRender) {
    const spinnerHTML = `
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    `;

    if (shouldRender) {
      this.rootElement.innerHTML = spinnerHTML;
    } else {
      this.rootElement.innerHTML = '';
    }
  }

  renderErrorMessage(message) {
    const errorHTML = `
      <div class="alert alert-danger" role="alert">
        ${message}
      </div>
    `;

    this.rootElement.innerHTML = errorHTML;
  }
}
