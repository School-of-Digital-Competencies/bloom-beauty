const posts = [
  {
    title: 'Cracking the Coconut Code',
    description: 'long',
    img: 'post-01.png',
    tags: ['Tips', 'AntiAging', 'Ingredients', 'Organic', 'EcoFriendly'],
    createdDate: 'January 20, 2023',
  },

  {
    title: 'Bloom Beauty Best of 2023',
    description: '5-in-1',
    img: 'post-02.png',
    tags: ['Tips', 'AntiAging', 'Ingredients'],
    createdDate: 'January 19, 2023',
  },

  {
    title: '7 Skin Care Habits to Break Now',
    description: 'fdlsd lsdl sdmsl',
    img: 'post-03.png',
    tags: ['Organic', 'EcoFriendly'],
    createdDate: 'January 12, 2023',
  },

  {
    title: 'Getting Your Skin Care Back on Track',
    description: 'fsdg',
    img: 'post-04.png',
    tags: ['Tips', 'AntiAging', 'Ingredients', 'Organic', 'EcoFriendly'],
    createdDate: 'January 10, 2023',
  },
].map((post, index) => ({ ...post, id: index + 1 }));

export const getPosts = (from = 0, count = 4) => {
  return [...posts].slice(from, count);
};

export const getPostById = (id) => {
  return posts.find((post) => Number(post.id) === Number(id));
};
