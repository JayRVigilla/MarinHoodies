"use client";
/** AddressPage documentation
 */
import { useSearchParams } from "next/navigation";
import { Map } from "@/src/components/Map";
import "./styles.css";
import { Slider } from "@mui/material";
import { useState } from "react";

export default function Search() {
  // extract data from query string
  const params = useSearchParams();

  const lon = parseFloat(params?.get("lon")!);
  const lat = parseFloat(params?.get("lat")!);

  const address = params?.get("address");
  const city = params?.get("city");
  const state = params?.get("state");
  const zipCode = params?.get("zipCode");
  console.log("Search", { lon, lat, address, city, state });

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
        <section className="filters">
          Map Control: Radius selector

          <Slider
            min={0}
            max={5}
            size="medium"
            value={radius}
            defaultValue={radius}
            onChange={(event: MouseEvent) => {
              console.log("slider", event)
              setRadius(event?.target?.value);
            }}
            valueLabelDisplay="on"
          />

          <section className="permits">
            Search filters controls component
          </section>
        </section>
      </section>
    </div>
  );
}
