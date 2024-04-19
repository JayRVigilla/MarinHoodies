/** Map documentation
 */
"use client"
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css" // !! leaflet CSS: REQUIRED.
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

import { getCrimes } from "@/src/lib/marinCrime";
import startCase from "lodash/startCase"
import "./styles.css";
import { CRIME_ABBREVIATION_TO_DESCRIPTION, TOWN_ABBREVIATION_TO_NAME, tCrime } from "@/src/utils/marinCrimeAPI";

type tCrimeLocationMarker = {
  longitude: string;
  latitude: string;
  incident_street_address: string;
  incident_city_town: string;
  crime: string;
  incident_date_time: string;
}

const CrimeMarker = ({ longitude, latitude, incident_street_address, incident_city_town, crime, incident_date_time }: tCrimeLocationMarker) => {
  
  return(
  <Marker position={[parseFloat(latitude), parseFloat(longitude)]}>
    <Popup>
        {CRIME_ABBREVIATION_TO_DESCRIPTION[crime] ?
          startCase(CRIME_ABBREVIATION_TO_DESCRIPTION[crime].toLowerCase()) :
          startCase(crime.toLowerCase())}
        <br />
        {incident_date_time ? new Date(incident_date_time).toLocaleString() : "No Timestamp"}
        <br />
        {startCase(incident_street_address.toLowerCase())}, {TOWN_ABBREVIATION_TO_NAME[incident_city_town] ?
          startCase(TOWN_ABBREVIATION_TO_NAME[incident_city_town].toLowerCase()) :
          startCase(incident_city_town.toLowerCase())}
    </Popup>
    </Marker>
  )
}
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
      // console.log("*Map*", data)
    }
  fetchCrimes()
  }, [])
//
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
  {/* <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker> */}
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
