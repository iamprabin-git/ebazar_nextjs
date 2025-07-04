import { updateUser } from "@/api/users";
import { loginUser, registerUser } from "./authActions";

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
        updateUserData: (state, action) => {
            state.user = action.payload;
        },
       logoutUser: () => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
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
        })
        .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        });
    
    },
});

export const { logoutUser, updateUserData } = authSlice.actions;
export default authSlice.reducer;