/** Map documentation
 */
"use client"
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
}

export const Map = () => {
  // * state
  const [crimes, setCrimes] = useState<tCrime[]>([]);

  // * useEffects
  useEffect(() => {
    const fetchCrimes = async () => {
      const data = await getCrimes({$where:"incident_date_time between '2024-04-01T12:00:00' and '2024-04-18T14:00:00'"})
      setCrimes(data)
    }
  fetchCrimes()
  }, [])

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
            longitude={c.longitude}
            latitude={c.latitude}
            incident_street_address={c.incident_street_address}
            incident_city_town={c.incident_city_town}
            crime={c.crime}
            incident_date_time={c.incident_date_time}
          />
    )
  })}
</MapContainer>
  );
};
