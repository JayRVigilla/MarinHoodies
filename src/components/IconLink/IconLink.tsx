/** IconLink documentation
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface IconLinkProps {
  "data-test-id"?: string;
  href: string;
  label: string;
  icon: IconDefinition;
}

export const IconLink = ({
  href,
  label,
  icon,
  "data-test-id": dataTestId,
}: IconLinkProps) => {
  return (
    <span className="root">
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        key={`link-${label}`}
        aria-label={label}
        data-test-id={dataTestId}
        className="root"
      >
        <span className="label">{label}</span>
        <FontAwesomeIcon icon={icon} />
      </a>
    </span>
  );
};
