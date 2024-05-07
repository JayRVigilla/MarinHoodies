import { tObjectStringToString } from "../types";
import { validQueries } from "../utils/api";
import { MARIN_CRIME_BASE_URL } from "../utils/marinAPI/marinCrimeAPI";


export type tCrimeQueries = {
  crime?: string;
  crime_class?: string;
  incident_city_town?: string;
  incident_city_town_mapping?: string;
  $where?: string;
  dateRange: [string, string]; // [MinISOString, ISOString]
  focalLatLong: [number, number]; // [lat,long]
}

/**
 * query strings seem to take limit & offset for pagination
 *
 *
 */

export const getCrimes = async (queries: tCrimeQueries) => {
  try {
    // const url = `${MARIN_CRIME_BASE_URL}?${validQueries(queries)}`

    const qStrings: string[] = []
    const url = `${MARIN_CRIME_BASE_URL}?$where${""}`
    // console.log("getCrimes: ", {url})

// latitude > 38 AND latitude < 38.1
// latitude > 38 AND latitude < 38.1

    const data = fetch(url)
    .then(response => response.json())
    .then(result => {
      return result
    })
    return data
  } catch (error) {
    console.error(`ERROR getCrimes(${queries}): ${error}`)
  }
}