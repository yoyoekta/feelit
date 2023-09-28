import { apiSlice } from "./apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: ({username, email, password}) => ({
        url: 'auth/register',
        method: 'POST',
        body: {username, email, password},
      }),
    }),
    login: build.mutation({
      query: ({email, password}) => ({
        url: 'auth/login',
        method: 'POST',
        body: {email, password},
      }),
    }),
    logout: build.mutation({
      query: () => ({
        url: 'auth/logout',
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;