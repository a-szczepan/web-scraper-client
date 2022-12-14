import axios from "axios";

const host = "https://web-scraper-server.onrender.com";

export const getProducts = async (filters, page) => {
  return await axios.get(`${host}/products`, {
    params: {
      filters,
      page,
    },
  });
};

export const getBrands = async () => {
  return await axios.get(
    "https://www.rossmann.pl/products/api/Products/brands",
    {
      params: {
        CategoryId: 8656,
      },
    }
  );
};

export const getCategories = async () => {
  return await axios.get(`${host}/product/categories`);
};
