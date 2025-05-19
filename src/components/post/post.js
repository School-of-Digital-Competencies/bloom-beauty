import './post.css';
import { getPostImageUrl } from '../../utils/utils';

export const Post = (post, index) => {
  const {  title, body, img, tags, createdDate } = post;
  const imageURL = getPostImageUrl(img);
  const Tag = tag => {
    return `
    <li class="posts__tag">${tag}</li>
    `;
  };
  return `
    <article class="post ${index % 2 === 0 ? 'post-left' : 'post-right'}">
        <img class="post__image" src="${imageURL}" />

        <div class="post__content">
            <h3 class="post__title">${title}</h3>
            <p class="post__description">${body}</p>
            <ul class="post__list">${tags.map(tag => Tag(tag)).join('')}</ul>
            <button class ='post__read-btn'>Read more</button>
        </div>
      
    </article>
    `;
};
