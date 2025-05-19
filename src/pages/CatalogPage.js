import { getProducts } from '../api/products';
import { ProductComponent } from '../components/product/product';
import { Layout } from '../layout/Layout';

export const CatalogPage = async () => {
  const products = await getProducts();

  return Layout(`
    <section class="products">
      ${products.map((product) => ProductComponent(product)).join('')}
    </section>
  `);
};
