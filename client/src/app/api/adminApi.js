import { apiSlice } from "./apiSlice";

const adminApi = apiSlice.injectEndpoints({
  tagTypes: ["Products"],
  endpoints: (build) => ({
    addproduct: build.mutation({
      query: ({name, category, brand, description, image, price, size, qty}) => ({
        url: 'admin/addProduct',
        method: 'POST',
        body: {name, category, brand, description, image, price, size, qty},
      }),
    }),
    editproduct: build.mutation({
      query: ({id, name, category, brand, description, image, price, size, qty}) => ({
        url: 'admin/edit/' + id,
        method: 'PUT',
        body: {name, category, brand, description, image, price, size, qty},
      })
    }),
    deleteproduct: build.mutation({
      query: (id) => ({
        url: 'admin/delete/' + id,
        method: 'DELETE',
      })
    }),
    adduser: build.mutation({
      query: ({username, email, password}) => ({
        url: 'admin/addUser',
        method: 'POST',
        body: {username, email, password},
      }),
    }),
    getusers: build.query({
      query: () => ({
        url: 'admin/allUsers',
        method: 'GET',
      }),
    }),
    getallorders: build.query({
      query: () => ({
        url: 'admin/allOrders',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useAddproductMutation, useEditproductMutation, useDeleteproductMutation, useAdduserMutation, useGetusersQuery, useGetallordersQuery } = adminApi;