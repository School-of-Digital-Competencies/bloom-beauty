const posts = [
  {
    title: 'Cracking the Coconut Code',
    description:
      'Few ingredients have been debated as much in recent years as coconut oil. Is it or is it not the “miracle product” so many claim it to be? We answer: Like anything, it depends. One of our newest brands, Solved Skincare, puts coconut oil front and center, so we wanted to give you the facts to decide how your specific skin type can reap its rewards.Keep reading below as we take a deep dive into the nut.',
    img: 'post-01.jpg',
    tags: ['Tips', 'AntiAging', 'Ingredients', 'Organic', 'EcoFriendly'],
    createdDate: 'January 20, 2023',
  },

  {
    title: 'Bloom Beauty Best of 2023',
    description:
      'Can you believe we’re here? Another year is wrapping up and we’re feeling celebratory, wanting to share our list for the best products of 2023. There are so many ways to categorize what is already a collection of our favorite brands , but ultimately we decided that by focusing on HOW CLEAN THE INGREDIENTS ARE, and HOW EFFECTIVE THE FORMULAS, you’ll be able to find something streamlined for glowing skin success.',
    img: 'post-02.jpg',
    tags: ['Tips', 'AntiAging', 'Ingredients'],
    createdDate: 'January 19, 2023',
  },

  {
    title: '7 Skin Care Habits to Break Now',
    description:
      'Great skincare is a long game—it doesn’t happen overnight, but little steps are made (nightly!) to get and keep your skin at its most radiant state. Today, we are uncovering some of our top small but powerful habits that can make a world of difference with your skin.You do not need to focus on all seven immediately, so take heart. Use this as a checklist. If your skincare has stalled, then it might be time to stop these.',
    img: 'post-03.jpg',
    tags: ['Organic', 'EcoFriendly'],
    createdDate: 'January 12, 2023',
  },

  {
    title: 'Getting Your Skin Care Back on Track',
    description:
      'With so many novel and ever-changing concerns occupying precious brain space lately, you’re forgiven if maintaining a multi-step skincare routine hasn’t been at the top of your list. Add to that list stress, poor sleep and higher sugar or junk food intake, and right now your skin is probably in need of a little (or a major) reset.You’ve come to the right place! To get back into a rhythm with your skincare routine, we’re sharing our favorite “start here” tips below.',
    img: 'post-04.jpg',
    tags: ['Tips', 'AntiAging', 'Ingredients', 'Organic', 'EcoFriendly'],
    createdDate: 'January 10, 2023',
  },
].map((post, index) => ({ ...post, id: index + 1 }));

const API_URL = 'https://dummyjson.com/posts';

export const getPosts = async () => {
  try {
    const res = await fetch(`${API_URL}`);
      const data = await res.json();
      return data.posts
  }
  catch (error){
    console.log(error)
    return null
  }
};


export const getPostById = id => {
  return posts.find(post => Number(post.id) === Number(id));
};

export const getBlogPosts = (from = 0, count = 3) => {
  return [...posts].slice(from, count);
};
