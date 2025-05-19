import './blossomed.css';
import { getBlossomedImageUrl } from '../../utils/utils';

export const Blossomed = (blossomed: { [key: string]: string }) => {
  const { img } = blossomed;
  const imgUrl: string = getBlossomedImageUrl(img);

  return `
    <div class="blossomed-item">
        <img class="blossomed-item__image" src="${imgUrl}" />
        <div class="blossomed-item__buttons">
          <a href="#" class="blossomed-item__button-instagram">test</a>
          <a href="#" class="blossomed-item__button-buy">test</a>
        </div>
    </div>
    `;
};