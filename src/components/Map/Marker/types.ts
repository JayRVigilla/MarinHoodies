export interface iLocationMarker {
  type: "crime"| "ems" | "food-inspection" | "park-ranger" | "max-min"
  longitude: number;
  latitude: number;
}

export interface iCrimeLocationMarker extends iLocationMarker {
  crime: string;
  incident_street_address: string;
  incident_city_town: string;
  incident_date_time: string;
  unique_id: string;
}
export interface iFoodInspectionMarker extends iLocationMarker {
  business_name: string;
  formatted_address: string;
  inspection_date: string;
  inspection_type: "Routine" | "Follow-up";
  inspector: string;
  inspector_comments: string;
  inspector_freqeuncy: "Food Semi-yearly Inspection" |"Food Yearly Inspection" | "Food Additional Inspection" | "Food Initial Inspection";
  inspection_description: "Violation(s) Found" | "No Violation(s) Found" | "Only Minor Violation(s) Found";
  is_major_violation: 'yes' | undefined;
  correct_by_date: string;
  corrected_on_site: "No" | "Yes";
  violation_description: string;
  placard: "GREEN" | "YELLOW" | "RED" | "NA" | " ";
  business_id: string;
  row_id: string
}

export interface iFoodInspectionAPIInspection {
business_name: string;
license_number: string;
inspection_date: string;
placard: string;
formatted_address: string;
inspection_id: string;
violation_id: string;
business_city: string;
business_postal_code: string;
inspection_type: string;
inspection_frequency: string;
inspector: string;
inspector_comments: string;
inspection_result:string;
inspection_description:string;
correct_by_date:string;
corrected_on_site:string;
violation_description:string;
is_major_violation:string;
violation_code:string;
business_id:string;
businessaddress: {
    latitude: string;
    longitude: string;
    human_address: string;
},
placard_id: string;
row_id: string;
  ":@computed_region_6s5y_serh": string;
}

export interface iEMSMarker extends iLocationMarker {
  unique_id: string;
  incident_number: string;
  incident_address_reporting: string;
  incident_city: string;
  injury_place: string;
  time_call_was_received: string;
  time_vehicle_was_dispatched: string;
  time_vehicle_was_en_route_to_scene: string;
  time_arrived_at_patient: string;
  patient_age: string;
  patient_gender: string;
  disposition: string;
  transported_to_destination: string;
}