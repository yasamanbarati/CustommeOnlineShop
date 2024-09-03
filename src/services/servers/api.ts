import axios from "axios";

export const getCategoriesInfo = async () => {
  return axios
    .get("https://668a70402c68eaf3211ccee5.mockapi.io/online_shop/api/category")
    .then((res) => {
      return res.data;
    });
};

export const getAllProduct = async () => {
  return axios
    .get(
      "https://668a70402c68eaf3211ccee5.mockapi.io/online_shop/api//products"
    )
    .then((res) => {
      return res.data;
    });
};

export const getCategoriesNameById = async (id: string) => {
  return axios
    .get(
      `https://668a70402c68eaf3211ccee5.mockapi.io/online_shop/api/category/${id}`
    )
    .then((res) => {
      return res.data.name;
    });
};
