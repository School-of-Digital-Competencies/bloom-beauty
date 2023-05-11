import { Hero } from '../components/hero/hero';
import { Quiz } from '../components/quiz/quiz';
import { Share } from '../components/share/share';

export const HomePage = () => {
  return `
    ${Hero()}
    ${Quiz()}
    ${Share()}
  `;
};
