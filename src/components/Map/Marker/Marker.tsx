/** Marker documentation
 */

import { LocalPolice } from "@mui/icons-material";
import { Marker, Popup } from 'react-leaflet'
import { renderToStaticMarkup } from "react-dom/server";
import startCase from "lodash/startCase"
import { CRIME_ABBREVIATION_TO_DESCRIPTION, TOWN_ABBREVIATION_TO_NAME } from "@/src/utils/marinCrimeAPI";
import { DivIcon } from "leaflet";
import "./styles.css"
import { tCrimeLocationMarker } from "./types";

export interface iMarkerProps {
"data-test-id"?: string;
}

/**
 * TODO:
 * - CrimeMarker goes Navy
 * - CommuteMarker - change color as the time increases, stop light colors
 * - InspectionMarker - find Icon for Restaurant Health
 * - EMSMarker - Red Hospital Cross on a white field
 * - ParkRangerMarker -
 */

export const CrimeMarker = ({ longitude, latitude, incident_street_address, incident_city_town, crime, incident_date_time }: tCrimeLocationMarker) => {

  const crimeMarkerIcon = new DivIcon({
    html: renderToStaticMarkup(<LocalPolice/>),
    iconSize: [14, 14],
    className: "marker-icon-crime"
    });


  return (
    <Marker
      icon={crimeMarkerIcon}
      position={[parseFloat(latitude), parseFloat(longitude)]}>
      <Popup>
          {CRIME_ABBREVIATION_TO_DESCRIPTION[crime] ?
            startCase(CRIME_ABBREVIATION_TO_DESCRIPTION[crime].toLowerCase()) :
            startCase(crime.toLowerCase())}
          <br />
          {incident_date_time ? new Date(incident_date_time).toLocaleString() : "No Timestamp"}
          <br />
          {startCase(incident_street_address.toLowerCase())}, {TOWN_ABBREVIATION_TO_NAME[incident_city_town] ?
            startCase(TOWN_ABBREVIATION_TO_NAME[incident_city_town].toLowerCase()) :
            startCase(incident_city_town.toLowerCase())}
      </Popup>
    </Marker>
  )
}
