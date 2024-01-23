/* global google */
import   { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setLocations } from "../../features/locationSlice";
import { Button } from "antd";

 

const AutoCompletePlaces = () => {
  const dispatch = useDispatch();
  const pickUpInputRef = useRef<any>();
  const dropOffInputRef = useRef<any>();
  const [start, setStart] = useState({});
  const [end, setEnd] = useState({});
 
  useEffect(() => {
    const options = {
      fields: ["address_components", "geometry", "icon", "name"],
      types: ["geocode", "establishment"],
    };

    // Check if Google Maps API is available
    if (window.google && window.google.maps) {
       const pickUpAutoComplete = new window.google.maps.places.Autocomplete(
        pickUpInputRef.current,
        options
      );

      pickUpAutoComplete.addListener("place_changed", async () => {
        const place = await pickUpAutoComplete.getPlace();
        if (place.geometry && place.geometry.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          if (!isNaN(lat) && !isNaN(lng)) {
            setStart({ lat: lat, lng: lng });
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
            setEnd({ lat: lat, lng: lng });
          } else {
            console.error("Invalid coordinates");
          }
        }
      });
    } else {
      console.error("Google Maps API not available.logged");
    }
  }, []);

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
      <Button
        className="bg-blue-600 text-white w-full"
        onClick={() => {
          dispatch(setLocations({ start: start, end: end }));
        }}
      >
        Start Journey
      </Button>
    </div>
  );
};

export default AutoCompletePlaces;
