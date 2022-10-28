import axios from "axios";

const host = "https://aszczepanczyk-scraper-server.herokuapp.com";

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
