import { iFoodInspectionAPIInspection, iFoodInspectionMarker } from "../components/Map/Marker/types";
import { MARIN_FOOD_INSPECTION_BASE_URL } from "../utils/marinAPI/marinFoodInspectionAPI";

export type tFoodInspectionQueries = string

export const getFoodInspections = async (queries: tFoodInspectionQueries) => {
  try {
    // TODO: queries should be object, create $where string here

    /**
     * TODO:
     * cityName used in 'upper(business_city) = cityName.toUppercase()
     * default date range set to 90 days
     *
     */
    const url = `${MARIN_FOOD_INSPECTION_BASE_URL}?$where=${queries}`
    const data = fetch(url)
      .then(response => response.json())
      .then(res => {
        const result: iFoodInspectionMarker[] = []

        for (let inspection of res) {
          const newMarkerData: iFoodInspectionMarker = {
            type: "food-inspection",
            business_name: inspection.business_name,
            formatted_address: inspection.formatted_address,
            latitude: inspection.businessaddress.latitude,
            longitude:inspection.businessaddress.longitude,
            inspection_date: inspection.inspection_date,
            inspection_type: inspection.inspection_type,
            inspector: inspection.inspector,
            inspector_comments: inspection.inspector_comments,
            inspector_freqeuncy: inspection.inspection_frequency,
            inspection_description: inspection.inspection_description,
            is_major_violation: inspection.is_major_violation,
            correct_by_date: inspection.correct_by_date,
            corrected_on_site: inspection.corrected_on_site,
            violation_description: inspection.violation_description,
            placard: inspection.placard,
          }
          result.push(newMarkerData)
        }

        return result
      })

    return data
  } catch (error) {
    console.error(`ERROR getFoodInspection (${queries}): ${error}`)
  }
}