import './header.css';

export const Header = () => {
  const header = document.createElement('header');

  header.classList.add('header');

  header.innerHTML = `
    <a class="logo" href="#/">
        <span class="color--pink">Bloom</span> Beauty
    </a>
    `;

  return header;
};
