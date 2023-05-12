import { Hero } from '../components/hero/hero';
import { getProducts } from '../api/products';
import { ProductCardLarge } from '../components/product-card-large';

import { Quiz } from '../components/quiz/quiz';
import { Share } from '../components/share/share';
import {Blog} from "../components/blog/blog";

export const HomePage = () => {
  const products = getProducts(5, 7)

  return `
    ${Hero()}
    ${products.map(el => ProductCardLarge(el))}
    ${Blog()}
    ${Quiz()}
    ${Share()}
  `;
};
