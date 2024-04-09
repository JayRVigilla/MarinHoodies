/** FeatureIcon documentation
 * displays the appropriate FontAwesome svg given the prop
 */
import "./style.css";

import { BedOutlined, BathtubOutlined, PoolOutlined, GarageOutlined } from "@mui/icons-material";

export interface FeatureIconProps {
  "data-test-id"?: string;
  variant: "bed" | "bath" | "pool" | "garage";
  label?: string;
}

export const FeatureIcon = ({ variant, label }: FeatureIconProps) => {
  const variantToIcon = {
    bed: <BedOutlined fontSize="medium"   />,
    bath: <BathtubOutlined fontSize="medium" />,
    pool: <PoolOutlined fontSize="medium" />,
    garage: <GarageOutlined fontSize="medium" />,
  }

  return (
    <span className="feature-icon-container">
      <span className="feature-icon">{variantToIcon[variant]}</span>
      {label && <span className="label">{label}</span>}
    </span>
  )
};
