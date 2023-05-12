import './blog.css';
import {getBlogPosts} from "../../api/posts";
import {getPostImageUrl} from "../../utils/utils";


export const Blog = () => {
  return `
    <section class="blog">
    <div class="blog__header">
    On the Blog<br>
    <a href="/posts">See All</a>
  </div>

<div class="blogs__wrapper">
  ${getBlogPosts().map((post) =>  {
    const urlImg = (post) => getPostImageUrl(post.img) ;
    return `
<div class="blog__wrapper">
<img class="blog__img" src="${urlImg(post)}">
      <div class>${post.title}</div>
      <div>${post.description}</div>
    <button class="blog__button">Read More</button>

</div>
      `}).join('')}
</div>


    </section>
    `;
};
