import './blossomed.css';
import { getBlossomedImageUrl } from '../../utils/utils';

export const Blossomed = (blossomed: { [key: string]: string }) => {
  const { img } = blossomed;
  const imgUrl: string = getBlossomedImageUrl(img);

  return `
    <div class="blossomed-item">
        <img class="blossomed__image" src="${imgUrl}" />
    </div>
    `;
};