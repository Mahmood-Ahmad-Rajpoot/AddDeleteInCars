/* global google */
import   { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";
import { google_map_api_key } from "../../VariablesAndData/googleMapKey";
// import { Button } from "antd";
// import AutoCompletePlaces from "./AutoCompletePlaces";
// import React, { useEffect, useRef, useState } from "react";

import "./Styles.css";
import { Button } from "antd";
// import AutoCompletePlaces from "./AutoCompletePlaces";
import { useDispatch, useSelector } from "react-redux";
import { setLocations } from "../../features/locationSlice";
const defaultLocation = { lat: 40.756795, lng: -73.954298 };

let directionsService: any;
const libraries: any[] = ["places"];

const HourlyReservation = () => {
  // const [start, setStart] = useState();
  // const [end, setEnd] = useState();
  const { startLocation: start, endLocation: end } = useSelector(
    (store: any) => store.locationSlice
  );

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: google_map_api_key,
    libraries: libraries,
  });
  // let distance = 0
  const [directions, setDirections] = useState(null);
  console.log("directions:", directions);
  useEffect(() => {
    if (start && end) {
     
      changeDirection(start, end);
    } else {
      console.error("Invalid origin or destination");
    }
  }, [start, end]);

  const onMapLoad = ( ) => {
    directionsService = new window.google.maps.DirectionsService();
    // load default origin and destination
    changeDirection(start, end);
  };

  // function that is calling the directions service
  const changeDirection = (origin: any, destination: any) => {
 
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
            console.log(result,"direction");
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
        <AutoCompletePlaces />
      </div>
      <div className="w-full">
        <GoogleMap
          center={defaultLocation}
          zoom={10}
          onLoad={( ) => onMapLoad()}
          mapContainerStyle={{ height: "400px", width: "800px" }}
        >
          {directions !== null && (
            <DirectionsRenderer directions={directions} />
          )}
        </GoogleMap>
        {/* <div className="rounded-full border bg-[lightgrey] font-bold w-[100px] h-[100px]">
            {distance / 1000}Km  
        </div> */}
       </div>
    </div>
  );
};

export default HourlyReservation;

const AutoCompletePlaces = () => {
  const dispatch = useDispatch();
  const pickUpInputRef = useRef<any>();
  const dropOffInputRef = useRef<any>();
  const [start, setStart] = useState({});
  const [end, setEnd] = useState({});
 
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
  }, [start, end]);

  return (
    <div className="w-full">
      <label className="text-[1rem] font-semibold mb-3">
        Enter Pick Up Point
      </label>
      <input
        className="border-2  px-3 rounded-lg h-[50px] w-full focus:!border-blue-500 mb-5"
        placeholder="Enter PickUp Location"
        ref={pickUpInputRef}
      />
      <label className="text-[1rem] font-semibold mb-3">
        Enter Drop Off Point
      </label>
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
