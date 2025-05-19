import { Product } from '@/types';
import { ProductComponent } from '../product/product';
import './product-grid.css';


export const ProductGrid = (products: Product[]) => {

  return `
    <div class="filter" id="ctg-filter"></div>
    
    <section class="products">
      ${products.map((product) => ProductComponent(product)).join('')}
    </section>
  `;
};
