import { getPosts } from '../api/posts';
import { Post } from '../components/post/post';
import { Blog } from '../components/blog/blog';
import { Pagination } from '../components/pagination';
import { Layout } from '../layout/Layout';


export const BlogPostsPage = (): Promise<string> => {
  const posts = getPosts();

  return Layout(`
    <section class="posts">
      ${posts.map((post: string, index: number) => Post(post, index)).join('')}
      ${Pagination()}
    </section>
    ${Blog()}
  `);
};
