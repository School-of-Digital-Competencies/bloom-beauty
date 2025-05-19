import './product-card-large.css';
import { getProductImageUrl } from '../../utils/utils';

export const ProductCardLarge = (product, index) => {
  const { description, title, img, id } = product;

  const imageUrl = getProductImageUrl(img);
  return `
    <section class="large_card ${id % 2 === 0 ? 'post-left' : 'post-right'}">
        <img class='product_card_img' src=${imageUrl}>
        <div class="product__content"><div class='product_title'>${title}</div>
        <p class='product_description'>${description}</p>
        <div class='hashtags'>
        <span class='hashtags__hashtag'># GreatGift</span>
        <span class='hashtags__hashtag'># AntiAging</span>
        <span class='hashtags__hashtag'># GreatGift</span>
        <span class='hashtags__hashtag'># Ingregients</span>
        <span class='hashtags__hashtag'># Ingregients</span>
        </div>
        <div class="button__container">
        <button href=#/catalog class='btn_shop card__btn'>Shop now</button>
        <a href=#/catalog/${id} class='btn_read card__btn'>Explore more</a>
    </div>
        </div>
        </section>
    `;
};
