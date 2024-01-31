import { create } from "zustand";

export const usePersonStore = create((set) => ({
  firstName: "",
  lastName: "",
  setFirstName: (firstName: string) => set((state:any) => {
    console.log('state:',state)
     return {firstName} }),
  setLastName: (lastName: string) => set(() => ({ lastName })),
}));
