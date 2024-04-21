/** DropdownSelector documentation
 */
import { ReactNode } from "react";
import "./styles.css";
import startCase from "lodash/startCase"

export interface DropdownSelectorProps {
  "data-test-id"?: string;
  label?: string;
  options: string[];
}

export const DropdownSelector = ({ label, options}: DropdownSelectorProps) => {

  return (
    <span className="dropdown-selector root">
      <label>{label}</label>
      <select
        aria-label={label}
        tabIndex={0}
        >

          {options.map(option => {
            return <option value={option} key={option}>{startCase(option)}</option>
          })}
        </select>
    </span>
  );
};
