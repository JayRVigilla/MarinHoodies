/** Map documentation
 */
// "use client"
import React from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css" // !! leaflet CSS: REQUIRED.
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { CrimeMarker, RestaurantMarker } from "./Marker/Marker";

import { tCrime } from "@/src/utils/marinCrimeAPI";

import "./styles.css";
import { iFoodInspectionMarker } from "./Marker/types";

export interface MapProps {
  "data-test-id"?: string;
  crimes: tCrime[];
  foodInspections: iFoodInspectionMarker[]
}

type tCoordsObject = {
  lat: string;
  lon: string;
}

const kinrossCords:tCoordsObject = {
  lat: "37.9765779",
  lon: "-122.4893974",
}
const millerCords: tCoordsObject = {
  lat: "37.3009732",
  lon: "-122.01531605",
}
const coordsObjToLatLngExp = (coords: tCoordsObject) => {
  return [parseFloat(coords.lat), parseFloat(coords.lon)] as LatLngExpression
}


const homeCords: tCoordsObject = {lat: "38.0067892", lon: "-122.5599277"}
// const homeCords: LatLngExpression = [38.0067892, -122.5599277]

export const Map = ({ crimes, foodInspections }: MapProps) => {
  return (
    <MapContainer
      className="map root"
      // centered on "Marin County center"
      // center={[37.97, -122.60]}
      // zoom={11}

      // centered on address, without marker
      center={coordsObjToLatLngExp(homeCords)}
      zoom={15}
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
      {foodInspections.length && foodInspections.map(fi => {
        if(fi?.longitude && fi?.latitude)
        return (
          < RestaurantMarker
            type="food-inspection"
            business_name={fi.business_name}
            formatted_address={fi.formatted_address}
            latitude={fi.latitude}
            longitude={fi.longitude}
            inspection_date={fi.inspection_date}
            inspection_type={fi.inspection_type}
            inspector={fi.inspector}
            inspector_comments={fi.inspector_comments}
            inspector_freqeuncy={fi.inspector_freqeuncy}
            inspection_description={fi.inspection_description}
            is_major_violation={fi.is_major_violation}
            correct_by_date={fi.correct_by_date}
            corrected_on_site={fi.corrected_on_site}
            violation_description={fi.violation_description}
            placard={fi.placard}
          />
        )
      })}
</MapContainer>
  );
};
