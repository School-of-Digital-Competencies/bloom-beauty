import './product-card-large.css';
import { getProductImageUrl } from '../../utils/utils';

export const ProductCardLarge = (product) => {
  const { description, title, img, id } = product

  const imageUrl = getProductImageUrl(img)

  return `
    <section class='large_card'>
        <img class='product_card_img' src=${imageUrl}>
        <div class='product_title'>${title}</div>
        <p class='product_description'>${description}</p>
        <div class='hashtags'>
        <span class='hashtags__hashtag'># GreatGift</span>
        <span class='hashtags__hashtag'># AntiAging</span>
        <span class='hashtags__hashtag'># GreatGift</span>
        <span class='hashtags__hashtag'># Ingregients</span>
        <span class='hashtags__hashtag'># Ingregients</span>
        </div>
        <a href=#/catalog class='btn_shop card__btn'>Shop now</a>
        <a href=#/catalog/${id} class='btn_read card__btn'>Read more</a>
    </section>
    `;
};
