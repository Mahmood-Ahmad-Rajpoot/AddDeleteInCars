import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerName: "Add Comapny",
  route:'',
};
const headerSlice = createSlice({
  name: "modals",
  initialState,

  reducers: {
    setRoute:(state, action)=>{
      state.route = action.payload
    },
    setHeader: (state, action) => {
      console.log(action.payload);
      state.headerName = action.payload;
    },
  },
});

export default headerSlice.reducer;
export const {setHeader, setRoute} = headerSlice.actions;
