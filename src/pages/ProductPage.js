import { getProductById } from '../api/products';
import { ProductFull } from '../components/product-full/product-full';
import router from '../plugins/router';

export const ProductPage = async () => {
  const { id } = router.getRouteParams();

  const product = await getProductById(id);

  if (!product) {
    return '<div>Product not found</div>';
  }

  return `
    ${ProductFull(product)}
  `;
};
