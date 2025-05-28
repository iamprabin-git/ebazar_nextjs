// redux/userPreference/userPreferenceSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { DARK_THEME, LIGHT_THEME } from "@/constants/theme";

const userPreferenceSlice = createSlice({
  name: "userPreference",
  initialState: {
    theme: LIGHT_THEME,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    },
  },
});

export const { toggleTheme } = userPreferenceSlice.actions;
export default userPreferenceSlice.reducer;
