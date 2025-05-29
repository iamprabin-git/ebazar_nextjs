
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
      if(existingProduct) {
        // update quantity
        existingProduct.quantity++;
      }else {
        //   add product to cart

        state.products=[...state.products, {...product, quantity: 1}];
      }
      
    state.totalPrice = state.products.reduce((total, item) => {
        total= item.price + state.totalPrice;
        return total;
      }, 0);
    },
    removeFromCart: (state, action) => {},
    increaseQuantity: (state, action) => {
      const product = action.payload;
      state.products= state.products.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      state.totalPrice =state.totalPrice + product.price;
    },
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      if(product.quantity <= 1) return;
      state.products= state.products.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      state.totalPrice =state.totalPrice - product.price;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
