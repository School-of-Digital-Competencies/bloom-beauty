import './product-full.css';
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
  if (!product) return '<div>Product not found</div>';

  const { id, title, description, images, price, rating, brand, category, stock } = product;
  const mainImage = images[0];
  const smallImages = images.slice(1, 6);

  const reviews = getReviewHTMLs(reviewArray, id);

  return `
    <article class="product-full">
      <div class="product-images">
        <img class="product-full__image" src="${mainImage}" alt="${title}" />
        <div class="product-small_images">
          ${smallImages.map(img => `
            <img class="product-small_image" src="${img}" alt="${title}" />
          `).join('')}
        </div>
      </div>

      <div class="product-full__content">
        <h3 class="product-full__title">${title}</h3>
        <p class="product-full__brand">${brand}</p>
        <p class="product-full__category">${category}</p>
        <p class="product-full__price">$${price.toFixed(2)}</p>
        <p class="product-full__stock">In Stock: ${stock}</p>
        <p class="product-full__description">${description}</p>

        <div class="rating-container">
          <div class="stars">
            ${Array(5).fill().map((_, i) => `
              <div class="star">
                <img src="src/assets/icons/${i < Math.floor(rating) ? 'star.png' : 'star-alt.png'}" alt="">
              </div>
            `).join('')}
          </div>
          <div class="rating-value">${rating.toFixed(1)}</div>
        </div>

        <button class="product-full__cta">Add to Cart</button>
      </div>
    </article>

    <div class="review__section">
      <h3 id="review-title">Read the reviews</h3>
      <button class="small">see all</button>
      <div class="rating-container" id="top-rating">
        <div class="stars">
          ${Array(5).fill().map((_, i) => `
            <div class="star">
              <img src="src/assets/icons/${i < Math.floor(rating) ? 'star.png' : 'star-alt.png'}" alt="">
            </div>
          `).join('')}
        </div>
        <div class="count__reviews">${reviewArray.filter(r => r.productId === id).length} reviews</div>
      </div>
      <div class="reviews">
        ${reviews}
      </div>
    </div>
  `;
};
