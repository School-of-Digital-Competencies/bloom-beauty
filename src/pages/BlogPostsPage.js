import { getPosts } from '../api/posts';
import { Post } from '../components/post/post';
import { Pagination } from '../components/pagination';

export const BlogPostsPage = () => {
  const posts = getPosts();
  return `
    <section class="posts">
      ${posts.map((post, index) => Post(post, index)).join('')}
      ${Pagination()}
    </section>
  `;
};
