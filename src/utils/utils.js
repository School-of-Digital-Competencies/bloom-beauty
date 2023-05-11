export function getProductImageUrl(img) {
  return new URL(`/src/assets/images/products/${img}`, import.meta.url).href;
}

export function getPostImageUrl(img) {
  return new URL(`/src/assets/images/posts/${img}`, import.meta.url).href;
}

export function getIconUrl(icon) {
  return new URL(`/src/assets/icons/${icon}`, import.meta.url).href;
}
