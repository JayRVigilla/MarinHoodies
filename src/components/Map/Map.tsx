/** Map documentation
 */
"use client"
import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css" // !! leaflet CSS: REQUIRED.
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { CrimeMarker, MaxMinMarker, RestaurantMarker } from "./Marker/Marker";

import "./styles.css";
import { iCrimeLocationMarker, iFoodInspectionMarker } from "./Marker/types";
import { Marker } from 'react-leaflet'
import { calcMaxMinLatLongCorners, coordsObjToLatLngExp } from "@/src/utils";
import { tCoordsObject } from "@/src/constants";
import { PanOptions } from "leaflet";


export interface MapProps {
  "data-test-id"?: string;
  crimes: iCrimeLocationMarker[];
  foodInspections: iFoodInspectionMarker[];
  locationLatLong: tCoordsObject;
}


export const Map = ({
  crimes,
  foodInspections,
  locationLatLong }: MapProps) => {
    const maxMins = locationLatLong ? calcMaxMinLatLongCorners(locationLatLong) : undefined

    const MapInstance = () => {

      const map = useMap()

      const panOptions: PanOptions = {
        animate: true,
        duration: 1,
      }

      // animates the change of address
      useEffect(() => {
        map.panTo(coordsObjToLatLngExp(locationLatLong), panOptions)
      },[locationLatLong])
      return null
    }


    return (
      <MapContainer
        className="Map root"
        // centered on address, without marker
        center={coordsObjToLatLngExp(locationLatLong)}
        zoom={15}
        scrollWheelZoom={false}>
        <MapInstance />
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Target Address Marker */}
        {locationLatLong && maxMins && <Marker
          position={coordsObjToLatLngExp(locationLatLong)}>

          {/* DEV use: shows lat/long boundaries */}
          {/* TODO: Turn this into a Pane */}
        {maxMins.length && maxMins.map(coord => {
          return (
            <MaxMinMarker
              longitude={coord.lon}
              latitude={coord.lat}
              type="max-min"
              key={`${coord.lon}-${coord.lat}`}
          />)
        })}

        </Marker>}

        {crimes.length && crimes.map(c => {
          if(c?.longitude && c?.latitude)
          return (
            <CrimeMarker
              // type="crime"
              type={c.type}
              longitude={c.longitude}
              latitude={c.latitude}
              incident_street_address={c.incident_street_address}
              incident_city_town={c.incident_city_town}
              crime={c.crime}
              incident_date_time={c.incident_date_time}
              unique_id={c.unique_id}
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
              business_id={fi.business_id}

            />
          )
        })}
  </MapContainer>
    );
};
