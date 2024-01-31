/*
    const [passengerDetails, setPassengerDetails] = useState({date:'',time:'',gratuity:0, persons:0, luggage:0})
    const [carDetails, setCarDetails] = useState({car_type:'',person_capacity:0, luggage_capacity:0})
    const [serviceDetail, setServiceDetail] = useState('')
   
    */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passengerDetails: {
    date: "",
    time: "",
    persons: 0,
    luggage: 0,
    gratuity: 0,
  },
  serviceDetail: "",
  carDetails: {
    car_type: "",
    luggage_capacity: 0,
    passenger_capacity: 0,
  },
};
const outsideReservationSlice = createSlice({
  name: "modals",
  initialState,

  reducers: {
    setPassengerDetails: (state, action) => {
      const { date, time, persons, luggage, gratuity } = action.payload;
      date
        ? (state.passengerDetails.date = date)
        : time
        ? (state.passengerDetails.time = time)
        : persons
        ? (state.passengerDetails.persons = persons)
        : luggage
        ? (state.passengerDetails.luggage = luggage)
        : (state.passengerDetails.gratuity = gratuity);
    },
    setServiceDetail: (state, action) => {
      state.serviceDetail = action.payload;
    },
    setCarDetails: (state, action) => {
      console.log("setcardetails:", action.payload);

      const { car_type, luggage_capacity, passenger_capacity } = action.payload;
      state.carDetails.car_type = car_type;
      state.carDetails.luggage_capacity = luggage_capacity;
      state.carDetails.passenger_capacity = passenger_capacity;
    },
  },
});

export default outsideReservationSlice.reducer;
export const { setPassengerDetails, setCarDetails, setServiceDetail } =
  outsideReservationSlice.actions;
