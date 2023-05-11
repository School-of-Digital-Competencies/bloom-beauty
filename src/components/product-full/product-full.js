import './product-full.css';
import { getProductImageUrl } from '../../utils/utils';

export const ProductFull = (product) => {
  const { id, title, description, img, price } = product;
  const imgUrl = getProductImageUrl(img);
  const smallImgUrl = imgUrl.slice(0,-4);
  return `
    <article class="product-full">
    <div class=product-images> 

        <img class="product-full__image" src="${imgUrl}" />
        <div class="product-small_images">

        <img class="product-small_image"  src="${smallImgUrl}-1.png"/>
        <img class="product-small_image"  src="${smallImgUrl}-2.png"/>
        <img class="product-small_image"  src="${smallImgUrl}-3.png"/>
        <img class="product-small_image"  src="${smallImgUrl}-4.png"/>
        <img class="product-small_image"  src="${smallImgUrl}-5.png"/>
        </div>

    </div>

  <div class="product-full__content">
    <h3 class="product-full__title">${title}</h3>


    <p class="product-full__price">&#36;${price}</p>
    <p class="product-full__description">${description}</p>
    <p class="product-full__size">Size: 50ml</p>


    <button class="product-full__cta">Add to Cart</button>
    <p class="product-full__description">A clear, water-jelly cream with Cherry Blossom and Niacinamide that delivers a burst of hydration and glow for visibly brighter, dewy skin.</p>

  </div>
</article>
    `;
};
