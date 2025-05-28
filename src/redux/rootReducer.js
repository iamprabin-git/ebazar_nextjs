import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import userPreferenceReducer from './userPreference/userPreferenceSlice';
import cartReducer from './cart/cartSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    userPreference: userPreferenceReducer,
    product: productReducer,

});
  export default rootReducer;