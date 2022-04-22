import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  x: 0,
  y: 0,
};

const mousePositionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    changePosition(state, action) {
      state.position = action.payload;
    },
  },
});

export const { changePosition } = mousePositionSlice.actions;

export const selectPosition = (state) => {
  state.position.x, state.position.y;
};

export default mousePositionSlice.reducer;
