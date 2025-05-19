import './style.css';

import router from './plugins/router.js';
import { Header } from './components/header/header.ts';
import { Footer } from './components/footer/footer.ts';
import { Controller } from './utils/controller.ts';

document.addEventListener('DOMContentLoaded', () => {
  const app: HTMLElement | null = document.querySelector('#app');

  if (app) {
    app.prepend(Header());
    app.append(Footer());
    Controller();
  }

  console.log('router', router);
});
