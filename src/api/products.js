const products = [
  {
    title: 'Dewy Glow Jelly Cream',
    description: 'With Jeju Cherry Blossom',
    price: 32,
    img: 'product-04.png',
  },

  {
    title: 'Fermented Soybean Bio Mask',
    description: '5-in-1 face mask made with refreshing cellulose',
    price: 32,
    img: 'product-08.png',
  },

  {
    title: 'Clarifying Emulsion',
    description: 'with Bija Seed Oil',
    price: 32,
    img: 'product-01.png',
  },

  {
    title: 'Silk-Feel Cotton Puff',
    description: 'Soft and gentle cotton pads that will not irritate the skin.',
    price: 32,
    img: 'product-02.png',
  },

  {
    title: 'Pore Clearing Clay Mask 2X',
    description: 'With Super Volcanic Clusters',
    price: 32,
    img: 'product-05.png',
  },

  {
    title: 'Fermented Soybean Bio',
    description: '5-in-1 face mask made with refreshing cellulose',
    price: 32,
    img: 'product-04.png',
  },

  {
    title: 'Dewy Glow Jelly Cream',
    description: 'With Jeju Cherry Blossom',
    price: 32,
    img: 'product-07.png',
  },

  {
    title: 'Fermented Soybean Bio Mask',
    description: '5-in-1 face mask made with refreshing cellulose',
    price: 32,
    img: 'product-03.png',
  },

  {
    title: 'Clarifying Emulsion',
    description: 'with Bija Seed Oil',
    price: 32,
    img: 'product-06.png',
  },

  {
    title: 'Silk-Feel Cotton Puff',
    description: 'Soft and gentle cotton pads that will not irritate the skin.',
    price: 32,
    img: 'product-01.png',
  },

  {
    title: 'Pore Clearing Clay Mask 2X',
    description: 'With Super Volcanic Clusters',
    price: 32,
    img: 'product-08.png',
  },

  {
    title: 'Fermented Soybean Bio ',
    description: '5-in-1 face mask made with refreshing cellulose',
    price: 32,
    img: 'product-07.png',
  },

  {
    title: 'Lotus Glow Kit',
    description:
      "Reveal your skin's natural glow with our Lotus Glow Kit. Nourishing body and face creams with lotus extract provide deep hydration and rejuvenation. Suitable for all skin types. Vegan, cruelty-free, eco-friendly.",
    price: 120,
    img: 'product-09.png',
  },

  {
    title: 'Floral Essence Masks Sets',
    description:
      'Indulge in the beauty of nature with our Floral Essence Masks set. Each mask features a unique blend of flower extracts to hydrate and nourish your skin. Experience the essence of flowers in your skincare routine.',
    price: 120,
    img: 'product-10.png',
  },
].map((product, index) => ({ ...product, id: index + 1 }));

export const getProducts = (from = 0, count = 11) => {
  return [...products].slice(from, count);
};

export const getProductById = (id) => {
  return products.find((product) => Number(product.id) === Number(id));
};
