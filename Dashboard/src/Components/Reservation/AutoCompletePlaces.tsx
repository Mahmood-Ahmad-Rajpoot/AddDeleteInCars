/* global google */
import { useEffect, useRef } from "react";

//  interface
interface AutocompleteProps {
  setDestination: (location: string) => void;
  setOrigin: (location: string) => void;
}

// component
const AutoCompletePlaces: React.FC<AutocompleteProps> = ({
  setDestination,
  setOrigin,
}) => {
  // hooks
  const pickUpInputRef = useRef<any>();
  const dropOffInputRef = useRef<any>();

  // useEffect
  useEffect(() => {
    const options = {
      fields: ["address_components", "geometry", "icon", "name"],
      types: ["geocode", "establishment"],
    };

    // Check if Google Maps API is available
    if (window.google && window.google.maps) {
      // pick up location getter
      new window.google.maps.places.Autocomplete(
        pickUpInputRef.current,
        options
      );

      // dropOff location getter
      new window.google.maps.places.Autocomplete(
        dropOffInputRef.current,
        options
      );
    }
  }, []);

  // return
  return (
    <div className="w-full">
      <label className="text-[1rem] font-semibold mb-3">
        Enter Pick Up Point
      </label>
      <input
        onBlur={(e) => setOrigin(e.target.value)}
        className="border-2  px-3 rounded-lg h-[50px] w-full focus:!border-blue-500 mb-5"
        placeholder="Enter PickUp Location"
        ref={pickUpInputRef}
      />
      <label className="text-[1rem] font-semibold mb-3">
        Enter Drop Off Point
      </label>
      <input
        onBlur={( e ) => setDestination(e.target.value)}
        className="border-2 mb-5 px-3 rounded-lg h-[50px] w-full focus:!border-blue-500"
        placeholder="Enter DropOff Location"
        ref={dropOffInputRef}
      />
       
    </div>
  );
};

export default AutoCompletePlaces;
