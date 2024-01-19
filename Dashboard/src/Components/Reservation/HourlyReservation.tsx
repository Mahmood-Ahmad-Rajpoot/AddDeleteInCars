import React, { useState, useEffect, useMemo,useRef } from "react";
import { GoogleMap, DirectionsRenderer, useLoadScript } from "@react-google-maps/api";
import { google_map_api_key } from "../../VariablesAndData/googleMapKey";
// import { Button } from "antd";
// import AutoCompletePlaces from "./AutoCompletePlaces";
// import React, { useEffect, useRef, useState } from "react";

import "./Styles.css";
import { Button } from "antd";
import AutoCompletePlaces from "./autoCompletePlaces";
const defaultLocation = { lat: 40.756795, lng: -73.954298 };

let directionsService: any;

const HourlyReservation = () => {
    // const handle = () => {
  //   setStart({ lat: 41.756795, lng: -78.954298 });
  //   setEnd({ lat: 40.756795, lng: -73.954298 });
  // };
  const [start, setStart] = useState( );
  const [end, setEnd] = useState( );
  console.log(start,end,'startend::::::');
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: google_map_api_key,
  });

  const [directions, setDirections] = useState(null);
console.log('directions:',directions);
  useEffect(() => {
    
    console.log('rendered???');
    
 
    if (start && end  ) {
      changeDirection(start, end);
  } else {
      console.error("Invalid origin or destination");
  }
 
   }, [start, end ]);

  const onMapLoad = (map: any) => {
    directionsService = new window.google.maps.DirectionsService();
    // load default origin and destination
     changeDirection(start, end);
  };

 // function that is calling the directions service
const changeDirection = (origin: any, destination: any) => {
  console.log(origin,"origin", destination,"destination");
  
  if (window.google && window.google.maps) {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result: any, status: any) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          // changing the state of directions to the result of direction service
          setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  } else {
    console.error("Google Maps API not available.");
  }
};


  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading...</div>;



  return (
    <div className="flex gap-5">
      <div className="w-1/3">
        <AutoCompletePlaces  setPickUpLocation={setStart || {}} setDropOffLocation={setEnd || {}} />
      </div>
      <div className="w-full">
      <GoogleMap
        center={defaultLocation}
        zoom={10}
        onLoad={(map) => onMapLoad(map)}
        mapContainerStyle={{ height: "400px", width: "800px" }}
      >
        {directions !== null && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
      {/* <Button onClick={()=> setIsRoute(true)}>Change Directions</Button> */}
      </div>
    </div>
  );
};

export default HourlyReservation;

 

// interface dataType {
//   lat: number;
//   lng: number;
// }
// interface AutoCompleteProps {
//   setPickUpLocation: (data: any) => void;
//   setDropOffLocation: (data: any) => void;
//   setRoutes:(isRoute:boolean)=>void
// }
// const AutoCompletePlaces: React.FC<AutoCompleteProps> = ({
//   setPickUpLocation,
//   setDropOffLocation,
//   setRoutes
// }) => {
//    const pickUpInputRef = useRef<any>();
//   const dropOffInputRef = useRef<any>();
// const [start, setStart] = useState({ lat:0, lng:0 }) ; 
// const [end, setEnd] = useState({ lat:0, lng:0 })  ;
// console.log('start:end::',start, end);

// // const [start]
// useEffect(() => {
  
//   const options = {
//     fields: ["address_components", "geometry", "icon", "name"],
//     types: ["geocode", "establishment"],
//   };
//   const pickUpAutoComplete = new window.google.maps.places.Autocomplete(
//     pickUpInputRef.current,
//     options
//     );
 
// console.log('run once?');
//   pickUpAutoComplete.addListener("place_changed", async () => {
//     const place = await pickUpAutoComplete.getPlace();
//     if (place.geometry && place.geometry.location) {
//       const lat = place.geometry.location.lat();
//       const lng = place.geometry.location.lng();
//       if (!isNaN(lat) && !isNaN(lng)) {
//         setStart({ lat, lng });
//       } else {
//         console.error("Invalid coordinates");
//       }
//     }
//   });
  
//    const dropOffAutoComplete = new window.google.maps.places.Autocomplete(
//     dropOffInputRef.current,
//     options
//   );

//   dropOffAutoComplete.addListener("place_changed", async () => {
//     const place = await dropOffAutoComplete.getPlace();
//     if (place.geometry && place.geometry.location) {
//       const lat = place.geometry.location.lat();
//       const lng = place.geometry.location.lng();
//       if (!isNaN(lat) && !isNaN(lng)) {
//         setEnd({ lat, lng });
//       } else {
//         console.error("Invalid coordinates");
//       }
//     }
//   });
// }, [start, end]);

//   return (
//     <div>
//       <label className="text-[1rem] font-semibold mb-3">Enter Pick Up Point</label>
//       <input
//         className="border-2  px-3 rounded-lg h-[50px] w-full focus:!border-blue-500 mb-5"
//         placeholder="Enter PickUp Location"
//         ref={pickUpInputRef}
//       />
//       <label className="text-[1rem] font-semibold mb-3">Enter Drop Off Point</label>
//       <input
//         className="border-2 mb-5 px-3 rounded-lg h-[50px] w-full focus:!border-blue-500"
//         placeholder="Enter DropOff Location"
//         ref={dropOffInputRef}
//       />
//       <Button className="bg-blue-600 text-white w-full" onClick={()=>{
//         setPickUpLocation(start)
//         setDropOffLocation(end)
//         setRoutes(true)
//       }}>Start Journey</Button>
//     </div>
//   );
// };

 