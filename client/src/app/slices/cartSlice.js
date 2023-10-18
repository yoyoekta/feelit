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
      const { name, brand, size, price, quantity, image, product } = action.payload;
      console.log(name, price, quantity, image, product);
      const item = state.cart.find((item) => item.product === product);
      if (item) {
        item.quantity++;
      }
      else {
        state.cart.push({...state.cart, name, brand, size, price, quantity, image, product});
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const { product } = action.payload;
      const item = state.cart.find((item) => item.product === product);
      if (item.quantity === 1) {
        state.cart = state.cart.filter((item) => item.product !== product);
      } else {
        item.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteFromCart: (state, action) => {
      const { product } = action.payload;
      state.cart = state.cart.filter((item) => item.product !== product);
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
