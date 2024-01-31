/* global google */
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
//  interface

interface AutocompleteProps {
  HourlyLocal: string;
  setDestination: (location: any) => void;
  setOrigin: (location: string) => void;
  destination: any;
  placeholders:any;
}

// component
const Autocomplete: React.FC<AutocompleteProps> = ({
  HourlyLocal,
  setDestination,
  setOrigin,
  destination,
  placeholders
}) => {
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

  const inputStyles = `bg-transparent focus:outline-none px-3 w-full`;
  // return
  return (
    <div className="w-full">
       <div className="flex  bg-white shadow-[0_5px_20px_rgb(0,0,0,0.12)] items-center justify-between mb-3 h-[50px] ">
          <span className="text-[1.1rem] font-semibold min-w-[150px] text-blue-950 h-[50px] flex items-center justify-center   border-r-2">
            From:
          </span>
      <input
        onBlur={(e) => setOrigin(e.target.value)}
        className={inputStyles}
        placeholder={placeholders.from}
        ref={pickUpInputRef}
      />
      </div>

      {HourlyLocal === "hourly" &&
        destination.map((v: any, ind: number) => {
          return (
            <div key={ind} className="flex  bg-white shadow-[0_5px_20px_rgb(0,0,0,0.12)] items-center justify-between mb-3 h-[50px] ">
<span className="text-[1.1rem] font-semibold min-w-[150px] text-blue-950 h-[50px] flex items-center justify-center   border-r-2">
            Stop {ind+1}:
          </span>
              
              <input
                disabled
                className={inputStyles}
                placeholder={destination[ind].location}
              />
              <Button
                shape="circle"
                className={` rounded-full m-1 pb-1  px-3 bg-transparent border-none w-auto h-[30px] text-white hover:!text-white hover:border-none  `}
                onClick={() => {
                  setDestination(
                    destination.filter((val: any) => {
                      return val.location !== v.location;
                    })
                  );
                }}
              >
                <CancelIcon className="text-orange-400" />
              </Button>
            </div>
          );
        })}

      {HourlyLocal === "local" ? (
        <div className="flex  bg-white shadow-[0_5px_20px_rgb(0,0,0,0.12)] items-center justify-between mb-3 h-[50px] ">
          <span className="text-[1.1rem] font-semibold min-w-[150px]  text-blue-950 h-[50px] flex items-center justify-center   border-r-2 ">
            To:
          </span>
          <input
            onBlur={(e) => {
              if (e.target.value !== "") {
                setDestination([{ location: e.target.value }]);
              } else setDestination([]);
            }}
            className={inputStyles}
            placeholder={placeholders.to}
            ref={dropOffInputRef}
          />
        </div>
      ) : (
        <div className="flex  bg-white shadow-[0_5px_20px_rgb(0,0,0,0.12)] items-center justify-between mb-3 h-[50px] ">
          <span className="text-[1.1rem] font-semibold min-w-[150px] text-blue-950 h-[50px] flex items-center justify-center   border-r-2 ">
            To:
          </span>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={(e) => {
              setValue(e.target.value);
            }}
            className={inputStyles}
            placeholder={placeholders.to}
            ref={dropOffInputRef}
          />

          <Button
            disabled={value === ""}
            className={`   rounded-full m-1 pb-1   px-3  bg-white shadow-[0_5px_20px_rgb(0,0,0,0.12)] w-auto h-[30px] text-orange-500 hover:!text-orange-400 hover:border-none`}
            onClick={() => {
              setDestination([
                ...destination,
                { location: value, stopover: true },
              ]);
              setValue("");
            }}
          >
            Add Stop
          </Button>
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
