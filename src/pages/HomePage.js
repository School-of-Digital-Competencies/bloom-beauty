import { Hero } from '../components/hero/hero';
import { Share } from '../components/share/share';

export const HomePage = () => {
  return `
    ${Hero()}
    ${Share()}
  `;
};
