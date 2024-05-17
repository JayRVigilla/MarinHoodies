"use client"
import "./page.css";
import { Map } from "../components/Map";
import { useEffect, useState } from "react";
import { getFoodInspections } from "../lib/marinFoodInspection";
import { iCrimeLocationMarker, iFoodInspectionMarker } from "../components/Map/Marker/types";
import { PropertySearchForm } from "../components/Forms/PropertySearchForm";
import { homeCords, tCoordsObject } from "../constants";
import { subDays } from 'date-fns';


export default function Home() {
  const [crimes, setCrimes] = useState<iCrimeLocationMarker[]>([])
  const [foodInspections, setFoodInspections] = useState<iFoodInspectionMarker[]>([])
  const [locationLatLong, setLocationLatLong] = useState<tCoordsObject>()

  // useEffect(() => {
  //   const min = subDays(Date.now(), 90).toISOString().slice(0, -1)
  //   const max = new Date(Date.now()).toISOString().slice(0, -1)

  //   const fetchFoodInspections = async() => {
  //     const data = await getFoodInspections({
  //       dateRange: [min, max],
  //       focalLatLong: [homeCords.lat, homeCords.lon]
  //     })
  //     if(data) setFoodInspections(data)
  //   }
  //   if (crimes.length) fetchFoodInspections()
  // },[crimes])

  return (
    <div className="home root">
      <h1>Lauren Ipsom Realty</h1>
      <PropertySearchForm
        setLocationLatLong={setLocationLatLong}
        setFoodInspections={setFoodInspections}
        setCrimes={setCrimes}
      />
      <div className="map-container">

        {locationLatLong && <Map
          crimes={crimes}
          foodInspections={foodInspections}
          locationLatLong={locationLatLong}
        />}

      </div>
    </div>
  );
}
