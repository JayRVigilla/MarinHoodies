/** FeatureIcon documentation
 * displays the appropriate FontAwesome svg given the prop
 */
import React, { ReactNode, useEffect, useState } from "react";
import "./style.css";
// import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";

// import { faBed, faBathtub, faSwimmingPool, faFan, faCar, faHouse } from "@fortawesome/free-solid-svg-icons";
import { BedOutlined, BathtubOutlined, PoolOutlined, GarageOutlined } from "@mui/icons-material";

export interface FeatureIconProps {
  "data-test-id"?: string;
  variant: "bed" | "bath" | "pool" | "garage";
  label?: string;
}

export const FeatureIcon = ({ variant, label }: FeatureIconProps) => {
  const iconProps = {
    fontSize: "large"
  }
  const variantToIcon = {
    bed: <BedOutlined fontSize="large"   />,
    bath: <BathtubOutlined fontSize="large" />,
    pool: <PoolOutlined fontSize="large" />,
    garage: <GarageOutlined fontSize="large" />,
  }

  return (
    <span className="feature-icon-container">
      <span className="feature-icon">{variantToIcon[variant]}</span>
      {label && <span className="label">{label}</span>}
    </span>
  )
};
