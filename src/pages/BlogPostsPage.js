import { getPosts } from '../api/posts';
import { PostComponent } from '../components/post/post.ts';
import { Blog } from '../components/blog/blog';
import { Pagination } from '../components/pagination';
import { Layout } from '../layout/Layout';

export const BlogPostsPage = () => {
  const posts = getPosts();

  return Layout(`
    <section class="posts">
      ${posts.map((post, index) => PostComponent(post, index)).join('')}
      ${Pagination()}
    </section>
    ${Blog()}
  `);
};
