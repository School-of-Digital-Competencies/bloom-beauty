import './product-full.css';
import { getProductImageUrl } from '../../utils/utils';
import {reviewArray} from "../../api/reviews";

function getReviewHTMLs(reviews, productId) {
  let result = '';
  reviews.filter(x => x.productId === productId).forEach((review, i) => {
    const {id, imgUrl, rating, username, isVerified, title, description, attachments} = review;
    let ratingHTML = '';
    for (let j = 0; j < rating; j++) {
      ratingHTML += '<div class="star"><img src="src/assets/icons/star.png" alt=""></div>';
    }
    for (let j = 0; j < 5-rating; j++) {
      ratingHTML += '<div class="star"><img src="src/assets/icons/star-alt.png" alt=""></div>';
    }
    result += `
      <div class="review" id="${id}">
        <div class="review__header_logo"><img src="${imgUrl}" alt=""></div>
          <div class="review__content">
            <div class="review__header">
              <div class="review__header_desc">
                <div class="review__header__username">${username}</div>
                <div class="stars">
                  ${ratingHTML}
                </div>
              </div>
            </div>
            <div class="review__body">
              <div class="review__title">${title}</div>
              <div class="review__desc">${description}</div>
            </div>
          </div>
        </div>
      <div class="review__divider"></div>
    `;
  });
  return result;
}


export const ProductFull = (product) => {
  const { id, title, description, img, price } = product;
  const imgUrl = getProductImageUrl(img);
  const smallImgUrl = imgUrl.slice(0,-4);

  const reviews = getReviewHTMLs(reviewArray, id);
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

<div class="review__section">
  <h3 id="review-title">Read the reviews</h3>
  <button class="small">
     see all
  </button>
  <div class="rating-container" id="top-rating">
    <div class="stars">
      <div class="star"><img src="src/assets/icons/star.png" alt=""></div>
      <div class="star"><img src="src/assets/icons/star.png" alt=""></div>
      <div class="star"><img src="src/assets/icons/star.png" alt=""></div>
      <div class="star"><img src="src/assets/icons/star.png" alt=""></div>
      <div class="star"><img src="src/assets/icons/star.png" alt=""></div>
    </div>
    <div class="count__reviews">4 review</div>
  </div>
  <div class="reviews">
  ${reviews}
  </div>
</div>
    `;
};
