import { getProducts } from '../api/products';
import { Product } from '../components/product/product';

export const CatalogPage = async () => {
  const products = await getProducts();

  return `
    <section class="products">
      ${products.map((product) => Product(product)).join('')}
    </section>
  `;
};
