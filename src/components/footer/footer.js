import './footer.css';
import { getIconUrl } from '../../utils/utils';

const facebookIconUrl = getIconUrl('facebook.svg');
const instagramIconUrl = getIconUrl('instagram.svg');
const pinterestIconUrl = getIconUrl('pinterest.svg');
const telegramIconUrl = getIconUrl('telegram.svg');
const twitterIconUrl = getIconUrl('twitter.svg');

export const Footer = () => {
  const footer = document.createElement('footer');

  footer.classList.add('footer');

  footer.innerHTML = `

    <div class="footer__wrapper">
       <div class="footer__icons">
          <img class="footer__icon" src="${facebookIconUrl}" />
          <img class="footer__icon" src="${instagramIconUrl}" />
          <img class="footer__icon" src="${pinterestIconUrl}" />
          <img class="footer__icon" src="${telegramIconUrl}" />
          <img class="footer__icon" src="${twitterIconUrl}" />
       </div>
         <div class="footer__logo__wrap">
      <div class="footer__logo">
        <span>Bloom</span> Beauty
        <div class="logo__discription">
          Discover nature's beauty with our natural care products.
        </div>
      </div>
      <div class="logo__phone">
        <img src="src/assets/icons/logo1 phone.svg" alt="logo phone" height="12">
        <a href="#">+ 38 050 123 45 67</a>
      </div>
      <div class="logo__email">
        <img src="src/assets/icons/logo2 email.svg" alt="logo email" height="12">
        <a href="">bloombt@kmail.com</a>
      </div>
      <div class="logo__local">
        <img src="src/assets/icons/logo3 local.svg" alt="logo local" height="12">
        Kiyv, Ukraine
      </div>
    </div>
       <div class="footer__line"></div>
       <div class="footer__data">
          <p>© 2023 Bloom Beauty</p>
          <div class="footer__first">
             <p>Privacy Policy</p>
             <p>terms and conditions</p>
          </div>
       </div>
    </div>
    `;

  return footer;
};
