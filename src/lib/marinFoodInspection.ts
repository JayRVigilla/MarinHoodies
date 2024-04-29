import { MARIN_FOOD_INSPECTION_BASE_URL } from "../utils/marinFoodInspectionAPI";

export type tFoodInspectionQueries = string

export const getFoodInspections = async (queries: tFoodInspectionQueries) => {
  try {
    const url = `${MARIN_FOOD_INSPECTION_BASE_URL}?$where=${queries}`
    const data = fetch(url)
      .then(response => response.json())
      .then(result => { return result })

    return data
  } catch (error) {
    console.error(`ERROR getFoodInspection (${queries}): ${error}`)
  }
}