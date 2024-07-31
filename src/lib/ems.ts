import { dateRangeClean, iBetweenProps, whereString } from "../utils/marinAPI";
import { iEMSMarker } from "../components/Map/Marker/types";
import { MARIN_EMS_BASE_URL, tEMS } from "../utils/marinAPI/emsAPI";

export type tCrimeQueries = {
  $where?: string;
  dateRange: [string, string]; // [MinISOString, MaxISOString]
  // focalLatLong?: [number, number]; // [lat,long] float strings
};

export const getEMS = async (queries: tCrimeQueries) => {
  try {
    const { dateRange } = queries;

    const qStrings: string[] = [];

    const dateProps: iBetweenProps = {
      min: dateRangeClean(dateRange[0]),
      max: dateRangeClean(dateRange[1]),
      param: "incident_date_time",
    };

    qStrings.push(whereString.betweenISOStrings(dateProps));

    const selects = [
      "longitude",
      "latitude",
      "unique_id",
      "incident_number",
      "incident_address_reporting",
      "incident_city",
      "injury_place",

      "time_call_was_received",
      "time_vehicle_was_dispatched",
      "time_vehicle_was_en_route_to_scene",
      "time_arrived_at_patient",

      "patient_age",
      "patient_gender",

      "disposition",
      "transported_to_destination",
    ];

    const url = `${MARIN_EMS_BASE_URL}?$select=${selects.join(", ")}&$where=${qStrings.join(" AND ")}`;

    const data: Promise<iEMSMarker[]> = fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const ems: iEMSMarker[] = [];
        result.forEach((d: tEMS) => {
          ems.push({
            type: "ems",
            ...d,
            longitude: parseFloat(d.longitude!),
            latitude: parseFloat(d.latitude!),
          });
        });

        return ems;
      });
    return data;
  } catch (error) {
    console.error(`ERROR getEMS(${queries}): ${error}`);
  }
};
