/** Header documentation
 */
import { tImage } from "@/src/types";
import { FeatureIcon } from "../FeatureIcon";
import "./styles.css";

export interface PropertyCardProps {
  "data-test-id"?: string;
  price: string;
  image: tImage;
  address: string;
  city: string;
  state: string;
  bedrooms: string;
  bathrooms: string;
}

export const PropertyCard = ({
  price,
  image,
  address,
  city,
  state,
  bedrooms,
  bathrooms
}: PropertyCardProps) => {

  return <figure className="property-card root">
    <a>
      <img
        src={image.src}
        alt={image.alt} />

      {/* container of icons depicting common features */}
      <div className="detail-icons">
        <FeatureIcon variant="bed" label={bedrooms} />
        <FeatureIcon variant="bath" label={bathrooms} />
        {/* // TODO: dynamically generate other icons */}
      </div>

      <figcaption className="property-details">
        <p className="property-price">${ price }</p>
        <p className="property-address">{ address }</p>
        <p className="property-city-state">{ `${city}, ${state}` }</p>
      </figcaption>

    </a>
  </figure>;
};
