/* global google */
import{   useState } from "react";
 import {
  GoogleMap,DirectionsRenderer ,
  useLoadScript,
  Marker,
  
} from "@react-google-maps/api";
import "./Styles.css";
 
import { google_map_api_key } from "../../VariablesAndData/googleMapKey";
import { customMarker } from "./customIcon";
import AutoCompletePlaces from "./AutoCompletePlaces";
    
// Define libraries as a constant outside the component
const libraries: any[] = ["places"];
 
const Map = () => {
  // const [value, setValue] = useState<any>();
 const [pickUpLocation, setPickUpLocation] = useState<any>(null)
const [dropOffLocation, setDropOffLocation] = useState<any>(null)
 
  
  const [mapRef, setMapRef] = useState([]);
  const [markers, setMarkers] = useState<any[]>([  ]);
  const onMapClick = (e: any) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
  };
  const onMapLoad = (map: any) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

 
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: google_map_api_key,
    libraries: libraries, // Use the constant here
  });

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="w-full flex gap-5 ">
      <div className="w-1/3">
        <AutoCompletePlaces  />
      </div>
      <div className="w-full">
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          onLoad={(map) => onMapLoad(map)}
          onClick={onMapClick}
          zoom={10}
        >
 
          {markers?.map((mark: any, index: number) => (
            <Marker
              key={index}
              icon={customMarker}
              position={{ lat: mark.lat, lng: mark.lng }}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
};

export default Map;

 