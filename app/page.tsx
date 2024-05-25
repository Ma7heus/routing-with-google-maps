"use client";

import { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  useMapsLibrary,
  Pin,
  InfoWindow,
  useMap,
} from "@vis.gl/react-google-maps";

export default function Home() {
  const position = { lat: -27.08784643554507, lng: -52.62937785649191 }; //-27.08784643554507, -52.629377856491914
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={"AIzaSyAE3KzLFrqPK3Qyzsj91d3CHmzJIoscz5A"}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map zoom={9} center={position}>

          <Directions/>
        </Map>
      </div>
    </APIProvider>
  );
}

function Directions(){
  
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
  const [directionsRendere, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();

  useEffect(() => {
    if(!routesLibrary || !map) return;

  }), [routesLibrary, map]

  return null;
}