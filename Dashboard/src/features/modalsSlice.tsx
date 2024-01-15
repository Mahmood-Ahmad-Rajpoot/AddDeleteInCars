import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    DeleteModal: {isDeleteModal:false, deleteItem:{}},
  EditModal: {isEditModal:false, editItem:{}},
  isAddCarModal:false,
  
};
const modals = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setAddCarModal:(state)=>{
      state.isAddCarModal = !state.isAddCarModal;


    },
    setDeleteModal: (state,action) => {
        state.DeleteModal.deleteItem = action.payload
      state.DeleteModal.isDeleteModal = !state.DeleteModal.isDeleteModal;
    },
    setEditModal: (state,action) => {
        state.EditModal.editItem = action.payload

      state.EditModal.isEditModal = !state.EditModal.isEditModal;
    },
  },
});

export default modals.reducer;
export const { setDeleteModal, setEditModal, setAddCarModal } = modals.actions;
