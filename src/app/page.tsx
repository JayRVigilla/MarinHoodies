"use client";
import { Landscape } from "@mui/icons-material";
import "./page.css";
import { Map } from "../components/Map";
import { useState } from "react";
import {
  iCrimeLocationMarker,
  iFoodInspectionMarker,
} from "../components/Map/Marker/types";
import { PropertySearchForm } from "../components/PropertySearchForm";
import { tCoordsObject } from "../constants";
import { Logo } from "../components/Logo";

export default function Home() {
  // const [crimes, setCrimes] = useState<iCrimeLocationMarker[]>([])
  // const [foodInspections, setFoodInspections] = useState<iFoodInspectionMarker[]>([])
  // const [locationLatLong, setLocationLatLong] = useState<tCoordsObject>()

  return (
    <div className="home root">
      <Logo />
      <div className="into-content">
        <p>Welcome to MarinHoodies!</p>
        <p>We are sharing information about Marin County to make your search for a home or rental bsed on real data from county services. </p>
        <p>Start by entering the address below to see a map and relevant permit data for the address</p>
      </div>

      <PropertySearchForm
      // setLocationLatLong={(setLocationLatLong)}
      // setFoodInspections={(setFoodInspections)}
      // setCrimes={(setCrimes)}
      />
      {/* <div className="map-container">

        {locationLatLong && <Map
          crimes={crimes}
          foodInspections={foodInspections}
          locationLatLong={locationLatLong}
        />}

      </div> */}
    </div>
  );
}
