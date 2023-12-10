import { ADMIN_URL } from "../../constants";
import { apiSlice } from "./apiSlice";

const adminApi = apiSlice.injectEndpoints({
  tagTypes: ["Products"],
  endpoints: (build) => ({
    addproduct: build.mutation({
      query: ({name, category, brand, description, image, price, size, qty}) => ({
        url: ADMIN_URL + '/addProduct',
        method: 'POST',
        body: {name, category, brand, description, image, price, size, qty},
      }),
    }),
    editproduct: build.mutation({
      query: ({id, name, category, brand, description, image, price, size, qty}) => ({
        url: ADMIN_URL + '/edit/' + id,
        method: 'PUT',
        body: {name, category, brand, description, image, price, size, qty},
      })
    }),
    deleteproduct: build.mutation({
      query: (id) => ({
        url: ADMIN_URL + '/delete/' + id,
        method: 'DELETE',
      })
    }),
    adduser: build.mutation({
      query: ({username, email, password}) => ({
        url: ADMIN_URL + '/addUser',
        method: 'POST',
        body: {username, email, password},
      }),
    }),
    getusers: build.query({
      query: () => ({
        url: ADMIN_URL + '/allUsers',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useAddproductMutation, useEditproductMutation, useDeleteproductMutation, useAdduserMutation, useGetusersQuery } = adminApi;