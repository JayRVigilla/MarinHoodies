/** Marker documentation
 */

import {
  LocalDiningOutlined,
  LocalPolice
} from "@mui/icons-material";
import { Marker, Popup } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import startCase from "lodash/startCase";
import {
  CRIME_ABBREVIATION_TO_DESCRIPTION,
  TOWN_ABBREVIATION_TO_NAME,
} from "@/src/utils/marinAPI/marinCrimeAPI";
import { DivIcon } from "leaflet";
import "./styles.css";
import {
  iCrimeLocationMarker,
  iFoodInspectionMarker,
  iLocationMarker,
} from "./types";

export interface iMarkerProps {
  "data-test-id"?: string;
}

/**
 * TODO:
 * - CommuteMarker - change color as the time increases, stop light colors
 * - EMSMarker - Red Hospital Cross on a white field
 * - ParkRangerMarker -
 */

export const CrimeMarker = ({
  longitude,
  latitude,
  incident_street_address,
  incident_city_town,
  crime,
  incident_date_time,
  // unique_id,
}: iCrimeLocationMarker) => {
  const crimeMarkerIcon = new DivIcon({
    html: renderToStaticMarkup(<LocalPolice />),
    iconSize: [18, 18],
    className: "marker-icon-crime",
  });

  return (
    <Marker icon={crimeMarkerIcon} position={[latitude, longitude]}>
      <Popup>
        {CRIME_ABBREVIATION_TO_DESCRIPTION[crime]
          ? startCase(CRIME_ABBREVIATION_TO_DESCRIPTION[crime].toLowerCase())
          : startCase(crime.toLowerCase())}
        <br />
        {incident_date_time
          ? new Date(incident_date_time).toLocaleString()
          : "No Timestamp"}
        <br />
        {startCase(incident_street_address.toLowerCase())},{" "}
        {TOWN_ABBREVIATION_TO_NAME[incident_city_town]
          ? startCase(
              TOWN_ABBREVIATION_TO_NAME[incident_city_town].toLowerCase()
            )
          : startCase(incident_city_town.toLowerCase())}
      </Popup>
    </Marker>
  );
};

export const RestaurantMarker = ({
  business_name,
  formatted_address,
  latitude,
  longitude,
  inspection_date,
  inspection_type,
  inspector,
  inspector_comments,
  inspector_frequency,
  inspection_description,
  is_major_violation,
  correct_by_date,
  corrected_on_site,
  violation_description,
  placard,
}: iFoodInspectionMarker) => {
  // const markerIcon = (placard: string): DivIcon => {
  const markerIcon = (): DivIcon => {
    return new DivIcon({
      html: renderToStaticMarkup(<LocalDiningOutlined />),
      iconSize: [18, 18],
      className: `marker-icon-health-inspection ${placard.toLowerCase()}`,
    });
  };

  return (
    <Marker icon={markerIcon()} position={[latitude, longitude]}>
      <Popup>
        {startCase(business_name?.toLowerCase())}
        <br />
        {startCase(formatted_address.toLowerCase())}
        <hr />
        Inspected by {startCase(inspector.toLowerCase())}
        <br />
        {inspection_type}(
        {is_major_violation ? "Major violation" : "Not a major violation"}):{" "}
        {inspection_date} - {inspector_frequency}
        Correct by: {correct_by_date}
        <br />
        {inspection_description}: {violation_description}
        Corrected on site? {corrected_on_site}
        {inspector_comments}
        <br />
      </Popup>
    </Marker>
  );
};

export const MaxMinMarker = ({
  latitude,
  longitude,
  // type = "max-min",
}: iLocationMarker) => {
  return <Marker opacity={0.4} position={[latitude, longitude]}></Marker>;
};
