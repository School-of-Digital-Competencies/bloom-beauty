import './share.css';
import { getBlossomed } from "../../api/blossomed";
import { Blossomed } from "../blossomed/blossomed";

export const Share = () => {
  const blossomed = getBlossomed();
  return `
    <section class="share">
      <h1 class="share__title">
        Share  how you blossomed with #bloombeauty
      </h1>
      <div class="blossomed">
      ${blossomed.map((product) => Blossomed(product)).join('')}
      </div>

      <a class="share__followButton" href="#posts </a>
    </section>
    `;
};
