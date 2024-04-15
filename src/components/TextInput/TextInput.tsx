/** TextInput documentation
 */
import React, { Dispatch, useEffect, useState } from "react";

import "./styles.css";

export interface TextInputProps {
  "data-test-id"?: string;
  placeholder?: string;
  value: string;
  label: string;
  setValue: Dispatch<string>
}

export const TextInput = ({placeholder, value, setValue, label}: TextInputProps) => {

  return (
    <span className="text-input">
      <label>{label}</label>
      <input
        aria-label={`${label} field`}
        type="text"
        placeholder={placeholder ?? ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </span>
  );
};
