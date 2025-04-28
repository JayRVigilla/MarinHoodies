/** DropdownSelector documentation
 */
import { ChangeEvent } from "react";
import "./styles.css";
import startCase from "lodash/startCase";

export interface DropdownSelectorProps {
  "data-test-id"?: string;
  label?: string;
  options: string[];
  value: string | undefined | number;
  onChange: (val: ChangeEvent<HTMLSelectElement>) => void;
}

export const DropdownSelector = ({
  value,
  onChange,
  label,
  options,
}: DropdownSelectorProps) => {
  return (
    <span className="dropdown-selector root">
      <label>{startCase(label)}</label>
      <select
        aria-label={label}
        tabIndex={0}
        onChange={(val) => onChange(val)}
        value={value}
      >
        {options?.length &&
          [undefined, ...options].map((option) => {
            return (
              <option value={option} key={option ?? "undefined"}>
                {startCase(option?.toLowerCase())}
              </option>
            );
          })}
      </select>
    </span>
  );
};
