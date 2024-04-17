/** NumberSelector documentation
 */
import React, { Dispatch } from "react";
import "./styles.css";
import camelCase from "lodash/camelCase"
import startCase from "lodash/startCase"
import { Add, Remove } from "@mui/icons-material";

export interface NumberSelectorProps {
  "data-test-id"?: string;
  placeholder?: string;
  value: number | undefined;
  label: string;
  setValue: Dispatch<number>;
  darkMode?: boolean;
  minValue?: number;
  maxValue?: number;
}

export const NumberSelector = ({
  placeholder,
  value,
  setValue,
  label,
  minValue=0,
  maxValue,
  darkMode = false
}: NumberSelectorProps) => {
  const camelLabel = camelCase(label)

  return (
    <div className={`number-selector ${darkMode ? "dark-mode" : '' }`}>
      <label htmlFor={camelLabel}>{startCase(label)}</label>
      <span className="button-box">
        <button onClick={(event) => {
          event.preventDefault()
          setValue((value ?? 0) - 1)
        }}>
          <Remove />
        </button>
        <input
          aria-label={`${label} field`}
          type="number"
          placeholder={placeholder ?? ""}
          value={value}

          name={camelLabel}
          id={camelLabel}
          min={minValue}
          max={maxValue ?? ""}
          />
        <button onClick={(event) => {
          event.preventDefault()
          setValue((value ?? 0) + 1)
        }}>
          <Add />
        </button>

      </span>
    </div>
  );
};
