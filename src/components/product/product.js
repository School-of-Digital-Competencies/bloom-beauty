import './product.css';

export const Product = (product) => {
  const { id, title, description, img, price } = product;

  return `
    <article class="product">
        <img class="product__image" src="${img}" />

        <div class="product__content">
            <a class="product__title" href="#/catalog/${id}">${title}</a>
      
            <p class="product__description">
                ${description}
            </p>
      
            <p class="product__price">&#36;${price}</p>
      
            <button class="product__cta">Add to Bag</button>
        </div>
    </article>
    `;
};
