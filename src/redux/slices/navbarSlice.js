import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  label: "",
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    changeLabel(state, action) {
      state.label = action.payload;
    },
  },
});

export const { changeLabel } = navbarSlice.actions;
export const selectLabel = (state) => state.navbar.label;

export default navbarSlice.reducer;
