/** Header documentation
 */
import React, { useEffect, useState } from "react";

import "./styles.css";

export interface PropertyCardProps {
"data-test-id"?: string;
}

export const PropertyCard = () => {
  // * hooks
  // const hook = () => {};

  // * state
  // const [something, useSomething] = useState(undefined);

  // * useEffects
  // useEffect(() => {
  // first
  // return ({}: PropertyCardProps) => {
  // second
  // }
  // }, [third])

  return <figure className="property-card root">
    <a>
      <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="white and brown concrete building under blue sky during daytime" />

      {/* container of icons depicting common features */}
      <div className="detail-icons">Icons representing Br/BA/ etc</div>

      <figcaption className="property-details">
        <p className="property-price">price</p>
        <p className="property-address">PropertyCard Address</p>
        <p className="property-city-state">City, State</p>
      </figcaption>

    </a>
  </figure>;
};
