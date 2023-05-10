import { Router } from 'yourrouter';
import { HomePage } from '../pages/HomePage';
import { CatalogPage } from '../pages/CatalogPage';
import { ProductPage } from '../pages/ProductPage';

Router.createInstance({
  renderId: '#routes',
  path404: '/notFound',
});

const router = Router.getInstance();

router.addRoute('/', () => {
  return HomePage;
});

router.addRoute('/catalog', () => {
  return CatalogPage;
});

router.addRoute('/catalog/:id', () => {
  return ProductPage;
})

export default router;
