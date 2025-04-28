/** Button documentation
 */
import { ReactNode } from "react";
import "./styles.css";

export interface iButtonProps {
  "data-test-id"?: string;
  child?: ReactNode;
  label?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button = ({
  child,
  label,
  onClick,
  disabled = false,
}: iButtonProps) => {
  return (
    <button
      className="button root"
      aria-label={label}
      tabIndex={0}
      disabled={disabled}
      onClick={onClick}
    >
      {child}
      {label}
    </button>
  );
};
