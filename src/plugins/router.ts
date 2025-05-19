import Router from 'yourrouter';
import { renderInHtml } from '../utils/renderInHtml';
import { HomePage } from '../pages/HomePage.ts';
import { CatalogPage } from '../pages/CatalogPage.ts';
import { ProductPage } from '../pages/ProductPage.ts';
import { BlogPostsPage } from '../pages/BlogPostsPage.ts';

const router = Router.create({
  renderId: '#app',
  path404: '/notFound',
});

router.addRoute('/', async () => {
  await renderInHtml(HomePage, 'app');
});

router.addRoute('/catalog', async () => {
  await renderInHtml(CatalogPage, 'app');
});

router.addRoute('/blogposts', async () => {
  await renderInHtml(BlogPostsPage, 'app');
});

router.addRoute('/catalog/:id', async () => {
  await renderInHtml(ProductPage, 'app');
});

export default router;
