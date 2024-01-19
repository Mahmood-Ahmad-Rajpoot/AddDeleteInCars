/* global google */
import React, { useEffect, useRef, useState } from "react";

import "./Styles.css";
import { Button } from "antd";
interface dataType {
  lat: number;
  lng: number;
}
interface AutoCompleteProps {
  setPickUpLocation: (data: any) => void;
  setDropOffLocation: (data: any) => void;
}
const AutoCompletePlaces: React.FC<AutoCompleteProps> = ({
  setPickUpLocation,
  setDropOffLocation,
}) => {
   const pickUpInputRef = useRef<any>();
  const dropOffInputRef = useRef<any>();
const [start, setStart] = useState({ lat:0, lng:0 }) ; 
const [end, setEnd] = useState({ lat:0, lng:0 })  ;
console.log('start:end::',start, end);

// const [start]
useEffect(() => {
  
  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["geocode", "establishment"],
  };
  const pickUpAutoComplete = new window.google.maps.places.Autocomplete(
    pickUpInputRef.current,
    options
    );
 
console.log('run once?');
  pickUpAutoComplete.addListener("place_changed", async () => {
    const place = await pickUpAutoComplete.getPlace();
    if (place.geometry && place.geometry.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      if (!isNaN(lat) && !isNaN(lng)) {
        setStart({ lat:lat, lng:lng });
      } else {
        console.error("Invalid coordinates");
      }
    }
  });
  
   const dropOffAutoComplete = new window.google.maps.places.Autocomplete(
    dropOffInputRef.current,
    options
  );

  dropOffAutoComplete.addListener("place_changed", async () => {
    const place = await dropOffAutoComplete.getPlace();
    if (place.geometry && place.geometry.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      if (!isNaN(lat) && !isNaN(lng)) {
        setEnd({ lat:lat, lng:lng });
      } else {
        console.error("Invalid coordinates");
      }
    }
  });
}, [start, end]);

  return (
    <div className="w-full">
      <label className="text-[1rem] font-semibold mb-3">Enter Pick Up Point</label>
      <input
        className="border-2  px-3 rounded-lg h-[50px] w-full focus:!border-blue-500 mb-5"
        placeholder="Enter PickUp Location"
        ref={pickUpInputRef}
      />
      <label className="text-[1rem] font-semibold mb-3">Enter Drop Off Point</label>
      <input
        className="border-2 mb-5 px-3 rounded-lg h-[50px] w-full focus:!border-blue-500"
        placeholder="Enter DropOff Location"
        ref={dropOffInputRef}
      />
      <Button className="bg-blue-600 text-white w-full" onClick={()=>{
        setPickUpLocation(start)
        setDropOffLocation(end)
      }}>Start Journey</Button>
    </div>
  );
};

export default AutoCompletePlaces;
