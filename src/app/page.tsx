"use client"
import "./page.css";
import { getPropertyByAddress } from "../lib/attom";
import { Map } from "../components/Map";
import { PropertySearchForm } from "../components/Forms/PropertySearchForm";
import { CrimeSearchForm } from "../components/Forms/CrimeSearchForm";
import { useState } from "react";
import { tCrime } from "../utils/marinCrimeAPI";

export default function Home() {
  // const data = await getPropertyByAddress({ address1: "50 Elda Dr", address2: "" })
  const [crimes, setCrimes] = useState<tCrime[]>([])
  return (
    <div className="home root">
      <h1>Lauren Ipsom Realty</h1>
      {/* <PropertySearchForm /> */}
      <CrimeSearchForm setCrimes={setCrimes}/>
      <Map crimes={crimes}/>
    </div>
  );
}
