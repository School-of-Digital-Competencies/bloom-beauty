import { getProducts } from '../api/products';
import { ProductGrid } from '../components/product-grid/product-grid';
import { Layout } from '../layout/Layout';
import { filterElement } from '../components/filters/productFilterElement'



export const CatalogPage = async () => {

  const products = await getProducts();
  
  return Layout(`
      
    <section class="products">
      
    ${filterElement()}
      
    ${ProductGrid(products)}
     
    </section>
  `);
};
