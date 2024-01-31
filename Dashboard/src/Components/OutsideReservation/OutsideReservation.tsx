import { useState } from 'react'
import PassengerDetails from './PassengerDetails/PassengerDetails'
import SelectCar from './SelectCar/SelectCar'
import ServiceType from './ServiceType/ServiceType'
import { useSelector } from 'react-redux'
import Autocomplete from '../Reservation/AutomComplete'
import Reservation from '../Reservation/Reservation'
import Routing from './Routing/Routing'
import MainPassenger from './MainPassenger/MainPassenger'

const OutsideReservation = () => {

    const {passengerDetails, carDetails, serviceDetail} = useSelector((store:any) => store.outsideReservationSlice)
console.log('passenger:',passengerDetails, 'cardetails:', carDetails, 'serviceDetail:', serviceDetail);

    
    return (
    <div className=' px-[80px] gap-3 w-full '>
        <PassengerDetails/>
        <SelectCar/>
        <ServiceType />
        <Routing serviceDetail={serviceDetail}/>
        <MainPassenger/>
      
    </div>
  )
}

export default OutsideReservation