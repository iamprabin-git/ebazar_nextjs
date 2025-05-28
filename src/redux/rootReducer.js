import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import userPreferenceReducer from './userPreference/userPreferenceSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    userPreference: userPreferenceReducer,
    product: productReducer,

});
  export default rootReducer;