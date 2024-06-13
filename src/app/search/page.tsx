"use client"
/** AddressPage documentation
 */
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Map } from "@/src/components/Map";

// import styles from "./styles.css";

export default function Search() {
  const params = useParams()
  console.log("Search", {params})
  // * hooks
  // const hook = () => {};

  // * state
  // const [something, useSomething] = useState(undefined);

  // * useEffects
  // useEffect(() => {
  // first
  // return ({}: AddressPageProps) => {
  // second
  // }
  // }, [third])

  return <div className="AddressPage root">
    SearchResultPage
    {/* <Map
      crimes={[]}
      foodInspections={[]}
      locationLatLong={}
    /> */}
  </div>;
}
