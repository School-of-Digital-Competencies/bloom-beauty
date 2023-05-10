import './footer.css';

export const Footer = () => {
  const footer = document.createElement('footer');

  footer.classList.add('footer');

  footer.innerHTML = `
    <a class="logo" href="#/test">
        <span class="color--pink">Bloom</span> Beauty
    </a>
    `;

  return footer;
};
