import { configureStore } from "@reduxjs/toolkit";
import carsDataSlice from "./features/carsDataSlice";
import modalsSlice from "./features/modalsSlice";
import dispatchSlice from "./features/dispatchSlice";
import headerSlice from "./features/headerSlice";
import locationSlice from "./features/locationSlice";
import outsideReservation from "./features/outsideReservationSlice";

export const store = configureStore({
  reducer: {
    modals: modalsSlice,
    carDataSlice: carsDataSlice,
    dispatchSlice: dispatchSlice,
    headerSlice: headerSlice,
    locationSlice: locationSlice,
    outsideReservationSlice: outsideReservation,
  },
});
