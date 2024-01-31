// zustand
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const modalsStore = create()(
  immer((set) => ({
    // states
    DeleteModal: { isDeleteModal: false, deleteItem: {} },
    EditModal: { isEditModal: false, editItem: {} },
    isAddCarModal: false,

    // actions
    setAddCarModal: () => {
      set((state: any) => {
        // console.log('clicked:',state.isAddCarModal);

        state.isAddCarModal = !state.isAddCarModal;
      });
    },

    setDeleteCarModal: (data: any) =>
      set((state: any) => {
        // state.DeleteModal = {
        //   deleteItem: data,
        //   isDeleteModal: !state.DeleteModal.isDeleteModal,
        // };
        console.log('dlele')
        state.DeleteModal.deleteItem = data;
        state.DeleteModal.isDeleteModal = !state.DeleteModal.isDeleteModal;
      }),

    setEditCarModal: (data: any) =>
      set((state: any) => {
        // state.EditModal = {
        //   editItem: data,
        //   isEditModal: !state.EditModal.isEditModal,
        // };
        state.EditModal.editItem= data
        state.EditModal.isEditModal= !state.EditModal.isEditModal
      }),

  }))
);
//
