export interface iLocationMarker {
  type: "crime"| "ems" | "food-inspection" | "park-ranger"
  longitude: string;
  latitude: string;
}

export interface iCrimeLocationMarker extends iLocationMarker {
  crime: string;
  incident_street_address: string;
  incident_city_town: string;
  incident_date_time: string;
}
export interface iFoodInspectionMarker extends iLocationMarker {
  business_name: string;
  formatted_address: string;
  // business_city: string;
  latitude: string, // floats as strings
  longitude: string, // floats as strings
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
inspection_result:string
inspection_description:string
correct_by_date:string
corrected_on_site:string
violation_description:string;
is_major_violation:string
violation_code:string
business_id:string
businessaddress: {
    latitude: string;
    longitude: string;
    human_address: string;
},
placard_id: string;
row_id: string;
  ":@computed_region_6s5y_serh": string;
}
