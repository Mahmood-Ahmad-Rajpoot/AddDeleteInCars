import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startLocation: {},
  endLocation: {},
};
const locationSlice = createSlice({
  name: "modals",
  initialState,

  reducers: {
    setLocations: (state, action) => {
      const { start, end } = action.payload;
      state.startLocation = start;
      state.endLocation = end;
    },
  },
});

export default locationSlice.reducer;
export const { setLocations } = locationSlice.actions;
