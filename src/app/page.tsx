"use client";
import "./page.css";
import { PropertySearchForm } from "../components/PropertySearchForm";
import { Logo } from "../components/Logo";

export default function Home() {

  return (
    <div className="home root">
      <div className="into-content">
        <p>Welcome to MarinHoodies!</p>
        <p>We are sharing information about Marin County to make your search for a home or rental based on real data from county services. </p>
        <p>Start by entering the address below to see a map and relevant permit data for the address</p>
      </div>

      <PropertySearchForm />
    </div>
  );
}
