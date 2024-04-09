/** FeatureIcon documentation
 * displays the appropriate FontAwesome svg given the prop
 */
import React, { useEffect, useState } from "react";
import "./style.css";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";

import { faBed, faBathtub, faSwimmingPool, faFan, faCar } from "@fortawesome/free-solid-svg-icons";


export interface FeatureIconProps {
  "data-test-id"?: string;
  variant: "bed" | "bath" | "pool";
  label: string;
}

export const FeatureIcon = ({variant,label}: FeatureIconProps) => {
  const variantToIcon = {
    bed: faBed,
    bath: faBathtub,
    pool: faSwimmingPool
}
  return (
    <span className="feature-icon-container">
  <span className="feature-icon">
    <FontAwesomeIcon
      size="lg"
      icon={variantToIcon[variant]}
      color="blue"
      />
    </span>
      <span>{label}</span>
    </span>
  )
};
