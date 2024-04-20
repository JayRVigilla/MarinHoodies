/** Marker documentation
 */

import { LocalPolice } from "@mui/icons-material";
import { Marker, Popup } from 'react-leaflet'
import { renderToStaticMarkup } from "react-dom/server";
import startCase from "lodash/startCase"
import { CRIME_ABBREVIATION_TO_DESCRIPTION, TOWN_ABBREVIATION_TO_NAME } from "@/src/utils/marinCrimeAPI";
import { DivIcon } from "leaflet";

export interface MarkerProps {
"data-test-id"?: string;
}

export type tCrimeLocationMarker = {
  longitude: string;
  latitude: string;
  incident_street_address: string;
  incident_city_town: string;
  crime: string;
  incident_date_time: string;
}


export const CrimeMarker = ({ longitude, latitude, incident_street_address, incident_city_town, crime, incident_date_time }: tCrimeLocationMarker) => {

  const crimeMarkerIcon = new DivIcon({
    html: renderToStaticMarkup(<LocalPolice />),
    iconSize: [14, 14]
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
