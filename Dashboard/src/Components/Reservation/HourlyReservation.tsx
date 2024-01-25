import { useState, useEffect } from "react";
import "./Styles.css";
import { google_map_api_key } from "../../VariablesAndData/googleMapKey";
import {
  GoogleMap,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";
import AddStops from "./AddStops";

const defaultLocation = { lat: 40.756795, lng: -73.954298 };
const libraries: any[] = ["places"];

const HourlyReservation = () => {
  // let directionsService: any;

  const [directions, setDirections] = useState<any>(null);
  const [details, setDetails] = useState<any>(null);
  const [origin, setOrigin] = useState<string>();
  const [destination, setDestination] = useState<any[]>([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: google_map_api_key,
    libraries: libraries,
  });

  useEffect(() => {
    if (
      window.google &&
      window.google.maps &&
      origin &&
      destination &&
      destination.length > 0
    ) {
      const directionsService = new window.google.maps.DirectionsService();

      const request: google.maps.DirectionsRequest = {
        origin: origin,
        waypoints: destination,
        destination: destination[destination.length - 1]?.location,
        travelMode: window.google.maps.TravelMode.DRIVING,
      };
      directionsService.route(request, (response: any, status: any) => {
        if (status === "OK") {
          setDirections(response);
          setDetails(response.routes[0].legs[0]);
        }
      });
    } else {
      setDirections(null);
    }
  }, [origin, destination]);

  const onMapLoad = () => {
    //  directionsService = new window.google.maps.DirectionsService();
  };

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex flex-row gap-5 ">
      <div className="w-1/3">
        <AddStops
          setOrigin={setOrigin}
          destination={destination}
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
        {details !== null && (
          <div className="flex gap-5">
            <span className=" border-1 rounded-xl">
              <h1 className="text-[1.2rem] font-semibold">
                {details.distance.text}
              </h1>
            </span>
            <span className=" border-1 rounded-xl">
              <h1 className="text-[1.2rem] font-semibold">
                {details.duration.text}
              </h1>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HourlyReservation;
