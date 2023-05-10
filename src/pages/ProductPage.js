import { getProductById } from '../api/products';
import { ProductFull } from '../components/product-full/product-full';
import router from '../plugins/router';

export const ProductPage = () => {
  const param = router.getRouteParam();
  const product = getProductById(param);

  return `
    ${ProductFull(product)}
  `;
};
