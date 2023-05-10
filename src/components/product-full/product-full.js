import './product-full.css';

export const ProductFull = (product) => {
  const { id, title, description, img, price } = product;

  return `
    <article class="product-full">
        <img class="product-full__image" src="${img}" />

        <div class="product-full__content">
            <h3 class="product-full__title">${title}</h3>
      
            <p class="product-full__description">
                ${description}
            </p>
      
            <p class="product-full__price">&#36;${price}</p>
      
            <button class="product-full__cta">Add to Bag</button>
        </div>
    </article>
    `;
};
