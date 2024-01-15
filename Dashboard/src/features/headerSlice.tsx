import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerName: "Add Comapny",
};
const headerSlice = createSlice({
  name: "modals",
  initialState,

  reducers: {
    setHeader: (state, action) => {
      console.log(action.payload);

      state.headerName = action.payload;
    },
  },
});

export default headerSlice.reducer;
export const {setHeader} = headerSlice.actions;
