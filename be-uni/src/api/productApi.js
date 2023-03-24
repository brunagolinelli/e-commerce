import axios from "axios";

export async function fetchProducts() {
  try {
    const res = await axios.get(
      "https://api.beuni.com.br/atlas/brands/v2/products?q=&category=&min=0&max=99999&sortBy=featured&page=1&perPage=50"
    );
    return res.data.products;
  } catch (e) {
    return [];
  }
}
