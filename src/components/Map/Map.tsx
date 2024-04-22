/** Map documentation
 */
// "use client"
import React, { useEffect, useState } from "react";

import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css" // !! leaflet CSS: REQUIRED.
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { CrimeMarker } from "./Marker/Marker";

import { getCrimes } from "@/src/lib/marinCrime";
import { tCrime } from "@/src/utils/marinCrimeAPI";

import "./styles.css";

export interface MapProps {
  "data-test-id"?: string;
  crimes: tCrime[];
}

export const Map = ({ crimes }: MapProps) => {
  // * state
  // const [crimes, setCrimes] = useState<tCrime[]>([]);


  return (
    <MapContainer
      className="map root"
      center={[37.97, -122.60]}
      zoom={11}
      scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
      {crimes.length && crimes.map(c => {
        if(c?.longitude && c?.latitude)
        return (
          <CrimeMarker
            type="crime"
            longitude={c.longitude}
            latitude={c.latitude}
            incident_street_address={c.incident_street_address}
            incident_city_town={c.incident_city_town}
            crime={c.crime}
            incident_date_time={c.incident_date_time}
            key={c.unique_id}
          />
    )
  })}
</MapContainer>
  );
};
