import './card-item.css';
import { Product } from '../../../types';

export const CardItem = (product: Product): string => {
  const { thumbnail, title, description, price, rating } = product;

  return `
         <div class="card-item">
            <div class="card-image">
               <img src="${thumbnail}" alt="${title}">
            </div>
            <div class="card-content">
             <p class="card-text">${title}</p>
            <div class="stars">
              ${Array(5)
                .fill(null)
                .map(
                  (_, i) => `
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.7264 0.199129C6.82103 -0.0663765 7.17897 -0.0663763 7.27359 0.199129L8.87925 4.70445C8.9203 4.81963 9.023 4.89792 9.1401 4.90329L13.7202 5.11326C13.9901 5.12564 14.1007 5.48281 13.8893 5.65927L10.3015 8.65369C10.2098 8.73025 10.1706 8.85691 10.2019 8.97542L11.4269 13.6105C11.4991 13.8837 11.2095 14.1044 10.9842 13.948L7.16121 11.2933C7.06347 11.2254 6.93653 11.2254 6.83879 11.2933L3.01579 13.948C2.7905 14.1044 2.50092 13.8837 2.57311 13.6105L3.79809 8.97542C3.82941 8.85691 3.79018 8.73025 3.69846 8.65369L0.11073 5.65927C-0.100701 5.48281 0.00990903 5.12564 0.27982 5.11326L4.8599 4.90329C4.977 4.89792 5.07969 4.81963 5.12075 4.70445L6.7264 0.199129Z" fill="${
                    i < Math.floor(rating) ? '#FFD700' : '#DFE1E3'
                  }"/>
                </svg>
              `
                )
                .join('')}
               <span class="span-text">(${rating.toFixed(1)})</span>
               
            </div>
            <p class="card__grey-text">${description}</p>
               <p class="price">$${price.toFixed(2)}</p>
               <button class="btn-card">Add to bag</button>
            </div>
            </div>
    `;
};
