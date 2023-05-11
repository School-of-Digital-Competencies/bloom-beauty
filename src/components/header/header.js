import './header.css';
import { getIconUrl } from '../../utils/utils';

export const Header = () => {
  const header = document.createElement('header');

  header.classList.add('header');

  const cartIconUrl = getIconUrl('cart-icon.svg');

  header.innerHTML = `
    <a class="logo" href="#/">
        <span class="color--pink">Bloom</span> Beauty
    </a>

    <img src="${cartIconUrl}" />
    `;

  return header;
};
