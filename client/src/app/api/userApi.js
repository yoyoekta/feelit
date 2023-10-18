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
    getorders: build.query({
      query: (email) => ({
        url: "/users/orders/" + email,
        method: "GET",
      }),
    }),
    postorder: build.mutation({
      query: ({method, items, total, address, user}) => ({
        url: "/users/post/order/",
        method: "POST",
        body: {method, items, total, address, user},
      }),
    }),
    getorderById: build.query({
      query: (id) => ({
        url: "/users/orders/order/" + id,
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
