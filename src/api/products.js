const products = [
  {
    title: 'Dewy Cream',
    description: 'With jeju Cherry blossom',
    price: 32,
    img: 'product-01.png',
  },

  {
    title: 'Fermented',
    description: '5-in-1',
    price: 46,
    img: 'product-02.png',
  },

  {
    title: 'Cream',
    description: 'fdlsd lsdl sdmsl',
    price: 51,
    img: 'product-03.png',
  },

  {
    title: 'Fer',
    description: 'fsdg',
    price: 32,
    img: 'product-04.png',
  },

  {
    title: 'Per',
    description: 'per per per',
    price: 120,
    img: 'product-05.png',
  },

  {
    title: 'Lotus Glow Kit',
    description: "Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams with lotus extract provide deep hydration and rejuvenation. Suitable for all skin types. Vegan, cruelty-free, eco-friendly.",
    price: 120,
    img: 'product-09.png',
  },

  {
    title: 'Floral Essence Masks Sets',
    description: 'Indulge in the beauty of nature with our Floral Essence Masks set. Each mask features a unique blend of flower extracts to hydrate and nourish your skin. Experience the essence of flowers in your skincare routine.',
    price: 120,
    img: 'product-10.png',
  },
].map((product, index) => ({ ...product, id: index + 1 }));

export const getProducts = (from = 0, count = 4) => {
  return [...products].slice(from, count);
};

export const getProductById = (id) => {
  return products.find((product) => Number(product.id) === Number(id));
};
