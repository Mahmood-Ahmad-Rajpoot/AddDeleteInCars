/* global google */
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
//  interface
interface ObjectTypes {
  location: string;
  stopover: boolean;
}

interface AutocompleteProps {
  setDestination: (location: ObjectTypes[]) => void;
  setOrigin: (location: string) => void;
  destination: any;
}

// component
const AddStops: React.FC<AutocompleteProps> = ({
  setDestination,
  setOrigin,
  destination,
}) => {
    console.log(destination);
    
  // hooks
  const pickUpInputRef = useRef<any>();
  const dropOffInputRef = useRef<any>();
  const [value, setValue] = useState<string>("");
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
        className="border-2  px-3 rounded-lg h-[50px] w-full    mb-3 focus:outline-none"
        placeholder="Enter PickUp Location"
        ref={pickUpInputRef}
      />

      <label className="text-[1rem] font-semibold mb-3">
        Enter Drop off Stop(s)
      </label>
      {destination.map((v:any, ind:number) => {
        return (
          <div
            key={ind}
            className="flex border-2 rounded-lg items-center justify-between mb-3 h-[50px] "
          >
            <input disabled
              className="focus:border-transparent grow px-3 rounded-lg w-ful border-gray-300 focus:outline-none"
              placeholder={destination[ind].location}
            />
            <Button
              shape="circle"
              className={` rounded-full m-1 pb-1  px-3 bg-transparent border-none w-auto h-[30px] text-white hover:!text-white hover:border-none  `}
              onClick={() => 
               { setDestination(
                  destination.filter((val: any) => {           
                    return val.location !== v.location })
                )
            }
              }
            >
              <CancelIcon className="text-orange-400" />
            </Button>
          </div>
        );
      })}

      <div className="flex border-2 rounded-lg items-center justify-between mb-3 h-[50px] ">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={(e) => {
            setValue(e.target.value);
          }}
          className="focus:border-transparent grow px-3 rounded-lg w-ful border-gray-300 focus:outline-none"
          placeholder="Enter Stop"
          ref={dropOffInputRef}
        />
        <Button
          disabled={value === ""}
          className={` disabled:border-orange-400 rounded-full m-1 pb-1   px-3   bg-orange-400  hover:bg-orange-300 w-auto h-[30px] text-white hover:!text-white hover:border-none  `}
          onClick={() => {
            setDestination([
              ...destination,
              { location: value, stopover: true },
            ]);
            setValue('')
          }}
        >
          Add Stop
        </Button>
      </div>
    </div>
  );
};

export default AddStops;
