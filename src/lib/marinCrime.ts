import { MARIN_CRIME_BASE_URL } from "../utils/marinCrimeAPI";


export type tCrimeQueries = {
  crime?: string;
  crime_class?: string;
  incident_city_town?: string;
  incident_city_town_mapping?: string;
}

export const getCrimes = async (queries: tCrimeQueries) => {
  try {
    const data = fetch(`${MARIN_CRIME_BASE_URL}?${new URLSearchParams(queries)}`)
      .then(res => res.json())
      .then(res => {
        return res
      })
    // console.log("getCrimes", data)
    return data
  } catch (error) {
    console.error(`ERROR getCrimes(${queries}): ${error}`)
  }
}