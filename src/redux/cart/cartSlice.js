import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }

      // Correct total price calculation
      state.totalPrice = state.products.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    removeFromCart: (state, action) => {
      const product = action.payload;
      state.products = state.products.filter((item) => item.id !== product.id);

      // Recalculate totalPrice
      state.totalPrice = state.products.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    increaseQuantity: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
        state.totalPrice += product.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find((item) => item.id === product.id);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
        state.totalPrice -= product.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;