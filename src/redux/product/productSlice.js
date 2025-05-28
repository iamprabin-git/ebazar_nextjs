import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    deleteStatus: false,
  },
  reducers: {
    setDeleted: (state, action) => {
      state.deleteStatus = action.payload;
    },
  },
});
export const { setDeleted } = productSlice.actions;
export default productSlice.reducer;
