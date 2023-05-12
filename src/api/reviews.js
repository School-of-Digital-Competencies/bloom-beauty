export let reviewArray = [
  {
    productId: 1,
    imgUrl: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png',
    rating: 4,
    username: 'Cathy K.',
    isVerified: false,
    title: 'VERY MOISTURIZING',
    description: 'I didn’t know how effective the gel cream would be since I was skeptical of the texture, but my sensitive skin loved it and I didn’t even break out when I first started using it. Love it!',
    attachments: [

    ]
  },
  {
    productId: 1,
    imgUrl: 'https://im.indiatimes.in/content/2022/Feb/AMP-44_61fb8b8840826.jpg?w=820&h=540&cc=1',
    rating: 5,
    username: 'Vlad',
    isVerified: false,
    title: 'VERY MOISTURIZING',
    description: 'I didn’t know how effective the gel cream would be since I was skeptical of the texture, but my sensitive skin loved it and I didn’t even break out when I first started using it. Love it!',
    attachments: [

    ]
  },
  {
    productId: 2,
    imgUrl: 'https://im.indiatimes.in/content/2022/Feb/AMP-44_61fb8b8840826.jpg?w=820&h=540&cc=1',
    rating: 5,
    username: 'Vlad',
    isVerified: false,
    title: 'VERY MOISTURIZING',
    description: 'I didn’t know how effective the gel cream would be since I was skeptical of the texture, but my sensitive skin loved it and I didn’t even break out when I first started using it. Love it!',
    attachments: [

    ]
  }
]

reviewArray = reviewArray.map((post, index) => ({ ...post, id: index + 1 }));
