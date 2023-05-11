import {onMenuBurgerClicked} from "../components/header/header";

export const Controller = () => {
  const menuButtonElement = document.querySelector('#menu');
  const items = document.querySelector('.menu-list li');
  menuButtonElement.addEventListener('click', onMenuBurgerClicked);
  items.addEventListener('click', onMenuBurgerClicked);
}
