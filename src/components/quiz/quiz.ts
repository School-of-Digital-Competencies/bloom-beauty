import './quiz.css';
import { getQuizImageUrl } from '../../utils/utils';

export const Quiz = () => {
  const imgUrl = getQuizImageUrl('quiz-image.png');
  return `
  <section class="quiz">
  <div class="container container-quiz">
    <div class="quiz__image"><img class="main-image" src="${imgUrl}" alt="">
    </div>
    <div class="quiz__text">
    <h2 class="quiz__header">
      The Skin Quiz
    </h2>
    <p>Meet the quiz that will curate a routine just just just as unique as you are.</p>
    <button class="quiz__button">Explore More</button>
    </div>
  </div>
</section>
    `;
};
