import { login } from "@/api/auth";
import { act } from "react";
import { loginUser } from "./authActions";

const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    user: null,
    error: null,
    loading: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       logoutUser: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    
    },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;