import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const { cart } = action.payload;
      state.cart = cart;
    },
    addToCart: (state, action) => {
      const { product } = action.payload;
      console.log({product})
      const item = state.cart.find((item) => item._id === product._id);
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      const item = state.cart.find((item) => item._id === product._id);
      if (item.quantity === 1) {
        state.cart = state.cart.filter((item) => item._id !== product._id);
      } else {
        item.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteFromCart: (state, action) => {
      const { product } = action.payload;
      state.cart = state.cart.filter((item) => item._id !== product._id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    emptyCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { setCart, addToCart, removeFromCart, deleteFromCart, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state) => state.cart.cart;
export const selectTotal = (state) => state.cart.total;
export const selectTotalItems = (state) => state.cart.totalItems;
