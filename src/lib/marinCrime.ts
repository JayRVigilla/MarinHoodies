import { MARIN_CRIME_BASE_URL } from "../utils/marinCrimeAPI";


export type tCrimeQueries = {
  crime?: string;
  crime_class?: string;
  incident_city_town?: string;
  incident_city_town_mapping?: string;
  $where?: string;
}

/**
 * query strings seem to take limit & offset for pagination
 *
 *
 */

export const getCrimes = async (queries: tCrimeQueries) => {
  try {
    const url = `${MARIN_CRIME_BASE_URL}?${new URLSearchParams(queries)}`
    console.log("getCrimes", url)
    const data = fetch(url)
    // const data = fetch(`${MARIN_CRIME_BASE_URL}?${new URLSearchParams(queries)}`)
      .then(res => res.json())
      .then(res => {
        return res
      })
    return data
  } catch (error) {
    console.error(`ERROR getCrimes(${queries}): ${error}`)
  }
}