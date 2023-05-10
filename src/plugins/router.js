import { Router } from 'yourrouter';
import { Home } from '../pages/Home';

Router.createInstance({
  renderId: '#routes',
  path404: '/notFound',
});

const router = Router.getInstance();

router.addRoute('/', () => {
  return Home;
});

router.addRoute('/test', () => {
  console.log('Hello test page');

  return () => '<p>Test page!</p>'; // you must return a function
});

export default router;
