/** DatePicker documentation
 */
import { ChangeEvent } from "react";
import "./styles.css";
import startCase from "lodash/startCase";

export interface DatePickerProps {
  "data-test-id"?: string;
  label?: string;
  value: string | undefined;
  min?: string; // ISO String date
  max?: string; // ISO String date
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DatePicker = ({
  value,
  onChange,
  label,
  max = new Date(Date.now()).toISOString().slice(0, 10),
  min = new Date(0).toISOString().slice(0, 10),
}: DatePickerProps) => {
  return (
    <span className="date-picker root">
      <label>{startCase(label)}</label>
      <input
        type="date"
        aria-label={label}
        tabIndex={0}
        onChange={(event) => onChange(event)}
        value={value}
        min={min}
        max={max}
      />
    </span>
  );
};
