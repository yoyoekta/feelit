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
    getfilteredProds: build.query({
      query: (filters) => {
        const params = new URLSearchParams();
        for (const key in filters) {
          if (filters[key]) {
            params.append(key, filters[key]);
          }
        }
        // console.log("params are" + params);
        return `/users/allProducts?${params.toString()}`;
      },
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

export const {
  useGetproductsQuery,
  useGetfilteredProdsQuery,
  useGetproductsbyIdQuery,
  useGetproductsbyCategoryQuery,
  useGetproductsbyBrandQuery,
  useGetordersQuery,
  usePostorderMutation,
  useGetorderByIdQuery,
  useCompleteCheckoutMutation,
} = userApi;
