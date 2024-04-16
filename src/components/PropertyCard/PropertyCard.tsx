/** Header documentation
 */
import { tImage } from "@/src/types";
import { FeatureIcon } from "../FeatureIcon";
import "./styles.css";
import HouseIcon from '@mui/icons-material/House';
export interface PropertyCardProps {
  "data-test-id"?: string;
  image?: tImage;
  address: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
}

export const PropertyCard = ({
  image,
  address,
  city,
  bedrooms,
  bathrooms
}: PropertyCardProps) => {

  return (
    <div className="property-card root">
      {image?.src ?
        <img
        src={image.src}
          alt={image.alt} /> :

      <HouseIcon className="img" fontSize="large" />}
    {/* container of icons depicting common features */}

      <div className="detail-icons">
        <FeatureIcon variant="bed" label={bedrooms} />
        <FeatureIcon variant="bath" label={bathrooms} />
        {/* // TODO: dynamically generate other icons */}
      </div>

      <div className="property-details">
        <p className="property-address">{ address.toLowerCase() }</p>
        <p className="property-city-state">{ city.toLowerCase() }</p>
      </div>

  </div>
  );
};
