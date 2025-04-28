"use client";
import { useState } from "react";
import { DATE_RANGE_OPTIONS, DATE_RANGE_OPTIONS_LABELS } from "@/src/constants";
import { subDays } from "date-fns";
import { DatePicker } from "../DatePicker";
import { DropdownSelector } from "../DropdownSelector";
import { Dispatch, SetStateAction } from "react";
import "./styles.css";

interface tProps {
  // dateFilter: string | number;
  // setDateFilter: Dispatch<SetStateAction<string | number >>;
  dateRange: [string, string];
  setDateRange: Dispatch<SetStateAction<[string, string]>>;
}

export const DateRangeSelector = ({
  // dateFilter,
  // setDateFilter,
  dateRange,
  setDateRange,
}: tProps) => {
  const [dateFilter, setDateFilter] = useState(
    DATE_RANGE_OPTIONS[DATE_RANGE_OPTIONS_LABELS.THIRTY_DAYS],
  );
  return (
    <span className="DateRangeSelector date-range">
      <DropdownSelector
        label="date range"
        value={dateFilter}
        onChange={(event) => {
          const value = event.target.value;
          setDateFilter(value);
          // handle 30/60/90 day Date Range selection
          if (value && typeof DATE_RANGE_OPTIONS[value] !== "string") {
            const min = subDays(Date.now(), DATE_RANGE_OPTIONS[value] as number)
              .toISOString()
              .slice(0, -1);
            const max = new Date(Date.now()).toISOString().slice(0, -1);

            setDateRange([min, max]);
          }
        }}
        options={Object.values(DATE_RANGE_OPTIONS_LABELS)}
      />

      {dateFilter === DATE_RANGE_OPTIONS_LABELS.CUSTOM && (
        <span className="date-group">
          <DatePicker
            label="min"
            value={dateRange[0]}
            onChange={(event) => {
              setDateRange([event.target.value, dateRange[1]]);
            }}
          />
          <DatePicker
            label="max"
            value={dateRange[1]}
            onChange={(event) => {
              setDateRange([dateRange[0], event.target.value]);
            }}
          />
        </span>
      )}
    </span>
  );
};
