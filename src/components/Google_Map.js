import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function GMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if (!isLoaded) return <div>Loading....</div>
  return <Map/>
}

function Map() {

  const center = useMemo(() => ({lat:44, lng:-80}),[]);

  return <GoogleMap zoom={10} center={center} mapContainerClassName="map-contatiner">
    <MarkerF position={center} />
  </GoogleMap>
}
