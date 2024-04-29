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
  // inspection_results: "Food Semi-yearly Inspection"|"Food Yearly Inspection"|"Food Additional Inspection" | "Food Initial Inspection";
  inspector: string;
  inspector_comments: string;
  inspector_freqeuncy: "Food Semi-yearly Inspection" |"Food Yearly Inspection" | "Food Additional Inspection" | "Food Initial Inspection";
  inspection_description: "Violation(s) Found" | "No Violation(s) Found" | "Only Minor Violation(s) Found";
  is_major_violation: 'yes' | undefined;
  correct_by_date: string;
  corrected_on_site: "No" | "Yes";
  violation_description: string;
  // violation_code: string;
  placard: "GREEN" | "YELLOW" | "RED" | "NA" | " ";

}