"use client";
/** AddressPage documentation
 */
import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Map } from "@/src/components/Map";
import "./styles.css";

// import styles from "./styles.css";

export default function Search() {
  // * hooks
  const params = useSearchParams();
  const lon = parseFloat(params?.get("lon")!);
  const lat = parseFloat(params?.get("lat")!);

  const address = params?.get("address");
  const city = params?.get("city");
  const state = params?.get("state");
  console.log("Search", { lon, lat, address, city, state });

  // * state
  const [permits, setPermits] = useState(undefined);

  // * useEffects
  useEffect(() => {
    if (permits) return;
    // TODO: make API calls for Permits with given address
  }, [permits]);

  return (
    <div className="AddressPage root">
      SearchResultPage
      <section className="map-container">
        <Map crimes={[]} foodInspections={[]} locationLatLong={{ lat, lon }} />
        <div className="filters">Search filter component</div>
      </section>
      <section className="permits">show Permit data here</section>
    </div>
  );
}
