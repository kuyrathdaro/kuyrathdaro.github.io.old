import { createSlice } from "@reduxjs/toolkit";
import { ThemeData } from "../../utils/constants";

const initialState = {
  bg_color: ThemeData.light.bg,
  cursor_color: ThemeData.light.cursor_color
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeBgColor(state, action) {
      if (action.payload == "dark") {
        state.bg_color = ThemeData.light.bg;
      } else {
        state.bg_color = ThemeData.dark.bg;
      }
    },
    changeCursorColor(state, action) {
      if (action.payload == "dark") {
        state.cursor_color = ThemeData.light.cursor_color;
      } else {
        state.cursor_color = ThemeData.dark.cursor_color;
      }
    }
  },
});

export const { changeCursorColor, changeBgColor } = themeSlice.actions;
export const selectBgColor = state => state.theme.bg_color;
export const selectCursorColor = state => state.theme.cursor_color;

export default themeSlice.reducer;
