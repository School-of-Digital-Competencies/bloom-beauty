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
].map((product, index) => ({ ...product, id: index + 1 }));

export const getProducts = (from = 0, count = 4) => {
  return [...products].slice(from, count);
};

export const getProductById = (id) => {
  return products.find((product) => Number(product.id) === Number(id));
};
