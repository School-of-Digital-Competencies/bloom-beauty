const blossomed = [
  {
    title: 'Dewy Cream',
    description: 'With jeju Cherry blossom',
    img: 'd1.png',
  },

  {
    title: 'Fermented',
    description: '5-in-1',
    img: 'd2.png',
  },

  {
    title: 'Cream',
    description: 'fdlsd lsdl sdmsl',
    img: 'd3.png',
  },

  {
    title: 'Fer',
    description: 'fsdg',
    img: 'd4.png',
  },
  {
    title: 'Per',
    description: 'per per per',
    img: 'u1.png',
  },
  {
    title: 'Per',
    description: 'per per per',
    img: 'u2.png',
  },
  {
    title: 'Per',
    description: 'per per per',
    img: 'u3.png',
  },
  {
    title: 'Per',
    description: 'per per per',
    img: 'u4.png',
  },
].map((product, index) => ({ ...product, id: index + 1 }));

export const getBlossomed = (from = 0, count = 6) => {
  return [...blossomed].slice(from, count);
};

export const getBlossomedById = (id) => {
  return blossomed.find((product) => Number(product.id) === Number(id));
};
