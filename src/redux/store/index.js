import { configureStore } from "@reduxjs/toolkit";
import mousePositionReducer from "../slices/mousePositionSlice";
import themeReducer from "../slices/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    mouse_position: mousePositionReducer,
  },
});

export default store;
