/* global google */
import { useState, useEffect } from "react";
import "./Styles.css";

import { google_map_api_key } from "../../VariablesAndData/googleMapKey";
import AutoCompletePlaces from "./AutoCompletePlaces";
import {
  GoogleMap,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";
import { Button } from "antd";

const defaultLocation = { lat: 40.756795, lng: -73.954298 };
const libraries: any[] = ["places"];

const Map = () => {
  // variable
  // let directionsService: any;

  // states
  const [directions, setDirections] = useState<any>(null);
  const [details, setDetails] = useState<any>(null);
  const [origin, setOrigin] = useState<string>();
  const [destination, setDestination] = useState<string>();
  // redux store locationSlice
  // const { originLocation: origin, destinationLocation: destination } = useSelector(
  //   (store: any) => store.locationSlice
  // );

  // map loader
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: google_map_api_key,
    libraries: libraries,
  });
  const [mode, setMode] = useState("driving");

  // useEffect
  useEffect(() => {
    if (window.google && window.google.maps && origin && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      const Driving = window.google.maps.TravelMode.DRIVING;
      const Walking = window.google.maps.TravelMode.WALKING;
      const Bicycling = window.google.maps.TravelMode.BICYCLING;
      const Transit = window.google.maps.TravelMode.TRANSIT;

      const request: google.maps.DirectionsRequest = {
        origin: origin,
        destination: destination,
        travelMode:
          mode === "driving"
            ? Driving
            : mode === "walking"
            ? Walking
            : mode === "bicycling"
            ? Bicycling
            : Transit,
      };
      directionsService.route(request, (response: any, status) => {
        if (status === "OK") {
          console.log(response);
          setDirections(response);
          setDetails(response.routes[0].legs[0]);
        }
      });
    } else {
      // Clear directions if origin or destination is not available
      setDirections(null);
    }
  }, [origin, destination, mode]);

  // on load method
  const onMapLoad = () => {
    // const directionsService = new window.google.maps.DirectionsService();
  };

  // loading map
  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading...</div>;

  // return
  return (
    <div className="flex flex-row gap-5 ">
      <div className="w-1/3">
        <AutoCompletePlaces
          setOrigin={setOrigin}
          setDestination={setDestination}
        />
      </div>
      <div className="w-full  ">
        <GoogleMap
          center={defaultLocation}
          zoom={10}
          onLoad={() => onMapLoad()}
          mapContainerStyle={{ height: "400px", width: "800px" }}
        >
          {directions !== null && (
            <DirectionsRenderer directions={directions} />
          )}
        </GoogleMap>
        <div className="flex gap-3 mt-3">
          <Button
            type="link"
            className={`${mode === "driving" && "border-blue-600 bg-blue-200"}`}
            onClick={() => setMode("driving")}
          >
            Driving
          </Button>
          <Button
            type="link"
            className={`${mode === "walking" && "border-blue-600 bg-blue-200"}`}
            onClick={() => setMode("walking")}
          >
            Walking
          </Button>
          <Button
            type="link"
            className={`${
              mode === "bicycling" && "border-blue-600 bg-blue-200"
            }`}
            onClick={() => setMode("bicycling")}
          >
            Bicycling
          </Button>
          <Button
            type="link"
            className={`${
              mode === "transit" && "border-blue-600 bg-blue-200"
            }`}
            onClick={() => setMode("transit")}
          >
            Transit
          </Button>
        </div>
        {details !== null && (
          <div className="flex gap-3">
            <span>
              <h1>{details.distance.text}</h1>
            </span>
            <span>
              <h1>{details.duration.text}</h1>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
