import './style.css';

import router from './plugins/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import {Controller} from "./utils/controller";

setTimeout(() => {
  document.querySelector('#app').prepend(Header());
  document.querySelector('#app').append(Footer());
  Controller();
});
