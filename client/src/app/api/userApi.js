import { USERS_URL } from "../../constants";
import { apiSlice } from "./apiSlice";

const userApi = apiSlice.injectEndpoints({
  tagTypes: ["Products"],
  endpoints: (build) => ({
    getproducts: build.query({
      query: () => ({
        url: USERS_URL + "/allProducts",
        method: "GET",
      }),
    }),
    getproductsbyId: build.query({
      query: (id) => ({
        url: USERS_URL + "/products/" + id,
        method: "GET",
      }),
    }),
    getproductsbyCategory: build.query({
      query: (category) => ({
        url: USERS_URL + "/products/category/" + category,
        method: "GET",
      }),
    }),
    getproductsbyBrand: build.query({
        query: (brand) => ({
          url: USERS_URL + "/products/brand/" + brand,
          method: "GET",
        }),
      }),
  }),
  overrideExisting: false,
});

export const { useGetproductsQuery, useGetproductsbyIdQuery,  useGetproductsbyCategoryQuery, useGetproductsbyBrandQuery} = userApi;
