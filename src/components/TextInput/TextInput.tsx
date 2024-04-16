/** TextInput documentation
 */
import React, { Dispatch } from "react";
import "./styles.css";

import camelCase from "lodash/camelCase"
import startCase from "lodash/startCase"

export interface TextInputProps {
  "data-test-id"?: string;
  placeholder?: string;
  value: string;
  label: string;
  setValue: Dispatch<string>;
  darkMode?: boolean;
}

export const TextInput = ({placeholder, value, setValue, label, darkMode = false}: TextInputProps) => {
  const camelLabel = camelCase(label)

  return (
    <span className={`text-input ${darkMode ? "dark-mode" : '' }`}>
      <label htmlFor={camelLabel}>{startCase(label)}</label>
      <input
        aria-label={`${label} field`}
        type="text"
        placeholder={placeholder ?? ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name={camelLabel}
        id={camelLabel}
      />
    </span>
  );
};
