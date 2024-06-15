"use client";
/** AddressPage documentation
 */
import { useSearchParams } from "next/navigation";
import { Map } from "@/src/components/Map";
import "./styles.css";

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

  return (
    <div className="AddressPage root">
      {` ${address}, ${city}, ${state} ${zipCode}`}
      <section className="map-container">
        <Map
          crimes={[]}
          foodInspections={[]}
          locationLatLong={{ lat, lon }}
          milesRadius={3}
        />
        <div className="filters">Radius selector</div>
      </section>
      <section className="permits">Search filters controls component</section>
    </div>
  );
}
