import Router from 'yourrouter';
import { renderInHtml } from '../utils/renderInHtml';
import { HomePage } from '../pages/HomePage.ts';
import { CatalogPage } from '../pages/CatalogPage';
import { ProductPage } from '../pages/ProductPage';
import { BlogPostsPage } from '../pages/BlogPostsPage';
import { filterLogic } from '../components/filters/productFilterLogic'


const router = Router.create({
  renderId: '#app',
  path404: '/notFound',
});

router.addRoute('/', async () => {
  await renderInHtml(HomePage, 'app');
});

router.addRoute('/catalog', async () => {
  await renderInHtml(CatalogPage, 'app');
  await filterLogic()
});

router.addRoute('/blogposts', async () => {
  await renderInHtml(BlogPostsPage, 'app');
});

router.addRoute('/catalog/:id', async () => {
  await renderInHtml(ProductPage, 'app');
});

export default router;
