"use client";
/** AddressPage documentation
 */
import { useSearchParams } from "next/navigation";
import { Map } from "@/src/components/Map";
import "./styles.css";
import { useState } from "react";
import { MapControls } from "@/src/components/MapControls/MapControls";
import {
  iCrimeLocationMarker,
  iFoodInspectionMarker,
} from "@/src/components/Map/Marker/types";

export default function Search() {
  // extract data from query string
  const params = useSearchParams();

  const lon = parseFloat(params?.get("lon")!);
  const lat = parseFloat(params?.get("lat")!);

  const address = params?.get("address");
  const city = params?.get("city");
  const state = params?.get("state");
  const zipCode = params?.get("zipCode");

  // component state
  const [radius, setRadius] = useState(3);
  const [crimes, setCrimes] = useState<iCrimeLocationMarker[]>([]);
  const [foodInspections, setFoodInspections] = useState<
    iFoodInspectionMarker[]
  >([]);

  const [showCrimes, setShowCrimes] = useState(false);

  const [showFoodInspections, setShowFoodInspections] = useState(false);


  if (typeof window !== undefined) {
    return (
    <div className="AddressPage root">
      {` ${address}, ${city}, ${state} ${zipCode}`}
      <section className="map-container">
        <Map
          crimes={showCrimes ? crimes : []}
          foodInspections={showFoodInspections ? foodInspections: []}
          locationLatLong={{ lat, lon }}
          milesRadius={radius}
        />

        <div className="controls">
          <MapControls
            radius={radius}
            setRadius={setRadius}
            setCrimes={setCrimes}
            setFoodInspections={setFoodInspections}
            crimeSelector={showCrimes}
            setCrimeSelector={setShowCrimes}
            foodInspectionSelector={showFoodInspections}
            setFoodInspectionSelector={setShowFoodInspections}
          />
        </div>
      </section>
    </div>
  )};
}
