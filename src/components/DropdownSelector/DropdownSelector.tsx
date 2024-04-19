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
    <>
    <label>{label}</label>
    <select className="DropdownSelector root"
      aria-label={label}
      tabIndex={0}
      >

        {options.map(option => {
          return <option value={option} key={option}>{startCase(option)}</option>
        })}
      </select>
    </>
  );
};
