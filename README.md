# Bloom Beauty

Workshop for EPAM EHU LR Students, May 11, 2023

## Figma design

[Figma design is here](<https://www.figma.com/file/LRqIlmNdqF7H81XO5O5xfs/Bloom-Beauty-e-commerce-shop-(%2Bi-interactive-prototype)-c%3A-(Community)>)

## Installation

- Clone repo to your machine
- Run `npm install` in console inside the folder `bloom-beauty`
- Run `npm run serve` and open `http://localhost:5173` in browser

## Project structure

- `src/` - contains all source code
  - `api` - contains database (products, blog posts, etc) and functions for accessing them
  - `assets` - contains all assets like images and icons
  - `components/` - contains all components that are used on pages like header, footer, product, hero, etc
    - `*.js` - contains component JavaScript code (should be a function returning HTML code as string entity)
    - `*.css` - contains component CSS code (should be imported directly in a component \*.js file)
  - `pages` - contains all pages (page is a set of components combined together and accessible via router)
  - `plugins` - contains all 3rd party code that is being connected to bloom-beauty web app
  - `utils` - contains special functions like getter for image/icon url that are being used across all components/pages
- `main.js` - web app main entry point
- `style.css` - global web app styles

## Students tasks

[Your tasks are here](https://gitlab.com/epam-ehu/bloom-beauty/-/issues)
