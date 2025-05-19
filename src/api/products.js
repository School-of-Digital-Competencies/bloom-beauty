const API_URL = 'https://dummyjson.com/products';

export const getProducts = async (skip = 0, limit = 11) => {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}&skip=${skip}`);
    const data = await response.json();

    return data.products;
  } catch (error) {
    console.error('Error fetching products:', error);

    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching product:', error);

    return null;
  }
};
