/** MapControls documentation
 */
"use client";
import { useEffect, useState } from "react";
import "./styles.css";
import { DateRangeSelector } from "../DateRangeSelector/DateRangeSelector";
import { getFoodInspections } from "@/src/lib/marinFoodInspection";
import { getCrimes } from "@/src/lib/marinCrime";
import { Dispatch, SetStateAction } from "react";
import { Slider } from "@mui/material";
import {
  iCrimeLocationMarker,
  iFoodInspectionMarker,
} from "../Map/Marker/types";

export interface iMapControlsProps {
  "data-test-id"?: string;
  radius: number;
  setRadius: Dispatch<SetStateAction<number>>;
  setCrimes: Dispatch<SetStateAction<iCrimeLocationMarker[]>>;
  setFoodInspections: Dispatch<SetStateAction<iFoodInspectionMarker[]>>;
  crimeSelector: boolean;
  setCrimeSelector: Dispatch<SetStateAction<boolean>>;
  foodInspectionSelector: boolean;
  setFoodInspectionSelector: Dispatch<SetStateAction<boolean>>;
}

type tStringTuple = [string, string];

export const MapControls = ({
  radius,
  setRadius,
  setCrimes,
  setFoodInspections,
  crimeSelector,
  setCrimeSelector,
  foodInspectionSelector,
  setFoodInspectionSelector,
}: iMapControlsProps) => {
  
  const [crimeDateRange, setCrimeDateRange] = useState<tStringTuple>(["", ""]);
  const [foodInspectionDateRange, setFoodInspectionDateRange] =
    useState<tStringTuple>(["", ""]);

  useEffect(() => {
    // search for crimes when there is a date range or it changes
    const fetchAndSetCrimes = async () => {
      const crimes = await getCrimes({ dateRange: crimeDateRange });
      if (crimes?.length) {
        setCrimes(crimes);
      }
    };

    if (crimeDateRange[0] && crimeDateRange[1]) {
      fetchAndSetCrimes();
    }
  }, [crimeDateRange]);

  useEffect(() => {
    // search for food inspection when there is a date range or it changes
    const fetchAndSetFoodInspection = async () => {
      const foodInspections = await getFoodInspections({
        dateRange: foodInspectionDateRange,
      });

      if (foodInspections?.length) {
        setFoodInspections(foodInspections);
      }
    };
    if (foodInspectionDateRange[0] && foodInspectionDateRange[1]) {
      fetchAndSetFoodInspection();
    }
  }, [foodInspectionDateRange]);

  return (
    <div className="MapControls root">
      <span className="radius-slider">
        {`Show ${radius} mile${radius > 1 ? "s" : ""} radius from address`}
        <Slider
          name="miles-radius"
          min={0}
          max={5}
          size="medium"
          value={radius}
          defaultValue={radius}
          onChange={(event: Event, value) => {
            setRadius(value as number);
          }}
        />
      </span>

      <section className="data-selectors">
        <p>Choose the information you would like to see</p>

        <div className="selectors crime-selection">
          <label htmlFor="crime-checkbox">
            <input
              type="checkbox"
              name="crime-checkbox"
              checked={crimeSelector}
              onChange={() => setCrimeSelector(!crimeSelector)}
            />
            Crime
          </label>
          {crimeSelector && (
            <DateRangeSelector
              dateRange={crimeDateRange}
              setDateRange={setCrimeDateRange}
            />
          )}
        </div>

        <div className="selectors food-inspection-selection">
          <label htmlFor="food-inspection-checkbox">
            <input
              type="checkbox"
              name="food-inspection-checkbox"
              checked={foodInspectionSelector}
              onChange={() =>
                setFoodInspectionSelector(!foodInspectionSelector)
              }
            />
            Health Inspection
          </label>
          {foodInspectionSelector && (
            <DateRangeSelector
              dateRange={foodInspectionDateRange}
              setDateRange={setFoodInspectionDateRange}
            />
          )}
        </div>
      </section>
    </div>
  );
};
