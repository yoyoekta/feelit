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
        return USERS_URL + `/allProducts?${params.toString()}`;
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
    getorders: build.query({
      query: (email) => ({
        url: USERS_URL + "/orders/" + email,
        method: "GET",
      }),
    }),
    postorder: build.mutation({
      query: ({method, items, total, address, user}) => ({
        url: USERS_URL + "/post/order/",
        method: "POST",
        body: {method, items, total, address, user},
      }),
    }),
    getorderById: build.query({
      query: (id) => ({
        url: USERS_URL + "/orders/order/" + id,
        method: "GET",
      }),
    }),
    completeCheckout: build.mutation({
      query: (orderDetails) => ({
        url: "/checkout",
        method: "POST",
        body: JSON.stringify(orderDetails),
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
