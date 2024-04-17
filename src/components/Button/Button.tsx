/** Button documentation
 */
import { ReactNode } from "react";
import "./styles.css";


export interface ButtonProps {
  "data-test-id"?: string;
  child?: ReactNode;
  label?: string;
}

export const Button = ({child, label}: ButtonProps) => {

  return (
    <button className="button root"
      onClick={() => { }}>
          {child}
          {label}
        </button>
  );
};
