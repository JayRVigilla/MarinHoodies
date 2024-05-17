"use client"
import "./page.css";
import { Map } from "../components/Map";
import { useState } from "react";
import { iCrimeLocationMarker, iFoodInspectionMarker } from "../components/Map/Marker/types";
import { PropertySearchForm } from "../components/PropertySearchForm";
import { tCoordsObject } from "../constants";


export default function Home() {
  const [crimes, setCrimes] = useState<iCrimeLocationMarker[]>([])
  const [foodInspections, setFoodInspections] = useState<iFoodInspectionMarker[]>([])
  const [locationLatLong, setLocationLatLong] = useState<tCoordsObject>()

  return (
    <div className="home root">
      <h1>Lauren Ipsom Realty</h1>
      {/* TODO: explain the premise */}
      <div className="into-content">
        
      </div>

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
