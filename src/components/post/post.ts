import './post.css';
import { getPostImageUrl } from '@/utils/utils.ts';
import { Post } from "@/types.ts"

export const PostComponent = (post:Post, index:number) => {
  const {  title, description, img, tags, createdDate } = post;
  const imageURL = getPostImageUrl(img);
  const Tag = (tag:string) => {
    return `
    <li class="posts__tag">${tag}</li>
    `;
  };
  return `
    <article class="post ${index % 2 === 0 ? 'post-left' : 'post-right'}">
        <img class="post__image" src="${imageURL}" alt="post image" />

        <div class="post__content">
            <p class="post__createDate">${createdDate}</p>
            <h3 class="post__title">${title}</h3>
            <p class="post__description">${description}</p>
            <ul class="post__list">${tags.map(tag => Tag(tag)).join('')}</ul>
            <button class ='post__read-btn'>Read more</button>
        </div>

    </article>
    `;
};
