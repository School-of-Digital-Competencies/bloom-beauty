import './blossomed.css';
import { getBlossomedImageUrl } from '../../utils/utils';

export const Blossomed = (blossomed) => {
  const { img } = blossomed;
  const imgUrl = getBlossomedImageUrl(img);

  return `
    <div class="blossomed-item">
        <img class="blossomed__image" src="${imgUrl}" />
    </div>
    `;
};
