import { apiSlice } from "./apiSlice";

const userApi = apiSlice.injectEndpoints({
  tagTypes: ["Products"],
  endpoints: (build) => ({
    getproducts: build.query({
      query: () => ({
        url: "/users/allProducts",
        method: "GET",
      }),
    }),
    getproductsbyId: build.query({
      query: (id) => ({
        url: "/users/products/" + id,
        method: "GET",
      }),
    }),
    getproductsbyCategory: build.query({
      query: (category) => ({
        url: "/users/products/category/" + category,
        method: "GET",
      }),
    }),
    getproductsbyBrand: build.query({
        query: (brand) => ({
          url: "/users/products/brand/" + brand,
          method: "GET",
        }),
      }),
  }),
  overrideExisting: false,
});

export const { useGetproductsQuery, useGetproductsbyIdQuery,  useGetproductsbyCategoryQuery, useGetproductsbyBrandQuery} = userApi;
