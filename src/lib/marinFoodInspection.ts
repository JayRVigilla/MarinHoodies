import { iFoodInspectionMarker } from "../components/Map/Marker/types";
import { calcMaxMinLatLong } from "../utils";
import { dateRangeClean, iBetweenProps, whereString } from "../utils/marinAPI";
import { MARIN_FOOD_INSPECTION_BASE_URL } from "../utils/marinAPI/marinFoodInspectionAPI";

export type tFoodInspectionProps = {
  dateRange: [string, string]; // [MinISOString, MaxISOString]
  focalLatLong: [number, number]; // [lat,long] float strings
}

export const getFoodInspections = async (queries: tFoodInspectionProps) => {
  try {
    /**
     * TODO:
     * cityName used in 'upper(business_city) = cityName.toUppercase()
     * default date range set to 90 days
     *
     */
    const {dateRange, focalLatLong} = queries

    const qStrings: string[] = []


    const dateProps: iBetweenProps = {
      max: dateRangeClean(dateRange[1]),
      min: dateRangeClean(dateRange[0]),
      param: "inspection_date",
    }

    const maxMinLatLong = calcMaxMinLatLong({
      lat:focalLatLong[0],
      lon:focalLatLong[1],
    })

    const latProps: iBetweenProps = {
      max: maxMinLatLong.max[0].toString(),
      min: maxMinLatLong.min[0].toString(),
      param: "businessaddress.latitude",
    }

    const longProps: iBetweenProps = {
      max: maxMinLatLong.max[1].toString(),
      min: maxMinLatLong.min[1].toString(),
      param: "businessaddress.longitude",
    }

    qStrings.push(whereString.betweenISOStrings(dateProps))

    const props = [latProps, longProps]
    props.forEach(prop => {
      qStrings.push(whereString.betweenNums(prop))
    })

    const selects = [
      "business_name",
      "formatted_address",
      "businessaddress",
      "inspection_date",
      "inspection_type",
      "inspector",
      "inspector_comments",
      "inspection_frequency",
      "inspection_description",
      "is_major_violation",
      "correct_by_date",
      "corrected_on_site",
      "violation_description",
      "placard",
      "business_id"
    ]


    const url = `${MARIN_FOOD_INSPECTION_BASE_URL}?$select=${selects.join(", ")}&$where=${qStrings.join(" AND ")}`
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
            business_id: inspection.business_id,
          }
          result.push(newMarkerData)
        }

        return result
      })

    return data
  } catch (error) {
    console.error(`ERROR getFoodInspection (${JSON.stringify(queries)}): \n** ${error}`)
  }
}