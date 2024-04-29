"use client"
import "./page.css";
import { Map } from "../components/Map";
import { CrimeSearchForm } from "../components/Forms/CrimeSearchForm";
import { useState } from "react";
import { tCrime } from "../utils/marinCrimeAPI";

export default function Home() {
  const [crimes, setCrimes] = useState<tCrime[]>([])
  return (
    <div className="home root">
      <h1>Lauren Ipsom Realty</h1>
      <CrimeSearchForm setCrimes={setCrimes} />
      <div className="map-container">
        <Map crimes={crimes}/>
      </div>
    </div>
  );
}
