import { getPosts } from '../api/posts';
import { Post } from '../components/post/post';

export const BlogPostsPage = () => {
  const posts = getPosts();
  return `
    <section class="posts">
      ${posts.map((post, index) => Post(post, index)).join('')}
    </section>
  `;
};
