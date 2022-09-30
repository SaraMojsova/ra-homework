import { DATA } from './data';

export const getData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(DATA);
  }, 1000);
});
