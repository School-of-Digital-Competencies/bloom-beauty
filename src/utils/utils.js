export function getProductImageUrl(path) {
  return new URL(`/src/assets/images/products/${path}`, import.meta.url).href;
}
