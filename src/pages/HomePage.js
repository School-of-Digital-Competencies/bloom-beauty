import { Hero } from '../components/hero/hero';
import { getProducts } from '../api/products';
import { ProductCardLarge } from '../components/product-card-large';

import { Quiz } from '../components/quiz/quiz';
import { Share } from '../components/share/share';
import {Cards} from "../components/cards/cards";

export const HomePage = () => {
  const products = getProducts(5, 7);
  const headings = {
    sectionOne: 'New Arrivals',
    sectionTwo: 'Best Sellers',
  }

  const dataSectionOne = [
    {
      image:  'img-1.png',
      title: 'All-Around Safe Block Essence Sun SPF45+',
      description: 'All Around Safe Block Sun Milk SPF50+/PA+++',
      price: '$32.00'
    },
    {
      image:  'img-2.png',
      title: 'Super Aqua Snail Cream',
      description: 'Skin Reinforcement Gel Type Cream',
      price: '$32.00'
    },
    {
      image:  'img-3.png',
      title: 'Clarifying Emulsion',
      description: 'with Bija Seed Oil',
      price: '$32.00'
    },
    {
      image:  'img-4.png',
      title: 'Dewy Glow Jelly Cream',
      description: 'With Jeju Cherry Blossom',
      price: '$32.00'
    },
  ];
  const dataSectionTwo = [
    {
      image:  'img-5.png',
      title: 'All-Around Safe Block Essence Sun SPF45+',
      description: 'All Around Safe Block Sun Milk SPF50+/PA+++',
      price: '$32.00'
    },
    {
      image:  'img-6.png',
      title: 'Super Aqua Snail Cream',
      description: 'Skin Reinforcement Gel Type Cream',
      price: '$32.00'
    },
    {
      image:  'img-7.png',
      title: 'Clarifying Emulsion',
      description: 'with Bija Seed Oil',
      price: '$32.00'
    },
    {
      image:  'img-8.png',
      title: 'Dewy Glow Jelly Cream',
      description: 'With Jeju Cherry Blossom',
      price: '$32.00'
    },
  ]

  return `
    ${Hero()}
    ${Cards(headings.sectionOne, dataSectionOne)}
    ${Cards(headings.sectionTwo, dataSectionTwo)}
    ${products.map(el => ProductCardLarge(el))}
    ${Blog()}
    ${Quiz()}
    ${Share()}
  `;
};
