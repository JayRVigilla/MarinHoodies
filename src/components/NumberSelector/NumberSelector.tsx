/** NumberSelector documentation
 */
import React, { Dispatch } from "react";
import "./styles.css";
import camelCase from "lodash/camelCase"

export interface NumberSelectorProps {
  "data-test-id"?: string;
  placeholder?: string;
  value: number | undefined;
  label: string;
  setValue: Dispatch<number>;
  darkMode?: boolean;
  maxValue?: number;
}

export const NumberSelector = ({
  placeholder,
  value,
  setValue,
  label,
  maxValue,
  darkMode = false
}: NumberSelectorProps) => {
  const camelLabel = camelCase(label)

  return (
    <div className={`number-selector ${darkMode ? "dark-mode" : '' }`}>
      <label htmlFor={camelLabel}>{label}</label>
      <span className="button-box">
        <button onClick={() => {setValue( (value ?? 0 ) -1 )}}>-</button>
        <input
          aria-label={`${label} field`}
          type="number"
          placeholder={placeholder ?? ""}
          value={value}

          name={camelLabel}
          id={camelLabel}
          min="0"
          max={maxValue ?? ""}
          />
        <button onClick={() => {setValue( (value ?? 0) + 1 )}}>+</button>

      </span>
    </div>
  );
};
