import { AUTH_URL } from "../../constants";
import { apiSlice } from "./apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: ({username, email, password}) => ({
        url: AUTH_URL + '/register',
        method: 'POST',
        body: {username, email, password},
      }),
    }),
    login: build.mutation({
      query: ({email, password}) => ({
        url: AUTH_URL + '/login',
        method: 'POST',
        body: {email, password},
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: AUTH_URL + '/logout',
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;