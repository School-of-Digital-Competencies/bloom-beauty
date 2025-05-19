import './header.css';
import { getIconUrl } from '../../utils/utils';

const CART_ICON_URL: string = getIconUrl('cart-icon.svg');
const SEARCH_ICON_URL: string = getIconUrl('circle-arrow-icon-02.svg');
const ACCOUNT_ICON_URL: string = getIconUrl('account-icon.svg');

const TEMPLATE: string = `
    <div class="icon-conteiner desktop-hidden" id="menu">
      <div class="icon">
        <div class="burger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
      <div class="icon-title">MENU</div>
    </div>
    <div class="icon-container"></div>

    <a class="logo" href="#/">
        <span class="color--pink">Bloom</span> Beauty
    </a>

    <nav class="mobile-hidden">
        <ul>
            <li><a href="#/catalog">SHOP ALL</a></li>
            <li>BESTSELLERS</li>
            <li>COLLECTION</li>
            <li>ABOUT US</li>
            <li><a href="#/blogposts">BLOG</a></li>
        </ul>
    </nav>

    <div class="action-bar">
      <div class="icon-container mobile-hidden">
        <div class="icon">
            <img src="${SEARCH_ICON_URL}" alt="Search Icon Image"/>
        </div>
        <div class="icon-title">SEARCH</div>
      </div>
      <div class="icon-container mobile-hidden">
        <div class="icon">
            <img src="${ACCOUNT_ICON_URL}" alt="Account Icon Image"/>
        </div>
        <div class="icon-title">ACCOUNT</div>
      </div>
      <div class="icon-container">
        <div class="icon">
            <img src="${CART_ICON_URL}" alt="Cart Icon Image"/>
        </div>
        <div class="icon-title">CART</div>
      </div>
    </div>
    <div class="menu-list">
        <div class="menu-list_header">
            <div class="menu-list_header-text">MENU</div>
        </div>
        <ul class="menu-list_body">
          <li><a href="#/catalog">CATALOG</a></li>
          <li><a href="#/posts">BLOG</a></li>
          <li>SHOP ALL </li>
          <li>BESTSELLERS</li>
          <li>COLLECTION</li>
          <li>ABOUT US</li>
        </ul>
    </div>
`;

export function onMenuBurgerClicked(): void {
  const headerElement: HTMLElement | null = document.getElementsByTagName('header')[0];
  if (headerElement) {
    headerElement.classList.toggle('opened');
  }
}

export const Header = (): HTMLElement => {
  const headerElement: HTMLElement = document.createElement('header');
  headerElement.classList.add('header');
  headerElement.innerHTML = TEMPLATE;
  return headerElement;
}; 