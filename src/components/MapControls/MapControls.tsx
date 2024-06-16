/** MapControls documentation
 */
"use client";
import { useCallback, useState } from "react";
import "./styles.css";
import { DateRangeSelector } from "../DateRangeSelector/DateRangeSelector";
import { getFoodInspections } from "@/src/lib/marinFoodInspection";
import { getCrimes } from "@/src/lib/marinCrime";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { Slider } from "@mui/material";
import { DATE_RANGE_OPTIONS, DATE_RANGE_OPTIONS_LABELS } from "@/src/constants";

export interface iMapControlsProps {
  "data-test-id"?: string;
  radius: number;
  setRadius: Dispatch<SetStateAction<number>>;
}

const INITIAL_STATE = {
  dateFilter: DATE_RANGE_OPTIONS[DATE_RANGE_OPTIONS_LABELS.THIRTY_DAYS],
  dateRange: ["", ""],
};

export const MapControls = ({ radius, setRadius }: iMapControlsProps) => {
  const [crimeSelector, setCrimeSelector] = useState(false);
  const [crimeDateRange, setCrimeDateRange] = useState<[string, string]>([
    "",
    "",
  ]);
  const [foodInpectionSelector, setFoodInspectionSelector] = useState(false);
  const [foodInspectionDateRange, setFoodInspectionDateRange] = useState<
    [string, string]
  >(["", ""]);

  return (
    <div className="MapControls root">
      <span className="radius-slider">
        {`${radius} mile${radius > 1 ? "s" : ""} radius from address`}
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
          valueLabelDisplay="on"
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
              checked={foodInpectionSelector}
              onChange={() => setFoodInspectionSelector(!foodInpectionSelector)}
            />
            Health Inspection
          </label>
          {foodInpectionSelector && (
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
