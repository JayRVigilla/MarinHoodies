/** FeatureIcon documentation
 * displays the appropriate FontAwesome svg given the prop
 */
import React, { useEffect, useState } from "react";
import "./style.css";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";

import { faBed, faBathtub, faSwimmingPool, faFan, faCar } from "@fortawesome/free-solid-svg-icons";

export interface FeatureIconProps {
"data-test-id"?: string;
}

export const FeatureIcon = () => {

  return <span className="feature-icon">
    <FontAwesomeIcon
      size="lg"
      icon={faCar}
      // icon={faSwimmingPool}
      // icon={faBed}
      // icon={faBathtub}
    />
  </span>;
};
