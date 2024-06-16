"use client";
/** AddressPage documentation
 */
import { useSearchParams } from "next/navigation";
import { Map } from "@/src/components/Map";
import "./styles.css";
import { useState } from "react";
import { MapControls } from "@/src/components/MapControls/MapControls";

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
  return (
    <div className="AddressPage root">
      {` ${address}, ${city}, ${state} ${zipCode}`}
      <section className="map-container">
        <Map
          crimes={[]}
          foodInspections={[]}
          locationLatLong={{ lat, lon }}
          milesRadius={radius}
        />

        <div className="controls">
          <MapControls radius={radius} setRadius={setRadius} />
        </div>
      </section>
    </div>
  );
}
