import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    category: [],
    brand: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFilters: (state, action) => {
      const { filters } = action.payload;
      state.filters = filters;
    },
  },
});

export const { addFilters } = userSlice.actions;

export default userSlice.reducer;

export const selectFilters = (state) => state.user.filters;
