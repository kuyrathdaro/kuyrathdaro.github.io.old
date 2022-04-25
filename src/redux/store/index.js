import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import navbarReducer from "../slices/navbarSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    navbar: navbarReducer,
  },
});

export default store;
