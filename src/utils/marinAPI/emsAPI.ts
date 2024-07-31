import { ISOStringFormat } from "date-fns";
import { tObjectStringToString, tObjectStringToStringArray } from "../../types";

export const MARIN_EMS_BASE_URL =
  "https://data.marincounty.org/resource/swth-izpe.json";

export type tEMS = {
  incident_number: string;
  time_call_was_received: string;
  time_vehicle_was_dispatched: string;
  time_vehicle_was_en_route_to_scene: string;
  time_arrived_at_patient: string;
  incident_address_reporting: string;
  incident_city: string;
  incident_zip_postal: string;
  incident_county: string;
  primary_impression: string;
  injury_primary: string;
  injury_place: string;
  protocol_used: string;
  patient_age: string;
  patient_gender: string;
  patient_home_county: string;
  gender: string;
  disposition: string;
  transported_to_destination: string;
  location_1: {
    latitude: string;
    longitude: string;
  };
  latitude: string;
  longitude: string;
  unique_id: string;
  ":@computed_region_6s5y_serh": string;
  ":@computed_region_tuu7_u9kx": string;
  ":@computed_region_bgqc_3apt": string;
  ":@computed_region_nyxm_p3bi": string;
  ":@computed_region_3c6h_y28d": string;
  ":@computed_region_jtc3_wrg6": string;
};
