import { useState, useEffect } from "react";
import "./Styles.css";
import { google_map_api_key } from "../../VariablesAndData/googleMapKey";
import {
  GoogleMap,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";
import { getDistanceTime } from "./getDistanceTime";
import DrivingModesButton from "./DrivingModesButton";
import DistanceTime from "./DistanceTime";
import Autocomplete from "./AutomComplete";
import { Spin } from "antd";
interface ObjectTypes {
  location: string;
  stopover: boolean;
}
const defaultLocation = { lat: 40.756795, lng: -73.954298 };
const libraries: any[] = ["places"];
interface HourlyProps {
  hourlyLocal: string;
  isShowMap: boolean;
  placeHolders:any
}
const Reservation: React.FC<HourlyProps> = ({ hourlyLocal, isShowMap, placeHolders }) => {
  const [destination, setDestination] = useState<ObjectTypes[]>([]);
  const [directions, setDirections] = useState<any>(null);
  const [details, setDetails] = useState<any>({ distance: null, time: null });
  const [origin, setOrigin] = useState<string>();
  //  console.log("destination:", destination);
  // console.log("directions:", directions);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: google_map_api_key,
    libraries: libraries,
  });
  const [mode, setMode] = useState("driving");

  useEffect(() => {
    if (
      window.google &&
      window.google.maps &&
      origin &&
      destination &&
      destination.length > 0
    ) {
      const directionsService = new window.google.maps.DirectionsService();
      const Driving = window.google.maps.TravelMode.DRIVING;
      const Walking = window.google.maps.TravelMode.WALKING;
      const Bicycling = window.google.maps.TravelMode.BICYCLING;
      const Transit = window.google.maps.TravelMode.TRANSIT;
      const request: google.maps.DirectionsRequest = {
        origin: origin,
        waypoints: destination,
        destination: destination[destination.length - 1]?.location,
        travelMode:
          mode === "driving"
            ? Driving
            : mode === "walking"
            ? Walking
            : mode === "bicycling"
            ? Bicycling
            : Transit,
      };
      directionsService.route(request, (response: any, status: any) => {
        if (status === "OK") {
          setDirections(response);
          const { formatedDistance, formattedTime } = getDistanceTime(
            response.routes[0].legs
          );
          setDetails({ formatedDistance, formattedTime });
        }
      });
    } else {
      setDirections(null);
    }
  }, [origin, destination, mode]);

  // const onMapLoad = () => {
  //   //  directionsService = new window.google.maps.DirectionsService();
  // };

  if (loadError) return <h1>Error loading Map</h1>
  if (!isLoaded) return <div className="w-full flex h-[20vh] bg-[lightgrey] justify-center items-center">  <Spin /></div>

  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-5 ">
      <div className={`${isShowMap ? "w-1/2" : "w-full"} `}>
        <Autocomplete
        placeholders={placeHolders}
          HourlyLocal={hourlyLocal}
          setOrigin={setOrigin}
          destination={destination}
          setDestination={setDestination}
        />
      </div>
      <div className={`${isShowMap ? ' w-1/2  ' : ' hidden '}`}>
        {isShowMap && (
          <>
            <GoogleMap
              center={defaultLocation}
              zoom={10}
              // onLoad={() => onMapLoad()}
              mapContainerStyle={{ height: "400px", width: "800px" }}
            >
              {directions !== null && (
                <DirectionsRenderer directions={directions} />
              )}
            </GoogleMap>
            {destination.length > 0 && (
              <DrivingModesButton mode={mode} setMode={setMode} />
            )}
          </>
        )}

        {/* Distance and time showing component  */}
        {destination.length > 0 && <DistanceTime details={details} />}
      </div>
    </div>
  );
};

export default Reservation;
