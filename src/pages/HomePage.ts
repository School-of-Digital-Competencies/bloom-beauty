import { Hero } from '../components/hero/hero.ts';
import { Blog } from '../components/blog/blog';
import { getProducts } from '../api/products';
import { Layout } from '../layout/Layout';
import { Quiz } from '../components/quiz/quiz';
import { Share } from '../components/share/share';
import { Cards } from '../components/cards/cards';
import { ProductCardLarge } from '@/components/product-card-large/product-card-large';

export const HomePage = async () => {
  const products = await getProducts({ skip: 0, limit: 2 });
  const newArrivals = await getProducts({
    skip: 0,
    limit: 4,
    sortBy: 'meta.updatedAt',
    order: 'desc',
  });
  const bestSellers = await getProducts({
    skip: 4,
    limit: 4,
    sortBy: 'rating',
    order: 'desc',
  });

  return Layout(`
    ${Hero()}
    ${Cards('New Arrivals', newArrivals)}
    ${Cards('Best Sellers', bestSellers)}
    ${products.map((el, index) => ProductCardLarge(el, index)).join('')}
    ${Blog()}
    ${Quiz()}
    ${Share()}
  `);
};
