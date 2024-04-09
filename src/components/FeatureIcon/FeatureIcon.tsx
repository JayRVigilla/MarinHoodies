/** FeatureIcon documentation
 * displays the appropriate FontAwesome svg given the prop
 */
import React from "react";
import "./style.css";

import { BedOutlined, BathtubOutlined, PoolOutlined, GarageOutlined } from "@mui/icons-material";

export interface FeatureIconProps {
  "data-test-id"?: string;
  variant: "bed" | "bath" | "pool" | "garage";
  label?: string;
}

export const FeatureIcon = ({ variant, label }: FeatureIconProps) => {
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
