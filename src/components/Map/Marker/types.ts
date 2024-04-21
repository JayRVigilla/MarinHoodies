export interface iLocationMarker {
  type: "crime"| "ems" | "health-inspection" | "park-ranger"
  longitude: string;
  latitude: string;
}

export interface tCrimeLocationMarker extends iLocationMarker {
  crime: string;
  incident_street_address: string;
  incident_city_town: string;
  incident_date_time: string;
}