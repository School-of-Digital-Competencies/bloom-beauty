import { getProducts } from '../api/products';
import { Product } from '../components/product/Product';

export const CatalogPage = () => {
  const products = getProducts();

  return `
    <section class="products">
      ${products.map((product) => Product(product)).join('')}
    </section>
  `;
};
